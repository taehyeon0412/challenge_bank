import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//img
import Money from "../../assets/saveResultImg/money.png";
import Success from "../../assets/saveResultImg/success.png";
import Fail from "../../assets/saveResultImg/fail.png";
import Clap from "../../assets/saveResultImg/clap.png";

interface Result {
  result?: string;
}

function SaveResult({ result }: Result) {
  const [isResult, setIsResult] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState(``);
  const { challengeName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsResult(result);
  }, [result]);
  //ResultChoice(컴포넌트)에서 ${result}값을 받아옴

  useEffect(() => {
    if (typeof challengeName === "undefined") {
      console.error("Challenge name is undefined.");
      //challengeName이 undefined이면 실행을 방지해서 오류를 막음
      return;
    }
    const userPrice = localStorage.getItem(challengeName); //로컬에 있는 키값을  가져옴

    if (userPrice) {
      const priceData = JSON.parse(userPrice); //Json으로 저장된 값을 다시 객체로 돌림

      if (Array.isArray(priceData) && priceData.length > 0) {
        const firstItem = priceData[0];
        //배열이고 price에 있는 정보가 1개 이상이면 firstItem에 priceData의 첫번째 정보를 넣는다

        if (typeof firstItem === "object" && "priceValue" in firstItem) {
          setPrice(firstItem.priceValue);
          //firstItem이 객체이고 null이나 문자열이나 숫자와 같은 다른 데이터 유형이 아닌지 확인
          //priceValue라는 속성이 firstItem 객체 내에 존재하는지 확인
          //setPrice에 넣어줌
        }
      }
    }
  }, []);
  //로컬스토리지에서 value값을 들고오는 함수

  /* console.log(isResult); */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(`/challengeinit/${challengeName}/challengestart`, {
        replace: true,
      });
      //달력페이지로 돌아감
    }, 2000); //3초

    // 컴포넌트가 언마운트되면 타이머를 정리 (cleanup)
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  //3초뒤에 페이지 이동함수

  return isResult === "success" ? (
    <div className="flex flex-col justify-center items-center">
      <img src={Success} alt="Success" className="pb-16" />
      <div className="flex">
        <span className="text-2xl font-extrabold text-black pr-3">
          {new Intl.NumberFormat("en-US").format(Number(price))}원이 채워졌어요
        </span>
        <img src={Money} alt="Money" className="w-[30px] h-[30px]" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <img src={Fail} alt="Fail" className="pb-16" />
      <div className="flex">
        <div className="text-2xl font-extrabold text-black pr-3 flex flex-col">
          <div>오늘 하루도 고생 많았어요</div>
          <div>챌린지는 내일도 계속되니깐</div>
          <div className="flex items-center">
            <span className="pr-2">조금 더 힘내요</span>
            <img src={Clap} alt="Clap" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveResult;
