const wrapper = document.getElementById('wrapper')
let div1 = document.createElement('div')

div1.id = "box"
let text = document.createTextNode('JS')

wrapper.appendChild(div1) //This adds div1 to the wrapper.

div1.appendChild(text)

div1.textContent='css'
// myDiv.classList.add('Class1', 'Class2','Class3')
// myDiv.classList.remove('Class2')
// myDiv.classList.toggle('Class3')

let alexVar = true
button.addEventListener("click", () => {
    if (alexVar == true ) {
        header.style.color = "brown"
    }
    if (alexVar == false ) {
        header.style.color = "yellow"
    }
    alexVar = !alexVar
})


const wrapper = document.getElementById('wrapper');
const btn = document.getElementById('btn');

const circle = document.createElement('div');
circle.id = 'circle';

wrapper.appendChild(circle);

btn.onclick = () => {
	circle.classList.toggle('hide');
}