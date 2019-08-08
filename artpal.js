function change() {
    var x=document.getElementsByClassName("square");
    var i;
    for(i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
    }
}

/*function changeColour(){
    document.getElementById("sq").style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + ")"
}
setInterval(changeColour, 1000);*/