import { useParams } from "react-router-dom";

//component
import BottomNav from "Components/Common/BottomNav";
import SaveResult from "Components/Common/SaveResult";
import TopNav from "Components/Common/TopNav";

//util
import { challengeLayout } from "Util/tailwindStyle";

function ChallengeResult() {
  const { result } = useParams();

  console.log(result);

  return (
    <div>
      <div className={`${challengeLayout}`}>
        <SaveResult result={result} />
        <BottomNav />
      </div>
    </div>
  );
}

export default ChallengeResult;
