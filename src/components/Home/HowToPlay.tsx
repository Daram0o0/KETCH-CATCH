import React, { useEffect, useState } from "react";
import howtoplay from "assets/logo/howtoplay.svg";

const HowToPlay: React.FC = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleScroll = () => {
    const element1 = document.getElementById("description1");
    const element2 = document.getElementById("description2");

    if (element1 && element1.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible1(true);
    }

    if (element2 && element2.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible2(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col bg-main items-center justify-center text-center px-16 py-16 max-w-screen-xl mx-auto overflow-hidden">
      {/* 게임 설명 로고 */}
      <div className="w-96 h-auto rounded-full flex items-center justify-center mt-16">
        <img
          src={howtoplay}
          alt="Ketch-Catch 게임 설명"
          className="object-cover mt-24 mb-16"
        />
      </div>

      {/* 게임 설명 1 */}
      <div className="flex flex-col md:flex-row items-center mb-10 mt-4">
        <div
          id="description1"
          className={`transition-transform duration-700 ${
            isVisible1 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src={howtoplay}
            alt="Ketch-Catch 게임 설명"
            className={`w-80 h-40 object-cover mb-4 border transition-transform duration-1000 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="w-80 h-40 flex flex-col items-center ml-20">
          <h2 className="text-lg font-bold mb-4">
            ① PUBLIC MODE로 전세계 유저들과 함께 게임 즐기기
          </h2>
          <p className="text-sm">대충 게임 설명 배치되는 자리</p>
        </div>
      </div>

      {/* 게임 설명 2 */}
      <div className="flex flex-col md:flex-row items-center mb-8 mt-6">
        <div className="w-80 h-40 flex flex-col items-center md-4 mr-20">
          <h2 className="text-lg font-bold mb-4">
            ② 방을 만들어 친구들과 함께 즐기기
          </h2>
          <p className="text-lg">대충 게임 설명 배치되는 자리</p>
        </div>
        <div
          id="description2"
          className={`transition-transform duration-700 ${
            isVisible2 ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={howtoplay}
            alt="Ketch-Catch 게임 설명"
            className={`w-80 h-40 object-cover mb-4 border transition-transform duration-1000 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
