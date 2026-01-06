import * as dotenv from 'dotenv'; dotenv.config();
import express, { json } from "express"; const app = express();
import morgan from "morgan";
import postRouter from './routes/postRouter.js';

if (process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
}

app.use(express.json()); //middleware to accept json data coming from frontend e.g user logging in, creating post etc


// //get all posts
// app.get('/api/v1/posts', (req, res) => {
// });


// //create post
// app.post('/api/v1/post', (req, res) => {
// });


// //get post
// app.get('/api/v1/posts/:id', (req, res) => {
    
// });


// //edit post
// app.patch('/api/v1/posts/:id', (req, res) => {
    
// });


// //delete post
// app.delete('/api/v1/posts/:id', (req, res) => {
    
// });

app.use('/api/v1/posts', postRouter);

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'rotue not found' });
});

app.use((err, req, res, next) => { //error middleware
    console.log(err);
    res.status(500).json({ msg: 'unknown error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}.`);
});
