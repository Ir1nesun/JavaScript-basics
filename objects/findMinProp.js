/**
 * Функция, которая принимает на вход объект и возвращает название свойства с наименьшим значением.
 * @param {object} obj - входной объект
 * @return {string} - название свойства с наименьшим значением
 */
function findMinProp(obj) {
    let minProp = null; 
    let minValue = Infinity; 

    for (let key in obj) {
        if (obj[key] < minValue) {
            minValue = obj[key]; 
            minProp = key; 
        }
    }

    return minProp;
}

// Примеры:
console.log(findMinProp({a: 2, b: 5, c: 1})); // 'c'
console.log(findMinProp({x: 10, y: -5, z: 0})); // 'y'
console.log(findMinProp({foo: 100, bar: 200, baz: 50})); // 'baz'
