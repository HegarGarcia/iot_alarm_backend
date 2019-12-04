const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser
} = require("../controllers/user.controllers");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = router;
