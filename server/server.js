import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./routes/user.routes.js";
import WinnerRoute from "./routes/winner.routes.js";

dotenv.config();

const { MONGODB_URL, PORT, FRONT_END_URL } = process.env;
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: FRONT_END_URL,
  })
);

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected to MongoDB", MONGODB_URL))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.use("/", UserRoute);
app.use("/", WinnerRoute);

/**
 * https://www.youtube.com/watch?v=u-o30eBK3xs&ab_channel=ShaunHalverson
 * https://www.youtube.com/watch?v=M3InbHr0WAc&ab_channel=dcode
 * https://www.youtube.com/watch?v=4Bl5e9MdPC4&ab_channel=CodeWithVishal
 * https://www.youtube.com/watch?v=DY9LK7mq86s&ab_channel=DoSomeCoding
 */
