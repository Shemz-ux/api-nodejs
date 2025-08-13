
export const fetchUsers = () => {
    return db.query(`SELECT * FROM users`).then(({rows})=>{
        return rows
    })
}