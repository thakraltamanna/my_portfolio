document.addEventListener("DOMContentLoaded", () => {
    
    // --- HERO FADE-OUT ON SCROLL ---
    const heroContent = document.querySelector('.hero-start-content');

    function handleHeroFade() {
        if (!heroContent) return;
        const scrollY = window.scrollY;
        const fadeSpeed = 0.0015; 
        const newOpacity = Math.max(0, 1 - (scrollY * fadeSpeed));
        heroContent.style.opacity = newOpacity;
    }
    window.addEventListener('scroll', handleHeroFade);

    // --- FADE-IN ANIMATION FOR OTHER SECTIONS ---
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeElements.forEach(element => observer.observe(element));

    // --- ANIMATED BOOK LOGIC ---
    const book = document.querySelector('.book');
    if (book) {
        book.addEventListener('click', () => {
            book.classList.toggle('is-open');
        });
    }

    // --- SMOOTH SCROLL FOR NAVBAR ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});