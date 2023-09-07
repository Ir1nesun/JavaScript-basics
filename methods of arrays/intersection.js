/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
function intersect(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(element => set2.has(element));
}

console.log(intersect([1, 2, 3, 4], [3, 4, 5, 6]));