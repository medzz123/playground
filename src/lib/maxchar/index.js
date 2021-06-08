// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = str.charAt(0);

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let k in chars) {
    if (chars[k] > chars[max]) {
      max = k;
    }
  }

  return max;
}

module.exports = maxChar;
