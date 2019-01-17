document.getElementById("about").addEventListener("click", function(){
    document.getElementById("aboutPage").style.display = "block";
    document.getElementById("welcome").style.display = "none";
});

document.getElementById("about2").addEventListener("click", function(){
   document.getElementById("welcome").style.display = "block";
    document.getElementById("aboutPage").style.display = "none";
});