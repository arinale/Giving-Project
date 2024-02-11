const router = require("express").Router();

const {
  getAllUsersCtrl,
  getUserProfileCtrl,
} = require("../controllers/usersController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

const { verifyToken } = require("../middlewares/verifyToken");
// /api/users/profile

router.route("/profile").get(verifyTokenAndAdmin, getAllUsersCtrl);

// /api/users/profile/:id

router.route("/profile/:id").get(verifyTokenAndAdmin, getUserProfileCtrl);

module.exports = router;
