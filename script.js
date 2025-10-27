///Tunggu sampai halaman selesai dimuat
document.getElementById("formbunga").addEventListener("submit", function(event) {
	event.preventDefault(); //Mencegah reload halaman

//ambil data dari form
let jb = document.getElementById("jb").value.trim();
let nama = document.getElementById("nama").value.trim();
let harga = document.getElementById("harga").value.trim();

// === VALIDASI ===
if (jb === "" || nama === "" || harga === "") {
	alert("Harap isi semua data (jenis_bunga, nama_bunga, dan harga)!");
	return;
}

//===TAMPILKAN DATA===
alert(
	"Data Bunga Berhasil Dikirim:\n\n" +
	"Jenis Bunga: " + jb + "\n" +
	"Nama Bunga: " + nama + "\n" +
	"Harga: " + harga
	);

  // Opsional: reset form setelah dikirim
  document.getElementById("formbunga").reset();
});
