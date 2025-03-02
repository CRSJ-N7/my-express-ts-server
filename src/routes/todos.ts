import express from 'express';
import { getTodos } from '../controllers/todos/getTodos';
import { createTodo } from '../controllers/todos/createTodo';
import { deleteTodo } from '../controllers/todos/deleteTodo';
import { updateTodo } from '../controllers/todos/updateTodo';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', updateTodo);

export default router;
