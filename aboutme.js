// Slideshow functionality
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    if (index >= slideImages.length) currentIndex = 0;
    if (index < 0) currentIndex = slideImages.length - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

// Auto-play slideshow
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 5000);


// Milestone Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.milestone-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
  }

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

// Lessons Learned Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const lessonItems = document.querySelectorAll('.lesson');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.2
    });

    lessonItems.forEach(item => {
        observer.observe(item);
    });
});
