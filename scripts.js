let gridContainer = document.querySelector('#grid-container');

function createGrid(size) {
    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        let side = 100 / size;
        gridItem.style.width = side + '%';
        gridItem.style.height = side + '%';
        gridItem.style.backgroundColor = 'blue';
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16);

let gridItems = document.querySelectorAll('.grid-item');

gridItems.addEventListener('mouseover', function() {
    gridItems.style.backgroundColor = 'black';
}

