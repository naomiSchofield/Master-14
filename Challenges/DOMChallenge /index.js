let inputImg = document.getElementById("inputImage")
const generateButton = document.getElementById("button1")
let inputBoxNum = document.getElementById("inputBoxNum")
const removeButton = document.getElementById("button2")
let generatedImage = document.createElement("img")
let wrapper = document.getElementById("wrapper")

const createBox = () => {


    //i = 0 if I is less than inputBoxNum add 1 to i. 
    for (let i = 0; i < inputBoxNum.value; i++) {
        // Every time this loops through everything inside the loop happens. 
        let box = document.createElement("div")
        document.body.appendChild(box)
        let generatedImage = document.createElement("img")
        generatedImage.src = `https://source.unsplash.com/random/500x500/\?${inputImg.value}`
        generatedImage.setAttribute("height", "100%");
        generatedImage.setAttribute("width", "100%");
        box.appendChild(generatedImage)
        console.log(box)
        box.classList.add('box')
        wrapper.appendChild(box)
    }
}

generateButton.addEventListener("click", () => {
    event.preventDefault()
    console.log(inputBoxNum.value)
    createBox()
})


const removeImages = () => {
    removeButton.onclick = () => {
        box.classList.toggle('hide')
    }
}