var timer=60;
var score=0;
var hitnumber=0;

function Setscore(){
score+=10;
document.querySelector("#score").textContent=score;
}
function getNewhit(){
 hitnumber=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hitnumber;
}
 function makebubble(){
 var buble="";
 for(var i=0;i<=385;i++){
 var rn= Math.floor(Math.random()*10);
   buble += `<div class="circle">${rn}</div>`;
   
 }
 document.querySelector("#btmbox").innerHTML=buble;
 }
function runtime(){
   var time= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeint").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#btmbox").innerHTML=`<h1>GAME OVER </h1>`;
        }
    },1000);
}
var a=document.querySelector("#btmbox")
a.addEventListener("click",function(detail){
var click=Number(detail.target.textContent);
if(click==hitnumber){
    Setscore();
    makebubble();
getNewhit();
}
})
runtime();
makebubble();
getNewhit();
