import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// EXPRESS
const app = express();

app.use(express.json());
app.use(cors());
//

// MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/mern-todo')
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

import { Todo } from './models/Todo.js';
//

// ROUTES
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    });

    await todo.save();

    res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
});

app.get('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);
});
//

// SERVER/PORT
app.listen(3001, () => console.log('Server started on Port 3001'));
