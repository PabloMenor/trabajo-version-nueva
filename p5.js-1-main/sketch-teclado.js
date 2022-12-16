let img = "";
let bg = "";

function setup(){
    console.log("setup()");
    createCanvas(1280,720);
    img = loadImage("https://i.ibb.co/FV06Lhv/ndice.jpg");
    bg = loadImage("https://i.ibb.co/5jJnp2g/1280x720-Fondos-de-Pantalla-Estrellas-4-K-Espacio.jpg");
}


function draw(){
    console.log("draw()"+frameCount);
    background(bg);
    console.log("teclaPulsada: "+keyCode );
    

    switch (keyCode) {
        case 40:
            
            image(img, frameCount%400, frameCount%600);
            break;
        case 38:
            text("arriba",75,75);
            break;
        case 37:
         text("izquierda",40,100);
         break;
        case 39:
         text("derecha",125,100);
           break;
        default:
            break;
    }


}
