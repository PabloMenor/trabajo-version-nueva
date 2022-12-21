//Estas son las imagenes que tenemos en el proyecto

let eevee = "";
let bgpikachu = "";
let bgcharizard = "";
let eevee2 = "";
let tt = "";
let charizard = "";
let pikachu = "";
let minipikachu = "";
let gyarados = "";
let bggyarados = "";
let bg = "";

function setup(){
    console.log("setup()");
    createCanvas(1550,720);
    eevee = loadImage("https://i.ibb.co/FV06Lhv/ndice.jpg");
    bgpikachu = loadImage("https://i.ibb.co/KbVy0xB/HD-wallpaper-artistic-pixel-art-landscape-ocean.jpg");
    bgcharizard = loadImage("https://i.ibb.co/1nps7tS/mountains-pixel-art-wallpaper-preview.jpg");
    tt= loadImage("https://i.ibb.co/3mQ3fhK/0b833bf0b632cd39b8aad3f9b6f60a9ada7615cd-00.gif");
    eevee2= loadImage("https://i.ibb.co/bF5vLGB/1970401-b70f6.gif");
    pikachu = loadImage("https://i.ibb.co/FBz4xq4/6689dc331be27e66349ce9a4d15ddff3.gif");
    charizard = loadImage("https://i.ibb.co/6WvQH2d/charizard-pokemon-charizard.gif");
    minipikachu = loadImage("https://i.ibb.co/zn4shbB/4d2464f56ecb065dbdbb0049a1b5bf484bee9265-hq.gif");
    gyarados = loadImage("https://i.ibb.co/NyPYxsv/tumblr-4b0c4b9598fcfaf63db0cd3-unscreen.gif");
    bggyarados = loadImage("https://i.ibb.co/ccBfMqW/previews-4.jpg");
    bg = loadImage("https://i.ibb.co/dbyCWNQ/CONTROLES.png");
    bgeevee = loadImage("https://i.ibb.co/kM0kkM6/20fe1e143ea1bb175a2035b1d180e398.jpg")
}

//Teclas--> ^gyarados >pikachu <eevee charizard

function draw(){
    console.log("draw()"+frameCount);
   background(bg)
    console.log("teclaPulsada: "+keyCode );
   

    switch (keyCode) {
        case 40:
        background(bggyarados);    
        image(gyarados, frameCount%1265, 300);
            break;
        case 38:           
            background(bgpikachu);
            image(pikachu,frameCount%1265,300);
            image(minipikachu,950,50);

            break;
            case 32:           
            background(bg);
            break;
        case 37:
            background(bgeevee);
            image(eevee2, 400, 300);
         break;
        case 39:
            background(bgcharizard);
            image(charizard, frameCount%1265, 75);
           break;
        default:
            break;
    }
    
}
