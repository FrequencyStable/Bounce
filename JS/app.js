const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 10;
ctx.arc(200, 0, 100, Math.PI * 2, false);
ctx.strokeStyle = 'orange';
ctx.stroke();

const height = window.innerHeight;
const width = window.innerWidth;

const randX = Math.floor(Math.random() * (300 - 20 + 1) + 20 )
const randY = Math.floor(Math.random() * (800 - 30 + 1) + 30 )
let Y = randY;
let X = randX;

let Yincrement = 7;
let Xincrement = 7;

function animation() {
  requestAnimationFrame(animation);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  Y += Yincrement;
  X += Xincrement;

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.arc(X, Y, 20, Math.PI * 2, false);
  ctx.strokeStyle = 'orange';
  ctx.lineWidth = 12;
  ctx.stroke();
  
  
  if (Y >= height - 20 || Y <= 20) {
    Yincrement = -Yincrement; // Reverse the increment to change direction

  }
  if ( X>= width - 30 || X <= 30) {
    Xincrement = -Xincrement; // Reverse the increment to change direction

  }
}

animation();










// var x = 200;
// var speed = 8;
// var radius = 100;

// function animation() {
//   requestAnimationFrame(animation);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   ctx.beginPath();
//   ctx.arc(x, 500, radius, 0, Math.PI * 2, false);
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();
  
//   // Calculate the text position inside the circle
//   const text = 'shesh';
//   const textWidth = ctx.measureText(text).width;
//   const textX = x - textWidth / 2; // Center the text horizontally
//   const textY = 500 + 10; // Adjust this value for vertical positioning
  
//   // Set font style and size
//   ctx.font = '40px Arial';
//   ctx.fillStyle = 'white';
  
//   // Display text on the canvas
//   ctx.fillText(text, textX, textY);
//   if (x > innerWidth) {
//     speed = -speed;
//   } else if (x === 0) {
//     speed = Math.abs(speed);
//   }
//   x += speed;
// }

// animation();






