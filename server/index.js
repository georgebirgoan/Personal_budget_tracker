import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//const __dirname = path.resolve();

// Acces env
dotenv.config();
const app = express();

app.use(express.static('public'))

const port = process.env.PORT || 8000;
console.log('portul', port);

// Middleware pentru cookie parser
app.use(cookieParser());

// Middleware pentru parsarea JSON
app.use(express.json());

// Configurare CORS
app.use(cors({
    origin:"personal-budget-tracker-12.vercel.app",
    credentials: true,
}));


// Conectare la baza de date
mongoose.connect(process.env.DATABASE, {
}).then(() => {
    console.log('DATABASE CONNECTED MONGO');
}).catch((err) => {
    console.log('Not connected to database', err);
});

// Montare rute
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);



// Middleware pentru gestionarea erorilor
app.use((err, req, res, next) => {
    console.log("middleware eoraere")
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});

// Pornire server
const server = app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});
