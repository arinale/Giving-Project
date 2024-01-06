const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");

/***--------------------------------
 * @description Get All Users Profile
 * @router     /api/users/profile
 * @method     GET
 * @access     private (only admin)
 ---------------***/
module.exports.getAllUsersCtrl = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports.registerUserCtrl = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const oldUser = await User.findOne({ email: email });
  if (oldUser) {
    return res.status(400).json("user already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ data: { user: newUser } });
});
