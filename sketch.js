var arrow, arrowImg;
var diamond, diamondImg;
var points, pointsImg;
var gameOver, gameOverImg;
var bg, bgImg;
var target, targetImg;
var gameState;

function preload() {
    bgImg = loadImage("background.png");
    arrowImg = loadImage("arrow.png");
    targetImg = loadImage("Pan_Blue_Circle.png");
    diamondImg = loadImage("diamond.png");
    pointsImg = loadImage("points.png");
    gameOverImg = loadImage("game_over.png");
}

function setup() {
    canvas = createCanvas(800, 800);

    //bg = createSprite(800,800);
    //bg.addImage("bgImg", bgImg);

    target = createSprite(400, 400);
    target.addImage("targetImg", targetImg);
    target.scale = 0.4;
    target.rotation = 45;

    arrow = createSprite(400, 700);
    arrow.addImage("arrowImg", arrowImg);
    arrow.scale = 0.2;

    points = createSprite(700, 25);
    points.addImage("pointsImg", pointsImg);
    points.scale = 0.05;

    diamond = createSprite();
    diamond.addImage("diamondImg", diamondImg);
    diamond.scale = 0.08;

    target.setCollider("circle", 400,400,1);
}

function draw() {
    background(128);

    if (keyDown("SPACE")) {
        arrow.velocityY = -50;
    }

    if(arrow.isTouching(target)) {
        arrow.velocityY = 0;
    }

    drawSprites();

}