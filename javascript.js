function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= size; i++) {
        let ithDiv = document.createElement("div");
        ithDiv.className = "row";
        for (let j = 1; j <= size; j++) {
            ithDiv.appendChild(document.createElement("div"));
        }
        grid.appendChild(ithDiv);
    }
    gridContainer.appendChild(grid);
}

function removeGrid() {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.querySelector(".grid");
    gridContainer.removeChild(grid);
}
