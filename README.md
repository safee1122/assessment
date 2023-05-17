# React and NestJS App

## Features

- The React frontend provides a user interface for interacting with the app.
- The NestJS backend serves as the API server and handles database operations.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js v18.16.0 (npm v9.5.1)
- React.js v18.2.0
- PostgresSql 
     make sure that your machine has postgresSql server running

## Getting Started

### Frontend (React)

1. Clone the repository.

2. Navigate to the `client` directory.

3. Install the dependencies.
    
    run ' npm i ' without quotes

4. Set the environment variable:
   
   - Create a `.env` file in the `client` directory and add the following line:
     ```
     REACT_APP_URL=http://localhost.com:3030/api/
     ```
     Note: make sure to change the port 3030 according to your backend env

5. Start the development server.

   - The React app will be accessible at http://localhost:3000.

### Backend (NestJS)

1. Navigate to the `server` directory.

2. Install the dependencies.
  
    run 'npm i' without quotes

3. Set the environment variables.
   
   - Create a `.env` file in the `server` directory and add the following lines:
     ```
     PORT=3030
     DATABASE_HOST=localhost
     DATABASE_NAME=postgres
     DATABASE_USER=postgres
     DATABASE_PASSWORD=admin
     DATABASE_PORT=5432
     JWT_KEY=dev
     JWT_EXPIRES=365d
     ```
     Note: make sure to add your db configurations to the above env variables

4. Start the server.

   - The NestJS server will be accessible at http://localhost:3030
   - api's will be accessible at http://localhost:3030/api

## Testing

- Frontend (React): Run tests in the `client` directory.
- Backend (NestJS): Run tests in the `server` directory.

## Deployment

- Frontend (React): Build the production-ready assets and deploy the `build` folder.
    1. run npm run build on the client root
    2. copy the build folder to the root directory of the server folder "server/build"
    3. run the server
- Backend (NestJS): Build the production-ready server and deploy the `dist` folder.
