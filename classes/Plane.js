class Plane {
    constructor(obj) {

        //postion 
        this.posX = obj.posX ?? random(0, 500);
        this.posY = obj.posY ?? random(0, 500);

        this.speed = obj.speed ?? random(0.5, 3);
        this.angle = obj.angle ?? random(0, 360);

        //Polar velocity
        this.velX = this.speed * cos(this.angle);
        this.velY = this.speed * sin(this.angle);


        //airplaine
        this.apWidth = obj.apWidth ?? 20;
        this.apHeight = obj.apHeight ?? 30;
        this.apTail = obj.apTail ?? 8;



        this.alert = false;
    }

    render(id) {

        push()
            translate(this.posX, this.posY)

            let angle = atan2(this.valY, this.valX);



            fill(100);
            noStroke();
            textSize(20)
            text(id, 10, -5);


            beginShape()

                vertex(0, 0)

                vertex(-this.apTail, -this.apWidth / 2);

                vertex(this.apHeight - this.apTail, 0);

                vertex(-this.apTail, this.apWidth / 2);

            endShape(CLOSE)

            if (this.alert) {

                noFill()
                stroke(0, 0, 0)
                ellipse(this.apHeight * 0.03, 0, this.apHeight * 1.2)
                text("we about to crash", this.apHeight * 0.03, 0, this.apHeight * 1.2)

                console.log("true",);
            }

        pop()

    }


    movePlanes() {
        this.posX = this.posX + this.velX;
        this.posY = this.posY + this.velY;
    }








}