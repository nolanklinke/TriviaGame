//state all variables needed for object (trivia game)
var trivia = {
    questions: ["Which doughnut was considered a staple of the New England diet since the pilgrims and traditionally looks like a 'small, braided torpedo'?",
                "How many doughnuts are made in the U.S. each year?",
                "National Donut Day was established in 1938 to celebrate the Salvation Army Workers (“Doughnut Girls”) who supplied free donuts to American troops during WWI. When is National Donut Day?",
                "What holiday was celebrated by bobbing for doughnuts hung from a string?",
                "Which city has the most doughnut shops per person?", 
], 
    options: [
        ["Old-fashioned", "Cinnamon Twist", "Cruller", "Scone"],
        ["About 100 Million", "About 1 Billion", "About 5 Billion", "About 10 Billion"],
        ["November 5th", "February 9th", "The 1st Friday of June", "The 2nd Sunday of August"],
        ["Independence Day", "Halloween", "Hanukkah", "Thanksgiving"],
        ["Boston, MA", "Long Beach, CA", "Dallas, TX", "Sacramento, CA"],
],
    answers: ["Cruller", 
            "About 10 Billion", 
            "The 1st Friday of June", 
            "Halloween", 
            "Boston, MA"],
    countdownTimer: 15,
    clockCounter: 20,
    counter: 0,
    correct: 0,
};


$(document).ready(function() {

    function correct() {
        trivia.correct++;
        trivia.counter++;
        $("#timer").hide();
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Yes, That is correct!");
        setTimeout(function() {
            nextQuestion();
          }, 4000);
    }

    function incorrect() {
        $("#timer").hide();
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Sorry, That is incorrect! The correct option was " + trivia.answers[trivia.counter] + ".");
        trivia.counter++;
        setTimeout(function() {
            nextQuestion();
          }, 4000);
    }

    function timeUp() {
        $("#timer").hide();
        trivia.counter++;
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Woops! You ran out of time!");
        setTimeout(function() {
            nextQuestion();
          }, 4000);

          
    }

    function finalPage() {
        clearInterval(theClock);
        document.getElementById("questionsGoHere").innerHTML = "You got " + trivia.correct + " out of 5 correct.";
        document.getElementById("startGame").innerHTML = "Play Again?";
        $("#startGame").show();
    }

    function timer() {
        
        theClock = setInterval(twentySeconds, 1000);
        function twentySeconds() {
            if (trivia.clockCounter === 0) {
                clearInterval(theClock);
                timeUp();
            }
            if (trivia.clockCounter > 0) {
                trivia.clockCounter--;
            }
            $("#timer").html("Time remaining: " + trivia.clockCounter + " seconds.");
        }
    }


    function nextQuestion() {



        if (trivia.counter < 5) {
        trivia.clockCounter = 20;    
        $("#timer").show();
        $("#questionsGoHere").show();
        $("#optionsGoHere").show();
        document.getElementById("questionsGoHere").innerHTML = trivia.questions[trivia.counter];
        makeOptions(trivia.options[trivia.counter]); 

        } else {
            finalPage();
        } 
    };

    

    $("#questionsGoHere").hide();
    $("#optionsGoHere").hide();
    
    $("#startGame").on("click", function(){
        $("#timer").show();
        trivia.clockCounter = 20;
        timer();
        trivia.counter = 0;
        trivia.correct = 0;

        document.getElementById("questionsGoHere").innerHTML = trivia.questions[0];
        $("#questionsGoHere").show();
        $("#optionsGoHere").show();
        $("#startGame").hide();

        makeOptions(trivia.options[trivia.counter]);
        
});

var makeOptions = function(arrayIndex) {
    $("#optionsGoHere").empty();

    for (var i = 0; i < arrayIndex.length; i++) {
        var newDiv = $("<div>");
        newDiv.addClass("optionBtn btn btn-lg btn-outline-dark btn-block mx-auto m-2");
        newDiv.data("answer", arrayIndex[i]);
        newDiv.text(arrayIndex[i]);
        $("#optionsGoHere").append(newDiv);

    };

    $(".optionBtn").on("click", function() {
        var userPick = $(this).data("answer")

        if (userPick === trivia.answers[trivia.counter]) {
            correct();
        
        } else if (userPick !== trivia.answers[trivia.counter]) {
            incorrect();
            
        }
    });
  };

  
});



