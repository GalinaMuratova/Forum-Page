import express from "express";
import fileDb from "../fileDb";
import {PostWithoutId} from "../types";
const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
    const posts = await fileDb.getItems();

    res.send(posts);
});

postsRouter.post('/', async (req, res) => {
    if (!req.body.author || !req.body.image) {
        res.status(400).send({"error": "Field author | Field image"})
    }
    const post: PostWithoutId = {
        author: req.body.author,
        message: req.body.message,
        image: req.body.image
    };

    const savedPost = await fileDb.addItem(post);

    res.send(savedPost);
});

export default postsRouter;