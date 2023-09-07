/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    if (!value) {
        return '';
    }
    
    const normalize = (str) => str.toLowerCase().split('').sort().join('');
    const words = value.match(/\b\w+\b/g) || []; 
    const wordMap = {};

    words.forEach((word) => {
        const normalizedWord = normalize(word);
        if (!wordMap[normalizedWord]) {
            wordMap[normalizedWord] = [];
        }
        wordMap[normalizedWord].push(word); 
    });

    const anagrams = [];

    for (let key in wordMap) {
        if (wordMap[key].length > 1) {
            anagrams.push(...wordMap[key]); 
        }
    }

    return anagrams.join(' ');
}

module.exports = searchAnagrams;
