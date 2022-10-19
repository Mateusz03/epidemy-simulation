import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/img/add.png";
import axios from "axios";
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
const Title = styled.p`
  margin: 0;
`;
const Close = styled.img`
  position: absolute;
  top: 15%;
  left: 75%;
  transform: rotate(45deg);
  transition: 100ms;
  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const InputText = styled.p`
  font-size: 21px;
`;
const Inputs = styled.input`
  outline: none;
  width: 100px;
  height: 21px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 2px 4px #212121;
`;
const Input = (props) => {
  const [values, setValues] = useState(props);
  console.log(values);
  return (
    <InputContainer>
      <InputText>{values.name}</InputText>
      <Inputs
        type={"text"}
        value={values.value}
        onChange={(e) => {
          setValues({ name: values.name, param: e.target.value });
          //   props.callback([{ name: props.name, param: e.target.value }]);
        }} // Here its bug with setValues
      />
    </InputContainer>
  );
};

const Button = styled.div`
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: #212121;
  font-size: 21px;
  background-color: #c7d3d7;
  transition: 100ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const AddSimulation = () => {
  const [values, setValues] = useState([
    { name: "N", param: "" },
    { name: "P", param: "" },
    { name: "I", param: "" },
    { name: "R", param: "" },
    { name: "M", param: "" },
    { name: "Ti", param: "" },
    { name: "Tm", param: "" },
    { name: "Ts", param: "" },
  ]);
  const navigate = useNavigate();
  const addSimulation = async () => {
    axios.post("http://localhost:3001/addSimulation", {
      //   body: {},
    });
  };
  return (
    <Add>
      <Close
        src={close}
        onClick={() => {
          navigate("/");
        }}
      />
      <Title>Parameters</Title>
      {values.map((value, i) => {
        // console.log(value);
        return (
          <Input
            name={value.name}
            key={i}
            value={value.param}
            callback={(e) => {
              setValues([...values, e]);
            }}
          />
        );
      })}
      <Button
        onClick={() => {
          addSimulation();
        }}
      >
        Add
      </Button>
    </Add>
  );
};
export default AddSimulation;
