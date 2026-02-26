// Milestone Slider (for milestones section)
document.addEventListener("DOMContentLoaded", () => {
    const milestoneSlides = document.querySelectorAll('.milestone-slide');
    let currentMilestoneIndex = 0;
  
    function showMilestoneSlide(index) {
        milestoneSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }
  
    // Auto-play slideshow for milestones
    setInterval(() => {
        currentMilestoneIndex = (currentMilestoneIndex + 1) % milestoneSlides.length;
        showMilestoneSlide(currentMilestoneIndex);
    }, 3000);
  
    // Initialize the first slide
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
  