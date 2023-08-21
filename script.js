'use strict';

const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.Clear');
const customButton = document.querySelector('.custom');
const scrollbar = document.getElementById('scrollbar');
const pixels = document.querySelector('.pixel');
const toggle = document.querySelector('.toggle');

let defaultColor = 'black';
let gridSize = 16;


function grid(size){
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i < gridSize; i++){
        for(let j=0; j < gridSize; j++){
            const div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);

            div.addEventListener('mouseenter', function(){
                colors(div);
            });
        }
    }
}

function colors(element){
    switch(defaultColor){
        case 'Black':
            element.style.backgroundColor = 'black';
            break;

        case 'Gray':
            element.style.backgroundColor = 'gray';
            break;

        case 'Rainbow':
            const letters = '0123456789ABCDEF';
            let rgbColor = '#'
            for(let i=0; i<6; i++){
                rgbColor += letters[Math.floor(Math.random()*16)]
            }
            element.style.backgroundColor = rgbColor;
            break;
        
        case 'Eraser':
            element.style.backgroundColor = '#f6dcf6';
            break;

        case 'custom': 
            const color = customButton.jscolor.toHEXString();
            element.style.backgroundColor = color;
            break;

        default:
            element.style.backgroundColor = 'black';
            break;
    }
}2


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const color = button.classList[1]; //btn "Black": [0] [1]
        defaultColor = color;
    })
});

// Clear the grid
clearButton.addEventListener('click', function(){
    const gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(function (element) {
        element.style.backgroundColor = ''; 
    });
})

grid(gridSize)

//Scrollbar for grid size
scrollbar.addEventListener('input', function(){
    gridSize = parseInt(scrollbar.value);
    pixels.textContent = `${gridSize} X ${gridSize}`
    grid(gridSize)
})

//Change grid to plain
toggle.addEventListener('click', function(){
    container.classList.toggle('no-gap');
})



