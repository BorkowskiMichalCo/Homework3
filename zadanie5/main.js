function encrypt(str) {
  return str
    .split("")
    .map(char => {
      x = char.charCodeAt(0);

      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if (x < 78) {
        return String.fromCharCode(x + 13);
      } else {
        return String.fromCharCode(x - 13);
      }
    })
    .join("");
}
let word = prompt("Podaj słowo jakie chcesz zaszyfrować");
let upperWord = word.toUpperCase();
console.log(encrypt(upperWord));


