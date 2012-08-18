$(document).ready(function(){
	
	canvas = document.getElementById("canvas");
	
	canvas.width = canvasw;
	canvas.height = canvash;
	
	setInterval(loop, 30);
});

// global variables
var canvas;
var particles = [];
var tick = 0;
var canvasw = 900;
var canvash = 500;

function loop() {
	createParticles();
	updateParticles();
	killParticles();
	drawParticles();
}

function createParticles() {
	// check on every 10th tick check
	if (tick % 10 == 0) {
		// add particle if fewer than 100
		if (particles.length < 100) {
			particles.push({
				x: Math.random()*canvas.width,
				y: 0,
				speed: 2 + Math.random() * 3,
				radius: 5 + Math.random() * 5,
				color: "#FFFFFF"
			});
		}
	}
}

function updateParticles() {
	for (var i in particles) {
		var part = particles[i];
		part.y += part.speed;
	}
}

function killParticles() {
	for (var i in particles) {
		var part = particles[i];
		if (part.y > canvas.height) {
			part.x = Math.random()*canvas.width;
			part.y = 0;
			part.speed = 2 + Math.random() * 3;
			part.radius = 5 + Math.random() * 5;
		}
	}
}

function drawParticles() {
	var ctx = canvas.getContext("2d");
	
	// draw background
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvasw, canvash);
	
	ctx.globalAlpha = 60/100;
	
	for (var i in particles) {
		var part = particles[i];
		ctx.beginPath();
		ctx.arc(part.x, part.y, part.radius, 0, Math.PI*2);
		ctx.closePath();
		ctx.fillStyle = part.color;
		ctx.fill();
	}
	
	ctx.globalAlpha = 1.0;
}