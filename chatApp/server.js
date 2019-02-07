const express = require('express');

const app = express();

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

const server = app.listen(port, () => console.log(`server started on port ${port}`, server.address().port)
);

