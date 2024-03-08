const router = require("express").Router();
const photoUpload = require("../middlewares/PhotoUpload.js");
const {
  getAllUsersCtrl,
  getUserProfileCtrl,
  updateUserProfileCtrl,
  getUsersCountCtrl,
  ProfilePhotoUploadCtrl,
} = require("../controllers/usersController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

const { verifyToken } = require("../middlewares/verifyToken");
// /api/users/profile

router.route("/profile").get(verifyTokenAndAdmin, getAllUsersCtrl);

// /api/users/profile/:id

router.route("/profile/:id").get(validateObjectId);
getUserProfileCtrl;

// /api/users/profile/:id
router
  .route("/profile/:id")
  .get(validateObjectId, getUserProfileCtrl)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUserProfileCtrl);

// /api/users/profile/profile-photo-upload
router
  .route("/profile/profile-photo-upload")
  .post(verifyToken, photoUpload.single("image"), ProfilePhotoUploadCtrl);

// /api/users/count

router.route("/count").get(verifyTokenAndAdmin, getUsersCountCtrl);
module.exports = router;
