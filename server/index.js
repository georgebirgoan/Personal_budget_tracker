import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cartRoutes from './routes/cartRoutes.js'

dotenv.config();

const app=express();

const port=process.env.PORT || 8000;
console.log("port",port);

app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))



app.use("/api/cart",cartRoutes);


const server=app.listen(port,()=>{
    console.log("Server is runnig on port: ",port);
})

