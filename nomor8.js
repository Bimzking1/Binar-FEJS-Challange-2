/*

// Soal 8

Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak sekali buku-buku novel. 

Gambar disamping adalah data penjualan buku-buku novel yang dijual di Toko buku milik
Ibu Daniela, dalam format array of object.

Tugas kamu adalah membuat sebuah function yang berfungsi membantu Ibu Daniela untuk mendapatkan
informasi berupa Total Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku Terlaris dan Persentase

Keuntungan dari data penjualan yang telah disediakan diatas. 

Function yang kamu buat ini akan me-return sebuah data yang berbentuk sebuah object yang dari beberapa properti. 

Function ini akan menerima satu parameter, yaitu:

1. dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.

Kriteria function:
1. Beri nama function tersebut getInfoPenjualan
2. function ini harus return data dengan tipe object
3. Data object harus berisi properti seperti yang dijelaskan sebelumnya yaitu totalKeuntungan, totalModal, produkBukuTerlaris, persentaseKeuntungan, dan penulisTerlaris
4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

Pada property totalKeuntungan dan totalModal, Nilai yang dihasilkan
harus dalam format Rupiah. Contoh: 'Rp. 14.650.000'

{
  totalKeuntungan: 'Rp. 10.000.000',
  totalModal: 'Rp. 6.000.000',
  persentaseKeuntungan: '60%',
  produkBukuTerlaris: 'BUKU TERLARIS BERDASARKAN DATA DIATAS',
  penulisTerlaris: 'PENULIS TERLARIS BERDASARKAN DATA DIATAS',
}

*/

// Code

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  function getInfoPenjualan(dataPenjualanNovel) {
    let mostBook = 0;
    let temp1 = 0;
    let temp2 = 0;
    const dataDetailPejualan = dataPenjualanNovel.reduce((result, dataPenjualan) => {
  
        // Perhitungan totalKeuntungan
        result.totalKeuntungan += dataPenjualan.totalTerjual * dataPenjualan.hargaJual;
  
        // Perhitungan totalModal
        result.totalModal += ((dataPenjualan.sisaStok + dataPenjualan.totalTerjual) * dataPenjualan.hargaBeli);
  
        // Perhitungan persentaseKeuntungan
        result.persentaseKeuntungan = (result.totalKeuntungan - result.totalModal) / (result.totalModal / 100);
  
        // Perhitungan produkBukuTerlaris
        if (mostBook < dataPenjualan.totalTerjual){
          mostBook = dataPenjualan.totalTerjual;
          result.produkBukuTerlaris = dataPenjualan.namaProduk;
        }
        
        // Perhitungan penulisTerlaris
        temp1 = dataPenjualan.penulis;
        if (temp1 == dataPenjualan.penulis){
          temp2 += dataPenjualan.totalTerjual;
          result.penulisTerlaris = temp1;
        }
  
        return result;
    },{
      totalKeuntungan: 0,       // Keuntungan kotor
      totalModal: 0,            // Modal pembelian buku
      persentaseKeuntungan: 0,  // Persentase keuntungan akhir (PROFIT)
      produkBukuTerlaris: 0,    // Produk Buku dengan penjualan terbanyak
      penulisTerlaris: 0,       // Penulis dengan penjualan terbanyak
    });
  
    dataDetailPejualan.totalKeuntungan = dataDetailPejualan.totalKeuntungan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    dataDetailPejualan.totalModal = dataDetailPejualan.totalModal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    dataDetailPejualan.persentaseKeuntungan = dataDetailPejualan.persentaseKeuntungan.toFixed(1).toString();
    dataDetailPejualan.persentaseKeuntungan += ('%');
    dataDetailPejualan.produkBukuTerlaris = dataDetailPejualan.produkBukuTerlaris.toUpperCase();
    dataDetailPejualan.penulisTerlaris = dataDetailPejualan.penulisTerlaris.toUpperCase();

    return dataDetailPejualan;
  }
  
  console.log(getInfoPenjualan(dataPenjualanNovel));