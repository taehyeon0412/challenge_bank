import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page
import MainPage from "./Pages/MainPage";
import MyPage from "Pages/MyPage";
import ChallengeInit from "./Pages/Challenge/ChallengeInit";
import Setting from "./Pages/Challenge/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ChallengePage */}
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
  );
}

export default App;
