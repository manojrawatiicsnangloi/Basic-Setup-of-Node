import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todo_title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    todo_desc: {
        type: String,
        required: true
    }
}, { timestamps });

const todoModel = mongoose.model(todoSchema);

export default todoModel;