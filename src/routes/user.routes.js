const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controllers");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);

module.exports = router;
