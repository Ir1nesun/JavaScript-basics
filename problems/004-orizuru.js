/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 * (если это возможно, если нет, то у Кати должно быть журавликов минимум в 2 раза больше, как в примере 3)
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
function computeOrizurus(total) {
    if (total % 6 === 0) {
        let p = total / 6 ;
        return [p, 4 * p, p];
    } else {
        let p = Math.floor(total / 6);
        let remaining = total - 2 * p;
        let k = Math.max(remaining, 2 * p);
        return [p, k, p];
    }
}

module.exports = computeOrizurus;
