import mongoose from "mongoose";

import config from "./config.js";

function connectDB() {
  mongoose.connect(config.MONGO_URI).then(() => {
    console.log("server is connected to database");
  });
}

export default connectDB;
