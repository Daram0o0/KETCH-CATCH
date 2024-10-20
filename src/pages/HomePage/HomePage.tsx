import React from "react";
import Header from "components/Home/Nav";
import Hero from "components/Home/Hero";
import DashedLine from "components/Home/DashedLine";
import HowToPlay from "components/Home/HowToPlay";
import Promotion from "components/Home/Promotion";
import Footer from "components/Home/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-main text-white min-h-screen justify-between">
      <Header />
      <Hero />
      <DashedLine />
      <HowToPlay />
      <DashedLine />
      <Promotion />
      <div className="bg-[#59527A]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
