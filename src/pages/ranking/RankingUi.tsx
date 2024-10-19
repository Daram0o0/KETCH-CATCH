import { Ghost1 } from "assets/ghost";
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
  rankingChart: Player[];
}

export const RankCard: React.FC<Player> = ({ rank, id, icons, score }) => {
  return (
    <div className="flex justify-between items-center bg-purple-400 rounded-lg shadow-md w-3/4 p-3 m-2">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-500 font-bold text-2xl">{rank}</span>
        <Ghost1 className={`w-5 h-5 ${icons.color}`} />
        {/* 나중에 캐릭터조합 컴포넌트 만들 예정: 준비물 ghost, eye,color */}
        <span className="text-white font-bold">{id}</span>
      </div>
      <span className="text-white font-bold">{score}</span>
    </div>
  );
};

const RankingUi: React.FC<RankingChartProps> = ({ rankingChart }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="bg-red-300 h-14">{/* 여긴 로고? 헤더 들어가겠지? */}</div>
      <main className="flex flex-auto items-center">
        <div className="w-1/2 bg-blue-300">1,2,3등 표현</div>
        <div className="w-1/2 bg-gray-400">
          <div className="w-full h-full flex flex-col items-start">
            {rankingChart.map((player) => (
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
      <div className="bg-pink-300 h-14">{/* 버튼 컴포넌트 들어 올 곳 */}</div>
    </div>
  );
};

export default RankingUi;
