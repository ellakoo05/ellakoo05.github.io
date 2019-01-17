//--------------------Main Pages------------------------//

var bg = document.getElementById("background");
var fullPage = document.getElementById("fullPage");
var rightPage = document.getElementById("rightPage");
var leftPage = document.getElementById("leftPage");
var centerPage = document.getElementById("centerPage");
var rainbowPage = document.getElementById("rainbowPage");
var churchPage = document.getElementById("churchPage")
var overlay = document.getElementById("overlay");


// Button Components

var leftButton = document.getElementById("LeftButton");
var rightButton = document.getElementById("RightButton");
var currentPage = "center";
var bgSong = document.getElementById("folkSong");
var musicPlayer = document.getElementById("music");
var isPlaying = true;
var buttonElement = "<button id='exit'> X </button>";
var buttonSound = document.getElementById("buttonSound");

bgSong.play();

leftButton.addEventListener("click", function () {
    if (currentPage == "center") {
        bg.style.backgroundPosition = "left";
        fullPage.style.left = "0px";
        currentPage = "left";
        leftButton.style.display = "none";
    } else if (currentPage == "right") {
        bg.style.backgroundPosition = "center";
        fullPage.style.left = "-1280px";
        currentPage = "center"
        rightButton.style.display = "block";
    }
});


rightButton.addEventListener("click", function () {
    if (currentPage == "center") {
        bg.style.backgroundPosition = "right";
        fullPage.style.left = "-2560px";
        currentPage = "right";
        rightButton.style.display = "none";
    } else if (currentPage == "left") {
        bg.style.backgroundPosition = "center";
        fullPage.style.left = "-1280px";
        currentPage = "center";
        leftButton.style.display = "block";
    }
});


musicPlayer.addEventListener("click", function () {
    if (isPlaying) {
        bgSong.pause();
        isPlaying = false;
    } else {
        bgSong.play();
        isPlaying = true;
    }
});


//-------------------Facts-------------------------//

var facts = document.getElementById("facts");
var girlFact = "<br><br><br><p>Over 13 million pints of Guinness are enjoyed <br>around the world on St. Patrick's Day.</p>";
var balloonFact = "<br><br><p>St. Patrick's colour was actually blue, not green. In fact, most of the country, including its flag, were represented by blue. Green only came later, possibly due to the country's green countryside. After all, Ireland is known as the Emerald Isle.</p>";
var guyFact = "<br><br><br><p>Popular Irish toasts on St. Patrick's Day, include: 'May the roof above us never fall in, and may we friends beneath it never fall out.'</p>";
var shamrockFact = "<br><br><br><p>Shamrocks are the national flower/emblem of Ireland. The word shamrock comes from the Irish seamróg, which means 'Little Clover' or 'Young Clover'.</p>";
var drum2Fact = "<br><br><br><p>There is no real connection between the patron saint of Ireland and leprechauns. But like the shamrock, leprechauns are recognized around the world as symbols of Ireland.</p>";
var flagFact = "<br><br><br><p>St. Patrick’s Day is an annual feast day celebrating the patron saint the day is named after.</p>";
var potFact = "<br><br><br><p>Your odds of finding a four-leaf clover are <br>about 1 in 10,000. Find one below if you can!</p> ";
var congratulations = "<br><br><br><p>Congratulations! <br>You have found a four-leaf clover. <br><br>You are the lucky one! </p>";
var leprechaunFact = "<br><br><p>Leprechauns are mischievous little creatures which originate from Irish folklore and mythology.These bearded fairies are often depicted in a green coat and hat, and are often seen with a pot of gold at the end of a rainbow.</p>";
var stpattyFact = "<br><br><br><p>St. Patrick is the patron saint of Ireland, although he was born in Britain, around 385AD.</p>";
var stainedFact = "<br><br><br><p>St. Patrick, as a boy of 14, was captured and taken to Ireland where he spent six years in slavery herding sheep.</p>";
var stained2Fact = "<br><br><br><p>According to Irish legend, Saint Patrick used the shamrock as a metaphor for the Holy Trinity when he was first introducing Christianity to Ireland.</p>"


//-----------------Left Page Components-------------------//

var girl = document.getElementById("girl");
var guy = document.getElementById("guy");
var balloon = document.getElementById("balloon");
var cheers = document.getElementById("cheers");

