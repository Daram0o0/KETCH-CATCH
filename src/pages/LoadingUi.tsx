import { GhostMini } from "assets/ghost";

const LoadingUi = () => {
  return (
    <div className="flex h-screen flex-col bg-main">
      <p className="p-4 text-xl font-bold text-white">{":P"}</p>
      <div className="flex flex-shrink mt-20 flex-col items-center">
        <GhostMini className="w-24 h-24 drop-shadow-2xl animate-loading" />
      </div>
      <h1 className="mt-32 text-center text-white text-3xl font-bold">
        {"Loading . . ."}
      </h1>
    </div>
  );
};

export default LoadingUi;
