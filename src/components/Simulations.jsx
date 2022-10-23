import { useEffect, useState, createContext, useContext } from "react";
import loadSimulation from "./backend-conn/loadSimulation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Parameters } from "../App";
import del from "../assets/img/delete.png";
import update from "../assets/img/update.png";
import deleteSimulation from "./backend-conn/deleteSimulation";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
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
  const { param, setParam } = useContext(Parameters);
  const [target, setTarget] = useState();
  const [table, setTable] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    loadSimulation().then(
      function (value) {
        setTable(value);
      },
      function (error) {
        console.log(error);
      },
    );
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
                  console.log(table.splice(i, 1));
                  // await deleteSimulation(val._id);
                }}
              />
              <Img src={update} />
            </TextContainer>
          );
        })}
    </Container>
  );
};
export default Simulaitons;
