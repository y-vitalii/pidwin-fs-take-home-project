import Balance from "../../models/balance.js";
import { calculateWin, updateBalanceAfterSpin } from "../../utils/math.js";

const updateBalance = async (req, res, next) => {
    try {
        const { userId } = req;
        const { streak, bet, balance } = req.body;

        // Send an error if bet is more than current balance
        if (bet > balance) {
            return res.status(400).json({ message: "The bet must be less than your current balance." });
        }

        const winData = calculateWin(bet, streak);
        const updatedBalance = updateBalanceAfterSpin(balance, bet, winData.win);

        // Update balance document with a new amount
        const balanceDocument = await Balance.findOneAndUpdate(
            { userId },
            { amount: updatedBalance },
            { new: true }
        );

        req.body.balance = balanceDocument.amount;
        req.body.win = winData.win;
        req.body.isBonusWin = winData.isBonusWin;
        next();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default updateBalance;