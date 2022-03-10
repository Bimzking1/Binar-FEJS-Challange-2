/*

// Soal 6

Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array.
Misal diberikan sebuah array yang terdiri dari beberapa angka [2,3,5,6,6,4].

Berdasarkan data dari array tersebut dapat kita simpulkan bahwasanya angka terbesar
dari array tersebut adalah 6, angka kedua terbesar adalah 5, dan angka ketiga terbesar adalah 4. 

Maka dari itu function yang akan kamu buat ini akan me-return angka kedua terbesar 
pada array yang telah diberikan, yaitu angka 5.

Function ini akan menerima satu parameter, yaitu:

1. dataNumbers ⇒ Array yang berisi beberapa angka

Kriteria function:
1. Beri nama function tersebut getAngkaTerbesarKedua
2. function ini harus return data dengan tipe number
3. function ini harus return data angka terbesar kedua dari angka-angka yang diberikan didalam array
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

*/

// Code

// Pseudocode:
    // 1. Buat sebuah function dengan satu parameter yang memiliki return value.
    // 2. Urutkan parameter dengan function sort() secara ascending khusus tipe data number dengan format parameter.sort((a,b)=>a-b). Kemudian keluarkan nilai terbesar (index paling belakang) dengan pop().
    // 3. Lakukan kembali langkah nomor 2 dan return hasil sorting.

    const dataAngka = [9,4,7,7,4,3,2,2,8];

    function getAngkaTerbesarKedua(dataNumbers){
        dataNumbers.sort((a,b)=>a-b).pop();
        return dataNumbers.sort((a,b)=>a-b).pop();
    }
    
    console.log(getAngkaTerbesarKedua(dataAngka)); // OUTPUT: 8
    
    // console.log(getAngkaTerbesarKedua(0));
    // OUTPUT: Error. Karena fungsi yang saya buat hanya menerima tipe data array
    
    // console.log(getAngkaTerbesarKedua());
    // OUTPUT: Error. Karena fungsi yang saya buat hanya menerima tipe data array