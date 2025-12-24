import React from "react";
import Banner from "../../Components/Banner/Banner";
import TopCategories from "../../Components/TopCategories/TopCategories";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";
import Highlights from "../../Components/Highlights/Highlights";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div>
        <TopCategories></TopCategories>
        <FeaturedCourses></FeaturedCourses>
        <Highlights></Highlights>
      </div>
    </div>
  );
};

export default Home;
