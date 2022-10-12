import models from "../../Models/index";
import validate from "./parallelValidator";
import { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
const { User } = models;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//InterFace Declaration
interface LooseObject {
  [key: string]: any;
}

//Create Function for Validation
const getErrors = validate([
  body("userName").custom((userName) => {
    if (userName) {
      if (userName.length <= 5) {
        throw new Error("UserName must be atleast 5 characters long");
      }
      return User.findOne({ userName }).then((user: any) => {
        if (user) {
          return Promise.reject("A user with this username already exists");
        }
      });
    }
    return true;
  }),
  body("password").custom((password) => {
    if (password) {
      throw new Error("Password can't be Updated through this route");
    }
    return true;
  }),
  body("email").custom((email) => {
    if (email) {
      if (!email.match(emailRegex)) {
        throw new Error("Enter a valid Email");
      }
    }
    return User.findOne({ email }).then((user: any) => {
      if (user) {
        return Promise.reject("Email Already in Use");
      }
    });

    return true;
  }),
  body("displayName", "displayName must be atleast 4 characters long").custom(
    (name) => {
      if (name) {
        name.isLength({ min: 4 });
      }
      return true;
    }
  ),
]);

//Implementation of above generated Validation Function
const validateUserUpdation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = await getErrors(req, res, next);
  const errorFreeParams = {};

  const errorNote: LooseObject = {};        //This object Takes a Note of which parameters contains validation errors 
  errors.forEach((err) => {
    const param = err.param;
    errorNote[param] = true;
  });
  const updatableData: LooseObject = {};        //This object Stores all the error free data which will be updated
  for (let key in req.body) {
    if (key === "user") continue;
    const data = req.body[key];
    if (!errorNote[key]) {
      updatableData[key] = data;
    }
  }
  req.body.updatableData = updatableData;
  req.body.error = errors;
  next();
};

export default validateUserUpdation;
