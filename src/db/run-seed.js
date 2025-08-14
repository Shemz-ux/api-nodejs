import seed from "./seed.js";
import db from "../config/db.js";

const runSeed = () => {
    return seed().then(() => db.end());
};

runSeed();