import React from "react";
import Header from "components/Home/Nav";
import Hero from "components/Home/Hero";
//import HowToPlay from "components/Home/HowToPlay";
//import Footer from "components/Home/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-main text-white">
      <Header />
      <Hero />
      {/* 
      <HowToPlay />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
