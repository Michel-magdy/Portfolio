/* ============================================================
   PORTFOLIO — INTERACTIVE LOGIC
   Projects Data, Modal, Carousel, Timeline, Scroll Animations
   ============================================================ */
// ─── TECH CHIP COLORS ─────────────────────────────────────────
const techColors = {
    'HTML': '#e44d26',
    'CSS': '#264de4',
    'JavaScript': '#f7df1e',
    'TypeScript': '#3178c6',
    'React': '#61dafb',
    'Angular': '#dd0031',
    'Vue.js': '#42b883',
    'Node.js': '#339933',
    'Express': '#333333',
    'Python': '#3776ab',
    'Django': '#092e20',
    'Firebase': '#ffca28',
    'MongoDB': '#47a248',
    'PostgreSQL': '#4169e1',
    'Git': '#f05032',
    'Figma': '#a259ff',
    'Sass': '#cc6699',
    'TailwindCSS': '#06b6d4',
    'Next.js': '#000000',
    'REST API': '#6c63ff',
    'WebRTC': '#ff6b35',
    'Socket.io': '#010101',
};
// ─── PROJECTS DATA ────────────────────────────────────────────
const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Full-Stack Development · Completed',
        shortDesc: 'A modern e-commerce store with dark theme, shopping cart, and dynamic product filtering.',
        description: 'A fully responsive e-commerce platform featuring a premium dark theme with glassmorphism effects, gradient accents, and smooth animations. Includes a fully functional shopping cart, product filtering by category, and an intuitive checkout flow.',
        features: [
            'Dynamic product catalog with category filtering',
            'Real-time shopping cart with quantity management',
            'Responsive design across all devices',
            'Form validation for checkout process'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        challenge: 'Building a seamless shopping experience with real-time cart updates and smooth filtering — all without a backend or framework.',
        action: 'Designed a modular vanilla JS architecture with event-driven state management, dynamic DOM rendering, and CSS transitions for every interaction.',
        result: 'Delivered a fully responsive e-commerce platform with instant product filtering, real-time cart totals, and a polished checkout flow — achieving fast load times and zero dependencies.',
        images: [
            'assets/images/Ecommerce.png',
            'assets/images/Ecommerce2.png',
            'assets/images/Ecommerce3.png',
        ],
        links: { live: 'https://michel-magdy.github.io/static-Ecommerce', github: 'https://github.com/Michel-magdy/static-Ecommerce' }
    },
    {
        title: 'AXE GYM Website',
        category: 'Front-End Development · Completed',
        shortDesc: 'A bold gym website with dark theme, dynamic animations, and interactive membership plans.',
        description: 'A striking gym website featuring an aggressive dark theme with vibrant gradient accents. Built with emphasis on visual impact and user engagement through scroll-triggered animations and interactive elements.',
        features: [
            'Bold hero section with animated text reveals',
            'Interactive membership plan comparison cards',
            'Image gallery with hover effects',
            'Mobile-first responsive design'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        challenge: 'Creating a visually striking gym website that captures the brand\'s energy while maintaining smooth performance across all devices.',
        action: 'Implemented scroll-triggered animations, interactive membership comparison cards, and a mobile-first responsive layout with aggressive dark theme and vibrant gradients.',
        result: 'Produced a bold, high-impact website with fluid animations and interactive elements that boosted user engagement and showcased the gym\'s brand identity.',
        images: [
            'assets/images/AXEGym.png',
            'assets/images/AXEGym2.png',
            'assets/images/AXEGym3.png',
        ],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Task Manager App',
        category: 'Front-End Development · Completed',
        shortDesc: 'A sleek to-do application with local storage, drag-and-drop, and priority levels.',
        description: 'A productivity-focused task management application with a clean, intuitive interface. Features persistent storage, task categorization by priority, and smooth drag-and-drop reordering for efficient workflow management.',
        features: [
            'CRUD operations for task management',
            'LocalStorage persistence across sessions',
            'Priority-based color coding',
            'Drag-and-drop task reordering',
            'Filter and search functionality'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        challenge: 'Building a productivity app that persists data across sessions and supports intuitive task reordering without any external libraries.',
        action: 'Leveraged LocalStorage for persistence, implemented a custom drag-and-drop system, and added priority-based color coding with filter and search capabilities.',
        result: 'Delivered a clean, zero-dependency task manager with persistent storage, smooth drag-and-drop, and instant search — improving personal workflow efficiency.',
        images: [
            'assets/images/To-Do.png'
        ],
        links: { live: '#', github: 'https://github.com/Michel-magdy/To-do-list-' }
    },

];
// ─── EXPERIENCE DATA ──────────────────────────────────────────
const experiences = [
    {
        company: 'DEPI',
        role: 'Full-stack .Net Trainee',
        image: 'assets/depi.webp',
        date: '2025 — PRESENT',
        tasks: [
            'Learning .Net framework and C#',
            'Building a web application using .Net framework and C#',
            'Collaborating with designers to translate Figma mockups into code',
            'Implementing modern CSS techniques including glassmorphism and animations'
        ]
    },
    {
        company: 'Online Courses',
        role: 'Continuous Learner',
        icon: 'fas fa-book-open',
        date: '2024 — PRESENT',
        tasks: [
            'Completed multiple web development courses and certifications',
            'Practiced data structures, algorithms, and problem-solving',
            'Built 10+ projects spanning front-end and full-stack development',
            'Explored cloud services and deployment pipelines'
        ]
    },
    {
        company: 'Shorouk Academy',
        role: 'Computer Science Student',
        image: 'assets/Sha.jfif',
        icon: 'fas fa-graduation-cap',
        date: '2023 — PRESENT',
        tasks: [
            'Studying Computer Science fundamentals and algorithms',
            'Building personal projects to strengthen full-stack skills',
            'Learning modern frameworks like Angular and .Net',
            'Contributing to open-source projects on GitHub'
        ]
    },

];
// ─── SERVICES DATA ────────────────────────────────────────────
const services = [
    {
        icon: 'fas fa-globe',
        iconClass: 'icon-web',
        title: 'Web Development',
        desc: 'Full-stack web applications built with modern technologies and best practices.',
        features: ['Custom web applications', 'CMS integration', 'E-commerce solutions', 'Database design']
    },
    {
        icon: 'fas fa-palette',
        iconClass: 'icon-frontend',
        title: 'Frontend Engineering',
        desc: 'Pixel-perfect, interactive user interfaces with smooth animations and transitions.',
        features: ['Component-based architecture', 'State management', 'Animation & motion', 'Accessibility (a11y)']
    },
    {
        icon: 'fas fa-server',
        iconClass: 'icon-backend',
        title: 'Backend Development',
        desc: 'Robust server-side solutions with secure APIs and scalable architecture.',
        features: ['RESTful API design', 'Authentication & security', 'Database optimization', 'Cloud deployment']
    },
    {
        icon: 'fas fa-plug',
        iconClass: 'icon-api',
        title: 'API Integration',
        desc: 'Seamless third-party service integration and custom API development.',
        features: ['Payment gateways', 'Social media APIs', 'Analytics platforms', 'Custom webhooks']
    },
    {
        icon: 'fas fa-mobile-alt',
        iconClass: 'icon-responsive',
        title: 'Responsive Design',
        desc: 'Designs that look and work flawlessly across every device and screen size.',
        features: ['Mobile-first approach', 'Cross-browser testing', 'Touch-optimized UI', 'Adaptive layouts']
    },
    {
        icon: 'fas fa-tachometer-alt',
        iconClass: 'icon-performance',
        title: 'Performance Optimization',
        desc: 'Lightning-fast load times through code splitting, caching, and asset optimization.',
        features: ['Core Web Vitals', 'Asset compression', 'Lazy loading', 'SEO optimization']
    }
];

// ─── TESTIMONIALS DATA ────────────────────────────────────────
const testimonials = [
    {
        name: 'Ahmed Hassan',
        role: 'Project Manager',
        email: 'ahmed.hassan@example.com',
        text: 'Michel delivered an outstanding e-commerce platform that exceeded our expectations. His attention to detail and clean code made the entire process smooth and professional.',
        rating: 5,
    },
    {
        name: 'Sarah Johnson',
        role: 'Startup Founder',
        email: 'sarah.johnson@example.com',
        text: 'Working with Michel was a fantastic experience. He transformed our vision into a beautiful, responsive website with incredible animations and performance.',
        rating: 5,
    },
    {
        name: 'Omar Khalil',
        role: 'UI/UX Designer',
        email: 'omar.khalil@example.com',
        text: 'Michel has an exceptional eye for translating designs into pixel-perfect code. His technical skills combined with design sensibility make him a rare find.',
        rating: 5,
    },
    {
        name: 'Lina Marcos',
        role: 'Business Owner',
        email: 'lina.marcos@example.com',
        text: 'The gym website Michel built for us has significantly increased our online presence. Professional, fast, and always communicative throughout the project.',
        rating: 4,
    },
];

// ─── GENERATE PROJECT CARD GRADIENT PLACEHOLDER ────────────────
function generateProjectGradient(index) {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    ];
    return gradients[index % gradients.length];
}
// ─── RENDER PROJECT CARDS ─────────────────────────────────────
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projects.map((project, i) => `
        <div class="project-card animate-in" data-index="${i}">
            <div class="project-card-image">
                ${project.images.length > 0
            ? `<img loading="lazy" src="${project.images[0]}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div style="width:100%;height:100%;background:${generateProjectGradient(i)};display:flex;align-items:center;justify-content:center;">
                        <span style="font-size:2.5rem;opacity:0.5;color:#fff;font-family:var(--font-heading);">${project.title.charAt(0)}</span>
                    </div>`
        }
                <div class="project-overlay"></div>
            </div>
            <div class="project-card-body">
                <h3>${project.title}</h3>
                <p>${project.shortDesc}</p>
                <div class="project-card-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-card-footer">
                <button class="read-more-btn" aria-label="Read more about ${project.title}">
                    Read More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
    // Attach click listeners
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index);
            openModal(idx);
        });
    });
}
// ─── RENDER EXPERIENCE TIMELINE ───────────────────────────────
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = experiences.map(exp => {
        const nodeContent = exp.image
            ? `<img loading="lazy" src="${exp.image}" alt="${exp.company}" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">`
            : `<i class="${exp.icon}"></i>`;
        const logoContent = exp.image
            ? `<img loading="lazy" src="${exp.image}" alt="${exp.company}" style="width:100%;height:100%;object-fit:contain;border-radius:10px;">`
            : `<i class="${exp.icon}"></i>`;
        return `
        <div class="timeline-item animate-in">
            <div class="timeline-node">${nodeContent}</div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <div class="timeline-logo">${logoContent}</div>
                    <div class="timeline-info">
                        <h3>${exp.company}</h3>
                        <span class="role">${exp.role}</span>
                    </div>
                </div>
                <div class="timeline-date">${exp.date}</div>
                <ul class="timeline-tasks">
                    ${exp.tasks.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    }).join('');
}
// ─── RENDER SERVICES ──────────────────────────────────────────
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = services.map(s => `
        <div class="service-card animate-in">
            <div class="service-icon ${s.iconClass}"><i class="${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <ul class="service-features">
                ${s.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}
// ─── RENDER TESTIMONIALS ──────────────────────────────────────
function renderTestimonials() {
    const mainContainer = document.getElementById('testimonialMain');
    const thumbContainer = document.getElementById('testimonialThumbs');
    if (!mainContainer || !thumbContainer) return;

    const avatarGradients = [
        'linear-gradient(135deg, #4a9eff, #2850a0)',
        'linear-gradient(135deg, #6bb5ff, #4a9eff)',
        'linear-gradient(135deg, #34d399, #059669)',
        'linear-gradient(135deg, #a78bfa, #7c3aed)',
    ];

    // Generate main reviews
    mainContainer.innerHTML = testimonials.map((t, i) => {
        const stars = Array.from({ length: 5 }, (_, s) =>
            `<i class="fas fa-star${s < t.rating ? '' : '-half-alt'}" style="color:${s < t.rating ? '#fbbf24' : 'var(--text-muted)'};"></i>`
        ).join('');
        const initials = t.name.split(' ').map(w => w[0]).join('');

        return `
        <div class="testimonial-card-single ${i === 0 ? 'active' : ''}" data-index="${i}">
            <div class="testimonial-quote-icon"><i class="fas fa-quote-left"></i></div>
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
                <a href="mailto:${t.email}" class="testimonial-avatar" style="background:${avatarGradients[i % avatarGradients.length]}">${initials}</a>
                <div class="testimonial-info">
                    <a href="mailto:${t.email}">${t.name} <br></a>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');

    // Generate thumbnails
    thumbContainer.innerHTML = testimonials.map((t, i) => {
        const initials = t.name.split(' ').map(w => w[0]).join('');
        return `
        <button class="testimonial-thumb-btn ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View review by ${t.name}" style="background:${avatarGradients[i % avatarGradients.length]}">
            ${initials}
        </button>
        `;
    }).join('');

    // Add thumbnail click logic
    const thumbs = thumbContainer.querySelectorAll('.testimonial-thumb-btn');
    const slides = mainContainer.querySelectorAll('.testimonial-card-single');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const idx = parseInt(thumb.dataset.index);

            // Update active states
            thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
            slides.forEach((s, i) => s.classList.toggle('active', i === idx));
        });
    });
}

// ─── PROJECT MODAL ────────────────────────────────────────────
let currentSlide = 0;
let currentProject = null;
function openModal(index) {
    currentProject = projects[index];
    currentSlide = 0;
    const modal = document.getElementById('projectModal');
    const titleEl = document.getElementById('modalTitle');
    const catEl = document.getElementById('modalCategory');
    const descEl = document.getElementById('modalDescription');
    const featuresEl = document.getElementById('modalFeatures');
    const techEl = document.getElementById('modalTech');
    const linksEl = document.getElementById('modalLinks');
    const carouselEl = document.getElementById('modalCarousel');
    const dotsEl = document.getElementById('carouselDots');
    // Populate text
    titleEl.textContent = currentProject.title;
    catEl.textContent = currentProject.category;
    descEl.textContent = currentProject.description;
    // Challenge / Action / Result
    const carEl = document.getElementById('modalCar');
    const challengeEl = document.getElementById('modalChallenge');
    const actionEl = document.getElementById('modalAction');
    const resultEl = document.getElementById('modalResult');
    if (currentProject.challenge && currentProject.action && currentProject.result) {
        challengeEl.textContent = currentProject.challenge;
        actionEl.textContent = currentProject.action;
        resultEl.textContent = currentProject.result;
        carEl.style.display = '';
    } else {
        carEl.style.display = 'none';
    }
    // Features
    featuresEl.innerHTML = currentProject.features.map(f => `<li>${f}</li>`).join('');
    // Tech chips
    techEl.innerHTML = currentProject.tech.map(t => {
        const bg = techColors[t] || '#555';
        return `<span class="modal-tech-chip" style="background:${bg}">${t}</span>`;
    }).join('');
    // Links
    linksEl.innerHTML = '';
    if (currentProject.links.live && currentProject.links.live !== '#') {
        linksEl.innerHTML += `<a href="${currentProject.links.live}" target="_blank" rel="noopener" class="modal-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }
    if (currentProject.links.github && currentProject.links.github !== '#') {
        linksEl.innerHTML += `<a href="${currentProject.links.github}" target="_blank" rel="noopener" class="modal-link"><i class="fab fa-github"></i> Source Code</a>`;
    }
    // Main image + thumbnail list
    const images = currentProject.images.length > 0
        ? currentProject.images
        : [generateProjectGradient(index)];

    if (currentProject.images.length > 0) {
        // Main image
        carouselEl.innerHTML = `<img loading="lazy" src="${images[0]}" alt="${currentProject.title} main screenshot" class="modal-main-img">`;

        // Thumbnail list below main image
        if (images.length > 1) {
            dotsEl.innerHTML = images.map((src, i) =>
                `<div class="modal-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
                    <img loading="lazy" src="${src}" alt="${currentProject.title} screenshot ${i + 1} ">
                </div>`
            ).join('');

            dotsEl.querySelectorAll('.modal-thumb').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const idx = parseInt(thumb.dataset.index);
                    const mainImg = carouselEl.querySelector('.modal-main-img');

                    // Simple fade effect
                    mainImg.style.opacity = '0.5';
                    setTimeout(() => {
                        mainImg.src = images[idx];
                        mainImg.style.opacity = '1';
                    }, 150);

                    // Update active thumb
                    dotsEl.querySelectorAll('.modal-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
                });
            });
        } else {
            dotsEl.innerHTML = '';
        }
    } else {
        carouselEl.innerHTML = `
            <div style="width:100%;height:100%;background:${generateProjectGradient(index)};display:flex;flex-direction:column;align-items:center;justify-content:center;" class="modal-main-img">
                <span style="font-size:4rem;opacity:0.4;color:#fff;font-family:var(--font-heading);">${currentProject.title.charAt(0)}</span>
                <span style="font-size:0.85rem;opacity:0.5;color:#fff;margin-top:0.5rem;">${currentProject.title}</span>
            </div>`;
        dotsEl.innerHTML = '';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trigger staggered entrance animations
    setTimeout(() => {
        document.querySelectorAll('.animate-modal-content').forEach(el => {
            el.classList.add('visible');
        });
    }, 50);
}
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset entrance animations
    document.querySelectorAll('.animate-modal-content').forEach(el => {
        el.classList.remove('visible');
    });
}
function goToSlide(index) {
    currentSlide = index;
    const carousel = document.getElementById('modalCarousel');
    const slides = carousel.querySelectorAll('img');
    const dots = document.querySelectorAll('.carousel-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
}
// Close modal events
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (document.getElementById('projectModal').classList.contains('active')) {
        if (e.key === 'ArrowLeft' && currentSlide > 0) goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') {
            const totalSlides = document.querySelectorAll('#modalCarousel img').length;
            if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
        }
    }
});
// ─── SCROLL ANIMATIONS (IntersectionObserver) ─────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}
// ─── ACTIVE NAV HIGHLIGHTING ──────────────────────────────────
function initActiveNav() {
    const sections = document.querySelectorAll('.section');
    const dockIcons = document.querySelectorAll('.dock-icon');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                dockIcons.forEach(icon => {
                    icon.classList.toggle('active', icon.dataset.section === id);
                });
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(section => observer.observe(section));
}
// ─── SMOOTH SCROLL FOR NAV ────────────────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('.dock-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const href = icon.getAttribute('href');
            // Only intercept hash links; let page links (e.g. pricing.html) navigate normally
            if (!href || !href.startsWith('#')) return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
