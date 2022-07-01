
// I want to make a quiz type game

// i need a button that triggers the quiz and the timer ~
    // for the button I need an event listener ~
    // once the button is clicked I have to hide the contents of the first page ~
    // once they are hidden I have to display the new contents for the quiz ~
        // I have to make an object with a header and 4 answer buttons
        // those buttons need event listeners to go to the next question
        // after a question is answered, right or wrong is displayed next as well
        // if wrong answer is given I need to tick the timer down
        // and finally i need to save the responses to score the user



    var firstPage = document.getElementById("main-pg");
    var startBtn = document.getElementById("first-btn");
    var timerCnt = document.querySelector("#time");
    var newPage = document.getElementById("new-pages");
    var timeLeft = 80;
    timerCnt.textContent = "Time Left: " + timeLeft;

    var quesHeader = document.querySelector("#question");
    var quesAns1 = document.querySelector("#answer1");
    var quesAns2 = document.querySelector("#answer2");
    var quesAns3 = document.querySelector("#answer3");
    var quesAns4 = document.querySelector("#answer4");

    var question1 = {
        question: "What is your favorite color?",
        answerA: "red",
        answerB: "blue",
        answerC: "green",
        answerD: "black",
    };

    var question2 = {
        question: "What is your new favorite color?",
        answerA: "white",
        answerB: "yellow",
        answerC: "grey",
        answerD: "pink",
    };






    function quizStart (){

        firstPage.setAttribute("style", "display: none");
        console.log("hide quiz main page");   

        
        quesHeader.innerHTML = question1.question;
        quesAns1.innerHTML = question1.answerA;
        quesAns2.innerHTML = question1.answerB;
        quesAns3.innerHTML = question1.answerC;
        quesAns4.innerHTML = question1.answerD;
    
        
    function nextquestion(){
        quesHeader.innerHTML = question2.question;
        quesAns1.innerHTML = question2.answerA;
        quesAns2.innerHTML = question2.answerB;
        quesAns3.innerHTML = question2.answerC;
        quesAns4.innerHTML = question2.answerD;
    }


    var timer = setInterval(function() {
        if (timeLeft > 1){
            timeLeft--;
            timerCnt.textContent = "Time Left: " + timeLeft;
        } else if (timeLeft === 1){
            console.log("timer over");
            clearInterval(timer);
            timerCnt.textContent = "no more time left";
        }
        console.log(timeLeft);
    },1000);

};


startBtn.addEventListener("click", quizStart)