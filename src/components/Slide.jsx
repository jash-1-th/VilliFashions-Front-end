import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 100wh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgCont = styled.div`
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  height: 100%;
  width: 80%;
  padding-left: 90px;
`;

const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-shadow: 10px;

  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  background-color: transparent;
  border-color: white;
  cursor: pointer;
`;

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (Direction) => {
    if (Direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <SlideContainer bg={item.bg} key={item.id}>
            <InfoCont>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Button>EXPLORE</Button>
              </Link>
            </InfoCont>
            <ImgCont>
              <Img src={item.img} />
            </ImgCont>
          </SlideContainer>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slide;
