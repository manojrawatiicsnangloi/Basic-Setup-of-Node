import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
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
}, { timestamps : true });

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;