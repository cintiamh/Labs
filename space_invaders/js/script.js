// global variables
var canvas;
var ctx;
var aliens = new Array();
var createdAliens = false;
var alien_height = 32;
var alien1_width = 32;
var alien2_width = 44;
var alien3_width = 48;
var space_btw_h = 16;
var space_btw_v = 24;
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

    createAliens();
    drawAliens();
});

function AlienObj(x, y) {
    this.x = x;
    this.y = y;
    this.destroyed = false;
}

function mainLoop() {
    //createAliens();
    //drawAliens();
}

function createAliens() {
    for (var i = 0; i < 11; i++) {
        alert("creteAliens i: " + i);
        aliens[i] = new AlienObj(i * (space_btw_h + alien3_width) + (alien3_width - alien1_width) / 2, 0);
        aliens[i + 12] = new AlienObj(i * (space_btw_h + alien3_width) + (alien3_width - alien1_width) / 2, space_btw_v + alien_height);
        aliens[i + 2*12] = new AlienObj(i * (space_btw_h + alien3_width) + (alien3_width - alien1_width) / 2, 2*(space_btw_v + alien_height));
        //aliens[i] = new AlienObj(j * (space_btw_h + alien3_width) + (alien3_width - alien2_width) / 2, i * (space_btw_v + alien_height));
        //aliens[i] = new AlienObj(j * (space_btw_h + alien3_width), i * (space_btw_v + alien_height));
    }
}

function updateAliens() {

}

function drawAliens() {
    alien1a_img.onload = function() {
        for (var i = 0; i < 11; i++) {
            if (!aliens[i][0].destroyed) {
                ctx.drawImage(alien1a_img, aliens[i][0].x, aliens[i][0].y);
            }
        }
    };
        /*alien1a_img.onload = function(){
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
        }*/
}