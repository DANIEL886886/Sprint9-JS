// **4. Scrieți o funcție pentru a adăuga numere nelimitate**
//        Funcția`addNumber()` ** returnează ** suma tuturor numerelor transmise ca argumente funcției.
// Numărul de argumente nu este definit.Se poate transmite un număr nelimitat de numere.
// Exemplu 1:
// `Input: addNumber(1, 2, 3)`
// `Output: 6`
// Exemplu 2:
// `Input: addNumber(1, 2, 3, 4, 5)`
// `Output: 15`
// *Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// `const addNumber = (…argumente) ⇒ {}` *
// ** Încărcă link - ul de Replit ce conţine rezolvările cerinţelor, folosind * Text reply.***
//........................................................................................................................
console.clear()

const addNumbers = (...arguments) => {
       let sum = 0;
       for (let i = 0; i < arguments.length; i++) {
              sum += arguments[i];
       }
       return sum;
}

console.log("\nCase1 with simple function. The calculated sum is: " + addNumbers(1, 2, 3, 4) + "\n")

//The reduce method takes a callback function as its first argument,
//which takes two parameters: sum(the accumulator) and num(the current element being processed).
const addNumbers1 = (...arguments1) => arguments1.reduce((sum, num) => sum + num, 0);
console.log("\nCase2 with one row function. The calculated sum is: " + addNumbers1(1, 2, 3, 4) + "\n")