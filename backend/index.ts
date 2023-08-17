import express from 'express';
import cors from 'cors';
import postsRouter from "./routers/posts";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/', postsRouter);
app.use(express.static('public'));


const run = async ()=> {
    await fileDb.init();
    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
};

run().catch(e => console.error(e));