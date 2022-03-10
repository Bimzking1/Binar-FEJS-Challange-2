/*

// Soal 7

Hari ini Toko Pak Aldi berhasil menjual banyak sepatu. Pada gambar disamping terdapat data
sepatu-sepatu yang terjual dari toko Pak Aldi dalam bentuk array of object.

Tugas kamu adalah membuat sebuah function yang berfungsi membantu Pak Aldi untuk
menghitung total seluruh sepatu yang terjual.

Function ini akan menerima satu parameter, yaitu:

1. dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang
memiliki informasi penjualan product.

Kriteria function:
1. Beri nama function tersebut getTotalPenjualan
2. function ini harus return data dengan tipe number
3. function ini harus return total penjumlahan dari properti totalTerjual pada data yang diberikan
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

*/

// Code

const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
]

// Pseudocode
    // 1. Buat function dengan memanfaatkan reduce(). Function memiliki 1 parameter
    // 2. Deklarasi constant 'totalSepatuTerjual' sebagai return value akhir.
    // 3. Lakukan fungsi reduce dengan parameter resultEstafet dan dataJumlah pada parameter 'dataPenjualan'.
    // 4. Variabel dataJumlah digunakan untuk menunjuk array dataPenjualanPakAldi.
    // 5. Return value adalah totalTemp = totalTemp + dataJumlah.

function hitungTotalPenjualan(dataPenjualan) {
    const totalSepatuTerjual = dataPenjualan.reduce((resultEstafet, dataJumlah) => {
        resultEstafet.totalTemp += dataJumlah.totalTerjual;
        return resultEstafet;
    }, { 
        totalTemp: 0
    });
    return totalSepatuTerjual;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));    // Output: { totalTemp: 307 }

// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90