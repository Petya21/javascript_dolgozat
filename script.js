var macska1= document.getElementById("lilbub");
var macska2= document.getElementById("bob");
var macska3= document.getElementById("grumpy");
var macska4= document.getElementById("colonel");
var macska5= document.getElementById("lilbub2");
var macska6= document.getElementById("bob2");
var macska7= document.getElementById("grumpy2")
var macska8= document.getElementById("colonel2");
var close= document.querySelector(".close");
var kepek= document.getElementById("macskakepek2");

macska1.onclick=function(){
    macska5.style.display="block";
    macska6.style.display="none";
    macska7.style.display="none";
    macska8.style.display="none";
}

macska2.onclick=function(){
    macska5.style.display="none";
    macska6.style.display="block";
    macska7.style.display="none";
    macska8.style.display="none";
}

macska3.onclick=function(){
    macska5.style.display="none";
    macska6.style.display="none";
    macska7.style.display="block";
    macska8.style.display="none";
}

macska4.onclick=function(){
    macska5.style.display="none";
    macska6.style.display="none";
    macska7.style.display="none";
    macska8.style.display="block";
}

close.onclick=function(){
    macska5.style.display="none";
    macska6.style.display="none";
    macska7.style.display="none";
    macska8.style.display="none";
}
