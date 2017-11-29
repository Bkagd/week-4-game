// Declare Global Variables
    var randomNum = 0;
    var score = 0;
    var buttonOne = 0;
    var buttonTwo = 0;
    var buttonThree = 0;
    var buttonFour = 0;
    var wins = 0;
    var losses = 0;

// Randomly sets the # to match and the values of the Rupees
    function start() {
        randomNum = Math.floor((Math.random() * 100) + 10);
        $(".randomNum").text(randomNum + " is the number for you to match!");
        console.log(randomNum);

        buttonOne = Math.floor(randomNum / 4);
        buttonTwo = Math.floor(randomNum / 6);
        buttonThree = Math.floor(randomNum / 8);
        buttonFour = 1;
        score = 0;
        $(".scoreRead").text("Click a Rupee to add to your score!");
        $(".score").text("");

        
    }

    function reset() {
        start();
    }
    start();
    
//On click events for Rupees
   
    $("#buttOne").click(function() {
        score = (buttonOne + score);
        $(".scoreRead").text("You've added " + buttonOne + " to your score");
        $(".score").text(score);
        if (score > randomNum) {
            losses++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Score too high! You lose :(");
            start();
        } else if (score === randomNum) {
            wins++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Bingo Bango Bongo! You Rule!");
            start();
        }
         
        })

    $("#buttTwo").click(function () {
        score = (buttonTwo + score);
        $(".scoreRead").text("You've added " + buttonTwo + " to your score");
        $(".score").text(score);
        if (score > randomNum) {
            losses++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Score too high! You lose :(");
            start();
        } else if (score === randomNum) {
            wins++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Bingo Bango Bongo! You Rule!");
            start();
        }


        })

    $("#buttThree").click(function () {
        score = (buttonThree + score);
        $(".scoreRead").text("You've added " + buttonThree + " to your score");
        $(".score").text(score);
        if (score > randomNum) {
            losses++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Score too high! You lose :(");
            start();
        } else if (score === randomNum) {
            wins++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Bingo Bango Bongo! You Rule!");
            start();
        }

        })

    $("#buttFour").click(function () {
        score = (buttonFour + score);
        $(".scoreRead").text("You've added " + buttonFour + " to your score");
        $(".score").text(score);
        if (score > randomNum) {
            losses++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Score too high! You lose :(");
            start();
        } else if (score === randomNum) {
            wins++;
            $(".winLoss").text("Wins : " + wins + " Losses: " + losses);
            alert("Bingo Bango Bongo! You Rule!");
            start();
        }

        })

// Win / Loss Alerts
    
