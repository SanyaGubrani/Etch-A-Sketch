'use strict';

const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.Clear');
const customButton = document.querySelector('.custom');

let defaultColor = 'black';

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);

        div.addEventListener('mouseenter', function(){
            colors(div);
        });
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
        
        case 'White':
            element.style.backgroundColor = 'white';
            break;

        case 'custom': 
            const color = customButton.jscolor.toHEXString();
            element.style.backgroundColor = color;
            break;

        default:
            element.style.backgroundColor = 'black';
            break;
    }
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const color = button.classList[1];
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




