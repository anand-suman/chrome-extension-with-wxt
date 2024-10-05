# WXT + React

This template should help get you started developing with React in WXT.


---

# Contact Management System

A simple Contact Management System built with Node.js and Express. This application allows users to manage their contacts efficiently.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for SQL databases.
- **Cookie-parser**: Middleware to handle cookies.
- **Custom Middleware**: For various functionalities in the application.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd <project-directory>
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Set up the database connection** in `app.js` to match your database configuration.

## Usage

To start the application, run the following command:

```bash
npm start
```

Your application will be running on `http://localhost:3000` (or the specified port in your configuration).

## API Endpoints

### Authentication

- **POST /api/auth/login**: Logs in a user.
- **POST /api/auth/register**: Registers a new user.

### Contact Management

- **GET /api/contacts**: Retrieves all contacts.
- **POST /api/contacts**: Creates a new contact.
- **GET /api/contacts/:id**: Retrieves a contact by ID.
- **PUT /api/contacts/:id**: Updates a contact by ID.
- **DELETE /api/contacts/:id**: Deletes a contact by ID.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

