let antri = ["ray", "fiki", "fadhilla", "farah"];


antri = [...antri, "nabila"]; // Tambah satu pembeli yaitu "nabila"
antri = [...antri, "maza", "elsi"]; // Tambah dua pembeli yaitu "maza" dan "elsi"
antri.pop(); // Antrian terakhir tidak jadi antri dan pulang ke rumah
antri = antri.slice(1); // Antrian pertama sudah mendapatkan belanjaannya
antri = antri.slice(1); // Antrian kedua juga sudah mendapatkan belanjaannya
antri = ["tomi", ...antri];  // Pembeli baru yang nyerobot antrian yaitu "tomi"

// Menampilkan hasil akhir antrian
console.log(antri);
