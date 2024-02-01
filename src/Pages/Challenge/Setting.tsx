//util
import { challengeLayout } from "Util/tailwindStyle";

//component
import BottomNav from "Components/Common/BottomNav";
import TopNav from "Components/Common/TopNav";
import ChallengeForm from "Components/Common/ChallengeForm";

//Img
import CoffeeBean from "../../assets/challengeImg/setting/coffeeBean.png";
import CoffeeBeanTitle from "../../assets/challengeImg/setting/coffeeBeanTitle.png";

function Setting() {
  return (
    <div>
      <TopNav />
      <div className={`${challengeLayout} flex flex-col items-center`}>
        <img src={CoffeeBean} alt="CoffeeBean" className="pb-7" />
        <img src={CoffeeBeanTitle} alt="CoffeeBeanTitle" className="pb-12" />

        <ChallengeForm />
        <BottomNav />
      </div>
    </div>
  );
}

export default Setting;
