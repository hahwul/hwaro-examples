document.addEventListener('DOMContentLoaded', () => {
    const drops = document.querySelectorAll('.drop');
    const centerMass = document.querySelector('.center-mass');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;

        // Attraction effect for smaller drops
        drops.forEach((drop, index) => {
            const rect = drop.getBoundingClientRect();
            const dropX = rect.left + rect.width / 2;
            const dropY = rect.top + rect.height / 2;

            const diffX = clientX - dropX;
            const diffY = clientY - dropY;

            const distance = Math.sqrt(diffX * diffX + diffY * diffY);
            const force = Math.max(0, (400 - distance) / 400);

            const moveX = diffX * force * 0.1;
            const moveY = diffY * force * 0.1;

            drop.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // Slight reaction for center mass
        if (centerMass) {
            const rect = centerMass.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const diffX = clientX - centerX;
            const diffY = clientY - centerY;

            const distance = Math.sqrt(diffX * diffX + diffY * diffY);
            const force = Math.max(0, (600 - distance) / 600);

            centerMass.style.transform = `translate(calc(-50% + ${diffX * force * 0.05}px), calc(-50% + ${diffY * force * 0.05}px))`;
        }
    });

    console.log("Magnetic field active. Ferrofluid responsive.");
});
