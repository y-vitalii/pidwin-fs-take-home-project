import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";
import Balance from "../../models/balance.js";
import { NEW_USER_TOKENS } from "../../utils/math.js";

const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  let result;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Does Not Match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const balance = await Balance.create({
      userId: result._id, amount: NEW_USER_TOKENS
    })

    const token = jwt.sign(
      {
        _id: result._id,
        name: result.name,
        email: result.email,
        password: result.hashedPassword,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, balance: balance?.amount || 0 });
  } catch (error) {
    // Delete the created user in case something went wrong
    if (result._id) await User.findByIdAndDelete(result._id);
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export default signup;