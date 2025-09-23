import dotenv from "dotenv";
import app from "./index.js"
import seed from "./db/seed.js";

dotenv.config();

const port = process.env.PORT || 3002;

// Initialize database tables on startup
seed().then(() => {
    console.log("Database initialized successfully!");
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });
}).catch((err) => {
    console.error("Failed to initialize database:", err);
    // Start server anyway in case tables already exist
    app.listen(port, () => {
        console.log(`Server is running on port ${port} (database init failed)`)
    });
});