import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";
import RankingContainer from "pages/ranking/RankingContainer";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/ranking" element={<RankingContainer />} />
    </Routes>
  );
};

export default App;
