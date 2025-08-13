import { fetchUsers } from "../models/users.model.js"

export const getUsers = (req, res) => {
    fetchUsers().then((users)=>{
        res.status(200).send({users: users})
    })
}