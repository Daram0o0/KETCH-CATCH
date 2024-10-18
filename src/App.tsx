import { Route, Routes } from "react-router-dom";
import ExampleUi from "pages/example/ExampleUi";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleUi />} />
    </Routes>
  );
};

export default App;
