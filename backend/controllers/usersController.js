const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");

/***--------------------------------
 * @description Get All Users Profile
 * @router     /api/users/profile
 * @method     POST
 * @access     public
 ---------------***/
module.exports.getAllUsersCtrl = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
