import models from "../../Models/index";
import validate from "./parallelValidator";
import { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
const { User } = models;

//Create User Validator Function
const getErrors = validate([
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password Should be atleast 8 characters long").isLength({
    min: 8,
  }),
  body("userName", "Username should be atleast 5 characters long").isLength({
    min: 5,
  }),
  body(
    "displayName",
    "Display Name must be atlease 4 characters long"
  ).isLength({ min: 4 }),
]);

//Run Validator Function
const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = await getErrors(req, res, next);

  if (errors.length) {
    res.status(400).send({ success: false, errors });
  } else {
    next();
  }
};

//MiddleWare to check for Uniqueness of Function
const checkForUniqueness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userByEmail = await User.findOne({ email: req.body.email });
  const userByUserName = await User.findOne({ userName: req.body.userName });
  if (userByUserName) {
    res.status(403).send({
      success: false,
      error: "User with same userName already exists",
    });
    return;
  }
  if (userByEmail) {
    res
      .status(403)
      .send({ success: false, error: "User with same email already exists" });
    return;
  }
  next();
};
export default { validateUser, checkForUniqueness };
