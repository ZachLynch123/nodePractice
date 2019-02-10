const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const Message = require('./model/messages');

mongoose.Promise = Promise;

// Instanciate middleware
app.use(parser.json());
app.use(parser.urlencoded({extended: false}))

const port = process.env.PORT || 5000;

const db = require('./keys').mongoURI;


mongoose
.connect(db, { useNewUrlParser: true })
.then(() => { console.log('MongoDB connected..');})
.catch(e => {console.log(e);
})

// Statically serving data
app.use(express.static(__dirname));

// Get request
app.get('/messages', (req, res) => {
    Message.find({}).then ((messages, err) => {
        console.log(messages, "From get request");
        res.send(messages);
    });
})

// Post Request
app.post('/messages', async (req, res) => { 
    // catch any errors and throw a 500 status
    try {
    const message = new Message(req.body);
    const savedMessage = await message.save();
    console.log('saved');

    const censored = await Message.findOne({message: 'badword'});

    if(censored) {
        await Message.deleteOne({ _id: censored.id});
        console.log('badword deleted');
        
        }
    else {
        io.emit('message', req.body);
    }
    res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500)
        return console.error(e);
    }});

io.on('connection', socket => {
    console.log('user connected');
})



const server = http.listen(port, () => console.log(`server started on port ${port}`, server.address().port)
);

