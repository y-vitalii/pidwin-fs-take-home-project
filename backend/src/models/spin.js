import mongoose, {Schema} from "mongoose";

const spinSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    streak: { type: Number, default: 0 },
    win: { type: Number, default: 0 },
    isBonusWin: { type: Boolean, default: false },
    bet: { type: Number, required: true },
    coin: { type: String, enum: ['head', 'tail'], required: true }
});

export default mongoose.model("Spin", spinSchema);