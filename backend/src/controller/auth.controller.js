import userModel from "../model/user.model.js";

import jwt from "jsonwebtoken";

import { Config } from "../config/config.js";

async function sendTokenResponse(user) {
  const token = jwt.sign({ id: user._id }, Config.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
}

export const register = async (req, res) => {
  const { email, password, fullname, contact } = req.body;

  try {
    const existingUser = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = userModel.create({
      email,
      password,
      fullName,
      contact,
    });

    const token = await sendTokenResponse(user);

    res.status(201).json({
      message: "user Registered successfully",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        contact: user.contact,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
