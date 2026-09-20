const formKesehatan = document.getElementById("formKesehatan");

if (formKesehatan) {
    formKesehatan.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const tanggalLahir = document.getElementById("tanggalLahir").value;
        const merokok = document.getElementById("merokok").value;
        const hipertensi = document.getElementById("hipertensi").value;
        const diabetes = document.getElementById("diabetes").value;

        // Menghitung umur
        const lahir = new Date(tanggalLahir);
        const sekarang = new Date();

        let umur = sekarang.getFullYear() - lahir.getFullYear();

        const bulan = sekarang.getMonth() - lahir.getMonth();

        if (
            bulan < 0 ||
            (bulan === 0 && sekarang.getDate() < lahir.getDate())
        ) {
            umur--;
        }

        // Nilai dasar premi
        const P = 2000000;

        // Faktor umur
        let m;

        if (umur <= 20) {
            m = 0.1;
        } else if (umur <= 35) {
            m = 0.2;
        } else if (umur <= 50) {
            m = 0.25;
        } else {
            m = 0.4;
        }

        // Faktor risiko
        const k1 = merokok === "ya" ? 1 : 0;
        const k2 = hipertensi === "ya" ? 1 : 0;
        const k3 = diabetes === "ya" ? 1 : 0;

        // Rumus premi tahunan
        const premi =
            P +
            (m * P) +
            (k1 * 0.5 * P) +
            (k2 * 0.4 * P) +
            (k3 * 0.5 * P);

        const hasil = document.getElementById("hasilPremi");

        hasil.innerHTML = `
            <div class="hasil-premi">
                <h3>Hasil Perhitungan Premi</h3>
                <p>Nama: <strong>${nama}</strong></p>
                <p>Usia: <strong>${umur} tahun</strong></p>
                <p>Premi Tahunan:</p>
                <h2>Rp ${premi.toLocaleString("id-ID")}</h2>

                <a href="checkout.html" class="beli-btn">
                    Lanjut ke Checkout
                </a>
            </div>
        `;
    });
}
function bayar() {
    const metode = document.getElementById("metodePembayaran").value;

    if (metode === "") {
        alert("Silakan pilih metode pembayaran terlebih dahulu.");
        return;
    }

    localStorage.setItem("metodePembayaran", metode);
    localStorage.setItem("tanggalPembelian", new Date().toLocaleDateString("id-ID"));

    alert("Pembayaran berhasil!");

    window.location.href = "riwayat.html";
}

    alert("Pembayaran berhasil!");

    window.location.href = "riwayat.html";
}
const formMobil = document.getElementById("formMobil");

if (formMobil) {
    formMobil.addEventListener("submit", function(event) {
        event.preventDefault();

        const tahunMobil = parseInt(document.getElementById("tahunMobil").value);
        const hargaMobil = parseInt(document.getElementById("hargaMobil").value);

        const tahunSekarang = new Date().getFullYear();
        const umurMobil = tahunSekarang - tahunMobil;

        let persentase;

        if (umurMobil <= 3) {
            persentase = 0.025;
        } else if (umurMobil <= 5 && hargaMobil < 200000000) {
            persentase = 0.04;
        } else if (umurMobil <= 5 && hargaMobil > 200000000) {
            persentase = 0.03;
        } else if (umurMobil > 5) {
            persentase = 0.05;
        }

        const premi = hargaMobil * persentase;

        const hasil = document.getElementById("hasilPremiMobil");

        hasil.innerHTML = `
            <div class="hasil-premi">
                <h3>Hasil Perhitungan Premi</h3>
                <p>Usia Kendaraan: <strong>${umurMobil} tahun</strong></p>
                <p>Harga Kendaraan: <strong>Rp ${hargaMobil.toLocaleString("id-ID")}</strong></p>
                <p>Premi Tahunan:</p>
                <h2>Rp ${premi.toLocaleString("id-ID")}</h2>

                <a href="checkout.html" class="beli-btn">
                    Lanjut ke Checkout
                </a>
            </div>
        `;
    });
}
const formJiwa = document.getElementById("formJiwa");

