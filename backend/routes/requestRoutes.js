import express from "express";
import {
  acceptRequest,
  rejectRequest,
  sendRequest,
} from "../controller/requesetController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.post("/send", verifyJWT, sendRequest);
router.post("/reject", verifyJWT, rejectRequest);
router.post("/accept", verifyJWT, acceptRequest);

export default router;
