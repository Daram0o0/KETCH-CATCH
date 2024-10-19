import { Ghost1, Ghost6 } from "assets/ghost";

interface PlayerIcon {
  ghost: string;
  eyes: string;
  color: string;
}

interface Player {
  rank: number;
  id: string;
  icons: PlayerIcon;
  score: number;
}

interface RankingChartProps {
  rankingChart?: Player[];
  topThree?: Player[];
}

// 나중에 utils에 분리
const getRankColorClass = (rank: number): string => {
  switch (rank) {
    case 1:
      return "text-gold";
    case 2:
      return "text-silver";
    case 3:
      return "text-bronze";
    default:
      return "text-black";
  }
};

export const RankPodiumn: React.FC<Player> = ({ rank, id, icons }) => {
  const rankColorClass = getRankColorClass(rank);

  return (
    <>
      <div
        className="flex flex-col items-center bg-purple-200 w-28 rounded-t-lg p-3 mx-2 relative"
        style={{ height: `${360 - rank * 76}px` }}
      >
        {rank === 1 ? <div className="absolute -top-36">대충 왕관</div> : <></>}
        <Ghost6 className="w-24 h-24 absolute -top-28" fill={icons.color} />
        {/* 나중에 캐릭터 컴포넌트 만드는 걸로 도입예정. 왕관까지 */}
        <span
          className={`${rankColorClass} font-bold text-2xl w-10 h-10 rounded-full border-4 mb-2`}
        >
          <p className="flex justify-center items-center">{rank}</p>
        </span>
        <span className="text-white font-bold text-xl">{id}</span>
      </div>
    </>
  );
};

export const RankCard: React.FC<Player> = ({ rank, id, icons, score }) => {
  const rankColorClass = getRankColorClass(rank);

  return (
    <div className="flex justify-between items-center bg-purple-200 border-purple-800 border-2 rounded-lg shadow-md w-3/4 py-3 px-4 my-1.5">
      <div className="flex items-center space-x-2">
        <span className={`${rankColorClass} font-bold text-xl`}>{rank}</span>
        <Ghost1 className={`w-5 h-5 ${icons.color} text-red-50`} />
        {/* 나중에 캐릭터조합 컴포넌트 만들 예정: 준비물 ghost, eye, color */}
        <span className="font-bold">{id}</span>
      </div>
      <span className="font-bold">{score}</span>
    </div>
  );
};

const RankingUi: React.FC<RankingChartProps> = ({ rankingChart, topThree }) => {
  return (
    <div className="flex h-screen flex-col bg-main">
      <p className="text-white text-xl font-bold p-4">{":D"}</p>
      <main className="flex flex-auto items-end space-x-20">
        <div className="w-1/2">
          <div className="w-full h-full flex justify-end items-end">
            {topThree &&
              topThree.map((player) => {
                return (
                  <RankPodiumn
                    key={player.rank}
                    rank={player.rank}
                    id={player.id}
                    icons={player.icons}
                    score={player.score}
                  />
                );
              })}
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full flex flex-col items-start -mb-1.5">
            {rankingChart &&
              rankingChart.map((player) => (
                <RankCard
                  key={player.rank}
                  rank={player.rank}
                  id={player.id}
                  icons={player.icons}
                  score={player.score}
                />
              ))}
          </div>
        </div>
      </main>
      <div className="flex justify-center space-x-4 my-8">
        <button className="flex items-center rounded-lg bg-red-50 px-8 py-2">
          <img className="bg-black w-4 h-4 mr-4" />
          <p className="text-base font-bold">Home</p>
        </button>
        <button className="flex items-center rounded-lg bg-red-200 px-8 py-2">
          <img className="bg-white w-4 h-4 mr-4" />
          <p className="text-base font-bold text-white">Retry</p>
        </button>
      </div>
    </div>
  );
};

export default RankingUi;
