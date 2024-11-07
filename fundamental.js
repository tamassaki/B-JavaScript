// fundamental.js

// 1. Variabel
let name = "Tamassaki Khoiriyah"; // Menggunakan let untuk mendeklarasikan variabel
const age = 21; // Menggunakan const untuk mendeklarasikan variabel konstan
var isStudent = true; // Menggunakan var (lebih baik menggunakan let atau const)

// Menampilkan nilai variabel di konsol
console.log("Nama:", name);
console.log("Umur:", age);
console.log("Apakah Mahasiswa:", isStudent);

// 2. Tipe Data
let hobbies = ["memasak", "melukis", "berolaraga"]; // Array
console.log("Hobi:", hobbies.join(", ")); // Menampilkan array di konsol

let person = {
    firstName: "Tamassaki",
    lastName: "Khoiriyah",
    age: 21
}; // Object
console.log("Objek Person:", person);

// 3. Fungsi
function greet(userName) {
    return "Halo, " + userName + "! Selamat datang.";
}

// Memanggil fungsi dan menampilkan hasilnya
console.log(greet(name)); // Menampilkan pesan sapaan di konsol

// 4. Operator
let a = 10;
let b = 5;

console.log("Penjumlahan:", a + b); // Menampilkan hasil penjumlahan
console.log("Pengurangan:", a - b); // Menampilkan hasil pengurangan
console.log("Perkalian:", a * b); // Menampilkan hasil perkalian
console.log("Pembagian:", a / b); // Menampilkan hasil pembagian

// 5. Kondisional
if (age >= 18) {
    console.log(name + " adalah seorang dewasa.");
} else {
    console.log(name + " adalah seorang remaja.");
}

// 6. Looping
console.log("Daftar Hobi:");
for (let i = 0; i < hobbies.length; i++) {
    console.log("- " + hobbies[i]); // Menampilkan setiap hobi
}