
let userName = prompt('What\'s your name?');
let amIPro = prompt('Am I a professional Web Developer(Y/N)?');
if (amIPro.toUpperCase === 'Y') {
  alert('Thank you for your response, which is (' + amIPro.toUpperCase() + ')');
  // console.log('Your answer is correct ♥');
} else {
  alert('Thank you for your response, which is (' + amIPro.toUpperCase() + ')');
}
let engLevel = prompt('Am I a native english speaker(Y/N)?');
if (engLevel.toUpperCase() === 'N') {
  alert('You already know about me by answering (' + engLevel.toUpperCase() + ')');
  // console.log('Your answer is correct ♥');
} else {
  alert('Actually I am not, you really don\'t know many things about me');
}
let likeWork = prompt('Do I like my work(Y/N)?');
if (likeWork.toUpperCase() === 'Y') {
  alert('As you said, of course I do ');
  // console.log('Your answer is correct ♥');
} else {
  alert('Your answer is wrong, I really like it');
}
let favColor = prompt('Do I like White as my favorite color(Y/N)?');
if (favColor.toUpperCase() === 'Y') {
  alert('Yp...for sure');
  // console.log('Your answer is correct ♥');
}
else {
  alert('Nope...I really like it');
}
let favMusic = prompt('Do I like Jazz as my favorite music(Y/N)?');
if (favMusic.toUpperCase() === 'N') {
  alert('That\'s right...I hate that type a lot');
  // console.log('Your answer is correct ♥');
} else {
  alert('You have to search about me, so you learn a bit about me, because I don\'t like it ');
}
document.getElementById('h1').innerHTML = 'Welcome ' + userName + ', it\'s a glad to see you joining our website.';
alert('Welcome to our website Mr.' + userName);
