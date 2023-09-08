import React, { useContext, useEffect, useState } from "react";
import DiceImage1 from "../assets/dice-one-solid.svg";
import DiceImage2 from "../assets/dice-two-solid.svg";
import DiceImage3 from "../assets/dice-three-solid.svg";
import DiceImage4 from "../assets/dice-four-solid.svg";
import DiceImage5 from "../assets/dice-five-solid.svg";
import DiceImage6 from "../assets/dice-six-solid.svg";
import NavbarMenu from "../page/NavbarMenu";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

let patriesAPI = [
  "Fondant supreme",
  "Cake tout Chocolat",
  "Cake Framboise chocolat",
  "Brioche sucrée avec chocolat",
  "Cake glacé fondant au chocolat",
  "Eclairs au chocolat",
  "Tarte poire chocolat",
  "Banana au chocolat",
];

function Dice(props) {
  const { setResultData, patriesOneTime, setPatriesOneTime } = props;
  const { user } = useContext(AuthContext);

  const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  const [dice1, setDice1] = useState(diceImages[0]);
  const [dice2, setDice2] = useState(diceImages[1]);
  const [dice3, setDice3] = useState(diceImages[2]);
  const [dice4, setDice4] = useState(diceImages[3]);
  const [dice5, setDice5] = useState(diceImages[4]);

  let dicesArray = [dice1, dice2, dice3, dice4, dice5];

  let hasThreeSameValues = (arr) => {
    let countObj = {};

    for (let element of arr) {
      if (countObj[element]) {
        countObj[element]++;
      } else {
        countObj[element] = 1;
      }
    }

    for (let count of Object.values(countObj)) {
      if (count === 3) {
        return true;
      }
    }

    return false;
  };

  let hasFourSameValues = (arr) => {
    let countObj = {};

    for (let element of arr) {
      if (countObj[element]) {
        countObj[element]++;
      } else {
        countObj[element] = 1;
      }
    }

    for (let count of Object.values(countObj)) {
      if (count === 4) {
        return true;
      }
    }

    return false;
  };

  let hasFiveSameValues = (arr) => {
    let countObj = {};

    for (let element of arr) {
      if (countObj[element]) {
        countObj[element]++;
      } else {
        countObj[element] = 1;
      }
    }

    for (let count of Object.values(countObj)) {
      if (count === 5) {
        return true;
      }
    }

    return false;
  };

  let result;
  let patries = [];

  const getNewWinner = () => {
    const newWinner = {
      userWinner: user?._id,
      patries: patriesOneTime,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/findNewWinner`, newWinner)
      .then((response) => {
        console.log("response.data", response.data);
      })
      .catch((error) => console.log(error));
  };

  const rollDice = () => {
    const randomNum1 = Math.floor(Math.random() * 6);
    const randomNum2 = Math.floor(Math.random() * 6);
    const randomNum3 = Math.floor(Math.random() * 6);
    const randomNum4 = Math.floor(Math.random() * 6);
    const randomNum5 = Math.floor(Math.random() * 6);

    setDice1(diceImages[randomNum1]);
    setDice2(diceImages[randomNum2]);
    setDice3(diceImages[randomNum3]);
    setDice4(diceImages[randomNum4]);
    setDice5(diceImages[randomNum5]);

    if (result >= 3) return getNewWinner();
  };

  const getRandomElementsFromArray = (arr, numElements) => {
    const shuffledArray = arr?.sort(() => Math.random() - 0.5);
    return shuffledArray?.slice(0, numElements);
  };

  const randomThreePatries = getRandomElementsFromArray(patriesAPI, 3);
  const randomFourPatries = getRandomElementsFromArray(patriesAPI, 4);
  const randomFivePatries = getRandomElementsFromArray(patriesAPI, 5);

  if (hasThreeSameValues(dicesArray) === true) {
    result = 3;
    patries.push(randomThreePatries);
  } else if (hasFourSameValues(dicesArray) === true) {
    result = 4;
    patries.push(randomFourPatries);
  } else if (hasFiveSameValues(dicesArray) === true) {
    result = 5;
    patries.push(randomFivePatries);
  } else {
    result = 0;
  }

  useEffect(() => {
    setResultData(result);
    setPatriesOneTime(patries[0]);
  }, [result]);

  return (
    <div>
      <NavbarMenu />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 50,
        }}
      >
        <h1 className="font-title-page ">TENTEZ VOTRE CHANCE !!!</h1>
        <div className="container">
          <img className="square" src={dice1}></img>
          <img className="square" src={dice2}></img>
          <img className="square" src={dice3}></img>
          <img className="square" src={dice4}></img>
          <img className="square" src={dice5}></img>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={rollDice}
        >
          Jouer
        </button>

        <div style={{ marginTop: 50, marginBottom: 100 }}>
          {result > 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3 style={{ color: "#bf764f" }}>
                Félicitations ! Vous avez gangné {result} patiseries
              </h3>
              <ul
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "300px",
                  fontSize: "20px",
                  color: "#6dc0a7",
                }}
              >
                {patriesOneTime?.map((elm) => {
                  return <li>{elm}</li>;
                })}
              </ul>
            </div>
          ) : (
            <h3 style={{ fontSize: "25px", color: "#bf764f" }}>
              Bien tenté, mais vous aurez plus de chance la prochaine fois !!!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dice;
