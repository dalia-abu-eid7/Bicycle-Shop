// ================= NAVBAR =================
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

if (burger && navMenu) {
  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ================= ACTIVE LINK =================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {
  const href = link.getAttribute("href");

  if (href && href !== "#" && currentPage.includes(href.replace(".html",""))) {
    link.classList.add("active");
  }
});

if (currentPage.includes("about")) {
  document.querySelector(".about-dropdown")?.classList.add("active");
}

// ================= BIKE MOUSE MOVE =================
const bikeImage = document.querySelector('.bike-image img');

if (bikeImage) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    bikeImage.style.transform = `translate(${x}px, ${-y}px)`;
  });
}

// ================= BIKE SCROLL EFFECT =================
const bikeLeft = document.querySelector('.bike-left');

if (bikeLeft) {
  window.addEventListener('scroll', () => {
    const sectionTop = bikeLeft.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      bikeLeft.classList.add('show');
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      bikeLeft.classList.add('show');
    }, 100);
  });
}

// ================= BUTTON HOVER TEXT =================
const buttons = document.querySelectorAll('.bike-btn');

if (buttons.length > 0) {
  buttons.forEach(button => {
    const text = button.querySelector('.btn-text');

    if (text) {
      button.addEventListener('mouseenter', () => {
        text.textContent = 'DISCOVER MODELS';
      });

      button.addEventListener('mouseleave', () => {
        text.textContent = "LET'S SEE NEW BIKES";
      });
    }
  });
}

// ================= TESTIMONIAL SLIDER =================
const slides = document.querySelectorAll('.testimonial-slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (slides.length > 0 && nextBtn && prevBtn) {
  let index = 0;

  nextBtn.onclick = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  };

  prevBtn.onclick = () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  };
}

// ================= REVEAL ANIMATION =================
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}
window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });
});
