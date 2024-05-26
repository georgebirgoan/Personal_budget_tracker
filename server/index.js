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

// Middleware pentru cookie parser
app.use(cookieParser());

// Middleware pentru parsarea JSON
https://personal-budget-tracker-d.onrender.com
app.use(express.json());

// Configurare CORS
app.use(cors({
    origin: "https://personal-budget-tracker-d.onrender.com", // Permit accesul de la orice origin
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

// Montare rute

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


    app.use('/', (req,res)=>{
        res.send("iei");
    });
     //app.use('/api/auth', authRoutes);    


/*
const routesPath = "./routes";
readdirSync(routesPath).forEach(file => {
    if (file.endsWith('.js')) {
        import(path.join(routesPath, file))
            .then(module => {
                const route = module.default;
                app.use("/api", route);
            })
            .catch(error => {
                console.error('Error loading route:', error);
            });
    }
});
*/
// Middleware pentru gestionarea erorilor

/*
app.use((err, req, res, next) => {
    console.log("middleware eoraere")
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});*/


// Pornire server
const server = app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});
