import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";
import Home from "pages/HomePage/HomePage";
import RankingContainer from "pages/ranking/RankingContainer";
import SettingUi from "pages/SettingUi";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranking" element={<RankingContainer />} />
      <Route path="/setting" element={<SettingUi />} />
    </Routes>
  );
};

export default App;
