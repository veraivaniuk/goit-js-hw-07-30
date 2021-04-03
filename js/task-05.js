const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');

console.log(nameInputEl);
console.dir(nameInputEl);

nameInputEl.addEventListener('input', () => {
    if (nameInputEl.value === '') {
        nameOutputEl.textContent = "незнакомец";
    } else {
        nameOutputEl.textContent = nameInputEl.value;
    }
})
