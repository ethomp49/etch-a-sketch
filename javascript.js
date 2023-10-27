function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= size; i++) {
        let ithDiv = document.createElement("div");
        ithDiv.className = "row";
        for (let j = 1; j <= size; j++) {
            let pixel = document.createElement("div");
            pixel.className = "square"
            ithDiv.appendChild(pixel);
        }
        grid.appendChild(ithDiv);
    }
    gridContainer.appendChild(grid);
    grid.addEventListener("mousedown", squareMouseDown;
}

function removeGrid() {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.querySelector(".grid");
    gridContainer.removeChild(grid);
}

function squareMouseDown(e) {
    console.log(e.target)
}