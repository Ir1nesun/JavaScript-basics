/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let value = arr.reduce((sum, current) => sum + current, 0);
    return value / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));