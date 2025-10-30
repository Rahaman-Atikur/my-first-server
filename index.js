const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('My phone information is not  coming soon');
});

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (res, req) => {
    const id = parseInt(req.params.id);
    console.log("I need the params id:", id);
    const phone = phones.find(phone => phone.id == id) || {};
})

app.listen(port, () => {
    console.log(`My phone server is running on port:${port}`);
})