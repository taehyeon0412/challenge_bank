import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../css/ReactCalender.css";

//component
import BottomNav from "Components/Common/BottomNav";
import TopNav from "./../../Components/Common/TopNav";
import ResultChoice from "Components/Common/ResultChoice";

//util
import { challengeLayout } from "Util/tailwindStyle";
import { getStringDateToday } from "Util/date";

function ChallengeStart() {
  const navigate = useNavigate();
  const { challengeName } = useParams();
  const [date, setDate] = useState(new Date());
  const Title = `${date.getMonth() + 1}월 챌린지 기록`;
  //js에서는 1월이 0으로 시작해서 +1을 해줘야됨
  const [dayClick, setDayClick] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  //현재 날짜 이후로 선택안되게 하기
  const isDateDisabled = (date: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); //날짜비교만 할수있게 시간을 전부 0으로 설정
    return date > today; // 날짜가 현재보다 많으면 true를 반환함
  };

  //날짜 클릭하면 현재날짜를 url로 넘기고 로컬스토리지에 있는 값을 업데이트하는 함수
  const onClick = (value: any) => {
    /*  setSelectedDate(value); */

    if (typeof challengeName === "undefined") {
      console.error("Challenge name is undefined.");
      //challengeName이 undefined이면 실행을 방지해서 오류를 막음
      return;
    }

    const clickedDate = new Date(
      value.getTime() - value.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 10);
    //한국에 맞는 현재시간 구하는 것

    const savedValue = localStorage.getItem(challengeName);
    //기존에 저장된 정보를 불러옴

    let updateValues = [];

    if (savedValue) {
      updateValues = JSON.parse(savedValue); //기존정보가 있으면 updateValues에 넣음
    }

    //클릭한 날짜를 변수에 넣고 if문을 이용하여 updateValues안에 클릭한 날짜가 있는지 includes로 찾음
    if (!updateValues.includes(clickedDate)) {
      updateValues.push(clickedDate);
      localStorage.setItem(challengeName, JSON.stringify(updateValues));
      setDayClick(true);

      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("date", clickedDate);
      window.history.pushState({}, "", currentUrl);
      /* 클릭한 현재 날짜를 url에 넣음 url로 정보를 주기 위함 */
    }
  };

  /* console.log(dayClick); */
  /* console.log(selectedDate); */

  return (
    <div>
      <TopNav />
      <div
        className={`${challengeLayout} flex flex-col items-center text-black`}
      >
        <span className="text-2xl font-bold pb-16">{Title}</span>

        <Calendar
          className="flex-grow text-black bg-main-color border-none"
          onChange={onChange}
          locale="en"
          showNavigation={false}
          showNeighboringMonth={false}
          formatShortWeekday={(locale, date) =>
            ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
          }
          calendarType="gregory"
          tileDisabled={({ date }) => isDateDisabled(date)}
          /* onClickDay={onClick} */
          onClickDay={onClick}
        />
        <BottomNav />
      </div>
      {dayClick && <ResultChoice />}
    </div>
  );
}

export default ChallengeStart;
