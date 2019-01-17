document.getElementById("btn1").onclick = function() {
   document.getElementById("tutorial1").style.top = "1500px"; 
}

document.getElementById("btn2").onclick = function() {
   document.getElementById("tutorial2").style.top = "1500px"; 
}

var Tutorial = document.getElementById("container");

document.getElementById("btn3").onclick = function() {
    Tutorial.classList.add("fadeout");
    setTimeout(function() {
        Tutorial.style.display = "none";
    }, 1000);
}