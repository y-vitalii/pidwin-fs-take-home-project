import express from "express";
import auth from "../../utils/auth.js";
import { getBalanceRequest } from "./balance-get.js";

const router = express.Router();

router.get("/", auth, getBalanceRequest);

export default router;