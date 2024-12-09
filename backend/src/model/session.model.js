import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    valid: {
        type: Boolean,
        default         : true
    }
}, {
    timestamps
});

const SessionModel = mongoose.model("Session", SessionSchema);

export default SessionModel;