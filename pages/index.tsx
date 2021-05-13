import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeCourse,
  HomeBlog,
  Newsletter,
} from "src/components/frontend/home";

const Home = () => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeCourse />
      <HomeBlog />
      <Newsletter />
    </>
  );
};

export default Home;
