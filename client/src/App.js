import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dice from "./components/dice/Dice";
import Home from "./page/Home";
import PatriesWinner from "./components/dice/PatriesWinner";
import { useContext, useEffect, useState } from "react";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import IsPrivate from "./page/isPrivate";
import axios from "axios";
import { AuthContext } from "./context/auth.context";

function App() {
  const [resultData, setResultData] = useState();
  const [winnerPatries, setWinnerPatries] = useState();
  const [patriesOneTime, setPatriesOneTime] = useState();
  const { user } = useContext(AuthContext);

  const getNewWinner = () => {
    const newWinner = {
      userWinner: user._id,
      patries: patriesOneTime,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/findNewWinner`, newWinner)
      .then((response) => {
        console.log("response.data", response.data);
        // setWinnerPatries(response.data);
      })
      .catch((error) => console.log(error));
  };

  // if (resultData >= 3) {
  //   getNewWinner();
  // }
  useEffect(() => {
    getNewWinner();
  }, [patriesOneTime]);

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
                patriesOneTime={patriesOneTime}
                setPatriesOneTime={setPatriesOneTime}
              />
            </IsPrivate>
          }
        />
        <Route
          path="/patriesWinner"
          element={
            <IsPrivate>
              <PatriesWinner resultData={resultData} />
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
