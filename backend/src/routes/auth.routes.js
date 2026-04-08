import Router from "express";

const authRouter = Router();

import { validateRegisterUser } from "../validator/auth.validator.js";


authRouter.post('/register', validateRegisterUser)

export default authRouter;
