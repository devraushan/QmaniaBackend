import models from "../Models/index"
const bcrypt = require("bcrypt")
import { Request,Response } from "express";
import token from "./generateToken";
const {User} = models;

const getUserToken = async (req:Request,res:Response)=>{
    try {
        const {userName,password}=req.body;
        const user = await User.findOne({userName});
        let checkPass=false;
        if(user){
            checkPass = await bcrypt.compare(password,user.password);
        }
        if(!user||!checkPass){
            res.send({error: "username or password is incorrect."})
            return;
        }
        const authToken = await token.generateAuthToken(user);
        res.send({authToken});
    } catch (error) {
        console.log(error);
    }
}

export = getUserToken;