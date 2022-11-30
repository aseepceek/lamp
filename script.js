let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

red.style.opocity = '1';
yellow.style.opocity = '0.8';
green.style.opocity = '0.8';

red.addEventListener('onclick', ()=>{
    red.style.opacity = '0.8';
    yellow.style.opacity = '1';
})
yellow.addEventListener(onclick, ()=>{
    yellow.style.opacity = '0.8';
    green.style.opacity = '1';
})
green.addEventListener('onclick', ()=>{
    green.style.opacity = '0.8';
    red.style.opacity = '1';
})