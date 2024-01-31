import { layout } from "Util/tailwindStyle";
import BottomNav from "Components/Common/BottomNav";
import TopNav from "Components/Common/TopNav";

//Img

function Setting() {
  return (
    <div>
      <TopNav />
      <div className={`${layout} text-black text-2xl`}>
        <BottomNav />
      </div>
    </div>
  );
}

export default Setting;
