/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let noSecret = secret.split('');
    let message = noSecret.map(function(symbol) {
        if (symbol >= 'a' && symbol <= 'z') {
            let charCode = symbol.charCodeAt(0);

            if (charCode === 'z'.charCodeAt(0)) {
                return 'a';
            } else {
                return String.fromCharCode(charCode + 1);
            }
        } else {
            return symbol;
        }

    });

    return message.join('');

}

module.exports = decrypt;
