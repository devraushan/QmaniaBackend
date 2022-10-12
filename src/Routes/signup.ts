import userValidator from "../MiddleWares/Validator/userValidator";
import { Router } from "express";
import createUser from "../controllers/createUser";
const { validateUser, checkForUniqueness } = userValidator;
const signup = Router();



signup.post("/",[validateUser, checkForUniqueness],createUser);

export default signup;
