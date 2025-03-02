import { type Request, type Response } from 'express';
import { readTodos, writeTodos } from '../../db/todosData';
import { type Todo } from '../../types';

export const updateTodo = async (req: Request<{ id: string }, unknown, Partial<Todo>>, res: Response<Todo | { message: string }>) => {
  const todos = await readTodos();
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index === -1) {
    res.status(404).json({ message: 'Todo not found' });
  } else {
    if (req.body.text !== undefined) {
      todos[index].text = req.body.text;
    }
    if (req.body.isCompleted !== undefined) {
      todos[index].isCompleted = req.body.isCompleted;
    }
  }

  await writeTodos(todos);
  res.status(200).json(todos[index]);
};
