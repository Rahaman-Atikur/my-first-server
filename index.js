const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/data', (res, req) => {
    res.send("More data is coming soon");
})


app.listen(port, () => {
    console.log(`My first server is running on port:${port}`)
})