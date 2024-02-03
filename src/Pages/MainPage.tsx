import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//MainImg
import { ReactComponent as Title1Icon } from "../assets/main/title1.svg";
import { ReactComponent as Title2Icon } from "../assets/main/title2.svg";
import { ReactComponent as TapRound1 } from "../assets/main/tapRound1.svg";

//menuImg
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
import AlcoholIcon from "../assets/healthTabImg/alcoholIcon.png";
import AlcoholTitle1 from "../assets/healthTabImg/alcoholTitle1.png";
import AlcoholTitle2 from "../assets/healthTabImg/alcoholTitle2.png";
import WalkIcon from "../assets/healthTabImg/walkIcon.png";
import WalkTitle1 from "../assets/healthTabImg/walkTitle1.png";
import WalkTitle2 from "../assets/healthTabImg/walkTitle2.png";
import GymIcon from "../assets/healthTabImg/gymIcon.png";
import GymTitle1 from "../assets/healthTabImg/gymTitle1.png";
import GymTitle2 from "../assets/healthTabImg/gymTitle2.png";

//util
import {
  layout,
  menuIconStyle,
  menuOneStyle,
  menuTitleStyle,
} from "./../Util/tailwindStyle";

//component
import Nav from "Components/Common/BottomNav";
import SplashScreen from "Components/Common/SplashScreen";

//--------------------------------------------------

function MainPage() {
  const [selectTab, setSelectTab] = useState(1);
  const navigate = useNavigate();

  const tapClick = (tabNumber: number) => {
    setSelectTab(tabNumber);
  };

  const navigateToChallenge = (challengeName: string) => {
    navigate(`/challengeinit/${challengeName}`);
  };

  return (
    <div className={`${layout}`}>
      <div className="pb-16">
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
          <div
            className="flex left-0 cursor-pointer relative justify-center items-center"
            onClick={() => tapClick(1)}
          >
            {selectTab === 1 ? (
              <>
                <TapRound1 />
                <img
                  src={SavingTapTitle1}
                  alt="SavingTapTitle1"
                  className=" absolute"
                />
              </>
            ) : (
              <img
                src={SavingTapTitle2}
                alt="SavingTapTitle2"
                className=" absolute"
              />
            )}
          </div>

          <div
            className="flex right-0 cursor-pointer relative justify-center items-center"
            onClick={() => tapClick(2)}
          >
            {selectTab === 1 ? (
              <>
                <img
                  src={healthTapTitle2}
                  alt="healthTapTitle2"
                  className=" absolute"
                />
              </>
            ) : (
              <>
                <TapRound1 />
                <img
                  src={healthTapTitle1}
                  alt="healthTapTitle1"
                  className=" absolute"
                />
              </>
            )}
          </div>
        </div>
        {/* 챌린지 탭 부분 */}

        <div className="grid grid-cols-2 gap-9 items-center justify-center mb-4">
          <div
            className={`${menuOneStyle} bg-menu-color1`}
            onClick={
              selectTab === 1
                ? () => navigateToChallenge(`coffee`)
                : () => navigateToChallenge(`alcohol`)
            }
          >
            <div className={`${menuIconStyle}`}>
              {selectTab === 1 ? (
                <img src={CoffeeIcon} alt="CoffeeIcon" />
              ) : (
                <img src={AlcoholIcon} alt="AlcoholIcon" />
              )}
            </div>

            <div className={`${menuTitleStyle}`}>
              {selectTab === 1 ? (
                <>
                  <img src={CoffeeTitle1} alt="CoffeeTitle1" />
                  <img src={CoffeeTitle2} alt="CoffeeTitle2" />
                </>
              ) : (
                <>
                  <img src={AlcoholTitle1} alt="AlcoholTitle1" />
                  <img src={AlcoholTitle2} alt="AlcoholTitle2" />
                </>
              )}
            </div>
          </div>

          <div
            className={`${menuOneStyle} bg-menu-color2`}
            onClick={
              selectTab === 1
                ? () => navigateToChallenge(`eat`)
                : () => navigateToChallenge(`walk`)
            }
          >
            <div className={`${menuIconStyle}`}>
              {selectTab === 1 ? (
                <img src={EatIcon} alt="EatIcon" />
              ) : (
                <img src={WalkIcon} alt="WalkIcon" />
              )}
            </div>

            <div className={`${menuTitleStyle}`}>
              {selectTab === 1 ? (
                <>
                  <img src={EatTitle1} alt="EatTitle1" />
                  <img src={EatTitle2} alt="EatTitle2" />
                </>
              ) : (
                <>
                  <img src={WalkTitle1} alt="WalkTitle1" />
                  <img src={WalkTitle2} alt="WalkTitle2" />
                </>
              )}
            </div>
          </div>
        </div>

        <div
          onClick={
            selectTab === 1
              ? () => navigateToChallenge(`delivery`)
              : () => navigateToChallenge(`health`)
          }
        >
          <div className="relative bg-menu-color2 rounded-2xl text-center py-24 cursor-pointer">
            <div className="absolute flex right-0 top-2 outline-none border-none">
              {selectTab === 1 ? (
                <img src={DeliveryIcon} alt="DeliveryIcon" />
              ) : (
                <img src={GymIcon} alt="GymIcon" />
              )}
            </div>

            <div className="absolute flex flex-col items-center top-16 pl-4 gap-2">
              {selectTab === 1 ? (
                <>
                  <img src={DeliveryTitle1} alt="DeliveryTitle1" />
                  <img src={DeliveryTitle2} alt="DeliveryTitle2" />
                </>
              ) : (
                <>
                  <img src={GymTitle1} alt="GymTitle1" />
                  <img src={GymTitle2} alt="GymTitle2" />
                </>
              )}
            </div>
          </div>
        </div>
        {/* 챌린지 개별 선택 부분 */}
      </div>
      {/* 메인화면 전체 */}

      <Nav />
      {/* 하단 네비게이션 */}
    </div>
  );
}

export default MainPage;
