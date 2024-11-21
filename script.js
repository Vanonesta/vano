document.getElementById("yes-btn").addEventListener("click", () => {
  document.getElementById("confession").style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", () => {
  document.getElementById("response").style.display = "block";
  document.getElementById("response-message").innerText = "Oh, baiklah. Mungkin lain kali.";
});

document.getElementById("accept-btn").addEventListener("click", () => {
  document.getElementById("response").style.display = "block";
  document.getElementById("response-message").innerText =
    "Yay! Aku sangat senang! ❤️ Kita mulai cerita kita dari sini.";
  document.getElementById("confession").style.display = "none";
});

document.getElementById("reject-btn").addEventListener("click", () => {
  document.getElementById("response").style.display = "block";
  document.getElementById("response-message").innerText =
    "Aku mengerti, yang penting aku sudah jujur. Semoga kita tetap berteman baik. 😊";
  document.getElementById("confession").style.display = "none";
});