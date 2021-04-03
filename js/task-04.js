
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');

let countValue = +valueEl.textContent;

//console.dir(value);
//console.log(countValue);

function increment ()  {
    countValue += 1;
    valueEl.textContent = countValue;
}

function decrement () {
    countValue -= 1;
    valueEl.textContent = countValue;
}

btnIncrementEl.addEventListener('click', increment);
btnDecrementEl.addEventListener('click', decrement);