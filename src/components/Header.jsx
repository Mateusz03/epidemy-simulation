import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import heart from "../assets/img/heart-attack.png";
import hospital from "../assets/img/hospital.png";
import people from "../assets/img/people.png";
import smile from "../assets/img/smile-face.png";
import { CurrentParameter } from "../App";

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
`;
const Display = styled.div`
  margin-top: 2.5%;
  width: 15%;
  height: 105px;
  background-color: ${(props) =>
    props.record === "Pi"
      ? "#63D5F0"
      : "" || props.record === "Pv"
      ? "#F98449"
      : "" || props.record === "Pm"
      ? "#F34C4E"
      : "" || props.record === "Pr"
      ? "#39CDAF"
      : ""};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #212121;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0px 2px 4px #212121;
`;
const Text = styled.div`
  font-size: 21px;
  font-weight: 600;
`;
const ImageContainer = styled.div`
  padding: 10px;
  background-color: #212121;
  border-radius: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
`;
const Image = (props) => {
  return (
    <ImageContainer>
      <Img src={props.img} />
    </ImageContainer>
  );
};

const Header = () => {
  const { current, setCurrent } = useContext(CurrentParameter);
  const [display, setDisplay] = useState([
    { record: "Pi", text: "People", img: people, people: 0 },
    { record: "Pv", text: "Infected", img: hospital, people: 0 },
    { record: "Pm", text: "Dead", img: heart, people: 0 },
    { record: "Pr", text: "Recovered", img: smile, people: 0 },
  ]);
  useEffect(() => {
    if (current !== undefined) {
      setDisplay((state) => [
        { ...state[0], people: current.people },
        { ...state[1], people: current.infected },
        { ...state[2], people: current.dead },
        { ...state[3], people: current.recovered },
      ]);
    }

    // setDisplay([
    //   { record: "Pi", text: "People", img: people, people: current.people },
    //   {
    //     record: "Pv",
    //     text: "Infected",
    //     img: hospital,
    //     people: current.infected,
    //   },
    //   { record: "Pm", text: "Dead", img: heart, people: current.dead },
    //   {
    //     record: "Pr",
    //     text: "Recovered",
    //     img: smile,
    //     people: current.recovered,
    //   },
    // ]);
  }, [current]);
  return (
    <Container>
      {display.map((e, i) => {
        return (
          <Display key={i} record={e.record}>
            <Text>
              {e.text}
              <br />
              {e.people}
            </Text>
            <Image img={e.img} />
          </Display>
        );
      })}
    </Container>
  );
};

export default Header;
