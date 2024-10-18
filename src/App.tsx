const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">테일윈드 테스트</h1>
      </header>
      <main className="flex-grow p-4">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">테일윈드 테스트</h2>
          <p className="text-lg">테일윈드 테스트</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">테일윈드 테스트</p>
      </footer>
    </div>
  );
};

export default App;
