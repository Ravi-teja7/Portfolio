document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('isLoggedIn')) {
        document.getElementById('logout-btn').style.display = 'none';
    } else {
        document.getElementById('logout-btn').style.display = 'block';
    }

    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Load progress from localStorage
    document.querySelectorAll('.progress-value').forEach(span => {
        const courseId = span.getAttribute('data-course');
        const savedProgress = localStorage.getItem(`progress-${courseId}`) || '0';
        span.textContent = savedProgress + '%';
    });

    // Handle Start Learning button click
    document.querySelectorAll('.start-learning').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = link.getAttribute('data-course');
            console.log('Clicked Start Learning for:', courseId);
            if (!localStorage.getItem('isLoggedIn')) {
                alert('Please login to continue');
                window.location.href = 'login.html';
            } else {
                window.location.href = `course.html?course=${courseId}`;
            }
        });
    });

    console.log("E-Learn Hub Loaded!");
});