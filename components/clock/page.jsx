"use client";

import { useEffect, useRef } from "react";

export default function Clock({ image }) {
  
  const canvasRef = useRef(null);
 
useEffect(() => {

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

let radius = canvas.width / 2;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
 

  const bg = new Image();
  bg.src = image;

function drawClock() {



ctx.setTransform(1,0,0,1,0,0);

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.translate(centerX - 1.5, centerY - 1.5);


ctx.beginPath();
ctx.arc(0, 0, radius, 0, Math.PI * 2);
ctx.closePath();
ctx.clip();

ctx.drawImage(
  bg,
  -radius,
  -radius,
  radius * 2,
  radius * 2
);

  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

  bg.onload = () => {
  drawClock();
};

  const interval = setInterval(drawClock, 1000);

  return () => clearInterval(interval);

}, []);


function drawFace(ctx, radius) {

  var grad;

  ctx.fillStyle = "rgba(0,0,0,.35)";
  ctx.fill();

  grad = ctx.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );

  grad.addColorStop(0, "#fff");
  grad.addColorStop(0.5, "black");
  grad.addColorStop(1, "#fff");

  ctx.lineWidth = radius * 0.01;
  ctx.stroke();

} // 🔥 THIS WAS MISSING



  function drawNumbers(ctx, radius) {

    let ang;
    let num;

    ctx.font = radius * 0.12 + "px serif";

    ctx.textBaseline = "middle";

    ctx.textAlign = "center";

    for (num = 0; num < 10; num++) {

  ang = num * Math.PI / 5;

  ctx.rotate(ang);

  ctx.translate(0, -radius * 0.85);

  ctx.rotate(-ang);

  ctx.fillStyle = "#fff";

  ctx.fillText(num.toString(), 0, 0);

  ctx.rotate(ang);

  ctx.translate(0, radius * 0.85);

  ctx.rotate(-ang);
}
  }




  function drawTime(ctx, radius) {

    const now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let second = now.getSeconds();



    hour = hour % 12;

    hour =
      (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));

    drawHand(ctx, hour, radius * 0.5, radius * 0.03);



    minute =
      (minute * Math.PI / 30) +
      (second * Math.PI / (30 * 60));

    drawHand(ctx, minute, radius * 0.75, radius * 0.02);



    second = second * Math.PI / 30;

    drawHand(ctx, second, radius * 0.9, radius * 0.01);
  }




function drawHand(ctx, pos, length, width) {

  ctx.save();

  ctx.beginPath();

  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#fff";

  ctx.rotate(pos);

  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);

  ctx.stroke();

  ctx.restore();
}



  return (

 <div className="clock-card"> 
      <canvas
        ref={canvasRef}
        width="260"
        height="260"
      />

    </div>
  );
}