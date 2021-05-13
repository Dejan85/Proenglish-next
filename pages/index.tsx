import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeCourse,
  HomeBlog,
} from "src/components/frontend/home";

const Home = () => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeCourse />
      <HomeBlog />
    </>
  );
};

export default Home;
