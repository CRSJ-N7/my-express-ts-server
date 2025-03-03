export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TodoData = {
  paginatedTodos: Todo[];
  allTodosCount: number;
  completedTodosCount: number;
  activeTodosCount: number;
  maxPages: number;
};

export type CreateTodoRequest = {
  text: string;
};
