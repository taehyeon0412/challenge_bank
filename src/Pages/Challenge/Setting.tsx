import { useParams } from "react-router-dom";

//util
import { challengeLayout } from "Util/tailwindStyle";

//component
import BottomNav from "Components/Common/BottomNav";
import TopNav from "Components/Common/TopNav";
import ChallengeForm from "Components/Common/ChallengeForm";

function Setting() {
  const { challengeName } = useParams();

  return (
    <div>
      <TopNav />
      <div className={`${challengeLayout} flex flex-col items-center`}>
        <img
          src={require(`../../assets/challengeImg/setting/${challengeName}.png`)}
          alt={challengeName}
          className="pb-7"
        />
        <img
          src={require(`../../assets/challengeImg/setting/${challengeName}Title.svg`)}
          alt={`${challengeName} title`}
          className="pb-12"
        />

        <ChallengeForm />
        <BottomNav />
      </div>
    </div>
  );
}

export default Setting;
