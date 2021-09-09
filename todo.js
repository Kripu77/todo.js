const a = document.querySelector('#inputId');
const inputData = a.value;


const b = document.querySelector('#add');
const c = document.querySelector('#remove');

const d = document.querySelector('.list');

b.addEventListener('click', (e)=>{
    e.preventDefault();

const newElement = document.createElement('p');
// newElement.innerText = inputData;
const textD = document.createTextNode('ásdasd');
newElement.classList.add('paragraph');
newElement.appendChild(textD);
d.appendChild(newElement);

newElement.addEventListener('click', (e)=>{
    e.currentTarget.style.textDecoration = "line-through";
})

c.addEventListener('dblclick', (e)=>{


d.removeChild(newElement);
})




})



