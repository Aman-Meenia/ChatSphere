import User from "../models/userModel.js";
import Friend from "../models/friendModel.js";

//<-------------------------------get Friends ----------------------------------->
export const getFriends = async (req, res) => {
  try {
    console.log("req.User is ", req.user);
    const { id: userId } = req.user;
    console.log("UserId is ", userId);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const friend = await Friend.find({ sender: userId });

    const friendList = await Friend.aggregate([
      {
        $match: {
          $or: [{ sender: user._id }, { receiver: user._id }],
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

    return res.status(200).json({
      success: true,
      friendList,
    });
  } catch (err) {
    // console.log("Error while getting friends", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
