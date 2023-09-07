import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dice from "./components/dice/Dice";
import Home from "./page/Home";
import Reward from "./components/dice/Reward";
import { useState } from "react";
import Winner from "./components/dice/Winner";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

function App() {
  const [resultData, setResultData] = useState();
  const [rewardsData, setRewardData] = useState();
  const [winner, setWinner] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/yams"
          element={
            <Dice
              resultData={resultData}
              setResultData={setResultData}
              winner={winner}
              setWinner={setWinner}
              rewardsData={rewardsData}
              setRewardData={setRewardData}
            />
          }
        />
        <Route path="/rewards" element={<Reward resultData={resultData} />} />
        <Route path="/winner" element={<Winner resultData={resultData} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
