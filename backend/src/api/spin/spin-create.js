import Spin from "../../models/spin.js";
import { updateStreak } from "../../utils/math.js";

const spinCreate = async (req, res) => {
    try {
        const { userId } = req;
        const { bet, win, streak, balance, coin, isBonusWin } = req.body;
        const spinDocument = await Spin.create({
            userId,
            streak: updateStreak(streak, win),
            win,
            bet,
            coin,
            isBonusWin
        });
        const model = {
            win: spinDocument.win,
            bet,
            coin,
            isBonusWin,
            balance,
        }
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default spinCreate;