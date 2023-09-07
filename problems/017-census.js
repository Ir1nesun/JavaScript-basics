/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    const result = list.reduce((acc, person, index) => {
        if(person.gender === 'Male' && person.age > acc.age){
            return {age: person.age, index: index};
        }
        return acc;
    }, {age: -1, index: -1});

    return result.index !== -1 ? result.index + 1 : undefined;
}

module.exports = census;
