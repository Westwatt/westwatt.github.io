const canvas = document.getElementById("energyChart");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 200;

let points = Array.from({ length: 30 }, () => Math.random() * 100);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "#4fc3f7";
  ctx.lineWidth = 2;

  points.forEach((p, i) => {
    const x = (i / (points.length - 1)) * canvas.width;
    const y = canvas.height - p * 1.5;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();

  points.shift();
  points.push(50 + Math.random() * 50);
}

setInterval(draw, 800);
