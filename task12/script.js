const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.tabcontent');

for (let item of buttons){
    item.addEventListener('click',(event) => {
        let blockId = item.id + '-content';
        openTab(event,blockId);
    });
}
function openTab(event,blockId){
    buttons.forEach(element => {
        element.classList.remove('active');
    });
    contents.forEach(element => element.style.display = 'none');
    event.target.classList.add('active');
    console.log(document.querySelector(`#${blockId}`))
    document.querySelector(`#${blockId}`).style.display = 'block';
}