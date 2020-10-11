$(document).ready(onReady);
let operatorButton = "";


function onReady() {


    $('.operator').on('click', operatorBtnListener);
    $('#equals').on('click', equalsBtnListener);
    $('#C').on('click', cBtnListener);
}

function operatorBtnListener(){
 console.log('hello from operator button:', operatorBtnListener);
 operatorButton = $(this).data('value');
 console.log('operator button:', operatorButton);
 
}

function equalsBtnListener(){
    console.log('hello from equals button:', equalsBtnListener);
   
}

function cBtnListener(){
    console.log('hello from C button:', cBtnListener);
   
}

function postNewCalcData() { 
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    $.ajax({
        type: 'POST',
        url: '/calculations',
        data:{ 
            firstNumber: firstNumber, 
            secondNumber: secondNumber,
            operator: operatorButton,
        }
    }).then(function (response) {
        console.log('respnse', response);
        getNewCalcData();
        $('#firstNumber').val('');
        $('#secondNumber').val('');
    }).catch(function(error){
        alert(error);
    });
}