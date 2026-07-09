// ============================================================
// 🎵 TRICK AUTOPLAY: Musik otomatis jalan saat layar disentuh pertama kali
// ============================================================
const bgMusic = document.getElementById("bgMusic");

function mulaiMusikOtomatis() {
    if (bgMusic) {
        bgMusic.play().catch((error) => {
            console.log("Autoplay diblokir browser, menunggu sentuhan pengguna.");
        });
    }
    // Hapus event listener setelah musik berhasil jalan agar tidak bentrok
    document.removeEventListener("click", mulaiMusikOtomatis);
    document.removeEventListener("touchstart", mulaiMusikOtomatis);
}

// Deteksi ketukan (klik) atau sentuhan layar di HP
document.addEventListener("click", mulaiMusikOtomatis);
document.addEventListener("touchstart", mulaiMusikOtomatis);


// ============================================================
// KODE ASLI KAMU (DIBAWAH INI TETAP UTUH & TIDAK BERUBAH)
// ============================================================
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const finalBtn = document.getElementById("finalBtn");

letterBtn.onclick = (e) => {
    e.preventDefault();
    letter.classList.add("show");
    letter.innerHTML = `
    <h3 style="font-family:'Playfair Display', serif; font-size:18px; color:#ff69b4; margin-bottom:10px;">Happy 14th Birthday, Tata. 🌸</h3>
    <p>Hari ini bukan hanya tentang bertambahnya usia Tata... tetapi juga tentang bertambahnya cerita, pengalaman, dan harapan baru.. ^^ Semoga kamu dan keluarga selalu diberi kesehatan dan kebahagiaan bersama yaa.. serta dikelilingi oleh orang-orang yang sayang sama kamu.. ^^ Dan sebelumnya aku minta maaf cuma bisa kasih ucapan aja, hehe... Terus berkembang dan tetap tersenyum yaa... Semua impianmu pasti menjadi kenyataan, because you deserve to be happy. ^^ Enjoy your special day Tata..^^</p>
    `;
    letterBtn.style.display = "none";
    
    // Memunculkan slot gambar secara mulus
    const photoWrapper = document.getElementById("photoWrapper");
    photoWrapper.style.display = "flex";
    setTimeout(() => {
        const img = document.querySelector(".tata-photo");
        if(img) img.classList.add("show");
    }, 100);

    finalBtn.style.display = "inline-block";
};

// 🌙 7. Penutup yang Sinematik
finalBtn.onclick = (e) => {
    e.preventDefault();
    page2.style.display = "none";
    page3.style.display = "block";
    
    // Membuat layar meredup/menggelap dramatis
    overlay.classList.add("darken");

    page3.innerHTML = `
        <div class="cinematic-text">
            "Some moments are short...<br>
            but memories can last forever."
        </div>
        <div class="cinematic-title">Happy Birthday, Tata ❤️</div>
    `;
};

// --- LOGIKA BACKGROUND & LINGKUNGAN ---

// 🌸 3. Efek Kelopak Sakura Gugur
setInterval(createSakura, 500);
function createSakura() {
    const sakura = document.createElement("div");
    sakura.className = "sakura";
    sakura.style.left = Math.random() * 100 + "vw";
    
    const size = Math.random() * 7 + 8 + "px";
    sakura.style.width = size;
    sakura.style.height = size;
    
    sakura.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(sakura);
    setTimeout(() => sakura.remove(), 7000);
}

// 🌌 2. Efek Shooting Star (Bintang Jatuh)
setInterval(createShootingStar, 4000);
function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.left = Math.random() * 60 + "vw";
    star.style.top = Math.random() * 20 + "vh";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1500);
}

// 💖 4. Heart Cursor Trail (Jejak Sentuhan Layar)
function spawnHeartTrail(x, y) {
    const heart = document.createElement("div");
    heart.className = "cursor-heart";
    heart.innerHTML = "❤️";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
}

document.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.12) { 
        spawnHeartTrail(e.clientX, e.clientY);
    }
});

document.addEventListener("touchmove", (e) => {
    let touch = e.touches[0];
    if (Math.random() < 0.2) {
        spawnHeartTrail(touch.clientX, touch.clientY);
    }
});

// Ledakan Konfeti
function createConfetti() {
    const colors = ["#ff2b2b", "#ffffff", "#ffd700", "#ff8c8c", "#ffb7c5"];
    for (let i = 0; i < 90; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
}

// Hati Melayang di Background Lambat
setInterval(createBackgroundHeart, 700);
function createBackgroundHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 12) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
