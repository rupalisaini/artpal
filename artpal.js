function change() {
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "RGB(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
        x[i].innerHTML = x[i].style.backgroundColor;
        x[i].style.borderColor = "transparent";
    }
}

function squareChange(x){
    var x = document.getElementById(x);
    var r, g, b;
    r = (Math.floor(Math.random() * 256));
    g = (Math.floor(Math.random() * 256));
    b = (Math.floor(Math.random() * 256));
    x.style.backgroundColor = "RGB(" + r + "," + g + "," + b + ")";
    x.innerHTML = x.style.backgroundColor;
    x.style.borderColor = "transparent";
}

function toWhite(){
    document.body.style.backgroundColor = "white";
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        if(x[i].style.borderColor != "black" && x[i].style.borderColor != "transparent"){
            x[i].style.borderColor = "black";            
        }
    }
}

function toBlack(){
    document.body.style.backgroundColor = "black";
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        if(x[i].style.borderColor != "white" && x[i].style.borderColor != "transparent"){
            x[i].style.borderColor = "white";            
        }
    }
}

/*function changeColour(){
    document.getElementById("sq").style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + ")"
}
setInterval(changeColour, 1000);*/