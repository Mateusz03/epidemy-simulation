import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

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
  return (
    <Container>
      <ChartContainer>
        <Line
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          datasetIdKey="id"
          data={{
            labels: [],
            datasets: [
              {
                id: 1,
                label: "People",
                data: [],
                backgroundColor: "#212121",
                borderColor: "#63D5F0",
              },
              {
                id: 2,
                label: "Infected",
                data: [],
                backgroundColor: "#212121",
                borderColor: "#F98449",
              },
              {
                id: 3,
                label: "Dead",
                data: [],
                backgroundColor: "#212121",
                borderColor: "#F34C4E",
              },
              {
                id: 4,
                label: "Recovered",
                data: [],
                backgroundColor: "#212121",
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
