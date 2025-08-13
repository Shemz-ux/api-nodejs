import { createUser, fetchUsers } from "../models/users.model.js"

export const getUsers = (req, res) => {
    fetchUsers().then((users)=>{
        res.status(200).send({users: users})
    })
}

export const postUser = (req, res, next) => {
    const newUser = req.body
    createUser(newUser).then((user)=>{
        res.status(201).send({newUser: user})
    }).catch((err)=>{
        next(err)
    })
}