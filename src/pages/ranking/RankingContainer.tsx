import RankingUi from "./RankingUi";

const rankingChart = [
  {
    rank: 1,
    id: "Bella",
    icons: {
      ghost: "Ghost1",
      eyes: "Eyes1",
      color: "yellow",
    },
    score: 1230,
  },
  {
    rank: 2,
    id: "Max",
    icons: {
      ghost: "Ghost1",
      eyes: "Eyes2",
      color: "gray",
    },
    score: 1220,
  },
  {
    rank: 3,
    id: "Lily",
    icons: {
      ghost: "Ghost3",
      eyes: "Eyes3",
      color: "pink",
    },
    score: 1210,
  },
  {
    rank: 4,
    id: "John",
    icons: {
      ghost: "Ghost4",
      eyes: "Eyes4",
      color: "white",
    },
    score: 1200,
  },
  {
    rank: 5,
    id: "Emma",
    icons: {
      ghost: "Ghost5",
      eyes: "Eyes5",
      color: "lightblue",
    },
    score: 1190,
  },
  {
    rank: 6,
    id: "David",
    icons: {
      ghost: "Ghost6",
      eyes: "Eyes6",
      color: "lightgreen",
    },
    score: 1180,
  },
  {
    rank: 7,
    id: "Sophia",
    icons: {
      ghost: "Ghost7",
      eyes: "Eyes7",
      color: "orange",
    },
    score: 1170,
  },
  {
    rank: 8,
    id: "Liam",
    icons: {
      ghost: "Ghost8",
      eyes: "Eyes8",
      color: "purple",
    },
    score: 1160,
  },
];

const RankingContainer = () => {
  return <RankingUi rankingChart={rankingChart} />;
};

export default RankingContainer;
