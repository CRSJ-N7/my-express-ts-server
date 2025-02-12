import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const staticDirPath = path.normalize(`${__dirname}/../public`);
app.use('/public', express.static(staticDirPath));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

export default app;
