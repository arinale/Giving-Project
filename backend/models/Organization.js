const { default: mongoose } = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { text } = require("express");

//User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    profilePhoto: {
      type: Object,
      default: {
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        publicId: null,
      },
    },
    bio: {
      type: String,
    },

    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  phone: {
    type:String,
    required: true,
    trim: true,
    length: 10,
  }, 
{ timestamps: true }
 
);

