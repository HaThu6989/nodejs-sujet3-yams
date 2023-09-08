import WinnerModel from "../models/winner.model.js";

export const findNewWinner = (req, res) => {
  const { userWinner, patries } = req.body;
  const newWinner = { userWinner, patries };

  WinnerModel.create(newWinner)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        message: "error finding a new winner",
        error: err,
      });
    });
};

export const getAllWinners = (req, res) => {
  WinnerModel.find()
    .populate("userWinner")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of winners", err);
      res.status(500).json({
        message: "error getting list of winners",
        error: err,
      });
    });
};
