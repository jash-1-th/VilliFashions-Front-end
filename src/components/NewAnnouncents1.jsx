import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 20px;
background-color: aqua;
color: black;
text-align: center;
font-size: larger;
justify-content: centre;
font-family: font-family: sans-serif;;
font-weight: bolder;
font-size: 15px; 
letter-spacing: 3px;
`;
const NewAnnouncements = () => {
  return (
    <Container>"Theres nothing like shopping on villi-fashions"</Container>
  );
};

export default NewAnnouncements;
