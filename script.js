let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

red.style.opacity = '1';
yellow.style.opacity = '0.8';
green.style.opacity = '0.8';


function Color(color){
    if(color == 'red'){
        red.style.opacity = '0.8';
        yellow.style.opacity = '1';
    }
    else if (color == 'yellow'){
        yellow.style.opacity = '0.8';
        green.style.opacity = '1';
    }
    else{
        green.style.opacity = '0.8';
        red.style.opacity = '1';
    }
}