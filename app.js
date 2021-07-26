const grid = document.querySelector('.grid');
const squares = document.getElementsByClassName('square');
const reset = document.querySelector('#reset');
const btn16 = document.querySelector('#btn16');
const btn32 = document.querySelector('#btn32');
const btn64 = document.querySelector('#btn64');


createGrid64();


function createGrid16() {
    removeGrid();
    for (let i = 0; i < (16 * 16); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style = 'height:27px;width:27px;';
        grid.appendChild(square);
    }
    squareActive();
}

function createGrid32() {
    removeGrid();
    for (let i = 0; i < (32 * 32); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style = 'height:13.5px;width:13.5px;';
        grid.appendChild(square);
    }
    squareActive();
}

function createGrid64() {
    removeGrid();
    for (let i = 0; i < (64 * 64); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style = 'height:6.75px;width:6.75px;';
        grid.appendChild(square);
    }
    squareActive();
}

// adds event listener to each square
function squareActive() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseenter', (e) => {
            e.target.className = 'square squareActive';
        })
    }
}



reset.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains("squareActive")) {
            squares[i].classList.remove("squareActive");
        }
    }
})

function removeGrid() {
    while (squares[0]) {
        squares[0].parentNode.removeChild(squares[0]);
    }
}


btn16.addEventListener('click', createGrid16);

btn32.addEventListener('click', createGrid32);

btn64.addEventListener('click', createGrid64);

