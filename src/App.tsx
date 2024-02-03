import React, { useEffect } from "react";
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

function App() {
  return (
    <>
      <ImagePreloader />
      <BrowserRouter>
        <Routes>
          {/* ChallengePage */}

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
    </>
  );
}

export default App;
