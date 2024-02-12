import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./src/api/user/user.js";
import balanceRouter from "./src/api/balance/balance.js";
import spinRouter from "./src/api/spin/spin.js";

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/balance", balanceRouter);
app.use("/api/spin", spinRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
