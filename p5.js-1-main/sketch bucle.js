
function setup(){
    console.log("setup");

    createCanvas(550,550);
    background(125)


}

function draw(){
    console.log("draw:" +frameCount);

        i=50;
        b=50;

   // fill(color(frameCount%255));

    
    while (b<height-25) {
        while (i<width-25) {
            ellipse(i,b,25,25);
            i=i+50;
    }
    b= b+50;
    i=50;
        
    }

}
