require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import token from "./generateToken";
import { Request, Response } from "express";
import model from "../Models/index";
import handlePassword from "./hashFunction";
const { User } = model;
const {encryptPass} = handlePassword;
const SECRET = process.env.SIGNATURE;

const createUser = async (req:Request,res:Response)=>{
    {
        const { userName, password, email, displayName } = req.body;
        try {
          const hashPass = await encryptPass(password);
          const user = await User.create({
            userName,
            password: hashPass,
            email,
            displayName,
          });
          const authToken = await token.generateAuthToken(user)
          res.send({ authToken });
        } catch (error) {
          console.log(error);
        }
      }
}

export default createUser;