var x = document.getElementById("div1")
x.hidden = false;
x.classList.toggle("btnstyle");


var y = document.getElementById("div2")
y.hidden = true;

var z = document.getElementById("div3")
z.hidden = true;

var btn1 = document.getElementById("button1")
var btn2 = document.getElementById("button2")
var btn3 = document.getElementById("button3")

var btnstyle1 = document.getElementById("button1");
btnstyle1.style.backgroundColor = 'red'

var btnstyle2 = document.getElementById("button2");


var btnstyle3 = document.getElementById("button3");



/*btnstyle2.classList.toggle("btnostyle");
btnstyle3.classList.toggle("btnostyle");*/



function myFunction1() {


    
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
  }

}

function myFunction2() {

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
  }
}

function myFunction3() {
   

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
  }
}
