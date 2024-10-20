import { LeftTear, RightTear } from "assets/etc";
import { GhostMini } from "assets/ghost";

// status값 들어올 듯(에러 타입 지정 -> closed / in-progress / not-found)
const ErrorUi = () => {
  return (
    <div className="flex h-screen flex-col bg-main">
      <p className="p-4 text-xl font-bold text-white">{":P"}</p>
      <div className="flex flex-col items-center justify-center">
        <div className="w-48 h-48 relative drop-shadow-2xl">
          {/* 유령색상 random컬러 적용하거나 status값에 1:1매칭되게 들어오면 좋을 것 같아 svg색을 제거해 둠 */}
          <GhostMini className="w-48 h-48" style={{ fill: "#fff" }} />
          <LeftTear className="absolute top-24 left-10 w-10 h-10 animate-tear" />
          <RightTear className="absolute top-24 right-2 w-10 h-10 animate-tear" />
        </div>
        <h1 className="mt-4 text-center text-white text-3xl font-bold">
          {"이미 종료된 방입니다"}
        </h1>
        <button className="mt-12 flex items-center rounded-lg  bg-red-50 px-8 py-2">
          <img className="bg-black w-4 h-4 mr-4" />
          <p className="text-base font-bold">Home</p>
        </button>
      </div>
    </div>
  );
};

export default ErrorUi;
