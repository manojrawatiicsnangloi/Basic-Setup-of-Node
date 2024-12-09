import express from "express";
import connectionToDatabase from "./db/connection.js";

const app = express();

app.listen(3000, async ()=>{
    await connectionToDatabase();
    console.log("Port is running on the servcer 3000");
});