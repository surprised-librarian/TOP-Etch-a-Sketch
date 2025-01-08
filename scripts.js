let squareContainer = document.querySelector('#square-Container');
squareContainer.style.width = window.innerHeight - 100 + 'px';
squareContainer.style.height = window.innerHeight - 100 + 'px';




function createGrid(size) {
    let squareSize = size * size;
    for (let i = 0; i < squareSize; i++) {
        let square = document.createElement('div');
        square.id = 'square-' + (i + 1);
        square.style.flex = 100 / size + '%';
        squareContainer.appendChild(square);
    }
    for (let i = 0; i < squareSize; i++) {
        let selectedSquare = document.querySelector('#square-' + (i + 1));
        selectedSquare.setAttribute('onmouseover', 'changeColor("square-' + (i + 1) + '")');        
    }
}




function changeColor(arg) {
    let ident = '#' + arg;
    console.log(ident);
    document.querySelector('' + ident + '').style.backgroundColor = '#00A36C';
}

createGrid(4);


    


