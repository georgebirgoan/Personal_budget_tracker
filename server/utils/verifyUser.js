import jwt from 'jsonwebtoken'
import {errorHandler} from '../utils/error.js'


export const verifyToken = (req, res, next) => {
        console.log("in verificare token");
        const token = req.cookies.access_token;
        
        console.log("token verificare", token);
        if (!token) return next(errorHandler(401, "Not authenticated!!"));
        
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return next(errorHandler(403, "Token is not valid!"));

            // get user in req user, it comes from jwt
            //also here we get the id user that we need to compare 
            req.user = user;
            next();
        });
};
