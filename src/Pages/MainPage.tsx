import React from "react";

//svg
import { ReactComponent as Title1Icon } from "../assets/main/title1.svg";
import { ReactComponent as Title2Icon } from "../assets/main/title2.svg";
import { ReactComponent as TapRound1 } from "../assets/main/tapRound1.svg";
import { ReactComponent as NavBar } from "../assets/main/navBar.svg";
import healthTapTitle1 from "../assets/main/healthTapTitle1.png";
import healthTapTitle2 from "../assets/main/healthTapTitle2.png";
import SavingTapTitle1 from "../assets/main/savingTapTitle1.png";
import SavingTapTitle2 from "../assets/main/savingTapTitle2.png";
import CoffeeIcon from "../assets/saveTapImg/coffeeIcon.png";
import CoffeeTitle1 from "../assets/saveTapImg/coffeeTitle1.png";
import CoffeeTitle2 from "../assets/saveTapImg/coffeeTitle2.png";
import EatIcon from "../assets/saveTapImg/eatIcon.png";
import EatTitle1 from "../assets/saveTapImg/eatTitle1.png";
import EatTitle2 from "../assets/saveTapImg/eatTitle2.png";
import DeliveryIcon from "../assets/saveTapImg/deliveryIcon.png";
import DeliveryTitle1 from "../assets/saveTapImg/deliveryTitle1.png";
import DeliveryTitle2 from "../assets/saveTapImg/deliveryTitle2.png";

//util
import {
  layout,
  menuIconStyle,
  menuOneStyle,
  menuTitleStyle,
} from "./../util/tailwindStyle";

function MainPage() {
  return (
    <div className={`${layout}`}>
      <div className="flex flex-col pb-11">
        <div className="pb-4">
          <Title1Icon />
        </div>

        <div>
          <Title2Icon />
        </div>
      </div>
      {/*상단 설명 부분 */}

      <div className="grid grid-cols-2 bg-white rounded-full justify-between py-1 mb-12 gap-6">
        <div className="flex left-0 cursor-pointer relative justify-center items-center">
          <TapRound1 />
          <img
            src={SavingTapTitle1}
            alt="SavingTapTitle1"
            className=" absolute"
          />
        </div>

        <div className="flex right-0 cursor-pointer relative justify-center items-center">
          <img
            src={healthTapTitle2}
            alt="healthTapTitle2"
            className=" absolute"
          />
        </div>
      </div>
      {/* 챌린지 탭 부분 */}

      <div className="grid grid-cols-2 gap-9 items-center justify-center mb-4">
        <div className={`${menuOneStyle} bg-menu-color1`}>
          <div className={`${menuIconStyle}`}>
            <img src={CoffeeIcon} alt="Coffee Icon" />
          </div>

          <div className={`${menuTitleStyle}`}>
            <img src={CoffeeTitle1} alt="CoffeeTitle1" />
            <img src={CoffeeTitle2} alt="CoffeeTitle2" />
          </div>
        </div>

        <div className={`${menuOneStyle} bg-menu-color2`}>
          <div className={`${menuIconStyle}`}>
            <img src={EatIcon} alt="CoffeeIcon" />
          </div>

          <div className={`${menuTitleStyle}`}>
            <img src={EatTitle1} alt="EatTitle1" />
            <img src={EatTitle2} alt="EatTitle2" />
          </div>
        </div>
      </div>

      <div>
        <div className="relative bg-menu-color2 rounded-2xl text-center py-24 cursor-pointer">
          <div className="absolute flex right-0 top-2 outline-none border-none">
            <img src={DeliveryIcon} alt="DeliveryIcon" />
          </div>

          <div className="absolute flex flex-col items-center top-16 pl-4 gap-2">
            <img src={DeliveryTitle1} alt="DeliveryTitle1" />
            <img src={DeliveryTitle2} alt="DeliveryTitle2" />
          </div>
        </div>
      </div>
      {/* 챌린지 개별 선택 부분 */}
      {/* 145 190 */}

      <div className="fixed inset-x-0 mx-auto bottom-0 w-full max-w-[412px] pb-2 ">
        <NavBar />
      </div>

      {/* 하단 네비게이션 */}
    </div>
  );
}

export default MainPage;
