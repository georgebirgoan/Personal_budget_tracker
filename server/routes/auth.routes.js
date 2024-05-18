import express from 'express'
import { signUp } from '../controllers/auth.controllers.js';
import { signIn } from '../controllers/auth.controllers.js';
import { google } from '../controllers/auth.controllers.js';
import { signOutUser } from '../controllers/auth.controllers.js';

const router=express.Router();


router.post('/signup',signUp); //import controller
router.post('/signin',signIn);
router.post("/google",google);
router.get('/signout',signOutUser );


export default router;
