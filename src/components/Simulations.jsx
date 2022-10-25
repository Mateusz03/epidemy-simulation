import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Parameters, Values } from "../App";
import del from "../assets/img/delete.png";
import update from "../assets/img/update.png";
import loadSimulation from "./backend-conn/loadSimulation";
import deleteSimulation from "./backend-conn/deleteSimulation";
const Container = styled.div`
  width: 100%;
  height: 60%;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  overflow: hidden;
  overflow-y: visible;
  &::-webkit-scrollbar {
    width: 4px;
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #dfe9eb;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #b8c0c2;
  }

  &::-webkit-scrollbar-track:active {
    background-color: #b8c0c2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #9eadb3;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #9eadb3;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #62a34b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  width: 50%;
  text-align: center;
  padding: 10px 0px 10px 0px;
  font-size: 21px;
  transition: 350ms;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  &:hover {
    background-color: #63d5f0;
    box-shadow: 0px 1px 4px #212121;
  }
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  transition: 100ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const Simulaitons = (props) => {
  const { updated, setUpdate } = useContext(Values);
  const { param, setParam } = useContext(Parameters);
  const [target, setTarget] = useState();
  const [table, setTable] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      setTable(await loadSimulation());
    }
    fetchData();
  }, []);
  return (
    <Container>
      {table !== undefined &&
        table.map((val, i) => {
          return (
            <TextContainer key={i}>
              <Text
                style={{
                  backgroundColor:
                    target === i && props.addState === false ? "#63d5f0" : "",
                  boxShadow:
                    target === i && props.addState === false
                      ? "0px 1px 4px #212121"
                      : "",
                }}
                onClick={() => {
                  navigate("/main");
                  setTarget(i);
                  props.setState(false);
                  setParam(val);
                }}
              >
                {val.obj.simulationName}
              </Text>
              <Img
                src={del}
                onClick={async () => {
                  if ((await deleteSimulation(val._id)) === true)
                    setTable((state) =>
                      state.filter((_, index) => index !== i),
                    );
                  navigate("/");
                }}
              />
              <Img
                src={update}
                onClick={() => {
                  navigate("/add");
                  setUpdate({
                    id: val._id,
                    parameters: val.obj.simulationParameters,
                  });
                }}
              />
            </TextContainer>
          );
        })}
    </Container>
  );
};
export default Simulaitons;
