import mongoose from "mongoose";


const connectionToDatabase = async() => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017');
        console.log('Connected Successfully');
    } catch (error) {
        console.log(error);
        return;
    }
}

export default connectionToDatabase;