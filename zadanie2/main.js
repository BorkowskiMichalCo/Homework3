let num = parseInt(prompt("Odwrocenie kolejnosci liczb"), 10);
const reverse = num =>
  parseInt(
    String(num)
      .split("")
      .reverse()
      .join(""),
    10
  );

alert(`Dla liczby ${num} zwracana wartosc to ${reverse(num)}`);
