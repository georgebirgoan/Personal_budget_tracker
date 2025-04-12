// import express from "express"
// import {user,updateUser,deleteUser} from '../controllers/user.controllers.js';
// import {verifyToken} from '../utils/verifyUser.js'
const express = require("express");
const {
    user,
    updateUser,
    deleteUser
} = require('../controllers/user.controllers.js');
const {
    verifyToken
} = require('../utils/verifyUser.js');



const router=express.Router();

router.get('/',user);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)

module.exports = router;