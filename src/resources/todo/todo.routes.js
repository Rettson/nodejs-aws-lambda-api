import { Router } from "express";
import TodoController from "#resources/todo/todo.controller.js";

const router = Router();

router.get('/todos', TodoController.index);

router.post('/todos', TodoController.store);

export default router;