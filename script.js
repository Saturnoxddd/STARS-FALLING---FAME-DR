// Estrelinhas caindo ✨
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];

function criarEstrelas() {
  for (let i = 0; i < 120; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      d: Math.random() * 1.2,
    });
  }
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.shadowBlur = 8;
  ctx.shadowColor = "#a2d2ff";
  for (let s of estrelas) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  mover();
}

function mover() {
  for (let s of estrelas) {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.x = Math.random() * canvas.width;
      s.y = 0;
    }
  }
}

function animar() {
  desenhar();
  requestAnimationFrame(animar);
}

criarEstrelas();
animar();
