import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//Img
import NavHome from "../../assets/bottomNav/navHome.svg";
import NavChallenge from "../../assets/bottomNav/navChallenge.svg";
import NavMy from "../../assets/bottomNav/navMy.svg";
import NavMyA from "../../assets/bottomNav/navMyA.svg";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  /* useEffect(() => {
    if (location.pathname === "/mypage") {
      console.log(location.pathname + "입니다.");
    }
  }, []); // 디버깅  */

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  const navigateToChallenge = () => {
    navigate("/challengeinit/coffee", { replace: true });
  };

  const navigateToMy = () => {
    navigate("/mypage", { replace: true });
  };

  return (
    <div className="grid grid-cols-3 justify-center items-center fixed inset-x-0 mx-auto bottom-0 w-full max-w-[412px] py-2 bg-main-color">
      <img
        src={NavHome}
        alt="NavHome"
        className="mx-auto cursor-pointer"
        onClick={navigateToHome}
      />
      <img
        src={NavChallenge}
        alt="NavChallenge"
        className="mx-auto cursor-pointer"
        onClick={navigateToChallenge}
      />

      {location.pathname === "/mypage" ? (
        <img src={NavMyA} alt="NavMyA" className="mx-auto cursor-pointer" />
      ) : (
        <img
          src={NavMy}
          alt="NavMy"
          className="mx-auto cursor-pointer"
          onClick={navigateToMy}
        />
      )}
    </div>
  );
}

export default BottomNav;
