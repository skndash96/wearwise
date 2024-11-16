import express, { Request, Response } from 'express';
import cors from "cors";
import apiRouter from './controllers/api';

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/*', (req, _, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/v1', apiRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;