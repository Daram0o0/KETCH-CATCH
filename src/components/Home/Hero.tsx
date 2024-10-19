import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <div className="w-64 h-64 bg-pink-300 rounded-full flex items-center justify-center mb-8">
        <div className="text-black text-9xl">👻</div>
      </div>
      <h1 className="text-6xl font-bold">KETCH-CATCH</h1>
      <p className="max-w-md text-lg py-6">
        대충 이 게임에 대한 설명이 여기 들어가며 재미있고 유쾌한 내용을 추가.
      </p>
      <div className="flex space-x-4">
        <button className="bg-pink-400 px-6 py-3 rounded-lg">MAKE ROOM</button>
        <button className="bg-pink-400 px-6 py-3 rounded-lg">
          JOIN RANDOM ROOM
        </button>
      </div>
      <div className="mt-8">
        <input
          type="text"
          placeholder="초대 코드를 받으셨다면?"
          className="px-4 py-2 rounded-l-lg text-black"
        />
        <button className="bg-purple-600 px-6 py-2 rounded-r-lg">JOIN</button>
      </div>
    </section>
  );
};

export default Hero;
