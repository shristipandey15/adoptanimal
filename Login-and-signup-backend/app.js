// import express from "express";
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const user = require("./routes/user")
// import cors from "cors";
 
dotenv .config();

//mongodb connection
mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("MongoDB has been successfully"))
.catch((error)=>console.error("error starting MongoDB:",error))

app.use("/user",user)
//starting server
app.listen(4000,()=>
    console.log(`server started at 4000`));










