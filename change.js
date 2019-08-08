function changeColour(){
    document.getElementById("sq").style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + "," + (Math.floor(Math.random() * 20) + 230) + ")"
}
setInterval(changeColour, 1000);