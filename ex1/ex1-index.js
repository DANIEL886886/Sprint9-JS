// **Product rezolvă exercițiile într-un mediu de programare la alegere (ex. Replit, VS Code)**  **și încarcă codul pe Replit.**
// **1. Scrieți o funcție care returnează pătratul unui număr**
// Funcția `findSquare(num)` returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
// Exemplu 1:
// `Input: num = 6`
// `Output: 36`
// Exemplu 2:
// `Input: num = 0`
// `Output: 0`
// Exemplu 3:
// `Input: num = -12`
// `Output: 144`
//..................................................................................................................................

console.clear()

function theSquareOfInput1(number) { 

       if (typeof number === 'number' && !isNaN(number)) {
              return number = number ** 2;
       }

       return "Error: Input must be a number";
}
console.log("\nCase1 simple function to return square of number: \n")

console.log("The square of input is: " + theSquareOfInput1(0.34) + '\n\n') 

//TESTED OUTPUT: 
// Case1 simple function to return square of number:
// The square of input is: 0.11560000000000002

// compressed version of arrow function with if conditional
const theSquareOfInput2 = (number1) => typeof number1 === 'number' && !isNaN(number1) ? number1 ** 2 : 'Error input must be a number!';
console.log("\nCase2 compressed arrow function to return square of number: \n")
console.log("The square of input is: " + theSquareOfInput2(6) + '\n\n')

//TESTED OUTPUT: 
// Case2 compressed arrow function to return square of number:
// The square of input is: 36