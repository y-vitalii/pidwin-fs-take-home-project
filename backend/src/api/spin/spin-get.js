import Spin from "../../models/spin.js";

const getSpins = async (req, res) => {
    try {
        const { userId } = req;
        const { limit = 10 } = req.body;
        const spins = await Spin.find({ userId }).sort({ createdAt: -1 }).limit(limit);
        const data = spins.map(spin => {
            return {
                bet: spin.bet,
                win: spin.win,
                isBonusWin: spin.isBonusWin,
                coin: spin.coin
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getLastSpinById = async (req, res, next) => {
    try {
        const { userId } = req;
        const lastSpin = await Spin.findOne({ userId }).sort({ createdAt: -1 }) || {};

        req.body.streak = lastSpin.streak || 0;
        next();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export { getSpins, getLastSpinById };