import React from "react";
import Announcements from "../components/Announcements";
import Banners from "../components/banners/Banners";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slide from "../components/Slide";
import BannerProduct from "../components/banners/BannerProduct";
import MainTitle from "../components/MainTitle";
import FooterOne from "../components/FooterOne";

const Home = () => {
  return (
    <div>
      <Announcements />
      <MainTitle />
      <Navbar />
      <Slide />
      <BannerProduct />
      <Products />
      <Banners />
      <Categories />
      <FooterOne />
    </div>
  );
};

export default Home;
