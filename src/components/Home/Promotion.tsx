import React from "react";
import enjoy from "assets/logo/enjoy.svg";

const Promotion: React.FC = () => {
  return (
    <section className="flex flex-col bg-main px-16 py-16 max-w-screen-xl mx-auto mt-48">
      {/* Enjoy 로고 */}
      <div className="flex justify-start items-center ml-10 mb-8 mt-4">
        <img src={enjoy} alt="Enjoy~!" className="w-80 h-auto object-cover" />
      </div>

      {/* 핸드폰 들고 있는 사진 */}
      <div className="flex justify-end items-center mr-10 mt-10 mb-10">
        <img
          src={enjoy}
          alt="핸드폰을 들고 있는 사람"
          className="w-80 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Promotion;
