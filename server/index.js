import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { readdirSync } from "fs";




// Acces env
dotenv.config();
const app = express();



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
    app.use('/',(req,res)=>{
       res.send("App work!"); 
    })


    app.use('/api',(req,res)=>{
        res.send("App merge!"); 
     })
    
     app.use('/api/user', userRoutes);
     app.use('/api/auth', authRoutes);


    // readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

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
