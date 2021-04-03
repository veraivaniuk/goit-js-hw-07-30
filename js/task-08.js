const controlsEl = document.getElementById('controls');
const inputEl = document.querySelector("input");
const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.getElementById('boxes');

function createBoxes(amount) {
    let divBoxes = '';
    let width = 20;
    let height = 20;
    for (let i = 1; i <= amount; i += 1){
        width += 10;
        height += 10;
        let rendomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        divBoxes += `<div style="background-color: ${rendomColor}; width: ${width}px; height:${height}px"></div>`;
    }
    boxesEl.insertAdjacentHTML('beforeend', divBoxes);
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}

btnRenderEl.addEventListener('click', () => {
    createBoxes(inputEl.value)
})

btnDestroyEl.addEventListener('click', () => {
    destroyBoxes()
})
