import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: '.env.test' });

// Global test setup
beforeAll(async () => {
  // Any global setup can go here
});

afterAll(async () => {
  // Close database connections to prevent hanging
  if (global.db) {
    await global.db.end();
  }
  
  // Force exit after a short delay if needed
  setTimeout(() => {
    process.exit(0);
  }, 100);
});
