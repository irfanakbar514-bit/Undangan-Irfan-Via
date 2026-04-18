AOS.init({ duration: 1500, once: true });

function bukaUndangan() {
    document.getElementById("song").play();
    document.getElementById("over-lay").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("over-lay").style.display = "none";
        document.body.classList.remove("no-scroll");
        document.getElementById("main-content").style.display = "block";
        AOS.refresh();
    }, 1000);
}

function salinNorek(nomor) {
    navigator.clipboard.writeText(nomor).then(() => { alert("Nomor rekening tersalin!"); });
}

// Countdown Target
const target = new Date("Aug 6, 2026 09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="time-box"><b>${d}</b><small>HARI</small></div>
        <div class="time-box"><b>${h}</b><small>JAM</small></div>
        <div class="time-box"><b>${m}</b><small>MENIT</small></div>
        <div class="time-box" style="background:#d4af37; color:#2c0404; border-color:#2c0404"><b>${s}</b><small>DETIK</small></div>
    `;
}, 1000);


