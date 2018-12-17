// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverse = '';
    for (let character of str) {
        reverse = character + reverse;
    }
    return reverse;
}

module.exports = reverse;

//function reverse(str) {
//    return str.split('').reverse().join('');
//}