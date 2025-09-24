import dotenv from "dotenv";
import app from "./index.js";
import db from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3002;

// Test DB connection before starting the server
(async () => {
  try {
    await db.query("SELECT 1"); // Test DB
    console.log("✅ Database connection successful!");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
})();