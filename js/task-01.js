// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4

const refs = {
    ul: document.getElementById("categories"),
    li: document.querySelectorAll(".item"),
}

//console.dir(refs.ul);
const ulChildren = refs.ul.children;

console.log(`В списке ${ulChildren.length} категории.`);

//console.dir(refs.li);

refs.li.forEach((el) => {
    const nameOfCategory = el.children[0].textContent;
    const amountOfCategory = el.children[1].children.length;
    //console.log(nameOfCategory);
    //console.log(amountOfCategory);
    console.log(`- Категория: ${nameOfCategory}
- Количество элементов: ${amountOfCategory}`);
});



