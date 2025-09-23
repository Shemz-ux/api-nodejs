export default {
  testEnvironment: 'node',
  transform: {},
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/?(*.)+(spec|test).js'
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/db/**',
    '!src/connection.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js']
};
