import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page
import MainPage from "./Pages/MainPage";
import MyPage from "Pages/MyPage";
import ChallengeInit from "./Pages/Challenge/ChallengeInit";
import Setting from "./Pages/Challenge/Setting";
import ChallengeStart from "Pages/Challenge/ChallengeStart";
import ChallengeResult from "./Pages/Challenge/ChallengeResult";
import ResultChoice from "Components/Common/ResultChoice";
import ImagePreloader from "ImagePreloader";
import LoginPage from "Pages/LoginPage";

//지워야됨
import SplashScreen from "Components/Common/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFadeOut(true);
      setTimeout(() => setShowSplash(false), 1000);
    }, 2000); //2초 후에 페이드 아웃 시작
    return () => clearTimeout(timer); //컴포넌트가 언마운트될 때 타이머를 정리
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 함

  /*  2초 후에 Splash 화면이 페이드 아웃되고, 
  그 후 1초 후에 showSplash 상태를 false로 설정하여 Splash 화면을 숨기게 함*/

  return (
    <>
      {showSplash && (
        <div
          className={`transition-opacity duration-[1300ms] h-full ${
            startFadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <SplashScreen />
        </div>
      )}
      <ImagePreloader />
      {!showSplash && (
        <div>
          <BrowserRouter>
            <Routes>
              {/* ChallengePage */}

              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/challengeinit/:challengeName/challengestart/result/:result"
                element={<ChallengeResult />}
              />
              <Route
                path="/challengeinit/:challengeName/challengestart"
                element={<ChallengeStart />}
              />

              <Route
                path="/challengeinit/:challengeName/setting"
                element={<Setting />}
              />
              <Route
                path="/challengeinit/:challengeName"
                element={<ChallengeInit />}
              />

              <Route path="/mypage" element={<MyPage />} />
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
