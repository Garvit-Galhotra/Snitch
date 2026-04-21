import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

import authRouter from "./routes/user.routes.js";

app.use("/api/auth", authRouter);

export default app;
