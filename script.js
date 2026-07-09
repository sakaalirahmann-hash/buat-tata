const bgMusic = document.getElementById("bgMusic");
const giftBtn = document.getElementById("giftBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const typing = document.getElementById("typing");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const overlay = document.getElementById("cinematicOverlay");
const audioToggle = document.getElementById("audioToggle");

const text = `Selamat ulang tahun yang ke-14. Semoga tahun ini Tata membawa banyak kebahagiaan, kesehatan, dan pengalaman baru untuk diri sendiri maupun keluarga... ^^ Tetap menjadi dirimu sendiri yaa.., terus berkembang, dan semoga setiap harapan baikmu pasti akan tercapai ^^ Have a wonderful birthday Tata..^^`;

// ✨ 1. Efek Musik Fade In Halus & Tombol Mute/Unmute
function fadeInMusic() {
    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});
    
    // Tampilkan tombol audio di pojok kanan bawah
    audioToggle.style.display = "flex";

    let vol = 0;
    let fadeTimer = setInterval(() => {
        if (vol < 0.9) {
            vol += 0.05;
            bgMusic.volume = vol;
        } else {
            bgMusic.volume = 1;
            clearInterval(fadeTimer);
        }
    }, 200);

    // Fungsi klik tombol Mute / Unmute
    audioToggle.onclick = (e) => {
        e.preventDefault();
        if (bgMusic.muted) {
            bgMusic.muted = false;
            audioToggle.textContent = "🔊";
        } else {
            bgMusic.muted = true;
            audioToggle.textContent = "🔇";
        }
    };
}

// 🎁 2. Animasi Kotak Kado Bergetar & Meledak Terbuka
giftBtn.onclick = (e) => {
    e.preventDefault();
    giftBtn.disabled = true;
    
    fadeInMusic(); 

    // Langkah 1: Kado bergoyang
    giftBtn.classList.add("wobble");

    setTimeout(() => {
        // Langkah 2: Kado meledak terbuka (burst-open)
        giftBtn.classList.remove("wobble");
        giftBtn.classList.add("burst-open");

        setTimeout(() => {
            // Langkah 3: Tampilkan teks ketikan ucapan pertama
            message.classList.add("show");
            title.textContent = "🎉 Happy Birthday, Tata!";
            createConfetti();
            startTyping();
        }, 500);
    }, 1500); 
};

// ✍️ 3. Logika Ketikan Teks Efek Lambat & Kalem
function startTyping() {
    let i = 0;
    typing.textContent = "";
    const timer = setInterval(() => {
        typing.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
        }
    }, 60); // ✨ LEBIH LAMBAT & KALEM (60ms per karakter)

    // Perubahan Otomatis ke Halaman 2 (Surat & Foto) setelah Tata selesai membaca
    setTimeout(() => {
        page1.style.display = "none";
        page2.style.display = "block";
    }, 38000); // ✨ LEBIH LAMA (38 detik, memberi waktu luang membaca dengan tenang)
}

// 📩 4. Tombol Buka Surat Halaman 2 & Memunculkan Foto
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
    
    // Memunculkan kontainer foto secara halus (off-center)
    const photoWrapper = document.getElementById("photoWrapper");
    if(photoWrapper) photoWrapper.style.display = "flex";
    setTimeout(() => {
        const img = document.querySelector(".tata-photo");
        if(img) img.classList.add("show");
    }, 100);

    finalBtn.style.display = "inline-block";
};

// 🌙 5. Halaman Penutup Sinematik Melankolis (Meredup Hitam)
finalBtn.onclick = (e) => {
    e.preventDefault();
    page2.style.display = "none";
    page3.style.display = "block";
    
    // Mengaktifkan background meredup gelap dramatis
    if(overlay) overlay.classList.add("darken");

    page3.innerHTML = `
        <div class="cinematic-text">
            "Some moments are short...<br>
            but memories can last forever."
        </div>
        <div class="cinematic-title">Happy Birthday, Tata ❤️</div>
    `;
};

// ==========================================
// ✨ LOGIKA EFEK LATAR BELAKANG PREMIUM ✨
// ==========================================

// 🌸 Efek Kelopak Sakura Gugur
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

// 🌌 Efek Shooting Star (Bintang Jatuh Berkala)
setInterval(createShootingStar, 4000);
function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.left = Math.random() * 60 + "vw";
    star.style.top = Math.random() * 20 + "vh";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1500);
}

// 💖 Efek Jejak Sentuhan Hati (Cursor & Touch Trail)
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

// 🎉 Ledakan Konfeti Saat Kado Dibuka
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

// ❤️ Hati Melayang Lembut di Background
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
