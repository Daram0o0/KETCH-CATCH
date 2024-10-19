const SettingUi = () => {
  return (
    <div className="flex flex-col h-screen bg-main">
      <p className="p-4 text-xl font-bold text-white">:P</p>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg border-violet-200 border-t-[16px] border-8 w-[500px] p-8">
          <h1 className="text-center text-2xl font-bold mb-8">방 설정</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm">라운드 설정</label>
              <input
                type="number"
                className="w-64 border border-violet-200 focus:border-violet-300 rounded px-2 py-1 text-right"
                defaultValue={3}
              />
            </div>

            {/* 시간 설정 */}
            <div className="flex justify-between items-center">
              <label className="text-sm">시간 설정</label>
              <input
                type="number"
                className="w-64 border border-violet-200 focus:border-violet-300 rounded px-2 py-1 text-right"
                defaultValue={60}
              />
            </div>

            {/* 인원 설정 */}
            <div className="flex justify-between items-center">
              <label className="text-sm">인원 설정</label>
              <input
                type="number"
                className="w-64 border border-violet-200 focus:border-violet-300 rounded px-2 py-1 text-right"
                defaultValue={4}
              />
            </div>

            {/* 게임 모드 설정 */}
            <div className="flex justify-between items-center">
              <label className="text-sm">게임 모드</label>
              <select className="w-64 border border-violet-200 focus:border-violet-300 rounded px-2 py-1 text-right">
                <option value="easy">easy mode</option>
                <option value="hard">hard mode</option>
              </select>
            </div>

            {/* 비밀번호 입력 */}
            <div className="flex justify-between items-center">
              <label className="text-sm">비밀번호 입력</label>
              <input
                type="password"
                className="w-64 border border-violet-200 focus:border-violet-300 rounded px-2 py-1 text-right"
              />
            </div>

            {/* 힌트 ON/OFF - 토글 제작해야 함 */}
            <div className="flex justify-between items-center">
              <label className="text-sm">힌트 ON/OFF</label>
              <input type="checkbox" className="rounded-full" />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-purple-300 hover:bg-violet-200 border-2 border-violet-200 text-white px-8 py-2 rounded-lg">
              취소
            </button>
            <button className="hover:bg-purple-300 border-2 border-violet-200 px-8 py-2 rounded-lg">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingUi;