// ─── HERO NAME HOVER IMAGE CYCLING ────────────────────────────
function initNameHoverEffect() {
    const wrapper = document.getElementById('heroNameWrapper');
    const img = document.getElementById('hoverCycleImg');
    if (!wrapper || !img) return;

    const hoverImages = [
        'assets/hover1.jpeg',
        'assets/hover2.jpeg',
        'assets/hover3.jpeg',
        'assets/hover4.jpeg',
    ];

    // Preload images for instant display
    hoverImages.forEach(src => {
        const preload = new Image();
        preload.src = src;
    });

    let cycleInterval = null;
    let currentIndex = 0;

    wrapper.addEventListener('mouseenter', () => {
        // Skip on small screens where popup would overflow
        if (window.innerWidth < 768) return;

        currentIndex = 0;
        img.src = hoverImages[currentIndex];

        cycleInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % hoverImages.length;
            img.src = hoverImages[currentIndex];
        }, 650);
    });

    wrapper.addEventListener('mouseleave', () => {
        if (cycleInterval) {
            clearInterval(cycleInterval);
            cycleInterval = null;
        }
    });
}
// ─── THEME TOGGLE ─────────────────────────────────────────────
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    // Check saved theme
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Update Document
    function updateTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }

    updateTheme();

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        updateTheme();
    });
}
// ─── INITIALIZE EVERYTHING ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Always start at the top — clear any leftover URL hash
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);

    initThemeToggle();

    renderProjects();
    renderTimeline();
    renderServices();
    renderTestimonials();
    initScrollAnimations();
    initActiveNav();
    initSmoothScroll();
    initNameHoverEffect();
});
