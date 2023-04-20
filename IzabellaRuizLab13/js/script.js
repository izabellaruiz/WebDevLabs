//function is initialized once the page loads
function initialize() {
//storing my html element 'changeStyleButton' into the button variable 
    var button = document.getElementById('changeStyleButton');
//assigning the function 'changeContent' as the event handler for the 
//onclick event of my html element (changeStyleButton) inside the button variable.
//when button is pressed, 'changeContent' will be called and execute the code below.
    button.onclick = changeContent;
}

//defining my function and what will be manipulated onscreen once called.
//text and styling of content is modified, the button element is hidden,
//and background color of the page becomes pink.

function changeContent() {
    var content = document.getElementById('content');
    var button = document.getElementById('changeStyleButton');
    content.innerHTML = 'Just Kidding!';
    content.style.fontFamily = 'Great Vibes, cursive';
    content.style.fontSize = '45px';
    button.style.display = 'none';
    document.body.style.backgroundColor = 'pink';
}

//assigning the initialize function as an event handler for the onload event of the window object
//onload event is triggered once my page has finished loading all content.
window.onload = initialize;
