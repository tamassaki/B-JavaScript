// 1. Latihan For Loop Pertama
// Menggunakan loop for untuk mencetak lirik "Da ba dee da ba daa" sebanyak 6 kali
console.log("=== Latihan For Loop Pertama ===");
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

// 2. Latihan For Loop Menghitung Mundur
// Menggunakan loop for untuk menghitung mundur dari 25 hingga 0 dengan interval 5
console.log("\n=== Latihan For Loop Menghitung Mundur ===");
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// 3. Latihan Iterasi Array
// Array yang berisi nama-nama
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// Menggunakan loop for untuk iterasi melalui array people
console.log("\n=== Latihan Iterasi Array ===");
for (let i = 0; i < people.length; i++) {
    // Mencetak nama dengan huruf kapital
    console.log(people[i].toUpperCase());
}