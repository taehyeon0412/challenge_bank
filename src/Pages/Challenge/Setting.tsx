import { layout } from "Util/tailwindStyle";
import BottomNav from "Components/Common/BottomNav";
import TopNav from "Components/Common/TopNav";

function Setting() {
  return (
    <div>
      <TopNav />
      <div className={`${layout} text-black text-2xl`}>
        여기서 부터 본문
        <BottomNav />
      </div>
    </div>
  );
}

export default Setting;
