import Balance from "../../models/balance.js";

const getBalance = async (req, res, next) => {
    try {
        const { userId } = req;
        const existingBalance = await Balance.findOne({ userId });
        const balance = existingBalance?.amount || 0;

        if (balance === 0) {
            return res.status(400).json({ message: "Your Balance is 0" });
        }

        req.body.balance = balance;
        next();
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
};

const getBalanceRequest = async (req, res) => {
    try {
        const { userId } = req;
        const existingBalance = await Balance.findOne({ userId });

        res.status(200).json({ balance: existingBalance?.amount || 0 });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export { getBalance, getBalanceRequest };