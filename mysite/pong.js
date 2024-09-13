const gameArea = document.getElementById('gameArea');
const paddleLeft = document.getElementById('paddleLeft');
const paddleRight = document.getElementById('paddleRight');
const ball = document.getElementById('ball');

const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;

const paddleWidth = paddleLeft.offsetWidth;
const paddleHeight = paddleLeft.offsetHeight;

const ballSize = ball.offsetWidth;

let paddleLeftY = (gameAreaHeight - paddleHeight) / 2;
let paddleRightY = (gameAreaHeight - paddleHeight) / 2;
let ballX = (gameAreaWidth - ballSize) / 2;
let ballY = (gameAreaHeight - ballSize) / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;
const paddleSpeed = 4;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (paddleLeftY > 0) paddleLeftY -= paddleSpeed;
            break;
        case 's':
            if (paddleLeftY < gameAreaHeight - paddleHeight) paddleLeftY += paddleSpeed;
            break;
        case 'ArrowUp':
            if (paddleRightY > 0) paddleRightY -= paddleSpeed;
            break;
        case 'ArrowDown':
            if (paddleRightY < gameAreaHeight - paddleHeight) paddleRightY += paddleSpeed;
            break;
    }
    updatePaddles();
});

function updatePaddles() {
    paddleLeft.style.top = `${paddleLeftY}px`;
    paddleRight.style.top = `${paddleRightY}px`;
}

function updateBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= gameAreaHeight - ballSize) ballSpeedY *= -1;

    if (ballX <= paddleWidth && ballY + ballSize >= paddleLeftY && ballY <= paddleLeftY + paddleHeight) {
        ballSpeedX *= -1;
        ballX = paddleWidth;
    }

    if (ballX >= gameAreaWidth - paddleWidth - ballSize && ballY + ballSize >= paddleRightY && ballY <= paddleRightY + paddleHeight) {
        ballSpeedX *= -1;
        ballX = gameAreaWidth - paddleWidth - ballSize;
    }

    if (ballX < 0 || ballX > gameAreaWidth) resetBall();

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function resetBall() {
    ballX = (gameAreaWidth - ballSize) / 2;
    ballY = (gameAreaHeight - ballSize) / 2;
    ballSpeedX *= -1;
}

function gameLoop() {
    updateBall();
    requestAnimationFrame(gameLoop);
}

updatePaddles();
gameLoop();
