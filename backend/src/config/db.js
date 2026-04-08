import mongoose from "mongoose";

import { Config } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(Config.MONGO_URI).then(() => {
      console.log("connected to database");
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
