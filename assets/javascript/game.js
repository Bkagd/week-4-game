// Declare Global Variables
    var randomNum = 0;
    var buttonOne = 0;
    var buttonTwo = 0;
    var buttonThree = 0;
    var buttonFour = 0;


    function start() {
        randomNum = Math.floor((Math.random() * 100) + 10);
        $(".randomNum").text(randomNum);
        console.log(randomNum);

        buttonOne = Math.floor(randomNum / 4);
        buttonTwo = Math.floor(randomNum / 6);
        buttonThree = Math.floor(randomNum / 8);
        buttonFour = 1;
        console.log(buttonOne);
        console.log(buttonTwo);
        console.log(buttonThree);
        console.log(buttonFour);
        
    }
    start();

