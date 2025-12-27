// Data is loaded from data.js before this script runs

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Render Hero Data
    document.getElementById('name').textContent = profileData.personalInfo.name;
    document.getElementById('headline').textContent = profileData.personalInfo.headline;
    document.getElementById('about-short').textContent = profileData.personalInfo.subHeadline;
    document.getElementById('profile-pic').src = profileData.personalInfo.avatar;

    // Render About Data
    document.getElementById('about-full').innerHTML = `<p>${profileData.personalInfo.about}</p>`;

    // Render Skills
    const skillsContainer = document.getElementById('skills-list');

    // Icon Mapping for Categories
    const categoryIcons = {
        "Languages": "code-2",
        "Backend & Frameworks": "database",
        "Tools & DevOps": "wrench",
        "AI/ML & Data Science": "brain-circuit"
    };

    // Check if skills is an array (old format) or object (new format)
    if (Array.isArray(profileData.skills)) {
        // Fallback for flat array
        profileData.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerHTML = `<i data-lucide="check-circle" class="skill-icon"></i> ${skill}`;
            skillsContainer.appendChild(span);
        });
    } else {
        // New Categorized Format
        for (const [category, skills] of Object.entries(profileData.skills)) {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'skill-category-card reveal spotlight-card';

            // Spotlight Effect Listener
            categoryCard.addEventListener('mousemove', (e) => {
                const rect = categoryCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                categoryCard.style.setProperty('--mouse-x', `${x}px`);
                categoryCard.style.setProperty('--mouse-y', `${y}px`);
            });

            const iconName = categoryIcons[category] || "folder";

            const categoryTitle = document.createElement('h3');
            categoryTitle.className = 'skill-category-title';
            categoryTitle.innerHTML = `<i data-lucide="${iconName}" class="category-icon"></i> ${category}`;

            const skillTagsContainer = document.createElement('div');
            skillTagsContainer.className = 'skill-tags-container rich-grid';

            skills.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'rich-skill-card';

                skillCard.innerHTML = `
                    <div class="rich-skill-icon">
                        <img src="${skill.icon}" alt="${skill.name}">
                    </div>
                    <div class="rich-skill-info">
                        <h4>${skill.name}</h4>
                        <p>${skill.desc}</p>
                    </div>
                `;

                skillTagsContainer.appendChild(skillCard);
            });

            categoryCard.appendChild(categoryTitle);
            categoryCard.appendChild(skillTagsContainer);
            skillsContainer.appendChild(categoryCard);
        }
    }

    // Render Experience
    const experienceContainer = document.getElementById('experience-list');
    profileData.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${job.date}</span>
                <h3 class="timeline-role">${job.role}</h3>
                <h4 class="timeline-company">${job.company} | ${job.location}</h4>
                <p>${job.description}</p>
            </div>
        `;
        experienceContainer.appendChild(item);
    });

    // Render Projects
    const projectsContainer = document.getElementById('projects-list');
    profileData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        // Add staggering delay via inline style if needed, or rely on CSS nth-child
        card.style.animationDelay = `${0.1 + (index * 0.1)}s`;

        // Generate tags HTML
        const tagsHtml = project.tags ? project.tags.map(tag => `<span class="project-tag">#${tag}</span>`).join('') : '';

        // Generate External Link HTML
        // If a link exists, show an external-link icon in the header
        const linkHtml = project.link
            ? `<a href="${project.link}" target="_blank" class="project-link" title="View Live Demo"><i data-lucide="external-link"></i></a>`
            : '';

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <div class="project-header">
                    <i data-lucide="folder" class="folder-icon"></i>
                    ${linkHtml}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // Re-initialize icons for dynamic content
    lucide.createIcons();

    // Render Certifications
    const certsContainer = document.getElementById('certs-list');
    profileData.certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';

        const credentialHtml = cert.credentialId
            ? `<p class="cert-id">ID: ${cert.credentialId}</p>`
            : '';

        card.innerHTML = `
            <div class="cert-header">
                <h3 class="cert-title">${cert.title}</h3>
                <span class="cert-date">${cert.date}</span>
            </div>
            <p class="cert-issuer">${cert.issuer}</p>
            ${credentialHtml}
        `;
        certsContainer.appendChild(card);
    });

    // Update Contact Email
    // Update Contact Links
    const contactBtn = document.getElementById('contact-btn');
    const linkedinBtn = document.getElementById('linkedin-btn');
    const githubBtn = document.getElementById('github-btn');

    if (profileData.personalInfo.email) {
        contactBtn.href = `mailto:${profileData.personalInfo.email}`;
    }

    if (profileData.personalInfo.linkedin) {
        linkedinBtn.href = profileData.personalInfo.linkedin;
    }

    if (profileData.personalInfo.github) {
        githubBtn.href = profileData.personalInfo.github;
    }

    // --- Visual Enhancements ---

    // 1. Typing Effect
    const headlineElement = document.getElementById('headline');
    const headlineText = profileData.personalInfo.headline || "I build things for the web.";
    headlineElement.textContent = ''; // Clear initial text

    let charIndex = 0;
    const typeSpeed = 100; // ms per character

    function typeWriter() {
        if (charIndex < headlineText.length) {
            headlineElement.textContent += headlineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Add blinking cursor after typing finishes
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            headlineElement.appendChild(cursor);
        }
    }

    // Start typing after a small delay
    setTimeout(typeWriter, 1000);


    // 2. Background Floating Shapes
    const heroBg = document.getElementById('hero-background');
    if (heroBg) {
        const shapeCount = 5;
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';

            // Random size
            const size = Math.random() * 200 + 100; // 100px to 300px
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;

            // Random position
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;

            // Random animation delay and duration
            shape.style.animationDelay = `${Math.random() * 5}s`;
            shape.style.animationDuration = `${15 + Math.random() * 15}s`;

            heroBg.appendChild(shape);
        }
    }

    // 3. Scroll Reveal
    const revealElements = document.querySelectorAll('section h2, .about-grid, .timeline-item, .project-card, .cert-card, .skill-category-card');

    // Add reveal class initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Magnetic Buttons (Subtle effect)
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate distance from center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / 8; // Divide by factor to limit movement
            const deltaY = (y - centerY) / 8;

            btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

});
