const darkBut = document.querySelector('.darkBut');
const whiteBut = document.querySelector('.whiteBut');
const body = document.querySelector('body');

darkBut.addEventListener('click',() => {
    body.classList.add('dark');
    darkBut.style.display = 'none';
    whiteBut.style.display = 'block';
})
whiteBut.addEventListener('click',() => {
    body.classList.remove('dark');
    darkBut.style.display = 'block';
    whiteBut.style.display = 'none';
})