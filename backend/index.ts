import express from 'express';
import cors from 'cors';
import postsRouter from "./routers/posts";

const app = express();
const port = 8000;
app.use(express.json());
app.use('/', postsRouter);
app.use(cors());

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});