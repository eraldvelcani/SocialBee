import * as dotenv from 'dotenv'; dotenv.config();
import express, { json } from "express"; const app = express();
import morgan from "morgan";
import { nanoid } from 'nanoid';

let posts = [
    {
        id:nanoid(), content: 'media', caption: 'caption1'
    },
    {
        id:nanoid(), content: 'media', caption: null
    },
    {
        id:nanoid(), content: 'text', caption: 'text1'
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
    const {content, caption} = req.body;
    if (content === 'text' && !caption || !content) {
        return res.status(400).json({ msg: "error: content or caption not provided" });
    }
    const id = nanoid(8);
    const post = {id, content, caption};
    posts.push(post);
    res.status(200).json({ post });
});


//get post
app.get('/api/v1/posts/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({ msg: `error: post with id ${id} not found` });
    }
    res.status(200).json({ post });
});


//edit post
app.patch('/api/v1/posts/:id', (req, res) => {
    const { content, caption } = req.body;
    if (content === 'text' && !caption || !content) {
        res.status(400).json({ msg: 'error: content or caption not provided' });
    }
    const {id} = req.params;
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({ msg: `error: post with id ${id} not found` });
    }
    post.content = content;
    post.caption = caption;
    res.status(200).json({ msg: "post modified", post });
});


//edit post


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}.`);
});
