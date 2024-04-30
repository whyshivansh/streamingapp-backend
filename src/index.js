import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"



connectDB();


/*
import express from "express";
const app = express()
// function connectDB(){

// }

// connectDB()

(async () =>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${BD_NAME}`)
        app.on("error",(error)=>{
            console.log("app not able to connect to database")
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR: ",error)
        throw err
    }
})()
*/