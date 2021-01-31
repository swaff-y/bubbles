console.log("Test")
// $(document).ready(function(){
// });

// background bubbles
var w = 1500;
var h = 1200;
var bubbleArray = [];
var bubblemaxsize = 0.5;
var c1, c2;

function Bubble(xloc, yloc, zloc, rise, rad) {
    this.xloc = xloc;
    this.yloc = yloc;
    this.zloc = zloc;
    this.rad = rad;
    this.rise = rise;
}

function CreateBubbles(howManyBubbles) {
    var count = howManyBubbles;
    for (i = 0; i < count; i++) {
        var x = random(0, w);
        var y = (windowHeight -10);

        var z = random(0.4, bubblemaxsize);//random(0.3, 0.7)

        var r = map(z, 0.3, 0.7, 7, 25);
        var rise = map(z, 0.3, 0.7, 0.7, 1.7);
        var b = new Bubble(x, y, z, rise, r);
        bubbleArray.push(b);
    }
}

function Show() {
    for (i = 0; i < bubbleArray.length; i++) {
        var x = bubbleArray[i].xloc;
        var y = bubbleArray[i].yloc;
        var z = bubbleArray[i].zloc;
        var r = bubbleArray[i].rad;
        if(z>0.8){z=0.8;}
        fill(255, 255, 255, z);
        noStroke();
        ellipse(x, y, r, r);
    }
}

function Rise() {
    for (i = 0; i < bubbleArray.length; i++) {
        var x = bubbleArray[i].rise;
        bubbleArray[i].yloc -= x;
        var zmin = bubbleArray[i].zloc * -1.5;
        var zmax = bubbleArray[i].zloc * 1.5;
        var slowy = bubbleArray[i].yloc * .04;
        bubbleArray[i].xloc += map(cos(slowy), -1, 1, zmin, zmax)
    }
}

function Edges() {
    for (i = 0; i < bubbleArray.length; i++) {
        if (bubbleArray[i].yloc < -10) {
            bubbleArray[i].yloc = h + 20;
            bubbleArray[i].xloc = random(0, w);
        }
    }
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter - 0.35);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function resetSketch(){
  // createCanvas(windowWidth, windowHeight);

    createCanvas(windowWidth,windowHeight);
    c1 = color(255);
    c2 = color(63, 191, 191);

    for(let y=0; y<height; y++){
      n = map(y,0,height,0,1);
      let newc = lerpColor(c1,c2,n);
      stroke(newc);
      line(0,y,width, y);
    }//for

    noFill();
    for (var i = 0; i < 21; i++) {
      arc(60 + (i*100), 100, 100, 50, PI*2, PI + TWO_PI);
    }//for


  c1 = color(100, 200, 255, 10);
  c2 = color(0, 0, 255, 0);
  // setGradient(0, 0, 600, 600, c1, c2);
  if(bubblemaxsize<3){
  bubblemaxsize = 0.8;}
  CreateBubbles(0.05);
}

function setup() {
    frameRate(30);
    noStroke();
}

function draw() {
    colorMode(RGB, 255, 255, 255, 1);

    resetSketch();
    Show();
    Rise();
    // Edges();
}




var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})










// let c1,c2;
// let circle=[];
//
// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   c1 = color(255);
//   c2 = color(63, 191, 191);
//
//   for(let y=0; y<height; y++){
//     n = map(y,0,height,0,1);
//     let newc = lerpColor(c1,c2,n);
//     stroke(newc);
//     line(0,y,width, y);
//   }//for
//
//   noFill();
//   for (var i = 0; i < 21; i++) {
//     arc(60 + (i*100), 100, 100, 50, PI*2, PI + TWO_PI);
//   }//for
//
//
// }; //setup
//
// function draw(){
//   c1 = color(255);
//   c2 = color(63, 191, 191);
//
//   for(let y=0; y<height; y++){
//     n = map(y,0,height,0,1);
//     let newc = lerpColor(c1,c2,n);
//     stroke(newc);
//     line(0,y,width, y);
//   }// for
//
//   noFill();
//   for (var i = 0; i < 21; i++) {
//     arc(60 + (i*100), 100, 100, 50, PI*2, PI + TWO_PI);
//   }// for
//
//   stroke(255,255,255)
//
//   createCircles();
//
//   updateCircles();
//
// }
//
//
// function updateCircles(){
//   console.log(circle);
//
//   for(let i = 0; i < 22; i++){
//      const c = circle[i];
//
//      // if(c.x > 2000){
//        c.x = (100 * i);
//        c.y -= 10;
//      // }
//
//
//       ellipse(c.x,c.y,30);
//       // createCircles();
//
//       if(c.y === 100){
//          circle = [];
//       }else{
//          createCircles();
//       }
//   }
//   // createCircles();
// }
//
// function createCircles(){
//   for(let i = 0; i < 20; i++){
//     circle.push({
//       x: (100 * i),
//       y: (windowHeight - 10),
//       vx: 0.25,
//       vy: 0.25,
//     });
//   }
// }

//   circles.push({
//   x: ,
//   y: -1,
//   vx: mouseXVelocity,
//   vy: mouseYVelocity,
//   size: 50,
//   hue: frameCount % 255
// });

// function updateCircles(){
//   for(let i = 0; i < circles.length; i++){
//   const c = circles[i];
//   c.y -=  random(-25,25);
// }


// let left;
// let right;
// for (var i = 0; i < 20; i++) {
//   circle.push({
//     x: (100 * i + left + right),
//     y: (windowHeight - 10),
//     vx:
//     vy:
//     d: 30,
//   })
//   ellipse(circle[i].x, circle[i].y, circle[i].d);
//
//   // for (var j = 0; j < 20; j++) {
//   //   if(j % 0.5 === 0){
//       circle[i].y = circle[i].y - 35;
//   //   }
//   // }
//   left = 0;
//   right = 0;
//   circle.unshift()
