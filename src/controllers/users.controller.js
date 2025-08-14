import { createUser, fetchUserById, fetchUsers } from "../models/users.model.js"

export const getUsers = (req, res, next) => {
    fetchUsers().then((users)=>{
        res.status(200).send({users: users})
    }).catch((err)=>{
        next(err)
    })
}

export const getUserById = (req, res, next) => {
    const {user_id} = req.params
    fetchUserById(user_id).then((user)=>{
        res.status(200).send({user: user})
    }).catch((err)=>{
        next(err)
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
