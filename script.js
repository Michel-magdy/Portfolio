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
            'Glassmorphism UI with smooth micro-animations',
            'Form validation for checkout process'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        images: [],
        links: { live: '#', github: '#' }
    },
    {
        title: 'AXE GYM Website',
        category: 'Front-End Development · Completed',
        shortDesc: 'A bold gym website with dark theme, dynamic animations, and interactive membership plans.',
        description: 'A striking gym website featuring an aggressive dark theme with vibrant gradient accents. Built with emphasis on visual impact and user engagement through scroll-triggered animations and interactive elements.',
        features: [
            'Bold hero section with animated text reveals',
            'Interactive membership plan comparison cards',
            'Scroll-triggered section animations',
            'Image gallery with hover effects',
            'Mobile-first responsive design'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        images: [],
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
        images: [],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Portfolio Website',
        category: 'Personal Project · Ongoing',
        shortDesc: 'This very portfolio — a premium dark-themed showcase with bento grid and glassmorphism.',
        description: 'A premium personal portfolio combining bento-grid layouts with glassmorphism aesthetics. Features smooth scroll animations, a detailed project modal with image carousel, and an interactive experience timeline.',
        features: [
            'Bento grid layout for the about section',
            'Project detail modal with image carousel',
            'Experience timeline with glassmorphic cards',
            'IntersectionObserver scroll animations',
            'Fully responsive sidebar navigation'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        images: [],
        links: { live: '#', github: '#' }
    },
];
// ─── EXPERIENCE DATA ──────────────────────────────────────────
const experiences = [
    {
        company: 'Freelance',
        role: 'Web Developer',
        icon: 'fas fa-laptop-code',
        date: '2024 — PRESENT',
        tasks: [
            'Building custom websites and web applications for clients',
            'Developing responsive, accessible, and performant front-ends',
            'Collaborating with designers to translate Figma mockups into code',
            'Implementing modern CSS techniques including glassmorphism and animations'
        ]
    },
    {
        company: 'Self-Employed',
        role: 'Software Engineering Student',
        icon: 'fas fa-graduation-cap',
        date: '2023 — PRESENT',
        tasks: [
            'Studying Computer Science fundamentals and algorithms',
            'Building personal projects to strengthen full-stack skills',
            'Learning modern frameworks like React and Angular',
            'Contributing to open-source projects on GitHub'
        ]
    },
    {
        company: 'Online Courses',
        role: 'Continuous Learner',
        icon: 'fas fa-book-open',
        date: '2022 — PRESENT',
        tasks: [
            'Completed multiple web development courses and certifications',
            'Practiced data structures, algorithms, and problem-solving',
            'Built 10+ projects spanning front-end and full-stack development',
            'Explored cloud services and deployment pipelines'
        ]
    }
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
                <div style="width:100%;height:100%;background:${generateProjectGradient(i)};display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:2.5rem;opacity:0.5;color:#fff;font-family:var(--font-heading);">${project.title.charAt(0)}</span>
                </div>
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
    timeline.innerHTML = experiences.map(exp => `
        <div class="timeline-item animate-in">
            <div class="timeline-node"><i class="${exp.icon}"></i></div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <div class="timeline-logo"><i class="${exp.icon}"></i></div>
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
    `).join('');
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
    // Carousel — use gradient placeholders if no images
    const images = currentProject.images.length > 0
        ? currentProject.images
        : [generateProjectGradient(index)];
    if (currentProject.images.length > 0) {
        carouselEl.innerHTML = images.map((src, i) =>
            `<img src="${src}" alt="${currentProject.title} screenshot ${i + 1}" class="${i === 0 ? 'active' : ''}">`
        ).join('');
    } else {
        carouselEl.innerHTML = `
            <div style="width:100%;height:100%;background:${generateProjectGradient(index)};display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;inset:0;opacity:1;" class="active">
                <span style="font-size:4rem;opacity:0.4;color:#fff;font-family:var(--font-heading);">${currentProject.title.charAt(0)}</span>
                <span style="font-size:0.85rem;opacity:0.5;color:#fff;margin-top:0.5rem;">${currentProject.title}</span>
            </div>`;
    }
    // Dots
    if (images.length > 1) {
        dotsEl.innerHTML = images.map((_, i) =>
            `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`
        ).join('');
        dotsEl.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
        });
    } else {
        dotsEl.innerHTML = '';
    }
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
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
            e.preventDefault();
            const target = document.querySelector(icon.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
// ─── INITIALIZE EVERYTHING ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Always start at the top — clear any leftover URL hash
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);

    renderProjects();
    renderTimeline();
    initScrollAnimations();
    initActiveNav();
    initSmoothScroll();
});
