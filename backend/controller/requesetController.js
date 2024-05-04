import Request from "../models/requesetModel.js";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import Friend from "../models/friendModel.js";
// <---------------------------Send Request ------------------------>

export const sendRequest = async (req, res) => {
  try {
    let { receiver } = req.body;
    receiver = receiver.trim();

    if (!receiver) {
      return res.status(400).json({
        success: false,
        message: "Receiver id is required",
      });
    }

    const sender = req.user._id;

    // validate the mongo id

    if (!mongoose.Types.ObjectId.isValid(receiver)) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // check user exists
    const userExists = await User.findById(receiver);

    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "User not exists",
      });
    }

    // if receiver is same as sender
    const receiverUserObj = new mongoose.Types.ObjectId(receiver);
    if (sender.equals(receiverUserObj)) {
      return res.status(400).json({
        success: false,
        message: "Cannot send request to yourself",
      });
    }

    // check if already friend

    let alreadyFriends = await Friend.findOne({ sender, receiver });

    if (alreadyFriends) {
      return res.status(400).json({
        status: false,
        message: "Already friends",
      });
    }
    alreadyFriends = await Friend.findOne({
      receiver: sender,
      sender: receiver,
    });
    if (alreadyFriends) {
      return res.status(400).json({
        status: false,
        message: "Already friends",
      });
    }

    // check if request already sent or not

    const request = await Request.findOne({ sender, receiver });
    if (request) {
      return res.status(400).json({
        success: false,
        message: "Request already sent",
      });
    }

    // check if request is already received

    const requestReceived = await Request.findOne({ sender, receiver });
    if (requestReceived) {
      return res.status(400).json({
        success: false,
        message: "Request already received",
      });
    }

    const newRequest = await Request.create({
      sender,
      receiver,
    });

    return res.status(200).json({
      success: true,
      message: "Request sent successfully",
      data: newRequest,
    });
  } catch (err) {
    console.log("Error in request reject api");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// <---------------------------Accept Request ------------------------>

export const acceptRequest = async (req, res) => {
  try {
    let { sender } = req.body;
    sender = sender.trim();
    const receiver = req.user._id;
    // if sender id not present
    if (!sender) {
      return res.status(400).json({
        success: false,
        message: "Sender id is required",
      });
    }

    // check if sender id is a valid mongodb id

    if (!mongoose.Types.ObjectId.isValid(sender)) {
      return res.status(400).json({
        success: false,
        message: "Sender id is not valid",
      });
    }

    // check if request received

    const requestRec = await Request.findOne({ sender, receiver });

    if (!requestRec) {
      return res.status(400).json({
        status: 400,
        message: "No request received",
      });
    }

    // Accept the request
    // Push in the friend model No need to check if already friend ,checked while sending friend request

    const newFriend = await Friend.create({
      sender,
      receiver,
    });

    const requestDelete = await Request.findOneAndDelete({ sender, receiver });

    return res.status(200).json({
      success: true,
      message: "Request accept",
    });
  } catch (err) {
    console.log("Error in accept request api");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//<---------------------------Reject Request ------------------------>

export const rejectRequest = async (req, res) => {
  try {
    let { sender } = req.body;
    sender = sender.trim();
    const receiver = req.user._id;

    // check empty

    if (!sender) {
      return res.status(400).json({
        success: false,
        message: "Sender id is required",
      });
    }

    // check valid mongo Id

    if (!mongoose.Types.ObjectId.isValid(sender)) {
      return res.status(400).json({
        success: false,
        message: "Sender id is not valid",
      });
    }

    // check if request received

    const requestRec = await Request.findOne({ sender, receiver });

    if (!requestRec) {
      return res.status(400).json({
        status: 400,
        message: "No request received",
      });
    }

    // if request present remove it

    const requestDelete = await Request.findOneAndDelete({ sender, receiver });

    return res.status(200).json({
      success: true,
      message: "Request cancel successfully",
    });
  } catch (err) {
    console.log("Error in reject request api ");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
