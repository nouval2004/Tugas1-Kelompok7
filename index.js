// Kalkulator sederhana
// Import fungsi-fungsi dari solution.js
const {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan
} = require('../solution');

// Library untuk membaca input dari terminal
const readline = require('readline');

// Membuat interface untuk membaca input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menampilkan menu
function tampilkanMenu() {
    console.log(`
Pilih operasi yang ingin dilakukan:
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
5. Pangkat
6. Faktorial
7. Cek Bilangan Prima
8. Modulus
9. Nilai Absolut
10. Maksimum
11. Minimum
12. Pembulatan
13. Keluar
`);
}

// Fungsi utama untuk menjalankan kalkulator
function kalkulator() {
    tampilkanMenu();

    rl.question('Masukkan pilihan Anda (1-13): ', (pilihan) => {
        if (pilihan === '13') {
            console.log('Terima kasih telah menggunakan kalkulator!');
            rl.close();
            return;
        }

        // Handle operasi yang membutuhkan dua angka
        if (['1', '2', '3', '4', '5', '8', '10', '11'].includes(pilihan)) {
            rl.question('Masukkan angka pertama: ', (a) => {
                rl.question('Masukkan angka kedua: ', (b) => {
                    a = parseFloat(a);
                    b = parseFloat(b);

                    let hasil;
                    switch (pilihan) {
                        case '1':
                            hasil = tambah(a, b);
                            break;
                        case '2':
                            hasil = kurang(a, b);
                            break;
                        case '3':
                            hasil = kali(a, b);
                            break;
                        case '4':
                            hasil = bagi(a, b);
                            break;
                        case '5':
                            hasil = pangkat(a, b);
                            break;
                        case '8':
                            hasil = modulus(a, b);
                            break;
                        case '10':
                            hasil = maksimum(a, b);
                            break;
                        case '11':
                            hasil = minimum(a, b);
                            break;
                        default:
                            hasil = 'Pilihan tidak valid';
                    }

                    console.log(`Hasil: ${hasil}`);
                    kalkulator(); // Ulangi menu
                });
            });
        }

        // Handle operasi yang membutuhkan satu angka
        else if (['6', '7', '9', '12'].includes(pilihan)) {
            rl.question('Masukkan angka: ', (a) => {
                a = parseFloat(a);

                let hasil;
                switch (pilihan) {
                    case '6':
                        hasil = faktorial(a);
                        break;
                    case '7':
                        hasil = isPrima(a) ? 'Prima' : 'Bukan Prima';
                        break;
                    case '9':
                        hasil = absolut(a);
                        break;
                    case '12':
                        hasil = bulatkan(a);
                        break;
                    default:
                        hasil = 'Pilihan tidak valid';
                }

                console.log(`Hasil: ${hasil}`);
                kalkulator(); // Ulangi menu
            });
        }

        // Handle pilihan tidak valid
        else {
            console.log('Pilihan tidak valid. Silakan coba lagi.');
            kalkulator(); // Ulangi menu
        }
    });
}

// Jalankan kalkulator
kalkulator();