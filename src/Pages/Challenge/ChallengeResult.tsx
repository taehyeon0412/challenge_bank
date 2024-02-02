import { useParams } from "react-router-dom";

//component
import BottomNav from "Components/Common/BottomNav";
import SaveResult from "Components/Common/SaveResult";
import HealthResult from "Components/Common/HealthResult";

//util
import { challengeLayout } from "Util/tailwindStyle";

function ChallengeResult() {
  const { challengeName, result } = useParams();

  console.log(challengeName, result);

  return (
    <div>
      <div className={`${challengeLayout}`}>
        {challengeName &&
        ["coffee", "eat", "delivery"].includes(challengeName) ? (
          <SaveResult result={result} />
        ) : (
          <HealthResult result={result} />
        )}

        <BottomNav />
      </div>
    </div>
  );
}

export default ChallengeResult;
