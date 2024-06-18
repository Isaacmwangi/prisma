
import express from 'express';
import router from './routes/index.mjs';
import { createServer } from 'http';

const app = express();
app.use(express.json());
app.use(router);

const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
