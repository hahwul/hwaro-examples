document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sakura-container");
  const numPetals = 40;

  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    // Randomize size, position, and animation duration
    const size = Math.random() * 8 + 4; // 4px to 12px
    const left = Math.random() * 100; // 0% to 100% vw
    const duration = Math.random() * 10 + 5; // 5s to 15s
    const delay = Math.random() * 10; // 0s to 10s

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.2}px`;
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    container.appendChild(petal);
  }
});