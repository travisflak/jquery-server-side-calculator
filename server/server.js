const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let newCalcData=[

];

function actualMath (mathObject){
    for (let i=0; i<mathObject.length; i++){
        if (mathObject[i].operatorButton=='+'){
            let equation=mathObject[i].firstNumber + mathObject[i].secondNumber
        }
        if (mathObject[i].operatorButton=='-'){
            let equation=mathObject[i].firstNumber - mathObject[i].secondNumber
        }
        if (mathObject[i].operatorButton=='*'){
            let equation=mathObject[i].firstNumber * mathObject[i].secondNumber
        }
        if (mathObject[i].operatorButton=='/'){
            let equation=mathObject[i].firstNumber / mathObject[i].secondNumber
        }
    }
    return equation;
}

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