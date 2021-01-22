let choice;
choice = prompt("Wybierz czy chcesz policzyć Liczbę Trójkątną(1) czy Liczbę Czworościenną(2)")
switch (choice)
{
    case "1":
        let z = parseInt(prompt("Podaj liczbe trojkatnta"),10);
        let a = z*(z+1)/2;
        alert(`Dla wartości ${z} zwracna wartość to ${a}.`)
        break;
    case "2":
        let x = parseInt(prompt("Podaj liczbe czworoscienna"),10);
        let y = (x*(x+1)*(x+2))/6;
        alert(`Dla wartości ${x} zwracna wartość to ${y}.`)
        break;
}
