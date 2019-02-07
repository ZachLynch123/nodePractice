const express = require('express');
const parser = require('body-parser');

const app = express();

// Instanciate middleware
app.use(parser.json());
app.use(parser.urlencoded({extended: false}))

const port = process.env.PORT || 5000;

// Statically serving data
app.use(express.static(__dirname));

let messages = [
    {name: "Tim", message: "hello!"},
    {name: "Alli", message: "hello world!!"},
]

// Get request
app.get('/messages', (req, res) => {
    res.send(messages)
})

// Post Request
app.post('/messages', (req, res) => {    
    messages.push(req.body);
    res.sendStatus(200);
})

const server = app.listen(port, () => console.log(`server started on port ${port}`, server.address().port)
);

