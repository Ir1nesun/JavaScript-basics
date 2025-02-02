/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {
    return [...new Set(arr)];
}

const strings = ["chocolate", "candy", "fruit", "candy", "honey", "fruit"];
console.log(uniqueStrings(strings));