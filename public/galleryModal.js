// gallery 
var gallery1Btn = document.querySelector('#gallery1Btn');
var gallery1 = document.querySelector('#gallery1');

var gallery2Btn = document.querySelector('#gallery2Btn');
var gallery2 = document.querySelector('#gallery2');

var gallery1Close = document.querySelector('#gallery1Close');
var gallery2Close = document.querySelector('#gallery2Close');


// modal activation buttons
gallery1Btn.addEventListener('click', function (){
    gallery1.classList.remove('invisible');
});
gallery2Btn.addEventListener('click', function (){
    gallery2.classList.remove('invisible');
});

// close buttons
gallery1Close.addEventListener('click', function(){
    gallery1.classList.add('invisible');
});
gallery2Close.addEventListener('click', function (){
    gallery2.classList.add('invisible');
});