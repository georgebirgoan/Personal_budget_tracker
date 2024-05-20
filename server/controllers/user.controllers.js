import { errorHandler } from "../utils/error.js";
import bycriptjs from 'bcryptjs';
import User from "../models/model.user.js"
 

export const  user=(req,res)=>{
    console.log("in user");
    res.json({
        message:"in user function"
    })
}


//update user
export const updateUser=async (req,res,next)=>{
    console.log("in update username",req.user.username)
    console.log("in update id",req.user.id)

    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"You can update only your account!"));
    } 

    try{
        console.log("email",req.body.password);
        if(req.body.password){
            req.body.password=bycriptjs.hashSync(req.body.password,10);
        }
        
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    passwordL:req.body.password,
                    profilePicture:req.body.profilePicture
                }
            },
            {new:true}
        );
        const {password,...rest}=updatedUser._doc;
        res.status(200).json(rest);
    }catch(error){
        next(error);
    }
}


export const deleteUser=async (req,res,next)=>{
    console.log("innnnnnnnn delteUser")
    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"You cand delete only your account"));
    }
    try{
        //search all user and delete with specific id
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted with succes")
    }catch(error){
        next(error);
    }
}


