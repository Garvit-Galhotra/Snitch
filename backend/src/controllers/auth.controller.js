import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config.js";

function generateToken(user, res) {
  const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);
  return token;
}

export const register = async (req, res) => {
  const { username, email, password, isSeller, contact } = req.body;

  console.log();

  const userAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (userAlreadyExists) {
    res.status(404).json({
      message: "User already exists",
      success: false,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
    role: isSeller ? "seller" : "buyer",
    contact,
  });

  await generateToken(user, res);

  res.status(201).json({
    message: "User register successfully",
    success: true,
    user: {
      username: user.username,
      email: user.email,
      role: user.role,
      contact: user.contact,
    },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    res.status(401).json({
      message: "User not found in database",
      success: false,
    });
  }

  const hashPassword = bcrypt.compare(password, user.password);

  if (!hashPassword) {
    res.status(401).json({
      message: "Password is incorrect",
      success: false,
    });
  }

  await generateToken(user, res);

  res.status(200).json({
    message: "User loggedin successfully",
    success: true,
    user: {
      username: user.username,
      email: user.email,
      role: user.role,
      contact: user.contact,
    },
  });
};
