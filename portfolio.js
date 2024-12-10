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
