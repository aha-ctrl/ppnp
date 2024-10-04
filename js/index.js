
let a  =prompt("Введите строку").trim()

if (a.includes ("Начало") && a.includes ("Конец")) {
    console.log("Строка введена верно.");
  }
   else {
    console.log("Строка введена неверно.");
  }
  
let b = a.toUpperCase().slice()

console.log(b)

console.log()