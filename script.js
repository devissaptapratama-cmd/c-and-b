const wrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = images.length;

// Fungsi untuk memperbarui posisi pergeseran gambar
function updateSliderPosition() {
    // Menggeser wrapper berdasarkan indeks gambar saat ini (misal: -100%, -200%)
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event Klik Tombol Next
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++; // Pindah ke gambar berikutnya
    } else {
        currentIndex = 0; // Kembali ke gambar pertama jika sudah di ujung
    }
    updateSliderPosition();
});

// Event Klik Tombol Prev
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Pindah ke gambar sebelumnya
    } else {
        currentIndex = totalImages - 1; // Lompat ke gambar terakhir jika di awal
    }
    updateSliderPosition();
});
