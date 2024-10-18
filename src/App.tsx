import { useState } from "react";
import ghost from "./assets/ghost/ghost1.svg";
import { Eyes1 } from "assets/eyes";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">테일윈드 모달 테스트</h1>
      </header>
      <main className="flex-grow p-4">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">테일윈드 모달 테스트</h2>
          <p className="text-lg">버튼을 클릭하여 모달을 여세요.</p>
          <button
            onClick={toggle}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            모달 열기
          </button>
        </section>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                onClick={toggle}
                className="absolute top-2 right-2 text-gray-700 text-xl"
              >
                <button
                  onClick={toggle}
                  className="absolute top-2 right-4 text-gray-700 text-xl"
                >
                  X
                </button>
              </button>
              <h3 className="text-2xl font-bold mb-4 text-center">모달</h3>
              <Eyes1 />
              <img src={ghost} alt="Ghost" className="w-32 h-32 mx-auto" />
              <p className="mt-4 text-center">모달</p>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">테일윈드 모달 테스트</p>
      </footer>
    </div>
  );
};

export default App;
