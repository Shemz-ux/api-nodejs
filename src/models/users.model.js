import db from "../config/db.js"

export const fetchUsers = () => {
    return db.query(`SELECT * FROM users`).then(({rows})=>{
        return rows
    })
}

export const fetchUserById = (id) => {
    return db.query(`SELECT * FROM users WHERE user_id = $1`, [id])
    .then(({rows})=>{
        if (rows.length === 0){
            return Promise.reject({status: 404, msg: 'User not found'})
        }
        return rows[0]
    })
}


export const createUser = (newUser) => {
    const {firstName, lastName, email, number} = newUser
    return db.query(`INSERT INTO users (firstName, lastName, email, number)
        VALUES ($1, $2, $3, $4) RETURNING *`, [firstName, lastName, email, number]).then(({rows})=>{
            return rows[0]
        })
}

// may need to rewrite to allow for partial patches
export const updateUser = (updateUser, id) => {
    const {firstName, lastName, email, number} = updateUser
    return db.query(`UPDATE users SET firstName = $1, lastName=$2, email=$3, number=$4 WHERE user_id=$5 RETURNING *`
        , [firstName, lastName, email, number, id]
    ).then(({rows})=>{
        return rows[0]
    })
}

export const removeUser = (id) => {
    return db.query(`DELETE FROM users WHERE user_id = $1 RETURNING *`,[id])
    .then(({rows})=>{
        if (rows.length === 0){
            return Promise.reject({status: 404, msg: 'User not found'})
        }
        return rows[0] // or return 'user deleted'
    })
}