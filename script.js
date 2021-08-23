const parentGridDiv = document.querySelector('#parentGrid')

// for every column and row create a div in the html that
// is part of a grid

function createGrid(rows, cols) {
    parentGridDiv.style.setProperty('--grid-rows', rows)
    parentGridDiv.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        parentGridDiv.appendChild(cell).className = 'gridSlot';
    }
}

createGrid(16, 16)



