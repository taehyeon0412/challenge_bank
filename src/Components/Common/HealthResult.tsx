import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//img
import Success from "../../assets/healthResultImg/success.png";
import SuccessText from "../../assets/healthResultImg/successText.png";
import Fail from "../../assets/healthResultImg/fail.png";
import FailText from "../../assets/healthResultImg/failText.png";

interface Result {
  result?: string;
}

function HealthResult({ result }: Result) {
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
        <img
          src={SuccessText}
          alt="SuccessText"
          className="text-2xl font-extrabold text-black pr-3"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <img src={Fail} alt="Fail" className="pb-20" />
      <div className="flex">
        <img
          src={FailText}
          alt="FailText"
          className="text-2xl font-extrabold text-black pr-3"
        />
      </div>
    </div>
  );
}

export default HealthResult;
