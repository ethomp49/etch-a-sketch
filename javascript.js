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