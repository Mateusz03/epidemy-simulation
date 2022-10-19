import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/img/add.png";
import ReactSlider from "react-slider";
const Add = styled.div`
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
  flex-direction: column;
`;

const AddSimulation = () => {
  const [values, setValues] = useState([
    { name: "Simulation Name", param: "" },
    { name: "Population", param: "" },
    { name: "Infected", param: "" },
    { name: "Reproduction", param: "" },
    { name: "Mortality", param: "" },
    { name: "Recovery Time", param: "" },
    { name: "Mortality Time", param: "" },
    { name: "Simulation Time", param: "" },
  ]);

  return <Add></Add>;
};
export default AddSimulation;
