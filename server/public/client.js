$(document).ready(onReady);
let operatorButton = "";


function onReady() {


    $('.operator').on('click', operatorBtnListener);
    $('#equals').on('click', postNewCalcData);
    $('#C').on('click', cBtnListener);
}

function operatorBtnListener(){
 operatorButton = $(this).data('value');
 console.log('operator button:', operatorButton);
 return operatorButton;
}

function cBtnListener(){
    $('#firstNumber').val("");
    $('#secondNumber').val("");
}

function postNewCalcData() { 
    console.log('equals button:');
    
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    $.ajax({
        type: 'POST',
        url: '/calculations',
        data:{ 
            firstNumber: firstNumber, 
            secondNumber: secondNumber,
            operator: operatorButton}
    }).then(function (response) {
        console.log('respnse', response);
        getNewCalcData();
        // $('#firstNumber').val('');
        // $('#secondNumber').val('');
    }).catch(function(error){
        alert(error);
    });
}

function getNewCalcData() { 
    console.log('equals button:');
    
    $.ajax({
        type: 'GET',
        url: '/calculations'
 
    }).then(function (response) {
        console.log('respnse', response);
        appendToDom(response);

    }).catch(function(error){
        alert(error);
    });
}

function appendToDom(array){
    $('#newCalculation').empty();
    for(let i = 0; i < array.length; i++){
        $('#listOfCalculations').append(`
        <li>${array[i].firstNumber} ${array[i].operator} ${array[i].secondNumber} = ${array[i].answer}</li>
        `)
    }
    $('#newCalculation').append(`<h1>${array[array.length - 1].answer}</h1>
        `)
}   