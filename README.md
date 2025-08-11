Axios + TypeScript Backend Logic
📌 Overview
This project demonstrates how to implement clean and reusable network/API calls using Axios in TypeScript.

The focus is on:

Fetching and sending data with Axios

<h3> ⚙ How It Works </h3>
<h4> Axios instance (http.ts) </h4>

Configures the base URL for the API
Adds optional interceptors for logging and error handling

<h4> Type definitions (todo.ts) </h4>

Ensures API responses and requests are strongly typed
Helps catch type mismatches during development

<h4> Service layer (todosService.ts) </h4>

Contains clean, reusable async functions for each API action:
listTodos(limit?: number)

<h4> getTodo(id: number) <h4>

createTodo(input: CreateTodoInput)
updateTodo(id: number, patch: Partial<Todo>)
deleteTodo(id: number)

<h4> Entry point (index.ts) </h4>

Calls the service functions and logs results to the console
Serves as a quick test to verify that the backend logic works

<h3> 🛠 Requirements </h3>

Node.js (v18+ recommended)
npm or yarn

<h3> 🚀 Setup & Run </h3>

<h4> Clone this repository </h4>

git clone <your-repo-url>
cd axios-ts-demo

<h4> Install dependencies </h4>

npm install
Run the demo
npm run start

This will:

Fetch the first 3 todos
Get details for a specific todo
Create a new todo
Update it
Delete it
