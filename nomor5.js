/*

// Soal 5

Buatlah sebuah function yang berfungsi untuk membagikan sebuah nama menjadi Nama Depan, Nama Tengah, Nama Belakang.

Function ini nantinya akan menerima satu parameter yang berisi nama lengkap seseorang. 
Apabila nama lengkap dari seseorang tersebut lebih dari 3 suku kata, maka function tersebut 
harus menghasilkan sebuah error. Tapi apabila parameter yang diberikan valid (tidak lebih dari 3 suku kata), 
maka function ini akan menghasilkan sebuah object dengan properti firstName, middleName, lastName.

Function ini akan menerima satu parameter, yaitu:

1. personName ⇒ string yang akan dicheck oleh function

Kriteria function:
1. Beri nama function tersebut getSplitName
2. function ini harus return data dengan tipe object
3. function ini harus return data dengan tipe object
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

*/

// Code

// Pseudocode:
    // 1. Buat sebuah function dengan satu parameter.
    // 2. Deklarasi variabel errorMessage untuk warning error.
    // 3. Deklarasi constant object person yang berisi firstName, middleName, dan lastName.
    // 4. Deklarasi variabel names untuk menghitung jumlah kata dalam nama.
    // 5. Buat kondisional if-else:
    //      a. Jika jumlah kata sama dengan 3.
    //      b. Jika jumlah kata sama dengan 2.
    //      c. Jika jumlah kata sama dengan 1.
    //      d. Jika jumlah kata tidak sama dengan kondisi a, b, dan c.
    // 6. Return object person.

    function getSplitName (personName) {
        let errorMessage = "Error: This function is only for 3 characters name";
        const person = {
            firstName: null, middleName: null, lastName: null
        };
        
        let names = personName.split(' ');
        if (names.length == 3){
            [person.firstName, person.middleName, person.lastName] = personName.split(' ');
        } else if (names.length == 2){
            [person.firstName, person.lastName] = personName.split(' ');
        } else if (names.length == 1){
            [person.firstName] = personName.split(' ');
        } else {
            return errorMessage;
        }
        return person;
    }
    
    console.log(getSplitName("Aldi Daniela Pranata"));
    // OUTPUT: { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }
    
    console.log(getSplitName("Dwi Kuncoro"));
    // OUTPUT: { firstName: 'Dwi', middleName: null , lastName: 'Kuncoro' }
    
    console.log(getSplitName("Aurora"));
    // OUTPUT: { firstName: 'Aurora', middleName: null , lastName: null }
    
    console.log(getSplitName("Aurora Aureliya Sukma Darma"));
    // OUTPUT: Error: This function is only for 3 characters name
    
    // console.log(getSplitName(0));
    // OUTPUT: Error. 
    //      Karena parameter number (0) tidak bisa diterima oleh fungsi string split(). 
    //      Split() hanya menerima parameter dengan tipe data string.