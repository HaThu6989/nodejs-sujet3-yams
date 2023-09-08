import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dice from "./components/Dice";
import Home from "./page/Home";
import PastriesWinner from "./components/PastriesWinner";
import { useState } from "react";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import IsPrivate from "./page/isPrivate";
import axios from "axios";

function App() {
  const [resultData, setResultData] = useState();
  const [pastriesOneTime, setPastriesOneTime] = useState();
  const [winnersPastries, setWinnersPastries] = useState([]);

  console.log("winnersPastries", winnersPastries);
  const getWinnersPastries = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/winners`)
      .then((response) => {
        setWinnersPastries(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/yams"
          element={
            <IsPrivate>
              <Dice
                setResultData={setResultData}
                pastriesOneTime={pastriesOneTime}
                setPastriesOneTime={setPastriesOneTime}
              />
            </IsPrivate>
          }
        />
        <Route
          path="/pastriesWinner"
          element={
            <IsPrivate>
              <PastriesWinner
                resultData={resultData}
                winnersPastries={winnersPastries}
                getWinnersPastries={getWinnersPastries}
              />
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
