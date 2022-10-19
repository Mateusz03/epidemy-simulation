import styled from "styled-components";
import LinearChart from "./components/Chart";
import Header from "./components/Header";
import Parameters from "./components/Parameters";
import { Routes, Route } from "react-router-dom";
import AddSimulation from "./components/AddSimulation";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Right = styled.div`
  width: 80%;
`;
const SimulationSelected = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.7);
  color: #c7d3d7;
  font-size: 64px;
  text-shadow: 0px 2px 4px #212121;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const App = () => {
  return (
    <Container>
      <Parameters />
      <Right>
        <Routes>
          <Route
            path="/"
            element={<SimulationSelected>Chose Simulation</SimulationSelected>}
          />
          <Route path="/add" element={<AddSimulation />} />
          <Route path="/selected" />
        </Routes>

        <Header />
        <LinearChart />
      </Right>
    </Container>
  );
};

export default App;
