// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
        updateStatus("Service Worker berhasil didaftarkan!");
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
        updateStatus("Gagal mendaftarkan Service Worker");
      });
  });
}

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User installed the app");
        updateStatus("Aplikasi berhasil diinstall!");
      }
      deferredPrompt = null;
    });
  });
});

// Check Online Status
const checkOnlineBtn = document.getElementById("checkOnline");
const connectionStatus = document.getElementById("connectionStatus");

checkOnlineBtn.addEventListener("click", () => {
  if (navigator.onLine) {
    connectionStatus.textContent = "✅ Anda sedang online!";
    connectionStatus.style.backgroundColor = "#d4edda";
    connectionStatus.style.color = "#155724";
  } else {
    connectionStatus.textContent =
      "📴 Anda sedang offline. Konten akan diambil dari cache.";
    connectionStatus.style.backgroundColor = "#f8d7da";
    connectionStatus.style.color = "#721c24";
  }
});

// Update Status
function updateStatus(message) {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
  statusEl.style.color = "#4a90e2";
}

// Network Status Listener
window.addEventListener("online", () => {
  connectionStatus.textContent = "✅ Koneksi internet kembali!";
  connectionStatus.style.backgroundColor = "#d4edda";
  connectionStatus.style.color = "#155724";
});

window.addEventListener("offline", () => {
  connectionStatus.textContent = "📴 Anda sedang offline.";
  connectionStatus.style.backgroundColor = "#f8d7da";
  connectionStatus.style.color = "#721c24";
});
