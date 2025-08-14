import express from "express";
import cors from "cors";
import db from "./config/db.js";
import apiRouter from "./routes/api-router.js";
import { customError, psqlError, serverError } from "./middleware/errorHandlers.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);


// testing db connection
app.get("/", async (req,res)=>{
    const result = await db.query("SELECT current_database()");
    res.send(`The database is: ${result.rows[0].current_database}`)
});

// runSeed()

// catch all errors

app.use((req, res, next) => {
    const err = new Error("Invalid request");
    err.status = 404;
    next(err);
});

// error handlers 
app.use(psqlError)

app.use(customError)

app.use(serverError)

export default app;
