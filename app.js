console.log("hello world")

let currentColor = "white"
let colorArray = []


const container = document.querySelector(".flex-container")
const colorSelect = document.querySelector("#color-select")
const cells = document.querySelectorAll(".flex-item")

function makeGrid() {
    for(let i = 0; i < 64; i++){
        let div = document.createElement("div")
        div.classList.add("flex-item")
        div.setAttribute("id",`cell`+ i)
        div.textContent = i
        container.appendChild(div)
    }
}
makeGrid()


function collectColors() {
    cells.forEach(cell => {
        colorArray.push(cell.backgroundColor)
        console.log(colorArray)
    });
}

function handleClick(e) {
    console.log(`you've clicked ${e.target.id}`)
    e.target.style.backgroundColor = currentColor
    collectColors()
}

function handleChange(e){
    currentColor = e.target.value
    console.log(currentColor)
}

container.addEventListener("click",handleClick)
colorSelect.addEventListener("change",handleChange)
