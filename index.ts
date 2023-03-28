import express from "express";

const app: express.Application = express();

const port: number = process.env.PORT ? +process.env.PORT : 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Express + TypeScript');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
