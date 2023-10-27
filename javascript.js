function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= size; j++) {
            let pixel = document.createElement("div");
            pixel.className = "square";
            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }
    gridContainer.appendChild(grid);
    document.addEventListener("mousedown", startColor);
    document.addEventListener("mouseup", endColor);
}

function removeGrid() {
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.querySelector(".grid");
    gridContainer.removeChild(grid);
}

function startColor(e) {
    colorSquare(e);
    document.querySelector(".grid").addEventListener("mouseover", colorSquare);
}

function endColor() {
    document.querySelector(".grid").removeEventListener("mouseover", colorSquare);
}

function colorSquare(e) {
    if (e.target.className === "square") {
        e.target.style.backgroundColor = "black";
    }
}

function clearSquares() {
    document.querySelectorAll(".square").forEach( (node) => node.style.backgroundColor = "white");
}

function sliderInput(e) {
    const label = e.target.labels[0];
    const value = e.target.value;
    label.textContent = `${value} x ${value}`;
}

function sliderChange(e) {
    const value = e.target.value;
    removeGrid();
    createGrid(value);
}

createGrid(50);
document.querySelector(".clear-button").addEventListener("click", clearSquares);
document.querySelector(".slider").addEventListener("input", sliderInput);
document.querySelector(".slider").addEventListener("change", sliderChange);
document.ondragstart = (e) => e.preventDefault();