import React from "react";
import Banner from "../../Components/Banner/Banner";
import TopCategories from "../../Components/TopCategories/TopCategories";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div>
        <TopCategories></TopCategories>
        <FeaturedCourses></FeaturedCourses>
      </div>
    </div>
  );
};

export default Home;
