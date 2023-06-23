// script.js

// Fungsi untuk menampilkan pesan saat tombol "Kirim" diklik
function showMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var output = "Terima kasih, " + name + "! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda melalui email: " + email + ". Pesan Anda: " + message;

  alert(output);
}

// Event listener untuk menangani klik tombol "Kirim"
var sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", showMessage);
