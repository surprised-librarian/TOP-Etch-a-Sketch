let gridContainer = document.querySelector('#grid-container');
gridContainer.style.width = window.innerHeight - 100 + 'px';
gridContainer.style.height = window.innerHeight - 100 + 'px';

function addEvent(arg) {
    console.log('arg');
    document.querySelector(arg).style.backgroundColor = '#00A36C';
}


function createGrid(size) {
    let gridSize = size * size;
    //let screeenSize = screen.width;
    for (let i = 0; i < gridSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = 'grid-item-' + (i + 1);
        gridItem.style.flex = 100 / size + '%';
        gridItem.setAttribute('onmouseover', 'addEvent(' + gridItem.id + ')');
        gridContainer.appendChild(gridItem);
    }
    return size;
}

createGrid(4);


    


