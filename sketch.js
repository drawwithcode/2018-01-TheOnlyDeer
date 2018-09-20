'use strict'
function setup() { // eslint-disable-line
    // define artboard size
    createCanvas(500, 500);
    // Set here the values that are not changing all over the sketch
}

let floorH = 50,
    nModuli = 10,
    nColonne = 5,
    c = 0,
    t = 0,
    mod = 1,
    sm = [];

function draw() { // eslint-disable-line
    background(30);
    strokeWeight(3);



    //background modules
    rectMode(CORNER)
    stroke(60);
    for (let i = 0; i < nColonne; i++) {
        for (let j = 0; j < nModuli; j++) {
            fill('#2b7faf');
            rect(i * width / nColonne, j * (height - floorH) / nModuli, width / nColonne, (height - floorH) / nModuli);
        }
    }

    //animate background modules
    fill('#a3e9ff11');
    if (c % 61 > 0) {
        for (let i = 0; i < sm.length; i++) {
            for (let j = 0; j < t; j++) {
                rect(~~(sm[i] / nModuli) * width / nColonne, (sm[i] % nModuli) * (height - floorH) / nModuli, width / nColonne, (height - floorH) / nModuli);
            }
        }
    } else {
        for (sm = []; sm.length < 17;) {
            let tmp = ~~(Math.random() * nModuli * nColonne);
            if (!sm.includes(tmp))
                sm.push(tmp);
        }
    }

    //back plate
    rectMode(CENTER);
    fill('#0005');
    noStroke();
    rect(width/2, height/2, (width/6)+10, (height/2)+10);
    fill(40);
    stroke(60);
    rect(width/2, height/2, width/6, height/2);
    fill(100);
    noStroke();
    rect(width/2, height*11/16, (width/6)-3, (height/8)-3);


    //Eye
    fill(0);
    stroke(60);
    ellipse(width/2, height/2, 65);

    noStroke();
    fill('#fb5');
    ellipse((width/2), (height/2), 6);
    fill('#ff000020');
    for(let i = 0; i < 5;i++){
        ellipse(width/2, height/2, 15+i*10);
    }
    fill('#FFF8');
    ellipse((width/2)+15, (height/2)-15, 7);


    stroke(60);
    fill('#ff000004');
    for (let j = 0; j < t/4; j++) {
        ellipse(width/2, height/2, 65);
    }

    c++;
    if (c % 61 > 0) {
        t += mod;
        c % 61 > 30 ? mod = -1 : mod = 1;
    }
}
