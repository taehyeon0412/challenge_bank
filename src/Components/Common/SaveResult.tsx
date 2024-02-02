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
  const { challengeName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsResult(result);
  }, [result]);

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
          5,000원이 채워졌어요
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