import { layout } from "Util/tailwindStyle";
import SplashMain from "../../assets/splashImg/splash.png";
import SplashTitle from "../../assets/splashImg/splashTitle.png";
import SplashSubtitle from "../../assets/splashImg/splashSubtitle.png";
import Coin1 from "../../assets/splashImg/coin1.png";
import Coin2 from "../../assets/splashImg/coin2.png";
import Coin3 from "../../assets/splashImg/coin3.png";
import Coin4 from "../../assets/splashImg/coin4.png";
import Coin5 from "../../assets/splashImg/coin5.png";
import Coin6 from "../../assets/splashImg/coin6.png";
import Coin7 from "../../assets/splashImg/coin7.png";
import Coin8 from "../../assets/splashImg/coin8.png";

function SplashScreen() {
  const fadeOutClass = "transition-opacity duration-1000 opacity-0";
  const visibleClass = "opacity-100";

  return (
    <div
      className={`${layout} absolute z-50 w-full max-w-[412px] mx-auto
      flex flex-col justify-center items-center overflow-hidden`}
    >
      <div className="relative w-full h-36 flex justify-center ">
        <img src={Coin1} alt="Coin1" className="absolute top-10 -left-14 " />
        <img src={Coin2} alt="Coin2" className="absolute -top-5 -right-14" />
        <img src={Coin3} alt="Coin3" className="absolute bottom-0 right-28" />
      </div>

      <img src={SplashTitle} alt="SplashTitle" />

      <div className="relative my-8">
        <img src={SplashMain} alt="SplashMain" />
        <img src={Coin4} alt="Coin4" className="absolute top-0 right-2" />
        <img src={Coin5} alt="Coin5" className="absolute top-28 -left-8" />
        <img src={Coin6} alt="Coin6" className="absolute bottom-0 right-0" />
      </div>

      <img src={SplashSubtitle} alt="SplashSubtitle" />

      <div className="relative w-full flex-grow">
        <img src={Coin7} alt="Coin7" className="absolute bottom-0" />
        <img src={Coin8} alt="Coin8" className="absolute -bottom-32 right-0 " />
      </div>
    </div>
  );
}

export default SplashScreen;
