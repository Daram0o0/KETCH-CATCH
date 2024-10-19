import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";
import Home from "pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
