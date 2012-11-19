// global variables
var canvas;
var ctx;
var WIDTH = 800;
var HEIGHT = 600;
var PAD_WIDTH = 20;
var PAD_HEIGHT = 100;
var ball_pos = [WIDTH/2, HEIGHT/2];
var ball_radius = 15;
var ball_vel = [1, -1];
var pad1_pos = [PAD_WIDTH/2, HEIGHT/2];
var pad2_pos = [WIDTH - PAD_WIDTH/2, HEIGHT/2];
var pad1_vel = [0, 0];
var pad2_vel = [0, 0]
var pad_speed = 2;
var ball_speed = 1;

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawRect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function drawTable() {
    ctx.beginPath();
    ctx.moveTo(WIDTH/2, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, HEIGHT);
    ctx.lineTo(WIDTH, HEIGHT);
    ctx.lineTo(WIDTH, 0);
    ctx.lineTo(WIDTH/2, 0);
    ctx.lineTo(WIDTH/2, HEIGHT);
    ctx.moveTo(PAD_WIDTH, 0);
    ctx.lineTo(PAD_WIDTH, HEIGHT);
    ctx.moveTo(WIDTH - PAD_WIDTH, 0);
    ctx.lineTo(WIDTH - PAD_WIDTH, HEIGHT);
    ctx.closePath();
    ctx.stroke();
}

function checkKeyDown(event) {
    switch(event.keyCode) {
        // Up arrow
        case 38:
            pad2_vel[1] = -pad_speed;
            break;
        // Down arrow
        case 40:
            pad2_vel[1] = pad_speed;
            break;
        // W
        case 87:
            pad1_vel[1] = -pad_speed;
            break;
        // S
        case 83:
            pad1_vel[1] = pad_speed;
            break;
    }
}

function checkKeyUp(event) {
    switch(event.keyCode) {
        case 38: // Up arrow
            pad2_vel[1] = 0;
            break;
        case 40: // Down arrow
            pad2_vel[1] = 0;
            break;
        case 87: // W
            pad1_vel[1] = 0;
            break;
        case 83: // S
            pad1_vel[1] = 0;
            break;
    }
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
    canvas = document.getElementById("game_window");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}

function initBall() {
    ball_pos = [WIDTH/2, HEIGHT/2];
}

function updateBallPosition() {
    // check collision with top and bottom
    if ((ball_pos[1] <= ball_radius) || (ball_pos[1] >= (HEIGHT - ball_radius))) {
        ball_vel[1] = -ball_vel[1];
    }

    // check collision with gutter
    // left side
    if (ball_pos[0] - ball_radius <= PAD_WIDTH) {
        if (ball_pos[1] >= pad1_pos[1] - PAD_HEIGHT/2 && ball_pos[1] <= pad1_pos[1] + PAD_HEIGHT/2) {
            ball_vel[0] = -ball_vel[0];
        }
        else {
            ball_vel = [1, -1];
            initBall();
        }
    }
    // right side
    if (ball_pos[0] + ball_radius >= WIDTH - PAD_WIDTH) {
        if (ball_pos[1] >= pad2_pos[1] - PAD_HEIGHT/2 && ball_pos[1] <= pad2_pos[1] + PAD_HEIGHT/2) {
            ball_vel[0] = -ball_vel[0];
        }
        else {
            ball_vel = [-1, -1];
            initBall();
        }
    }

    ball_pos[0] += ball_vel[0];
    ball_pos[1] += ball_vel[1];
}

function updatePadsPositions() {
    // Just updates the positions if inside the limits
    // Left paddle
    // top limit
    if (pad1_pos[1] + pad1_vel[1] - (PAD_HEIGHT / 2) > 0 && pad1_pos[1] + pad1_vel[1] + (PAD_HEIGHT / 2) < HEIGHT) {
        pad1_pos[1] += pad1_vel[1];
    }

    // Right paddle
    // top limit
    if (pad2_pos[1] + pad2_vel[1] - (PAD_HEIGHT / 2) > 0 && pad2_pos[1] + pad2_vel[1] + (PAD_HEIGHT / 2) < HEIGHT) {
        pad2_pos[1] += pad2_vel[1];
    }
}

function draw() {
    clear();
    ctx.fillStyle = "#000000";
    drawRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#FFFFFF";
    drawTable();

    updateBallPosition();
    updatePadsPositions();

    drawCircle(ball_pos[0], ball_pos[1], ball_radius);
    // left paddle
    drawRect(0, pad1_pos[1] - PAD_HEIGHT/2, PAD_WIDTH, PAD_HEIGHT);
    // right paddle
    drawRect(WIDTH - PAD_WIDTH, pad2_pos[1] - PAD_HEIGHT/2, PAD_WIDTH, PAD_HEIGHT);
}

init();

window.addEventListener('keydown', checkKeyDown, true);
window.addEventListener('keyup', checkKeyUp, true);