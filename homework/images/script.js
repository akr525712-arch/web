/* script.js */
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// ឱ្យដូររូបភាពរៀងរាល់ 3 វិនាទីម្តង
setInterval(nextSlide, 3000);