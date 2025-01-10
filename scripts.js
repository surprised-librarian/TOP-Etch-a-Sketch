let squareContainer = document.querySelector('#square-Container');
squareContainer.style.width = window.innerHeight - 200 + 'px';
squareContainer.style.height = window.innerHeight - 200 + 'px';

function userInputRGB() {
    const size = document.querySelector('#user-Grid-Size-Input').value;
    if ( isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number 1 or greater  and 100 or less to create a grid');
    } else {
        let squareContainer = document.querySelector('#square-Container');
        squareContainer.textContent = '';
        createGridRGB(Math.trunc(size));
    }
}

function userInputOpacity() {
    const size = document.querySelector('#user-Grid-Size-Input').value;
    if ( isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number 1 or greater  and 100 or less to create a grid');
    } else {
        let squareContainer = document.querySelector('#square-Container');
        squareContainer.textContent = '';
        createGridOpacity(Math.trunc(size));
    }
}

document.querySelector('#random-RGB-Button').addEventListener('click', userInputRGB);
document.querySelector('#change-Opacity-Button').addEventListener('click', userInputOpacity);

//document.querySelector('#user-Grid-Size-Submit').addEventListener('click', userInput);

function changeColorRGB(arg) {
    let ident = '#' + arg;
    console.log(ident);
    let instance = document.querySelector('' + ident + '');
    let rgb;
    function squareColorRGB() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        return rgb;
    }
    squareColorRGB()
    instance.style.backgroundColor = rgb;
}


function changeColorOpacity(arg) {
    let ident = '#' + arg;
    let instance = document.querySelector('' + ident + '');
    let opacityStyles = window.getComputedStyle(instance);
    let currentOpacity = opacityStyles.opacity;
    currentOpacityValue = Number(currentOpacity);
    if (currentOpacity < 10) {
        let newOpacity = currentOpacityValue + .1;
        instance.style.opacity = newOpacity;
    }
}


function createGridRGB(size) {
    let squareSize = size * size;
    document.querySelector('#user-Grid-Size-Input').value = '';
    for (let i = 0; i < squareSize; i++) {
        let square = document.createElement('div');
        square.id = 'square-' + (i + 1);
        square.style.flex = 100 / size + '%';
        squareContainer.appendChild(square);
    }
    for (let i = 0; i < squareSize; i++) {
        let selectedSquare = document.querySelector('#square-' + (i + 1));
        selectedSquare.setAttribute('onmouseover', 'changeColorRGB("square-' + (i + 1) + '")');        
    }
    
}

function createGridOpacity(size) {
    let squareSize = size * size;
    document.querySelector('#user-Grid-Size-Input').value = '';
    for (let i = 0; i < squareSize; i++) {
        let square = document.createElement('div');
        square.id = 'square-' + (i + 1);
        square.style.flex = 100 / size + '%';
        square.style.backgroundColor = 'black';
        square.style.opacity = '0';
        squareContainer.appendChild(square);
    }
    for (let i = 0; i < squareSize; i++) {
        let selectedSquare = document.querySelector('#square-' + (i + 1));
        selectedSquare.setAttribute('onmouseover', 'changeColorOpacity("square-' + (i + 1) + '")');        
    }
    
}











    


