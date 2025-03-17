
//Screen
const screenWidth = 2000;
const screenHeight = 2000;

//Airfeilds
let airfeilds = [];

//Colors
const planeOutline = "#703D57";
const planeBody = "#703D57";


function setup() {
    createCanvas(screenWidth, screenHeight)
    background("#DADFF7");
    angleMode(DEGREES);
    rectMode(CENTER);
    

    //airflied 01
    airfeilds.push(new Airfeild({
        planeNum:10 , 
    }))

}


function draw() {
    background("#DADFF7");
    airfeilds.forEach((airfeilds) => {
        airfeilds.renderAirfeild();
    });
 
    airfeilds[0].renderPlanes();
    airfeilds[0].movePlanes();
    airfeilds[0].checkDist();
    airfeilds[0].checkPos();
    // airfeilds[0].checkLimit();

}


