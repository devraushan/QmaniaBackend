import { Router } from "express";
import getUser from "../controllers/getUser";
import getUserToken from "../controllers/getUserToken";
import fetchuser from "../MiddleWares/fetchUser";
const login = Router();

//Return Auth Token to the User
login.post("/",getUserToken)
//Return Details of the User
login.post("/fetchuser",fetchuser,getUser)

export default login;