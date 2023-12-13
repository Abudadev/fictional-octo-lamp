var timer2 = 0;
var rannum;


function preload(){

}

function setup(){
 canvas = createCanvas(250,250);
 canvas.center();
 background("white");
}

function draw(){

}

function clearCanvas(){
    background("white")
}

function timer(){
    timer2 = timer2 + 1;
 document.getElementById("time").innerHTML = timer2;

 setTimeout(function(){
    timer();
 }, 50);

 if(timer2 == 500){
    timer2 = 0;
    WTD();
 }
}

function WTD(){
    rannum = Math.random();

    if(rannum > 0.1){
     document.getElementById("wtd").innerHTML = "Car";
    }

    if(rannum > 0.2){
        document.getElementById("wtd").innerHTML = "Cycle";
    }

    if(rannum > 0.3){
        document.getElementById("wtd").innerHTML = "Star";
    }

    if(rannum > 0.4){
        document.getElementById("wtd").innerHTML = "Motorcycle";
    }

    if(rannum > 0.5){
        document.getElementById("wtd").innerHTML = "Skull";
    }

    if(rannum > 0.6){
        document.getElementById("wtd").innerHTML = "Halloween pumpkin";
    }

    if(rannum > 0.7){
        document.getElementById("wtd").innerHTML = "Clock";
    }

    if(rannum > 0.8){
        document.getElementById("wtd").innerHTML = "Paint brush";
    }

    if(rannum > 0.9){
        document.getElementById("wtd").innerHTML = "Phone";
    }
}
