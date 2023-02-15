
function whodat() {
   const username = prompt("what is your name?");
   if(username != null) {
       alert("What's Up, " + username);
   }else{
        alert("What's Up");
   }
}
whodat();
function newtocoding() {
    const answer = prompt("Are you new to coding?");
    if(answer == "yes") {
        alert("Start in the Markdown section")
    }else if(answer == "no") {
        alert("Share with someone who is! I hope you enjoy the Page!")

    }else{
        alert("Welcome!")
    }   
}
newtocoding();
function construction() {
    alert("Reminder! This page is always under construction!")
}
construction();

function rate(){
    const rating = parseInt(prompt('How would you rate my webpage?'));
    for (let index = 0; index < rating; index++) {
        const img = document.createElement('img');
        img.src ='https://hotemoji.com/images/dl/w/5-thumbs-up-emoji-by-google.png'
        document.getElementById('imgholder').appendChild(img);
        
    }
}
const button = document.getElementById('ratebutton');
button.addEventListener('click', rate);

// let strings = "repeat this";

// function loop()