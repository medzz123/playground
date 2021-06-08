// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str.charAt(0).toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === ' ') {
      result = result + str.charAt(i).toUpperCase();
    } else {
      result = result + str.charAt(i);
    }
  }

  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = str.split(' ');

//   words.forEach((w, i) => {
//     words[i] = w.charAt(0).toUpperCase() + words[i].slice(1);
//   });

//   return words.join(' ');
// }
