document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const trail = document.querySelector('.cursor-trail');
    if (!cursor || !trail) return;

    let mouseX = 0,
        mouseY = 0;
    let cursorX = 0,
        cursorY = 0;
    let trailX = 0,
        trailY = 0;
    const cursorSpeed = 0.18;
    const trailSpeed = 0.08;
    let started = false;

    window.addEventListener('mousemove', (e) => {
        if (!started) {
            cursorX = e.clientX;
            cursorY = e.clientY;
            trailX = e.clientX;
            trailY = e.clientY;
            cursor.style.opacity = '1';
            trail.style.opacity = '0.5';
            started = true;
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * cursorSpeed;
        cursorY += (mouseY - cursorY) * cursorSpeed;
        trailX += (mouseX - trailX) * trailSpeed;
        trailY += (mouseY - trailY) * trailSpeed;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        trail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animate);
    }

    animate();

    const interactive = document.querySelectorAll('a, button, li, input, .product-card__info');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            trail.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            trail.classList.remove('active');
        });
    });
});