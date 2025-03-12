
//Screen
const screenWidth = 2000;
const screenHeight = 2000;

//airfeilds
let airfeilds = [];

//Plane 
const planeWidth = 50;
const planeHidth = 70;
const planeTail = 30;
const rotAngle = 90;


//Colors
const planeOutline = "#703D57";
const planeBody = "#703D57";


function setup() {
    createCanvas(screenWidth, screenHeight)
    background("#DADFF7");
    angleMode(DEGREES);

    //airflied 01
    airfeilds.push(new Airfeild({
        width: 1000 , 
        height: 1000, 
        planeNum:10 , 
        posX: 20 ,
        posY: 20 ,

    }))

    //airflied 02
    // airfeilds.push(new Airfeild({
    //     width: 200 , 
    //     hieght: 200, 
    //     planeNum:10 , 
    //     posX: 240 ,
    //     posY: 20 ,

    // }))


}


function draw() {
    background("#DADFF7");
    airfeilds.forEach(airfeild =>{
        airfeild.renderAirfeild();
        airfeild.checkDist();

    })

}