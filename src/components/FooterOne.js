import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const FooterOne = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
        VILLI-FASHIONS
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="https://github.com/jvtRepo/Jaswanth-Naidu-Yedla">
              Aim
            </FooterLink>
            <FooterLink href="https://github.com/jvtRepo/Jaswanth-Naidu-Yedla">
              Vision
            </FooterLink>
            <FooterLink href="https://github.com/jvtRepo/Jaswanth-Naidu-Yedla">
              Other Works
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Hosting</FooterLink>
            <FooterLink href="#">Raw-supply</FooterLink>
            <FooterLink href="#">Handicrafts</FooterLink>
            <FooterLink href="#">Learn</FooterLink>
          </Column>

          <Column>
            <Heading>Connect</Heading>
            <FooterLink href="#" className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="#" className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
            <FooterLink href="#" className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </FooterLink>
            <FooterLink href="#" className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterOne;
