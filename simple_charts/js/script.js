$(document).ready(function() {

	var data = [ 16, 68, 20, 30, 54 ];
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext("2d");
	c.fillStyle = "white";
	c.fillRect(0, 0, 500, 500);

	c.fillStyle = "blue";
	for ( var i = 0; i < data.length; i++) {
		var dp = data[i];
		c.fillRect(40 + i * 100, 460 - dp * 5, 50, dp * 5);
	}

	// draw axis lines
	c.fillStyle = "black";
	c.lineWidth = 2.0;
	c.beginPath();
	c.moveTo(30, 10);
	c.lineTo(30, 460);
	c.lineTo(490, 460);
	c.stroke();

	// draw text and vertical lines
	c.fillStyle = "black";
	for ( var i = 0; i < 6; i++) {
		c.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
		c.beginPath();
		c.moveTo(25, i * 80 + 60);
		c.lineTo(30, i * 80 + 60);
		c.stroke();
	}

	var labels = [ "JAN", "FEB", "MAR", "APR", "MAY" ];
	for ( var i = 0; i < 5; i++) {
		c.fillText(labels[i], 50 + i * 100, 475);
	}

	//
	// Pie Chart
	//

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
});