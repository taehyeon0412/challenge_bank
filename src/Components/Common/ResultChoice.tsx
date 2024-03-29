import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

//img
import Stamp from "../../assets/challengeImg/resultChoice/stamp.png";

interface Entry {
  date: string | null; //날짜가 없는 경우도 포함
  result: string;
}

function ResultChoice() {
  const navigate = useNavigate();
  const { challengeName } = useParams();

  const onClick = (result: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get(`date`);
    //url에서 date 연결된 값 찾기

    /* console.log(date); */

    const storageKey = `${challengeName}`; //키값

    let dataToSave: Entry[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
    //새로운 배열을 만들고 storageKey와 관련된 데이터를 찾아서 있으면 넣고 없으면 빈배열로 함

    const existingEntry = dataToSave.find(
      (entry: Entry) => entry.date === date
    );
    //현재항목 === 기존 항목 찾음

    if (existingEntry) {
      existingEntry.result = result; //기존항목이 있으면 업데이트를 함
    } else {
      dataToSave.push({ date, result }); //기존항목이 없으면 date,result 배열을 push함
    }

    localStorage.setItem(storageKey, JSON.stringify(dataToSave));

    navigate(
      `/challengeinit/${challengeName}/challengestart/result/${result}`,
      {
        replace: true,
      }
    );
  };
  //페이지 이동과 함께 result값을 전달해주고 전달받는쪽은 url에서 정보를 얻는다

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen max-w-[412px] inset-x-0 mx-auto z-50 opacity-0 bg-[rgba(86,204,195,0.5)] backdrop-blur-sm flex justify-center items-center"
      animate={{ opacity: 1 }}
    >
      <div className="w-[340px] h-[460px] px-4 bg-white rounded-2xl flex flex-col justify-center items-center relative shadow-custom">
        <img src={Stamp} alt="Stamp" className="absolute -top-32  right-0" />
        <div className="w-full h-24"></div>
        <span className="text-3xl font-bold text-[rgb(66,66,66)] pb-7">
          1일차 챌린지
        </span>

        <span className="text-grayColor text-sm font-semibold text-center leading-6 pb-10">
          챌린지를 완수하셨다면 스탬프를 찍어주세요 <br />
          멋지게 챌린지를 완수한 당신은 <br /> 무엇이든 해낼 수 있는 사람입니다!
        </span>

        <div className="flex flex-col w-full justify-center items-center text-center gap-5">
          <div
            className="w-full bg-menu-color1 py-3 rounded-xl shadow-custom cursor-pointer"
            onClick={() => onClick("success")}
          >
            <span className="text-lg font-extrabold text-white">완료</span>
          </div>

          <div
            className="w-full bg-white py-3 rounded-xl shadow-custom cursor-pointer"
            onClick={() => onClick("fail")}
          >
            <span className="text-lg font-extrabold text-mintColor">실패</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ResultChoice;
