document.getElementById("heading").style.color="purple"
document.getElementById("heading").style.backgroundColor="yellow"

const myFirstHeading = document.getElementById("heading")
const button = document.getElementById("button")
const input = document.getElementById("input")
const paragraphs = document.getElementsByTagName("p");
const smallerHeading = document.getElementsByClassName("smallerHeading")
const list = document.querySelectorAll("li")

for (let i = 0; i <paragraphs.length; i++) {
    button.addEventListener("click", () => {
    paragraphs[i].style.color = input.value
    })
}

for(let i = 0; i<smallerHeading.length;i++) {
    smallerHeading[i].style.color = "green"
}

for(let i = 0; i < list.length;i++) {
    list[i].style.color = "green"
}




myFirstHeading.addEventListener("click", () => {
    myFirstHeading.style.color="green"
})

button.addEventListener("click", () => {
    myFirstHeading.style.color = "yellow"
    myFirstHeading.style.color = input.value

})


const changeColourAndSize = () => {
    button.style.fontSize = "3em"
    button.style.color = "Orange"
    button.style.backgroundColor = "blue"
    button.style.padding="7%"

}

changeColourAndSize()