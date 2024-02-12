import express from "express";
import auth from "../../utils/auth.js";
import spinCreate from "./spin-create.js";
import { getLastSpinById, getSpins } from "./spin-get.js";
import { getBalance } from "../balance/balance-get.js";
import updateBalance from "../balance/balance-update.js";

const router = express.Router();

router.post("/", auth, getBalance, getLastSpinById, updateBalance, spinCreate);
router.get("/", auth, getSpins);

export default router;