var hero= document.getElementById("hero");
var ghost= document.getElementById("ghost");
var main=document.getElementById("main");
var okk=document.getElementById("ok");
var nameqs=document.getElementById("nameqs");
var gameover=document.getElementById("gameover");
var settingsimg=document.getElementById("settingsimg")
var settingspage=document.getElementById("settingspage")
var closee=document.getElementById("x");
var herocolor=document.getElementById("herocolor");
var speeed=document.getElementById("speed")

document.addEventListener('contextmenu', function(e){
      'use strict';
      e.preventDefault();
})

function jump(){
      document.getElementById("hero").classList.add('jump');
      setTimeout(function(){ document.getElementById("hero").classList.remove('jump');
}
,700)
document.getElementById("scorecount").innerHTML++;
}

function down(){
      document.getElementById("hero").classList.add('down');
      setTimeout(function(){ document.getElementById("hero").classList.remove('down');
}
,700)
document.getElementById("scorecount").innerHTML++;
}

function jumpup(){
      document.getElementById("hero").classList.add('jumpup');
      setTimeout(function(){ document.getElementById("hero").classList.remove('jumpup');
}
,700)
document.getElementById("scorecount").innerHTML++;
}

var check=setInterval(function(){
      
      var herotop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
      var ghostleft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"))
      var ghost2left = parseInt(window.getComputedStyle(ghost2).getPropertyValue("left"))
      
      if(herotop>465 && ghostleft<=90 && ghostleft>0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            gameover.style.top="250px";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            ghost.style.opacity="0.2"
            settingsimg.style.opacity="1";
            document.getElementById("score").style.opacity="0";
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
            
      }

      if(herotop>435 && herotop<505 && ghost2left<=90 && ghost2left>0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            document.getElementById("score").style.opacity="0";
            gameover.style.top="250px";
            settingsimg.style.opacity="1";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            ghost.style.opacity="0.2"
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
      }
},10)
function ok(){
      nameqs.style.left="-900px"
      okk.style.left="-900px"
      nameqs.style.animation="none"
      settingspage.style.top="300px"
      closee.style.top="310px";
      function showname(){
            var usernamee= document.getElementById("input").value;
            document.getElementById("name1").innerText+=" " + "   " + " " + " " +" " +usernamee;
      }
      showname();
}
function agine(){
      gameover.style.top="-700px";
      document.getElementById("scorecount").innerHTML=0;
      main.style.opacity="0.2"
      hero.style.opacity="0.2"
      ghost.style.opacity="0.2"
      settingspage.style.top="300px"
      closee.style.top="310px";
      document.getElementById("score").style.opacity="1";
}
document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;

function settings(){
      settingspage.style.top="300px"
      closee.style.top="310px";
}
function closesettings(){
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}
function style1(){
      hero.style.background="linear-gradient(rgb(8, 107, 8),rgb(0, 139, 69))"
}
function style2(){
      hero.style.background="linear-gradient(rgb(94, 1, 94),rgb(136, 11, 136))"
}
function style3(){
      hero.style.background="linear-gradient(blue,darkblue)"
}
function speed(){
      herocolor.style.backgroundColor="transparent"
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="block"
      document.getElementById("speed2").style.display="block"
      document.getElementById("speed3").style.display="block"
}
function herocolor1(){
      herocolor.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.backgroundColor="transparent"
      document.getElementById("style1").style.display="block"
      document.getElementById("style2").style.display="block"
      document.getElementById("style3").style.display="block"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
}
function normal(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.5s infinite linear"
      ghost2.style.animation="ghost 2.2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}
function fast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.2s infinite linear"
      ghost2.style.animation="ghost 1.9s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}
function veryfast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 0.9s infinite linear"
      ghost2.style.animation="ghost 1.5s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}