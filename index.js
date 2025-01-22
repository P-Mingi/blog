/** Topic btn changer **/

var x = document.getElementById("div1")
x.hidden = false;
x.classList.toggle("btnstyle");

var y = document.getElementById("div2")
y.hidden = true;

var z = document.getElementById("div3")
z.hidden = true;

var btnstyle1 = document.getElementById("button1");
btnstyle1.style.backgroundColor = 'red'
var btnstyle2 = document.getElementById("button2");
var btnstyle3 = document.getElementById("button3");

var topicTitle = document.getElementById("title_topic");


function topicFunction1() {

  if (x.style.display === "flex") {
    y.style.display = "none";
    z.style.display = "none";
    
  } else{
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    btnstyle1.style.backgroundColor = 'red'
    btnstyle2.style.backgroundColor = 'white'
    btnstyle3.style.backgroundColor = 'white'
    topicTitle.innerHTML = "Housing"
  }

}

function topicFunction2() {
  if (y.style.display === "flex") {
    x.style.display = "none";
    z.style.display = "none";
    
  } else{
    y.style.display = "flex";
    x.style.display = "none";
    z.style.display = "none";
    btnstyle1.style.backgroundColor = 'white'
    btnstyle2.style.backgroundColor = 'red'
    btnstyle3.style.backgroundColor = 'white'
    topicTitle.innerHTML = "Funny story"
  }
}

function topicFunction3() {
  if (z.style.display === "flex") {
    
    x.style.display = "none";
    y.style.display = "none";
  } else{
    z.style.display = "flex";
    x.style.display = "none";
    y.style.display = "none";
    btnstyle1.style.backgroundColor = 'white'
    btnstyle2.style.backgroundColor = 'white'
    btnstyle3.style.backgroundColor = 'red'
    topicTitle.innerHTML = "Morning routine"
  }
}
