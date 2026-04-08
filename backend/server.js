import app from "./src/app.js";

import connectDB from "./src/config/db.js";

import morgan from "morgan";
connectDB();

app.use(morgan("dev"));
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
