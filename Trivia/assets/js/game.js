$(document).ready(function(){

    console.log('working');



    // global variable

        var questions = [
            {
            
                question: "what is the worlds longest river",
                answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                answer: "Amazon"
            },
            {
                question: "Which Country has the highest population density",
                answers: ["Macau", "Monaco", "Singapore", "Hong Kong"],
                answer: "Macau"
            },
            {
                question: "what is the largest dessert on Earth",
                answers: ["Sahara", "Gobi", "Arabian", "Kalahari"],
                    answer: "Sahara"
            },
            {
                question: "Which of these countries does <u>NOT</u> have a Monarch",
                answers: ["Portugal", "Denmark", "Belgium", "Spain"],
                answer: "Portugal"
            },
            {
                question: "What is the world's largest lake",
                answers: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron"],
                answer: "Caspian Sea"
            }
        
        ];

        var correct = 0;
        var incorrect = 0;
        var counter = 60;
        var intervalId;
    // functions

        function runTimer() {
            counter = 60;
            clearInterval(intervalId);
            intervalId = setInterval(decrementTimer, 1000)
        }

        function decrementTimer(){
            counter --;
            $('.timer').text('counter');
            console.log(counter);
            if (counter === 0){
                stopTimer();
                console.log('time over')
            }
        }

        function stopeTimer() {
            clearInterval(intervalId);
        }

        function addQuestions(){
            for (var i = 0; i<questions.length; i++)
                $('.questions-box').append($("<h4>"+ question[i].question +"</h4>"));
                for (var k=0; k<questions[i].answers.length; k++){
                    console.log(questions[i].answers)[k];
                    $('.question-box').append($("<input type='radio'" +questions[i].answers[k] + " 'name=question- '" + i + " '>" + questions[i].answer[k] + "<br>"));
                }
                $('.question-box').append('<hr>');
       
            }

            function submitGame() {
                for (var i = 0; i<questions.length; i++) {
                    $.each($("input[name=question-" + i + " ']:checked"), function(){
                        console.log($(this).attr('value'));
                        var userGuess = $(this).attr('value');
                        if (userGuess === question[i].answer){
                            console.log('correct')
                            correct++;

                        } else {
                            console.log('incorrect')
                            incorrect++;
                        }
                    });

                }
                $('.correct').text(correct);
                $('.incorrect').text(incorrect);
                $('.end-screen').show();
            }

            function newGame(){
                correct=0;
                incorrect=0;
                shuffleQuestions();
                shuffleAnswers();
                addQuestions();
                runTimer();
                $(".end-screen").hide();
            }

            function shuffleQuestions(){
                questions.sort(function(a, b){return 0.5 - math.random()});

            }





    // main process

    //addQuestions();
    newGame();

    $('#submitGame').on('click', function(){
        //submitGame();
        stopTimer();
    });
    $('#newGame').on('click', function(){
        newGame();
    }

});

// 1: make files
// 2: html wireframe
// 3: make quesitons array
// 4: add questions to screen
// 5: functions to submit answers and check if they are correct
// 6: make timer functions