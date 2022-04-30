import express from 'express'
import { CreateCategory } from './routes/CreateCategory.routes';

const app = express();

app.listen(3333);

app.post("/categories" , CreateCategory)