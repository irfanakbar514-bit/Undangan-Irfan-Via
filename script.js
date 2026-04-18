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


