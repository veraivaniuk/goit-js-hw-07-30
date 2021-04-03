const validationInputEl = document.getElementById('validation-input');

validationInputEl.addEventListener("blur", () => {
    if (validationInputEl.value.length === +validationInputEl.dataset.length) {
        validationInputEl.classList.add("valid");
        validationInputEl.classList.remove("invalid");
    } else {
        validationInputEl.classList.add("invalid");
        validationInputEl.classList.remove("valid");
    }
})

