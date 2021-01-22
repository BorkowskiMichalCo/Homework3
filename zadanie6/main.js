let height = parseInt(prompt("Podaj wysokosc wiezy hanoi"));

let steps = Math.pow(2,height) -1;
console.log(height)
if(height === 1){
    console.log(`Minimalna ilość kroków potrzeba do ułozenia wiezy Hanoi z ${height} klocka to ${steps} ruch`)
}else{
    console.log(`Minimalna ilość kroków potrzeba do ułozenia wiezy Hanoi z ${height} klocków to ${steps} kroki/kroków`)
}


