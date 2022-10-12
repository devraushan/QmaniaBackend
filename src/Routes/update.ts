import { Router } from "express";
import userCrud from "../controllers/CRUDUser/updateUserData"
import fetchuser from "../MiddleWares/fetchUser";
import validateUserUpdation from "../MiddleWares/Validator/userUpdateValidation";
const {updateUserData,deleteUser} = userCrud;
const updateUser = Router();

updateUser.put("/",[fetchuser,validateUserUpdation],updateUserData)
updateUser.delete("/",fetchuser,deleteUser);

export default updateUser; 