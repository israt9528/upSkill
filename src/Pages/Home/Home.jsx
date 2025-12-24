import React from "react";
import Banner from "../../Components/Banner/Banner";
import TopCategories from "../../Components/TopCategories/TopCategories";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";
import Highlights from "../../Components/Highlights/Highlights";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CTASection from "../../Components/CTASection/CTASection";
import LatestArticles from "../../Components/LatestArticles/LatestArticles";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div>
        <TopCategories></TopCategories>
        <FeaturedCourses></FeaturedCourses>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <CTASection></CTASection>
        <LatestArticles></LatestArticles>
      </div>
    </div>
  );
};

export default Home;
