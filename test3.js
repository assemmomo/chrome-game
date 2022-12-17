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
var point1=document.getElementById("point1");
var point2=document.getElementById("point2");
var pointcounter=document.getElementById("pointcounter");
var pointnumber=document.getElementById("pointnumber");
var input=document.getElementById("input");
var noname=document.getElementById("noname");
var showinfoimg=document.getElementById("showinfoimg");
var showinfo=document.getElementById("showinfo");
var name1=document.getElementById("name1");


document.addEventListener('contextmenu', function(e){
      'use strict';
      e.preventDefault();
})

function jump(){
      //let audio = new Audio("mario.mp3").play();//
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
      var ghostleft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));
      var ghost2left = parseInt(window.getComputedStyle(ghost2).getPropertyValue("left"));
      var pointleft = parseInt(window.getComputedStyle(point1).getPropertyValue("left"));
      var point2left = parseInt(window.getComputedStyle(point2).getPropertyValue("left"));
      
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
            document.getElementById("pointlose").innerHTML=document.getElementById("pointnumber").innerHTML;
            point1.style.display="none";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";
            hero.style.display="none";    
            let lose = new Audio("lose.wav").play();
            
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
            point1.style.display="none";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";     
            hero.style.display="none";
            let lose2 = new Audio("lose.wav").play();
      }
      if(herotop>468 && pointleft<=90 && pointleft>80){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point1.style.display="none";
            let coin = new Audio("coin.wav").play();
            setTimeout(function (){
                  point1.style.display="block";
                  pointnumber.style.animation="none";
                  
            },2400)
      }
      if(herotop<400 && herotop>379 && point2left<=90 && point2left>79){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point2.style.display="none";
            let coin2 = new Audio("coin.wav").play();
            setTimeout(function (){
                  point2.style.display="block";
                  pointnumber.style.animation="none";
                  
            },2500)
      }
},10)
function okkk(){
      if(input.innerText=="0"){
            noname.style.opacity="1";
      } 
      else{
            function ok(){
                  nameqs.style.left="-900px"
                  okk.style.left="-900px"
                  nameqs.style.animation="none"
                  settingspage.style.top="300px"
                  closee.style.top="310px";
                  let music1 = new Audio("music1.mp3");
                  music1.volume = 0.3;
                  music1.loop = 20;
                  music1.play();
                  function showname(){
                        var usernamee= document.getElementById("input").value;
                        document.getElementById("name1").innerText+=" " + "   " + " " + " " +" " +usernamee;
                  }
                  showname();}
                  ok();
      }

}

function agine(){
      gameover.style.top="-700px";
      document.getElementById("scorecount").innerHTML=0;
      pointnumber.innerHTML=0; 
      main.style.opacity="0.2"
      hero.style.opacity="0.2"
      ghost.style.opacity="0.2"
      settingspage.style.top="300px"
      closee.style.top="310px";
      document.getElementById("score").style.opacity="1";
      point2.style.opacity="1";
      point2.style.display="block";
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
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="block"
      document.getElementById("speed2").style.display="block"
      document.getElementById("speed3").style.display="block"
      document.getElementById("runs").style.display="none"
}
function herocolor1(){
      herocolor.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.backgroundColor="transparent"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      document.getElementById("style1").style.display="block"
      document.getElementById("style2").style.display="block"
      document.getElementById("style3").style.display="block"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="none"
}
function showcontrols(){
      document.getElementById("showcontrols").style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.backgroundColor="transparent"
      herocolor.style.backgroundColor="transparent"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="flex"
}
function normal(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.5s infinite linear"
      ghost2.style.animation="ghost 2.2s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },2500)
}
function fast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.2s infinite linear"
      ghost2.style.animation="ghost 1.9s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },2500)
}
function veryfast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 0.9s infinite linear"
      ghost2.style.animation="ghost 1.5s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },1500)
}

function done(){
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}

function showinfoimgg(){
      showinfoimg.style.animation="showinfoimg2 0.9s linear"
      nameqs.style.opacity="0.4";
      setTimeout(
      function(){
            showinfoimg.style.left="1740px"
            showinfoimg.style.bottom="120px"
            showinfoimg.style.transform="rotate(-90deg)"
            document.getElementById("showinfoimg2").style.display="block";
      }
      ,900)
      setTimeout(function(){
            showinfo.style.animation="showinfo 0.5s linear"
            showinfo.style.left="0";
      },500)
}
function closeinfo(){
      showinfo.style.left="-1750px"
      document.getElementById("showinfoimg2").style.display="none";
      document.getElementById("showinfoimg2").style.opacity="0";
      nameqs.style.opacity="1";
      setTimeout(function(){
            showinfoimg.style.animation="closeinfo 0.9s linear"
            showinfoimg.style.left="20px"
            showinfoimg.style.bottom="20px"
            showinfoimg.style.transform="rotate(0deg)"
      },200)
}
