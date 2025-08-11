import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "./services/todoService.js";

async function main() {
  // 1) List
  const list = await getTodos(5);
  console.log("First 5 todos:", list);

  // 2) Read
  const one = await getTodo(1);
  console.log("Todo #1:", one);

  // 3) Create
  const created = await createTodo({ userId: 99, title: "Ship Axios + TS demo", completed: false });
  console.log("Created:", created);

  // 4) Update
  const updated = await updateTodo(created.id ?? 1, { completed: true });
  console.log("Updated:", updated);

  // 5) Delete
  await deleteTodo(created.id ?? 1);
  console.log("Deleted:", created.id ?? 1);
}

main().catch((e) => {
  // Bubble up typed errors in one place
  console.error("Fatal:", e);
  process.exit(1);
});
