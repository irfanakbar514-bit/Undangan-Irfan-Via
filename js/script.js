// 1. LANGSUNG GANTI NAMA (Tanpa Tunggu Apapun)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
if (namaTamu) {
    // Cari id guest-name secara berkala sampai ketemu
    const checkExist = setInterval(function() {
        const guestElement = document.getElementById('guest-name');
        if (guestElement) {
            guestElement.innerText = namaTamu;
            clearInterval(checkExist);
        }
    }, 100); 
}

// 2. INISIALISASI AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
});

// 3. FUNGSI BUKA UNDANGAN & MUSIK
const audio = document.getElementById('bgMusic');
const cover = document.getElementById('cover');

function openInvitation() {
    if (cover) {
        cover.style.transform = 'translateY(-100%)';
        cover.style.transition = 'transform 1s ease-in-out';
        document.body.style.overflow = 'auto';
        if (audio) audio.play();
        setTimeout(() => { cover.style.display = 'none'; }, 1000);
    }
}

function toggleMusic() {
    const btn = document.getElementById('music-btn');
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "🎵";
    } else {
        audio.pause();
        btn.innerHTML = "🔇";
    }
}

// 4. COUNTDOWN
const weddingDate = new Date(2026, 11, 31, 9, 0, 0).getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timer = document.getElementById("timer");
    if (timer) {
        timer.innerHTML = `<div class='timer-box'>${days}d ${hours}h ${minutes}m ${seconds}s</div>`;
    }
}, 1000);
