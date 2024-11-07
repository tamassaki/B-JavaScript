// 1. Define Practice

function printHeart() {
    console.log("<3");
}

// Menjalankan fungsi
printHeart(); 

// 2. Return Value Practice

function multiply(a, b) {
    return a * b; // Mengembalikan hasil perkalian a dan b
}

// Menguji fungsi multiply dengan beberapa contoh
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// 3. Scope Practice
// A. Apa yang dicetak ke konsol saat kode ini dijalankan?
let animal = "Giant Pacific Octopus"; // Variabel global
function observe() {
    let animal = "Pajama Squid"; // Variabel lokal
    console.log(animal); // Ini akan mencetak "Pajama Squid"
}
observe(); // Memanggil fungsi observe

// B. Apa yang dicetak ke konsol saat kode ini dijalankan?
let deadlyAnimal = "Blue-Ringed Octopus"; // Variabel global
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish"; // Variabel lokal
    console.log(deadlyAnimal); // Ini akan mencetak "Scorpionfish"
}
handleAnimal(); // Memanggil fungsi handleAnimal
console.log(deadlyAnimal); // Ini akan mencetak "Blue-Ringed Octopus"

// 4. Arrow Function Exercise
// Mendefinisikan fungsi panah sayHello yang menerima satu argumen (nama)
const sayHello = (name) => {
    return `Hello ${name}!`; // Mengembalikan string sapaan
};

// Menguji fungsi sayHello dengan beberapa nama
console.log(sayHello("Saki")); 
console.log(sayHello("Tama")); 

