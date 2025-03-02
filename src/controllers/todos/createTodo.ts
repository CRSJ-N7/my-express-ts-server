import { type Request, type Response } from 'express';
import { readTodos, writeTodos } from '../../db/todosData';
import { type CreateTodoRequest, type Todo } from '../../types';

export const createTodo = async (req: Request<unknown, unknown, CreateTodoRequest>, res: Response<Todo>) => {
  const todos = await readTodos();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text: req.body.text.trim(),
    isCompleted: false,
  };
  todos.push(newTodo);
  await writeTodos(todos);
  res.status(201).json(newTodo);
};
