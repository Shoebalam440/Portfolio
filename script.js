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
    profileData.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerHTML = `<i data-lucide="check-circle" class="skill-icon"></i> ${skill}`;
        skillsContainer.appendChild(span);
    });

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
    profileData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Generate tags HTML
        const tagsHtml = project.tags ? project.tags.map(tag => `<span class="project-tag">#${tag}</span>`).join('') : '';

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <div class="project-header">
                    <i data-lucide="folder" class="folder-icon"></i>
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
    const contactBtn = document.getElementById('contact-btn');
    if (profileData.personalInfo.email) {
        contactBtn.href = `mailto:${profileData.personalInfo.email}`;
    }
});
