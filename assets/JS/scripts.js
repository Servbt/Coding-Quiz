
// I want to make a quiz type game

// i need a button that triggers the quiz and the timer ~
    // for the button I need an event listener ~
    // once the button is clicked I have to hide the contents of the first page ~
    // once they are hidden I have to display the new contents for the quiz ~
        // I have to make an object with a header and 4 answer buttons ~
        // those buttons need event listeners to go to the next question ~
        // after a question is answered, right or wrong is displayed next as well 
            //need something to happen once I click an answer.. right or wrong
            // true or false right..?
            // 
        // if wrong answer is given I need to tick the timer down
        // and finally i need to save the responses to score the user




        // I have a list of questions... now to just put them into the screen
            // made avariable that shows current placement
            // need to put object properties on 


        var firstPage = document.getElementById("main-pg");
        var startBtn = document.getElementById("first-btn");
        var newPage = document.getElementById("new-pages");
        //targeting button elements
        var quesBtn1 = document.getElementById("answer1");
        var quesBtn2 = document.getElementById("answer2");
        var quesBtn3 = document.getElementById("answer3");
        var quesBtn4 = document.getElementById("answer4");
        var container = document.getElementById("btn-container");
        var ansResult = document.getElementById("right-or-wrong");

        //traversing to select divider elements
        var quesHeader = document.querySelector("#question");
        var quesAns1 = document.querySelector("#answer1");
        var quesAns2 = document.querySelector("#answer2");
        var quesAns3 = document.querySelector("#answer3");
        var quesAns4 = document.querySelector("#answer4");
        var lineBrk = document.querySelector("#bottom");

        

        //buttons start off as hidden
        container.setAttribute("style", "display: none");
        lineBrk.setAttribute("style", "display: none");
        
        //variables for countdown timer
        var timerCnt = document.querySelector("#time");
        var timeLeft = 80;
        timerCnt.textContent = "Time Left: " + timeLeft;
        
        
        // questions themselves made into objects inside an array
        var questionnaire = [
        {
            question: "String values must be enclosed within _______ when being assigned to variables.",
            answers: [
            {answerA: "commas", correct: true},
            {answerB: "parenthesis", correct: false},
            {answerC: "quotes", correct: false},
            {answerD: "curly brackets", correct: false}
            ]
        },
        {  
            question: "The condition in an if-else statement is enclosed with _______.",
            answers: [
            {answerA: "quotes", correct: true},
            {answerB: "parenthesis", correct: false},
            {answerC: "square brackets", correct: false},
            {answerD: "curly brackets", correct: false}
            ]
        },
        {
            question: "Commonly used data types DO NOT include:",
            answers: [
            {answerA: "Strings", correct: true},
            {answerB: "Booleans", correct: false},
            {answerC: "alerts", correct: false},
            {answerD: "numbers", correct: false}
            ]
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: [
            {answerA: "terminal/bash", correct: true},
            {answerB: "javascript", correct: false},
            {answerC: "for loops", correct: false},
            {answerD: "console.log", correct: false}
            ]
        },
        {
            question: "Arrays in javascript can be used to store _______.",
            answers: [
            {answerA: "numbers and strings", correct: true},
            {answerB: "other arrays", correct: false},
            {answerC: "booleans", correct: false},
            {answerD: "all of the above", correct: false}
            ]
        }
        ]
        

        
        function quizStart (){
        

            //once the button is pressed the buttons appear back
            container.setAttribute("style", "display: flex");
            firstPage.setAttribute("style", "display: none");
            console.log("hide quiz main page");

                
                // primer value that question array starts at
                var quesIndex = 0;
                
                // beggining questions...
                quesHeader.textContent = questionnaire[quesIndex].question;
                quesAns1.textContent = questionnaire[quesIndex].answers[0].answerA;
                quesAns2.textContent = questionnaire[quesIndex].answers[1].answerB;
                quesAns3.textContent = questionnaire[quesIndex].answers[2].answerC;
                quesAns4.textContent = questionnaire[quesIndex].answers[3].answerD;
                
                //function for going to the next portion of the page
                function next(){


                     if (quesIndex  >= 0) {      
                         // max number of questions... something happens after                            
                         if (quesIndex === 4) {
                          console.log("you are done!!");
                          container.setAttribute("style", "display: none");
                         } 
                         
                        // actually goes up the index and displays it on the page
                         quesIndex++;
                         console.log("question answered");
                    quesHeader.textContent = questionnaire[quesIndex].question;
                    quesAns1.textContent = questionnaire[quesIndex].answers[0].answerA;
                    quesAns2.textContent = questionnaire[quesIndex].answers[1].answerB;
                    quesAns3.textContent = questionnaire[quesIndex].answers[2].answerC;
                    quesAns4.textContent = questionnaire[quesIndex].answers[3].answerD;
                    
                }
            }
                // I'm not really sure...
                function checkAnswer(event){
                    console.log(event.target);
                    const selectedAnswer = event.target;
                    const correctAns = selectedAnswer.dataset.correct;
                    console.log(correctAns);

                }

        
            //  runs function to go up the index once a an answer is chosen
            quesBtn1.addEventListener("click", next);
            quesBtn2.addEventListener("click", next);
            quesBtn3.addEventListener("click", next);
            quesBtn4.addEventListener("click", next);

            // checkAnswer right or wrong
            quesBtn1.addEventListener("click", checkAnswer);
            quesBtn2.addEventListener("click", checkAnswer);
            quesBtn3.addEventListener("click", checkAnswer);
            quesBtn4.addEventListener("click", checkAnswer);

            
        //function for timer itself
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
    
    // starts main function for quiz game
    startBtn.addEventListener("click", quizStart)       