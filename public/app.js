var gallery2Btn = document.querySelector('#gallery2Btn');
var gallery2 = document.querySelector('#gallery2');
var gallery2CloseBtn = document.querySelector('#gallery2CloseBtn');

gallery2Btn.addEventListener('click', function (){
    gallery2.classList.remove('invisible');
});

gallery2CloseBtn.addEventListener('click', function(){
    gallery2.classList.add('invisible');
});