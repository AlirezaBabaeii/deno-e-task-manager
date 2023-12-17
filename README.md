# Deno Task Manager

This is a simple RESTful API that allows users to create, read, update, and delete tasks. It uses Deno as the runtime environment, Oak as the middleware framework, MongoDB as the database, and JWT as the authentication method.
Requirements

To run this project, you need to have the following installed:

    Deno
    MongoDB

Installation

To install this project, follow these steps:
``` bash
Clone this repository: git clone https://github.com/your-username/deno-task-manager.git
cd deno-task-manager
deno task dev
```
##### Create a .env file with the following variables:
DB_URL=mongodb://localhost:27017
DB_NAME=taskdb
JWT_KEY=your-secret-key

# Usage Apis

To use this project, you can send HTTP requests to the following endpoints:

#   /api/signup: 
  Create a new user account with a username and password. Returns a JSON object with the user details and a JWT token.
#  /api/signin:
  Sign in with an existing user account. Returns a JSON object with the user details and a JWT token.
#    /api/tasks:
    Get all the tasks for the authenticated user. Requires a JWT token in the Authorization header.
#    /api/tasks/:
    taskId: Get a single task by its ID. Requires a JWT token in the Authorization header.
#    /api/tasks: 
    Create a new task with a name and a completion status. Requires a JWT token in the Authorization header.
#    /api/tasks/:
    taskId: Update an existing task by its ID. Requires a JWT token in the Authorization header.
#    /api/tasks/:
    taskId: Delete an existing task by its ID. Requires a JWT token in the Authorization header.

### You can use tools like Postman or curl to test the API.
