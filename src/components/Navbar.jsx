import { Badge } from "@material-ui/core";
import { Search, ShoppingCartTwoTone, Home } from "@material-ui/icons";
import { Link } from 'react-router-dom'
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";



const Container = styled.div`
  height: 60 px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: solid gray;
  display: flex;
  align-items: centre;
  margin-left: 25px;
  padding: 1px;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Centre = styled.div`
  flex: 1;
  text-align: center;

  display: flex;
  align-items: center;
`;
const Category = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 75px;
  justify-content: centre;
  font-weight: bolder;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
font-weight: 800;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Centre>
          <Link to="/mens" style={{ textDecoration: "none", color: "black" }}>
            <Category>MEN</Category>
          </Link>
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            <Category>WOMEN</Category>
          </Link>
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            <Category>KIDS</Category>
          </Link>
        </Centre>
        <Right>
          <Link to="/Register" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <Link to="/Cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartTwoTone />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Home />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container >
  );
};

export default Navbar;
