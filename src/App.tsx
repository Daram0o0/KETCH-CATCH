import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";
import Home from "pages/HomePage/HomePage";
import RankingContainer from "pages/ranking/RankingContainer";
import SettingUi from "pages/SettingUi";
import ErrorUi from "pages/ErrorUi";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranking" element={<RankingContainer />} />
      <Route path="/setting" element={<SettingUi />} />
      <Route path="*" element={<ErrorUi />} />
    </Routes>
  );
};

export default App;
