import { Route, Routes } from "react-router-dom";
import ExampleContainer from "pages/example/ExampleContainer";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleContainer />} />
    </Routes>
  );
};

export default App;
