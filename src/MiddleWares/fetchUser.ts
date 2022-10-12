import { Request,Response,NextFunction} from "express";
import { verifyToken } from "../controllers/generateToken";

const fetchuser= async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const token = req.header("auth-token");
        if(!token){
            res.status(401).json({error:"unauthorised access"});
        }else{
            const id = await verifyToken(token)
            req.body.user={id};
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({error: "unauthorised access"});
    }
}

export = fetchuser;