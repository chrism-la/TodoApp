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

import { Todo } from './models/Todo';

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});
//

// SERVER/PORT
app.listen(3001, () => console.log('Server started on Port 3001'));
