import React from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Blog />
      <ScrollToTop />
    </div>
  );
};

export default Home;
