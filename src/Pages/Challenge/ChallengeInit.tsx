import BottomNav from "Components/Common/BottomNav";
import { layout } from "Util/tailwindStyle";
import { useNavigate, useParams } from "react-router-dom";

//component
import Button from "Components/Common/Button";

//challengeImg
/* 
import CoffeeTitle from "../../assets/challengeImg/init/coffeeTitle.png";
import CoffeeSubtitle from "../../assets/challengeImg/init/coffeeSubtitle.png"; */

function ChallengeInit() {
  const { challengeName } = useParams();
  const navigate = useNavigate();

  const initButtonClick = () => {
    if (
      challengeName &&
      ["coffee", "eat", "delivery"].includes(challengeName)
    ) {
      navigate(`/challengeinit/${challengeName}/setting`, { replace: true });
    } else {
      navigate(`/challengeinit/${challengeName}/challengestart`, {
        replace: true,
      });
    }
  };

  console.log(challengeName);

  return (
    <div className={`${layout} flex flex-col`}>
      <div className="flex flex-col items-center">
        <img
          src={require(`../../assets/challengeImg/init/${challengeName}.png`)}
          alt={challengeName}
          className="pt-11 pb-8"
        />
        <img
          src={require(`../../assets/challengeImg/init/${challengeName}Title.png`)}
          alt={`${challengeName} title`}
          className="pb-7"
        />
        <img
          src={require(`../../assets/challengeImg/init/${challengeName}Subtitle.png`)}
          alt={`${challengeName} subtitle`}
          className="pb-12"
        />
      </div>

      <div className="flex-grow"></div>

      <div onClick={initButtonClick}>
        <Button text="시작하기" />
      </div>
      <BottomNav />
    </div>
  );
}

export default ChallengeInit;
