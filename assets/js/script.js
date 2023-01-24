// gee whiz quiz biz
var questions =[ { question:'What is a boolean?', choices["True or false", "string","index html file"],
    answer: "True or false"
},
{
    question: "What is a String?",
    choices: ["a sequence of characters that exists as an object of the class java", "a numerical integer"],
    answer: "a sequence of characters that exists as an object of the class java"
}

]:
var timeLeft = 60; //time in seconds
var currentQuestion = 0;
var timer;

function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    startTimer();
    showQuestion();
}

fucntion startTimer(){
    timer = setInterval(fucntion(){
       timeLeft--;
       document.getElementById("time").innerHTML = timeLeft;
       if (timeLeft === 0){
        clearInterval(timer);
        endQuiz();
       } 
    }, 1000);
}

fucntion showQuestion() {
    var question = questions[currentQuestion];
    document.getElementById?("question").innerHTML = question.questio;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for(var i=0; i<question.choices.length; i++){
        var choice = questions.choices[i];
        choices.innerHTML+="<button onclick='checkAnswer(\"" + choice+ "\")>"+ choice +
    "</button>";
    }
}

fucntion checkAnswer(answer){
    if(answer===questions[currentQuestion].answer){
        currentQuestion++;
        if (currentQuestion === questions.length){
            endQuiz();
        }
        }else {
            timeLeft-=10;
            if(timeLeft<0){
                timeLeft=0;
            }
            document.getElementById("time").innerHTML=timeLeft;
      }
}

function endQuiz(){
    clearInterval(timer);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("final-score").innerHTML=timeLeft;
    document.getElementById("save-score").onclick = function(){
        var initials = document.getElementById("initials").ariaValueMax;
        saveScore(initials, timeLeft);
    };
}

function saveScore(initials, score){
    alert("Score Saved!");
}