import BottomNav from "Components/Common/BottomNav";
import { layout } from "Util/tailwindStyle";
import { useNavigate, useParams } from "react-router-dom";

//challengeImg
import MainCoffee from "../../assets/challengeImg/init/mainCoffee.png";
import CoffeeTitle from "../../assets/challengeImg/init/coffeeTitle.png";
import CoffeeSubtitle from "../../assets/challengeImg/init/coffeeSubtitle.png";
import InitButton from "../../assets/challengeImg/init/common/initButton.png";

function ChallengeInit() {
  const { challengeName } = useParams();
  const navigate = useNavigate();

  console.log(challengeName);

  const initButtonClick = () => {
    navigate(`/challengeinit/${challengeName}/setting`, { replace: true });
  };

  let content;

  if (challengeName === "coffee") {
    content = (
      <>
        <img src={MainCoffee} alt="MainCoffee" className="pt-11 pb-8" />
        <img src={CoffeeTitle} alt="CoffeeTitle" className="pb-7" />
        <img src={CoffeeSubtitle} alt="CoffeeSubtitle" className="pb-12" />
      </>
    );
  } else {
    content = (
      <>
        <div className="flex justify-center items-center h-full py-64">
          <p className="text-xl font-semibold text-black">개발 중입니다.</p>
        </div>
      </>
    );
  }

  return (
    <div className={`${layout}`}>
      <div className="flex flex-col items-center">{content}</div>
      <img
        src={InitButton}
        alt="InitButton"
        className="mb-6 cursor-pointer"
        onClick={initButtonClick}
      />
      <BottomNav />
    </div>
  );
}

export default ChallengeInit;