// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
  
  // Animate hamburger to X
  const btn = document.querySelector('.mobile-menu-btn i');
  if (navMenu.classList.contains('active')) {
    btn.className = 'fas fa-times';
  } else {
    btn.className = 'fas fa-bars';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Close mobile menu
    document.querySelector('.nav-menu').classList.remove('active');
    document.querySelector('.mobile-menu-btn i').className = 'fas fa-bars';
    
    // Smooth scroll to section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Enhanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for multiple elements
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, observerOptions);

// Observe all animation elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach((el, index) => {
  // Add delay based on element position
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

// Enhanced form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  // Show loading state
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  
  // Get form data
  const name = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const message = e.target.querySelector('textarea').value;
  
  // Create mailto link
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:rachanasudhakar17@gmail.com?subject=${subject}&body=${body}`;
  
  // Simulate processing time
  setTimeout(() => {
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'var(--secondary)';
    
    // Reset form
    e.target.reset();
    
    // Reset button after delay
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  }, 1000);
});

// Add smooth hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-12px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Initialize particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Initialize code rain
function createCodeRain() {
  const codeRainContainer = document.getElementById('codeRain');
  const codeChars = ['0', '1', '{', '}', '<', '>', '/', '\\', '=', '+', '-', '*', '&', '%', '
  , '#', '@'];
  const columnCount = Math.floor(window.innerWidth / 20);
  
  for (let i = 0; i < columnCount; i++) {
    const char = document.createElement('div');
    char.className = 'code-char';
    char.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
    char.style.left = (i * 20) + 'px';
    char.style.animationDelay = Math.random() * 8 + 's';
    char.style.animationDuration = (Math.random() * 6 + 4) + 's';
    codeRainContainer.appendChild(char);
  }
}

// Initialize background effects
window.addEventListener('load', () => {
  createParticles();
  createCodeRain();
  
  // Add entrance animations to hero elements
  const heroElements = document.querySelectorAll('.hero .fade-in');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
});