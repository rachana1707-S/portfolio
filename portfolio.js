// Scroll Animations
// document.addEventListener("DOMContentLoaded", () => {
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate");
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   document.querySelectorAll("[data-aos]").forEach(element => observer.observe(element));
// });

document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === "about") {
            entry.target.classList.add("slide-up");
          } else if (entry.target.classList.contains("roadmap-item")) {
            entry.target.classList.add("slide-out-right");
          } else if (entry.target.classList.contains("exp-item")) {
            entry.target.classList.add("slide-out-left");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe About Section
  const aboutSection = document.querySelector("#about");
  if (aboutSection) observer.observe(aboutSection);

  // Observe Each Roadmap Item
  document.querySelectorAll(".roadmap-item").forEach(item => {
    observer.observe(item);
  });

  document.querySelectorAll(".exp-item").forEach(item => {
    observer.observe(item);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');

  cards.forEach((card) => {
    const popup = card.querySelector('.popup-description');

    card.addEventListener('mouseenter', () => {
      const cardRect = card.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Reset styles before calculations
      popup.style.left = '';
      popup.style.right = '';
      popup.style.transform = '';

      // If popup goes off the right edge
      if (cardRect.left + popupRect.width / 2 > viewportWidth) {
        popup.style.left = 'auto';
        popup.style.right = '0';
        popup.style.transform = 'translateX(0)';
      }
      // If popup goes off the left edge
      else if (cardRect.right - popupRect.width / 2 < 0) {
        popup.style.left = '0';
        popup.style.right = 'auto';
        popup.style.transform = 'translateX(0)';
      }
      // Otherwise, center the popup
      else {
        popup.style.left = '50%';
        popup.style.right = 'auto';
        popup.style.transform = 'translateX(-50%)';
      }
    });
  });
});
