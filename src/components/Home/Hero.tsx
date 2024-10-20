import React from "react";
import Ghost from "assets/ghost/ghost-main.svg";
import KetchCatch from "assets/logo.svg";
import polygonMakeRoom from "assets/button/polygon.svg";
import polygonJoinRandomRoom from "assets/button/polygon-reverse.svg";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center px-16 py-16 max-w-screen-xl mx-auto">
      {/* 메인 캐릭터 */}
      <div className="w-80 h-80 rounded-full flex items-center justify-center mb-8 md:mb-0">
        <img src={Ghost} alt="ghost" className="w-18 h-18" />
      </div>

      {/* 게임 설명 */}
      <div className="flex flex-col items-center text-center px-16 py-2 ml-20">
        <img
          src={KetchCatch}
          className="w-96 h-auto mb-4"
          alt="KetchCatch Logo"
        />
        <p className="w-96 text-sm font-semibold py-6 mb-6">
          대충 이런게임인데 일단 아무거나 다 쳐둬야지 이름도 아무거나로 할건가요
          재밌겠구만 쨋든 뭔가 문구가 이렇게 들어가길 바라는데 어쩌징 뭔가
          이쁘게 만들고싶은데 맘대로 안되네요 짜증나구만 일단 할거니까 맘에
          안들면 수정부탁드립니다. 저도 제가 뭘 치는지 몰라요.
        </p>

        {/* 방 만들기 & 참가 */}
        <div className="flex space-x-2 mb-2">
          {/* MAKE ROOM 버튼 */}
          <button
            className="relative w-48 h-16 bg-cover bg-center text-sm text-white font-bold flex items-center justify-center"
            style={{
              backgroundImage: `url(${polygonMakeRoom})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => console.log("Make Room clicked")}
          >
            MAKE ROOM
          </button>

          {/* JOIN RANDOM ROOM 버튼 */}
          <button
            className="relative w-48 h-16 bg-cover bg-center text-sm text-white font-bold flex items-center justify-center"
            style={{
              backgroundImage: `url(${polygonJoinRandomRoom})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => console.log("Join Random Room clicked")}
          >
            JOIN RANDOM ROOM
          </button>
        </div>

        {/* 초대 코드 */}
        <div className="flex flex-col w-96 h-auto items-center">
          <p className="text-xs py-2">초대를 받으셨다면?</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="초대 코드"
              className="w-80 h-8 px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-[#D5C6FF] w-16 h-8 rounded-lg text-black">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
