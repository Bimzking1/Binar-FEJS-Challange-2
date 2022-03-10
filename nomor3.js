/*

// Soal 3

Buatlah sebuah function yang berfungsi untuk melakukan pengecekan:
Apakah alamat email yang diberikan sebagai parameter adalah alamat email yang formatnya benar atau tidak.

Jika parameter yang diberikan adalah alamat email yang benar, maka function ini harus return VALID.
Namun apabila alamat email yang diberikan tidak benar formatnya, maka function harus return INVALID

Function ini akan menerima satu parameter, yaitu:

1. email ⇒ email yang akan dicek oleh function
Kriteria function yang harus kamu buat:
• function ini harus return data dengan tipe string
• function ini harus return data dengan tipe string
• function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

*/

// Code

// Hint: Pakai REGEX

// Pseudocode:
    // 1. Buat sebuah function dengan satu parameter yang memiliki return value.
    // 2. Return function tersebut menggunakan fungsi regular expression test() yang digunakan untuk mengecek kecocokan string.
    // 3. Fungsi test() tersebut menggunakan aturan email regex. Syntax email regex dicari di internet. (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).
    // 4. Jika fungsi test() mereturn nilai TRUE, maka function checkEmail mereturn 'VALID'. Jika tidak, return 'INVALID'.

    function checkEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == true ? ('VALID') : ('INVALID');
    }
    
    console.log(checkEmail('apranata@binar.co.id'));    // Output => "VALID"
    console.log(checkEmail('apranata@binar.com'));      // Output => "VALID"
    console.log(checkEmail('apranata@binar'));          // Output => "INVALID"
    console.log(checkEmail('apranata'));                // Error: Jelaskan mengapa?
    console.log(checkEmail(checkEmail(3322)));          // Error: Jelaskan mengapa?
    console.log(checkEmail());                          // Error: Jelaskan mengapa?
    
    // PENJELASAN
    
    // Ketiga input terakhir mereturn hasil false. Tetapi saya kondisionalkan sebagai return nilai INVALID.
    // Karena syntax email regex mengharuskan email memiliki format 'string' + '@' + 'string' + '.string'
    // Dari 6 console.log, hanya 2 email yang sesuai dengan format.
    
    // Percobaan
    // console.log(checkEmail('a@a.c'));    // Output akan bernilai "VALID"