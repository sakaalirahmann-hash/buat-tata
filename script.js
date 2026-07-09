const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    bgMusic.play().catch(() => {});
}, { once: true });

const giftBtn = document.getElementById("giftBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const typing = document.getElementById("typing");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const text = `Selamat ulang tahun yang ke-14.

Semoga tahun ini Tata membawa banyak kebahagiaan, kesehatan, dan pengalaman baru untuk diri sendiri maupun keluarga... ^^

Tetap menjadi dirimu sendiri yaa.., terus berkembang, dan semoga setiap harapan baikmu pasti akan tercapai ^^

Have a wonderful birthday Tata..^^ 🎉`;

giftBtn.onclick = () => {

    message.classList.add("show");
    title.textContent = "🎂 Happy Birthday, Tata!";

    giftBtn.disabled = true;
    giftBtn.textContent = "🎉 Happy Birthday";

    createConfetti();

    let i = 0;
    typing.textContent = "";

    const timer = setInterval(() => {

        typing.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }

    }, 60); // ✨ SEKARANG LEBIH LAMBAT: Dari 35 diubah ke 60 milidetik per karakter

    setTimeout(() => {

        page1.style.display = "none";
        page2.style.display = "block";

    }, 38000); // ✨ SEKARANG LEBIH LAMA: Dari 17000 (17 detik) diubah ke 38000 (38 detik)

};

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const finalBtn = document.getElementById("finalBtn");

letterBtn.onclick = () => {

    letter.classList.add("show");

    letter.innerHTML = `

<h3>Happy 14th Birthday, Tata. ❤️</h3>

<p>

Hari ini bukan hanya tentang bertambahnya usia Tata...
tetapi juga tentang bertambahnya cerita,
pengalaman,
dan harapan baru.. ^^

Semoga kamu dan keluarga selalu diberi kesehatan dan kebahagiaan bersama yaa..
serta dikelilingi oleh orang-orang yang sayang sama kamu.. ^^

Dan sebelumnya aku minta maaf cuma bisa kasih ucapan aja, hehe...

Terus berkembang dan tetap tersenyum yaa...
Semua impianmu pasti menjadi kenyataan,
because you deserve to be happy. ^^

Enjoy your special day Tata..^^

🎂

</p>

`;

    letterBtn.style.display = "none";
    finalBtn.style.display = "inline-block";

};

finalBtn.onclick = () => {

    page2.style.display = "none";
    page3.style.display = "block";

    page3.innerHTML = `

<h1>🎂</h1>

<h2>Happy Birthday</h2>

<h3>Tata Aulia Syahnita</h3>

<p class="subtitle">

Thank you for opening this little surprise.

I hope today becomes one of your happiest memories.

Keep smiling.<br>
Keep growing.<br>
And always believe in yourself.<br><br>

Happy 14th Birthday ❤️

</p>

<p style="margin-top:30px;color:#aaa;font-size:14px;">

Made especially for Tata.

</p>

`;

};

function createConfetti() {

    const colors = ["#ff2b2b", "#ffffff", "#ffd700", "#ff8c8c"];

    for (let i = 0; i < 120; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "vw";

        c.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        c.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 5000);

    }

}

setInterval(createHeart, 400);

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (16 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);

}
