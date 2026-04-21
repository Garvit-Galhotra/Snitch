import Router from "express";

const authRouter = Router();

import { register, login, getUser } from "../controllers/auth.controller.js";

import {
  validateRegisterUser,
  validateLoginUser,
} from "../validators/auth.validator.js";

import { authenticateUser } from "../middleware/authUser.controller.js";

authRouter.post("/register", validateRegisterUser, register);

authRouter.post("/login", validateLoginUser, login);

authRouter.get("/get-me", authenticateUser, getUser);

export default authRouter;
