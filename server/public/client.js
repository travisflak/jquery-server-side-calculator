$(document).ready(onReady);

function onReady() {


    $('#plus').on('click', plusBtnListener);
    $('#minus').on('click', minusBtnListener);
    $('#times').on('click', timesBtnListener);
    $('#divide').on('click', divideBtnListener);
    $('#equals').on('click', equalsBtnListener);
    $('#C').on('click', cBtnListener);
}

function plusBtnListener(){
 console.log('hello from plus button:', plusBtnListener);

}

function minusBtnListener(){
    console.log('hello from minus button:', minusBtnListener);
   
}

function timesBtnListener(){
    console.log('hello from times button:', timesBtnListener);
   
}

function divideBtnListener(){
    console.log('hello from divide button:', divideBtnListener);
   
}

function equalsBtnListener(){
    console.log('hello from equals button:', equalsBtnListener);
   
}

function cBtnListener(){
    console.log('hello from C button:', cBtnListener);
   
}

