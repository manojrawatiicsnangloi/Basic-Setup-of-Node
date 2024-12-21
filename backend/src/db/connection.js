import mongoose from "mongoose";

const connectionToDatabase = async () => {
    try {       
        await mongoose.connect("mongodb+srv://manojrawat:password@cluster0.7agg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo_app");
        console.log('Connected Successfully');
    } catch (error) {
        console.log(error);
        throw new Error("Some Error Occured");
    }
}

export default connectionToDatabase;