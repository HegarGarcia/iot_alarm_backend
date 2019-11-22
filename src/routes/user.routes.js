const { Router } = require("express");
const userController = require("../controllers/user.controllers");

const router = Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);

module.exports = router;
