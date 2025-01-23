// Slideshow functionality (for a general slideshow)
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


// Milestone Slider (for milestones section)
document.addEventListener("DOMContentLoaded", () => {
  const milestoneSlides = document.querySelectorAll('.milestone-slide');
  const prevBtnMilestone = document.querySelector('.milestone-btn.prev');
  const nextBtnMilestone = document.querySelector('.milestone-btn.next');
  let currentMilestoneIndex = 0;

  function showMilestoneSlide(index) {
      milestoneSlides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
  }

  prevBtnMilestone.addEventListener('click', () => {
      currentMilestoneIndex = (currentMilestoneIndex - 1 + milestoneSlides.length) % milestoneSlides.length;
      showMilestoneSlide(currentMilestoneIndex);
  });

  nextBtnMilestone.addEventListener('click', () => {
      currentMilestoneIndex = (currentMilestoneIndex + 1) % milestoneSlides.length;
      showMilestoneSlide(currentMilestoneIndex);
  });

  showMilestoneSlide(currentMilestoneIndex);
});


// Lessons Learned Animation on Scroll (for animation trigger on scroll)
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
