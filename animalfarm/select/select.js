var Prev = document.getElementById("previous"),
    Next = document.getElementById("next"),
    Link = document.getElementById("link");

Prev.addEventListener("mouseover", function() {
    Prev.src = "../img/items/back_hover.svg";
});

Prev.addEventListener("mouseout", function() {
    Prev.src = "../img/items/back.svg";
});

Next.addEventListener("mouseover", function() {
    Next.src = "../img/items/next_hover.svg";
});

Next.addEventListener("mouseout", function() {
    Next.src = "../img/items/next.svg";
});


var Num = 0,
    Opt1 = document.getElementById("option1"),
    Opt2 = document.getElementById("option2"),
    Opt3 = document.getElementById("option3");


function PandaR(){
    Opt1.classList.remove("ToRight");
    setTimeout(function() {
        Opt1.style.display = "block";
    }, 400);
    Opt2.classList.remove("ToRight");
    Opt2.style.display = "none";
    Opt3.classList.add("ToRight");
    setTimeout(function() {
        Opt3.style.display = "none";
    }, 200);
    ClearL();
    Link.href = "../panda/Tutorial/tutorial.html";
};

function LionR(){
    Opt1.classList.add("ToRight");
    setTimeout(function() {
        Opt1.style.display = "none";
    }, 200);
    Opt2.classList.remove("ToRight");
    setTimeout(function() {
        Opt2.style.display = "block";
    }, 400);
    Opt3.classList.remove("ToRight");
    Opt3.style.display = "none";
    ClearL();
    Link.href = "../lion/Tutorial/tutorial.html";
};

function PenguinR() {
    Opt1.classList.remove("ToRight");
    Opt1.style.display = "none";
    Opt2.classList.add("ToRight");
    setTimeout(function() {
        Opt2.style.display = "none";
    }, 200);
    Opt3.classList.remove("ToRight");
    setTimeout(function() {
        Opt3.style.display = "block";
    }, 400);
    ClearL();
    Link.href = "../penguin/Tutorial/tutorial.html";
};


function PandaL(){
    Opt1.classList.remove("ToLeft");
    setTimeout(function() {
        Opt1.style.display = "block";
    }, 400);
    Opt2.classList.add("ToLeft");
    setTimeout(function() {
        Opt2.style.display = "none";
    }, 200);
    Opt3.classList.remove("ToLeft");
    Opt3.style.display = "none";
    ClearR();
    Link.href = "../panda/Tutorial/tutorial.html";
};


function LionL(){
    Opt1.classList.remove("ToLeft");
    Opt1.style.display = "none";
    Opt2.classList.remove("ToLeft");
    setTimeout(function() {
        Opt2.style.display = "block";
    }, 400);
    Opt3.classList.add("ToLeft");
    setTimeout(function() {
        Opt3.style.display = "none";
    }, 200);
    ClearR();
    Link.href = "../lion/Tutorial/tutorial.html";
};

function PenguinL() {
    Opt1.classList.add("ToLeft");
    setTimeout(function() {
        Opt1.style.display = "none";
    }, 200);
    Opt2.classList.remove("ToLeft");
    Opt2.style.display = "none";
    Opt3.classList.remove("ToLeft");
    setTimeout(function() {
        Opt3.style.display = "block";
    }, 400);
    ClearR();
    Link.href = "../penguin/Tutorial/tutorial.html";
};


function ClearR() {
    Opt1.classList.remove("ToRight");
    Opt2.classList.remove("ToRight");
    Opt3.classList.remove("ToRight");
}

function ClearL() {
    Opt1.classList.remove("ToLeft");
    Opt2.classList.remove("ToLeft");
    Opt3.classList.remove("ToLeft");
}



Next.addEventListener("click", function() {
      Num = Num + 1;
      console.log(Num);
    
    if(Num > 2) {
        Num = 0;
    }
    
    if(Num == 0) {
        PandaR();
    } else if(Num == 1) {
        LionR();
    } else if (Num == 2) {
        PenguinR();
    }
    
});

Prev.addEventListener("click", function() {
      Num = Num - 1;
      console.log(Num);
    
    if(Num < 0) {
        Num = 2;
    }
    
    if(Num == 0) {
        PandaL();
    } else if(Num == 1) {
        LionL();
    } else if (Num == 2) {
        PenguinL();
    }
    
});




