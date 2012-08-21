// global variables
var canvas;
var ctx;
var aliens;
var aliens_imgs;
var aliens_loaded;
var createdAliens = false;

$(document).ready(function(){
	
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	
	// draw background
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	/*aliens_imgs[0] = document.getElementById("img_alien1a");
    aliens_imgs[1] = document.getElementById("img_alien1b");
    aliens_imgs[2] = document.getElementById("img_alien2a");
    aliens_imgs[3] = document.getElementById("img_alien2b");
    aliens_imgs[4] = document.getElementById("img_alien3a");
    aliens_imgs[5] = document.getElementById("img_alien3b");

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

    setInterval(mainLoop, 30);
});

function mainLoop() {
    createAliens();
    drawAliens();
}

function createAliens() {
    if (!createdAliens) {
        var img_id;
        var img_width;
        var img_height = 32;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 11; j++) {
                if (i == 0) {
                    img_id = "img_alien1";
                    img_width = 32;
                }
                else if (i == 1 || i == 2) {
                    img_id = "img_alien2";
                    img_width = 44;
                }
                else if (i == 3 || i == 4) {
                    img_id = "img_alien3";
                    img_width = 48;
                }
                aliens.push ({
                    x: i * (32 + 24),
                    y: j * (48 + 16),
                    w: img_width,
                    h: img_height,
                    img: img_id
                });
            }
        }
    }
}

function updateAliens() {

}

function drawAliens() {
    var alien1_img = document.getElementById("img_alien1a");
    var alien2_img = document.getElementById("img_alien2a");
    var alien3_img = document.getElementById("img_alien3a");
    for (var i = 0; i < aliens.length; i++) {
        if (aliens[i].img_id == "img_alien1") {
            ctx.drawImage(alien1_img, aliens[i].x, aliens[i].y);
        }
    }
}