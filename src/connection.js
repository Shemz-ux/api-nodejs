import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;


const connectionString = process.env.DATABASE_URL || 
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

  const pool = new Pool({
  connectionString,
  ssl: process.env.DATABASE_URL 
    ? { rejectUnauthorized: false } // Railway Postgres needs SSL
    : false,                        // Local DB usually doesn’t
});

pool.connect()
  .then(() => console.log("✅ Database connected!"))
  .catch(err => {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  });

export default pool;