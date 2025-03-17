class Airfeild {
    constructor(obj) {
        //field size
        this.width = obj.width ?? 500;
        this.height = obj.height ?? 500;

        //plane position 
        this.posX = obj.posX ?? 100
        this.posY = obj.posY ?? 100

        //airplanes
        this.planeNum = obj.planeNum ?? 5;
        this.planes = [];
        //gen planes will populate planes array 
        this.genratePlanes();
    }


    // renderAirfeild() {
    //     push();
    //     translate(this.posX, this.posY);

    //     noStroke()
    //     fill(255, 0, 0)
    //     rect(0, 0, this.width, this.height);
    //     this.planes.forEach((plane) => {
    //         this.checkLimit(plane)
    //         plane.renderPlanes();
    //         plane.movePlanes();

    //     });
    //     pop();
    // }


    renderAirfeild() {
        push();
        translate(this.width, this.height);
        noStroke()
        fill(255, 0, 0)
        rect(0, 0,this.width, this.height);
        pop();
    }


    renderPlanes() {
        
        push();
        translate(this.width, this.height);

        this.planes.forEach((plane, id) => {
            plane.render(id);
        });
        pop();
    }


    movePlanes() {
        this.planes.forEach(plane => {
            plane.movePlanes();
        });
    }


    checkPos() {
        this.planes.forEach(plane => {
            if (plane.posX > this.width / 2) {
                plane.posX = -this.width / 2;
            } else if (plane.posX < -this.width / 2) {
                plane.posX = this.width / 2;
            }
            if (plane.posY > this.height / 2) {
                plane.posY = -this.height / 2;
            } else if (plane.posY < -this.height / 2) {
                plane.posY = this.height / 2;
            }
        })
    }





    genratePlanes() {
        for (let i = 0; i < this.planeNum; i++) {
            this.planes.push(new Plane({
                //sending an object
                posX: random(0, -this.width / 2, 0, this.width / 2),
                posY: random(0, -this.height / 2, 0, this.height / 2),
                valX: random(-1, 1),
                valY: random(-1, 1),
            }))

        }
    }

    // checkLimit(plane) {

    //     if (plane.posX > this.width) {
    //         plane.posX = 0;
    //         plane.posY = map(plane.posY, 0, this.height, this.height, 0)
    //     } else if (plane.posX < 0) {
    //         plane.posX = this.width;
    //         plane.posY = map(plane.posY, 0, this.height, this.height, 0)

    //     }


    //     if (plane.posY > this.height) {
    //         plane.posY = 0;
    //         plane.posY = map(plane.posX, 0, this.width, this.width, 0)
    //     } else if (plane.posX < 0) {
    //         plane.posY = this.height;
    //         plane.posX = map(plane.posX, 0, this.width, this.width, 0)

    //     }

    // }


    checkDist() {
        this.planes.forEach(planes => planes.alert = 0)
        let count = 0;
        for (let i = 0; i < this.planes.length; i++) {
            for (let j = i + 1; j < this.planes.length; j++) {
                if (i != j) {
                    let planeA = this.planes[i];
                    let planeB = this.planes[j];
                    let dist = sqrt((sq(planeA.posX - planeB.posX) + (sq(planeA.posY - planeB.posY))));
                    // console.log(dist);
                    if (dist < 20) {
                        planeA.alert = true;
                        planeB.alert = true;
                    }
                }
                count++;
            }
        }
        console.log(count)
    }

}







