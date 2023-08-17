import { promises as fs } from 'fs';
import {randomUUID} from "crypto";
import {Post, PostWithoutId} from "./types";

const pathName = './db.json';
let data: Post[] = [];

const fileDb = {
    async init () {
        try {
            const fileContents = await fs.readFile(pathName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            console.error(e);
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: PostWithoutId) {
        const post = {
            ...item,
            id: randomUUID(),
        };

        data.push(post);
        await this.save();
    },
    async save() {
        await fs.writeFile(pathName, JSON.stringify(data));
    },
}

export default fileDb;