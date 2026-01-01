import * as dotenv from 'dotenv'; dotenv.config();
import express, { json } from "express"; const app = express();
import morgan from "morgan";
import { nanoid } from 'nanoid';

let posts = [
    {
        id:nanoid(), user: 'user1', content: 'media'
    },
    {
        id:nanoid(), user: 'user2', content: 'text'
    },
    {
        id:nanoid(), user: 'user3', content: 'text'
    },
]

if (process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
}

app.use(express.json()); //middleware to accept json data coming from frontend e.g user logging in, creating post etc

//get all posts
app.get('/api/v1/posts', (req, res) => {
    res.status(200).json({ posts });
});

//create post
app.post('/api/v1/post', (req, res) => {
    const {user, content} = req.body;
    if (!user || !content) {
        return res.status(400).json({ msg: "error: user or content not provided" });
    }
    const id = nanoid(8);
    const post = {id, user, content};
    posts.push(post);
    res.status(200).json({ post });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}.`);
});