// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/user.routes.js';
// import authRoutes from './routes/auth.routes.js';
// import path from 'path';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import { readdirSync } from "fs";
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { readdirSync } = require("fs");

// Acces env
dotenv.config();
const app = express();
console.log(__dirname);
/*
app.use(express.static(path.join(__dirname,'/client/public')));
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,'/client/public/index.html'))
})*/

const port = process.env.PORT || 8000;
console.log('portul', port);

app.use(cookieParser());

app.use(express.json());

//https://personal-budget-tracker-d.onrender.com
// Configurare CORS
app.use(cors({
    //origin: "http://localhost:3000", // Permit accesul de la orice origin altfel eroarea asta
    //Access to fetch at 'http://localhost:3001/api/google' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request 
    //doesn't pass access control check: The 'Access-Control-Allow-Origin' header has a value '
      origin: "https://personal-budget-tracker-d.onrender.com",
    methods: "GET,PUT,POST,DELETE", // Specifică metodele acceptate
    credentials: true, // Permit trimiterea cookie-urilor de autentificare
}));



// Conectare la baza de date
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('DATABASE CONNECTED MONGO');
}).catch((err) => {
    console.log('Not connected to database', err);
});

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
    app.use('/', (req,res)=>{
        res.send("iei");
    });

// Pornire server
const server = app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});
