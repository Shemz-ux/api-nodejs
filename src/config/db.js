import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  user: process.env.DATABASE_URL ? undefined : process.env.DB_USER,
  host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
  database: process.env.DATABASE_URL ? undefined : process.env.DB_DATABASE,
  password: process.env.DATABASE_URL ? undefined : process.env.DB_PASSWORD,
  port: process.env.DATABASE_URL ? undefined : process.env.DB_PORT,
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false } 
    : false,
});

db.connect()
  .then(client => {
    console.log("✅ Database connected!");
    client.release();
  })
  .catch(err => {
    console.error("❌ Database connection failed:", err.message);
  });

export default db;