const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// Statically serving data
app.use(express.static(__dirname));
const server = app.listen(port, () => console.log(`server started on port ${port}`, server.address().port)
);

