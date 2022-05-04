import express from 'express'
import { categoriesRoutes } from './routes/Category.routes';
import { specificationRoutes } from './routes/Specification.routes';

const app = express();

app.use(express.json())

app.use("/categories",categoriesRoutes)

app.use("/specifications", specificationRoutes)

app.listen(8080);
