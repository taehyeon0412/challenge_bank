import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MyPage from "Pages/MyPage";
import ChallengeInit from "./Pages/Challenge/ChallengeInit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/challengeinit/:challengeName"
          element={<ChallengeInit />}
        />
        {/* ChallengePage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
