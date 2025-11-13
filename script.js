// =========================
// Snowflakes
// =========================
const snowContainer = document.getElementById('snowflakes');
const snowCount = 70;

for (let i = 0; i < snowCount; i++) {
    let snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.fontSize = 10 + Math.random() * 15 + 'px';
    snow.style.animationDuration = 8 + Math.random() * 5 + 's';
    snow.style.opacity = 0.5 + Math.random() * 0.5;
    snow.innerHTML = '❄';
    snowContainer.appendChild(snow);

    snow.animate([
        { transform: `translateY(-50px)`, opacity: snow.style.opacity },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: (8 + Math.random() * 5) * 1000,
        iterations: Infinity,
        delay: Math.random() * 5000
    });
}

// =========================
// Skills animation
// =========================
const skills = [95, 70, 80]; // HTML/CSS, JS, Python
document.querySelectorAll('.skill-circle .progress').forEach((circle, i) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (skills[i]/100)*circumference;
});

// =========================
// Navbar scroll active link
// =========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

// =========================
// Scroll-down arrow animation
// =========================
const arrowDots = document.querySelectorAll('.arrow-dot');
function animateArrow() {
    arrowDots.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.opacity = 1;
            dot.animate([
                { transform: 'translateY(0px)', opacity: 1 },
                { transform: 'translateY(20px)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-in-out'
            });
            setTimeout(() => dot.style.opacity = 0, 1000);
        }, index * 150);
    });
}

// Repeat every 5 seconds
setInterval(animateArrow, 5000);
animateArrow();
