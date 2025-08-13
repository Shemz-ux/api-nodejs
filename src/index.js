import express from "express";
import cors from "cors";
import db from "./config/db.js";
import apiRouter from "./routes/api-router.js";
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", apiRouter)

app.get("/", async (req,res)=>{
    const result = await db.query("SELECT current_database()");
    res.send(`The database is: ${result.rows[0].current_database}`)
});

export default app;
