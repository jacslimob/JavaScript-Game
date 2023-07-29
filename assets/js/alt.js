var startBtn = document.getElementById('myBtn');
var secondsLeft = 60;
var timeEl = document.querySelector('.time');
var highscore = document.querySelector('#highscore');
var viewHighScore = document.querySelector('.high-score');
var closeBtn = document.querySelector('#close');
var enterHighscores = document.querySelector('.user-high-score');
var tryAgain = document.querySelector('.try-again');
var userScore = document.getElementById('score');
var submit = document.getElementById('submit');
var text = document.getElementById('text');
//Empty arrays to handle things being added to them
var savedScores = [];
var savedInitial = [];


//this is for high score modal
highscore.onclick = function(){
  viewHighScore.style.display = 'flex';
}
closeBtn.onclick = function(){
  viewHighScore.style.display = 'none';
}


function qDaddy () { 
  startBtn.style.display = 'none'; 

    // Lines 29 to 145 I got most of it from codehim.com. I modified and added code to make it work for me but the general idea is the same.
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'What is JavaScript?' : ['A server-side programming language', 'A client-side scripting language', 'A database management system', 'A markup language', 1],
          
          'How do you declare a variable in JavaScript?' : ['var myVariable', 'int myVariable' , 'variable myVariable', 0],
          
          'What is the correct way to write an if statement in JavaScript?' : ['if (x < 5)', 'if x = 5', 'if x == 5', 'if x === 5', 0],

          'Which method is used to add an element to the end of an array in JavaScript?' : ['array.push()', 'array.unshift()', 'array.append()', 'array.add()', 0],

          'What does the DOM stand for in JavaScript?' : ['Document Object Model', 'Data Object Model', 'Document Oriented Model', 'Data Oriented Model', 0]
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('button'),//change from div to button
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener('click', checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is same as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          // code to minus 20 seconds for wrong answers
          secondsLeft -= 20;
          timeEl.textContent = 'Time: '+ secondsLeft;
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        }else if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          tryAgain.style.display = 'flex';
          timeEl.textContent = '';
        }else {
          //hopefully pauses timer
          clearInterval(timerInterval);
          timeEl.textContent = 'Time: '+ secondsLeft;
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
          document.getElementById('score').textContent = 'Your score is: '+ secondsLeft;
          //highscore input modal
          enterHighscores.style.display = 'flex';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);

     
    // Sets interval in variable. Taken from 'color countdown' assignment
    var timerInterval = setInterval(function() {
      
      
      timeEl.textContent = 'Time: '+ secondsLeft;
      secondsLeft--;
      //console.log(secondsLeft);
       if(secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        tryAgain.style.display = 'flex';
        timeEl.textContent = '';
      }
     
    }, 1000);
    

    
};

startBtn.addEventListener('click', qDaddy);

function saveUserName() {   
  localStorage.setItem('savedInitial', JSON.stringify(savedInitial));
  localStorage.setItem('savedScores', JSON.stringify(savedScores));
    
};

//Stores saved scores Solved Activity 26 module 4
function showHighScore() { 
   //for (var i = 0; i < 5; i++) {
     //for (var j = 1; j <= 13; j+=3) {
     //console.log(i);
     //console.log(j);
    document.querySelectorAll('td')[1].innerHTML = savedInitial[0];
    document.querySelectorAll('td')[2].innerHTML = savedScores[0];
    document.querySelectorAll('td')[4].innerHTML = savedInitial[1];
    document.querySelectorAll('td')[5].innerHTML = savedScores[1];
    document.querySelectorAll('td')[7].innerHTML = savedInitial[2];
    document.querySelectorAll('td')[8].innerHTML = savedScores[2];
    document.querySelectorAll('td')[10].innerHTML = savedInitial[3];
    document.querySelectorAll('td')[11].innerHTML = savedScores[3];
    document.querySelectorAll('td')[13].innerHTML = savedInitial[4];
    document.querySelectorAll('td')[14].innerHTML = savedScores[4];
   
    
 //}
//};
}

//Took from activity 26 in Module 4. Well the idea anyways.
function init() {
  var initial = JSON.parse(localStorage.getItem('savedInitial'));
  var score = JSON.parse(localStorage.getItem('savedScores'));

  if (initial !== null && score !== null) {
    savedInitial = initial;
    savedScores = score;
  }

  showHighScore();
}

submit.addEventListener('click',
function(event) {
  event.preventDefault();
  var initialText = text.value.trim();
  var scoreValue = secondsLeft;
  
  // Add new initial and score to array
  savedInitial.push(initialText);
  savedScores.push(scoreValue);
 
  saveUserName();
  showHighScore();
  
  enterHighscores.style.display = 'none';
  viewHighScore.style.display = 'flex';
});

init();