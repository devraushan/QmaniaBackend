import { config } from "dotenv";
const jwt = require("jsonwebtoken")
const SECRET = process.env.SIGNATURE;

const generateAuthToken = async (user:any)=>{
    const userData = {
        id: user.id,
      };
      const authToken = await jwt.sign(userData, SECRET);
      return authToken;
}

const verifyToken =async (authToken:string) => {
    const data = await jwt.verify(authToken,SECRET);
    return data.id;
}

const token = {generateAuthToken,verifyToken}
export = token;