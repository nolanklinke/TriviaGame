$(document).ready(function() {
    $("#questionsGoHere").hide();
    
});



//state all variables needed for object (trivia game)
var trivia = {
    questions: ["Which doughnut was considered a staple of the New England diet since the pilgrims and traditionally looks like a 'small, braided torpedo'?",
                "How many doughnuts are made in the U.S. each year?",
                "National Donut Day was established in 1938 to celebrate the Salvation Army Workers (“Doughnut Girls”) who supplied free donuts to American troops during WWI. When is National Donut Day?",
                "What holiday was celebrated by bobbing for doughnuts hung from a string?",
                "Which city has the most doughnut shops per person?"
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
            
    countdownTimer: 30,
    correct: 0,
    wrong: 0,

//show start page html on page refresh with function
    reset: function() {
        
    }





//create for loop or function to cycle through questions array and display 

//create timing event to call each html section after certain time


};


