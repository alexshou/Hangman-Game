 var teamNames = ['celtics', 'raptors', 'suns', 'nets', 'cavaliers',
        'bucks', 'pacers','bulls','pistons','wizard','hawks','heat',
        'hornets','mavericks','jazz','thunders','nuggets','warriors','clippers',
        'grizzles','timberwovles','pelicans','knicks','spurs','lakers'];
    var word;
    var correctWord = [];
    var guess;
    var guessStored = [];
    var lives;
    var wins;
    var space; 
    console.log(teamNames.length);

    play = function(){
      word = teamNames[Math.floor(Math.random() * teamNames.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      for(var i=0; i<word.length; i++){
          
           correctWord[i] = word[i];
          
        }
      console.log(correctWord);
    }

    lives = 5;
    var showlives = document.getElementById("livesLeft");
    // show lives
    comments = function(){
      showlives.innerHTML = "You have " + lives + " lives left!";
      if(lives < 1)
        showlives.innerHTML = "Game over!";
      if(lives > 0 && 1)
        showlives.innerHTML = "";  
    }

   // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        guessStored.push('_ ');
    }
    wordHolder.innerHTML = guessStored;
  }

 
  console.log(guessStored);

   document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;
        var guessWord;
               // Alerts the key the user pressed (userGuess).
        alert(userGuess);

        for(var i=0; i<word.length; i++){  //"_ _ _ "
          if(userGuess === word[i]){
                guessStored[i] = word[i];
          }
        }
        wordHolder.innerHTML = guessStored;
        console.log("guess word is " + guessStored);

        for(var i=0; i<word.length; i++){  //"_ _ _ "
                guessWord += guessStored[i];
        }
        console.log(guessWord);
        if(guessWord === word)
        {
          alert("You Win!");
          document.onkeyup = " ";
        }
      }

    play();
    result();
    comments();
    //document.onkeyup();

    // type function

   