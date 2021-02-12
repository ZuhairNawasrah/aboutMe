'use strict';
//------------------------------------Lab-02/Q-1-----------------------------------------//
let userName = prompt('What\'s your name?');
let mark = 0;
alert(`Welcome to our website Mr.${userName}☺`);
document.getElementById('welcome').innerHTML = `Welcome ${userName}, its a glad to see you joining our website.`;
function questOne() {
  let amIPro = prompt('Am I a professional Web Developer(Y/N)?');
  if (amIPro.toUpperCase() === 'Y') {
    alert('Thank you for your response, which is Yes☺');
    mark += 1;
  } else {
    alert('Nope, I am pro☺, but you don\'t know me well!!');
  }
}
questOne();
//---------------------------------------Q-2---------------------------------------------//
function questTwo() {
  let engLevel = prompt('Am I a native english speaker(Y/N)?');
  if (engLevel.toUpperCase() === 'N') {
    alert('Nice☺, you know a bit about me by saying No');
    mark += 1;
  } else {
    alert('Actually I am not, you really don\'t know many things about me');
  }
}
questTwo();
//---------------------------------------Q-3---------------------------------------------//
function questThree() {
  let likeWork = prompt('Do I like my work(Y/N)?');
  if (likeWork.toUpperCase() === 'Y') {
    alert('As you said, of course I do☺☺');
    mark += 1;
  } else {
    alert('Your answer is wrong, I really like it');
  }
}
questThree();
//---------------------------------------Q-4---------------------------------------------//
function questFour() {
  let favColor = prompt('Do I like White as my favorite color(Y/N)?');
  if (favColor.toUpperCase() === 'Y') {
    alert('Yp...for sure☺');
    mark += 1;
  }
  else {
    alert('Nope...I really like it');
  }
}
questFour();
//---------------------------------------Q-5---------------------------------------------//
function questFive() {
  let favMusic = prompt('Do I like Jazz as my favorite music(Y/N)?');
  if (favMusic.toUpperCase() === 'N') {
    alert('That\'s right...I hate that type a lot');
    mark += 1;
  } else {
    alert('You have to search about me, so you learn a bit about me, because I don\'t like it ');
  }
}
questFive();
//------------------------------------Lab-03/Q-6-----------------------------------------//
function questSix() {
  let attempt = 4;
  let guessNo = '';
  for (let i = 0; i < attempt; i = 0) {
    guessNo = parseInt(prompt('an you guess what\'s my favorite number (1~10)?'));
    attempt -= 1;
    if (guessNo === 9) {
      mark += 1;
      alert('Congratulations, your answer is correct!!☺☺');
      alert('Like you guessed, the correct answer is 9');
      break;
    } else if (guessNo > 0 && guessNo <= 5) {
      alert(`It's too low, you now have ${attempt} tries left.`);
    } else if (guessNo >= 6 && guessNo <= 10) {
      alert(`It's too close, you now have ${attempt} tries left.`);
    } else {
      alert('Your answer not within the range, plz wake up then comeback and try again☺☺☺');
    }
  }
  if (guessNo !== 9) {
    alert('Unfortunately, you didn\'t guess the right answer, which is (9)');
  }
}
questSix();
//---------------------------------------Q-7---------------------------------------------//
const colorArr = ['WHITE', 'BLACK', 'LIGHT GRAY', 'PURPLE', 'BROWN'];
function questSeven() {
  let favoriteColor = '';
  let colorAttempt = 6;
  for (let i = 0; i < colorAttempt; i = 0) {
    favoriteColor = prompt('Can you guess one of my favorite colors?').toUpperCase();
    colorAttempt -= 1;
    if (colorArr.indexOf(favoriteColor) !== -1) {
      mark += 1;
      alert('Congratulations, your guess is correct!!☺');
      break;
    } else {
      alert(`Nope, you didn't guess a correct answer, now you have ${colorAttempt} tries left.`);
    }
  }
}
questSeven();
alert(`Your score is (${mark}/7)`);
let colorList = '<ul>';
for (let i = 0; i < colorArr.length; i++) {
  colorList = colorList + '<li>' + colorArr[i] + '</li>';
}
colorList = colorList + '</ul>';
document.getElementById('colorList').innerHTML = `My favorite colors list as follow: ${colorList}`;
