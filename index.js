/** Topic btn changer **/

var x = document.getElementById("div1")
x.hidden = false;
x.classList.toggle("btnstyle");

var y = document.getElementById("div2")
y.hidden = true;

var z = document.getElementById("div3")
z.hidden = true;

var xx = document.getElementById("div4")
xx.hidden = false;
xx.classList.toggle("btnstyle");

var yy = document.getElementById("div5")
yy.hidden = true;

var zz = document.getElementById("div6")
zz.hidden = true;



var btnstyle1 = document.getElementById("button1");
btnstyle1.style.backgroundColor = '#69707d'
btnstyle1.style.color = '#fff'
 btnstyle1.style.border = '1px solid #69707d'
var btnstyle2 = document.getElementById("button2");
var btnstyle3 = document.getElementById("button3");

var btnstyle4 = document.getElementById("button4");
btnstyle4.style.backgroundColor = '#69707d'
btnstyle4.style.color = '#fff'
 btnstyle4.style.border = '1px solid #69707d'

var btnstyle5 = document.getElementById("button5");
var btnstyle6 = document.getElementById("button6");

var topicTitle = document.getElementById("title_topic");


function topicFunction1() {

  if (x.style.display === "flex") {
    y.style.display = "none";
    z.style.display = "none";
    
  } else{
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    btnstyle1.style.backgroundColor = '#69707d'
    btnstyle2.style.backgroundColor = 'white'
    btnstyle3.style.backgroundColor = 'white'

    btnstyle1.style.color = '#fff'
    btnstyle2.style.color = '#69707d'
    btnstyle3.style.color = '#69707d'

    btnstyle1.style.border = '1px solid #69707d'
    btnstyle2.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    btnstyle3.style.border = '1px solid rgba(221, 221, 223, 0.8)'

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
    btnstyle2.style.backgroundColor = '#69707d'
    btnstyle3.style.backgroundColor = 'white'
    btnstyle1.style.color = '#69707d'
    btnstyle2.style.color = '#fff'
    btnstyle3.style.color = '#69707d'
    btnstyle1.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    btnstyle2.style.border = '1px solid #69707d'
    btnstyle3.style.border = '1px solid rgba(221, 221, 223, 0.8)'

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
    btnstyle3.style.backgroundColor = '#69707d'
    btnstyle1.style.color = '#69707d'
    btnstyle2.style.color = '#69707d'
    btnstyle3.style.color = '#fff'
    btnstyle1.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    btnstyle2.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    btnstyle3.style.border = '1px solid #69707d'

    topicTitle.innerHTML = "Morning routine"
  }
}

function topicFunction4() {

    if (xx.style.display === "flex") {
      yy.style.display = "none";
      zz.style.display = "none";
    } else{
      xx.style.display = "flex";
      yy.style.display = "none";
      zz.style.display = "none";
      btnstyle4.style.backgroundColor = '#69707d'
      btnstyle5.style.backgroundColor = 'white'
      btnstyle6.style.backgroundColor = 'white'
      btnstyle4.style.color = '#fff'
      btnstyle5.style.color = '#69707d'
      btnstyle6.style.color = '#69707d'
      btnstyle4.style.border = '1px solid #69707d'
      btnstyle5.style.border = '1px solid rgba(221, 221, 223, 0.8)'
      btnstyle6.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    }
  
  }
  
  function topicFunction5() {
    if (yy.style.display === "flex") {
      xx.style.display = "none";
      zz.style.display = "none";
      
    } else{
      yy.style.display = "flex";
      xx.style.display = "none";
      zz.style.display = "none";
      btnstyle4.style.backgroundColor = 'white'
      btnstyle5.style.backgroundColor = '#69707d'
      btnstyle6.style.backgroundColor = 'white'
      btnstyle4.style.color = '#69707d'
      btnstyle5.style.color = '#fff'
      btnstyle6.style.color = '#69707d'
      btnstyle4.style.border = '1px solid rgba(221, 221, 223, 0.8)'
      btnstyle5.style.border = '1px solid #69707d'
      btnstyle6.style.border = '1px solid rgba(221, 221, 223, 0.8)'
    }
  }
  
  function topicFunction6() {
    if (zz.style.display === "flex") {
      xx.style.display = "none";
      yy.style.display = "none";
    } else{
      zz.style.display = "flex";
      xx.style.display = "none";
      yy.style.display = "none";
      btnstyle4.style.backgroundColor = 'white'
      btnstyle5.style.backgroundColor = 'white'
      btnstyle6.style.backgroundColor = '#69707d'
      btnstyle4.style.color = '#69707d'
      btnstyle5.style.color = '#69707d'
      btnstyle6.style.color = '#fff'
      btnstyle4.style.border = '1px solid rgba(221, 221, 223, 0.8)'
      btnstyle5.style.border = '1px solid rgba(221, 221, 223, 0.8)'
      btnstyle6.style.border = '1px solid #69707d'
    }
  }
  
