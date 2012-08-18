// fist set of random numbers.
var monthData = createRandomNumArray(12);
var pieData = createRandomNumArray(6);

$(document).ready(function(){
	refreshData();
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

function refreshData() {
	monthData = createRandomNumArray(12);
	pieData = createRandomNumArray(6);
	
	drawBarChart('canvas');
	drawLineChart('line_canvas');
	drawPieChart();
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
	var pRadius = 3;
	
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
	
	// draw lines connecting points
	c.strokeStyle = "#5CB3FF";
	c.lineWidth = 1.0;
	c.beginPath();
	
	for (var j = 0; j < monthData.length; j++) {
		var xPos = gPadding + j * barSpace + barSpace / 2;
		var yPos = canvash - gPadding - monthData[j] * barHeightUnit;
		
		if (i === 0) {
			c.moveTo(xPos, yPos);
		} else  {
			c.lineTo(xPos, yPos);
		}
	}
	
	c.stroke();
	c.closePath();
	
	// draw chart points
	for ( var i = 0; i < monthData.length; i++) {
		var dp = monthData[i];
		var xPos = gPadding + i * barSpace + barSpace/2;
		var yPos = canvash - gPadding - dp * barHeightUnit;
		c.fillStyle = "#0F67A1";
		
		c.beginPath();
		c.arc(xPos, yPos, pRadius, 0, Math.PI*2, true);
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

	var pieCanvas = document.getElementById('piechart');
	var pieC = pieCanvas.getContext("2d");
	
	var darkColors = ["#C11B17", "#F76541", "#FDD017", "#348017", "#153E7E", "#F6358A"];
	var lightColors = ["#E77471", "#F9966B", "#FFFF00", "#5EFB6E", "#1589FF", "#F9B7FF"];

	pieC.fillStyle = "#333333";
	pieC.fillRect(0, 0, 500, 500);

	var total = 0;
	for ( var i = 0; i < pieData.length; i++) {
		total += pieData[i];
	}

	// draw pie data
	var prevAngle = 0;
	for ( var i = 0; i < pieData.length; i++) {
		var fraction = pieData[i] / total;
		var angle = prevAngle + fraction * Math.PI * 2;

		var grad = pieC.createRadialGradient(250, 250, 10, 250, 250, 100);
		grad.addColorStop(0, lightColors[i]);
		grad.addColorStop(1, darkColors[i]);
		pieC.fillStyle = grad;

		pieC.beginPath();
		pieC.moveTo(250, 250);
		pieC.arc(250, 250, 100, prevAngle, angle, false);
		pieC.lineTo(250, 250);

		pieC.fill();

		pieC.strokeStyle = "#FFFFFF";
		pieC.stroke();

		prevAngle = angle;
	}

	// draw centered text
	pieC.fillStyle = "#FFFFFF";
	pieC.font = "24pt sans-serif";
	var text = "Sales Data from 2012";
	var metrics = pieC.measureText(text);
	pieC.fillText(text, 250 - metrics.width / 2, 400);
}