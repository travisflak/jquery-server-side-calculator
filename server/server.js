const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const newCalcData = require("./modules/calcData");

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculations', (req, res) => {//this will be getting new calculations that have been posted on the server from the user
    res.send(newCalcData);

});

app.post('/calculations', (req, res) => { //this posts new calculations from the user onto the server
    console.log('hello from post', req.body);
    let calcNew = actualMath(req.body);
    newCalcData.push(calcNew);//pushing this object to newCalcdata array and,
    console.log('calcNew', calcNew);
    
    res.sendStatus(200);//ends it by ouputing OK in the console
});


function actualMath (mathObject){//this is the math logic being handeled by the server side
   let equation ;
        if (mathObject.operator=='+'){
            equation=Number(mathObject.firstNumber) + Number(mathObject.secondNumber)
        }
        if (mathObject.operator=='-'){
            equation=Number(mathObject.firstNumber) - Number(mathObject.secondNumber)
        }
        if (mathObject.operator=='*'){
            equation=mathObject.firstNumber * mathObject.secondNumber
        }
        if (mathObject.operator=='/'){
            equation=mathObject.firstNumber / mathObject.secondNumber
        }
        mathObject.answer=equation;
    return mathObject;
}

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});