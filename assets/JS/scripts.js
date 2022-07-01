
// I want to make a quiz type game

// i need a button that triggers the quiz and the timer
    // for the button I need an event listener 
    // once the button is clicked I have to hide the contents of the first page
    // once they are hidden I have to display the new contents for the quiz
    
    var firstPage = document.getElementById("main-pg");
    var startBtn = document.getElementById("first-btn");


function quizStart (){
    console.log("front button pressed");
    firstPage.setAttribute("style", "display: none");
};



startBtn.addEventListener("click", quizStart)