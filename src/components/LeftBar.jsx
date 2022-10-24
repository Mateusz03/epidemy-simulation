import styled from "styled-components";
import add from "../assets/img/add.png";
import { useNavigate } from "react-router-dom";
import Simulaitons from "./Simulations";
import { useContext, useState } from "react";
import { Values } from "../App";

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: #c7d3d7;
  box-shadow: 2px 0px 4px rgba(33, 33, 33, 0.25);
  border-radius: 0 14px 14px 0;
  z-index: 2;
`;
const Title = styled.p`
  text-align: center;
  padding-bottom: 48px;
  width: 100%;
  color: #212121;
  margin-top: 48px;
  font-size: 34px;
  font-weight: bold;
  border-bottom: 2px solid #d4dadc;
`;
const AddContainer = styled.div`
  padding: 5px 15px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  transition: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const AddText = styled.p`
  margin: 0;
  font-size: 21px;
  font-weight: 600;
`;
const AddImg = styled.img`
  width: 36px;
  height: 36px;
`;
const Button = ({ setState }) => {
  const navigate = useNavigate();
  const { updated, setUpdate } = useContext(Values);
  return (
    <AddContainer
      onClick={() => {
        navigate("/add");
        setState(true);
        setUpdate({
          parameters: [
            { name: "Simulation Name", param: "" },
            { name: "Population", param: "" },
            { name: "Infected", param: "" },
            { name: "Reproduction", param: "" },
            { name: "Mortality", param: 50 },
            { name: "Infection Chance", param: 5 },
            { name: "Recovery Chance", param: 5 },
            { name: "Recovery Time", param: "" },
            { name: "Mortality Time", param: "" },
            { name: "Simulation Time", param: "" },
          ],
        });
      }}
    >
      <AddText>Add</AddText>
      <AddImg src={add} />
    </AddContainer>
  );
};
const LeftBar = () => {
  const [addState, setAddState] = useState(false);
  return (
    <Container>
      <Title>Simulations</Title>
      <Simulaitons addState={addState} setState={setAddState} />
      <Button setState={setAddState} />
    </Container>
  );
};
export default LeftBar;
