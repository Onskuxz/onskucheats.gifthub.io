'use strict';const ipgeolocation='https://api.ipgeolocation.io/ipgeo?apiKey=1785ed53312f42c7b5ef89f65c3faa1a';const timeouts=[];const mobileAndTabletCheck=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);$(document).ready(()=>{const links=[{name:'Lummit',link:'76561197960276740',},{name:'Neso',link:'76561198193201687',},{name:'loljuxd',link:'76561198016198032',},{name:'Lost',link:'76561199079530557',},{name:'mannin',link:'76561197975672336',},];for(let i in links){let link=links[i];}
if(mobileAndTabletCheck()){$('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');app.shouldIgnoreVideo=true;}
app.titleChanger(['ONSKU COMMUNITY','Always Free!','Cheats & Menus','Softwares & Games!']);});if($.cookie('videoTime')){app.videoElement.currentTime=$.cookie('videoTime');app.audioElement.currentTime=$.cookie('videoTime');}
document.addEventListener('contextmenu',(event)=>{event.preventDefault();});document.body.onkeyup=(event)=>{if(event.keyCode==32&&app.skippedIntro){if(app.backgroundToggler){app.videoElement.play();app.audioElement.play();}else{app.videoElement.pause();app.audioElement.pause();}
return(app.backgroundToggler=!app.backgroundToggler);}};$('html').on('contextmenu',(event)=>{const img=document.createElement('img');const trollfaceLight=app.skippedIntro?'':'trollface-light';img.src='assets/others/trollface.png';img.width=64;img.height=64;img.alt='Nop';img.style=`position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;img.className=`troll ${trollfaceLight}`;document.body.appendChild(img);});setInterval(()=>{$('.troll').remove();},600);$('.skip').click(()=>{skipIntro();});$.fn.extend({animateCss:function(animationName){const animationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';this.addClass(`animated ${animationName}`).one(animationEnd,()=>{$(this).removeClass(`animated ${animationName}`);});return this;},});const writeLine=(text,speed,timeout,callback)=>{timeout=typeof timeout==='number'?timeout:[0,(callback=timeout)];const lineNumber=app.id!==2?++app.id:(app.id+=2);setTimeout(()=>{const typed=new Typed(`#line${lineNumber}`,{strings:text,typeSpeed:speed,onComplete:callback,});},timeout);};$.getJSON(ipgeolocation,(data)=>{writeLine(["<span style='font-size: 14px; color: #1affff;'> Website Last Update > <span style='font-size: 14px; color: #1aff1a;'>[06-22-2021]","<span style='font-size: 14px; color: #ff0000;'>Requesting Server Access...",'Loading...',"Access Granted to <span style='font-size: 14px; color: #ff0000;'>[onskucheats.com]</span>"],30,()=>{if(app.skippedIntro)return;clearCursor();const usernames=['user','dude'];const ip=data.ip?data.ip:usernames[Math.floor(Math.random()*usernames.length)];const country=data.country_name?data.country_name:'your country';writeLine(["<span style='font-size: 14px; color: #1aff1a;'>[Successfully Loaded]",`Welcome back!`],30,500,()=>{if(app.skippedIntro)return;clearCursor();writeLine([`<i style='color: #ff0000'>user@Anonymous:~$ </i>`,`<i style='color: #80b3ff'>user@info:~$ <i style='color: #00e6e6'> 📌 ${country} 📌 ${ip} 📌`],120,500,()=>{timeouts.push(setTimeout(()=>{if(app.skippedIntro)return;clearCursor();setTimeout(()=>{skipIntro();},500);},1000));});});});});const skipIntro=()=>{if(app.skippedIntro)return;app.skippedIntro=true;timeouts.forEach((timeout)=>{clearTimeout(timeout);});$('.top-right').remove();$('#main').fadeOut(100,()=>{$('#main').remove();$('#marquee').marquee({duration:15000,gap:420,delayBeforeStart:1000,direction:'left',duplicated:true,});setTimeout(()=>{$('.brand-header').animateCss(app.effects[Math.floor(Math.random()*app.effects.length)]);},200);setTimeout(()=>{const typed=new Typed('#brand',{strings:app.brandDescription,typeSpeed:100,onComplete:()=>{clearCursor();},});},1350);setTimeout(()=>{if(!app.shouldIgnoreVideo){app.videoElement.play();app.audioElement.play();}
$('.marquee-container').css('visibility','visible').hide().fadeIn(100);$('.marquee-container').animateCss('zoomIn');$('.container').fadeIn();$('.background').fadeIn(200,()=>{if(!app.shouldIgnoreVideo)$('#audio').animate({volume:600},app.musicFadeIn);});},200);});};const clearCursor=()=>{return $('span').siblings('.typed-cursor').css('opacity','0');};var canvas=document.getElementById("canvas"),ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;var stars=[],FPS=60,x=100,mouse={x:0,y:0};for(var i=0;i<x;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,radius:Math.random()*1+1,vx:Math.floor(Math.random()*50)-25,vy:Math.floor(Math.random()*50)-25});}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.globalCompositeOperation="lighter";for(var i=0,x=stars.length;i<x;i++){var s=stars[i];ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(s.x,s.y,s.radius,0,2*Math.PI);ctx.fill();ctx.fillStyle='black';ctx.stroke();}
ctx.beginPath();for(var i=0,x=stars.length;i<x;i++){var starI=stars[i];ctx.moveTo(starI.x,starI.y);if(distance(mouse,starI)<150)ctx.lineTo(mouse.x,mouse.y);for(var j=0,x=stars.length;j<x;j++){var starII=stars[j];if(distance(starI,starII)<150){ctx.lineTo(starII.x,starII.y);}}}
ctx.lineWidth=0.05;ctx.strokeStyle='white';ctx.stroke();}
function distance(point1,point2){var xs=0;var ys=0;xs=point2.x-point1.x;xs=xs*xs;ys=point2.y-point1.y;ys=ys*ys;return Math.sqrt(xs+ys);}
function update(){for(var i=0,x=stars.length;i<x;i++){var s=stars[i];s.x+=s.vx/FPS;s.y+=s.vy/FPS;if(s.x<0||s.x>canvas.width)s.vx=-s.vx;if(s.y<0||s.y>canvas.height)s.vy=-s.vy;}}
canvas.addEventListener('mousemove',function(e){mouse.x=e.clientX;mouse.y=e.clientY;});function tick(){draw();update();requestAnimationFrame(tick);}
tick();
