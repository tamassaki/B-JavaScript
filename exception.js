function bagiDuaAngka(a, b) {
    try {
        // Memeriksa apakah input adalah angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka (number).");
        }

        // Memeriksa apakah pembagi adalah nol
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        // Melakukan pembagian
        const hasil = a / b;
        return hasil;

    } catch (error) {
        return `Kesalahan: ${error.message}`;
    }
}

function konversiKeAngka(input) {
    try {
        // Mencoba mengonversi input ke angka
        let angka = Number(input);
        
        // Memeriksa apakah hasil konversi adalah NaN (Not-a-Number)
        if (isNaN(angka)) {
            throw new Error("Input tidak dapat dikonversi menjadi angka.");
        }

        console.log(`Hasil konversi: ${angka}`);
        return angka;

    } catch (error) {
        // Menangkap dan menampilkan pesan kesalahan
        console.error("Terjadi kesalahan:", error.message);
    }
}

// Menguji fungsi dengan berbagai input
konversiKeAngka("123");   // Output: Hasil konversi: 123
konversiKeAngka("456.78"); // Output: Hasil konversi: 456.78
konversiKeAngka("");       // Output: Terjadi kesalahan: Input tidak dapat dikonversi menjadi angka.