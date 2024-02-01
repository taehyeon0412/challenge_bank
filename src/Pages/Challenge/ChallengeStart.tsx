import BottomNav from "Components/Common/BottomNav";
import { useState } from "react";

//util
import { challengeLayout } from "Util/tailwindStyle";
import TopNav from "./../../Components/Common/TopNav";

function ChallengeStart() {
  const currentDate = new Date();

  const Title = `${currentDate.getMonth() + 1}월 챌린지 기록`;
  //js에서는 1월이 0으로 시작해서 +1을 해줘야됨

  return (
    <div>
      <TopNav />
      <div className={`${challengeLayout} flex flex-col items-center `}>
        <span className="text-2xl text-black font-bold">{Title}</span>
        <BottomNav />
      </div>
    </div>
  );
}

export default ChallengeStart;