if (formJiwa) {
    formJiwa.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("namaJiwa").value;
        const tanggalLahir = document.getElementById("tanggalLahirJiwa").value;
        const pertanggungan = parseInt(
            document.getElementById("pertanggungan").value
        );

        const lahir = new Date(tanggalLahir);
        const sekarang = new Date();

        let umur = sekarang.getFullYear() - lahir.getFullYear();

        const bulan = sekarang.getMonth() - lahir.getMonth();

        if (
            bulan < 0 ||
            (bulan === 0 && sekarang.getDate() < lahir.getDate())
        ) {
            umur--;
        }

        let m;

        if (umur <= 30) {
            m = 0.002;
        } else if (umur <= 50) {
            m = 0.004;
        } else {
            m = 0.01;
        }

        const premiBulanan = m * pertanggungan;

        localStorage.setItem("produk", "InsureCare Health Protection");
        localStorage.setItem(
         "premi",
          "Rp " + premi.toLocaleString("id-ID") + " / Tahun"
        );

        const hasil = document.getElementById("hasilPremiJiwa");

        hasil.innerHTML = `
            <div class="hasil-premi">
                <h3>Hasil Perhitungan Premi</h3>

                <p>Nama:
                    <strong>${nama}</strong>
                </p>

                <p>Usia:
                    <strong>${umur} tahun</strong>
                </p>

                <p>Jumlah Pertanggungan:
                    <strong>Rp ${pertanggungan.toLocaleString("id-ID")}</strong>
                </p>

                <p>Premi Bulanan:</p>

                <h2>
                    Rp ${premiBulanan.toLocaleString("id-ID")}
                </h2>

                <a href="checkout.html" class="beli-btn">
                    Lanjut ke Checkout
                </a>
            </div>
        `;
    });
}
const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("emailLogin").value;
        const password = document.getElementById("passwordLogin").value;
        const pesan = document.getElementById("pesanLogin");

        if (email === "user@gmail.com" && password === "12345678") {
            pesan.innerHTML = `
                <p style="color: green; margin-top: 15px;">
                    Login berhasil! Selamat datang di InsureCare.
                </p>
            `;
        } else {
            pesan.innerHTML = `
                <p style="color: red; margin-top: 15px;">
                    Email atau password salah.
                </p>
            `;
        }
    });
}
const formSignup = document.getElementById("formSignup");

if (formSignup) {
    formSignup.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("emailSignup").value;
        const password = document.getElementById("passwordSignup").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const nama = document.getElementById("namaSignup").value;
        const telepon = document.getElementById("teleponSignup").value;

        const pesan = document.getElementById("pesanSignup");

        // Validasi password
        if (password.length < 8) {
            pesan.innerHTML = `
                <p style="color: red;">
                    Password minimal 8 karakter.
                </p>
            `;
            return;
        }

        // Validasi konfirmasi password
        if (password !== confirmPassword) {
            pesan.innerHTML = `
                <p style="color: red;">
                    Konfirmasi password tidak sama.
                </p>
            `;
            return;
        }

        // Validasi nama: 3-32 karakter dan tidak boleh ada angka
        if (nama.length < 3 || nama.length > 32 || /\d/.test(nama)) {
            pesan.innerHTML = `
                <p style="color: red;">
                    Nama harus 3-32 karakter dan tidak boleh mengandung angka.
                </p>
            `;
            return;
        }

        // Validasi nomor telepon
        if (!/^08\d{8,14}$/.test(telepon)) {
            pesan.innerHTML = `
                <p style="color: red;">
                    Nomor telepon harus diawali 08 dan terdiri dari 10-16 digit.
                </p>
            `;
            return;
        }

        // Jika semua valid
        pesan.innerHTML = `
            <p style="color: green;">
                Pendaftaran berhasil!
            </p>
            <p>
                Silakan <a href="login.html">Login</a> menggunakan akun Anda.
            </p>
        `;
    });
}
const namaProduk = document.getElementById("namaProduk");
const jumlahPremi = document.getElementById("jumlahPremi");

if (namaProduk && jumlahPremi) {
    const produk = localStorage.getItem("produk");
    const premi = localStorage.getItem("premi");

    namaProduk.textContent = produk || "Produk Asuransi";
    jumlahPremi.textContent = premi || "-";
}

const riwayatProduk = document.getElementById("riwayatProduk");
const riwayatJenis = document.getElementById("riwayatJenis");
const riwayatTanggal = document.getElementById("riwayatTanggal");
const riwayatPremi = document.getElementById("riwayatPremi");

if (riwayatProduk && riwayatJenis && riwayatTanggal && riwayatPremi) {
    const produk = localStorage.getItem("produk") || "-";
    const premi = localStorage.getItem("premi") || "-";
    const tanggal = localStorage.getItem("tanggalPembelian") || "-";

    let jenis = "-";

    if (produk.includes("Health")) {
        jenis = "Asuransi Kesehatan";
    } else if (produk.includes("Car")) {
        jenis = "Asuransi Mobil";
    } else if (produk.includes("Life")) {
        jenis = "Asuransi Jiwa";
    }

    riwayatProduk.textContent = produk;
    riwayatJenis.textContent = jenis;
    riwayatTanggal.textContent = tanggal;
    riwayatPremi.textContent = premi;
}
