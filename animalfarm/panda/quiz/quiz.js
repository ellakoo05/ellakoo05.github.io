// QUIZ


(function() {
    'use strict';
    
    var question = document.getElementById("question");
    var btn = document.getElementById("btn");
    var answers = document.querySelectorAll("#answers > li");
    var shuffledAnswers;
    var result = document.getElementById("result");
    var scoreLabel = document.querySelector('#result > p');
    
    
    
    var currentNum = 0;
    var isAnswered;
    var score = 0;
    
    // [1 2 3 4 5] -> [1 2 5 4 3]
    // [1 2 5 4] 3 -> [1 2 5 4] 3
    // [1 2 5] 4 3 -> [1 5 2] 4 3
    // [1 5] 2 4 3 -> [5 1] 2 4 3
    // [5] 1 2 4 3
    
    function shuffle(arr) {
        
        var i;
        var j;
        var tmp;
        for (i = arr.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }
    
    function setQuiz() {
        var i;
        question.textContent = quizSet[currentNum].q;
        //shuffledAnswers = shuffle(quizSet[currentNum].a);
        shuffledAnswers = shuffle(quizSet[currentNum].a.slice());
        //console.log(quizSet[currentNum].a);
        //answers[0].textContent = shuffledAnswers[0];
        //answers[1].textContent = shuffledAnswers[1];
        //answers[2].textContent = shuffledAnswers[2];
        isAnswered = false;
        for (i = 0; i < answers.length; i++) {
            answers[i].classList.remove("correct");
            answers[i].classList.remove("wrong");
            answers[i].textContent = shuffledAnswers[i];
        }
        btn.classList.add("disabled");
        if (currentNum === quizSet.length - 1) {
            btn.textContent = "Show Score";
        }
    }
    
    function setEvents() {
        var i;
        for (i = 0; i < answers.length; i++) {
            answers[i].addEventListener("click", function() {
               checkAnswer(this); 
            });
        }
        
        btn.addEventListener("click", function() {
           if (this.classList.contains("disabled")) {
               return;
           }
            //setQuiz();
            if (currentNum === quizSet.length) {
                //show score
                //console.log('Score: ' + score + ' / ' + quizSet.length);
                scoreLabel.textContent = "Score: " + score + " / " + quizSet.length;
                result.classList.add("show");
                
                
                
            }   else {
                setQuiz();
            }
            
            
            var Congra = document.getElementById("congra"),
                Lose = document.getElementById("fail");
            
            if(score == "6"){                                   Congra.style.display = "block";
                Lose.style.display = "none";
        }   else {
                Lose.style.display = "block";
        }
            
        });
        
    }
    
    function checkAnswer(node) {
        if (isAnswered) {
            return;
        }
        isAnswered = true;
        if (node.textContent === quizSet[currentNum].a[0]) {
            //console.log("correct!");
            node.textContent += ' ... Correct!';
            node.classList.add('correct');
            score++;
        }   else {
            //console.log("wrong!");
            node.textContent += ' ... Wrong!';
            node.classList.add("wrong");
        }
        
        btn.classList.remove("disabled");
        currentNum++;
    }
    
    setQuiz();
    setEvents();
    
    
    // var a = [1, 3, 5];
    // // var b = a;
    // var b = a.slice();
    // b[0] = 8;
    // console.log(a); // 1 3 5
    // console.log(b); // 8 3 5
    
    var a = []
    
})();


//HINT MEMO

 var memo = document.getElementById("memo"),
     MemoCon = document.getElementById("memo_container");

memo.onclick = function() {
    
    if (memo.classList.contains("hint")){
         MemoCon.classList.add("open");
         setTimeout(function() {
             MemoCon.style.display = "block";
         }, 200);
         memo.classList.remove("hint");
        MemoCon.classList.remove("close");
         
    }  else {
        MemoCon.classList.remove("open");
        
        setTimeout(function() {
             MemoCon.style.display = "block";
         }, 200);
         memo.classList.add("hint");
         MemoCon.classList.remove("open");
         MemoCon.classList.add("close");
         setTimeout(function() {
             MemoCon.style.display = "none";
         }, 200);
    }
   
};


//CLEAR LOCAL STORAGE
//document.getElementById("clear").onclick = function() {
//    localStorage.clear();
//}
//
////BACK TO FARM
//var arrow = document.getElementById("back_arrow"),
//    msg = document.getElementById("back_to_farm");
//
//
//arrow.addEventListener("mouseover", function() {
//        msg.style.display = "block";
//});
//
//arrow.addEventListener("mouseout", function() {
//        msg.style.display = "none";
//});


