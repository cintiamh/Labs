// fist set of random numbers.
var monthData = createRandomNumArray(12);
var pieData = createRandomNumArray(6);

$(document).ready(function() {

	drawBarChart('canvas');
	drawLineChart('line_canvas');
	drawPieChart();
});

function generateNumber(min, max) {
	var range = max - min;
	return Math.round(min + Math.random() * range); 
}

function createRandomNumArray(len) {
	var numArray = new Array();
	
	for (var i = 0; i < len; i++) {
		numArray[i] = generateNumber(0, 100);
	}
	
	return numArray;
}

function drawBarChart(canvas_name) {
	// input number values
	var canvasw = 900;
	var canvash = 500;
	var gPadding = 40;
	
	// calculated values
	var barSpace = (canvasw - 2 * gPadding) / monthData.length;
	var barWidth = Math.floor(barSpace * 0.8);
	var barHeightUnit = Math.round((canvash - 2 * gPadding) / 100);
	var topDiff = canvash - barHeightUnit * 100 - gPadding;
	var iniPosX = (barSpace - barWidth) / 2;
	
	var canvas = document.getElementById(canvas_name);
	var c = canvas.getContext("2d");
	canvas.width = canvasw;
	canvas.height = canvash;
	
	// draw background
	c.fillStyle = "#333333";
	c.fillRect(0, 0, canvasw, canvash);
	
	// draw bar chart boxes
	var monthLen = monthData.length;
	for ( var i = 0; i < monthData.length; i++) {
		var dp = monthData[i];
		c.fillStyle = "#0F67A1";
		c.fillRect(gPadding + i * barSpace + iniPosX, canvash - gPadding - dp * barHeightUnit, barWidth, dp * barHeightUnit);
		c.fillStyle = "#eeeeee";
		var text = monthData[i] + "";
		var txtWidth = c.measureText(text).width;
		c.fillText(monthData[i], gPadding + i * barSpace + barSpace/2 - txtWidth/2, canvash - gPadding - dp * barHeightUnit - 5);
	}

	// draw axis lines
	c.strokeStyle = "#eeeeee";
	c.lineWidth = 2.0;
	c.beginPath();
	c.moveTo(gPadding, gPadding);
	c.lineTo(gPadding, canvash - gPadding);
	c.lineTo(canvasw - gPadding, canvash - gPadding);
	c.stroke();

	// draw text and vertical lines
	c.fillStyle = "#eeeeee";
	for ( var i = 0; i < 6; i++) {
		c.fillText((5 - i) * 20 + "", 10, i * barHeightUnit * 20 + topDiff);
		c.beginPath();
		c.moveTo(gPadding - 5, i * barHeightUnit * 20 + topDiff);
		c.lineTo(gPadding, i * barHeightUnit * 20 + topDiff);
		c.stroke();
	}

	var labels = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
	for ( var i = 0; i < labels.length; i++) {
		var txtWidth = c.measureText(labels[i]).width;
		c.fillText(labels[i], gPadding + i * barSpace + barSpace/2 - txtWidth/2, canvash - gPadding/2);
	}
}

function drawLineChart(canvas_name) {
	// input number values
	var canvasw = 900;
	var canvash = 500;
	var gPadding = 40;
	var pRadius = 2;
	
	// calculated values
	var barSpace = (canvasw - 2 * gPadding) / monthData.length;
	var barHeightUnit = Math.round((canvash - 2 * gPadding) / 100);
	var topDiff = canvash - barHeightUnit * 100 - gPadding;
	
	var canvas = document.getElementById(canvas_name);
	var c = canvas.getContext("2d");
	canvas.width = canvasw;
	canvas.height = canvash;
	
	// draw background
	c.fillStyle = "#333333";
	c.fillRect(0, 0, canvasw, canvash);
	
	// draw chart points
	for ( var i = 0; i < monthData.length; i++) {
		var dp = monthData[i];
		c.fillStyle = "#0F67A1";
		//c.fillRect(gPadding + i * barSpace + iniPosX, canvash - gPadding - dp * barHeightUnit, barWidth, dp * barHeightUnit);
		c.beginPath();
		c.arc(gPadding + i * barSpace + iniPosX, canvash - gPadding - dp * barHeightUnit, pRadius, 0, Math.PI * 2, true);
		c.closePath();
		c.fill();
		c.fillStyle = "#eeeeee";
		var text = monthData[i] + "";
		var txtWidth = c.measureText(text).width;
		c.fillText(monthData[i], gPadding + i * barSpace + barSpace/2 - txtWidth/2, canvash - gPadding - dp * barHeightUnit - 5);
	}

	// draw axis lines
	c.strokeStyle = "#eeeeee";
	c.lineWidth = 2.0;
	c.beginPath();
	c.moveTo(gPadding, gPadding);
	c.lineTo(gPadding, canvash - gPadding);
	c.lineTo(canvasw - gPadding, canvash - gPadding);
	c.stroke();

	// draw text and vertical lines
	c.fillStyle = "#eeeeee";
	for ( var i = 0; i < 6; i++) {
		c.fillText((5 - i) * 20 + "", 10, i * barHeightUnit * 20 + topDiff);
		c.beginPath();
		c.moveTo(gPadding - 5, i * barHeightUnit * 20 + topDiff);
		c.lineTo(gPadding, i * barHeightUnit * 20 + topDiff);
		c.stroke();
	}

	var labels = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
	for ( var i = 0; i < labels.length; i++) {
		var txtWidth = c.measureText(labels[i]).width;
		c.fillText(labels[i], gPadding + i * barSpace + barSpace/2 - txtWidth/2, canvash - gPadding/2);
	}
}

function drawPieChart() {
	var pieData = [ 100, 68, 20, 30, 100 ];

	var pieCanvas = document.getElementById('piechart');
	var pieC = pieCanvas.getContext("2d");

	pieC.fillStyle = "white";
	pieC.fillRect(0, 0, 500, 500);

	var colors = [ "orange", "green", "blue", "yellow", "teal" ];

	var total = 0;
	for ( var i = 0; i < pieData.length; i++) {
		total += pieData[i];
	}

	// draw pie data

	var prevAngle = 0;
	for ( var i = 0; i < pieData.length; i++) {
		var fraction = pieData[i] / total;
		var angle = prevAngle + fraction * Math.PI * 2;

		//pieC.fillStyle = colors[i];

		var grad = pieC.createRadialGradient(250, 250, 10, 250, 250, 100);
		grad.addColorStop(0, "white");
		grad.addColorStop(1, colors[i]);
		pieC.fillStyle = grad;

		pieC.beginPath();
		pieC.moveTo(250, 250);
		pieC.arc(250, 250, 100, prevAngle, angle, false);
		pieC.lineTo(250, 250);

		pieC.fill();

		pieC.strokeStyle = "black";
		pieC.stroke();

		prevAngle = angle;
	}

	// draw centered text
	pieC.fillStyle = "black";
	pieC.font = "24pt sans-serif";
	var text = "Sales Data from 2012";
	var metrics = pieC.measureText(text);
	pieC.fillText(text, 250 - metrics.width / 2, 400);
}