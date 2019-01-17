

////////////////////////WALK////////////////////////////////

var DIR_LEFT = 0;
var DIR_RIGHT = 1;
var DIR_UP = 2;
var DIR_DOWN = 3;

IMAGE = { 
    chara: '../../img/characters/splitesheet/Penguin_SpriteSheet.png'
}; 

enchant();

function previewCenter ( game ){
    var left = ( window.innerWidth - ( game.width * game.scale )) /2;
    var top=( window.innerHeight - ( game.height * game.scale )) /2;
    
    var enchantStage = document.getElementById("enchant-stage");
    enchantStage.style.position = "absolute";
    enchantStage.style.left = left+"px";
    enchantStage.style.top = top+"px";
    
    game._pageX = left;
    game._pageY = top;
}



window.onload = function() {
    // GAME OBJECT
    var game = new Game(1100,650);
    previewCenter(game);
    // FPS
    game.fps = 10;

    // IMAGE
    game.preload(IMAGE.chara);
    
    // LOAD
    game.onload = function() {
	var bg = new Sprite(1100,650);
	var image = new Surface(1100,650);    
	
	bg.image = image;
	game.rootScene.addChild(bg);
        
	// CHARACTER
	var animal = new Sprite(180,190);
    animal.scaleX = 1;
    animal.scaleY = 1;    
	animal.image = game.assets[IMAGE.chara];
	
	animal.y = 600-430;
	animal.frame = 1;
	animal.toX = animal.x;
	animal.toY = animal.y;
	animal.anim = [
	   　5,3,4,5,//LEFT
	    8,6,7,8,//RIGHT
	    9,9,9,9,//UP
	    　0, 0, 0, 0]; //BOTTOM
	game.rootScene.addChild(animal);
	
	animal.tick = 0;
	animal.addEventListener(Event.ENTER_FRAME, function() {
	    // UP
	    if (animal.y > animal.toY) {
		animal.dir = DIR_UP;
		if(Math.abs(animal.y - animal.toY) < 0) {
		    animal.y = animal.toY;
		} else {
		    animal.y -= 0.0;
		}
	    }
	    // DOWN
	    if (animal.y < animal.toY) {
		animal.dir = DIR_DOWN;
		if(Math.abs(animal.y - animal.toY) < 0) {
		    animal.y = animal.toY;
		} else {
		    animal.y += 0.0;
		}
	    }  
        
        // LEFT
	    if (animal.x > animal.toX) {
		animal.dir = DIR_LEFT;
		if(Math.abs(animal.x - animal.toX) < 20) {
		    animal.x = animal.toX;
		} else {
		    animal.x -= 20;
		}
	    }
	    // RIGHT
	    if (animal.x < animal.toX) {
		animal.dir = DIR_RIGHT;
		if(Math.abs(animal.x - animal.toX) < 20) {
		    animal.x = animal.toX;
		} else {
		    animal.x += 20; 
		}
	    }
	    
	    // FRAME
	    animal.tick++;
	    if(animal.x == animal.toX && animal.y == animal.toY) animal.tick = 1;
	    animal.frame = animal.anim[animal.dir * 4 + (animal.tick  % 4)];
	});
	
	//　TOUCH START
	bg.addEventListener(Event.TOUCH_START, function(e) {
	    animal.toX = e.x - 75;
	    animal.toY = e.y - 95;
	});
        
    //　TOUCH MOVING
	bg.addEventListener(Event.TOUCH_MOVE, function(e) {
	    animal.toX = e.x - 75;
	    animal.toY = e.y - 95;
	});
    };
    
    
    game.tick = 0;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
	//
	//console.log("test"+game.tick);
	
	game.tick++;	
    });
    
    //  START
    game.start();
};




/////  NOTE(JSON)  ////
var hint3 = [];

document.getElementById("farm_cow3").onclick = function() {
    hint3.push("Cow");
    console.log(hint3);
    localStorage.setItem("HintCow3", JSON.stringify(hint3));
}

document.getElementById("farm_alpaca3").onclick = function() {
    hint3.push("Alpaca");
    console.log(hint3);
    localStorage.setItem("HintAlpaca3", JSON.stringify(hint3));
}

document.getElementById("farm_rabbit3").onclick = function() {
    hint3.push("Rabbit");
    console.log(hint3);
    localStorage.setItem("HintRabbit3", JSON.stringify(hint3));
}

document.getElementById("farm_pig3").onclick = function() {
    hint3.push("Pig");
    console.log(hint3);
    localStorage.setItem("HintPig3", JSON.stringify(hint3));
}

document.getElementById("farm_sheep3").onclick = function() {
    hint3.push("Sheep");
    console.log(hint3);
    localStorage.setItem("HintSheep3", JSON.stringify(hint3));
}

document.getElementById("farm_chicken3").onclick = function() {
    hint3.push("Chicken");
    console.log(hint3);
    localStorage.setItem("HintChicken3", JSON.stringify(hint3));
}

