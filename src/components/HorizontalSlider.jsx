import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
`;

const StyledSlider = styled.div`
  background-color: rgba(199, 211, 215, 0.5);
  width: 100%;
  height: 8px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 8px;
`;
const StyledSteps = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  box-sizing: border-box;
  border: 2px solid #63d5f0;
  background-color: ${(props) => (props.index ? "#63d5f0" : "#212121")};
`;
const StyledText = styled.p`
  width: calc(100% / 7);
  margin: 0;
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.index ? "#63d5f0" : "#212121")};
  text-shadow: 0px 0px 3px ${(props) => (props.index ? "#212121" : "#63d5f0")};
`;

const HorizontalSlider = (props) => {
  return (
    <Container>
      <StyledSlider>
        {props.values.map((_, i) => {
          return (
            <StyledSteps
              index={props.currentIndex === i}
              key={i}
              onClick={() => {
                props.setCurrentIndex(i);
              }}
            />
          );
        })}
      </StyledSlider>
      <StyledContainer>
        {props.values.map((value, i) => {
          return (
            <StyledText
              index={props.currentIndex === i}
              key={i}
              onClick={() => {
                props.setCurrentIndex(i);
              }}
            >
              {value.name}
            </StyledText>
          );
        })}
      </StyledContainer>
    </Container>
  );
};
export default HorizontalSlider;
