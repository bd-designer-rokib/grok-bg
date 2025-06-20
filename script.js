// Initialize tsparticles with stars only
tsParticles.load("tsparticles", {
  background: {
    color: "#000000",
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.1, max: 0.7 },
      animation: { enable: true, speed: 0.3, minimumValue: 0.1, sync: false },
    },
    size: { value: { min: 1, max: 2 }, animation: { enable: false } },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.3 },
      direction: "bottom",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    twinkle: {
      particles: {
        enable: true,
        color: "#ffffff",
        frequency: 0.05,
        opacity: 0.7,
      },
    },
    links: { enable: false },
  },
  detectRetina: true,
});

// Comet code
const sky = document.getElementById("sky");

function createComet() {
  const comet = document.createElement("div");
  comet.className = "comet";

  // Random horizontal start position across viewport width
  const startX = Math.random() * window.innerWidth;
  comet.style.left = `${startX}px`;
  comet.style.top = `0px`;

  sky.appendChild(comet);

  // Remove comet after animation ends
  comet.addEventListener("animationend", () => comet.remove());
}

// Create comet every 5 seconds
setInterval(() => {
  if (document.querySelectorAll(".comet").length === 0) {
    createComet();
  }
}, 5000);
