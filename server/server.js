const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;




app.post('/players', (req, res) =>{ 
    console.log('hello from post', req.body);
    tennisPlayersArray.push(req.body);
});

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});