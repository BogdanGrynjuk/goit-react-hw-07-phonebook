export function firstLetterCaps(string) {
  let words = string.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let first = word.substring(0, 1).toUpperCase();
    let leftovers = word.substring(1)
    result += first + leftovers + " ";
  }; 

  return result;
};