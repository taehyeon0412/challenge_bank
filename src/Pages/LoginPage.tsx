import { layout } from "Util/tailwindStyle";

//img
import Main from "../assets/login/main.png";
import LoginTitle from "../assets/login/loginTitle.svg";
import KakaoBtn from "../assets/login/kakaoBtn.svg";
import NaverBtn from "../assets/login/naverBtn.svg";

function LoginPage() {
  return (
    <div
      className={`${layout} absolute z-50 w-full max-w-[412px] mx-auto
      flex flex-col justify-center items-center overflow-hidden`}
    >
      <div className="pb-7">
        <img src={Main} alt="Main" />
      </div>

      <div className="pb-16">
        <img src={LoginTitle} alt="LoginTitle" />
      </div>

      <div>
        <img src={KakaoBtn} alt="KakaoBtn" className="cursor-pointer" />
        <img src={NaverBtn} alt="NaverBtn" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default LoginPage;
