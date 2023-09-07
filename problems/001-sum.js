/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
 if (n <= 0) {
    return 1;
 }

 let number = Array.from({length: n}, (_, i) => i + 1);
return number.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sum;
