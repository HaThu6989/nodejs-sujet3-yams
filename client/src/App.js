import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dice from "./components/Dice";
import Home from "./page/Home";
import PatriesWinner from "./components/PatriesWinner";
import { useEffect, useState } from "react";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import IsPrivate from "./page/isPrivate";
import axios from "axios";

function App() {
  const [resultData, setResultData] = useState();
  const [patriesOneTime, setPatriesOneTime] = useState();
  const [winnersPatries, setWinnersPatries] = useState([]);

  // useEffect(() => {
  //   getWinnersPatries();
  // }, [patriesOneTime]);

  // useEffect(() => {
  //   getWinnersPatries();
  // }, []);

  const getWinnersPatries = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/winners`)
      .then((response) => {
        setWinnersPatries(response.data);
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
              <PatriesWinner
                resultData={resultData}
                winnersPatries={winnersPatries}
                getWinnersPatries={getWinnersPatries}
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
