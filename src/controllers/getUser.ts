import { Request,Response } from "express";
import models from "../Models/index"
const {User} =  models;

const getUser = async (req:Request,res:Response)=>{
    try {
        const id = req.body.user.id;
        const user = await User.findById(id).select("-password");
        res.send(user);
        
    } catch (error) {
        console.log(error)
    }
}

export = getUser;