import express from "express";
import connectionToDatabase from "./db/connection.js";
import deserializeUser from "./middleware/deserializeuser.middleware.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin : "*"
}));

app.use(deserializeUser);

app.listen(3000, async () => {
    try {
        await connectionToDatabase();
        console.log("Port is running on the servcer 3000");
    } catch (error) {
        console.log(error);
    }
});