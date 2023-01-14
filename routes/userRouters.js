// URL PATH
const express = require("express");
const router = express.Router();
const { home, createUser, getUsers, createTodo, createTask, getUserByName, findUser } = require("../controllers/userContrlers");


router.get("/", home)
router.post("/createUser", createUser)
router.get("/getUsers", getUsers)
router.get("/getUserName/:id", getUserByName)
router.patch("/findUser", findUser)
// router.patch("/createTodo/:id", createTodo)
// router.patch("/createTask/:id", createTask)



module.exports = router