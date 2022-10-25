import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CurrentParameter, Parameters } from "../App";
import { useContext, useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LinearChart = () => {
  const { current, setCurrent } = useContext(CurrentParameter);
  const { param, setParam } = useContext(Parameters);
  const [label, setLabel] = useState([]);
  const [people, setPeople] = useState([]);
  const [infected, setInfected] = useState([]);
  const [dead, setDead] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    if (param !== undefined) {
      if (param._id === id) {
        param.obj.data.forEach((val) => {
          setLabel((state) => [...state, `day ${val.day}`]);
          setPeople((state) => [...state, val.Population]);
          setInfected((state) => [...state, val.PopulationInfected]);
          setDead((state) => [...state, val.PopulationDead]);
          setRecovered((state) => [...state, val.PopulationRecovery]);
        });
      } else {
        setLabel([]);
        setPeople([]);
        setInfected([]);
        setDead([]);
        setRecovered([]);
        setId(param._id);
      }
    }
  }, [param, id]);

  return (
    <Container>
      <ChartContainer>
        <Line
          options={{
            interaction: {
              mode: "x",
            },
           elements:{
point:{
  borderWidth:0,
  backgroundColor: 'rgba(0,0,0,0)'
}
           },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            onHover: function (evt, item) {
              if (item.length) {
                setCurrent({
                  people: people[item[0].index],
                  infected: infected[item[0].index],
                  dead: dead[item[0].index],
                  recovered: recovered[item[0].index],
                });
              }
            },
          }}
          datasetIdKey="id"
          data={{
            labels: label,
            datasets: [
              {
                id: 1,
                label: "People",
                data: people,
                borderColor: "#63D5F0",
              },
              {
                id: 2,
                label: "Infected",
                data: infected,
                borderColor: "#F98449",
              },
              {
                id: 3,
                label: "Dead",
                data: dead,
                borderColor: "#F34C4E",
              },
              {
                id: 4,
                label: "Recovered",
                data: recovered,
                borderColor: "#39CDAF",
              },
            ],
          }}
        />
      </ChartContainer>
    </Container>
  );
};
export default LinearChart;
