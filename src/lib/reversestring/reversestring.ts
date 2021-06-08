// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export const reverseOne = (str: string) => {
  return str.split('').reverse().join('');
};

export const reverseTwo = (str: string) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
};

export const reverseFour = (str: string) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
};

export const reverseThree = (str: string) => {
  return str.split('').reduce((acc, currentValue) => {
    return currentValue + acc;
  }, '');
};

export const reverse = reverseThree;
