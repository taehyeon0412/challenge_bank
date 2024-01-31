import Nav from "Components/Common/Nav";
import { layout } from "Util/tailwindStyle";
import { useParams } from "react-router-dom";

//challengeImg
import MainCoffee from "../../assets/challengeImg/init/mainCoffee.png";
import CoffeeTitle from "../../assets/challengeImg/init/coffeeTitle.png";
import CoffeeSubtitle from "../../assets/challengeImg/init/coffeeSubtitle.png";
import InitButton from "../../assets/challengeImg/init/common/initButton.png";

function ChallengeInit() {
  const { challengeName } = useParams();

  console.log(challengeName);

  let content;

  if (challengeName === "coffee") {
    content = (
      <>
        <img src={MainCoffee} alt="MainCoffee" className="pt-11 pb-8" />
        <img src={CoffeeTitle} alt="CoffeeTitle" className="pb-7" />
        <img src={CoffeeSubtitle} alt="CoffeeSubtitle" className="pb-12" />
        <img
          src={InitButton}
          alt="InitButton"
          className="mb-6 cursor-pointer"
        />
      </>
    );
  } else {
    content = (
      <>
        <div className="flex justify-center items-center h-full py-64">
          <p className="text-xl font-semibold text-black">개발 중입니다.</p>
        </div>
        <img src={InitButton} alt="InitButton" className="pb-6" />
      </>
    );
  }

  return (
    <div className={`${layout}`}>
      <div className="flex flex-col items-center">{content}</div>
      <Nav />
    </div>
  );
}

export default ChallengeInit;
