$(document).ready(function(){
    var questionArray = [
        questionOne = {
            question: "What is Bender's full name?",
            answer1: "Bender",
            answer2: "Bender Bending Rodriguez",
            answer3: "Bender Smith",
            answer4: "Bending Bender",
            correct: "Bender Bending Rodriguez",
            gif: "<img src='assets/images/Bender_Turtle.gif' height='200' width='auto'></img>"
        },
        questionTwo = {
            question: "Who was the alien found at Roswell in 1947?",
            answer1: "Bender",
            answer2: "Lrrr",
            answer3: "Zoidberg",
            answer4: "Kiff",
            correct: "Zoidberg",
            gif: "<img src='assets/images/zoidberg.gif' height='200' width='auto'></img>"
        },
        questionThree = {
            question: "Which part of Bender's apartment does Fry end up living in?",
            answer1: "Bender's Closet",
            answer2: "Bender's Car",
            answer3: "Bender's Living Room",
            answer4: "Bender's Spare Bedroom",
            correct: "Bender's Closet",
            gif: "<img src='assets/images/Bender_Fry.gif' height='200' width='auto'></img>"
        },
        questionFour = {
            question: "Who forms the Robot Mafia?",
            answer1: "Donbot, Bender, Clamps",
            answer2: "Donbot, Clamps, Joey Armstrong",
            answer3: "Dontbot, Bender, Joey Mousepad",
            answer4: "Donbot, Clamps, Joey Mousepad",
            correct: "Donbot, Clamps, Joey Mousepad",
            gif: "<img src='assets/images/Robot_Mafia.gif' height='200' width='auto'></img>"
        },
        questionFive = {
            question: "What lost city did The Crew discover?",
            answer1: "Atlantis",
            answer2: "El Dorado",
            answer3: "Atlanta",
            answer4: "Valhalla",
            correct: "Atlanta",
            gif: "<img src='assets/images/Atlanta.gif' height='200' width='auto'></img>"
        },
        questionSix = {
            question: "How is Professor Farnsworth related to Fry?",
            answer1: "He is Fry's Uncle",
            answer2: "He is Fry's Great Grandfather",
            answer3: "He is Fry's Great Nephew",
            answer4: "He is Fry's future clone",
            correct: "He is Fry's Great Nephew",
            gif: "<img src='assets/images/Farnsworth_Go.gif' height='200' width='auto'></img>"
        },
        questionSeven = {
            question: "What is Leela's heritage?",
            answer1: "An unknown alien baby",
            answer2: "A sewer mutant",
            answer3: "The last Cyclopian",
            answer4: "A human",
            correct: "A sewer mutant",
            gif: "<img src='assets/images/Leela.gif' height='200' width='auto'></img>"
        },
        questionEight = {
            question: "What basketball team challenged Earth?",
            answer1: "The Globetrotters",
            answer2: "The Sixers",
            answer3: "The Celtics",
            answer4: "The Generals",
            correct: "The Globetrotters",
            gif: "<img src='assets/images/Globetrotters.gif' height='200' width='auto'></img>"
        },
        questionNine = {
            question: "What is the name of Bender's D&D character?",
            answer1: "Bender",
            answer2: "Thud Smashington",
            answer3: "Titanius Anglesmith",
            answer4: "Benderous Wizardman",
            correct: "Titanius Anglesmith",
            gif: "<img src='assets/images/Titanius.gif' height='200' width='auto'></img>"
        },
        questionTen = {
            question: "Who won the pet competition?",
            answer1: "Zoidberg",
            answer2: "Nibler",
            answer3: "The Hypnotoad",
            answer4: "Fluffy",
            correct: "The Hypnotoad",
            gif: "<img src='assets/images/hypnotoad.gif' height='200' width='auto'></img>"
        },
    ]; // End questionArray
    console.log(questionArray);

    // Variables
    var wins = 0;
    var losses = 0;
    var timeLoss = 0;
    var time = 30;
    var clock = false;
    var intervalID;
    var outOfTimeGif = "<img src='assets/images/angry.gif' height='200' width='auto'></img>";

    // Start the timer
    function start() {
        if (!clock) {
            clock = true;
            intervalID = setInterval(count, 1000);
        };
    };

    // Out of Time
    function outOfTime() {
        if (time === 0) {
            stop();
            $(".answers").hide();
            $(".questions").hide();
            $(".score").show();
            timeLoss++;
            $("#score").text("Correct: " + wins + " Losses: " + losses + " Unanswered: " + timeLoss);
            $("#winLoss").text("Answer faster!");
            $("#gif").html(outOfTimeGif);
            i++;
            setTimeout(nextQuestion, 5000);
        };
    };

    // Clock
    function count(){
        time--;
        $(".timer").text("Time: " + time);
        outOfTime();
    };

    // Stop Clock
    function stop(){
        clock = false;
        clearInterval(intervalID);
        time = 30;
        $(".timer").text("Time: " + time);
    };

    // Start Game
    $("#startGame").on("click", function(){
        $("#startGame").hide();
        start();
        startGame();
    });

    $(".startAgain").on("click", function(){
        $(".startAgain").hide();
        $(".score").hide();
        $(".questions").show();
        $(".answers").show();
        wins = 0;
        losses = 0;
        timeLoss = 0;
        i = 0;
        start();
        startGame();
    });

    // Here comes the actual Quiz
    var i = 0;

    function startGame() {
        $(".questions").html("<h1>" + questionArray[i].question + "</h1>");
        $("#answerOne").html("<button class='btn btn-success'>" + questionArray[i].answer1 + "</button>");
        $("#answerTwo").html("<button class='btn btn-success'>" + questionArray[i].answer2 + "</button>");
        $("#answerThree").html("<button class='btn btn-success'>" + questionArray[i].answer3 + "</button>");
        $("#answerFour").html("<button class='btn btn-success'>" + questionArray[i].answer4 + "</button>");
    };

    function winLoss() {
        $(".score").show();
        $("#answer").text("Correct answer: " + questionArray[i].correct);
        $("#gif").html(questionArray[i].gif);
        $("#score").text("Correct: " + wins + " Losses: " + losses + " Unanswered: " + timeLoss);
        stop();
        i++;
        setTimeout(nextQuestion, 5000);
    };

    function win() {
        wins++;
        $(".answers").hide();
        $(".questions").hide();
        $("#winLoss").text("Good news!");
        winLoss();
    };

    function loss() {
        losses++;
        $(".questions").hide();
        $(".answers").hide();
        $("#winLoss").text("Oh my...");
        winLoss();
    };

    // Next Question
    function nextQuestion() {
        if (i === 10) {
            $("#score").text("Correct: " + wins + " Losses: " + losses + " Unanswered: " + timeLoss);
            $("#gif").html("<img src='assets/images/Game_Over.gif' height='200' width='auto'></img>");
            $(".startAgain").show();
        } else {
            $(".score").hide();
            $(".questions").show();
            $(".answers").show();
            start();
            startGame();
        };
    };

    // If answer is correct or not
    $("#answerOne").on("click", function() {
        if (questionArray[i].answer1 === questionArray[i].correct) {
            win();
        } else {
            loss();
        };
    });
    $("#answerTwo").on("click", function() {
        if (questionArray[i].answer2 === questionArray[i].correct) {
            win();
        } else {
            loss();
        };
    });
    $("#answerThree").on("click", function() {
        if (questionArray[i].answer3 === questionArray[i].correct) {
            win();
        } else {
            loss();
        };
    });
    $("#answerFour").on("click", function() {
        if (questionArray[i].answer4 === questionArray[i].correct) {
            win();
        } else {
            loss();
        };
    });

}); //End Ready Function