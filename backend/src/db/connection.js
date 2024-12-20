import mongoose from "mongoose";

const connectionToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/todo_app");
        console.log('Connected Successfully');
    } catch (error) {
        console.log(error);
        throw new Error("Some Error Occured");
    }
}

export default connectionToDatabase;