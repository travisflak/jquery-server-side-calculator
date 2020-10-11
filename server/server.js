const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// const newCalcData[
// {
//  firstNumber: firstNumber,
// };
// {
//  plus: plus,
// };
// {
//  minus: minus,
// };
// {
//  times: times,
// };
// {
//  divide: divide,
// };
// {
//  secondNumber: secondNumber,
// };
// {
//  equals: equals,
// };

// ]


app.post('/calculations', (req, res) =>{ 
    console.log('hello from post', req.body);
    newCalcData.push(req.body);
});

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});