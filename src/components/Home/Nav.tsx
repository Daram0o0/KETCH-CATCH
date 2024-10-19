import React from "react";
import moon from "assets/mode/moon.svg";

const Home: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="text-2xl">:P</div>
      <nav>
        <ul className="flex items-center space-x-8">
          <li className="flex items-center">Home</li>
          <li className="flex items-center">About</li>
          <li className="flex items-center border rounded-lg px-1 py-1">
            <img src={moon} alt="Mode" className="w-8 h-8" />
          </li>
          <li className="flex items-center">
            <a href="#" className="text-FF9686 border rounded-3xl px-4 py-2">
              APP downloads
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Home;
