# Project Name

Task apis

## Installation

1. Clone the repository:
2. Install dependencies:
    npm i

3. Create a `.env` file at the root of the project and add the data sent in mail:

### Running the Server

To start the server, run:
    npm run start

### API Endpoints

1. **Register User**
   - **URL**: `http://localhost:3005/v1/auth/register`
   - **Method**: `POST`
   - **Description**: Registers a new user.
   - **Request Body**:
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**: Returns user data with a JWT token.

2. **Login User**
   - **URL**: `http://localhost:3005/v1/auth/login`
   - **Method**: `POST`
   - **Description**: Logs in an existing user.
   - **Request Body**:
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**: Returns user data with a JWT token.

3. **User Dashboard**
   - **URL**: `http://localhost:3005/v1/user/dashboard`
   - **Method**: `GET`
   - **Description**: Retrieves user dashboard data.
   - **Authorization**: Requires JWT token in the `Authorization` header.

4. **User Profile**
   - **URL**: `http://localhost:3005/v1/user/profile/:userId`
   - **Method**: `GET`
   - **Description**: Retrieves user profile data for the specified user ID.
   - **Authorization**: Requires JWT token in the `Authorization` header.

## Authentication

- Authentication for the `/v1/user/profile/:userId` endpoint is performed using JSON Web Tokens (JWT). Include the JWT token in the `Authorization` header of the request.

## Technologies Used

- TypeScript
- Node.js
- Express.js
- JSON Web Tokens (JWT)


