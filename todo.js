const a = document.querySelector("#add");
const b = document.querySelector('input');
const c = document.querySelector("#remove");
const d = document.querySelector("ol");

const e = document.querySelector('li');

a.addEventListener('click', (e)=>{
     e.preventDefault();
    
const newElement = document.createElement('li');
 const newText = document.createTextNode(b.value);
newElement.setAttribute('class', 'lists')
newElement.appendChild(newText);
    console.log(b.value);


d.appendChild(newElement);

c.addEventListener('click', (e)=>{

for(let i = 0; i<d.children.length; i++){
    console.log(d.children.length);

d.removeChild(d.children[0]);
}

})



})

d.addEventListener('click', (e)=>{
    e.target.classList.toggle("list-done");
})

