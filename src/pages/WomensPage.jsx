import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import styled from "styled-components";
import NewAnnouncements from '../components/NewAnnouncents1';
import FooterOne from '../components/FooterOne';

const Container = styled.div`
height: 60px;
background-color:black;
color: white;
text-align: center;
font-size: larger;
justify-content: centre;
font-family: sans-serif;

font-size: 50px;


`;

const WomensPage = () => {
    return (
        <div>
            <Container>LADIES SECTION</Container>
            <NewAnnouncements />
            <Navbar />
            <Products />
            <FooterOne />
        </div>
    )
}

export default WomensPage