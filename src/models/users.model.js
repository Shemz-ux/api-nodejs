
export const fetchUsers = () => {
    return db.query(`SELECT * FROM users`).then(({rows})=>{
        return rows
    })
}

export const createUser = (newUser) => {
    const {firstName, lastName, email, number} = newUser
    return db.query(`INSERT INTO users (firstName, lastName, email, number)
        VALUES ($1, $2, $3, $4) RETURNING *`, [firstName, lastName, email, number]).then(({rows})=>{
            return rows[0]
        })
}