// gee whiz quiz biz
var questions = [
    {
        question: 'What is a boolean?',
        choices: ["True or false", "string", "index html file"],
        answer: "True or false"
    },
    {
        question: "What is a String?",
        choices: ["a sequence of characters that exists as an object of the class java", "a numerical integer"],
        answer: "a sequence of characters that exists as an object of the class java"
    }
];
var startBtn = document.getElementById("start-button")
var timeLeft = 60;
var currentQuestion = 0;
var timer;
var score = 0

function startQuiz() {
    startBtn.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    startTimer();
    showQuestion();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--
        document.getElementById("time").innerHTML = timeLeft;
        if (timeLeft === 0 || currentQuestion === questions.length) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestion === questions.length) return
    var question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var btn = document.createElement('button')
        var choice = questions[currentQuestion].choices[i];
        btn.textContent = choice
        btn.setAttribute('id', 'choices')
        choices.append(btn)

        btn.addEventListener('click', function (event) {
            checkAnswer(event.target.textContent)
        })
    }
}

function checkAnswer(answer) {
    console.log(answer)
    console.log(questions[currentQuestion].answer)
    if (answer === questions[currentQuestion].answer) {
        score += 50
        console.log(score)
    } else {
        timeLeft -= 10;
        console.log(score)
    }
    currentQuestion++;
    showQuestion()
}

function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    var end = document.getElementById("end")
    document.getElementById("final-score").innerHTML = "Final Score: " + score;
    
    var input = document.createElement('input')
    input.setAttribute('placeholder', 'Initials')

    var submitBtn = document.createElement('button')
    submitBtn.textContent = "SUBMIT"

    end.append(input, submitBtn)

    submitBtn.addEventListener('click', function() {
        saveScore(input.value, score)
    })

}

function saveScore(initials, score) {
    var userInfo = {
        initials,
        score
    }

    var storage = JSON.parse(localStorage.getItem('quizScores'))
    if(storage === null) {
        storage =[]
    }

    storage.push(userInfo)
    localStorage.setItem('quizScores', JSON.stringify(storage))

    window.location.href = 'highscores.html'

}

startBtn.addEventListener('click', startQuiz)