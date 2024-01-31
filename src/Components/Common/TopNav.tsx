import { useNavigate, useParams } from "react-router-dom";
import BackBtn from "../../assets/topNav/backBtn.png";
import CalenderBtn from "../../assets/topNav/calenderBtn.png";
import Vector from "../../assets/topNav/vector.png";

function TopNav() {
  const navigate = useNavigate();
  const { challengeName } = useParams();

  //console.log(challengeName);

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  let content;

  if (challengeName === "coffee") {
    content = "Coffee Challenge";
  } else if (challengeName === "eat") {
    content = "Dinner Out Challenge";
  } else if (challengeName === "delivery") {
    content = "Delivery food Challenge";
  } else if (challengeName === "alcohol") {
    content = "Bad habits Challenge";
  } else if (challengeName === "walk") {
    content = "Walking Challenge";
  } else if (challengeName === "health") {
    content = "Health Challenge";
  }

  return (
    <div className="grid grid-cols-8 gap-6 justify-center items-center fixed inset-x-0 mx-auto top-0 w-full max-w-[412px] bg-main-color">
      <img
        src={BackBtn}
        alt="BackBtn"
        className="col-span-2 cursor-pointer"
        onClick={navigateToHome}
      />
      <span className="col-span-4 flex relative justify-center items-center font-extrabold text-sm text-black mx-auto cursor-pointer">
        {content}{" "}
        <img src={Vector} alt="Vector" className="absolute top-2 -right-4" />
      </span>
      <img
        src={CalenderBtn}
        alt="CalenderBtn"
        className="col-span-2 cursor-pointer justify-self-end"
      />
    </div>
  );
}

export default TopNav;
