class Plane {
    constructor(obj) {

        //postion 
        this.posX = obj.posX ?? screenWidth / 2;
        this.posY = obj.posY ?? screenHeight / 2;

        //valocity - change in postion over time 
        this.valX = obj.valX ?? random(-0.5, 0.5);
        this.valY = obj.valY ?? random(-0.5, 0.5);

        //airplaine
        this.apWidth = obj.apWidth ?? 20;
        this.apHeight = obj.apHeight ?? 30;
        this.apTail = obj.apTail ?? 8;
        this.alert = false;
    }

    renderPlanes() {

        push()
        translate(this.posX, this.posY)
        rotate(atan2(this.valY, this.valX));
        fill(100);
        stroke(255, 255, 255);


        beginShape()
        vertex(0, 0) //this is the middle point of the Airplane
        vertex(-this.apTail, -this.apWidth / 2);

        vertex(this.apHeight - this.apTail, 0);

        vertex(-this.apTail, this.apWidth / 2);

        endShape(CLOSE)

        if (this.alert) {

            noFill()
            stroke(0, 0, 0)
            ellipse(this.apHeight *0.03,0, this.apHeight * 1.2)

            console.log("true");
        }
        
        pop()

    }


    movePlanes() {
        this.posX = this.posX + this.valX;
        this.posY = this.posY + this.valY;
    }








}