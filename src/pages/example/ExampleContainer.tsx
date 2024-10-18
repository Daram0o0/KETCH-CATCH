import { useState } from "react";
import ExampleUi from "./ExampleUi";

const ExampleContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return <ExampleUi toggle={toggle} isOpen={isOpen} />;
};

export default ExampleContainer;
