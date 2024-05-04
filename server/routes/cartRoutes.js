import express from 'express';
import {user} from '../controllers/cartController.js'
const router=express.Router();


router.get('/',user);

export default router;

