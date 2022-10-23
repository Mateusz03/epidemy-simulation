import styled from "styled-components";
import LinearChart from "./components/Chart";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import { Routes, Route } from "react-router-dom";
import CreateSim from "./components/CreateSim";
import { createContext, useState } from "react";

export const Parameters = createContext();
export const CurrentParameter = createContext();
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
  padding-left: 20%;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.7);
  color: #c7d3d7;
  font-size: 64px;
  text-shadow: 0px 2px 4px #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const App = () => {
  const [param, setParam] = useState();
  const [current, setCurrent] = useState();
  return (
    <Container>
      <Parameters.Provider value={{ param, setParam }}>
        <CurrentParameter.Provider value={{ current, setCurrent }}>
          <LeftBar />
          <Right>
            <Routes>
              <Route
                path="/"
                element={
                  <SimulationSelected>Select simulation</SimulationSelected>
                }
              />
              <Route path="/add" element={<CreateSim />} />
              <Route path="/main" element={<></>} />
            </Routes>
            <Header />
            <LinearChart />
          </Right>
        </CurrentParameter.Provider>
      </Parameters.Provider>
    </Container>
  );
};

export default App;
