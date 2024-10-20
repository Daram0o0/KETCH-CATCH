const Pending = () => {
  // 임시 사용자 배열
  const usersGroup1 = [
    { id: 1, name: "UserName1", score: "스코어1" },
    { id: 2, name: "UserName2", score: "스코어2" },
    { id: 3, name: "UserName3", score: "스코어3" },
    { id: 4, name: "UserName4", score: "스코어4" },
  ];

  const usersGroup2 = [
    { id: 5, name: "UserName5", score: "스코어5" },
    { id: 6, name: "UserName6", score: "스코어6" },
    { id: 7, name: "UserName7", score: "스코어7" },
    { id: 8, name: "UserName8", score: "스코어8" },
  ];

  return (
    <main className="bg-main h-screen">
      {/*헤더 영역*/}
      <header className="p-2 text-lg font-bold text-white self-start">
        {":P"}
      </header>
      {/* 위에서 떨어트리려면 여기 디브 태그 mt-6 수정하면 댐*/}
      <div className="flex flex-row justify-center gap-6 mt-4">
        {/*유저 그룹 1번 */}
        <div className="flex flex-col gap-4 ">
          {usersGroup1.map((user) => (
            <section key={user.id} className="flex-shrink-0 flex-grow-0 m-2">
              <article className="w-72 h-28 bg-[#BAAFDA] rounded-lg border-2 border-[#FBE6E6] p-2 flex items-center">
                <div
                  className="flex-grow basis-1/3 h-full bg-white rounded-full flex items-center justify-center"
                  aria-label="Profile Picture"
                >
                  {"아이콘"}
                </div>
                <div className="flex flex-grow basis-2/3 flex-col justify-center p-2 text-sm">
                  <h1 className="font-bold rounded-md border-2 border-[#494271] bg-white text-center m-1 p-1">
                    {user.name}
                  </h1>
                  <p className="rounded-sm border-2 border-dashed border-[#494271] bg-white text-center m-1 p-1">
                    {user.score}
                  </p>
                </div>
              </article>
            </section>
          ))}
        </div>
        {/* 캔버스 영역 */}
        <section className="w-[700px] rounded-md border-2 bg-[#A4A0B8] border-[#494271]">
          {/* 헤더 영역-컴포넌트 */}
          <header className="h-12 p-2 flex items-center justify-between relative">
            {/* 초대코드 영역 */}
            <div className="w-24 bg-[#D9D9D9] rounded-md border-2 border-gray-50 flex justify-center items-center">
              <span className="text-sm m-1">초대코드</span>
              {/* 초대코드 아이콘 */}
              <span className="text-sm ml-2">📋</span>
            </div>
            {/* 참가 인원 정보 */}
            <span className="text-base absolute font-bold left-1/2 transform -translate-x-1/2">
              1/8
            </span>
            {/* 설정 버튼 */}
            <button className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center border-2 border-gray-400">
              {/* 톱니바퀴 아이콘 */}
              <span className="text-sm">아이콘</span>
            </button>
          </header>
          {/* 그림판 영역 */}
          <main>
            <section className="m-1 h-[420px] rounded-md bg-white box-border">
              {"그림판- 컴포넌트"}
            </section>
            <section className="flex flex-col gap-3 p-1">
              <div className=" bg-gray-400 rounded-sm h-16 -mt-8 border-2 border-violet-600">
                {"캔버스 선택 도구 들어감 - 컴포넌트 "}
              </div>
              {/* 채팅창 영역 */}
              <div className="bg-white rounded-md h-52 overflow-auto">
                <span>{"채팅 메세지 - 컴포넌트 "}</span>
              </div>
            </section>
          </main>
        </section>
        {/*유저 그룹 2번 */}
        <div className="flex flex-col gap-4">
          {usersGroup2.map((user) => (
            <section key={user.id} className="flex-shrink-0 flex-grow-0 m-2">
              <article className="w-72 h-28 bg-[#BAAFDA] rounded-lg border-2 border-[#FBE6E6] p-2 flex items-center">
                <div
                  className="flex-grow basis-1/3 h-full bg-white rounded-full flex items-center justify-center"
                  aria-label="Profile Picture"
                >
                  {"아이콘"}
                </div>
                <div className="flex flex-grow basis-2/3 flex-col justify-center p-2 text-sm">
                  <h1 className="font-bold rounded-md border-2 border-[#494271] bg-white text-center m-1 p-1">
                    {user.name}
                  </h1>
                  <p className="rounded-sm border-2 border-dashed border-[#494271] bg-white text-center m-1 p-1">
                    {user.score}
                  </p>
                </div>
              </article>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pending;
