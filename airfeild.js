class Airfeild {
    constructor(obj) {
        this.width = obj.width ?? 200;
        this.height = obj.height ?? 200;

        this.posX = obj.posX ?? 100
        this.posY = obj.posY ?? 100

        this.planeNum = obj.planeNum ?? 10;
        this.planes = [];
        //gen planes will populate planes array 
        this.genratePlanes();
    }


    renderAirfeild() {
        push();
        translate(this.posX, this.posY);

        noStroke()
        fill(255, 0, 0)
        rect(0, 0, this.width, this.height);
        this.planes.forEach((plane) => {
            this.checkLimit(plane)
            plane.renderPlanes();
            plane.movePlanes();

        });
        pop();



    }

    genratePlanes() {
        for (let i = 0; i < this.planeNum; i++) {
            this.planes.push(new Plane({
                //sending an object
                posX: random(0, this.width),
                posY: random(0, this.height),
                valX: random(-1, 1),
                valY: random(-1, 1),


            }))

        }
    }

    checkLimit(plane) {
        if (plane.posX > this.width) {
            plane.posX = 0;
            plane.posY = map(plane.posY, 0, this.height, this.height, 0)
        } else if (plane.posX < 0) {
            plane.posX = this.width;
            plane.posY = map(plane.posY, 0, this.height, this.height, 0)

        }



        if (plane.posY > this.height) {
            plane.posY = 0;
            plane.posY = map(plane.posX, 0, this.width, this.width, 0)
        } else if (plane.posX < 0) {
            plane.posY = this.height;
            plane.posX = map(plane.posX, 0, this.width, this.width, 0)

        }

    }



    checkDist() {

        this.planes.forEach(plane => plane.alert = 0)

        for (let i = 0; i > this.planes.length; i++) {

            for (let j = i + 1; j > this.planes.length; i++) {

                let planeA = this.planes[i];
                let planeB = this.planes[j];
                let dist = sqrt((sq(planeA.posX - planeB.posX) + (sq(planeA.posY - planeB.posY))));
                

                if(dist<10){
                    planeA.alert = true;
                    planeB.alert = true;
                }

                count++

            }
            console.log("this is dist: " ,dist)


        }
        console.log(dist)
  


    }

}







