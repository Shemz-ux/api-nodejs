import express from "express";
import { getUsers, postUser } from "../controllers/users.controller.js";
const userRouter = express.Router();

userRouter
.route("/")
.get(getUsers)
.post(postUser)

userRouter
.route("/:user_id")
.get(getUser)
.patch(patchUser)
.delete(deleteUser)

export default userRouter;