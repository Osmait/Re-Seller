import { NextFunction, Response, Request } from "express";
import categoriSchema from "../schemas/categoriSchema";
import userSchema from "../schemas/userSchema";
import { errorInterfase } from "../types/user";

export const validateInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const info = req.body;
    await userSchema.validateAsync(info);
  } catch (error) {
    res.status(404).json({
      msg: (error as errorInterfase).details[0].message,
    });
    return;
  }

  next();
};

export const validateInfoCategori = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const info = req.body;
    await categoriSchema.validateAsync(info);
  } catch (error) {
    res.status(404).json({
      msg: (error as errorInterfase).details[0].message,
    });
    return;
  }

  next();
};
