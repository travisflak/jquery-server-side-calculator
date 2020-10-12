const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const newCalcData = require("./modules/calcData");

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculations', (req, res) => {
    res.send(newCalcData);

});

app.post('/calculations', (req, res) => { 
    console.log('hello from post', req.body);
    let calcNew = actualMath(req.body);
    newCalcData.push(calcNew);//pushing this object to newCalcdata array and,
    console.log('calcNew', calcNew);
    
    res.sendStatus(200);//ends it by ouputing OK in the console
});


function actualMath (mathObject){
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
// let total = 0;

// function add (){
//     if (operatorButton=='+'){
//    total=$('#firstNumber').val() + $('#secondNumber').val();
//    console.log(total);
// } 

// function minus (){
//     if (operatorButton=='-'){
//    total=$('#firstNumber').val() - $('#secondNumber').val();
//    console.log(total);
// }

// function times (){
//     if (operatorButton=='*'){
//    total=$('#firstNumber').val() * $('#secondNumber').val();
//    console.log(total);
// }

// function divide (){
//     if (operatorButton=='/'){
//    total=$('#firstNumber').val() / $('#secondNumber').val();
//    console.log(total);
// }}




app.listen(PORT, () => {
    console.log('listening on port', PORT);
});