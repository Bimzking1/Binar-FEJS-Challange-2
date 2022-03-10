/*

// Soal 2

Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil.

Function ini akan menerima satu parameter, yaitu :

1. givenNumber ⇒ angka yang akan dicheck oleh function
Kriteria function yang harus kamu buat:
• Beri nama function tersebut checkTypeNumber
• Menggunakan arrow function
• function ini harus return data dengan tipe string
• function ini harus return data berupa GENAP ATAU GANJIL
• function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

*/

// Code

// Pseudocode:
    // 1. Buat arrow function checkTypeNumber.
    // 2. Buat kondisional if-else dengan empat kondisi:
    //      a. Kondisi parameter sama dengan null.
    //      b. Kondisi parameter tidak sama dengan tipe data angka (number).
    //      c. Sisa bagi parameter sama dengan 0 jika dibagi 2.
    //      d. Sisa bagi parameter sama dengan 1 jika dibagi 2.

    let checkTypeNumber = givenNumber => {
        if (givenNumber == null ) {
            return ('Error: Bro where is the parameter?');
        } else if (typeof givenNumber != 'number' ) {
            return ('Error: Invalid data type');
        } else if (givenNumber % 2 == 0 ) {
            return ('GENAP');
        } else if (givenNumber % 2 == 1 ) {
            return ('GANJIL');
        }
    }
    
    // console.log(checkTypeNumber(10));   // Output: "GENAP";
    // console.log(checkTypeNumber(3));    // Output: "GANJIL"
    // console.log(checkTypeNumber('3'));  // Output: "Error: Invalid data type"
    // console.log(checkTypeNumber({}));   // Output: "Error: Invalid data type"
    // console.log(checkTypeNumber([]));   // Output: "Error: Invalid data type"
    // console.log(checkTypeNumber());     // Output: "Error: Bro where is the parameter?"