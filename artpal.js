function change() {
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "RGB(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
        x[i].innerHTML = x[i].style.backgroundColor;
    }
}

function squareChange(x){
    var x = document.getElementById(x);
    var r, g, b;
    r = (Math.floor(Math.random() * 256));
    g = (Math.floor(Math.random() * 256));
    b = (Math.floor(Math.random() * 256));
    x.style.backgroundColor = "RGB(" + r + "," + g + "," + b + ")";
}

function toWhite(){
    document.body.style.backgroundColor = "white";
}

function toBlack(){
    document.body.style.backgroundColor = "black";
}

/*function changeColour(){
    document.getElementById("sq").style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + ")"
}
setInterval(changeColour, 1000);*/