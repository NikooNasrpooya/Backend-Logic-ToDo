# Backend Logic (Axios + TypeScript)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-brightgreen?style=flat-square&logo=axios)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)

---

## 📖 Overview
This project demonstrates making a network/API call using **Axios** in **TypeScript**.  
The objective is to showcase:
- Fetching data from a public API
- Using **TypeScript** interfaces for strong typing
- Structuring code with a dedicated service layer
- Writing reusable and maintainable backend logic

---

## 🚀 Features
✅ Fetches data from a **public API** (`JSONPlaceholder`)  
✅ Implements **TypeScript interfaces** for type safety  
✅ Organized into service-based architecture  
✅ Clean error handling and logging  

---

## 🛠️ Installation & Running

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NikooNasrpooya/Backend-Logic-ToDo.git
cd Backend-Logic-ToDo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Project
```bash
npm run start
```

---

## ⚙️ How It Works
**`services/todoService.ts`**
```ts
import axios from "axios";
import { Todo } from "../types/todo";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data;
};
```

**`index.ts`**
```ts
import { fetchTodos } from "./services/todoService";

fetchTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.error("Error fetching todos:", err));
```

---

## 📸 Screenshots / Output

**Console Output:**


<img src="./assets/ConsoleOutput.png" alt="Console Demo" width="500"/>

---
