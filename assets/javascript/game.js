 var teamNames = ['celtics', 'raptors', 'suns', 'nets', 'cavaliers',
        'bucks', 'pacers','bulls','pistons','wizard','hawks','heat',
        'hornets','mavericks','jazz','thunders','nuggets','warriors','clippers',
        'grizzles','timberwovles','pelicans','knicks','spurs','lakers'];
    
    console.log(teamNames.length);
      var wins=0;
      var word;
      var correctWord = [];
      var guess;
      var guessStored=[];
      var guessStoredWord;
      var usedLetter = [];
      var isOver=0;
      var space;
      var lives = 10;


    reset = function(){
      var word;
      var correctWord = [];
      var guess;
      var guessStored=[];
      var guessStoredWord;
      var usedLetter = [];
      var isOver=0;
      var space;
      var lives = 10;
    }

    reset();

    play = function(){
      word = teamNames[Math.floor(Math.random() * teamNames.length)];
      console.log(word);
       for(var i=0; i<word.length; i++){
          
           correctWord[i] = word[i];
          
        }
      console.log(correctWord);
    }

    var showlives = document.getElementById("livesLeft");
    var usedHolder = document.getElementById("guessedLetter");
    var winsTotal = document.getElementById("wins");
    // show lives
      comments = function(){
      showlives.innerHTML = "# of guessing remaining: " + lives;
      usedHolder.innerHTML = usedLetter;
      if(lives < 1){
        showlives.innerHTML = "Game over!";
        document.onkeyup = "";
      }

      if(lives > 0 && isOver){
        showlives.innerHTML = "# of guessing remaining: " + lives + "! ~~You win!~~"; 
        wins += 1;
        document.onkeyup = "";

      }

      winsTotal.innerHTML = wins;
    }

   
   result = function () {
     var  wordHolder = document.getElementById('hold');
    
        for (var i = 0; i < word.length; i++) {
        guessStored.push('_ ');
    }
    guessStoredWord = guessStored.join("");
    wordHolder.innerHTML = guessStoredWord;
  }

    play();
    result();

   document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;
        var guessWord;
               // Alerts the key the user pressed (userGuess).
        // alert(userGuess);

        if(correctWord.indexOf(userGuess) === -1){
            lives -= 1;
        }
        console.log("lives:" + lives)
        console.log(correctWord);

        for(var i=0; i<word.length; i++){  //"_ _ _ "
          if(userGuess === word[i]){
                guessStored[i] = word[i];
          }
        }
        guessStoredWord = guessStored.join("");
        wordHolder.innerHTML = guessStoredWord;
        console.log("guess word is " + guessStored);

        guessWord = guessStored.join("");
        console.log(guessWord);
        if(guessWord === word)
        {
          isOver = true;
        }
        else
        {

        }
        //store the used letter and display them
        if(usedLetter.indexOf(userGuess) === -1)
        {
          usedLetter.push(userGuess);
        }
        comments();

        if(0){
        reset();
        console.log("reset the isOver value to be: " + isOver)
        play();
        result();
        console.log("after win, new word:" + word);
        console.log("after win, reset:" + guessStoredWord);
      }
  }
