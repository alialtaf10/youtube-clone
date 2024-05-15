// Dot env inconsistent method
// require('dotenv').config({path: './env'});



import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});



connectDB()
.then( () => {
    app.on("error", (err) => {
        console.log("Err: ",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App listenig on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB error: " , err);
})


















// Not approved Method

/*

import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Err: ",error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is Listening on ${process.env.PORT}`);
        })
    } catch (error){
        console.error("ERROR: ",error);
        throw error;
    }
})()
*/

