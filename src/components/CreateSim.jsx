import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/img/add.png";
import HorizontalSlider from "./HorizontalSlider";
import Parameter from "./Parameter";
import addSimulation from "./backend-conn/addSimulation";
import { Values } from "../App";
import updateSimulation from "./backend-conn/updateSimulation";

const Add = styled.div`
  padding-left: 20%;
  position: absolute;
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
  flex-direction: column;
  z-index: 1;
`;
const Close = styled.img`
  position: absolute;
  top: 35%;
  left: 80%;
  transform: rotate(45deg);
  transition: 200ms;
  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
`;
const SlideContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;
`;
const Button = styled.div`
  padding: 10px 20px 10px 20px;
  text-shadow: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  background-color: #63d5f0;
  color: #212121;
  border-radius: 8px;
  box-shadow: 0px 2px 4px #212121;
  transition: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const CreateSim = () => {
  const { updated, setUpdate } = useContext(Values);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Next");

  const [values, setValues] = useState(updated.parameters);

  useEffect(() => {
    setValues(updated.parameters);
  }, [updated]);

  useEffect(() => {
    switch (currentIndex) {
      case 10:
        if (updated.id) {
          setButtonText("Update");
        } else {
          setButtonText("Continue");
        }
        return;
      default:
        setButtonText("Next");
    }
  }, [currentIndex, updated]);

  const simulation = async () => {
    if (buttonText !== "Continue" && buttonText !== "Update") {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    if (
      buttonText === "Continue" &&
      values.every((i) => {
        return i.param !== "";
      })
    ) {
      await addSimulation(values);
      navigate("/");
    } else if (
      buttonText === "Update" &&
      values.every((i) => {
        return i.param !== "";
      })
    ) {
      await updateSimulation({ id: updated.id, data: values });
      navigate("/");
    } else {
      alert("Enter all data!");
    }
  };
  return (
    <Add>
      <Close
        src={close}
        onClick={() => {
          navigate("/");
          setUpdate({
            parameters: [
              { name: "Simulation Name", param: "" },
              { name: "Population", param: "" },
              { name: "Infected", param: "" },
              { name: "Reproduction", param: "" },
              { name: "Mortality", param: 50 },
              { name: "Infection Chance", param: 5 },
              { name: "Recovery Chance", param: 5 },
              { name: "Lost Immunity ", param: 5 },
              { name: "Recovery Time", param: "" },
              { name: "Mortality Time", param: "" },
              { name: "Simulation Time", param: "" },
            ],
          });
        }}
      />
      <Parameter
        currentIndex={currentIndex}
        values={values}
        setValues={setValues}
      />
      <SlideContainer>
        <HorizontalSlider
          values={values}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Button
          onClick={async () => {
            await simulation();
          }}
        >
          {buttonText}
        </Button>
      </SlideContainer>
    </Add>
  );
};
export default CreateSim;
