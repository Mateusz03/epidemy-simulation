module.exports.startSimulation = async (data) => {
  let simulationData = {
    simulationName: data[0].param,
    simulationParameters: data,
    data: [],
  };

  const Mortality = parseInt(data[4].param);
  const MortalityTime = parseInt(data[8].param);
  const RecoveryChance = parseInt(data[6].param);
  const RecoveryTime = parseInt(data[7].param);
  const InfectionChance = parseInt(data[5].param);
  const Reproduction = parseInt(data[3].param);

  let Dead = 0;
  let Recovery = 0;
  let Infected = parseInt(data[2].param);
  let Population = parseInt(data[1].param) - Infected;

  const PopulationInfected = () => {
    if (Population - Infected * Reproduction <= 0) {
      if (Population > 0) Infected += Population;
      Population = 0;
    } else {
      if (Math.floor(Math.random() * 100 + 1) <= InfectionChance) {
        let v = Infected * Reproduction - Infected;
        Infected = Infected * Reproduction;
        Population = Population - v;
      }
    }
  };
  const DeadPeople = (i) => {
    if (i >= MortalityTime) {
      if (
        Infected - simulationData.data[i - MortalityTime].PopulationInfected <=
        0
      ) {
        if (Infected > 0) Dead += Infected;
        Infected = 0;
      } else {
        if (
          Math.floor(Math.random() * 100 + 1) <= Mortality &&
          simulationData.data[i - MortalityTime]
        ) {
          const NoPeople =
            simulationData.data[i - MortalityTime].PopulationInfected;
          Dead += NoPeople;
          Infected -= NoPeople;
        }
      }
    }
  };
  const RecoveredPeople = (i) => {
    if (i >= RecoveryTime) {
      if (
        Infected - simulationData.data[i - RecoveryTime].PopulationInfected <=
        0
      ) {
        if (Infected > 0) Dead += Infected;
        Infected = 0;
      } else {
        if (
          Math.floor(Math.random() * 100 + 1) <= RecoveryChance &&
          simulationData.data[i - RecoveryTime]
        ) {
          const NoPeople =
            simulationData.data[i - RecoveryTime].PopulationInfected;
          Recovery += NoPeople;
          Infected -= NoPeople;
        }
      }
    }
  };
  const Simulation = (obj) => {
    simulationData.data.push(obj);
  };
  for (let i = 1; i <= parseInt(data[9].param); i++) {
    switch (i) {
      case 1:
        Simulation({
          day: i,
          PopulationDead: Dead,
          PopulationInfected: Infected,
          PopulationRecovery: Recovery,
          Population: Population,
        });
        break;
      default:
        PopulationInfected();
        DeadPeople(i);
        RecoveredPeople(i);
        Simulation({
          day: i,
          PopulationDead: Dead,
          PopulationInfected: Infected,
          PopulationRecovery: Recovery,
          Population: Population,
        });
        break;
    }
  }
  return simulationData;
};
