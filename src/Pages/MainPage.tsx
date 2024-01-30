function MainPage() {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4 text-xl font-extrabold">Do your Challenge !</p>

        <div className="flex flex-col justify-center items-center text-xs font-medium">
          <span>차곡차곡 쌓아가는 챌린지 뱅크</span>
          <span>하루하루, 빛나는 라이프 스타일이 펼쳐질꺼예요.</span>
        </div>
      </div>
      {/*상단 설명 부분 */}

      <div className="flex items-center justify-center gap-4">
        <div className="w-full py-2 bg-orange-500 rounded-lg text-sm text-center cursor-pointer">
          절약 챌린지
        </div>
        <div className="w-full py-2 bg-slate-400 rounded-lg text-sm text-center cursor-pointer">
          건강 챌린지
        </div>
      </div>
      {/* 챌린지 탭 부분 */}

      <div className="grid grid-cols-2 gap-4 items-center justify-center pt-4">
        <div className="bg-blue-500 rounded-lg text-center pb-36 py-4 text-xs cursor-pointer">
          커피 안 사먹기 챌린지!
        </div>
        <div className="bg-green-500 rounded-lg text-center pb-36 py-4 text-xs cursor-pointer">
          외식 한도 챌린지!
        </div>

        {/* 하단 1개의 div */}
        <div className="col-span-2 bg-red-500 rounded-lg text-center pb-36 py-4 text-xs cursor-pointer">
          배달 어플 줄이기 챌린지!
        </div>
      </div>
      {/* 챌린지 개별 선택 부분 */}
      {/* 145 190 */}

      <div className="fixed inset-x-0 mx-auto bottom-0 w-full max-w-[412px] bg-slate-500 py-4 border-t grid grid-cols-3 justify-center items-center text-center gap-4">
        <div className="py-2 bg-yellow-400">Home</div>
        <div className="py-2 bg-red-400">challenge</div>
        <div className="py-2 bg-orange-600">My</div>
      </div>

      {/* 하단 네비게이션 */}
    </div>
  );
}

export default MainPage;
