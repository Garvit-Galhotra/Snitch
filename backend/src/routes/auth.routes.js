import Router from "express";

const authRouter = Router();

import {
  validateRegisterUser,
  validateLoginUser,
} from "../validator/auth.validator.js";

import { register, login } from "../controller/auth.controller.js";

authRouter.post("/register", validateRegisterUser, register);

authRouter.post("/login", validateLoginUser, login);

export default authRouter;
