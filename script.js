(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Kamu Yakin?",
    "Kamu yakin agus??",
    "bener niii agustinaa??",
    "pleaseee anggita",
    "cobaa kamu pikirin lagi!!",
    "kalo kamu milih no aku bakal sedih bangetttt",
    "aku akan sedih banget",
    "aku sangat sangat sangat sangat sangat sedih",
    "OKELAA AKU BERHENTI NANYA JAHAT KAMU",
    "Just kidding, pilihh yes dong ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function goToNextPage() {
    window.location.href = "next_page.html"; // Ganti dengan halaman tujuan
}
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

document.addEventListener("DOMContentLoaded", showSlides);
document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.querySelector(".romantic_text");
    let text = textElement.innerHTML;
    textElement.innerHTML = "";
    
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50); // Kecepatan mengetik (50ms per huruf)
        }
    }
    
    setTimeout(typeEffect, 500); // Mulai setelah 0.5 detik
});
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Coba mulai audio dengan mute (beberapa browser blokir autoplay tanpa interaksi pengguna)
    audio.volume = 0.5; // Set volume agar tidak terlalu keras
    audio.play().catch(function () {
        console.log("Autoplay diblokir, menunggu interaksi pengguna...");
    });

    // Jika pengguna mengklik halaman, putar audio tanpa mute
    document.body.addEventListener("click", function () {
        audio.play();
    });
});
function playMusic() {
    let audio = document.getElementById("bg-music");
    audio.play().then(() => {
        document.querySelector(".music-button").style.display = "none"; // Sembunyikan tombol setelah dipencet
    }).catch(error => {
        console.log("Autoplay diblokir, silakan klik tombol untuk memulai musik.", error);
    });
}
