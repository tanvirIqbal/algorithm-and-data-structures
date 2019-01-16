// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
Similar Problem:
1. What is the most common character in the string.
2. Does string A have the same character as string B (is it an anagram)?
3. Does the given string have any repeated character?
*/

function maxChar(str) {
    const charMax = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if(!charMax[char]){
            charMax[char] = 1;
        }
        else {
            charMax[char]++;
        }
    }

    for (let char in charMax) {
        if (charMax[char]>max) {
            max = charMax[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
