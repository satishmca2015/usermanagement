const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/users", userController.addUser);//create user
router.get("/users", userController.getUsers);//get all users
router.put("/users/:id", userController.updateUser);//update user
router.get("/users/:id", userController.getOneUser);//get one user
router.delete("/users/:id", userController.deleteUser);//delete user

module.exports = router;
