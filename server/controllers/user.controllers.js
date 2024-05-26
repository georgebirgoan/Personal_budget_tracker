// import { errorHandler } from "../utils/error.js";
// import bcryptjs from 'bcryptjs';
// import User from "../models/model.user.js"
const { errorHandler } = require("../utils/error.js");
const bcryptjs = require('bcryptjs');
const User = require('../models/model.user.js');

// Funcția user
const user = (req, res) => {
    console.log("in user");
    res.json({
        message: "in user function"
    });
    res.send("daaa");
};

// Funcția updateUser
const updateUser = async (req, res, next) => {
    console.log("in update username", req.user.username);
    console.log("in update id", req.user.id);
    console.log("req params id", req.params.id);

    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can update only your account!"));
    }

    try {
        console.log("user", req.body.username);
        console.log("email", req.body.email);
        console.log("email", req.body.password);
        
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture
                }
            }, {
                new: true
                }
        );
        const {
            password,
            ...rest
        } = updatedUser._doc;

        console.log("restttttttttt",rest);

        res.status(200).json({data:rest });
    } catch (error) {
        next(error);
    }
};

// Funcția deleteUser
const deleteUser = async (req, res, next) => {
    console.log("innnnnnnnn delteUser");
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can delete only your account"));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted successfully");
    } catch (error) {
        next(error);
    }
};

// Exportăm funcțiile
module.exports = {
    user,
    updateUser,
    deleteUser
};
