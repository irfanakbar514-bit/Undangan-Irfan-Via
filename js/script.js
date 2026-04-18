// Ambil nama dari link (?to=Nama)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');

// Ganti tulisan "Tamu Undangan" kalau ada nama di link
document.addEventListener('DOMContentLoaded', () => {
    const guestElement = document.getElementById('guest-name');
    if (namaTamu && guestElement) {
        guestElement.innerText = namaTamu;
    }
});

// Inisialisasi Animasi AOS
AOS.init({ duration: 1000, once: true });

const audio = document.getElementById('bgMusic');
const musicBtn = document.getElementById('music-btn');
const cover = document.getElementById('cover');

// Fungsi Utama Buka Undangan
function openInvitation() {
    cover.classList.add('open'); 
    document.body.style.overflow = 'auto'; // Aktifkan scroll
    
    // Putar Musik
    audio.play().catch(() => console.log("User interaction required"));
    musicBtn.style.display = 'block';
}

// Fungsi Play/Pause Musik
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = "🎵";
    } else {
        audio.pause();
        musicBtn.innerHTML = "🔇";
    }
}

// Fungsi Salin Rekening BCA
function copyAccount() {
    const rekText = document.getElementById('rekBCA').innerText;
    const btn = document.getElementById('btnCopy');
    
    navigator.clipboard.writeText(rekText).then(() => {
        btn.innerHTML = "✅ BERHASIL DISALIN";
        btn.style.background = "#fff";
        
        setTimeout(() => {
            btn.innerHTML = "SALIN REKENING";
            btn.style.background = "var(--gold)";
        }, 2000);
    });
}
// SETTING TANGGAL ACARA (Tahun, Bulan-1, Tanggal, Jam, Menit)
// Contoh: 31 Desember 2026 (Bulan Desember itu angka 11 di coding)
const weddingDate = new Date(2026, 11, 31, 09, 0, 0).getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Perhitungan waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan ke dalam elemen id="timer"
    document.getElementById("timer").innerHTML = `
        <div class="timer-box"><span>${days}</span><p>Hari</p></div>
        <div class="timer-box"><span>${hours}</span><p>Jam</p></div>
        <div class="timer-box"><span>${minutes}</span><p>Menit</p></div>
        <div class="timer-box"><span>${seconds}</span><p>Detik</p></div>
    `;

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "<h3>Acara Sedang Berlangsung</h3>";
    }
}, 1000);


