import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors);

export default app;
