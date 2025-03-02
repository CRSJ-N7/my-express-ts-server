export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type CreateTodoRequest = {
  text: string;
};
