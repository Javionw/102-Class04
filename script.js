
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

var feild = document.quertSelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear') 

feild.onfocus = function(){
    this.setAttribute('placeholder','');
    this.style.borderColor = '#333 ';
    btn.style.display = 'block' 
}
feild.onblur = function(){
    this.setAttribute('placeholder',backUp)
    this.style.bordercolor = '#aaa'
}
clear.onclick = function(){

    btn.style.display = "none";
    feild.value = '';
}

// applepie();

// pie2(9);


// console.log(ingredientX);