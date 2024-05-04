import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", register)
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.route("/").get(isAuthenticated,  getOtherUsers);




export default router; 