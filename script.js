// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add('active');
        }
    });
};

// Initial call
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Contact Form Simulation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Message Sent!';
        btn.style.background = '#00c853';
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// Typing Effect for Hero
const heroTitle = document.querySelector('.hero p');
const text = heroTitle.innerText;
heroTitle.innerText = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

// Start typing after initial reveal
setTimeout(typeWriter, 1000);
