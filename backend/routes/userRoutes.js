import express from "express";
import {
  loginUser,
  logoutUser,
  signUpUser,
} from "../controller/userController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.get("/logout", verifyJWT, logoutUser);

export default router;
