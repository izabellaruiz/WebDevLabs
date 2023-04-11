//a function that is initialized as soon as the page loads see line 30
function start() {
  //a variable that gets the button on line 11
  var button = document.getElementById('tChange');
  //a command that says when button is clicked run the function 'change'
  button.onclick = change;
}
//a function that changes style elements
function change(){
  //manipulates specific parts of the style
  document.getElementById('change').style.fontSize='25px';
  document.getElementById('change').style.font='times'
  document.getElementById('change').style.color='pink';
  document.getElementById('change').style.backgroundColor='black'
}
//a command that says when the window loads, run the function 'start'
    window.onload = start;