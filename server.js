import * as dotenv from 'dotenv'; dotenv.config();
import express from "express"; const app = express();
import morgan from "morgan";


if (process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
}
app.use(express.json()); //middleware to accept json data coming from frontend e.g user logging in, creating post etc

app.get('/', (req, res) => {
    res.send('hi hi');
});

app.post('/', (req, res) => {
    console.log(res);
    res.json({message: "data received", data: req.body});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}.`);
});