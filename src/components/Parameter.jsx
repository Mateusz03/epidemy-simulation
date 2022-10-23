import styled from "styled-components";

const Input = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  width: 250px;
  height: 36px;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: #212121;
  font-size: 21px;
  background-color: rgba(199, 211, 215, 0.5);
  box-shadow: 0px 2px 4px #212121;
  border-radius: 8px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
const InputContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  margin-bottom: 64px;
`;
const InputSlider = styled.input`
  width: 230px;
  height: 8px;
  display: flex;
`;
const Value = styled.p`
  margin: 0;
  width: 64px;
  text-align: center;
`;
const Parameter = (props) => {
  return (
    <>
      {props.values.map((value, i) => {
        let val;
        if (i === props.currentIndex) {
          if (
            value.name !== "Mortality" &&
            value.name !== "Infection Chance" &&
            value.name !== "Simulation Name" &&
            value.name !== "Recovery Chance"
          ) {
            val = (
              <InputContainer key={i}>
                <Input
                  onKeyPress={(e) => {
                    if (e.target.value.length >= 18) e.preventDefault();
                  }}
                  placeholder={"Number value"}
                  type={"number"}
                  onWheel={(e) => e.target.blur()}
                  value={value.param}
                  onChange={(e) => {
                    props.setValues(
                      props.values.map((val) => {
                        return val.name === value.name
                          ? { ...val, param: e.target.value }
                          : val;
                      }),
                    );
                  }}
                />
              </InputContainer>
            );
          } else if (value.name === "Simulation Name") {
            val = (
              <InputContainer key={i}>
                <Input
                  maxLength={18}
                  placeholder={"String value"}
                  type={"text"}
                  value={value.param}
                  onChange={(e) => {
                    props.setValues(
                      props.values.map((val) => {
                        return val.name === value.name
                          ? { ...val, param: e.target.value }
                          : val;
                      }),
                    );
                  }}
                />
              </InputContainer>
            );
          } else if (
            value.name === "Mortality" ||
            value.name === "Infection Chance" ||
            value.name === "Recovery Chance"
          ) {
            val = (
              <InputContainer key={i}>
                <InputSlider
                  type={"range"}
                  min={0}
                  max={100}
                  value={value.param}
                  onChange={(e) => {
                    props.setValues(
                      props.values.map((val) => {
                        return val.name === value.name
                          ? { ...val, param: e.target.value }
                          : val;
                      }),
                    );
                  }}
                />
                <Value>{value.param}%</Value>
              </InputContainer>
            );
          }
        }
        return val;
      })}
    </>
  );
};
export default Parameter;
