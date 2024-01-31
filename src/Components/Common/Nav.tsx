import { useNavigate } from "react-router-dom";

//Img
import NavHome from "../../assets/nav/nav_home.png";
import NavChallenge from "../../assets/nav/nav_challenge.png";
import NavMy from "../../assets/nav/nav_my.png";

function Nav() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", { replace: true });
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
      />
      <img
        src={NavMy}
        alt="NavMy"
        className="mx-auto cursor-pointer"
        onClick={navigateToMy}
      />
    </div>
  );
}

export default Nav;
