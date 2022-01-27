const grid = document.querySelector(".grid");
const btn = document.querySelector("#btn")
const clr = document.querySelector("#clr")
const rng = document.querySelector('#rng')

let gridSize = 32;

function createGrid(size) {
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        grid.appendChild(div);
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute('style', `background-color: ${clr.value}`)
        });
    }
}

function clearGrid() {
    grid.innerHTML = ""
}

function toggle(button) {
    switch(button.textContent)

    {
        case "Create Grid":
            button.textContent = "Clear Grid";
            break;
        
        case "Clear Grid":
            button.textContent = "Create Grid";
            break;
    }
}

btn.addEventListener('click', function (e) {
    clearGrid();
    createGrid(rng.value);
    toggle(btn)
});

clr.addEventListener('change', function (e) {
    clearGrid();
    createGrid(rng.value);
    toggle(btn)
})

rng.addEventListener('change', function (e) {
    clearGrid();
    createGrid(rng.value);
    toggle(btn)
})