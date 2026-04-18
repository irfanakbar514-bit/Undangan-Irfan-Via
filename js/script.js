// 1. FITUR NAMA TAMU (CEPAT & ANTI GAGAL)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
if (namaTamu) {
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
        if (audio) audio.play().catch(() => console.log("Musik butuh klik"));
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

// 4. FUNGSI SALIN REKENING (FIXED)
function copyAccount() {
    const rekText = document.getElementById('rekBCA').innerText;
    const btn = document.getElementById('btnCopy');
    
    // Salin ke Clipboard
    navigator.clipboard.writeText(rekText).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✅ BERHASIL DISALIN";
        btn.style.backgroundColor = "#ffffff";
        btn.style.color = "#000000";
        
        // Kembalikan tombol ke semula setelah 2 detik
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = ""; 
            btn.style.color = "";
        }, 2000);
    }).catch(err => {
        // Fallback jika browser tidak support navigator.clipboard
        alert("Nomor Rekening: " + rekText);
    });
}

// 5. FITUR COUNTDOWN (DENGAN BENTUK KOTAK ASLI)
const weddingDate = new Date(2026, 11, 31, 9, 0, 0).getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `
            <div class="timer-box"><span>${days}</span><p>Hari</p></div>
            <div class="timer-box"><span>${hours}</span><p>Jam</p></div>
            <div class="timer-box"><span>${minutes}</span><p>Menit</p></div>
            <div class="timer-box"><span>${seconds}</span><p>Detik</p></div>
        `;
    }

    if (distance < 0) {
        clearInterval(countdown);
        if (timerElement) {
            timerElement.innerHTML = "<h3>Acara Sedang Berlangsung</h3>";
        }
    }
}, 1000);
