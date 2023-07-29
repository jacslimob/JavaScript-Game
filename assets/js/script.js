
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById('myBtn');
var secondsLeft = 20;
var question1 = document.getElementsByClassName('modal-content')[0]
var questionOne = document.getElementById('1');


// Taken from Activity 09-Ins_Intervals
function setTime(event) {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: "+ secondsLeft;
    
    if(secondsLeft === 15) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
    }     
    
  }, 1000);
  
timeEl.textContent = "";
}

//build timer minus for wrong answers and stop for question correct

//correct answers
var oneA = document.getElementById('1a');
var twoB = document.getElementById('2b');
var threeD = document.getElementById('3d');
var fourB = document.getElementById('4b');
var fiveA = document.getElementById('5a');

// Taken from Activity 09-Ins_Intervals

startBtn.addEventListener('click', setTime);
  
// From w3schools.com 
// Get the modal
var modal = document.querySelector(".modal");
var two = document.querySelector(".two");
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var win = document.querySelector('.win');

//has to be a way i can use this to check my answers
/*
for (var i = 0; i < answers.length -1; i += 1) {
  var createDiv = document.createElement('div'),
      text = document.createTextNode(answers[i]);
  
  createDiv.appendChild(text);      
  createDiv.addEventListener("click", checkAnswer(i, answers));
  
  
  answerArea.appendChild(createDiv);
}
}
*/

// THIS IS THE STRUCTURE IM GOING TO USE 66-75
var correctOne = function(){
  modal.style.display = "none";
  two.style.display = "flex";
}

var wrongONe = function(){

}

//could re-write 95+ like this to eliminate variable creation
document.getElementById('1a').onclick = correctOne;
// used startBtn instead of making a new button
startBtn.onclick = function() {
  modal.style.display = "flex";
}

// close and open new
//oneA.onclick = function() {
//  modal.style.display = "none";
//  two.style.display = "flex";
//}

//does the same as above code
//without the [] makes any selection works
//questionOne.onclick = function() {
//  modal.style.display="none";
//  two.style.display="flex";
//}

twoB.onclick = function() {
  two.style.display = "none";
  three.style.display = "flex";
}

threeD.onclick = function() {
  three.style.display = "none";
  four.style.display = "flex";
}

fourB.onclick = function() {
  four.style.display = "none";
  five.style.display = "flex";
}

fiveA.onclick = function() {
  five.style.display = "none";
  win.style.display = "flex";
}

win.onclick = function() {
  win.style.display = "none";

}

