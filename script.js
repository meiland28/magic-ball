$(document).ready(function()
{
  var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Definitely", "You may rely on it", "Yes as I see it", "Most likely", "Outlook good", "Signs point to yes", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	
  $("#answer").hide();
 
  magic8Ball.askQuestion = function(question)
  {
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];
 
      $("#answer").hide();
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(4000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
 
      console.log(question);
      console.log(answer);
  };

    $("#answer").hide();

  $("#questionButton").click(function()
  {
    $("#answer").hide(); 
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(
      function()
      {
        $("#8ball").effect( "shake" );
        var question = prompt("Ask a yes or no question");
        magic8Ball.askQuestion(question);
        }, 500);
});
});