const grid = document.querySelector('.grid');


// function createGrid() {
//     for (let i = 0; i < 16; i++) {
//         const line = document.createElement('div');
//         line.className = 'line';
//         for (let j = 0; j < 16; j++) {
//             const square = document.createElement('div');
//             square.className = 'square';
//             square.style = 'height:20px;width:20px;border:1px solid black;';
//             line.appendChild(square);
//         }
//         grid.appendChild(line);
//     }
// }

function createGrid() {
    for (let j = 0; j < (16 * 16); j++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style = 'height:25px;width:25px;border:1px solid black;';
        grid.appendChild(square);
    }
}

createGrid();


