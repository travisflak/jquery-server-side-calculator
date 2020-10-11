const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let newCalcData=[
//{
//  firstNumber: firstNumber,
// },
// {
//  secondNumber: secondNumber,
// },
// {
//  equals: equals,
// },
];


app.post('/calculations', (req, res) =>{ 
    console.log('hello from post', req.body);
    newCalcData.push(req.body);
});

app.get('/calculations', (req, res) => {
    res.send(newCalcData);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});