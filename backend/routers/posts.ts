import express from "express";
import fileDb from "../fileDb";
import {PostWithoutId} from "../types";
import {imagesUpload} from "../multer";
const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
    const posts = await fileDb.getItems();

    res.send(posts);
});

postsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    if (!req.body.message) {
        res.status(400).send({"error": "Field message"})
    }
    const post: PostWithoutId = {
        author: req.body.author,
        message: req.body.message,
        image: req.file ? 'images/' + req.file.filename : null
    };

    const savedPost = await fileDb.addItem(post);

    res.send(savedPost);
});

export default postsRouter;