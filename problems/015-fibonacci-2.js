/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value < 0) {
        return;
    }

    let a = 0;
    let b = 1;
    let index = 1;

    if (value === 0) {
        return 0;
    }
    if (value === 1) {
        return 1;
    }

    while (b <= value){
        if (b === value) {
            return index;
        }

        let next = a + b;
        a = b;
        b = next;
        index++;
    }

    return;
}

module.exports = isFibonacci;