girl.addEventListener("click", function () {
    facts.innerHTML = girlFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


guy.addEventListener("click", function () {
    facts.innerHTML = guyFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


balloon.addEventListener("click", function () {
    facts.innerHTML = balloonFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


cheers.addEventListener("click", function () {
    document.getElementById("beerSound").play();
});


//--------------Right Page Components--------------//

var drum1 = document.getElementById("drummer1");
var drum2 = document.getElementById("drummer2");
var flag = document.getElementById("flag");
var smallLeprechaun = document.getElementById("smallLeprechaun");
var church = document.getElementById("church");
var back = document.getElementById("backButton");
var prevPage = "rightPage";

drum1.addEventListener("click", function () {
    document.getElementById("drumSound").play();
});

drum2.addEventListener("click", function () {
    facts.innerHTML = drum2Fact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


flag.addEventListener("click", function () {
    facts.innerHTML = flagFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


smallLeprechaun.addEventListener("click", function () {
    rainbowPage.style.display = "block";
    buttonSound.play();
    prevPage = "rightPage";
    back.style.display = "block";
});


back.addEventListener("click", function () {
    rainbowPage.style.display = "none";
    churchPage.style.display = "none";
    buttonSound.play();

    if (prevPage == "rainbowPage") {
        rainbowPage.style.display = "block";
        prevPage = "church";
    } else {
        back.style.display = "none";
        rightPage.style.display = "block";
    }
});


church.addEventListener("click", function () {
    churchPage.style.display = "block";
    back.style.display = "block";
    buttonSound.play();
});


//--------------Rainbow Page Components--------------//

var pot = document.getElementById("potofGold");
var fourleaf = document.getElementById("fourleaf");
var bigLeprechaun = document.getElementById("bigLeprechaun");
var bigchurch = document.getElementById("church2");
var shamrock = document.getElementById("shamrock");

pot.addEventListener("click", function () {
    facts.innerHTML = potFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});

var intervalId;

fourleaf.addEventListener("click", function () {
    facts.innerHTML = congratulations + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("fourleaf2").style.display = "block";
    document.getElementById("fourleaf2").style.width = "80px";
    fourleaf.style.display = "none";
    document.getElementById("cheerSound").play();
    intervalId = setInterval(rainGold, 100);

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
        clearInterval(intervalId);
    });
});

bigLeprechaun.addEventListener("click", function () {
    facts.innerHTML = leprechaunFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


shamrock.addEventListener("click", function () {
    facts.innerHTML = shamrockFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


bigchurch.addEventListener("click", function () {
    buttonSound.play();
    rainbowPage.style.display = "none";
    churchPage.style.display = "block";
    prevPage = "rainbowPage";
    back.style.display = "block";
});


//--------------Church Page Components--------------//

var stpatty = document.getElementById("stpatty");
var stainedglass = document.getElementById("stained1");
var stainedglass2 = document.getElementById("stained2");

stainedglass.addEventListener("click", function () {
    facts.innerHTML = stainedFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


stainedglass2.addEventListener("click", function () {
    facts.innerHTML = stained2Fact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});


stpatty.addEventListener("click", function () {
    facts.innerHTML = stpattyFact + buttonElement;
    buttonSound.play();
    facts.style.display = "block";
    overlay.style.display = "block";

    exit.addEventListener("click", function () {
        facts.style.display = "none";
        overlay.style.display = "none";
    });
});

function rainGold() {
    makeGold();
    makeGold();
    makeGold();

}

function makeGold() {
    var gold = document.createElement("img");
    var mdim = Math.round(Math.random() * 50) + 10;
    var mleft = Math.round(Math.random() * 100);
    gold.src = "img/gold.svg";
    gold.className = "golds";
    gold.style.left = mleft + "%";
    gold.style.height = mdim + "px";
    gold.style.width = mdim + "px";

    rainbowPage.appendChild(gold);

    if (mdim > 30) {
        gold.style.transition = "top 3s";
    } else if (mdim > 60) {
        gold.style.transition = "top 5s";
    } else if (mdim > 80) {
        gold.style.transition = "top 2s";
    } else {
        gold.style.transition = "top 4s";
    }

    setTimeout(function () {
        gold.style.top = "80%";

        setTimeout(function () {
            rainbowPage.removeChild(gold);
        }, 3000);
    }, 10);
}
