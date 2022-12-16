//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(200,200);
    background(125)
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}

//corre continuamente después de la función setup
function draw(){
    clear ();
    console.log("draw - frameCount:"+frameCount);
    console.log("mouseX"+ mouseX + " , mouseY" +mouseY);
   ellipse(mouseX,mouseY,25,25);
    if(mouseX<100 && mouseY<100) {
        fill(color('green'));

    }else if (mouseX>100 && mouseY<100) {
        fill(color('red'));

    }else if (mouseX<100 && mouseY>100) {
        fill(color('blue'));

    }else if (mouseX>100 && mouseY>100) {
        fill(color('yellow'));

    }
    
      //instrucciones a ejecutar en bucle

}
