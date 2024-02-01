import BottomNav from "Components/Common/BottomNav";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../css/ReactCalender.css";

//util
import { challengeLayout } from "Util/tailwindStyle";
import TopNav from "./../../Components/Common/TopNav";

function ChallengeStart() {
  const [date, setDate] = useState(new Date());
  const Title = `${date.getMonth() + 1}월 챌린지 기록`;
  //js에서는 1월이 0으로 시작해서 +1을 해줘야됨

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  //현재 날짜 이후로 선택안되게 하기
  const isDateDisabled = (date: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); //날짜비교만 할수있게 시간을 전부 0으로 설정
    return date > today; // 날짜가 현재보다 많으면 true를 반환함
  };

  return (
    <div>
      <TopNav />
      <div
        className={`${challengeLayout} flex flex-col items-center text-black`}
      >
        <span className="text-2xl font-bold pb-16">{Title}</span>

        <Calendar
          className="flex-grow text-grayColor bg-main-color border-none"
          onChange={onChange}
          locale="en"
          showNavigation={false}
          showNeighboringMonth={false}
          formatShortWeekday={(locale, date) =>
            ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
          }
          calendarType="gregory"
          tileDisabled={({ date }) => isDateDisabled(date)}
        />
        <BottomNav />
      </div>
    </div>
  );
}

export default ChallengeStart;
