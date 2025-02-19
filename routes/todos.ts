import express, { type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';

type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

const router = express.Router();

const todosFilePath = path.normalize(`${__dirname}/../db/todos.json`);

const readTodos = (): Todo[] => {
  const data = fs.readFileSync(todosFilePath, 'utf-8');
  return JSON.parse(data);
};

const writeTodos = (todos: Todo[]): void => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

router.get('/', (req: Request, res: Response) => {
  const todos = readTodos();
  res.json(todos);
});

router.post('/', (req: Request, res: Response) => {
  const todos = readTodos();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text: req.body.text.trim(),
    isCompleted: false,
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

router.delete('/:id', (req: Request, res: Response) => {
  const todos = readTodos();
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index === -1) {
    res.status(404).json({ message: 'Todo not found' });
  } else {
    todos.splice(index, 1);
    writeTodos(todos);
    res.status(204).json({});
  }
});

export default router;
