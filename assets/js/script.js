      // Ambil elemen modal dan tombol close
      const modal = document.getElementById("modal");
      const closeBtn = document.getElementById("close-modal");

      // Fungsi buka modal
      function openModal() {
        modal.style.display = "flex"; // pakai flex supaya align center
      }

      // Fungsi tutup modal
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      // Tutup modal jika klik di luar konten modal
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      // Pasang event ke link icon "Link" yang belum tersedia
      document
        .getElementById("link-unavailable")
        .addEventListener("click", function (event) {
          event.preventDefault();
          openModal();
        });