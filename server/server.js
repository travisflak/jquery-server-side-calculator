const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const newCalcData = require("./modules/calcData");

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



// function actualMath (mathObject){
//     for (let i=0; i<mathObject.length; i++){
//         if (mathObject[i].operatorButton=='+'){
//             let equation=mathObject[i].firstNumber + mathObject[i].secondNumber
//         }
//         if (mathObject[i].operatorButton=='-'){
//             let equation=mathObject[i].firstNumber - mathObject[i].secondNumber
//         }
//         if (mathObject[i].operatorButton=='*'){
//             let equation=mathObject[i].firstNumber * mathObject[i].secondNumber
//         }
//         if (mathObject[i].operatorButton=='/'){
//             let equation=mathObject[i].firstNumber / mathObject[i].secondNumber
//         }
//     }
//     return equation;
// }
let total = 0;

function add (){
    if (operatorButton=='+'){
   total=$('#firstNumber').val() + $('#secondNumber').val();
   console.log(total);
} 

function minus (){
    if (operatorButton=='-'){
   total=$('#firstNumber').val() - $('#secondNumber').val();
   console.log(total);
}

function times (){
    if (operatorButton=='*'){
   total=$('#firstNumber').val() * $('#secondNumber').val();
   console.log(total);
}

function divide (){
    if (operatorButton=='/'){
   total=$('#firstNumber').val() / $('#secondNumber').val();
   console.log(total);
}

app.post('/calculations', (req, res) =>{ 
    console.log('hello from post', req.body);
    newCalcData.push(req.body);//pushing this object to newCalcdata array and,
    res.sendStatus(200);//ends it by ouputing OK in the console
});

app.get('/calculations', (req, res) => {
    res.send(newCalcData);

});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});