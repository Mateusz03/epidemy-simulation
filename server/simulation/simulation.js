module.exports.startSimulation = async (data) => {
  let simulationData = {
    simulationName: data[0].param,
    simulationParameters: data,
    data: [],
  };
  const Mortality = parseInt(data[4].param);
  const MortalityTime = parseInt(data[9].param);
  const RecoveryChance = parseInt(data[6].param);
  const RecoveryTime = parseInt(data[8].param);
  const InfectionChance = parseInt(data[5].param);
  const Reproduction = parseInt(data[3].param);
  const LostImmunited = parseInt(data[7].param);

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
    if (
      Math.floor(Math.random() * 100 + 1) <= Mortality &&
      Infected >= 10 &&
      i >= MortalityTime
    ) {
      let data = parseInt(Infected / 10);
      Infected -= data;
      Dead += data;
    }
  };
  const RecoveredPeople = (i) => {
    if (
      Math.floor(Math.random() * 100 + 1) <= RecoveryChance &&
      Infected >= 10 &&
      i >= RecoveryTime
    ) {
      let data = parseInt(Infected / 10);
      Infected -= data;
      Recovery += data;
    }
  };
  const PopulationInf = () => {
    if (Math.floor(Math.random() * 100 + 1) <= LostImmunited && Recovery > 10) {
      let data = parseInt(Recovery / 10);
      Recovery -= data;
      Population += data;
    }
  };
  const Simulation = (obj) => {
    simulationData.data.push(obj);
  };
  for (let i = 1; i <= parseInt(data[10].param); i++) {
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
        PopulationInf();
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
