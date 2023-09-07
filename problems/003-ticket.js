/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let first = number.slice(0, 3);
    let last = number.slice (3, 6);

    let firstSum = parseInt(first[0], 10) + parseInt(first[1], 10) + parseInt(first[2], 10);
    let lastSum = parseInt(last[0], 10) + parseInt(last[1], 10) + parseInt(last[2], 10);

    if (firstSum === lastSum) {
        return true;
    } else {
        return false;
    }
}

module.exports = checkTicket;
