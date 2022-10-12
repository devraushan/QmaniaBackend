import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain } from "express-validator";

//validate function will generate a validator function for parameters which will be validation chain
const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    return errors.array();
  };
};

export = validate;
