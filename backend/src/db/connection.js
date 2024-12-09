import mongoose from "mongoose";


const connectionToDatabase = async() => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017');
        console.log('Connected Successfully');
    } catch (error) {
        throw new Error("Some Error Occured");
    }
}

export default connectionToDatabase;