import Router from "express";

const authRouter = Router();

import { register, login } from "../controllers/auth.controller.js";

import {
  validateRegisterUser,
  validateLoginUser,
} from "../validators/auth.validator.js";

authRouter.post("/register", validateRegisterUser, register);

authRouter.post("/login", validateLoginUser, login);
export default authRouter;
