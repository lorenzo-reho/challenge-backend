import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import movies from './movies.json';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({message: "ok"});
});

app.get('/movies', (req: Request, res: Response) => {
  res.json(movies);
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    message: 'Received your request body!',
  });
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});