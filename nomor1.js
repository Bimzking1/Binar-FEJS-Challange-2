/*

// Soal 1

Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.

Function ini akan menerima 3 parameter, yaitu :

1. selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
2. changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya
3. text => Sebuah kalimat

*/

// Code

// Pseudocode:
    // 1. Buat sebuah function dengan tiga parameter yang memiliki return value
    // 2. Return function tersebut menggunakan function replace() yang mengambil data string dari variabel 'text'.
    // 3. Syntax function replace adalah: replace('kata terganti', 'kata pengganti')

    const kalimat1 = 'Andini sangat mencintai kamu selamanya';
    const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
    
    function changeWord ( selectedText, changerText, text ){
        return (text.replace(selectedText, changerText));
    }
    
    console.log(changeWord('mencintai', 'membenci', kalimat1));
    // Output: Andini sangat membenci kamu selamanya
    
    // console.log(changeWord('bromo', 'semeru', kalimat2));
    // Output: Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu