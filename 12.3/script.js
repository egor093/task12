let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let secundes = document.querySelector('.secundes');

function time(){
    let date = new Date();
    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    secundes.innerText = date.getSeconds();
}
setInterval(time,1000);