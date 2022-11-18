var startBttn = document.querySelector('.start_bttn')
var finalBttn =document.querySelector('.final-bttn')
var ruleBox = document.querySelector('.rules_box')
var exitBttn = document.querySelector('.exit')
var restartBttn = document.querySelector('.restart')
var countdownEl = document.querySelector('.countdown')
var startQuiz = document.querySelector('.container')
let timeLeft = 16
var resultBox = document.querySelector('.results')
var scoreEl = document.querySelector ('.score-list')
var scoreList = []
var highScore = document.querySelector('.highscores')
var initialEL = document.querySelector('.initals')
var scorePL = document.querySelector('.score')


// Timer countdown
function setTime() {
    var clockInterval = setInterval(function (){
        timeLeft--;
        countdownEl.textContent = timeLeft;
        
        if (timeLeft === 0 || currentQuiz === quizInput.length) {
            clearInterval(clockInterval);
            startQuiz.style.display = "none"
            resultBox.style.display = "block"
            scoreEl.textContent = timeLeft
        } 
    }, 1000)
}



// Start Button 
startBttn.addEventListener("click", () => {
    ruleBox.style.display = 'initial'
})
//Exit Button
exitBttn.addEventListener("click", () => {
    ruleBox.removeAttribute('style')
} )
// Display the Quiz after clicking "Continue"
restartBttn.addEventListener("click", () => {
    startQuiz.style.display = 'block'
    ruleBox.removeAttribute('style')
    startBttn.style.display = 'none'

    setTime()
    
})

finalBttn.addEventListener('click', () => {
    startBttn.style.display = 'initial'
    resultBox.remove
    scoreEl.remove
})



// Quiz Questiion input. 
var quizInput = [
    {
        question: "What is the first position on any string?",
        a:"1",
        b:"2",
        c:"0",
        d:"5",
        correct:"c",
    },
    {
        question: "There are ___ levels of heading in HTML?",
        a:"Three",
        b:"Five",
        c:"Four",
        d:"Six",
        correct:"d",
    },
    {
        question: "To get an ordered list we use?",
        a:"<h1>",
        b:"<ol>",
        c:"<ul>",
        d:"<ml>",
        correct:"b",
    },
    {
        question: "Which element is used in the <HEAD> sections on an HTML page, if we want to use an external stylesheet file to decorate the page?",
        a:"<css>",
        b:"<src>",
        c:"<style>",
        d:"<link>",
        correct:"d",
    },
    {
        question: "How can we write comment along with CSS code?",
        a:"<'a comment'>",
        b:"/ a comment /",
        c:"// a comment //",
        d:"/* a comment */",
        correct:"d",
    },
]

// 
var quiz= document.getElementById('quiz')
var answersID = document.querySelectorAll('.answer')
var questionID= document.getElementById('question')
var a_text= document.getElementById('a_text')
var b_text= document.getElementById('b_text')
var c_text= document.getElementById('c_text')
var d_text= document.getElementById('d_text')
var submitBtn = document.querySelector('.submit')
var rightWrong = document.querySelector('.w-r')
var currentQuiz = 0
var score = document.querySelector('#score')


fillQuiz()

// Fill the Quiz with the Questions and Answer choices
function fillQuiz() {
    deselectAnswers()
    var currentQuizData = quizInput[currentQuiz]
    questionID.innerText = currentQuizData.question
    
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers(){
    answersID.forEach(answersID => answersID.checked = false)
}

function grabSelected(){
    let answer
    answersID.forEach(answersID => {
        if(answersID.checked){
            answer = answersID.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", (e) => {
    var answer = grabSelected()
    if(answer) {
        if (answer === quizInput[currentQuiz].correct)
        score++
    }
    currentQuiz++

    if(currentQuiz < quizInput.length) {
        fillQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You have ${score}/${quizInput.length} correct!</h2>
        <button onclick="location.reload()"></button>
        `
    }
})

// function checkAnswer(event) {
//     event.preventDefault()

//     rightWrong.style.display = 'block'
//     var pTag = document.createElement('<p>')
//     rightWrong.appendChild(pTag)

//     setTimeout (function () {
//         pTag.style.display = 'none'
//     }, 1000)

//     if (quizInput[currentQuiz].correct === e.target.value) {
//         pTag.textContent = "You're Right"
//     } else if (quizInput[currentQuiz].correct !== e.target.value) {
//         timeLeft = timeLeft - 2
//         pTag.textContent = "You Are Wrong!"
//     }

//     if (currentQuiz< quizInput.length){
//         quizQuestionC++
//     }
// }