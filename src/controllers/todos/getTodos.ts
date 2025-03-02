import { type Request, type Response } from 'express';
import { readTodos } from '../../db/todosData';
import { type Todo } from '../../types';

export const getTodos = async (req: Request, res: Response<Todo[] | { message: string}>) => {
  try {
    const todos = await readTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};
