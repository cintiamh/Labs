// global variables
var canvas;
var ctx;
var aliens;

$(document).ready(function(){
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	// draw background
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var image = document.getElementById("img_alien1a");
	ctx.drawImage(image, canvas.width/2, canvas.height/2);
});
