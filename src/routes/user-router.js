import express from "express";
import { getUsers } from "../controllers/users.controller.js";
const userRouter = express.Router();

userRouter
.route("/")
.get(getUsers)

export default userRouter;