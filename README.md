# CRUD API - Node.js Express Application

A RESTful API for user management with Mailchimp integration, built with Node.js, Express, and PostgreSQL.

## 🚀 Features

- **Full CRUD Operations** - Create, Read, Update, Delete users
- **Mailchimp Integration** - Automatic user subscription to mailing lists
- **PostgreSQL Database** - Robust data persistence
- **Comprehensive Testing** - Jest-based test suite with multiple testing modes
- **Interactive Test Runner** - User-friendly CLI for running tests
- **Error Handling** - Graceful error handling with custom middleware
- **CORS Support** - Cross-origin resource sharing enabled

## 📋 Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CRUD-api-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Environment Setup](#environment-setup))

4. **Set up the database** (see [Database Setup](#database-setup))

## 🔧 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_USER=your_database_user
DB_HOST=localhost
DB_DATABASE=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432

# Mailchimp Configuration
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_SERVER_PREFIX=your_server_prefix
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

### Environment Files

- **`.env`** - Production/development environment variables
- **`.env.test`** - Test environment variables (optional)

## 🗄 Database Setup

1. **Create PostgreSQL database**
   ```sql
   CREATE DATABASE your_database_name;
   ```

2. **Run database migrations/seed**
   ```bash
   npm run seed
   ```

### Database Schema

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  number VARCHAR(20),
  occupation VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🌐 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/` | API documentation | - |
| `GET` | `/api/users` | Get all users | - |
| `POST` | `/api/users` | Create new user | `{ firstName, lastName, email, number?, occupation?, message? }` |
| `GET` | `/api/users/:id` | Get user by ID | - |
| `PATCH` | `/api/users/:id` | Update user | `{ firstName?, lastName?, email?, number?, occupation?, message? }` |
| `DELETE` | `/api/users/:id` | Delete user | - |

### Example Requests

**Create User:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "number": "+1234567890",
    "occupation": "Developer",
    "message": "Hello world!"
  }'
```

**Get All Users:**
```bash
curl http://localhost:3000/api/users
```

**Update User:**
```bash
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Jane", "occupation": "Senior Developer"}'
```

## 🧪 Testing

This project includes a comprehensive test suite with multiple testing modes and an interactive test runner.

### Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode (auto-rerun on changes) |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:interactive` | Interactive test runner with menu |

### Test Environments

#### 1. **Automated Testing**
```bash
# Run all tests once
npm test

# Run with coverage report
npm run test:coverage
```

#### 2. **Watch Mode**
```bash
# Automatically rerun tests when files change
npm run test:watch
```

#### 3. **Interactive Test Runner**
```bash
# Launch interactive menu-driven test runner
npm run test:interactive
```

The interactive runner provides:
- ✅ Run all tests
- ✅ Run specific test suites
- ✅ Run tests with coverage
- ✅ Manual testing guide with curl examples
- ✅ Colorized output for better readability

#### 4. **Manual Testing**
Use the interactive runner's manual testing guide or the curl examples above.

### Test Structure

```
src/__tests__/
├── setup.js              # Global test configuration
├── users.test.js          # User endpoint tests
└── integration.test.js    # Full workflow integration tests
```

### Test Coverage

The test suite covers:
- ✅ All CRUD operations
- ✅ Mailchimp integration (with error handling)
- ✅ Input validation
- ✅ Error responses
- ✅ Database operations
- ✅ Full user lifecycle workflows

## 🚀 Development

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Start** | `npm start` | Start production server |
| **Development** | `npm run dev` | Start development server with nodemon |
| **Database** | `npm run seed` | Seed database with initial data |
| **Testing** | `npm test` | Run all tests |
| **Test Coverage** | `npm run test:coverage` | Run tests with coverage |
| **Test Watch** | `npm run test:watch` | Run tests in watch mode |
| **Interactive Tests** | `npm run test:interactive` | Interactive test runner |

### Development Workflow

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Run tests in watch mode** (in another terminal)
   ```bash
   npm run test:watch
   ```

3. **Make changes** to your code

4. **Tests automatically rerun** and server restarts on changes

## 📁 Project Structure

```
CRUD-api-js/
├── src/
│   ├── __tests__/              # Test files
│   │   ├── setup.js           # Test configuration
│   │   ├── users.test.js      # User endpoint tests
│   │   └── integration.test.js # Integration tests
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── users.controller.js # User route handlers
│   ├── db/
│   │   ├── seed.js            # Database seeding
│   │   └── run-seed.js        # Seed runner
│   ├── middleware/
│   │   └── errorHandlers.js   # Error handling middleware
│   ├── models/
│   │   └── users.model.js     # User data models
│   ├── routes/
│   │   ├── api-router.js      # Main API router
│   │   └── user-router.js     # User routes
│   ├── services/
│   │   └── mailchimp.service.js # Mailchimp integration
│   ├── connection.js          # Server entry point
│   ├── index.js              # Express app configuration
│   └── test-runner.js        # Interactive test runner
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── endpoints.json           # API documentation
├── jest.config.js          # Jest configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🛠 Technologies Used

### Core Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **pg** - PostgreSQL client

### Development & Testing
- **Jest** - Testing framework
- **Supertest** - HTTP testing
- **Nodemon** - Development server
- **Chalk** - Terminal styling

### Integrations
- **Mailchimp Marketing API** - Email marketing integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Validation & Utilities
- **Joi** - Data validation
- **pg-format** - SQL query formatting

## 🔍 API Documentation

Full API documentation is available at the root endpoint:
```
GET http://localhost:3000/
```

This returns the complete `endpoints.json` file with:
- Detailed endpoint descriptions
- Request/response examples
- Error codes and messages
- Database schema information
- Mailchimp integration details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

**Database Connection Issues:**
- Verify PostgreSQL is running
- Check database credentials in `.env`
- Ensure database exists

**Mailchimp Integration Issues:**
- Verify API key and server prefix
- Check audience ID
- Review Mailchimp console for errors

**Test Failures:**
- Ensure database is seeded
- Check environment variables
- Run `npm run test:interactive` for detailed debugging

### Getting Help

- Check the `endpoints.json` file for API documentation
- Use the interactive test runner for debugging
- Review console logs for detailed error messages
