//component
import BottomNav from "Components/Common/BottomNav";
import SaveResult from "Components/Common/SaveResult";
import TopNav from "Components/Common/TopNav";

//util
import { challengeLayout } from "Util/tailwindStyle";

function ChallengeResult() {
  return (
    <div>
      <TopNav />
      <div className={`${challengeLayout}`}>
        <SaveResult />
        <BottomNav />
      </div>
    </div>
  );
}

export default ChallengeResult;
