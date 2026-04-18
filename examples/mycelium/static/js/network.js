// network.js
const canvas = document.getElementById('mycelium-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let nodes = [];
let maxDistance = 150;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Node {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.pulsePhase += 0.02;
    }

    draw() {
        let alpha = this.baseAlpha + Math.sin(this.pulsePhase) * 0.3;
        if (alpha < 0) alpha = 0;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#4ade80';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
    }
}

function initNodes() {
    nodes = [];
    let numNodes = Math.floor((width * height) / 15000);
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
    }
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                let opacity = 1 - (distance / maxDistance);
                // Glowing network lines
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);

                // Pulsating effect for lines based on connected nodes
                let pulse = (Math.sin(nodes[i].pulsePhase) + Math.sin(nodes[j].pulsePhase)) / 2;
                let lineAlpha = opacity * (0.1 + pulse * 0.1);

                ctx.strokeStyle = `rgba(45, 212, 191, ${lineAlpha})`; // Teal accent
                ctx.lineWidth = opacity * 1.5;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Dark mysterious background
    ctx.fillStyle = '#030a05';
    ctx.fillRect(0, 0, width, height);

    drawConnections();

    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    requestAnimationFrame(animate);
}

initNodes();
animate();

// Add interaction
canvas.addEventListener('mousemove', (e) => {
    // Optional: Make nodes move slightly towards mouse to simulate biological attraction
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    nodes.forEach(node => {
        let dx = mouseX - node.x;
        let dy = mouseY - node.y;
        let dist = Math.sqrt(dx*dx + dy*dy);

        if(dist < 100) {
            node.x += dx * 0.01;
            node.y += dy * 0.01;
        }
    });
});
