import User from "../models/userModel.js";
import cookieParser from "cookie-parser";
import { generateJWT } from "../utils/generateJWT.js";
// <-----------------------------------------SignUp User------------------------------------>

const options = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};
export const signUpUser = async (req, res) => {
  try {
    const { fullName, userName, email, gender, password, confirmPassword } =
      req.body;

    if (
      !fullName ||
      !userName ||
      !email ||
      !gender ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check if username or email already exists

    const userNameExists = await User.findOne({ userName });
    if (userNameExists) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // compare password

    const isMatch = password === confirmPassword;
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    // const otherProfilePic = `https://avatar.iran.liara.run/public/other?username=${userName}`;
    let profilePic;
    if (gender === "male") {
      profilePic = boyProfilePic;
    } else {
      profilePic = girlProfilePic;
    }
    // create new user

    const newUser = await User.create({
      fullName,
      userName,
      email,
      gender,
      password,
      profilePic,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    console.log("Error in signing up user");

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// <-----------------------------Login User------------------------------->

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check user present in db or not

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // compare password

    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const { accessToken, refreshToken } = await generateJWT(user._id);

    res.setHeader("access-Token", accessToken);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        message: "Login successfull",
        data: {
          _id: user._id,
          fullName: user.fullName,
          userName: user.userName,
          email: user.email,
          profilePic: user.profilePic,
          gender: user.gender,
        },
      });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// <--------------------------------Logout User------------------------------->

export const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    user.refreshToken = null;
    await user.save();
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({
        success: true,
        message: "Logout successfull",
      });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
