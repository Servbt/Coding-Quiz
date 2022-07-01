
// I want to make a quiz type game

// i need a button that triggers the quiz and the timer
    // for the button I need an event listener ~
    // once the button is clicked I have to hide the contents of the first page ~
    // once they are hidden I have to display the new contents for the quiz
    



    var firstPage = document.getElementById("main-pg");
    var startBtn = document.getElementById("first-btn");
    var timerCnt = document.getElementById("#test")

    function quizStart (){
    
        timerCnt.textContent.value =  "hello";
    
    firstPage.setAttribute("style", "display: none");
    console.log("hide quiz main page");   
    
    var timeLeft = 5;
    var timer = setInterval(function() {
        if (timeLeft > 1){
            timeLeft--;
        } else if (timeLeft === 1){
            console.log("timer over");
            clearInterval(timer);
            textContent = "no more time left";
        };
        
        console.log(timeLeft);
    },1000);


};



startBtn.addEventListener("click", quizStart)