document.addEventListener('DOMContentLoaded', () => {
    const hangingElements = document.querySelectorAll('.hanging-element');
    
    // Physics variables
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let isScrolling = false;
    let animationFrameId = null;

    // Set initial wire lengths based on data attributes
    const viewportHeight = window.innerHeight;
    hangingElements.forEach(el => {
        const wire = el.querySelector('.wire');
        const lengthFactor = parseFloat(el.getAttribute('data-length')) || 0.2;
        // Base wire length on viewport height to look like a mobile
        const wireLength = Math.max(50, viewportHeight * lengthFactor);
        wire.style.height = `${wireLength}px`;
        
        // Initialize pendulum state
        el.pendulum = {
            angle: 0,
            velocity: 0,
            weight: parseFloat(el.getAttribute('data-weight')) || 5, // Mass/Inertia
            length: wireLength,
            damping: 0.95 // Air resistance
        };
    });

    // Track scroll velocity
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        // Calculate velocity (difference in scroll position)
        scrollVelocity = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        
        if (!isScrolling) {
            isScrolling = true;
            updatePhysics();
        }
    }, { passive: true });

    // Physics update loop
    function updatePhysics() {
        let isMoving = false;
        const gravity = 0.5; // Spring force pulling back to center

        hangingElements.forEach(el => {
            const p = el.pendulum;
            
            // Check if element is in viewport to optimize
            const rect = el.getBoundingClientRect();
            const inViewport = (
                rect.top < window.innerHeight + 200 &&
                rect.bottom > -200
            );

            if (inViewport) {
                // Apply scroll force. 
                // Heavier items swing less, longer wires swing slower but further.
                // Scroll down pushes bottom up (positive angle), scroll up pushes bottom down (negative angle)
                const force = (scrollVelocity / p.weight) * (100 / p.length);
                
                // Add force to velocity, capped to prevent crazy spinning
                p.velocity += force;
                p.velocity = Math.max(-15, Math.min(15, p.velocity));

                // Apply gravity/spring force to pull back to center
                p.velocity -= p.angle * gravity * 0.1;

                // Apply damping
                p.velocity *= p.damping;

                // Update angle
                p.angle += p.velocity;

                // If still moving significantly, keep animating
                if (Math.abs(p.velocity) > 0.05 || Math.abs(p.angle) > 0.05) {
                    isMoving = true;
                    // Apply rotation
                    el.style.transform = `rotate(${p.angle}deg)`;
                } else {
                    // Settle perfectly
                    p.angle = 0;
                    p.velocity = 0;
                    el.style.transform = `rotate(0deg)`;
                }
            }
        });

        // Decay scroll velocity over time so it doesn't apply forever if scroll stops suddenly
        scrollVelocity *= 0.8;

        if (isMoving || Math.abs(scrollVelocity) > 0.1) {
            animationFrameId = requestAnimationFrame(updatePhysics);
        } else {
            isScrolling = false;
            cancelAnimationFrame(animationFrameId);
        }
    }
});