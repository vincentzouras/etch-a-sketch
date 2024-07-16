const container = document.querySelector('.container');
const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    generateGrid();
})

function generateGrid() {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    let sideSize = parseInt(prompt("How many squares per side? (max 100)"));
    if (sideSize > 100){
        sideSize = 100;
    }
    for (let i = 0; i < sideSize; i++) {
        let column = document.createElement('div');
        for (let j = 0; j < sideSize; j++){
            let row = document.createElement('div');
            column.appendChild(row);
            row.style.flex = '1'
            row.addEventListener('mouseenter', function() {
                row.style.backgroundColor = 'black'
            })
        }
        container.appendChild(column)
        column.style.display = 'flex'
        column.style.flex = '1';
        column.style.flexDirection = 'column'
    }
}