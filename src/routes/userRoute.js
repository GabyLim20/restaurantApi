const express = require("express");
const router = express.Router();
const { validateUserRequest } = require('../middleware/validateUserMiddleware');  
const userController = require("../controllers/userController");
const { userSchema } = require("../models/userModel");

// Rutas
router.post("/register", validateUserRequest(userSchema), userController.registerUser);  
router.post("/login", validateUserRequest(userSchema), userController.login);

module.exports = router;
