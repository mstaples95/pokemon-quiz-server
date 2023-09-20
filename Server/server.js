const express = require('express');
const cors = require('cors');

const port = 8080;

const app = express();

app.use(cors());
app.use(express.static('public'))

app.get('/', (_req, res) => {
    res.send("hello earthlings")
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
});