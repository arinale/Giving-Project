const asyncHandler = require("express-async-handler");
const { User, validateUpdateUser } = require("../models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const path = require("path");

/***--------------------------------
 * @description Get All Users Profile
 * @router     /api/users/profile
 * @method     GET
 * @access     private (only admin)
 ---------------***/
module.exports.getAllUsersCtrl = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
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

/***--------------------------------
 * @description Get  User Profile
 * @router     /api/users/profile/:id
 * @method     GET
 * @access     public 
 ---------------***/
module.exports.getUserProfileCtrl = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json(user);
});

/***--------------------------------
 * @description PUT  User Profile
 * @router     /api/users/profile/:id
 * @method     PUT
 * @access     private(only user himself) 
 ---------------***/
module.exports.updateUserProfileCtrl = asyncHandler(async (req, res) => {
  const { error } = validateUpdateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  const updateUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio,
      },
    },
    { new: true }
  ).select("-password");
  res.status(200).json(updateUser);
});

/***--------------------------------
 * @description Get All Users Count
 * @router     /api/users/count
 * @method     GET
 * @access     private (only admin)
 ---------------***/
module.exports.getUsersCountCtrl = asyncHandler(async (req, res) => {
  const count = await User.countDocuments();
  res.status(200).json(count);
});

/***--------------------------------
 * @description  Profile Photo Upload
 * @router     /api/users/profile/profile-photo-upload
 * @method     POST
 * @access     private (only logged in user)
 ---------------***/

module.exports.ProfilePhotoUploadCtrl = asyncHandler(async (req, res) => {
  //1.Validation
  if (!req.file) {
    return res.status(400).json({ message: "no file provided" });
  }
  // 2. Get the path to the image
  const imagePath =path.join(__dirname,`../images/${req.file.filename`})
    // 3. Upload to cloudinary
    // 4. Get the user from DB
    // 5.Delete the old profile photo if exist
    //6.Change the profilePhoto field in the DB
    //7.Send response to client

    res
      .status(200)
      .json({ message: "your profile photo uploaded successfully " });
  // 8.Remove image from the server
});
