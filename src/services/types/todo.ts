// Request/response models for JSONPlaceholder todos

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface NewTodo {
  userId: number;
  title: string;
  completed?: boolean;
}

export interface UpdateTodo {
  title?: string;
  completed?: boolean;
}
