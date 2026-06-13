document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // Mobile Menu
    // =====================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // =====================
    // Active Nav Link
    // =====================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        }
    });

    // =====================
    // Dark Mode Toggle
    // =====================
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // =====================
    // Contact Form
    // =====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been received. (Demo Mode)');
            contactForm.reset();
        });
    }

    // =====================
    // Typed.js
    // =====================
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        new Typed('.typed-text', {
            strings: [
                'Frontend Development',
                'Web Development',
                'UI/UX Design',
                'Graphic Design',
                'Poster Design',
                'Git & Version Control',
                'QA Testing',
                'DevOps Engineer',
                'API Testing'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }

    // =====================
    // Scroll Animations
    // =====================
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 100);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll([
        '.timeline-item',
        '.timeline-content',
        '.footer-col',
        '.social-icons-top a',
        '.btn',
        '.info-item',
        '.skill-card',
        '.project-card',
        '.about-card'
    ].join(', ')).forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });

    // =====================
    // Navbar Scroll Shadow
    // =====================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // =====================
    // Smooth Scroll for Anchor Links
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('%cChanthy Chet Portfolio Loaded Successfully!', 'color:#4f46e5; font-size:14px; font-weight:bold');
});