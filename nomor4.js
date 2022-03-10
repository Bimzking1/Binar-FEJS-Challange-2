/*

// Soal 4

Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah password
yang diberikan sebagai parameter memenuhi kreteria yang telah ditentukan atau tidak.

Berikut kriteria password yang valid, apabila password tidak memenuhi kriteria dibawah ini, 
maka dinyatakan tidak valid:

• Password harus memiliki panjang minimal 8 huruf
• Password harus memiliki minimal 1 huruf besar
• Password harus memiliki minimal 1 huruf kecil
• Password harus memiliki minimal 1 angka

Function ini akan menerima satu parameter, yaitu:

givenPassword ⇒ Password berupa string dan akan dicek oleh function tersebut.

Kriteria function:
1. Beri nama function tersebut isValidPassword
2. function ini harus return data dengan tipe Boolean
3. function ini harus retrun data berupa true ATAU false
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima

*/

// Code

// Pseudocode:
    // 1. Buat sebuah function dengan satu parameter yang memiliki return value.
    // 2. Return function tersebut menggunakan fungsi regular expression test() yang digunakan untuk mengecek kecocokan string.
    // 3. Fungsi test() tersebut menggunakan aturan regular expression.
    // 4. Jika fungsi test() benar, akan mereturn nilai "true". Jika tidak, fungsi mereturn nilai "false".

    function isValidPassword (givenPassword) {
        return /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(givenPassword) == true;
    }
    
    // Penjelasan rules Regex: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
    //      /^......../  = Syntax untuk mengawali dan mengakhiri code regex
    //      (?=.{8,})    = Apakah parameter memiliki 8 karakter atau lebih?
    //      (?=.*[a-z])  = Apakah parameter memiliki paling tidak SATU karakter alfabet lowercase dari a sampai z ?
    //      (?=.*[A-Z])  = Apakah parameter memiliki paling tidak SATU karakter alfabet uppercase dari A sampai Z ?
    //      (?=.*[0-9])  = Apakah parameter memiliki paling tidak SATU karakter angka dari 0 sampai 9 ?
    
    console.log(isValidPassword('Meong2021')); // Output: "true"
    // Expected Output => TRUE (Karena Meong2021 memenuhi 8 huruf, ada karakter uppercase, lowercase, dan angka)
    
    console.log(isValidPassword('meong2021')); // Output: "false"
    // Expected Output => FALSE (Karena tidak ada karakter alfabet uppercase)
    
    console.log(isValidPassword('@eong')); // Output: "false"
    // Expected Output => FALSE (Karena hanya 5 huruf dan tidak ada karakter angka)
    
    console.log(isValidPassword('Meong2')); // Output: "false"
    // Expected Output => FALSE (Karena hanya 6 huruf)
    
    console.log(isValidPassword(0)); // Output: "false"
    // Expected Output => Error: Teman-teman jelaskan sendiri
    // false karena parameter tidak memenuhi satupun aturan dari code custom regex
    
    console.log(isValidPassword()); // Output: "false"
    // Expected Output => Error: Teman-teman jelaskan sendiri
    // false karena parameter tidak memenuhi satupun aturan dari code custom regex