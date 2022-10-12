import models from "../../Models/index"
import { Request,Response } from "express"
const {User} = models
import handlePassword from "../hashFunction"
const {checkPass} = handlePassword;
const bcrypt = require("bcrypt")

const updateUserData = async (req:Request,res:Response)=>{
    try {
        const userId = req.body.user.id;
        const updatables = req.body.updatableData;
        const preUpdatedUser = await User.findByIdAndUpdate(userId,updatables);
        const postUpdateUser = await User.findById(userId).select("-password");
        res.send({success: true,errors : req.body.error,updatedData:postUpdateUser});
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req:Request,res:Response)=>{
    try {
        const userId = req.body.user.id;
        const password = req.body.password;
        const user = await User.findById(userId)
        const isPassCorrect = await checkPass(password,user.password);
        if(isPassCorrect){
            const deletedUser = await User.findByIdAndDelete(`${userId}`).select("-password");
            if(deletedUser){
                res.send({success: true,status: "the user has been deleted"});
            }else{
                res.status(500).send({success: false,status: "user not found or some error occured"})
            }
        }
        else{
            res.status(403).send({error: "wrong password"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,error:"either user not exists or internal server error occured"})
    }
}
export default {updateUserData,deleteUser}