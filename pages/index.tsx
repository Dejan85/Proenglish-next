import React from "react";
import {
  WelcomePage,
  HomeAbout,
  HomeCourse,
  HomeBlog,
  Newsletter,
  HomeEvents,
  Experience,
} from "src/components/frontend/home";

const Home = () => {
  return (
    <>
      <WelcomePage />
      <HomeAbout />
      <HomeCourse />
      <HomeBlog />
      <Newsletter />
      <HomeEvents />
      <Experience />
    </>
  );
};

export default Home;
