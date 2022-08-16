import styled from "styled-components";

export const Box = styled.div`
  padding: 50px 30px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 50px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: left;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
  flex: 1;
`;

export const Row = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: darkgray;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: 1000;
`;
