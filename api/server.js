import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect('mongodb://localhost:27017/mern-todo', {
        useNewUrlParser: true,
        useUnifiedTopolgy: true,
    })
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

app.listen(3001, () => console.log('Server started on Port 3001'));
