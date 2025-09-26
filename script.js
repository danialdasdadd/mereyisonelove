// === Эффект печатающейся строки ===
const text = "Моё сердце принадлежит тебе";
const typedTextElem = document.getElementById('typed-text');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedTextElem.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// === Падающие лепестки роз на canvas ===
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}
window.addEventListener('resize', resize);
resize();

class Petal {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * -H;
    this.size = 10 + Math.random() * 20;
    this.speed = 1 + Math.random() * 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.angleSpeed = 0.01 + Math.random() * 0.02;
    this.opacity = 0.5 + Math.random() * 0.5;
    this.wind = 0.5 - Math.random(); // -0.5 .. +0.5
  }
  update() {
    this.y += this.speed;
    this.x += this.wind;
    this.angle += this.angleSpeed;
    if (this.y > H) this.reset();
    if (this.x > W) this.x = 0;
    if (this.x < 0) this.x = W 
}
}