// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.
// Exemplu 1:
// Input: sir = “Îmi place programarea” litera = “a”
// Output: 4
// Exemplu 2:
// Input: sir = “Vreau să lucrez în IT”, litera = “r”
// Output: 2
// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule.
// Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a
//.........................................................................................................

// const countLetterOccurrences = (string, letter) => (typeof string === "string") && (typeof letter === "string") ? for char in string ? count++ : "Invalid input: all input must be string";
console.clear()

const countLetterOccurrences = (string, letter) => {
  let count = 0;
  letter = letter.toLowerCase()

  if (typeof inputstring !== "string" && typeof inputletter !== "string") {
    throw new Error ("Both arguments must be strings.");
  }

  // string.toLowerCase function to convert all letters in lower case in order to count all letters 
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter) {
      count++;
    }
  }
  return count;
};

const inputstring = "Ce mai faci si inca 2 de aa"
const inputletter = "a"

console.log("\nStringul ce trebuie analizat este: " + inputstring + "\n")
console.log("\nLitera care urmeaza sa fie numarata este: " + inputletter + "\n")
console.log("\nLitera apare in stringul analizat :" + countLetterOccurrences(inputstring, inputletter) + " ori" + "\n")
console.log("")

// Tested output:
// Stringul ce trebuie analizat este: Ce mai faci
// Litera care urmeaza sa fie numarata este: a
// Litera apare in stringul analizat :2 ori