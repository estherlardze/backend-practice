import express from 'express';


const app = express();
const PORT = 3000


app.get('/', (req, res) => {
    res.status(500).send("404 Not Found");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})