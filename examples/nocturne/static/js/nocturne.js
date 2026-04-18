document.addEventListener('DOMContentLoaded', () => {
    const notes = ['♩', '♪', '♫', '♬', '♭', '♮', '♯'];
    const container = document.body;

    function createNote(x, y) {
        const note = document.createElement('div');
        note.className = 'floating-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = x + 'px';
        note.style.top = y + 'px';
        note.style.position = 'fixed';
        note.style.pointerEvents = 'none';
        note.style.color = 'var(--primary)';
        note.style.fontSize = (Math.random() * 20 + 10) + 'px';
        note.style.opacity = '0.6';
        note.style.zIndex = '9999';
        note.style.transition = 'all 2s ease-out';

        container.appendChild(note);

        setTimeout(() => {
            note.style.transform = `translate(${(Math.random() - 0.5) * 200}px, -${Math.random() * 200 + 50}px) rotate(${Math.random() * 360}deg)`;
            note.style.opacity = '0';
        }, 10);

        setTimeout(() => {
            note.remove();
        }, 2000);
    }

    let lastX = 0;
    let lastY = 0;

    window.addEventListener('scroll', () => {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        if (Math.random() > 0.8) {
            createNote(x, y);
        }
    });

    document.addEventListener('keydown', (e) => {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight - 50;
        createNote(x, y);
    });
});
