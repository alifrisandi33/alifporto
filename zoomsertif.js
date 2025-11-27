const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Semua gambar sertifikat
document.querySelectorAll(".cert-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Tutup modal
closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
