import mongoose from "mongoose";
import Friend from "../models/friendModel.js";
import Message from "../models/messageModel.js";
// <----------------------------------Send Message------------------------------------->
export const sendMessage = async (req, res) => {
  try {
    let { receiver, message } = req.body;
    const sender = req.user._id;
    message = message?.trim();

    if (!receiver || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(receiver)) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    // console.log("sender is ", sender);
    // console.log("receiver is ", receiver);
    // console.log("message is ", message);
    receiver = new mongoose.Types.ObjectId(receiver);

    // const friendlist = await Friend.find({});
    // console.log(friendlist);

    const checkFriendStatus = await Friend.aggregate([
      {
        $match: {
          $or: [
            { sender: sender, receiver: receiver },
            { receiver: sender, sender: receiver },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          sender: 1,
          receiver: 1,
        },
      },
    ]);

    // console.log("checkFriendStatus", checkFriendStatus);
    if (!checkFriendStatus.length) {
      return res.status(400).json({
        success: false,
        message: "You are not friends",
      });
    }

    const newMessage = new Message({
      sender,
      receiver,
      msg: message,
    });

    await newMessage.save();

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
      checkFriendStatus: checkFriendStatus,
    });
  } catch (error) {
    // console.log("Error is " + error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//<----------------------------Get All Messages ----------------------------------->

export const getAllMessages = async (req, res) => {
  try {
    const sender = req.user._id;
    let { receiver } = req.body;

    if (!mongoose.Types.ObjectId.isValid(receiver)) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }

    receiver = new mongoose.Types.ObjectId(receiver);

    const allMessages = await Message.aggregate([
      {
        $match: {
          $or: [
            { sender: sender, receiver: receiver },
            { sender: receiver, receiver: sender },
          ],
        },
      },
      {
        $sort: {
          createdAt: 1,
        },
      },
      {
        $project: {
          sender: 1,
          receiver: 1,
          msg: 1,
          createdAt: 1,
        },
      },
    ]);

    // console.log("allMessages", allMessages);

    return res.status(200).json({
      success: true,
      message: "All messages fetched successfully",
      allMessages: allMessages,
    });
  } catch (error) {
    // console.log("error is the " + error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
