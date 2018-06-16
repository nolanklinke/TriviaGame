//state all variables needed for object (trivia game)
var trivia = {
    questions: ["Which doughnut was considered a staple of the New England diet since the pilgrims and traditionally looks like a 'small, braided torpedo'?",
                "How many doughnuts are made in the U.S. each year?",
                "National Donut Day was established in 1938 to celebrate the Salvation Army Workers (“Doughnut Girls”) who supplied free donuts to American troops during WWI. When is National Donut Day?",
                "What holiday was celebrated by bobbing for doughnuts hung from a string?",
                "Which city has the most doughnut shops per person?",
                "Game is Over! You got " 
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
    correct: 0,
    wrong: 0,
};


$(document).ready(function() {

    function correct() {
        trivia.correct++;
        $("#timer").hide();
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Yes, That is correct!");
        setTimeout(function() {
            nextQuestion();
          }, 5000);
    }

    function incorrect() {
        trivia.wrong++;
        $("#timer").hide();
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Sorry, That is incorrect!");
        setTimeout(function() {
            nextQuestion();
          }, 5000);
    }

    function timeUp() {
        trivia.wrong++;
        $("#timer").hide();
        $("#optionsGoHere").hide();
        $("#questionsGoHere").html("Woops! You ran out of time!");
        setTimeout(function() {
            nextQuestion();
          }, 5000);
    }

    /*function run() {
        trivia.countdownTimer = 15;
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }*/


    /*function decrement() {
        $("#timer").html("Time Remaining: " + trivia.countdownTimer + " seconds.");
        trivia.countdownTimer--;
        

        if (trivia.countdownTimer < 0) {
            timeUp();
            
        }
    }*/

    function nextQuestion() {
        trivia.questions.shift();
        trivia.options.shift();
        trivia.answers.shift();
        //$("#timer").show();
        $("#questionsGoHere").show();
        $("#optionsGoHere").show();
        document.getElementById("questionsGoHere").innerHTML = trivia.questions[0];
        makeOptions(trivia.options[0]);  
        
    };

    

    $("#questionsGoHere").hide();
    $("#optionsGoHere").hide();
    
    $("#startGame").on("click", function(){
        //run();

        document.getElementById("questionsGoHere").innerHTML = trivia.questions[0];
        $("#questionsGoHere").show();
        $("#optionsGoHere").show();
        $("#startGame").hide();

        makeOptions(trivia.options[0]);
        
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

        if (userPick === trivia.answers[0]) {
            //run();
            correct();
        
        } else if (userPick !== trivia.answers[0]) {
            //run();
            incorrect();
            
        }
    });
  };

  
});

/*// Function for displaying movie data
function renderButtons() {

    // YOUR CODE GOES HERE
    for (var i = 0; i < movies.length; i++) {
      $("#movies-view").append("<button>" + movies[i] + "</button>");
    }

  }

  // This function handles events where one button is clicked
  $("#add-movie").on("click", function() {

    // YOUR CODE GOES HERE

  });

  // Calling the renderButtons function to display the initial list of movies
  renderButtons();*/
