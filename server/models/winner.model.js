import mongoose from "mongoose";
const { Schema, model } = mongoose;

const winnerSchema = new Schema({
  userWinner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  pastries: [{ type: String }],
  date: {
    type: Date,
    default: Date.now,
  },
});

const WinnerModel = model("Winner", winnerSchema);

export default WinnerModel;
