import mongoose from "mongoose";

const connectionToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://positivemind123456789:wBtx1FsUh2TjbjVO@cluster0.m52smdp.mongodb.net/");
        console.log('Connected Successfully');
    } catch (error) {
        console.log(error);
        throw new Error("Some Error Occured");
    }
}

export default connectionToDatabase;