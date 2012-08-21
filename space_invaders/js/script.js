// global variables
var canvas;
var ctx;
var aliens;
var createdAliens = false;
var alien1a_img;
var alien1b_img;
var alien2a_img;
var alien2b_img;
var alien3a_img;
var alien3b_img;

$(document).ready(function(){
	
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	
	// draw background
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

    alien1a_img = document.getElementById("img_alien1a");
    alien1b_img = document.getElementById("img_alien1b");
    alien2a_img = document.getElementById("img_alien2a");
    alien2b_img = document.getElementById("img_alien2b");
    alien3a_img = document.getElementById("img_alien3a");
    alien3b_img = document.getElementById("img_alien3b");


	/*
    aliens_imgs[0].onload = function() {
        aliens_loaded[0] = true;
    };
    aliens_imgs[1].onload = function() {
        aliens_loaded[1] = true;
    };
    aliens_imgs[2].onload = function() {
        aliens_loaded[2] = true;
    };
    aliens_imgs[3].onload = function() {
        aliens_loaded[3] = true;
    };
    aliens_imgs[4].onload = function() {
        aliens_loaded[4] = true;
    };
    aliens_imgs[5].onload = function() {
        aliens_loaded[5] = true;
    };*/

    //createAliens();
    drawAliens(0, 0);
    //setInterval(mainLoop, 30);
});

function mainLoop() {
    //createAliens();
    //drawAliens();
}

function createAliens() {
    if (!createdAliens) {
        var img_id;
        var img_width;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 11; j++) {
                if (i == 0) {
                    img_id = 1;
                    img_width = 32;
                    alien1a_img.onload = function(){
                        ctx.drawImage(alien1a_img, i * (32 + 24), j * (48 + 16));
                    };
                }
                else if (i == 1 || i == 2) {
                    img_id = 2;
                    img_width = 44;
                    alien2a_img.onload = function(){
                        ctx.drawImage(alien2a_img, i * (32 + 24), j * (48 + 16));
                    };
                }
                else if (i == 3 || i == 4) {
                    img_id = 3;
                    img_width = 48;
                    alien3a_img.onload = function(){
                        ctx.drawImage(alien3a_img, i * (32 + 24), j * (48 + 16));
                    };
                }
                //alert("createdAliens id: " + img_id + ", w: " + img_width + ", i: " + i + ", j: " + j);
                //aliens.push ({
                    //x: i * (32 + 24),
                    //y: j * (48 + 16),
                    //w: img_width,
                    //h: 32,
                    //img: img_id
                //});
            }
        }
        createdAliens = true;
    }
}

function updateAliens() {

}

function drawAliens(xPos, yPos) {
    if (xPos % 2 == 0) {
        alien1a_img.onload = function(){
            for (var i = 0; i < 11; i++) {
                ctx.drawImage(alien1a_img, i * (32 + 24), 0);
            }
        };
        alien2a_img.onload = function() {
            for (var i = 1; i < 3; i++) {
                for (var j = 0; j < 11; j++) {
                    ctx.drawImage(alien2a_img, j * (32 + 24), i * (48 + 16));
                }
            }
        }
        alien3a_img.onload = function() {
            for (var i = 3; i < 5; i++) {
                for (var j = 0; j < 11; j++) {
                    ctx.drawImage(alien3a_img, j * (32 + 24), i * (48 + 16));
                }
            }
        }
    }
}