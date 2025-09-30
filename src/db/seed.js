import db from "../config/db.js"

const seed = () => {
    return db.query('DROP TABLE IF EXISTS users')
    .then(()=>{
        return users()
    })
}

const users = (data) => {
    return db.query(`CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        number VARCHAR(20),
        industry VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT NOW()
        )`).then(()=>{
            console.log("User table created!")
        })
}



export default seed;