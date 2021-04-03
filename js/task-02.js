const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredientsEl = document.getElementById('ingredients');
const htmlMarkup = ingredients.map((elem) => {
    const liIngredient = document.createElement("li");
    liIngredient.textContent = `${elem}`;
    //console.log(liIngredient);
    return liIngredient;
});
console.log(...htmlMarkup)

ulIngredientsEl.append(...htmlMarkup);