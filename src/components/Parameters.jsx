import styled from "styled-components";
import add from "../assets/img/add.png";
import Simulations from "./Simulations";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: rgba(158, 192, 201, 0.25);
  box-shadow: 2px 0px 4px rgba(33, 33, 33, 0.25);
  border-radius: 0 14px 14px 0;
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
const Button = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/add");
  };
  return (
    <AddContainer
      onClick={() => {
        onClick();
      }}
    >
      <AddText>Add</AddText>
      <AddImg src={add} />
    </AddContainer>
  );
};
const Parameters = () => {
  return (
    <Container>
      <Title>Simulations</Title>
      <Simulations />
      <Button />
    </Container>
  );
};
export default Parameters;
