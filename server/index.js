import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000
dotenv.config();

app.use(cors());
app.use(express.json());
const mongourl = process.env.MONGO_URL;



app.get('/', (req, res) => {
    res.status(500).send("hello new world");
})

app.post('/', (req, res) => {
    res.status(500).send("create a new user...");
})


mongoose.connect(mongourl)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})