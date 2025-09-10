import { createUser, fetchUserById, fetchUsers, removeUser, updateUser } from "../models/users.model.js"
import { addUserToMailchimp, updateMailchimpSubscriber } from "../services/mailchimp.service.js"

export const getUsers = (req, res, next) => {
    fetchUsers().then((users)=>{
        res.status(200).send({users: users})
    }).catch((err)=>{
        next(err)
    })
}

export const getUser = (req, res, next) => {
    const {user_id} = req.params
    fetchUserById(user_id).then((user)=>{
        res.status(200).send({user: user})
    }).catch((err)=>{
        next(err)
    })
}

export const patchUser = (req, res, next) => {
    const updatedUser = req.body
    const {user_id} = req.params
    updateUser(updatedUser, user_id).then((user)=>{
        res.status(201).send({user: user})
    }).catch((err)=>{
        next(err)
    })
}

export const deleteUser = (req, res, next) => {
    const {user_id} = req.params
    removeUser(user_id).then((msg) => {
        res.status(200).send({msg})
    }).catch((err)=>{
        next(err)
    })
}

export const postUser = async (req, res, next) => {
    const newUser = req.body
    try {
        // Create user in database
        const user = await createUser(newUser);
        
        // Add user to Mailchimp and handle validation errors
        const mailchimpResult = await addUserToMailchimp(newUser);
        
        if (mailchimpResult && !mailchimpResult.success) {
            // Return user creation success but with Mailchimp warning
            return res.status(201).send({
                newUser: user,
                warning: {
                    message: mailchimpResult.error,
                    details: mailchimpResult.details
                }
            });
        }
        
        res.status(201).send({newUser: user});
    } catch (err) {
        next(err);
    }
}
