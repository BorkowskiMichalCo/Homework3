let number = 3;
const string = "Hello";
let obj = new Date();

if (typeof number == "number") {
  console.log(`Dla wartości ${number} zwracana wartość to ${typeof number}`);
} else {
  console.log("Nie liczba");
}

if (typeof string == "string")
  console.log(`Dla wartości '${string}' zwracana wartość to ${typeof string}`);
else console.log("Nie string");

// "Object"
if (typeof obj == "object")
  console.log(`Dla wartości 'new Data()' zwracana wartość to ${typeof obj}`);
else console.log("Nie obiekt");
