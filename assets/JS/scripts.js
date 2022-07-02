
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
    var newPage = document.getElementById("new-pages");
    //targeting button elements
    var quesBtn1 = document.getElementById("answer1");
    var quesBtn2 = document.getElementById("answer2");
    var quesBtn3 = document.getElementById("answer3");
    var quesBtn4 = document.getElementById("answer4");
    
    //traversing to select divider elements
    var quesHeader = document.querySelector("#question");
    var quesAns1 = document.querySelector("#answer1");
    var quesAns2 = document.querySelector("#answer2");
    var quesAns3 = document.querySelector("#answer3");
    var quesAns4 = document.querySelector("#answer4");
    
    //variables for countdown timer
    var timerCnt = document.querySelector("#time");
    var timeLeft = 80;
    timerCnt.textContent = "Time Left: " + timeLeft;


    // questions themselves
    var question1 = {
        question: "What is your favorite color?",
        answerA: "red",
        answerB: "blue",
        answerC: "green",
        answerD: "black",
    };
    var question2 = {
        question: "What is your new favorite color....?",
        answerA: "white",
        answerB: "yellow",
        answerC: "grey",
        answerD: "pink",
    };
    var question3 = {
        question: "What?",
        answerA: "white",
        answerB: "yellow",
        answerC: "grey",
        answerD: "pink",
    };
    var question4 = {
        question: "quesrion4?",
        answerA: "whi123te",
        answerB: "yeasllow",
        answerC: "gwdqrey",
        answerD: "pinasdk",
    };
    var question5 = {
        question: "question5",
        answerA: "whasfdsite",
        answerB: "yelawfcaslow",
        answerC: "greafaxzy",
        answerD: "pinzxczxcdiek",
    };


    function quizStart (){

        firstPage.setAttribute("style", "display: none");
        console.log("hide quiz main page");   
        //first question initiated
        quesHeader.innerHTML = question1.question;
        quesAns1.innerHTML = question1.answerA;
        quesAns2.innerHTML = question1.answerB;
        quesAns3.innerHTML = question1.answerC;
        quesAns4.innerHTML = question1.answerD;



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
    
    // Question functions... might need to make this code more dry...
    //2nd question
    function nextQues1(){
        quesHeader.innerHTML = question2.question;
        quesAns1.innerHTML = question2.answerA;
        quesAns2.innerHTML = question2.answerB;
        quesAns3.innerHTML = question2.answerC;
        quesAns4.innerHTML = question2.answerD;

            // 3rd question
            function nextQues2(){
                quesHeader.innerHTML = question3.question;
                quesAns1.innerHTML = question3.answerA;
                quesAns2.innerHTML = question3.answerB;
                quesAns3.innerHTML = question3.answerC;
                quesAns4.innerHTML = question3.answerD;
                    // 4th question
                    function nextQues3(){
                            quesHeader.innerHTML = question4.question;
                            quesAns1.innerHTML = question4.answerA;
                            quesAns2.innerHTML = question4.answerB;
                            quesAns3.innerHTML = question4.answerC;
                            quesAns4.innerHTML = question4.answerD;
                            // last question
                            function nextQues4(){
                                    quesHeader.innerHTML = question5.question;
                                    quesAns1.innerHTML = question5.answerA;
                                    quesAns2.innerHTML = question5.answerB;
                                    quesAns3.innerHTML = question5.answerC;
                                    quesAns4.innerHTML = question5.answerD;
                    };
                //event listeners for 5th question
                quesBtn1.addEventListener("click", nextQues4);
                quesBtn2.addEventListener("click",nextQues4);
                quesBtn3.addEventListener("click",nextQues4);
                quesBtn4.addEventListener("click",nextQues4);
            };
            //event listeners for 4th question
            quesBtn1.addEventListener("click", nextQues3);
            quesBtn2.addEventListener("click",nextQues3);
            quesBtn3.addEventListener("click",nextQues3);
            quesBtn4.addEventListener("click",nextQues3);
        };
        //event listeners for 3rd question
        quesBtn1.addEventListener("click", nextQues2);
        quesBtn2.addEventListener("click",nextQues2);
        quesBtn3.addEventListener("click",nextQues2);
        quesBtn4.addEventListener("click",nextQues2);
    };
    //event listeners for 2nd question
    quesBtn1.addEventListener("click", nextQues1);
    quesBtn2.addEventListener("click",nextQues1);
    quesBtn3.addEventListener("click",nextQues1);
    quesBtn4.addEventListener("click",nextQues1);




};


startBtn.addEventListener("click", quizStart)       