import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";
import Home from "pages/HomePage/HomePage";
import RankingContainer from "pages/ranking/RankingContainer";
import SettingUi from "pages/SettingUi";
import ErrorUi from "pages/ErrorUi";
import LoadingUi from "pages/LoadingUi";
import Pending from "pages/Pending";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranking" element={<RankingContainer />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/setting" element={<SettingUi />} />
      <Route path="/loading" element={<LoadingUi />} />
      <Route path="*" element={<ErrorUi />} />
    </Routes>
  );
};

export default App;
