import express from "express";
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.send('working');
});

postsRouter.post('/', (req, res) => {
   res.send('Post');
});

export default postsRouter;