import mongoose, {Schema} from "mongoose";

const balanceSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  amount: { type: Number, default: 100 }
});

export default mongoose.model("Balance", balanceSchema);