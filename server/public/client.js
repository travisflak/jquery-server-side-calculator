$(document).ready(onReady);
let operatorButton = "";


function onReady() {


    $('.operator').on('click', operatorBtnListener);
    $('#equals').on('click', postNewCalcData);
    $('#C').on('click', cBtnListener);
}

function operatorBtnListener(){
 console.log('hello from operator button:', operatorBtnListener);
 operatorButton = $(this).data('value');
 console.log('operator button:', operatorButton);
 
}

function cBtnListener(){
    console.log('hello from C button:', cBtnListener);
   
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
        $('#firstNumber').val('');
        $('#secondNumber').val('');
    }).catch(function(error){
        alert(error);
    });
}