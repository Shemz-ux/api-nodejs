import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    user: process.env.DATABASE,
    user: process.env.PASSWORD,
    user: process.env.DBPORT,
});

db.on("connect", () => {
    console.log("connection pool established with the Database!")
});

export default db;