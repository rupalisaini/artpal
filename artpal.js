function change() {
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "RGB(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
        let id = "label" + (i + 1);
        let label = document.getElementById(id);
        label.innerHTML = x[i].style.backgroundColor;
        x[i].style.borderColor = "transparent";
    }
}

function squareChange(x){
    var square = document.getElementById(x);
    let id = "label" + x;
    let label = document.getElementById(id);
    var r, g, b;
    r = (Math.floor(Math.random() * 256));
    g = (Math.floor(Math.random() * 256));
    b = (Math.floor(Math.random() * 256));
    square.style.backgroundColor = "RGB(" + r + "," + g + "," + b + ")";
    label.innerHTML = square.style.backgroundColor;
    square.style.borderColor = "transparent";
}

function toWhite(){
    document.body.style.backgroundColor = "white";
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        if(x[i].style.borderColor != "black" && x[i].style.borderColor != "transparent"){
            x[i].style.borderColor = "black";
        }
        let id = "label" + (i + 1);
        let label = document.getElementById(id);
        label.style.color = "black";
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
        let id = "label" + (i + 1);
        let label = document.getElementById(id);
        label.style.color = "white";
    }
}