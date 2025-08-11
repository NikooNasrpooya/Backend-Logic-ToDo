Axios + TypeScript Backend Logic
📌 Overview
This project demonstrates how to implement clean and reusable network/API calls using Axios in TypeScript.

The focus is on:

Fetching and sending data with Axios

<h1> ⚙ How It Works </h1>
<h2> Axios instance (http.ts) </h2>

Configures the base URL for the API
Adds optional interceptors for logging and error handling

<h2> Type definitions (todo.ts) <h2>

Ensures API responses and requests are strongly typed
Helps catch type mismatches during development

<h2> Service layer (todosService.ts) <h2>

Contains clean, reusable async functions for each API action:
listTodos(limit?: number)

<h2> getTodo(id: number) <h2>

createTodo(input: CreateTodoInput)
updateTodo(id: number, patch: Partial<Todo>)
deleteTodo(id: number)

<h2> Entry point (index.ts) <h2>

Calls the service functions and logs results to the console
Serves as a quick test to verify that the backend logic works

<h1> 🛠 Requirements </h1>

Node.js (v18+ recommended)
npm or yarn

<h1> 🚀 Setup & Run </h1>

<h2> Clone this repository </h2>

git clone <your-repo-url>
cd axios-ts-demo

<h2> Install dependencies </h2>

npm install
Run the demo
npm run start

This will:

Fetch the first 3 todos
Get details for a specific todo
Create a new todo
Update it
Delete it
