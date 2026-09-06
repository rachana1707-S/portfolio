document.addEventListener("DOMContentLoaded", () => {
  setupScrollReveal();
  setupSkillFiltering();
  setupStoryCards();
  setupTimelineHighlighting();
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* =========================================================
   SKILL FILTERING
   ========================================================= */

function setupSkillFiltering() {
  const skillTabs = document.querySelectorAll(".skill-tab");
  const skillCards = document.querySelectorAll(".skill-card");

  skillTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedFilter = tab.dataset.filter;

      skillTabs.forEach((button) => {
        button.classList.remove("active");
      });

      tab.classList.add("active");

      skillCards.forEach((card) => {
        const shouldShow =
          selectedFilter === "all" ||
          card.dataset.group === selectedFilter;

        card.classList.toggle("hide", !shouldShow);
      });
    });
  });
}

/* =========================================================
   STORY CARDS
   ========================================================= */

function setupStoryCards() {
  const storyCards = document.querySelectorAll(".story-card");

  storyCards.forEach((card) => {
    card.addEventListener("click", () => {
      toggleStoryCard(card, storyCards);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      toggleStoryCard(card, storyCards);
    });
  });
}

function toggleStoryCard(selectedCard, allCards) {
  const isAlreadyOpen = selectedCard.classList.contains("open");

  allCards.forEach((card) => {
    card.classList.remove("open");
  });

  if (!isAlreadyOpen) {
    selectedCard.classList.add("open");
  }
}

/* =========================================================
   TIMELINE HIGHLIGHT
   ========================================================= */

function setupTimelineHighlighting() {
  const timelineSteps = document.querySelectorAll(".timeline-step");

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        timelineSteps.forEach((step) => {
          step.classList.remove("active");
        });

        entry.target.classList.add("active");
      });
    },
    {
      threshold: 0.65,
    }
  );

  timelineSteps.forEach((step) => {
    timelineObserver.observe(step);
  });
}