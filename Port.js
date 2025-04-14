// theme toggle hack
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('.icon');

toggleBtn.onclick = function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.textContent = '🌙';
    } else {
        icon.textContent = '☀️';
    }
};

// smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// roll-out content toggle
const skillsBtn = document.getElementById('skills-btn');
const eduBtn = document.getElementById('edu-btn');
const skillsSection = document.getElementById('skills');
const eduSection = document.getElementById('education');

// position buttons below projects
window.onload = function() {
    const projectsSection = document.getElementById('projects');
    const sideButtons = document.getElementById('side-buttons');
    const projectsBottom = projectsSection.offsetTop + projectsSection.offsetHeight;
    sideButtons.style.top = projectsBottom + 'px';
};

skillsBtn.onclick = function() {
    skillsSection.classList.toggle('active');
    eduSection.classList.remove('active');
    if (skillsSection.classList.contains('active')) {
        document.querySelectorAll('#skills .progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
};

eduBtn.onclick = function() {
    eduSection.classList.toggle('active');
    skillsSection.classList.remove('active');
    if (skillsSection.classList.contains('active')) {
        document.querySelectorAll('#skills .progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
};