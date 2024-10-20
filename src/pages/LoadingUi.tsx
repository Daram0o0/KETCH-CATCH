import { GhostMini } from "assets/ghost";

const LoadingUi = () => {
  return (
    <div className="bg-main h-screen flex flex-col">
      <p className="p-4 text-xl font-bold text-white self-start">{":P"}</p>
      <div className="flex-grow flex flex-col justify-center items-center">
        <GhostMini className="w-24 h-24 drop-shadow-2xl animate-loading" />
        <h1 className="mt-10 text-center text-white text-3xl font-bold">
          {"Loading . . ."}
        </h1>
      </div>
    </div>
  );
};

export default LoadingUi;
