import express from "express";
import { getUsers, postUser } from "../controllers/users.controller.js";
const userRouter = express.Router();

userRouter
.route("/")
.post(postUser)
.get(getUsers)

export default userRouter;