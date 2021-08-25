const parentGridDiv = document.querySelector('#parentGrid')
const clearBtn = document.querySelector('.clear')
const changeSizeBtn = document.querySelector('#changeSize')
let size = document.querySelector('#sizeChoice')
let gridDiv = null
let numGridDivs = null
let rows = 0
let cols = 0



function switchClass() {
    this.classList.add("changeColour")
}

// creates the grid using rows and columns as an argument which is defined in func setsize
// then appends the children to the 

function createGrid(rows, cols) {
    parentGridDiv.style.setProperty('--grid-rows', rows)
    parentGridDiv.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        parentGridDiv.appendChild(cell).className = 'gridSlot';
    }
}

// adds an event listener to all the griddivs

function mouseOverGridsAdd() {
    for (arrayNum = 0; arrayNum < numGridDivs; arrayNum++) {
        gridDiv[arrayNum].addEventListener('mouseover', switchClass)
    } 
}

function clearBoard() {
    for (arrayNum2 = 0; arrayNum2 < numGridDivs; arrayNum2++) {
        gridDiv[arrayNum2].classList.remove("changeColour")
        gridDiv[arrayNum2].classList.add("gridSlot")
    }
}

function setSize() {
    if(size.selectedIndex == 0) {
        rows = 4
        cols = 4
    } else if(size.selectedIndex == 1) {
        rows = 8
        cols = 8
    } else if(size.selectedIndex == 2) {
        rows = 16
        cols = 16
    } else if(size.selectedIndex == 3) {
        rows = 32
        cols = 32
    } else if(size.selectedIndex == 4) {
        rows = 64
        cols = 64
    } else if(size.selectedIndex == 5) {
        rows = 100
        cols = 100
    } else {
        console.log("error")
        return
    }
    
    createGrid(rows, cols)
    
    gridDiv = document.querySelectorAll('.gridSlot')
    numGridDivs = gridDiv.length
    
    mouseOverGridsAdd()
}



clearBtn.onclick = function() {
    clearBoard()
}

changeSizeBtn.onclick = function() {
    clearBoard()
    for(holder = 0; holder < numGridDivs; holder++) {
        gridDiv[holder].parentNode.removeChild(gridDiv[holder])
    }
    setSize()
}

setSize()
