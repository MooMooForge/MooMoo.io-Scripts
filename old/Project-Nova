// ==UserScript==
// @version Last
// @icon           https://cdn.steemitimages.com/DQmZ2JU5w9YJY7GKtUaKvRxL5kNnwCP9xoT84iwB6v2pYbZ/dragon%20awaken.jpg
// @name           ProJecT NoVa Last
// @namespace      https://i.ibb.co/KVm8YMQ/image.png
// @match          *://moomoo.io/*
// @match          *://dev.moomoo.io/*
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @author           Nuro
// ==/UserScript==
var wtcrashoff=true
var ML;var IL;
var lite=false;
var Version = "JK4H8F"
if(lite==true){
ML = "https://cdn.discordapp.com/attachments/705987996695920770/705988490482942032/Alan_Walker_-_Unity_Extended_Version_by_Albert_Vishi.mp3";
IL = 'https://cdn.discordapp.com/attachments/705987996695920770/705988957804167188/roblox_death_sound_sound_effect_hd_255680.mp3'
}else{
ML = "https://cdn.discordapp.com/attachments/705987996695920770/705988098588147742/TheFatRat_-_Unity.mp3";
IL = 'https://cdn.discordapp.com/attachments/705987996695920770/706021924366450728/xd.mp3'}
var FPS
(function() {
  var UPDATE_DELAY = 700;

  var lastUpdate = 0;
  var frames = 0;

  function updateCounter() {
    var now = Date.now();
    var elapsed = now - lastUpdate;
    if (elapsed < UPDATE_DELAY) {
      ++frames;
    } else {
      FPS = Math.round(frames / (elapsed / 1000));
      frames = 0;
      lastUpdate = now;
    }

    requestAnimationFrame(updateCounter);
  }

  lastUpdate = Date.now();
  requestAnimationFrame(updateCounter);
})();
$( "#errorNotification" ).after( '<div id="moddedMenu"><div class="titleMM"> ProJecT NoVA By L M D L </div><div class="one"><label class="switch"></span></label><div class="two"><div class="text"><b>ProJecT NoVa By L M D L<br>Discord:Server#9487<br><label class="container">Music<input type="checkbox" id="xnxxcom"><span class="checkmark"></span></label><label class="container">R.E.P. CrossBow<input type="checkbox" id="REP"><span class="checkmark"></span></label><label class="container">AutoReload<input type="checkbox" id="MinecraftBetterMiniCraft"><span class="checkmark"></span></label><label class="containerx">TurretHelmet<input type="checkbox" id="THT"><span class="checkmarkx"></span></label><label class="container">AutoBull<input type="checkbox" id="AB優若乳"><span class="checkmark"></span></label><label class="container">AutoAim<input type="checkbox" id="aaa"><span class="checkmark"></span></label></label><label class="container">SuperHeal<input type="checkbox" id="SH"><span class="checkmark"></span></label></label><hr></hr><label class="container">Insta Spike<input type="checkbox" id="ToggleSpike"><span class="checkmark"></span></label><label class="containerx">Spike x2<input type="checkbox" id="Spike2"><span class="checkmarkx"></span></label><label class="containerx">Spike x3<input type="checkbox" id="Spike3"><span class="checkmarkx"></span></label><hr></b></div></div>');
setInterval(() => {
fpsdiv.innerHTML="FPS<br>"+FPS
}, 500);
let fpsdiv = document.createElement("div");
fpsdiv.id="test"
document.body.prepend(fpsdiv);
var ldinfo;var ahinfo;var bhinfo;var btinfo;var aainfo=no;var x;var y;var dir;var clan;var Hat;var ACC;var skull;var pn;
var yes='<span style="color:#68FF00;">Yes</span>';var no='<span style="color:#FF0000;">No</span>';var on='<span style="color:#68FF00;">ON</span>';var off='<span style="color:#FF0000;">OFF</span>';
setInterval(() => {
info.innerHTML='<span style="color:#00FFE4;">==INFO==</span><br><span style="color:#FFF700;">Leader:</span>'+ldinfo+'<span style="color:#9700FF;"> FPS:</span><span style="color:#00FFB6;">'+FPS+'</span><br><span style="color:#FF8300;">AutoHeal:</span><span style="color:#68FF00;">'+ahinfo+'</span><span style="color:#00B9FF;"> AutoHat:</span>'+bhinfo+'<br><span style="color:#2acba9;">BotMode:</span>'+btinfo+'<span style="color:#111073;"> AutoAim:</span>'+aainfo+'<br><span style="color:#16f1dd;">X:</span>'+x+' <span style="color:#26d289;">Y:</span>'+y+'<br><span style="color:#f9dbd9;">Dir:</span>'+dir+'<span style="color:#e6df4a;"> Clan:</span>'+clan+'<br><span style="color:#ff2610;">Hat:</span>'+Hat+'<span style="color:#e154fe;"> Accessorie:</span>'+ACC+'<br><span style="color:#f7f9ee;">Skull:</span>'+skull+'<span style="color:#dd730b;"> Player Near:</span>'+pn+'<img src="https://i.ibb.co/5YW2fh0/cooltext356310116484522.gif" width=240 height=78>'
if(isEnemyNear==true){
pn=yes
}else{pn=no}
Hat=myPlayer.hat
ACC=myPlayer.accessory
x='<span style="color:#FF0000;">'+myPlayer.x+'</span>'
y='<span style="color:#0032FF;">'+myPlayer.y+'</span>'
dir='<span style="color:#E400FF;">'+myPlayer.dir+'</span>'
if(myPlayer.isSkull==true){
skull=yes
}else{
skull=no
}
if(myPlayer.clan==null){
clan='<span style="color:#FF0000;">NoClan</span>'
}else{
clan='<span style="color:#2efe1f;">'+myPlayer.clan+'</span>'
}
if(myPlayer.isLeader==true){
ldinfo=yes
}else{
ldinfo=no
}
if(AutoHeal==true){
ahinfo=on
}else{
ahinfo=off
}
if(AutoHat==true){
bhinfo=on
}else{bhinfo=false}
if(BotToggle==1){
btinfo=on
}else{
btinfo=off
}
if(AutoAim==true){
aainfo=on
}else{
aainfo=off
}
}, 100);
let info = document.createElement("div");
info.id="info"
document.body.prepend(info);

copy()
function copy(){
$("#menuCardHolder").append(`<br><div class='menuCard' id='guideCard'><div class='menuHeader'>ProJecT NoVa<br></div><div class='menuText'><label class="container">DARK◾THEME<input type="checkbox" id="EWDFAWFAW"><span class="checkmark"></span></label><h2 style="font-size: 17px; color: #00FF04">Menu</h2><input value="ESC" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F1=Help</h2><input value="F1" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">.(NumPad)=Message</h2><input value="." class="keyPressLow" type="text" disabled="disabled"/><hr><br><h2 style="font-size: 17px; color: #BD00FF">Left Click=Bull Helmet</h2><br><h2 style="font-size: 17px; color: #BD00FF">Right Click=Bow,Musket</h2><br><h2 style="font-size: 17px; color: #BD00FF">Middle Click=Big Map</h2><hr><br><h2 style="font-size: 17px; color: #FFFF00">Super Insta</h2><br><h2 style="font-size: 17px; color: #00FF04">F2=Bow Insta</h2><input value="F2" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F3=AGE 1 Polearm Insta</h2><input value="F3" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F4=AGE 8 Katana Insta</h2><input value="F4" class="keyPressLow" type="text" disabled="disabled"/><hr><label class="container">Custom Key<input type="checkbox" id="ck"><span class="checkmark"></span></label><hr><br><h2 style="font-size: 17px; color: #00e3f8">~=4 Turret</h2><input value="" id="001" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Q=SuperHeal</h2><input value="Q" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">R=InstaKill</h2><input value="" id="003" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">F=Tarp/Boost</h2><input value="F" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">V=Spike</h2><input value="V" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">T=Toggle AutoHeal</h2><input value="" id="006" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">G=Boost/Tarp Spike</h2><input value="G" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">B=Toggle AutoHat</h2><input value="" id="008" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Y=Create Custom Clan</h2><input value="" id="009" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">H=2 Turret</h2><input value="H" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">N=Windmill</h2><input value="N" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">U=Clear Clan</h2><input value="" id="012" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">J=Custom Discord Chat</h2><input value="" id="013" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">M=Best Hat,Accessorie</h2><input value="" id="014" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">I=4 Tarp/Boost</h2><input value="" id="015" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">K=Crash Server(If Toggle)Now=Change Insta Speed[190/230]</h2><input value="" id="016" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8"><=Stick To Katana</h2><input value="" id="017" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">O=5 Windmill</h2><input value="" id="018" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">L=Bot Mode</h2><input value="" id="019" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">>=Any To Musket</h2><input value="" id="020" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">P=4 Wall</h2><input value="" id="021" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">;=4 Spike</h2><input value="" id="022" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">/=Grate Axe+Musket</h2><input value="" id="023" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">-=Premium Map Toggle</h2><input value="" id="024" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">[=Stick To Great Axe</h2><input value="" id="025" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">'=Katana+Musket</h2><input value="" id="026" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">+=InstaSpike Toggle</h2><input value="" id="027" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">]=Any To CrossBow</h2><input value="" id="028" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">\\=Spike To Spining Spike</h2><input value="" id="029" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Space=Dead Message</h2><input value="Space" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬆=Custom Animate Chat</h2><input value="⬆" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬇=Custom Animate Clan</h2><input value="⬇" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬅="Try to kill me = suicide" Chat</h2><input value="⬅" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">➡="Get rekt noob" Chat</h2><input value="➡" class="keyPressLow" type="text" disabled="disabled"/><br>ProJecT NoVa By L M D L</div></div>`);
}
function CB(){
document.getElementById("gameName").style.color = "black"
$('.menuCard').css({'color':'#000000'});
$('#guideCard').css({'color': '#000000'});
$('.menuLink').css({'color': '#000000'});
$('#serverSelect').css({'color': '#ffffff',
                        'background-color': '#000000'});
document.getElementById('loadingText').style.color = "black"
$('.menuButton').css({'background-color': '#000000'});
document.getElementById("leaderboard").style.color = "black"
document.getElementById('diedText').style.color = "black";
document.getElementById("setupCard").style.color = "black";
document.getElementById("scoreDisplay").style.color = "black";
document.getElementById("woodDisplay").style.color = "black";
document.getElementById("stoneDisplay").style.color = "black";
document.getElementById("killCounter").style.color = "black";
document.getElementById("foodDisplay").style.color = "black";
document.getElementById("setupCard").style.backgroundColor = "black";
document.getElementById("guideCard").style.backgroundColor = "black";
document.getElementById("enterGame").style.backgroundColor = "gray";
document.getElementById("setupCard").style.boxShadow = "0px 7px black";
document.getElementById("guideCard").style.boxShadow = "0px 7px black";
document.getElementById("gameName").style.textShadow = "0 1px 0 #333333, 0 2px 0 #333333, 0 3px 0 #333333, 0 4px 0 #333333, 0 5px 0 #333333";
document.getElementById("followText").remove();
document.getElementById("youtubeFollow").remove();
}

function CW(){
document.getElementById("scoreDisplay").style.color = "red";
document.getElementById("woodDisplay").style.color = "red";
document.getElementById("stoneDisplay").style.color = "red";
document.getElementById("killCounter").style.color = "red";
document.getElementById("foodDisplay").style.color = "red";
document.getElementById("setupCard").style.backgroundColor = "red";
document.getElementById("guideCard").style.backgroundColor = "red";
document.getElementById("gameName").style.color = "red"
$('#guideCard').css({'color': '#ffffff'});
document.getElementById("setupCard").style.backgroundColor = "red";
$('#serverSelect').css({'color': '#000000',
                        'background-color': '#ffffff'});
document.getElementById('loadingText').style.color = "red"
$('.menuButton').css({'background-color': 'black'});
document.getElementById("leaderboard").style.color = "red"
document.getElementById('diedText').style.color = "red";
document.getElementById("setupCard").style.boxShadow = "0px 7px red";
document.getElementById("guideCard").style.boxShadow = "0px 7px red";
document.getElementById("enterGame").style.backgroundColor = "black"
document.getElementById("gameName").style.textShadow = "0 1px 0 #c4c4c4, 0 2px 0 #c4c4c4, 0 3px 0 #c4c4c4, 0 4px 0 #c4c4c4, 0 5px 0 #c4c4c4";
}
$('#guideCard').prepend('<a href = "https://discord.gg/ddkDjhn" target="_blank">Join L M D L Discord</a>');

var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "ProJecT On Top";
            clearInterval(autoreloadloop);
            setTimeout(function () {}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        setTimeout(function () {}, 1000)
    }
}, 50);

selectSkinColor (3)

var sANC = 1;

var aNC = [255,255,1];

var rANC = [1,255];

var mk = document.getElementById("gameCanvas").getContext("2d");
var Laa = 0;
var Lab = 0;
var aVZ = 0;
var fBX = "<3 KatieW.";
var resForRANC = 1;

// 1920-1080



function rainbowColor(){
  if(resForRANC === 1){
    aNC = [255,0,0];
    resForRANC = 0;
  }
  if(aNC[0] === 255 && aNC[1] !== 255 && aNC[2] === 0){aNC[1] += 255/rANC[1];}
  if(aNC[0] !== 0 && aNC[1] === 255 && aNC[2] === 0){aNC[0] += 255/rANC[1]*-1;}
  if(aNC[0] === 0 && aNC[1] === 255 && aNC[2] !== 255){aNC[2] += 255/rANC[1];}
  if(aNC[0] === 0 && aNC[1] !== 0 && aNC[2] === 255){aNC[1] += 255/rANC[1]*-1;}
  if(aNC[0] !== 255 && aNC[1] === 0 && aNC[2] === 255){aNC[0] += 255/rANC[1];}
  if(aNC[0] === 255 && aNC[1] === 0 && aNC[2] !== 0){aNC[2] += 255/rANC[1]*-1;}
  if(aNC[0] < 0){aNC[0] = 0;} if(255 < aNC[0]){aNC[0] = 255;}
  if(aNC[1] < 0){aNC[1] = 0;} if(255 < aNC[1]){aNC[1] = 255;}
  if(aNC[2] < 0){aNC[2] = 0;} if(255 < aNC[2]){aNC[2] = 255;}
}

function katie(){
if(circle == true){
  if(document.getElementById("actionBarItem0")){
    if(document.getElementById("actionBarItem3").style.display === "inline-block"){
      if(fBX !== 3){
        aVZ = [[0,480],[0,360],[0,255]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 3;
      }

      aVZ[0][0] += 1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += 1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 24;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.625)";
      mk.arc(960,540,212,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],7/8*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 30;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.625)";
      mk.arc(960,540,185,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],2/3*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 45;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.5)";
      mk.arc(960,540,85,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],1/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
    }
          if(document.getElementById("actionBarItem2").style.display === "inline-block"){
      if(fBX !== 3){
        aVZ = [[0,480],[0,360],[0,255]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 3;
      }

      aVZ[0][0] += 1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += 1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 24;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.625)";
      mk.arc(960,540,212,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],7/8*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 30;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.625)";
      mk.arc(960,540,185,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],2/3*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 45;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.5)";
      mk.arc(960,540,85,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],1/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
    }
    if(document.getElementById("actionBarItem4").style.display === "inline-block"){
      if(fBX !== 4){
        aVZ = [[0,360],[0,250],[0,225],[0,250]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 4;
      }

      aVZ[0][0] += -1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += -1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }
      aVZ[3][0] += 1;
      if(aVZ[3][1] <= aVZ[3][0]){
        aVZ[3][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 36;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.45)";
      mk.arc(960,540,251,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],15/16*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 46;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.45)";
      mk.arc(960,540,210,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],7/9*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 32;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.383)";
      mk.arc(960,540,109,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],2/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 26;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.383)";
      mk.arc(960,540,80,0+Math.PI/(aVZ[3][1]/2)*aVZ[3][0],7/8*Math.PI+Math.PI/(aVZ[3][1]/2)*aVZ[3][0]);
      mk.stroke();
    }
        if(document.getElementById("actionBarItem2").style.display === "inline-block"){
      if(fBX !== 3){
        aVZ = [[0,480],[0,360],[0,255]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 3;
      }

      aVZ[0][0] += 1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += 1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 24;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.625)";
      mk.arc(960,540,212,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],7/8*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 30;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.625)";
      mk.arc(960,540,185,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],2/3*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 45;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.5)";
      mk.arc(960,540,85,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],1/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
    }
          if(document.getElementById("actionBarItem4").style.display === "inline-block"){
      if(fBX !== 4){
        aVZ = [[0,360],[0,250],[0,225],[0,250]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 4;
      }

      aVZ[0][0] += -1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += -1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }
      aVZ[3][0] += 1;
      if(aVZ[3][1] <= aVZ[3][0]){
        aVZ[3][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 36;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.45)";
      mk.arc(960,540,251,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],15/16*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 46;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.45)";
      mk.arc(960,540,210,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],7/9*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 32;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.383)";
      mk.arc(960,540,109,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],2/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 26;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.383)";
      mk.arc(960,540,80,0+Math.PI/(aVZ[3][1]/2)*aVZ[3][0],7/8*Math.PI+Math.PI/(aVZ[3][1]/2)*aVZ[3][0]);
      mk.stroke();
    }
        if(document.getElementById("actionBarItem8").style.display === "inline-block"){
      if(fBX !== 3){
        aVZ = [[0,480],[0,360],[0,255]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 3;
      }

      aVZ[0][0] += 1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += 1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 24;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.625)";
      mk.arc(960,540,212,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],7/8*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 30;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.625)";
      mk.arc(960,540,185,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],2/3*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 45;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.5)";
      mk.arc(960,540,85,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],1/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
    }
    if(document.getElementById("actionBarItem7").style.display === "inline-block"){
      if(fBX !== 4){
        aVZ = [[0,360],[0,250],[0,225],[0,250]];
        if(sANC === 1){aNC = [255,0,0];}
        fBX = 4;
      }

      aVZ[0][0] += -1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }
      aVZ[1][0] += 1;
      if(aVZ[1][1] <= aVZ[1][0]){
        aVZ[1][0] = 0;
      }
      aVZ[2][0] += -1;
      if(aVZ[2][1] <= aVZ[2][0]){
        aVZ[2][0] = 0;
      }
      aVZ[3][0] += 1;
      if(aVZ[3][1] <= aVZ[3][0]){
        aVZ[3][0] = 0;
      }

      mk.beginPath();
      mk.lineWidth = 36;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.45)";
      mk.arc(960,540,251,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],15/16*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 46;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.45)";
      mk.arc(960,540,210,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],7/9*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 32;
      mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.383)";
      mk.arc(960,540,109,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],2/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
      mk.stroke();
      mk.beginPath();
      mk.lineWidth = 26;
      mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.383)";
      mk.arc(960,540,80,0+Math.PI/(aVZ[3][1]/2)*aVZ[3][0],7/8*Math.PI+Math.PI/(aVZ[3][1]/2)*aVZ[3][0]);
      mk.stroke();
    }
    if(document.getElementById("actionBarItem5").style.display === "inline-block"){
      if(fBX !== 5){
        aVZ = [[0,250,2.5,10,1.2]];
        if(sANC === 1){aNC = [255,0,255];}
        fBX = 5;
      }

      aVZ[0][0] += 1;
      if(aVZ[0][1] <= aVZ[0][0]){
        aVZ[0][0] = 0;
      }

      for(Laa = 0; Laa < Math.round(aVZ[0][1]/5*2); Laa++){
        mk.beginPath();
        mk.lineWidth = 26;
        mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.5)";
        mk.arc(960,540,200+Math.sin(aVZ[0][3]*Math.PI/(aVZ[0][1]/aVZ[0][2])*(Laa-aVZ[0][0]))*aVZ[0][3]*aVZ[0][4],0-2*Math.PI/aVZ[0][1]*Laa+2*Math.PI/aVZ[0][1]*aVZ[0][0],2*Math.PI/aVZ[0][1]-2*Math.PI/aVZ[0][1]*Laa+2*Math.PI/aVZ[0][1]*aVZ[0][0]);
        mk.stroke();
      }
    }
  }
}
}

function letThereBeLight(){
  if(rANC[0] === 1){
    rainbowColor();
  }
  katie();
  window.requestAnimationFrame(letThereBeLight);
}

window.requestAnimationFrame(letThereBeLight);
if(lite==true){
$('#menuContainer').append('L M D L')
}else{
setTimeout( () => {
setTimeout( () => {
$('#menuContainer').append('X')
setTimeout( () => {
$('#menuContainer').append('x')
setTimeout( () => {
$('#menuContainer').append('_')
setTimeout( () => {
$('#menuContainer').append('T')
setTimeout( () => {
$('#menuContainer').append('J')
setTimeout( () => {
$('#menuContainer').append('G')
setTimeout( () => {
$('#menuContainer').append('a')
setTimeout( () => {
$('#menuContainer').append('m')
setTimeout( () => {
$('#menuContainer').append('i')
setTimeout( () => {
$('#menuContainer').append('n')
setTimeout( () => {
$('#menuContainer').append('g')
setTimeout( () => {
$('#menuContainer').append('_')
setTimeout( () => {
$('#menuContainer').append('x')
setTimeout( () => {
$('#menuContainer').append('X')
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 300);
}, 2000);}
    $("#youtuberOf").html(`<div id="youtuberOf">
    ´
<div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href="https://www.youtube.com/channel/UCjPFSBbEMb755Lw9aFGXI6w">>L M D L</a></div></div>
Featured Hacker:`)
if(lite==false){
let newImg = document.createElement("img");
newImg.src = "https://cdn.steemitimages.com/DQmZ2JU5w9YJY7GKtUaKvRxL5kNnwCP9xoT84iwB6v2pYbZ/dragon%20awaken.jpg"
newImg.style = `position: absolute; top: 85px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(newImg);
newImg.addEventListener("click", () => {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";}}
);

let settings = document.createElement("img");
settings.src = "https://i.ibb.co/YPNRsZY/image.gif"
settings.style = `position: absolute; top: 150px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(settings);
settings.addEventListener("click", () => {
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";}}
);

let message = document.createElement("img");
message.src = "https://i.ibb.co/WsW14kY/1.gif"
message.style = `position: absolute; top: 215px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(message);
message.addEventListener("click", () => {
        if (Msgmodal.style.display = "none") {
            Msgmodal.style.display = "block";
        } else {
            Msgmodal.style.display = "none";}}
);
}else{
let newImg = document.createElement("img");
newImg.src = "https://i.ibb.co/Hd1CDJ3/image.jpg"
newImg.style = `position: absolute; top: 85px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(newImg);
newImg.addEventListener("click", () => {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";}}
);
}
try {
document.getElementById("moomooio_728x90_home").style.display = "none";
    $("#moomooio_728x90_home").parent().css({display: "none"});
} catch (e) {
  console.log("[INFO]Remove Ad...");
}


$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');

$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(0, 0, 0, 1)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('.menuCard').css({'color':'#808080'});


$('#menuContainer').css({'white-space': 'normal'});


$('#guideCard').css({'color': '#FFFFF'});

$('.killCounter').css({'color': '#000000'});

$('#nativeResolution').css({'cursor': 'pointer'});

$('#playMusic').css({'cursor': 'pointer'});

$('#skinColorHolder').css({'margin-bottom': '30.75px'});

$('.settingRadio').css({'margin-bottom': '30.75px'});

$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0), 0 2px 0 rgba(255, 255, 255, 0), 0 3px 0 rgba(255, 255, 255, 0), 0 4px 0 rgba(255, 255, 255, 0), 0 5px 0 rgba(255, 255, 255, 0), 0 6px 0 rgba(255, 255, 255, 0), 0 7px 0 rgba(255, 255, 255, 0), 0 8px 0 rgba(255, 255, 255, 0), 0 9px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '126px',
                    'margin-bottom': '-30px'});

$('#loadingText').css({'color': '#000000',
                       'background-color': 'rgba(0, 0, 0, 0.74)',
                       'padding': '8px',
                       'right': '150%',
                       'left': '150%',
                       'margin-top': '40px'});
$('.ytLink').css({'color': '#000000',
                  'padding': '8px',
                  'background-color': 'rgba(0, 0, 0, 0.74)'});
$('.menuLink').css({'color': '#000000'});

$('.menuButton').css({'background-color': '#000000'});


$('#nameInput').css({'border-radius': '0px',
                     '-moz-border-radius': '0px',
                     '-webkit-border-radius': '0px',
                     'border': 'hidden'});


$('#serverSelect').css({'cursor': 'pointer',
                        'color': '#000000',
                        'background-color': '#808080',
                        'border': 'hidden',
                        'font-size': '20px'});

$('.menuButton').css({'border-radius': '0px',
                      '-moz-border-radius': '0px',})
if(lite==true){
document.getElementById("mainMenu").style.backgroundImage = "url(https://i.ibb.co/B6F9Jt8/giphy.gif)";
}else{
document.getElementById("mainMenu").style.backgroundImage = "url(https://media.giphy.com/media/Zb0asRm15HqCbgShD4/giphy.gif)";}
var moomooVer = $('#linksContainer2 .menuLink').html(),
    hideSelectors = ['#mobileDownloadButtonContainer',
                     '#promoImgHolder',
                     '#followText',
                     '#smallLinks',
                     '#linksContainer1',
                     '#twitterFollow',
                     '#youtubeFollow',
                     '#cdm-zone-02',
                     '#promoImg',
                     '#downloadButtonContainer',
                     '.menuLink',
                     ],
    css = '#rightCardHolder {display: block!important}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

for (let i = 0; i < hideSelectors.length; i++ ) {
    $(hideSelectors[i]).hide();
}
head.appendChild(style);
if(lite==true){
$('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">🌐' + moomooVer + '🌐<br>ProJecT NoVa Version◽💠'+Version+'💠◽Lite');
}
else{
$('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">🌐' + moomooVer + '🌐<br>ProJecT NoVa Version◽💠'+Version+'💠');
}
if(lite==true){
document.getElementById('enterGame').innerHTML = '➡PLAY⬅';
}else{
setInterval(() => {
document.getElementById('enterGame').innerHTML = '➡ PLAY ⬅';
setTimeout( () => {
document.getElementById('enterGame').innerHTML = '➡PLAY⬅';
}, 300);}
 , 500);
}
document.getElementById('loadingText').innerHTML = 'ProJEcT NoVa LoaD';
setTimeout( () => {
document.getElementById('loadingText').innerHTML = 'NiCe';
}, 2000);
if(lite==true){
document.getElementById('nameInput').placeholder = "ProJecT HacK";
}else{
setInterval(() => {
setTimeout( () => {
document.getElementById('nameInput').placeholder = "L M D L teaming";
setTimeout( () => {
document.getElementById('nameInput').placeholder = "Enter Name";
}, 200);
}, 200);}
 , 500);}
if(lite==false){
setInterval(() => {
setTimeout( () => {
document.getElementById('chatBox').placeholder = "💬Message💬";
setTimeout( () => {
document.getElementById('chatBox').placeholder = "💬Message.💬";
setTimeout( () => {
document.getElementById('chatBox').placeholder = "💬Message..💬";
setTimeout( () => {
document.getElementById('chatBox').placeholder = "💬Message...💬";
}, 100);
}, 100);
}, 100);
}, 100);}
, 500);}else{
document.getElementById('chatBox').placeholder = "💬Message💬";
}

if(lite==true){
document.getElementById('diedText').style.color = "Red";
document.getElementById('diedText').innerHTML = '💀 YOU DIED 💀';
}else{
setInterval(() => {
document.getElementById('diedText').style.color = "Red";
document.getElementById('diedText').innerHTML = '💀 YOU ____ 💀';
setTimeout( () => {
document.getElementById('diedText').style.color = "black";
document.getElementById('diedText').innerHTML = '💀 ReVeNgE 💀';
}, 500);
}
, 1000);
}
document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"

document.getElementById("leaderboard").style.color = "black";
document.getElementById('adCard').remove();
if(lite==true){
document.getElementById("leaderboard").style.color = "black";
}else{
setInterval(() => {
setTimeout( () => {
document.getElementById("leaderboard").style.color = "black";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "red";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "black";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "red";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "black";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "red";
setTimeout( () => {
document.getElementById("leaderboard").style.color = "black";
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 700);}
document.getElementById("gameName").style.color = "Green";
document.getElementById("setupCard").style.color = "pink";
document.getElementById("gameName").innerHTML = "ProJecT NoVa"
if(lite==true){
document.getElementById("gameName").innerHTML = "ProJecT NoVa"
}else{
setInterval(() => {
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJecT NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "P-oJecT NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "Pr-JecT NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "Pro-ecT NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJ-cT NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJe-T NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJec- NoVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJecT -oVa"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJecT N-Va"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJecT No-a"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "ProJecT NoV-"
setTimeout( () => {
document.getElementById("gameName").innerHTML = "💥ProJecT NoVa💥"
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);}
 , 2000);}
$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(255, 255, 255, 1)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px'});

$('#menuContainer').css({'white-space': 'normal'});

$('#nativeResolution').css({'cursor': 'pointer'});

$('#playMusic').css({'cursor': 'pointer'});

$('#guideCard').css({'overflow-y': 'hidden',
                     'margin-top': 'auto',
                     'margin-bottom': '30px'});


$('#skinColorHolder').css({'margin-bottom': '30.75px'});

$('.settingRadio').css({'margin-bottom': '30.75px'});

$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(231, 76, 60), 0 2px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 4px 0 rgba(231, 76, 60), 0 5px 0 rgba(231, 76, 60), 0 6px 0 rgba(231, 76, 60), 0 7px 0 rgba(231, 76, 60), 0 8px 0 rgba(231, 76, 60), 0 9px 0 rgba(255, 0, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});
$('#test').css({'color': '#ffdd00',
                'font-size': '25px',
                'position': 'absolute',
                'text-align': 'center',
                'width': '80',
                'height': '80',
                'background-color': 'rgba(0, 0, 0, 0.4)'});
$('#info').css({
    'font-size': '15px',
    'position': 'absolute',
    'width': '240px',
    'height': '230px',
    'background': 'url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-curvy-rainbow-gradient-kelsey-lovelle.jpg")',
    'top': '560px',
    'left': '1680px'});

$('#loadingText').css({'color': '#000000',
                       'background-color': 'rgba(0, 0, 0, 0)',
                       'padding': '8px',
                       'right': '150%',
                       'left': '150%',
                       'margin-top': '40px'});

$('.ytLink').css({'color': '#144db4',
                  'padding': '0px',
                  'background-color': 'rgba(0, 0, 0, 0)'});

$('.menuLink').css({'color': '#144db4'});

$('#nameInput').css({'border-radius': '0px',
                     '-moz-border-radius': '0px',
                     '-webkit-border-radius': '0px',
                     'border': 'hidden'});

$('#serverSelect').css({'cursor': 'pointer',
                        'color': '#000000',
                        'background-color': '#808080',
                        'border': 'hidden',
                        'font-size': '20px'});

$('.menuButton').css({'border-radius': '0px',
                      '-moz-border-radius': '0px',
                      '-webkit-border-radius': '0px'});

$('#promoImgHolder').css({'position': 'absolute',
                          'bottom': '-7%',
                          'left': '20px',
                          'width': '420px',
                          'height': '236.25px',
                          'padding-bottom': '18px',
                          'margin-top': '0px'});

$('#adCard').css({'position': 'absolute',
                  'bottom': '-7%',
                  'right': '20px',
                  'width': '420px',
                  'height': '236.25px',
                  'padding-bottom': '18px'});


$('.menuHeader').css({'color': 'rgba(255, 0, 255, 1)'});

$('#killCounter').css({'color': '#bf2828'});

$('#diedText').css({'background-color': 'rgba(0, 0, 0, 0)'});

$('#gameCanvas').css({'background-color': '#f4f4f4'});

$('#allianceButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#storeButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#chatButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('.gameButton').css({'-webkit-border-radius': '0px 0 0 0',
                      '-moz-border-radius': '0px 0 0 0',
                      'border-radius': '0px 0 0 0',
                      'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.uiElement, .resourceDisplay').css({'-webkit-border-radius': '0px',
                                       '-moz-border-radius': '0px',
                                       'border-radius': '0px',
                                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '0px',
                   'background-color': 'rgba(0, 0, 0, 0.4)',
                   'text-align': 'center'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '700px',
                   'background-color': 'rgba(0, 0, 0, 0.s)',
                   'text-align': 'center'});

$('#foodDisplay').css({'color': '#ae4d54'});

$('#woodDisplay').css({'color': '#758f58'});

$('#stoneDisplay').css({'color': '#818198'});

$('#scoreDisplay').css({'color': '#c2b17a'});

$('#leaderboard').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '0px',
                       'background-color': 'rgba(0, 0, 0, 0.4)',
                       'text-align': 'center'});

$('#ageText').css({'color': '#B200FF'});

$('.storeTab').css({'-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#storeHolder').css({'-webkit-border-radius': '0px',
                       '-moz-border-radius': '0px',
                       'border-radius': '0px',
                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#allianceHolder').css({'-webkit-border-radius': '0px',
                          '-moz-border-radius': '0px',
                          'border-radius': '0px',
                          'background-color': 'rgba(0, 0, 0, 0.4)'});

$('.actionBarItem').css({'-webkit-border-radius': '0px',
                         'border-radius': '0px',
                         'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#itemInfoHolder').css({'text-align': 'center',
                          'top': '125px',
                          'left': '350px',
                          'right': '350px',
                          'max-width': '666px'});

$('#leaderboard').append('🔥💥ProJecT_NoVa💥🔥');

(function() {var css = [
	"div#adCard, ",
	"  #twitterFollow, ",
	"  #youtubeFollow, ",
	"  #downloadButtonContainer, ",
	"  #followText, ",
	"  #promoImg {",
	"    display: none;",
	"  }",
	"",
	"  #featuredYoutube > a.ytLink, ",
	"  a {",
	"    color: #ff0000 !important;",
	"    font-size: 20px;",
	"    margin-top: 0px;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  a:hover {",
	"    color: #cc0000 !important;",
	"  }",
	"",
	"  #youtuberOf, ",
	"  #linksContainer2, ",
	"  .partyWrap {",
	"    background: rgba(0,0,0,0.6);",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 10px;",
	"    padding: 10px;",
	"    font-size: 20px;",
	"    position: absolute;",
	"    color: #fff;",
	"  }",
	"",
	"  .partyWrap {",
	"    min-height: 80px;",
	"    min-width: 160px;",
	"    top: 10px;",
	"    right: 10px;",
	"  }",
	"",
	"  #youtuberOf {",
	"    top: 10px;",
	"    left: 10px;",
	"  }",
	"",
	"  #followText {",
	"    min-height: 200px;",
	"    bottom: 10px;",
	"    left: 10px;",
	"  }",
	"",
	"  #linksContainer2 {",
	"    bottom: 10px;",
	"    right: 10px;",
	"    color: transparent;",
	"  }",
	"",
	"  .menuCard {",
	"    background: rgba(0,0,0,0.6);",
	"    border-radius: 10px;",
	"    border: 10px solid rgba(0,0,0,0.9);",
	"    box-shadow: none;",
	"    overflow:auto;",
	"  }",
	"",
	"  ::-webkit-scrollbar {",
	"    width: 10px;",
	"    border-right: 2px solid #ff0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb {",
	"    border: 2px solid #ff0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb:hover {",
	"    background: #ff0000;",
	"  }",
	"",
	"  ::-webkit-scrollbar-thumb:active {",
	"    background: black;",
	"    border: 2px solid #ff0000;",
	"  }",
	"",
	"  .menuHeader {",
	"    font-size: 24px;",
	"    color: #eeeeee;",
	"    margin-bottom: 3px;",
	"    border-bottom: 3px solid #eee;",
	"  }",
	"",
	"  .menuHeader:first-child {",
	"    margin-bottom: 30px;",
	"  }",
	"",
	"  .menuText {",
	"    font-size: 18px;",
	"    color: #ccc;",
	"    margin-bottom: 10px;",
	"  }",
	"",
	"  .ytLink {",
	"    color: #ff0000;",
	"    font-size: 24px;",
	"    text-decoration: none;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .menuButton {",
	"    color: #fff;",
	"    background-color: transparent;",
	"    border: 5px solid #ff0000;",
	"    position: relative;",
	"    display: inline-flex;",
	"    padding: 0px 70px;",
	"    font-family: denk one;",
	"    transition: color .5s;",
	"    overflow: hidden;",
	"    width: 100%;",
	"    justify-content: center;",
	"  }",
	"",
	"  .menuButton:hover {",
	"    color: #FFFFFF !important;",
	"    border: 5px solid #ff0000;",
	"    cursor: pointer;",
	"    background-color: transparent;",
	"  }",
	"",
	"  .menuButton:before {",
	"    content: \'\';",
	"    position: absolute;",
	"    top: 0;",
	"    left: 0;",
	"    width: 130%; ",
	"    height: 10000%;",
	"    background: #ff0000;",
	"    border-right: 20px solid #b6fe9c;",
	"    z-index: -1;",
	"    transform-origin:0 0 ;",
	"    transform:translateX(-112%) skewX(45deg);",
	"    transition: transform .5s;",
	"  }",
	"",
	"  .menuButton:hover:before {",
	"    color: #FFFFFF !important;",
	"    transform: translateX(-20%) skewX(45deg);",
	"  }",
	"",
	"  .menuCard span {",
	"    margin: 10px;",
	"  }",
	"",
	"  #promoHolderImg > img {",
	"    width: 300px;",
	"    height: 94px;",
	"  }",
	"",
	"  #guideCard {",
	"    max-height: 282px;",
	"  }",
	"",
	"  .skinColorItem {",
	"    transition: 1s;",
	"    border: 3px solid #000;",
	"  }",
	"",
	"  select {",
	"    background: #cc0000;",
	"    border-radius: 5px;",
	"    border: 3px solid #ff0000;",
	"    margin-bottom: 10px;",
	"    color: #fff;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  select:hover {",
	"    background: #ff0000;",
	"    border: 3px solid #cc0000;",
	"  }",
	"",
	"  #pre-content-container {",
	"    display: none!important;",
	"  }",
	"",
	"  .uiElement, ",
	"  .resourceDisplay, ",
	"  .actionBarItem {",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 50px !important;",
	"    color: #ff0000;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .uiElement:hover, ",
	"  .resourceDisplay:hover, ",
	"  .actionBarItem:hover {",
	"    background-color: rgba(0,0,0,0.5) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 50px !important;",
	"    color: #ff0000;",
	"  }",
	"",
	"  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 10px !important;",
	"    color: #ff0000;",
	"  }",
	"",
	"  #itemInfoHolder { ",
	"    -webkit-text-stroke: transparent;",
	"  }",
	"",
	"  .material-icons { ",
	"    color: #ff0000;",
	"    font-size: 31px;",
	"    -webkit-text-stroke: 1.5px #fff;",
	"  }",
	"",
	"  #altServer > a > i {",
	"    font-size: 30px !important;",
	"    -webkit-text-stroke: transparent !important;",
	"  }",
	"",
	"  #ageText { ",
	"    font-size: 40px !important;",
	"    color: #ff0000;",
	"    -webkit-text-stroke: 1.5px #fff;",
	"    margin-bottom: 30px;",
	"  }",
	"",
	"  #ageBarBody {",
	"    background-color: #ff0000;",
	"    border: 3px solid #fff",
	"  }",
	"",
	"  #ageBar {",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    height: 10px;",
	"    padding-bottom: 10px;",
	"    margin-bottom: 20px;",
	"  }",
	"",
	"  .actionBarItem {",
	"    width: 65px;",
	"    height: 65px;",
	"    background-position: center; ",
	"    background-size: 55px 55px;",
	"  }",
	"",
	"  #aBox {",
	"    color: #ff0000!important;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #chatBox::placeholder {",
	"    color: #ff0000!important;",
	"  }",
	"",
	"  #chatBox:hover {",
	"    background: rgba(0,0,0,0.5)!important;",
	"  }",
	"",
	"  #chatBox:hover::placeholder {",
	"    color: #fc9f9f!important;",
	"  }",
	"",
	"  #leaderboard, .leaderboardItem[style*=\"color: rgb(255, 255, 255);\"] {",
	"    color: #ff0000!important;",
	"  }",
	"",
	"  .ytLink:hover {",
	"    color: #cc0000;",
	"  }",
	"",
	"  #nameInput {",
	"    background: #fff;",
	"    border: 5px solid #ff0000;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput::placeholder {",
	"    color: #ff0000;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput:hover {",
	"    background: #ff0000;",
	"    color: #fff;",
	"  }",
	"",
	"  #nameInput:hover::placeholder {",
	"    background: #ff0000;",
	"    color: #fff;",
	"  }",
	"",
	"  #linksContainer2 {",
	"    max-height: 500px;",
	"    width: 250px;",
	"  }",
	"",
	"  #linksContainer2 > * {",
	"    display:table-cell;",
	"    vertical-align:middle;",
	"    text-align: center;",
	"    width:700px;",
	"  }",
	"  ",
	"  .storeTab, ",
	"  #storeHolder, ",
	"  #allianceHolder, ",
	"  #allianceInput, ",
	"  .allianceButtonM {",
	"    background: rgba(0,0,0,0.6);",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem {",
	"    color: #ff0000 !important;",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem, ",
	"  .joinAlBtn {",
	"    color: #ff0000 !important;",
	"  }",
	"",
	"  .storeItem:hover, ",
	"  .storeTab:hover, ",
	"  .allianceButtonM:hover,",
	"  .allianceItem:hover, ",
	"  .joinAlBtn:hover {",
	"    color: #fc9f9f !important;",
	"  }",
	"",
	"  #allianceInput, ",
	"  #killCounter {",
	"    color: #ff0000;",
	"  }",
	"  ",
	"  #allianceInput:hover {",
	"    background: rgba(0,0,0,0.5);",
	"    color: #fc9f9f;",
	"  }",
	"",
	"  #allianceInput:hover::placeholder{",
	"    color: #fc9f9f;",
	"  }",
	"",
	"  #linksContainer2 > *:first-child {",
	"    border-bottom: 3px solid #ff0000;",
	"  }",
	"",
	"  #moddedMenu {",
	"    position: absolute;",
	"    top: 3.25%;",
	"    left: 0px;",
	"    width: 3%;",
	"    height: 45.0%;",
	"    background: rgba(0,0,0,0.6);",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-top-right-radius: 30px;",
	"    border-bottom-right-radius: 30px;",
	"    transition: 1s;",
	"    z-index: 999;",
	"  }",
	"",
	"  #moddedMenu:hover {",
	"    width: 20%;",
	"  }",
	"",
	"  #youtuberOf {",
	"    bottom: 10px;",
	"    top: auto;",
	"  }",
	"",
	"  .titleMM {",
	"    color: #ff0000;",
	"    border-bottom: 3px solid #ff0000;",
	"    font-size: 32px;",
	"    transform: rotate(90deg);",
	"    white-space: nowrap;",
	"    margin-top: 250%;",
	"    transition: 1s;",
	"  }",
	"",
	"  #moddedMenu:hover > .titleMM {",
	"    transform: rotate(0deg) translate(0,-1580%)",
	"  }",
	"",
	"  .switch {",
	"    margin-top: 5px;",
	"    margin-left: 10px;",
	"    position: absolute;",
	"    width: 60px;",
	"    height: 34px;",
	"    transition: opacity 1s;",
	"    opacity: 0;",
	"  }",
	"",
	"  .text {",
	"    bottom: 76%;",
	"    position: absolute;",
	"    color: #eee;",
	"    font-size: 20px;",
	"    left: 0%;",
	"    display: none;",
	"    transition: 1s;",
	"  }",
	"",
	"  .text > b { ",
	"    font-size: 20px;",
	"    color: #ff0000;",
	"  }",
	"",
	"  b:hover { ",
	"    color: #fc9f9f;",
	"  }",
	"",
	"  .one > .text {",
	"    top: 5.5%;",
	"  }",
	"",
	"  .two > .text {",
	"    top: 10.7%;",
	"  }",
	"",
	"  .three > .text {",
	"    top: 37.5%;",
	"  }",
	"",
	"  .four > .text {",
	"    top: 47.5%;",
	"  }",
	"",
	"  .five > .text {",
	"    top: 57.5%;",
	"  }",
	"",
	"  .six > .text {",
	"    top: 67.5%;",
	"  }",
	"",
	"  .seven > .text {",
	"    top: 77.5%;",
	"  }",
	"",
	"  .eight > .text {",
	"    top: 87.5%;",
	"  }",
	"",
	"  #moddedMenu:hover .switch {",
	"    opacity: 1;",
	"  }",
	"",
	"  #moddedMenu:hover .text {",
	"    display: block;",
	"  }",
	"",
	"  .one > .switch {",
	"    top: 15%;",
	"  }",
	"",
	"  .two > .switch {",
	"    top: 25%;",
	"  }",
	"",
	"  .three > .switch {",
	"    top: 35%;",
	"  }",
	"",
	"  .four > .switch {",
	"    top: 45%;",
	"  }",
	"",
	"  .five > .switch {",
	"    top: 55%;",
	"  }",
	"",
	"  .six > .switch {",
	"    top: 65%;",
	"  }",
	"",
	"  .seven > .switch {",
	"    top: 75%;",
	"  }",
	"",
	"  .eight > .switch {",
	"    top: 85%;",
	"  }",
	"",
	"  .switch input {",
	"    display:none;",
	"  }",
	"",
	"  .slider {",
	"    position: absolute;",
	"    cursor: pointer;",
	"    top: 0;",
	"    left: 0;",
	"    right: 0;",
	"    bottom: 0;",
	"    background-color: #888;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  .slider:before {",
	"    position: absolute;",
	"    content: \"\";",
	"    height: 26px;",
	"    width: 26px;",
	"    left: 4px;",
	"    bottom: 4px;",
	"    background-color: white;",
	"    -webkit-transition: .4s;",
	"    transition: .4s;",
	"  }",
	"",
	"  input:checked + .slider {",
	"    background-color: #ff0000;",
	"  }",
	"  ",
	"  input:focus + .slider {",
	"    box-shadow: 0 0 1px #ff0000;",
	"  }",
	"",
	"  input:checked + .slider:before {",
	"    -webkit-transform: translateX(26px);",
	"    -ms-transform: translateX(26px);",
	"    transform: translateX(26px);",
	"  }",
	"",
	"  .slider.round {",
	"    border-radius: 34px;",
	"  }",
	"",
	"  .slider.round:before {",
	"    border-radius: 50%;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();



window.onbeforeunload = null;
//Version Toggle Here
let mouseX;
let mouseY;

let width;
let height;
setInterval(() => {
   if(CrashToggle == 1) {
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
   }
    doNewSend(["testing", [6]]);
}, 0);
var A=true;
if(wtcrashoff==true){
setInterval(() => {
   if(clanToggle == 1) {
setTimeout(() => {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['NoVa']])
setTimeout(() => {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['']])
setTimeout(() => {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['SUPER']])
setTimeout(() => {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['']])
setTimeout(() => {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['HACK']])
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
   }
    doNewSend(["testing", [6]]);
}, 500);
}else{
setInterval(() => {
   if(clanToggle == 1 && A==true) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
   }
    doNewSend(["testing", [6]]);
}, 50);
setInterval(() => {
   if(clanToggle == 1 && A==false) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
   }
    doNewSend(["testing", [6]]);
}, 200);}
setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);
var botSpan = document.createElement("span");
botSpan.innerHTML=""
botSpan.id="ezgetrekt"
            var ageDiv = document.getElementById("ageText");
             ageDiv.prepend(botSpan);
setInterval(() => {
    if(BotToggle == 1) {
botSpan.innerHTML="BOT "
$('#ageText').css({'color': '#74FF08'});
$('#ezgetrekt').css({'color': '#00FFEC'});
        ageDiv.prepend(botSpan);
        storeEquip(28);
        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["10", ["ProJecT NoVa Hack"]]);
        doNewSend(["ch", ["ProJecT NoVa Hack-Bot Best!"]]);
        doNewSend(["33", [nearestEnemyAngle]]);
        setTimeout( () => {
            doNewSend(["ch", ['RUN OR "TRY" KILL ME']]);
        }, 5000);}else{
$('#ageText').css({'color': '#B200FF'});
botSpan.innerHTML=""
        }
}, 1);

setInterval(() => {
    if(AutoAim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("[INFO]Tried - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("[INFO]Tried - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function normal() {
    hat(normalHat);
    acc(normalAcc);
}

function aim(x, y){
     var cvs = document.getElementById("gameCanvas");
     cvs.dispatchEvent(new MouseEvent("mousemove", {
         clientX: x,
         clientY: y

     }));
}

let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var CORESTATE = {
		inwater: {active: false},
		nearenemy: {active: false},
		intrap: {active: false},
		ipress: {active: false},
};
var bautoaim=true;
var custombp=false;
var tcat=false;
var sp="Spike";
var IM1T=false;var IM2T=false;var IM3T=false;var IM4T=false;var IM5T=false;var IM6T=false;var IM7T=false;var IM8T=false;var IM9T=false;var IM10T=false;
var IM1="-/BooM One ShOt\\-";var IM2="-/Got A Bot!\\-";var IM3="-/GG NOOB!\\-";var IM4="-/Ez!\\-";var IM5="Yeah~|R I P|~OmG";var IM6="Pro Insta";var IM7="BoomOneShot";var IM8="EzzE~1~EzzE";var IM9="ProJecT NoVa ON TOP";var IM10="eZGetREKT";
var circle = false;
var SuperHeal = false;
var R1 = "";var R2 = "";var R3 = "";var R4 = "";
var M0 = "";var M1 = "";var M2 = "";var M3 = "";var M4 = "";var M5 = "";var M6 = "";var M7 = "";var M8 = "";var M9 = "";
var zMsg = false;
var RMsg = false;
var zM0;var zM1;var zM2;var zM3;var zM4;var zM5;var zM6;var zM7;var zM8;var zM9;
var Spikex2 = false;
var Spike2x = false;
var ToggleCrash = false;
var BSChat = false;
var BSChatX = false;
var BSMsg = "Like BoostSpikes?";
var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var InstaSpeed = 230;
var primary;
var CustomDiscord = false;
var CustomAnimateChat = false;
var CustomAnimateClan = false;
var Discord = "ProJecT NoVa Server  https://discord.gg/ddkDjhn"
var AnimateChat = 'Run Away Noob!'
var AnimateClan = 'ProJecT NoVa Hack'
var InstaMessage = "-/BooM HEAD ShOt\\-"
var CustomInstaChat = false;
var xInstaChatx = false;
var InstaSpike = false;
var PremiumMap = false;
var AutoHeal = true;
var AutoHat = true;
var secondary;
var foodType;
var wallType;
var spikeType;
var tbi=true;
var BIT="   !Meow \\Ez/ Meow!   ";
var lt="Spike"
var rt="Spike"
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var aba=true
var AutoAim = false;
var FourSpikeMsgX = false;
var FourSpikeMsgToggle = false;
var FourSpikeMsg = "Like Spikes?"
var Tick = 1;
var oldHat;
var oldAcc;
var R99 = "ProJecT NoVa ON TOP";
var enemiesNear;
var normalHat;
var add = "_";
var normalAcc;
var ws;
var cursor=1;
var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};

var MYID;
var allTraps = [];
var allMooMooObjects = {};
let healSpeed = 70;
var messageToggle = 0;
var MapToggle = 0;
var clanToggle = 0;
var CrashToggle = 0;
var BotToggle = 0;
let healToggle = 1;
let hatToggle = 1;

document.msgpack = msgpack;
function n(){
     this.buffer = new Uint8Array([0]);
     this.buffer.__proto__ = new Uint8Array;
     this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};


function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
      data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if(item === "io-init") {
            let cvs = document.getElementById("gameCanvas");
            width = cvs.clientWidth;
            height = cvs.clientHeight;
            $(window).resize(function() {
                width = cvs.clientWidth;
                height = cvs.clientHeight;
            });
            cvs.addEventListener("mousemove", e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }
    if(data[0] == "11"){
        console.info("doing death");
        for (var elem of Object.values(allMooMooObjects)){
           console.info(elem);
          elem.style.opacity = 0;
        }
    }
    if (data[0]=="12"){

        let newTraps = [];
        for (let trap of allTraps){
            if (trap[trap.length-2] != data[1]) newTraps.push(trap);
        }
        allTraps = newTraps;


       if (Object.keys(allMooMooObjects).includes(data[1].toString())){
            allMooMooObjects[data[1]].remove();
      }
			if (CORESTATE.intrap.active){
				if (CORESTATE.intrap.extra == data[1]){
						CORESTATE.intrap.active = false;
					let newTraps = [];
					for (let trap of allTraps){
						if (trap[trap.length-2] != data[1]) newTraps.push(trap);
					}
					allTraps = newTraps;
				}
			}
    }
    if (data[0] == "1" && !MYID){
        MYID =  data[1];
    }
    if (data[0]=="6"){
        var locInfo = data[1];
        if (locInfo[locInfo.length-1].toString() == MYID){ //Object created
        if (window.innerWidth >= 770){
            console.log(locInfo);
            var itemID = `actionBarItem${locInfo[locInfo.length-2]+16}`;
            var imgURL = document.getElementById(itemID).style.backgroundImage.toString().match(/url\("(.+)?(?=")/)[1];
            console.info(imgURL);
            let mapDisplay = document.getElementById("mapDisplay").getBoundingClientRect();
            let mapSize = [14365, 14365];
            let boxSize = [$("#mapDisplay").width(), $("#mapDisplay").height()];
            let targets = [locInfo[1], locInfo[2]].map(item => (130*item)/14365);
            let x = mapDisplay.x + targets[0] - 6;
            let y = mapDisplay.y + targets[1] - 6;
            let newTarget = document.createElement("div");
            newTarget.rawX = targets[0];
            newTarget.rawY = targets[1];
            newTarget.rimgURL = imgURL;
            newTarget.style = `background-image: url("${imgURL}"); background-size: 12px 12px; width:12px; height:12px; position:absolute; left: ${x}px; top:${y}px; opacity:0; z-index:100; cursor: pointer;`;
            newTarget.className = "mapTarget";
            document.getElementsByTagName("body")[0].appendChild(newTarget);
            $(newTarget).animate({opacity: 1});
            allMooMooObjects[locInfo[0]] = newTarget;

        }
    } else {
			console.log(locInfo);
			for (var i=0;i<locInfo.length/8;i+=1){
		    let arr = locInfo.slice(i*8, (i+1)*8); console.log(arr)
				let objtype = arr[arr.length-2];
				if (objtype == 15){
					allTraps.push(arr);
				}

		}


		}
    }

    if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }
    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(AutoAim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 21;
                }
            };
        }
    }
    if(isEnemyNear == false && AutoAim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
        if(healToggle == 1 && SuperHeal == true) {
            setTimeout( () => {
                placeF(foodType, null);
                placeF(foodType, null);
                placeF(foodType, null);
                placeF(foodType, null);
            }, 0);
    }
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                placeF(foodType, null);
            }, healSpeed);

        }
    }
    update();
}

function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}
function placeF(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function boostSpike() {
    if(BSChat == true)
    {
        if(BSChatX == true)
        {
            doNewSend(["ch", [BSMsg]]);
        }
        else
        {
            doNewSend(["ch", ["Like BoostSpikes?"]]);
        }
    }
if(bautoaim==true){
        boostDir = nearestEnemyAngle;
}else
{
boostDir = myPlayer.dir
}
    if(custombp==true){
        if(lt=="Spike"){
            place(spikeType, boostDir + toRad(90));}
        if(lt=="Windmill"){
            place(millType, boostDir + toRad(90));}
        if(lt=="Turret"){
            place(turretType, boostDir + toRad(90));
        }
        if(lt=="Wall"){
            place(wallType, boostDir + toRad(90));
        }
        if(rt=="Spike"){
            place(spikeType, boostDir - toRad(90));}
        if(rt=="Windmill"){
            place(millType, boostDir - toRad(90));}
        if(rt=="Turret"){
            place(turretType, boostDir - toRad(90));
        }
        if(rt=="Wall"){
            place(wallType, boostDir - toRad(90));
        }
    }
    else
    {
        place(spikeType, boostDir - toRad(90));
        place(spikeType, boostDir + toRad(90));
    }
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}
var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("[INFO]Claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };
}
setInterval(() => {
if(aba==true){
if(isEnemyNear==true){
AutoAim=true
}else{
AutoAim=false
}
}}, 1);

const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};
var wtf=false;
var ezz;
document.addEventListener("mousedown", buttonPress, false);
function buttonPress(e) {
    if(e.button==0)
    {
        if(wtf==true){
            hat(ID_BullHelmet)
            acc(0)
                doNewSend(["5", [primary, true]]);
            setTimeout( () => {
            hat(0)
            if (myPlayer.y < 2400){
                hat(15);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                hat(31);
            } else {
                hat(12);
            }
            acc(11);
            }, 100);
        }
    }
    if(e.button==1)
    {
        if(PremiumMap==true){
            $("#mapDisplay").css({background: `url('data:image/png;base64,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')`});
        }
        $("#mapDisplay").css({width:"390"});
        $("#mapDisplay").css({height:"390"});
    }
    if(e.button==2)
    {
        doNewSend(["5", [secondary, true]]);
        setTimeout( () => {
        doNewSend(["5", [primary, true]]);
        }, 100);
    }
}

document.addEventListener("mouseup", test, false);
function test(e) {
clearInterval(ezz);
        setTimeout( () => {
            if(PremiumMap==true){
                $("#mapDisplay").css({background: `url('data:image/png;base64,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')`});
            }
            $("#mapDisplay").css({width:"130"});
            $("#mapDisplay").css({height:"130"});
        }, 1);
}
setInterval(() => {
    if (noItem==false) {
        for (var elem of Object.values(allMooMooObjects)){
           console.info(elem);
          elem.style.opacity = 0;
        }
    }
}, 1);
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    //MsgBox
    if (e.keyCode == 96 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M0]]);
        }
    }
    if (e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M1]]);
        }
    }
    if (e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M2]]);
        }
    }
    if (e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M3]]);
        }
    }
    if (e.keyCode == 100 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M4]]);
        }
    }
    if (e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M5]]);
        }
    }
    if (e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M6]]);
        }
    }
    if (e.keyCode == 103 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M7]]);
        }
    }
    if (e.keyCode == 104 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M8]]);
        }
    }
    if (e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(zMsg == true)
        {
            doNewSend(["ch", [M9]]);
        }
    }
    if (e.keyCode == xxxxwall && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(wallType, angle)
        }
    }
    if (e.keyCode == xxxxtarp && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == xxxxspi && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(FourSpikeMsgX == true)
        {
        if(FourSpikeMsgToggle == true)
        {
        doNewSend(["ch", [FourSpikeMsg]]);
        }
        else
        {
        doNewSend(["ch", ["Like Spikes?"]]);
        }
        }
            for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }
    if (e.keyCode == xxxxTurretk && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(turretType, angle)
        }
    }
    if (e.keyCode == xxxxxw && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == best && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
	        hat(12);
        }
        acc(11);
    }
    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }
//Crash Server
    if(e.keyCode == crash && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(wtcrashoff==true){
            if(InstaSpeed==230){
                doNewSend(["ch", ["Insta Speed- "+InstaSpeed]]);
                InstaSpeed=190
            }else{
                doNewSend(["ch", ["Insta Speed- "+InstaSpeed]]);
                InstaSpeed=230
            }
        }else{
            if(ToggleCrash == true)
            {
                CrashToggle = (CrashToggle + 1) % 2;
                if(CrashToggle == 0) {
                    document.title = "Crash: OFF🔴"
                } else {
                    document.title = "Crash: ON🟢"
                }
            }
            else
            {
                doNewSend(["ch", ["[ProJecT NoVa]You Need Turn ON Crash"]]);
            }
        }
    }

//Bot Toggle
    if(e.keyCode == bt && document.activeElement.id.toLowerCase() !== 'chatbox') {
        BotToggle = (BotToggle + 1) % 2;
            if(BotToggle == 0) {
                document.title = "Bot: OFF🔴"
            } else {
                document.title = "Bot: ON🟢"
            }
    }

    if(e.keyCode == tauh && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF🔴 / Hat: OFF🔴"
            } else {
                document.title = "Heal: OFF🔴 / Hat: ON🟢"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON🟢 / Hat: OFF🔴"
            } else {
                document.title = "Heal: ON🟢 / Hat: ON🟢"
            }
        }
    }
    if(e.keyCode == discord && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", [Discord]]);
    }
    if(e.keyCode == tauh && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (AutoHeal == false) {
            AutoHeal = true;
        doNewSend(["ch", ["Auto Heal-ON"]]);
        } else {
        doNewSend(["ch", ["Auto Heal-OFF"]]);
            AutoHeal = false;
    }
}
    if(e.keyCode == cteam && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['ProJecT NoVa Hack']])
    }
    if(e.keyCode == dcteam && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['NoClan:)']])
    }
    if(e.keyCode == 37 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["HeH HeH TrY To KIll Me"]]);
    }
    if(e.keyCode == 39 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["GeT ReCt NOOB"]]);
    }
    if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       doNewSend(["ch", ["YOU DIED NOOB!"]]);
    }
    if(e.keyCode == ktnmus && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == gramus && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == ktn && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == mk1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == spinspi && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == gr && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [2]]);
    }
    if(e.keyCode == musket2 && document.activeElement.id.toLowerCase() !== 'chatbox') {
if(rc==true){
        doNewSend(["6", [13]]);
}else{
        doNewSend(["6", [12]]);
    }
    }
    if(e.keyCode == auhat && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF🔴 / Hat: OFF🔴"
            } else {
                document.title = "Heal: OFF🔴 / Hat: ON🟢"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON🟢 / Hat: OFF🔴"
            } else {
                document.title = "Heal: ON🟢 / Hat: ON🟢"
            }
        }
    }
    if(e.keyCode == auhat && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (AutoHat == false) {
            AutoHat = true;
        doNewSend(["ch", ["Auto Hat-ON"]]);
        } else {
        doNewSend(["ch", ["Auto Hat-OFF"]]);
            AutoHat = false;
    }
}
    let RandomMsg=(getRandom(1,10)).toString();
    function InstaChat(){
        switch(RandomMsg){
            case '1':
                if(IM1T==true){
                    doNewSend(["ch", [IM1]]);}else{doNewSend(["ch", ["-/BooM One ShOt\\-"]]);}
                break;

            case '2':
                if(IM2T==true){
                    doNewSend(["ch", [IM2]]);
                }else{doNewSend(["ch", ["-/Got A Bot!\\-"]]);}
                break;

            case '3':
                if(IM3T==true){
                    doNewSend(["ch", [IM3]]);
                }else{doNewSend(["ch", ["-/GG NOOB!\\-"]]);}
                break;

            case '4':
                if(IM4T==true){
                    doNewSend(["ch", [IM4]]);
                }else{doNewSend(["ch", ["-/Ez!\\-"]]);}
                break;

            case '5':
                if(IM5T==true){
                    doNewSend(["ch", [IM5]]);
                }else{doNewSend(["ch", ["Yeah~|R I P|~OmG"]]);}
                break;

            case '6':
                if(IM6T==true && InstaSpike==true)
                {
                        doNewSend(["ch", [sp+" "+IM6]]);
                }
                if(IM6T==false && InstaSpike==false)
                {
                        doNewSend(["ch", ["Pro Insta"]]);
                }
                if(IM6T==false && InstaSpike==true)
                {
                        doNewSend(["ch", [sp+" Pro Insta"]]);
                }
                break;

            case '7':
                if(IM7T==true){
                    doNewSend(["ch", [IM7]]);}else{
                        doNewSend(["ch", ["BoomOneShot"]]);}
                break;

            case '8':
                if(IM8T==true){
                    doNewSend(["ch", [IM8]]);}
                else{
                    doNewSend(["ch", ["EzzE~1~EzzE"]]);
                }
                break;

            case '9':
                if(IM9T==true){
                    doNewSend(["ch", [IM9]]);}
                else{
                    doNewSend(["ch", ["ProJecT NoVa ON TOP"]]);
                }
                break;

            case '10':
                if(IM9T==true){
                    doNewSend(["ch", [IM10]]);}
                else{
                    doNewSend(["ch", ["eZGetREKT"]]);
                }
                break;

            default:
                doNewSend(["ch", ["-/BooM One ShOt\\-"]]);

        }};
var audio = new Audio(IL);
    if(e.keyCode == XD1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        audio.play();
        if(tbi == true)
        {
            if(customi == true)
            {
                doNewSend(["ch", [BIT]]);
            }else{
                doNewSend(["ch", ["   !Meow \\Ez/ Meow!   "]]);
            }
        }
        AutoAim=true
        doNewSend(["5", [secondary, true]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["6", [12]]);
            doNewSend(["5", [secondary, true]]);
            doNewSend(["c", [1]]);
            setTimeout( () => {
                doNewSend(["6", [15]]);
                doNewSend(["5", [secondary, true]]);
                doNewSend(["c", [1]]);
                setTimeout( () => {
                    hat(ID_TurretGear)
                    setTimeout( () => {
                        doNewSend(["5", [primary, true]]);
                        setTimeout( () => {
                            hat(0)
                            if (myPlayer.y < 2400){
                                hat(15);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                                hat(31);
                            } else {
                                hat(12);
                            }
                            acc(11);
                        }, 100);
                    }, 80);
                }, 80);
            }, 80);
        }, 80);
        AutoAim=false
    }
    if(e.keyCode == XD2 && document.activeElement.id.toLowerCase() !== 'chatbox') {
audio.play();
if(xInstaChatx == true)
{
    if(CustomInstaChat == true)
{
        doNewSend(["ch", [InstaMessage]]);
}
    else
{
InstaChat();
}
}
AutoAim=true
hat(ID_BullHelmet)
acc(0)
        doNewSend(["c", [1]]);
        setTimeout( () => {
        doNewSend(["6", [5]]);
        doNewSend(["c", [1]]);
            hat(ID_TurretGear)
        setTimeout( () => {
            hat(0)
            if (myPlayer.y < 2400){
                hat(15);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                hat(31);
            } else {
                hat(12);
            }
            acc(11);
            }, 100);
        }, 80);
        if (InstaSpike == true) {
            if(Spike2x == true){
                for (let i=0;i<3;i++){
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(spikeType, angle)
                }}
            else
            {
                if(Spikex2 == true)
                {
                    place(spikeType, myPlayer.dir + toRad(45));
                    place(spikeType, myPlayer.dir - toRad(45));
                }
                else
                {
                    place(spikeType);
                }
            }
        }
AutoAim=false
    }
    if(e.keyCode == XDD && document.activeElement.id.toLowerCase() !== 'chatbox') {
audio.play();
AutoAim=true
hat(ID_BullHelmet)
acc(0)
        doNewSend(["c", [1]]);
        setTimeout( () => {
        doNewSend(["6", [4]]);
        doNewSend(["c", [1]]);
            hat(ID_TurretGear)
        setTimeout( () => {
            hat(0)
            if (myPlayer.y < 2400){
                hat(15);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                hat(31);
            } else {
                hat(12);
            }
            acc(11);
            }, 100);
        }, 80);
        if (InstaSpike == true) {
            if(Spike2x == true){
                for (let i=0;i<3;i++){
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(spikeType, angle)
                }}
            else
            {
                if(Spikex2 == true)
                {
                    place(spikeType, myPlayer.dir + toRad(45));
                    place(spikeType, myPlayer.dir - toRad(45));
                }
                else
                {
                    place(spikeType);
                }
            }
        }
AutoAim=false
    }
    if(e.keyCode == InstaKill && document.activeElement.id.toLowerCase() !== 'chatbox') {
audio.play();
if(xInstaChatx == true)
{
    if(CustomInstaChat == true)
{
        doNewSend(["ch", [InstaMessage]]);
}
    else
{
InstaChat();
}
}
        AutoAim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, InstaSpeed - 100);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 52, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 13, 1]]);
            doNewSend(["13c", [0, 11, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 17, 1]]);
            AutoAim = false;
             if (InstaSpike == true) {
if(Spike2x == true){
            for (let i=0;i<3;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }}
else
{
if(Spikex2 == true)
{
        place(spikeType, myPlayer.dir + toRad(45));
        place(spikeType, myPlayer.dir - toRad(45));
}
else
{
             place(spikeType);
}
}
             }
        }, InstaSpeed);
if(AR==true){
        setTimeout( () => {
if(thtt==true){
            hat(ID_TurretGear)
}
        doNewSend(["5", [secondary, true]]);
        doNewSend(["ch", ["Ez Get ReKt NOOB"]]);
        setTimeout( () => {
            hat(0)
            if (myPlayer.y < 2400){
                hat(15);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                hat(31);
            } else {
                hat(12);
            }
            acc(11);
        doNewSend(["5", [primary, true]]);
        }, 2000);
        }, 1000);
    }}
document.getElementById("THT").checked = true;
    if(e.keyCode == 116 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (SuperHeal == false) {
document.getElementById("SH").checked = true;
            SuperHeal = true;
        doNewSend(["ch", ["SuperHeal-ON"]]);
        } else {
document.getElementById("SH").checked = false;
        doNewSend(["ch", ["SuperHeal-OFF"]]);
            SuperHeal = false;
    }
    }
document.getElementById("tbi").checked = true;
    if(e.keyCode == inspike && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (InstaSpike == false) {
document.getElementById("ToggleSpike").checked = true;
            InstaSpike = true;
        doNewSend(["ch", ["Insta Spike-ON"]]);
        } else {
document.getElementById("ToggleSpike").checked = false;
        doNewSend(["ch", ["Insta Spike-OFF"]]);
            InstaSpike = false;
    }
}
    if(e.keyCode == prmap && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (PremiumMap == false) {
document.getElementById("ToggleMap").checked = true;
            PremiumMap = true;
        $("#mapDisplay").css({background: `url('data:image/png;base64,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')`});
        doNewSend(["ch", ["Premium Map-ON"]]);
        } else {
document.getElementById("ToggleMap").checked = false;
        doNewSend(["ch", ["Premium Map-OFF"]]);
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
            PremiumMap = false;
    }
}
    })

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}


function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}
    let Title=(getRandom(1,2)).toString();
    switch(Title){
        case '1':
setTimeout( () => {
document.title = "💥NoVa💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVA💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVa💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVA💥"
}, 300);
}, 300);
}, 300);
}, 1000);
}, 300);
}, 300);
}, 300);
}, 1000);
}, 300);
}, 300);
}, 300);
}, 1000);
}, 300);
break;
        case '2':
setTimeout( () => {
document.title = "💥NoVA💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVa💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVA💥"
setTimeout( () => {
document.title = "💠ON💠"
setTimeout( () => {
document.title = "⬆TOP⬆"
setTimeout( () => {
setTimeout( () => {
document.title = "💥NoVa💥"
}, 300);
}, 1000);
}, 300);
}, 300);
}, 300);
}, 1000);
}, 300);
}, 300);
}, 300);
}, 1000);
}, 300);
}, 300);
}, 300);
break;

        default:
document.title = "💥NoVa💥"
    };

function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

    for (let i=33;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36){
            turretType = i - 16;
        }
    }

    spawnpadType = 36;
}

var ID_WinterCap = 15;
var ID_FlipperHat = 31;
var ID_MarksmanCap = 1;
var ID_BushGear = 10;
var ID_SoldierHelmet = 6;
var ID_AntiVenomGear = 23;
var ID_MusketeerHat = 32;
var ID_MedicGear = 13;
var ID_BullHelmet = 7;
var ID_EmpHelmet = 22;
var ID_BoosterHat = 12;
var ID_BarbarianArmor = 26;
var ID_BullMask = 46;
var ID_WindmillHat = 14;
var ID_SpikeGear = 11;
var ID_BushidoArmor = 16;
var ID_SamuraiArmor = 20;
var ID_ScavengerGear = 27;
var ID_TankGear = 40;
var ID_TurretGear = 53;

// Keys
var TankGearKey = 90;
var BullHelmetKey = 74;
var SoldierHelmetKey = 71;
var TurretKey = 72;
var BoosterHatKey = 66;
var uneqiup = 16;
var SpikeGearKey = 89;
var EmpKey = 84;
var SamuKey = 80;
var SpikeKey = 86

try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("[ERROR]Remove Ad");
}
//TJKey
var XD1=113
var XD2=114
var XDD=115
var xxxxTurretk = 192
var InstaKill = 82
var tauh = 84
var auhat = 66
var cteam = 89
var dcteam = 85
var discord = 74
var best = 77
var xxxxtarp = 73
var crash = 75
var ktn = 188
var xxxxxw = 79
var bt = 76
var mk1 = 190
var xxxxwall = 80
var xxxxspi = 186
var gramus = 191
var prmap = 189
var gr = 219
var ktnmus = 222
var inspike = 187
var musket2 = 221
var spinspi = 220

setInterval(() => {
if(ckey == false){
XD1=113
XD2=114
XDD=115
xxxxTurretk = 192
InstaKill = 82
tauh = 84
auhat = 66
cteam = 89
dcteam = 85
discord = 74
best = 77
xxxxtarp = 73
crash = 75
ktn = 188
xxxxxw = 79
bt = 76
mk1 = 190
xxxxwall = 80
xxxxspi = 186
gramus = 191
prmap = 189
gr = 219
ktnmus = 222
inspike = 187
musket2 = 221
spinspi = 220
}
}
, 1);

var KeyChange = document.createElement("divx");
KeyChange.className = "menuCard";
KeyChange.id = "mainSettings";
KeyChange.innerHTML = `
<div id="simpleModalx" class="modalx">
<div class="modal-content">
<div class="modal-headerx">
<span class="closeBtnx">&times;</span>
<h2 style="font-size: 17px; color: #FFFFFF">ProJecT NoVa MeNu</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<h2 style="font-size: 17px; color: #00FF04">Menu</h2><input value="ESC" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F1=Help</h2><input value="F1" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">.(NumPad)=Message</h2><input value="." class="keyPressLow" type="text" disabled="disabled"/>
<hr>
<h2 style="font-size: 17px; color: #BD00FF">Left Click=Bull Helmet</h2>
<h2 style="font-size: 17px; color: #BD00FF">Right Click=Bow,Musket</h2>
<h2 style="font-size: 17px; color: #BD00FF">Middle Click=Big Map</h2>
<hr>
<h2 style="font-size: 17px; color: #FFFF00">Super Insta</h2>
<h2 style="font-size: 17px; color: #00FF04">F2=Bow Insta</h2><input value="F2" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F3=AGE 1 Polearm Insta</h2><input value="F3" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F4=AGE 8 Katana Insta</h2><input value="F4" class="keyPressLow" type="text" disabled="disabled"/>
<hr>
<label class="container">Custom Key
<input type="checkbox" id="ck">
<span class="checkmark"></span>
</label>
<hr>
<h2 style="font-size: 17px; color: #00e3f8">~=4 Turret</h2><input value="" id="001" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">Q=SuperHeal</h2><input value="Q" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">R=InstaKill</h2><input value="" id="003" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">F=Tarp/Boost</h2><input value="F" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">V=Spike</h2><input value="V" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">T=Toggle AutoHeal</h2><input value="" id="006" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">G=Boost/Tarp Spike</h2><input value="G" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">B=Toggle AutoHat</h2><input value="" id="008" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">Y=Create Custom Clan</h2><input value="" id="009" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">H=2 Turret</h2><input value="H" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">N=Windmill</h2><input value="N" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">U=Clear Clan</h2><input value="" id="012" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">J=Custom Discord Chat</h2><input value="" id="013" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">M=Best Hat,Accessorie</h2><input value="" id="014" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">I=4 Tarp/Boost</h2><input value="" id="015" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">K=Crash Server(If Toggle)Now=Change Insta Speed[190/230]</h2><input value="" id="016" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8"><=Stick To Katana</h2><input value="" id="017" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">O=5 Windmill</h2><input value="" id="018" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">L=Bot Mode</h2><input value="" id="019" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">>=Any To Musket</h2><input value="" id="020" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">P=4 Wall</h2><input value="" id="021" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">;=4 Spike</h2><input value="" id="022" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">/=Grate Axe+Musket</h2><input value="" id="023" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">-=Premium Map Toggle</h2><input value="" id="024" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">[=Stick To Great Axe</h2><input value="" id="025" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">'=Katana+Musket</h2><input value="" id="026" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">+=InstaSpike Toggle</h2><input value="" id="027" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">]=Any To CrossBow</h2><input value="" id="028" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">\\=Spike To Spining Spike</h2><input value="" id="029" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">Space=Dead Message</h2><input value="Space" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">⬆=Custom Animate Chat</h2><input value="⬆" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">⬇=Custom Animate Clan</h2><input value="⬇" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">⬅="Try to kill me = suicide" Chat</h2><input value="⬅" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">➡="Get rekt noob" Chat</h2><input value="➡" class="keyPressLow" type="text" disabled="disabled"/>
</div>
</div>
<div class="modal-footerx">
<p style="color: #dd00ff; font-size: 17px;">ProJecT NoVa</p>
</div>
</div>
</div>
`
document.body.appendChild(KeyChange)

var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
<div class="modal-content">
<div class="modal-header">
<span class="closeBtn">&times;</span>
<h2 style="font-size: 17px; color: #0074FF">ProJecT NoVa - Settings</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<h3 style="color: #DAEB07; font-size: 17px;">UNQUIP: SHIFT</h3>
<label class="container">Unquip Accessorie
<input type="checkbox" id="xdezz">
<span class="checkmark"></span>
</label>
<center><h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/></center>
<center><h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/></center>
<center><h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/></center>
<center><h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/></center>
<center><h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/></center>
<center><h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/></center>
<center><h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpKey)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/></center>
<center><h3 class="menuPrompt">Samurai Armor: </h3> <input value="${String.fromCharCode(SamuKey)}" id="samu" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/></center>
<hr>
<label class="container">Music
<input type="checkbox" id="xnxxcom">
<span class="checkmark"></span>
</label>
<h3 style="color: #8A07EB; font-size: 17px;"> Game Settings </h3>
<label class="container">R.E.P. CrossBow
<input type="checkbox" id="REP">
<span class="checkmark"></span>
</label>
<label class="container">Toggle MapItem
<input type="checkbox" id="TMI">
<span class="checkmark"></span>
</label>
<label class="container">AutoReload
<input type="checkbox" id="MinecraftBetterMiniCraft">
<span class="checkmark"></span>
</label>
<label class="containerx">TurretHelmet
<input type="checkbox" id="THT">
<span class="checkmarkx"></span>
</label>
<label class="container">AutoBull
<input type="checkbox" id="AB優若乳">
<span class="checkmark"></span>
</label>
<label class="container">AutoAim
<input type="checkbox" id="aaa">
<span class="checkmark"></span>
</label>
<label class="container">Circle
<input type="checkbox" id="ggwtf">
<span class="checkmark"></span>
</label>
<label class="container">SuperHeal
<input type="checkbox" id="SH">
<span class="checkmark"></span>
</label>
<label class="container">Crash(NOT WORK)
<input type="checkbox" id="CrashXX">
<span class="checkmark"></span>
</label>
<label class="container">Premium Map
<input type="checkbox" id="ToggleMap">
<span class="checkmark"></span>
</label>
<hr></hr>
<label class="container">Insta Spike
<input type="checkbox" id="ToggleSpike">
<span class="checkmark"></span>
</label>
<label class="containerx">Spike x2
<input type="checkbox" id="Spike2">
<span class="checkmarkx"></span>
</label>
<label class="containerx">Spike x3
<input type="checkbox" id="Spike3">
<span class="checkmarkx"></span>
</label>
<hr>
<label class="container">Custom Boost Place
<input type="checkbox" id="cbp">
<span class="checkmark"></span>
</label>
<label class="containerx">AutoAim
<input type="checkbox" id="AutoAim">
<span class="checkmarkx"></span>
</label>
Left➡<input class="textarea" value="${lt}" type="textarena" id="lt">Right➡<input class="textarea" value="${rt}" type="textarena" id="rt">
<p style="color: #3256A5">Spike="Spike" Windmill="Windmill" Turret="Turret" Wall="Wall"</p>
<hr>
🔻Game Cursor🔻
<br>
<label class="container">Normal Cursor
<input type="checkbox" id="cbp1">
<span class="checkmark"></span>
</label>
<label class="container">Cursor 01
<input type="checkbox" id="cbp2">
<span class="checkmark"></span>
</label>
<label class="container">Cursor 02
<input type="checkbox" id="cbp3">
<span class="checkmark"></span>
</label>
</div>
</div>
<div class="modal-footer">
<p style="color: #05A905; font-size: 1px;">ProJecT NoVa 2Q3W8T</p>
<p style="color: #FF8700;">By L M D L</p>
</div>
</div>
</div>
`
document.body.appendChild(menuChange)

var Msg = document.createElement("Msgdiv");
Msg.className = "menuCard";
Msg.id = "mainSettings";
Msg.innerHTML = `
<div id="MsgsimpleModal" class="Msgmodal">
<div class="modal-content">
<div class="modal-headerwtf">
<span class="MsgcloseBtn">&times;</span>
<h2 style="font-size: 17px; color: #00fffb">ProJecT NoVa - Message mod</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<label class="container">Toggle Bow Insta Message
<input type="checkbox" id="tbi">
<span class="checkmark"></span>
</label>
<label class="container">Custom Bow Insta Message
<input type="checkbox" id="CBIM">
<span class="checkmark"></span>
</label>
<input class="textarea5" value="${BIT}" type="textarena" id="BITT">
<label class="container">Toggle All Message
<input type="checkbox" id="MsgON">
<span class="checkmark"></span>
</label>
<hr>
<label class="container">Toggle Message 00
<input type="checkbox" id="M0">
<span class="checkmark"></span>
</label>
<input class="textarea1" value="${M0}" type="textarena" id="0">
<label class="container">Toggle Message 01
<input type="checkbox" id="M1">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M1}" type="textarena" id="1">
<label class="container">Toggle Message 02
<input type="checkbox" id="M2">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M2}" type="textarena" id="2">
<label class="container">Toggle Message 03
<input type="checkbox" id="M3">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M3}" type="textarena" id="3">
<label class="container">Toggle Message 04
<input type="checkbox" id="M4">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M4}" type="textarena" id="4">
<label class="container">Toggle Message 05
<input type="checkbox" id="M5">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M5}" type="textarena" id="5">
<label class="container">Toggle Message 06
<input type="checkbox" id="M6">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M6}" type="textarena" id="6">
<label class="container">Toggle Message 07
<input type="checkbox" id="M7">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M7}" type="textarena" id="7">
<label class="container">Toggle Message 08
<input type="checkbox" id="M8">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M8}" type="textarena" id="8">
<label class="container">Toggle Message 09
<input type="checkbox" id="M9">
<span class="checkmark"></span>
</label>
<input class="textarea1" class="textarea1" value="${M9}" type="textarena" id="9">
<hr>
<label class="container">Say Message Toggle
<input type="checkbox" id="exd">
<span class="checkmark"></span>
</label>
Message01<input class="textarea2" value="${R1}" type="textarena" id="01">
<br>
Message02<input class="textarea2" value="${R2}" type="textarena" id="02">
<br>
Message03<input class="textarea2" value="${R3}" type="textarena" id="03">
<br>
Message04<input class="textarea2" value="${R4}" type="textarena" id="04">
<hr>
<label class="container">AutoChat
<input type="checkbox" id="accc">
<span class="checkmark"></span>
</label>
<input value="${R99}" class="textarea3" type="textarena" id="099">
<hr>
<h3 style="color: #f300be; font-size: 17px;"> Game Chat Settings </h3>
<label class="container">FourSpikeChat
<input type="checkbox" id="FourSpikeMsgXToggle">
<span class="checkmark"></span>
</label>
<label class="container">Custom FourSpikeChat
<input type="checkbox" id="FourSpikeMsgToggle">
<span class="checkmark"></span>
</label>
<input type="text" class="textarea4" value="${FourSpikeMsg}" id="FourSpikeMsg"/>
<hr>
<label class="container">BoostSpikeChat
<input type="checkbox" id="BoostSpikeMsgXToggle">
<span class="checkmark"></span>
</label>
<label class="container">Custom BoostSpikeChat
<input type="checkbox" id="BoostSpikeMsgToggle">
<span class="checkmark"></span>
</label>
<input type="text" class="textarea4" value="${BSMsg}" id="BoostSpikeMsg"/>
<hr>
<label class="container">Custom Animate Chat
<input type="checkbox" id="AnimateChatToggle">
<span class="checkmark"></span>
</label>
<input class="textarea5" value="${AnimateChat}" type="textarena" id="AnimateChatMessage">
<label class="container">Custom Animate Clan
<input type="checkbox" id="AnimateClanToggle">
<span class="checkmark"></span>
</label>
<label class="container">SuperClan
<input type="checkbox" id="WWW">
<span class="checkmark"></span>
</label>
<input class="textarea5" value="${AnimateClan}" type="textarena" id="AnimateClanMessage">
<label class="container">Custom Animate Text
<input type="checkbox" id="cat">
<span class="checkmark"></span>
</label>
<input class="textarea5" value="${add}" type="textarena" id="catt">
<hr>
<label class="container">Custom Discord Chat
<input type="checkbox" id="CustomDiscordToggle">
<span class="checkmark"></span>
</label>
<input class="textarea" value="${Discord}" type="textarena" id="DiscordMessage">
<hr>
<label class="container">Insta Chat
<input type="checkbox" id="xToggleInstaChatx">
<span class="checkmark"></span>
</label>
<label class="container">Custom Insta Chat
<input type="checkbox" id="ToggleInstaChat">
<span class="checkmark"></span>
</label>
<input class="textarea1" type="text" value="${InstaMessage}" id="InstaChatMessage"/>
<label class="container">InstaMessage 01
<input type="checkbox" id="d1">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM1}" type="textarena" id="IM1">
<label class="container">InstaMessage 02
<input type="checkbox" id="d2">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM2}" type="textarena" id="IM2">
<label class="container">InstaMessage 03
<input type="checkbox" id="d3">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM3}" type="textarena" id="IM3">
<label class="container">InstaMessage 04
<input type="checkbox" id="d4">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM4}" type="textarena" id="IM4">
<label class="container">InstaMessage 05
<input type="checkbox" id="d5">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM5}" type="textarena" id="IM5">
<label class="container">InstaMessage 06
<input type="checkbox" id="d6">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM6}" type="textarena" id="IM6">
<label class="container">InstaMessage 07
<input type="checkbox" id="d7">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM7}" type="textarena" id="IM7">
<label class="container">InstaMessage 08
<input type="checkbox" id="d8">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM8}" type="textarena" id="IM8">
<label class="container">InstaMessage 09
<input type="checkbox" id="d9">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM9}" type="textarena" id="IM9">
<label class="container">InstaMessage 10
<input type="checkbox" id="d10">
<span class="checkmark"></span>
</label>
<input class="textarea2" value="${IM10}" type="textarena" id="IM10">
<br>
Custom Spike Message➡
<input class="textarea3" value="${sp}" type="textarena" id="sss">
</div>
</div>
<div class="modal-footerwtf">
<p style="color: #00fffb;">-Anti Insta-</p>
</div>
</div>
</div>
`
document.body.appendChild(Msg)
//keystart
$("#001").on("input", () => {
    var cval = $("#001").val();
    if (cval){
        xxxxTurretk = cval.toUpperCase();
        xxxxTurretk = xxxxTurretk.charCodeAt(0);
    }
});
$("#003").on("input", () => {
    var cval = $("#003").val();
    if (cval){
        InstaKill = cval.toUpperCase();
        InstaKill = InstaKill.charCodeAt(0);
    }
});
$("#006").on("input", () => {
    var cval = $("#006").val();
    if (cval){
        tauh = cval.toUpperCase();
        tauh = tauh.charCodeAt(0);
    }
});
$("#008").on("input", () => {
    var cval = $("#008").val();
    if (cval){
        auhat = cval.toUpperCase();
        auhat = auhat.charCodeAt(0);
    }
});
$("#009").on("input", () => {
    var cval = $("#009").val();
    if (cval){
        cteam = cval.toUpperCase();
        cteam = cteam.charCodeAt(0);
    }
});
$("#012").on("input", () => {
    var cval = $("#012").val();
    if (cval){
        dcteam = cval.toUpperCase();
        dcteam = dcteam.charCodeAt(0);
    }
});
$("#013").on("input", () => {
    var cval = $("#013").val();
    if (cval){
        discord = cval.toUpperCase();
        discord = discord.charCodeAt(0);
    }
});
$("#014").on("input", () => {
    var cval = $("#014").val();
    if (cval){
        best = cval.toUpperCase();
        best = best.charCodeAt(0);
    }
});
$("#015").on("input", () => {
    var cval = $("#015").val();
    if (cval){
        xxxxtarp = cval.toUpperCase();
        xxxxtarp = xxxxtarp.charCodeAt(0);
    }
});
$("#016").on("input", () => {
    var cval = $("#016").val();
    if (cval){
        crash = cval.toUpperCase();
        crash = crash.charCodeAt(0);
    }
});
$("#017").on("input", () => {
    var cval = $("#017").val();
    if (cval){
        ktn = cval.toUpperCase();
        ktn = ktn.charCodeAt(0);
    }
});
$("#018").on("input", () => {
    var cval = $("#018").val();
    if (cval){
        xxxxxw = cval.toUpperCase();
        xxxxxw = xxxxxw.charCodeAt(0);
    }
});
$("#019").on("input", () => {
    var cval = $("#019").val();
    if (cval){
        bt = cval.toUpperCase();
        bt = bt.charCodeAt(0);
    }
});
$("#020").on("input", () => {
    var cval = $("#020").val();
    if (cval){
        mk1 = cval.toUpperCase();
        mk1 = mk1.charCodeAt(0);
    }
});
$("#021").on("input", () => {
    var cval = $("#021").val();
    if (cval){
        xxxxwall = cval.toUpperCase();
        xxxxwall = xxxxwall.charCodeAt(0);
    }
});
$("#022").on("input", () => {
    var cval = $("#022").val();
    if (cval){
        xxxxspi = cval.toUpperCase();
        xxxxspi = xxxxspi.charCodeAt(0);
    }
});
$("#023").on("input", () => {
    var cval = $("#023").val();
    if (cval){
        gramus = cval.toUpperCase();
        gramus = gramus.charCodeAt(0);
    }
});
$("#024").on("input", () => {
    var cval = $("#024").val();
    if (cval){
        prmap = cval.toUpperCase();
        prmap = prmap.charCodeAt(0);
    }
});
$("#025").on("input", () => {
    var cval = $("#025").val();
    if (cval){
        gr = cval.toUpperCase();
        gr = gr.charCodeAt(0);
    }
});
$("#026").on("input", () => {
    var cval = $("#026").val();
    if (cval){
        ktnmus = cval.toUpperCase();
        ktnmus = ktnmus.charCodeAt(0);
    }
});
$("#027").on("input", () => {
    var cval = $("#027").val();
    if (cval){
        inspike = cval.toUpperCase();
        inspike = inspike.charCodeAt(0);
    }
});
$("#028").on("input", () => {
    var cval = $("#028").val();
    if (cval){
        musket2 = cval.toUpperCase();
        musket2 = musket2.charCodeAt(0);
    }
});
$("#029").on("input", () => {
    var cval = $("#029").val();
    if (cval){
        spinspi = cval.toUpperCase();
        spinspi = spinspi.charCodeAt(0);
    }
});
//keystop
function c1(){
    document.getElementById("cbp2").checked = false;
    document.getElementById("cbp3").checked = false;
}
function c2(){
    document.getElementById("cbp1").checked = false;
    document.getElementById("cbp3").checked = false;
}
function c3(){
    document.getElementById("cbp1").checked = false;
    document.getElementById("cbp2").checked = false;
}

function ezcurbytjhacker(){
if(cursor==1){
$("#gameCanvas").css('cursor', 'url(https://www.dl.dropboxusercontent.com/s/3rfp54s2tj81vvv/cur1157.cur), default');
}
if(cursor==2){
$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');
}
if(cursor==3)
{
$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/cursors/cur-6/cur572.cur), default');
}
}
var WWW = document.querySelector("#tbi")

WWW.addEventListener('change', function() {
    if (this.checked) {
tbi=true
        doNewSend(["ch", ["Toggle Bow Insta Msg-ON"]]);
    } else {
tbi=false
doNewSend(["ch", ["Toggle Bow Insta Msg-OFF"]]);
    }
})
var rep = document.querySelector("#REP")
var rc=true
rep.addEventListener('change', function() {
    if (this.checked) {
rc=true
        doNewSend(["ch", ["R.E.P. CrossBow-ON"]]);
    } else {
rc=false
        doNewSend(["ch", ["R.E.P. CrossBow-ON"]]);
    }
})
var AR=true;
var CBIM = document.querySelector("#CBIM")
var customi=false
CBIM.addEventListener('change', function() {
    if (this.checked) {
customi=true
        doNewSend(["ch", ["Custom Bow Insta Msg-ON"]]);
    } else {
customi=false
doNewSend(["ch", ["Custom Bow Insta Msg-OFF"]]);
    }
})
var MinecraftBetterMiniCraft = document.querySelector("#MinecraftBetterMiniCraft")

MinecraftBetterMiniCraft.addEventListener('change', function() {
    if (this.checked) {
AR=true
        doNewSend(["ch", ["AutoReload-ON"]]);
    } else {
AR=false
doNewSend(["ch", ["AutoReload-OFF"]]);
    }
})
var www = document.querySelector("#WWW")

www.addEventListener('change', function() {
    if (this.checked) {
A=true
        doNewSend(["ch", ["SuperClan-ON"]]);
    } else {
A=false
doNewSend(["ch", ["SuperClan-OFF"]]);
    }
})
var noItem = false;
var ni = document.querySelector("#TMI")

ni.addEventListener('change', function() {
    if (this.checked) {
noItem=true
        doNewSend(["ch", ["Map Item-ON"]]);
    } else {
noItem=false
doNewSend(["ch", ["Map Item-OFF"]]);
    }
})

var AB優若乳 = document.querySelector("#AB優若乳")

AB優若乳.addEventListener('change', function() {
    if (this.checked) {
wtf=true
        doNewSend(["ch", ["AutoBull-ON"]]);
    } else {
wtf=false
doNewSend(["ch", ["AutoBull-OFF"]]);
    }
})
var thtt=true;
var tht = document.querySelector("#THT")

tht.addEventListener('change', function() {
    if (this.checked) {
thtt=true
doNewSend(["ch", ["Reload TurretHelmet-ON"]]);
    } else {
thtt=false
doNewSend(["ch", ["Reload TurretHelmet-OFF"]]);
    }
})

var aaa = document.querySelector("#aaa")

aaa.addEventListener('change', function() {
    if (this.checked) {
aba=true
        doNewSend(["ch", ["AutoAim-ON"]]);
    } else {
aba=false
doNewSend(["ch", ["AutoAim-OFF"]]);
    }
})
var x1 = document.querySelector("#cbp1")

x1.addEventListener('change', function() {
    if (this.checked) {
c1();
        cursor = 1
        doNewSend(["ch", ["Cursor-Normal"]]);
    } else {
        cursor = 1
        doNewSend(["ch", ["Cursor-Normal"]]);
    }
})
var x2 = document.querySelector("#cbp2")

x2.addEventListener('change', function() {
    if (this.checked) {
c2();
        cursor = 2
        doNewSend(["ch", ["Cursor-01"]]);
    } else {
        cursor = 1
        doNewSend(["ch", ["Cursor-Normal"]]);
    }
})
var x3 = document.querySelector("#cbp3")

x3.addEventListener('change', function() {
    if (this.checked) {
c3();
        cursor = 3
        doNewSend(["ch", ["Cursor-02"]]);
    } else {
        cursor = 1
        doNewSend(["ch", ["Cursor-Normal"]]);
    }
})
var aa = document.querySelector("#AutoAim")

aa.addEventListener('change', function() {
    if (this.checked) {
        bautoaim = true
        doNewSend(["ch", ["BoostAutoAim-ON"]]);
    } else {
        bautoaim = false
        doNewSend(["ch", ["BoostAutoAim-OFF"]]);
    }
})
var cbp = document.querySelector("#cbp")

cbp.addEventListener('change', function() {
    if (this.checked) {
        custombp = true
        doNewSend(["ch", ["CustomBoostPlace-ON"]]);
    } else {
        custombp = false
        doNewSend(["ch", ["CustomBoostPlace-OFF"]]);
    }
})
var cat = document.querySelector("#cat")

cat.addEventListener('change', function() {
    if (this.checked) {
        tcat = true
        doNewSend(["ch", ["CustomAnimateMsgText-ON"]]);
    } else {
        tcat = false
        doNewSend(["ch", ["CustomAnimateMsgText-OFF"]]);
    }
})
var ckey = false;
var ezzzz = document.querySelector("#ck")

ezzzz.addEventListener('change', function() {
    if (this.checked) {
        ckey = true
        doNewSend(["ch", ["Custom Key-ON"]]);
    } else {
        ckey = false
        doNewSend(["ch", ["Custom Key-OFF"]]);
    }
})
var IMM1 = document.querySelector("#d1")

IMM1.addEventListener('change', function() {
    if (this.checked) {
        IM1T = true
        doNewSend(["ch", ["Insta Message01-ON"]]);
    } else {
        IM1T = false
        doNewSend(["ch", ["Insta Message01-OFF"]]);
    }
})
var IMM2 = document.querySelector("#d2")

IMM2.addEventListener('change', function() {
    if (this.checked) {
        IM2T = true
        doNewSend(["ch", ["Insta Message02-ON"]]);
    } else {
        IM2T = false
        doNewSend(["ch", ["Insta Message02-OFF"]]);
    }
})
var IMM3 = document.querySelector("#d3")

IMM3.addEventListener('change', function() {
    if (this.checked) {
        IM3T = true
        doNewSend(["ch", ["Insta Message03-ON"]]);
    } else {
        IM3T = false
        doNewSend(["ch", ["Insta Message03-OFF"]]);
    }
})
var IMM4 = document.querySelector("#d4")

IMM4.addEventListener('change', function() {
    if (this.checked) {
        IM4T = true
        doNewSend(["ch", ["Insta Message04-ON"]]);
    } else {
        IM4T = false
        doNewSend(["ch", ["Insta Message04-OFF"]]);
    }
})
var IMM5 = document.querySelector("#d5")

IMM5.addEventListener('change', function() {
    if (this.checked) {
        IM5T = true
        doNewSend(["ch", ["Insta Message05-ON"]]);
    } else {
        IM5T = false
        doNewSend(["ch", ["Insta Message05-OFF"]]);
    }
})
var IMM6 = document.querySelector("#d6")

IMM6.addEventListener('change', function() {
    if (this.checked) {
        IM6T = true
        doNewSend(["ch", ["Insta Message06-ON"]]);
    } else {
        IM6T = false
        doNewSend(["ch", ["Insta Message06-OFF"]]);
    }
})
var IMM7 = document.querySelector("#d7")

IMM7.addEventListener('change', function() {
    if (this.checked) {
        IM7T = true
        doNewSend(["ch", ["Insta Message07-ON"]]);
    } else {
        IM7T = false
        doNewSend(["ch", ["Insta Message07-OFF"]]);
    }
})
var IMM8 = document.querySelector("#d8")

IMM8.addEventListener('change', function() {
    if (this.checked) {
        IM8T = true
        doNewSend(["ch", ["Insta Message08-ON"]]);
    } else {
        IM8T = false
        doNewSend(["ch", ["Insta Message08-OFF"]]);
    }
})
var IMM9 = document.querySelector("#d9")

IMM9.addEventListener('change', function() {
    if (this.checked) {
        IM9T = true
        doNewSend(["ch", ["Insta Message09-ON"]]);
    } else {
        IM9T = false
        doNewSend(["ch", ["Insta Message09-OFF"]]);
    }
})
var IMM10 = document.querySelector("#d10")

IMM10.addEventListener('change', function() {
    if (this.checked) {
        IM10T = true
        doNewSend(["ch", ["Insta Message10-ON"]]);
    } else {
        IM10T = false
        doNewSend(["ch", ["Insta Message10-OFF"]]);
    }
})
setInterval(() => {
add = document.getElementById("catt").value;
    if(wtcrashoff==true){
    document.getElementById("CrashXX").checked = false;
}}
, 1);

setInterval(() => {
lt = document.getElementById("lt").value;
rt = document.getElementById("rt").value;
}
, 1);
setInterval(() => {
ezcurbytjhacker();
}
, 1);

setInterval(() => {
BIT = document.getElementById("BITT").value;
sp = document.getElementById("sss").value;
IM1 = document.getElementById("IM1").value;
IM2 = document.getElementById("IM2").value;
IM3 = document.getElementById("IM3").value;
IM4 = document.getElementById("IM4").value;
IM5 = document.getElementById("IM5").value;
IM6 = document.getElementById("IM6").value;
IM7 = document.getElementById("IM7").value;
IM8 = document.getElementById("IM8").value;
IM9 = document.getElementById("IM9").value;
IM10 = document.getElementById("IM10").value;
}
, 1);
var acccc = document.querySelector("#accc")

acccc.addEventListener('change', function() {
    if (this.checked) {Achat = true
        doNewSend(["ch", ["Auto Chat-ON"]]);
    } else {Achat = false
        doNewSend(["ch", ["Auto Chat-OFF"]]);
    }
})
var EWDFAWFAW = document.querySelector("#EWDFAWFAW")

EWDFAWFAW.addEventListener('change', function() {
    if (this.checked) {CB();
    } else {
CW();
           }
})
var Achat = false;
setInterval(() => {
if(RMsg == true){
setTimeout( () => {
        doNewSend(["ch", [R1]]);
setTimeout( () => {
        doNewSend(["ch", [R2]]);
setTimeout( () => {
        doNewSend(["ch", [R3]]);
setTimeout( () => {
        doNewSend(["ch", [R4]]);
}, 1000);
}, 1000);}
, 1000);}
, 1000);
}
}, 4000);
setInterval(() => {
if(Achat == true){
    doNewSend(["ch", [R99]]);
}
}, 0);
var xd = false;
setInterval(() => {
R99 = document.getElementById("099").value;
}
, 1);
var ezxd = document.querySelector("#xdezz")

ezxd.addEventListener('change', function() {
    if (this.checked) {xd = true
        doNewSend(["ch", ["Unquip Accessorie-ON"]]);
    } else {xd = false
        doNewSend(["ch", ["Unquip Accessorie-OFF"]]);
    }
})

var music = new Audio(ML);

var rip = document.querySelector("#xnxxcom")

rip.addEventListener('change', function() {
    if (this.checked) {
music.play();
        doNewSend(["ch", ["Music-ON"]]);
    } else {
        doNewSend(["ch", ["Music-OFF"]]);
music.pause();
    }
})

var SH = document.querySelector("#SH")

SH.addEventListener('change', function() {
    if (this.checked) {
        SuperHeal = true;
        doNewSend(["ch", ["SuperHeal-ON"]]);
    } else {
        SuperHeal = false;
        doNewSend(["ch", ["SuperHeal-OFF"]]);
    }
})

var exd = document.querySelector("#exd")

exd.addEventListener('change', function() {
    if (this.checked) {
        RMsg = true;
        doNewSend(["ch", ["Say Message-ON"]]);
    } else {
        RMsg = false;
        doNewSend(["ch", ["Say Message-OFF"]]);
    }
})

setInterval(() => {
R1 = document.getElementById("01").value;
R2 = document.getElementById("02").value;
R3 = document.getElementById("03").value;
R4 = document.getElementById("04").value;
}
, 1);

var MsgON = document.querySelector("#MsgON")

MsgON.addEventListener('change', function() {
    if (this.checked) {
        zMsg = true;
        doNewSend(["ch", ["Toggle Message-ON"]]);
    } else {
        zMsg = false;
        doNewSend(["ch", ["Toggle Message-OFF"]]);
    }
})

var M00 = document.querySelector("#M0")

M00.addEventListener('change', function() {
    if (this.checked) {
        zM0 = true;
        doNewSend(["ch", ["M0 Message-ON"]]);
    } else {
        zM0 = false;
        doNewSend(["ch", ["M0 Message-OFF"]]);
    }
})

setInterval(() => {
M0 = document.getElementById("0").value;
}
, 1);

var M01 = document.querySelector("#M1")

M01.addEventListener('change', function() {
    if (this.checked) {
        zM1 = true;
        doNewSend(["ch", ["M1 Message-ON"]]);
    } else {
        zM1 = false;
        doNewSend(["ch", ["M1 Message-OFF"]]);
    }
})

setInterval(() => {
M1 = document.getElementById("1").value;
}
, 1);

var M02 = document.querySelector("#M2")

M02.addEventListener('change', function() {
    if (this.checked) {
        zM2 = true;
        doNewSend(["ch", ["M2 Message-ON"]]);
    } else {
        zM2 = false;
        doNewSend(["ch", ["M2 Message-OFF"]]);
    }
})

setInterval(() => {
M2 = document.getElementById("2").value;
}
, 1);

var M03 = document.querySelector("#M3")

M03.addEventListener('change', function() {
    if (this.checked) {
        zM3 = true;
        doNewSend(["ch", ["M3 Message-ON"]]);
    } else {
        zM3 = false;
        doNewSend(["ch", ["M3 Message-OFF"]]);
    }
})

setInterval(() => {
M3 = document.getElementById("3").value;
}
, 1);

var M04 = document.querySelector("#M4")

M04.addEventListener('change', function() {
    if (this.checked) {
        zM4 = true;
        doNewSend(["ch", ["M4 Message-ON"]]);
    } else {
        zM4 = false;
        doNewSend(["ch", ["M4 Message-OFF"]]);
    }
})

setInterval(() => {
M4 = document.getElementById("4").value;
}
, 1);

var M05 = document.querySelector("#M5")

M05.addEventListener('change', function() {
    if (this.checked) {
        zM5 = true;
        doNewSend(["ch", ["M5 Message-ON"]]);
    } else {
        zM5 = false;
        doNewSend(["ch", ["M5 Message-OFF"]]);
    }
})

setInterval(() => {
M5 = document.getElementById("5").value;
}
, 1);

var M06 = document.querySelector("#M6")

M06.addEventListener('change', function() {
    if (this.checked) {
        zM6 = true;
        doNewSend(["ch", ["M6 Message-ON"]]);
    } else {
        zM6 = false;
        doNewSend(["ch", ["M6 Message-OFF"]]);
    }
})

setInterval(() => {
M6 = document.getElementById("6").value;
}
, 1);

var M07 = document.querySelector("#M7")

M07.addEventListener('change', function() {
    if (this.checked) {
        zM7 = true;
        doNewSend(["ch", ["M7 Message-ON"]]);
    } else {
        zM7 = false;
        doNewSend(["ch", ["M7 Message-OFF"]]);
    }
})

setInterval(() => {
M7 = document.getElementById("7").value;
}
, 1);

var M08 = document.querySelector("#M8")

M08.addEventListener('change', function() {
    if (this.checked) {
        zM8 = true;
        doNewSend(["ch", ["M8 Message-ON"]]);
    } else {
        zM8 = false;
        doNewSend(["ch", ["M8 Message-OFF"]]);
    }
})

setInterval(() => {
M8 = document.getElementById("8").value;
}
, 1);

var M09 = document.querySelector("#M9")

M09.addEventListener('change', function() {
    if (this.checked) {
        zM9 = true;
        doNewSend(["ch", ["M9 Message-ON"]]);
    } else {
        zM9 = false;
        doNewSend(["ch", ["M9 Message-OFF"]]);
    }
})

setInterval(() => {
M9 = document.getElementById("9").value;
}
, 1);

$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log("[INFO]TankGearKey");
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log("[INFO]BullHelmetKey");
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log("[INFO]SoldierHelmetKey");
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log("[INFO]TurretKey");
    }
});

$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval){
        EmpKey = cval.toUpperCase();
        EmpKey = EmpKey.charCodeAt(0);
        console.log("[INFO]EmpKey");
    }
});

$("#samu").on("input", () => {
    var cval = $("#samu").val();
    if (cval){
        SamuKey = cval.toUpperCase();
        SamuKey = SamuKey.charCodeAt(0);
        console.log("[INFO]SamuKey");
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log("[INFO]BoosterHatKey");
    }
});

$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval){
        SpikeGearKey = cval.toUpperCase();
        SpikeGearKey = SpikeGearKey.charCodeAt(0);
        console.log("[INFO]SpikeGearKey");
    }
});

$("#trap").on("input", () => {
    var cval = $("#trap").val();
    if (cval){
        TrapKey = cval.toUpperCase();
        TrapKey = TrapKey.charCodeAt(0);
        console.log("[INFO]TrapKey");
    }
});

var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
    #myContainer {
        position:               absolute;
        top:                    460px;
        left:                   1655px;
        font-size:              20px;
        background:             none;
        border:                 3px black;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }

    #myContainer2 {
        position:               absolute;
        left:                   1695px;
        top:                    460px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer3 {
        position:               absolute;
        left:                   1735px;
        top:                    460px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer4 {
        position:               absolute;
        left:                   1775px;
        top:                    460px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer5 {
        position:               absolute;
        left:                   1815px;
        top:                    460px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer6 {
        position:               absolute;
        left:                   1855px;
        top:                    460px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer7 {
        position:               absolute;
        left:                   1720px;
        top:                    490px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer8 {
        position:               absolute;
        left:                   1760px;
        top:                    490px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer9 {
        position:               absolute;
        left:                   1800px;
        top:                    490px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myContainer10 {
        position:               absolute;
        left:                   1760px;
        top:                    520px;
        font-size:              20px;
        background:             none;
        border:                 transparent;
        margin:                 5px;
        opacity:                1;
        z-index:                1100;
        padding:                5px 20px;
    }

    #myButton {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_6.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton2 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_7.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton3 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_22.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton4 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_12.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton5 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/a/a3/Hat_11_P.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton6 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/e/e8/Hat_53_P.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton7 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_20.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton8 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_55.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton9 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_56.png');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myButton10 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/5/5c/Access_11.png/revision/latest?cb=20171116021740');
width: 40px;
height: 30px;
        cursor:                 pointer;

}
    #myContainer p {

    }
    #myContainer p2 {

    }
    #myContainer p3 {

    }
    #myContainer p4 {

    }
    #myContainer p5 {

    }
    #myContainer p6 {

    }
    #myContainer p7 {

    }
    #myContainer p8 {

    }
    #myContainer p9 {

    }
    #myContainer p10 {

    }
.textarea {
  background: url(https://thumbs.gfycat.com/PracticalShabbyBrocketdeer-size_restricted.gif) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.textarea1 {
  background: url(https://46.media.tumblr.com/89833f1c9d23a1f7baee54dd839b19fe/tumblr_pfecjbRRVW1uzwgsuo1_400.gif) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.textarea2 {
  background: url(https://66.media.tumblr.com/112829b583af0d0f4a182fbf374d9083/tumblr_pnz77yLiT31uzwgsuo1_400.gif) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.textarea3 {
  background: url(https://imgur.com/0K4bv2k.gif) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.textarea4 {
  background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a338ef9-a14e-4c93-989b-b510d7b9bad7/d6ela5s-255acbc1-456a-485a-b24c-6d39fdccdc31.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMzM4ZWY5LWExNGUtNGM5My05ODliLWI1MTBkN2I5YmFkN1wvZDZlbGE1cy0yNTVhY2JjMS00NTZhLTQ4NWEtYjI0Yy02ZDM5ZmRjY2RjMzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WoIEfseB0rr2E0nNLqYdPl9gXXn4czd8CVKj2M8MhT8) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.textarea5 {
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq3TpbZaulX2zSkuq6QhDQFXoGfaazbNFLyM_4ErxXPapfgosJ&usqp=CAU) center center no-repeat; /* This ruins default border */
  border: 1px solid #888;
}
.keyPressLow {
    margin-left: 8px;
    font-size: 16px;
    margin-right: 8px;
    height: 25px;
    width: 50px;
    background-color: #fcfcfc;
    border-radius: 3.5px;
    border: none;
    text-align: center;
    color: #4A4A4A;
    border: 0.5px solid #f2f2f2;
}

.menuPrompt {
    font-size: 17px;
    font-family: 'Hammersmith One';
    color: #4A4A4A;
    flex: 0.2;
    text-align: center;
    margin-top: 10px;
    display: inline-block;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.modalx {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.Msgmodal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.modal-content {
    margin: 10% auto;
    width: 40%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    font-size: 14px;
    line-height: 1.6;
}

.modal-headerx h2,
.modal-footerx h3 {
  margin: 0;
}

.modal-headerx {
    background: #000000;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-footerx {
    background: #000000;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.modal-headerwtf h2,
.modal-footerwtf h3 {
  margin: 0;
}

.modal-headerwtf {
    background: #e02609;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-footerwtf {
    background: #e02609;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}


.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.modal-header {
    background: #05A905;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-body {
    padding: 10px 20px;
    background: #fff;
}

.modal-footer {
    background: #05A905;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.closeBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtn:hover,
.closeBtn:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

.closeBtnx {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtnx:hover,
.closeBtnx:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

.MsgcloseBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.MsgcloseBtn:hover,
.MsgcloseBtn:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

/* Customize the label (the container) */
.containerx {
  display: block;
  position: relative;
  padding-left: 55px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.containerx input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmarkx {
  position: absolute;
  top: 0;
  left: 20px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.containerx:hover input ~ .checkmarkx {
  background-color: #ccc;
}

/* When the checkbox is checked, add a red background */
.containerx input:checked ~ .checkmarkx {
  background-color: #e0432b;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmarkx:after {
  content: "";
  position: absolute;
  display: none;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a red background */
.container input:checked ~ .checkmark {
  background-color: #0074FF;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

`))
document.head.appendChild(styleItem);

$("#adCard").css({display: "none"});

function disable(e) { if ((e.which || e.keyCode) == 112 || (e.which || e.keyCode) == 113 || (e.which || e.keyCode) == 114 || (e.which || e.keyCode) == 115 || (e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 117 || (e.which || e.keyCode) == 118 || (e.which || e.keyCode) == 119 || (e.which || e.keyCode) == 120 || (e.which || e.keyCode) == 122 || (e.which || e.keyCode) == 123) e.preventDefault(); };

$(document).ready(function(){
 $(document).on("keydown", disable);
});
document.addEventListener('keydown', function(e) {
if (e.keyCode == 112){
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";}}
if (e.keyCode == 110){
        if (Msgmodal.style.display = "none") {
            Msgmodal.style.display = "block";
        } else {
            Msgmodal.style.display = "none";}}
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("[INFO]Successful");hat(0)
if(xd == true){
               acc(0)}
    } else if (e.keyCode == 27){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == EmpKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_EmpHelmet);
    } else if (e.keyCode == SamuKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SamuraiArmor);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
    }
})
// Get modal element
var modalx = document.getElementById("simpleModalx");
// Get close button
var closeBtnx = document.getElementsByClassName('closeBtnx')[0];

// Events
closeBtnx.addEventListener('click', closeModalx);
window.addEventListener('click', outsideClick);

// Close
function closeModalx() {
  modalx.style.display = 'none';
}
function outsideClick(e) {
  if (e.target == modalx) {
    modalx.style.display = 'none';
  }
}
// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Get modal element
var Msgmodal = document.getElementById("MsgsimpleModal");
// Get close button
var MsgcloseBtn = document.getElementsByClassName('MsgcloseBtn')[0];

// Events
MsgcloseBtn.addEventListener('click', MsgcloseModal);

// Close
function MsgcloseModal() {
  Msgmodal.style.display = 'none';
}

var ggwtf = document.querySelector("#ggwtf")

ggwtf.addEventListener('change', function() {
    if (this.checked) {
        circle = true;
        doNewSend(["ch", ["Circle-ON"]]);
    } else {
        circle = false;
        doNewSend(["ch", ["Circle-OFF"]]);
    }
})

var Crash = document.querySelector("#CrashXX")

Crash.addEventListener('change', function() {
    if (this.checked) {
        ToggleCrash = true;
        doNewSend(["ch", ["Crash-ON"]]);
    } else {
        ToggleCrash = false;
        doNewSend(["ch", ["Crash-OFF"]]);
    }
})

var ToggleMap = document.querySelector("#ToggleMap")

ToggleMap.addEventListener('change', function() {
    if (this.checked) {
        PremiumMap = true;
        $("#mapDisplay").css({background: `url('data:image/png;base64,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')`});
        doNewSend(["ch", ["Premium Map-ON"]]);
    } else {
        PremiumMap = false;
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        doNewSend(["ch", ["Premium Map-OFF"]]);
    }
})

var ToggleSpike = document.querySelector("#ToggleSpike")

ToggleSpike.addEventListener('change', function() {
    if (this.checked) {
        InstaSpike = true;
        doNewSend(["ch", ["Insta Spike-ON"]]);
    } else {
        InstaSpike = false;
        doNewSend(["ch", ["Insta Spike-OFF"]]);
    }
})

var Spike2 = document.querySelector("#Spike2")

Spike2.addEventListener('change', function() {
    if (this.checked) {
        Spikex2 = true;
        doNewSend(["ch", ["Insta 2 Spike-ON"]]);
    } else {
        Spikex2 = false;
        doNewSend(["ch", ["Insta 2 Spike-OFF"]]);
    }
})

var Spike3 = document.querySelector("#Spike3")

Spike3.addEventListener('change', function() {
    if (this.checked) {
        Spike2x = true;
        doNewSend(["ch", ["Insta 3 Spike-ON"]]);
    } else {
        Spike2x = false;
        doNewSend(["ch", ["Insta 3 Spike-OFF"]]);
    }
})

var ToggleInstaChat = document.querySelector("#ToggleInstaChat")

ToggleInstaChat.addEventListener('change', function() {
    if (this.checked) {
        CustomInstaChat = true;
        doNewSend(["ch", ["Custom Insta Chat-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [InstaMessage]]);
            }, 5000);
    } else {
        CustomInstaChat = false;
        doNewSend(["ch", ["Custom Insta Chat-OFF"]]);
    }
})

var AnimateChatToggle = document.querySelector("#AnimateChatToggle")

AnimateChatToggle.addEventListener('change', function() {
    if (this.checked) {
        CustomAnimateChat = true;
        doNewSend(["ch", ["Custom Animate Chat-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [AnimateChat]]);
            }, 5000);
    } else {
        CustomAnimateChat = false;
        doNewSend(["ch", ["Custom Animate Chat-OFF"]]);
    }
})

var AnimateClanToggle = document.querySelector("#AnimateClanToggle")

AnimateClanToggle.addEventListener('change', function() {
    if (this.checked) {
        CustomAnimateClan = true;
        doNewSend(["ch", ["Custom Animate Clan-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [AnimateClan]]);
            }, 5000);
    } else {
        CustomAnimateClan = false;
        doNewSend(["ch", ["Custom Animate Clan-OFF"]]);
    }
})

var CustomDiscordToggle = document.querySelector("#CustomDiscordToggle")

CustomDiscordToggle.addEventListener('change', function() {
    if (this.checked) {
        CustomDiscord = true;
        doNewSend(["ch", ["Custom Discord-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [Discord]]);
            }, 5000);
    } else {
        CustomDiscord = false;
        doNewSend(["ch", ["Custom Discord-OFF"]]);
    }
})

var FourSpikesMsgToggle = document.querySelector("#FourSpikeMsgToggle")

FourSpikesMsgToggle.addEventListener('change', function() {
    if (this.checked) {
        FourSpikeMsgToggle = true;
        doNewSend(["ch", ["Custom 4SpikesMessage-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [FourSpikeMsg]]);
            }, 5000);
    } else {
        FourSpikeMsgToggle = false;
        doNewSend(["ch", ["Custom 4SpikesMessage-OFF"]]);
    }
})

var FourSpikesMsgXToggle = document.querySelector("#FourSpikeMsgXToggle")

FourSpikesMsgXToggle.addEventListener('change', function() {
    if (this.checked) {
        FourSpikeMsgX = true;
        doNewSend(["ch", ["4SpikesMessage-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [FourSpikeMsg]]);
            }, 5000);
    } else {
        FourSpikeMsgX = false;
        doNewSend(["ch", ["4SpikesMessage-OFF"]]);
    }
})

var xToggleInstaChatx = document.querySelector("#xToggleInstaChatx")

xToggleInstaChatx.addEventListener('change', function() {
    if (this.checked) {
        xInstaChatx = true;
        doNewSend(["ch", ["InstaChat-ON"]]);
    } else {
        xInstaChatx = false;
        doNewSend(["ch", ["InstaChat-OFF"]]);
    }
})

var BoostSpikeMsgToggle = document.querySelector("#BoostSpikeMsgToggle")

BoostSpikeMsgToggle.addEventListener('change', function() {
    if (this.checked) {
        BSChatX = true;
        doNewSend(["ch", ["Custom BoostSpikeMessage-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [BSMsg]]);
            }, 5000);
    } else {
        BSChatX = false;
        doNewSend(["ch", ["Custom BoostSpikeMessage-OFF"]]);
    }
})

var BoostSpikeMsgXToggle = document.querySelector("#BoostSpikeMsgXToggle")

BoostSpikeMsgXToggle.addEventListener('change', function() {
    if (this.checked) {
        BSChat = true;
        doNewSend(["ch", ["BoostSpikeMessage-ON"]]);
            setTimeout( () => {
    doNewSend(["ch", [BSMsg]]);
            }, 5000);
    } else {
        BSChat = false;
        doNewSend(["ch", ["BoostSpikeMessage-OFF"]]);
    }
})

setInterval(() => {
InstaMessage = document.getElementById("InstaChatMessage").value;
}
, 1);

setInterval(() => {
AnimateChat = document.getElementById("AnimateChatMessage").value;
}
, 1);

setInterval(() => {
AnimateClan = document.getElementById("AnimateClanMessage").value;
}
, 1);

setInterval(() => {
Discord = document.getElementById("DiscordMessage").value;
}
, 1);

setInterval(() => {
FourSpikeMsg = document.getElementById("FourSpikeMsg").value;
}
, 1);
setInterval(() => {
BSMsg = document.getElementById("BoostSpikeMsg").value;
}
, 1);
document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        if(CustomAnimateChat == true)
        {
        characters = AnimateChat;
        }
        else
        {
        characters = 'Run Away Noob!';
        }
    } else {
        if(CustomAnimateClan == true)
        {
        characters = AnimateClan
        }
      else
        {
        characters = 'TJHack';
        }
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           if(tcat==true)
           {
               result += add;
           }
           else
           {
               result += "_";
           }
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
var zNode = document.createElement('div');
zNode.innerHTML = '<button id="myButton" type="button">'
    + '</button>';
zNode.setAttribute('id', 'myContainer');
document.body.appendChild(zNode);

var zNode2 = document.createElement('div');
zNode2.innerHTML = '<button id="myButton2" type="button">'
    + ' </button>';
zNode2.setAttribute('id', 'myContainer2');
document.body.appendChild(zNode2);

var zNode3 = document.createElement('div');
zNode3.innerHTML = '<button id="myButton3" type="button">'
    + ' </button>';
zNode3.setAttribute('id', 'myContainer3');
document.body.appendChild(zNode3);

var zNode4 = document.createElement('div');
zNode4.innerHTML = '<button id="myButton4" type="button">'
    + ' </button>';
zNode4.setAttribute('id', 'myContainer4');
document.body.appendChild(zNode4);

var zNode5 = document.createElement('div');
zNode5.innerHTML = '<button id="myButton5" type="button">'
    + ' </button>';
zNode5.setAttribute('id', 'myContainer5');
document.body.appendChild(zNode5);

var zNode6 = document.createElement('div');
zNode6.innerHTML = '<button id="myButton6" type="button">'
    + ' </button>';
zNode6.setAttribute('id', 'myContainer6');
document.body.appendChild(zNode6);

var zNode7 = document.createElement('div');
zNode7.innerHTML = '<button id="myButton7" type="button">'
    + ' </button>';
zNode7.setAttribute('id', 'myContainer7');
document.body.appendChild(zNode7);

var zNode8 = document.createElement('div');
zNode8.innerHTML = '<button id="myButton8" type="button">'
    + ' </button>';
zNode8.setAttribute('id', 'myContainer8');
document.body.appendChild(zNode8);

var zNode9 = document.createElement('div');
zNode9.innerHTML = '<button id="myButton9" type="button">'
    + ' </button>';
zNode9.setAttribute('id', 'myContainer9');
document.body.appendChild(zNode9);

var zNode10 = document.createElement('div');
zNode10.innerHTML = '<button id="myButton10" type="button">'
    + ' </button>';
zNode10.setAttribute('id', 'myContainer10');
document.body.appendChild(zNode10);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
        var hat = 6;
    var zNode = document.createElement('p');
    zNode.innerHTML = storeEquip(hat).break;
    document.getElementById ("myContainer").appendChild (zNode);

}

document.getElementById ("myButton2").addEventListener (
    "click", ButtonClickAction2, false
);

function ButtonClickAction2 (zEvent) {
        var hat2 = 7;
       var zNode2 = document.createElement('p2');
    zNode2.innerHTML = storeEquip(hat2).break;
    document.getElementById ("myContainer2").appendChild (zNode2);
    }

function ButtonClickAction3 (zEvent) {
        var hat3 = 22;
    var zNode3 = document.createElement('p3');
    zNode3.innerHTML = storeEquip(hat3).break;
    document.getElementById ("myContainer3").appendChild (zNode3);

}

document.getElementById ("myButton4").addEventListener (
    "click", ButtonClickAction4, false
);

function ButtonClickAction4 (zEvent) {
        var hat4 = 12;
    var zNode4 = document.createElement('p4');
    zNode4.innerHTML = storeEquip(hat4).break;
    document.getElementById ("myContainer4").appendChild (zNode4);

}

document.getElementById ("myButton5").addEventListener (
    "click", ButtonClickAction5, false
);

function ButtonClickAction5 (zEvent) {
        var hat5 = 11;
    var zNode5 = document.createElement('p5');
    zNode5.innerHTML = storeEquip(hat5).break;
    document.getElementById ("myContainer5").appendChild (zNode5);

}

document.getElementById ("myButton6").addEventListener (
    "click", ButtonClickAction6, false
);

function ButtonClickAction6 (zEvent) {
        var hat6 = 53;
    var zNode6 = document.createElement('p6');
    zNode6.innerHTML = storeEquip(hat6).break;
    document.getElementById ("myContainer6").appendChild (zNode6);

}

document.getElementById ("myButton7").addEventListener (
    "click", ButtonClickAction7, false
);

function ButtonClickAction7 (zEvent) {
        var hat7 = 20;
    var zNode7 = document.createElement('p7');
    zNode7.innerHTML = storeEquip(hat7).break;
    document.getElementById ("myContainer7").appendChild (zNode7);

}

document.getElementById ("myButton8").addEventListener (
    "click", ButtonClickAction8, false
);

function ButtonClickAction8 (zEvent) {
        var hat8 = 40;
    var zNode8 = document.createElement('p8');
    zNode8.innerHTML = storeEquip(hat8).break;
    document.getElementById ("myContainer8").appendChild (zNode8);

}

document.getElementById ("myButton9").addEventListener (
    "click", ButtonClickAction9, false
);

function ButtonClickAction9 (zEvent) {
        var hat9 = 55;
    var zNode9 = document.createElement('p9');
    zNode9.innerHTML = storeEquip(hat9).break;
    document.getElementById ("myContainer9").appendChild (zNode9);

}

document.getElementById ("myButton10").addEventListener (
    "click", ButtonClickAction10, false
);

function ButtonClickAction10 (zEvent) {
        var acc10 = 11;
    var zNode10 = document.createElement('p10');
    zNode10.innerHTML = acc(acc10).break;
    document.getElementById ("myContainer10").appendChild (zNode10);

}
document.getElementById("MinecraftBetterMiniCraft").checked = true;
document.getElementById("WWW").checked = true;
document.getElementById("cbp1").checked = true;
var _0x2e15=['#storeButton','url(\x27https://avatarko.ru/img/avatar/32/fantastika_drakon_31345.jpg\x27)','css','#chatButton','#allianceButton'];(function(_0x2959a2,_0x2e151b){var _0x10dc1d=function(_0x41a7fc){while(--_0x41a7fc){_0x2959a2['push'](_0x2959a2['shift']());}};_0x10dc1d(++_0x2e151b);}(_0x2e15,0x111));var _0x10dc=function(_0x2959a2,_0x2e151b){_0x2959a2=_0x2959a2-0x0;var _0x10dc1d=_0x2e15[_0x2959a2];return _0x10dc1d;};$(_0x10dc('0x1'))[_0x10dc('0x4')]({'background':_0x10dc('0x3')});$(_0x10dc('0x0'))['css']({'background':_0x10dc('0x3')});$(_0x10dc('0x2'))[_0x10dc('0x4')]({'background':_0x10dc('0x3')});
var _0x5e3d=['#mapDisplay','url(\x27https://lh3.googleusercontent.com/proxy/gMPNVe7-CxTs0fIKcvZSuvWkF8tZtFQ3WMDmCPlUXVlrEnl0V1BwVuU-8622ERMNDsl46F8z_w406bbk5pvAWhZ3LryqA_via9UtEQXuZEMTWfImBMsraoHerNmXk4mt70yKTlDatq-Jg9YhX_-8DqoHXw\x27)'];(function(_0x270724,_0x5e3db4){var _0x56afd3=function(_0x1adc18){while(--_0x1adc18){_0x270724['push'](_0x270724['shift']());}};_0x56afd3(++_0x5e3db4);}(_0x5e3d,0x108));var _0x56af=function(_0x270724,_0x5e3db4){_0x270724=_0x270724-0x0;var _0x56afd3=_0x5e3d[_0x270724];return _0x56afd3;};$(_0x56af('0x0'))['css']({'background':_0x56af('0x1')});

! function(e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var r = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
			e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(i, r, function(t) {
				return e[t]
			}.bind(null, r));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 21)
}([function(e, t, n) {
	var i = t.global = n(25),
		r = t.hasBuffer = i && !!i.isBuffer,
		s = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
		a = t.isArray = n(5);
	t.isArrayBuffer = s ? function(e) {
		return e instanceof ArrayBuffer || p(e)
	} : m;
	var o = t.isBuffer = r ? i.isBuffer : m,
		c = t.isView = s ? ArrayBuffer.isView || y("ArrayBuffer", "buffer") : m;
	t.alloc = d, t.concat = function(e, n) {
		n || (n = 0, Array.prototype.forEach.call(e, (function(e) {
			n += e.length
		})));
		var i = this !== t && this || e[0],
			r = d.call(i, n),
			s = 0;
		return Array.prototype.forEach.call(e, (function(e) {
			s += f.copy.call(e, r, s)
		})), r
	}, t.from = function(e) {
		return "string" == typeof e ? function(e) {
			var t = 3 * e.length,
				n = d.call(this, t),
				i = f.write.call(n, e);
			return t !== i && (n = f.slice.call(n, 0, i)), n
		}.call(this, e) : g(this).from(e)
	};
	var l = t.Array = n(28),
		h = t.Buffer = n(29),
		u = t.Uint8Array = n(30),
		f = t.prototype = n(6);

	function d(e) {
		return g(this).alloc(e)
	}
	var p = y("ArrayBuffer");

	function g(e) {
		return o(e) ? h : c(e) ? u : a(e) ? l : r ? h : s ? u : l
	}

	function m() {
		return !1
	}

	function y(e, t) {
		return e = "[object " + e + "]",
			function(n) {
				return null != n && {}.toString.call(t ? n[t] : n) === e
			}
	}
}, function(e, t, n) {
	var i = n(5);
	t.createCodec = o, t.install = function(e) {
		for (var t in e) s.prototype[t] = a(s.prototype[t], e[t])
	}, t.filter = function(e) {
		return i(e) ? function(e) {
			return e = e.slice(),
				function(n) {
					return e.reduce(t, n)
				};

			function t(e, t) {
				return t(e)
			}
		}(e) : e
	};
	var r = n(0);

	function s(e) {
		if (!(this instanceof s)) return new s(e);
		this.options = e, this.init()
	}

	function a(e, t) {
		return e && t ? function() {
			return e.apply(this, arguments), t.apply(this, arguments)
		} : e || t
	}

	function o(e) {
		return new s(e)
	}
	s.prototype.init = function() {
		var e = this.options;
		return e && e.uint8array && (this.bufferish = r.Uint8Array), this
	}, t.preset = o({
		preset: !0
	})
}, function(e, t, n) {
	var i = n(3).ExtBuffer,
		r = n(32),
		s = n(33),
		a = n(1);

	function o() {
		var e = this.options;
		return this.encode = function(e) {
			var t = s.getWriteType(e);
			return function(e, n) {
				var i = t[typeof n];
				if (!i) throw new Error('Unsupported type "' + typeof n + '": ' + n);
				i(e, n)
			}
		}(e), e && e.preset && r.setExtPackers(this), this
	}
	a.install({
		addExtPacker: function(e, t, n) {
			n = a.filter(n);
			var r = t.name;
			r && "Object" !== r ? (this.extPackers || (this.extPackers = {}))[r] =
				s : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, s]);

			function s(t) {
				return n && (t = n(t)), new i(t, e)
			}
		},
		getExtPacker: function(e) {
			var t = this.extPackers || (this.extPackers = {}),
				n = e.constructor,
				i = n && n.name && t[n.name];
			if (i) return i;
			for (var r = this.extEncoderList || (this.extEncoderList = []), s = r.length,
					a = 0; a < s; a++) {
				var o = r[a];
				if (n === o[0]) return o[1]
			}
		},
		init: o
	}), t.preset = o.call(a.preset)
}, function(e, t, n) {
	t.ExtBuffer = function e(t, n) {
		if (!(this instanceof e)) return new e(t, n);
		this.buffer = i.from(t), this.type = n
	};
	var i = n(0)
}, function(e, t) {
	t.read = function(e, t, n, i, r) {
		var s, a, o = 8 * r - i - 1,
			c = (1 << o) - 1,
			l = c >> 1,
			h = -7,
			u = n ? r - 1 : 0,
			f = n ? -1 : 1,
			d = e[t + u];
		for (u += f, s = d & (1 << -h) - 1, d >>= -h, h += o; h > 0; s = 256 * s +
			e[t + u], u += f, h -= 8);
		for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = 256 * a + e[t + u],
			u += f, h -= 8);
		if (0 === s) s = 1 - l;
		else {
			if (s === c) return a ? NaN : 1 / 0 * (d ? -1 : 1);
			a += Math.pow(2, i), s -= l
		}
		return (d ? -1 : 1) * a * Math.pow(2, s - i)
	}, t.write = function(e, t, n, i, r, s) {
		var a, o, c, l = 8 * s - r - 1,
			h = (1 << l) - 1,
			u = h >> 1,
			f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			d = i ? 0 : s - 1,
			p = i ? 1 : -1,
			g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, a =
				h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) <
				1 && (a--, c *= 2), (t += a + u >= 1 ? f / c : f * Math.pow(2, 1 - u)) *
				c >= 2 && (a++, c /= 2), a + u >= h ? (o = 0, a = h) : a + u >= 1 ? (o =
					(t * c - 1) * Math.pow(2, r), a += u) : (o = t * Math.pow(2, u - 1) *
					Math.pow(2, r), a = 0)); r >= 8; e[n + d] = 255 & o, d += p, o /= 256,
			r -= 8);
		for (a = a << r | o, l += r; l > 0; e[n + d] = 255 & a, d += p, a /= 256,
			l -= 8);
		e[n + d - p] |= 128 * g
	}
}, function(e, t) {
	var n = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == n.call(e)
	}
}, function(e, t, n) {
	var i = n(31);
	t.copy = c, t.slice = l, t.toString = function(e, t, n) {
		return (!a && r.isBuffer(this) ? this.toString : i.toString).apply(this,
			arguments)
	}, t.write = function(e) {
		return function() {
			return (this[e] || i[e]).apply(this, arguments)
		}
	}("write");
	var r = n(0),
		s = r.global,
		a = r.hasBuffer && "TYPED_ARRAY_SUPPORT" in s,
		o = a && !s.TYPED_ARRAY_SUPPORT;

	function c(e, t, n, s) {
		var a = r.isBuffer(this),
			c = r.isBuffer(e);
		if (a && c) return this.copy(e, t, n, s);
		if (o || a || c || !r.isView(this) || !r.isView(e)) return i.copy.call(this,
			e, t, n, s);
		var h = n || null != s ? l.call(this, n, s) : this;
		return e.set(h, t), h.length
	}

	function l(e, t) {
		var n = this.slice || !o && this.subarray;
		if (n) return n.call(this, e, t);
		var i = r.alloc.call(this, t - e);
		return c.call(this, i, 0, e, t), i
	}
}, function(e, t, n) {
	(function(e) {
		! function(t) {
			var n, i = "undefined",
				r = i !== typeof e && e,
				s = i !== typeof Uint8Array && Uint8Array,
				a = i !== typeof ArrayBuffer && ArrayBuffer,
				o = [0, 0, 0, 0, 0, 0, 0, 0],
				c = Array.isArray || function(e) {
					return !!e && "[object Array]" == Object.prototype.toString.call(e)
				},
				l = 4294967296;

			function h(e, c, h) {
				var b = c ? 0 : 4,
					x = c ? 4 : 0,
					S = c ? 0 : 3,
					T = c ? 1 : 2,
					I = c ? 2 : 1,
					E = c ? 3 : 0,
					M = c ? y : v,
					A = c ? k : w,
					P = O.prototype,
					B = "is" + e,
					C = "_" + B;
				return P.buffer = void 0, P.offset = 0, P[C] = !0, P.toNumber = R, P.toString =
					function(e) {
						var t = this.buffer,
							n = this.offset,
							i = _(t, n + b),
							r = _(t, n + x),
							s = "",
							a = !h && 2147483648 & i;
						for (a && (i = ~i, r = l - r), e = e || 10;;) {
							var o = i % e * l + r;
							if (i = Math.floor(i / e), r = Math.floor(o / e), s = (o % e).toString(
									e) + s, !i && !r) break
						}
						return a && (s = "-" + s), s
					}, P.toJSON = R, P.toArray = u, r && (P.toBuffer = f), s && (P.toArrayBuffer =
						d), O[B] = function(e) {
						return !(!e || !e[C])
					}, t[e] = O, O;

				function O(e, t, r, c) {
					return this instanceof O ? function(e, t, r, c, h) {
						if (s && a && (t instanceof a && (t = new s(t)), c instanceof a && (c =
								new s(c))), t || r || c || n) {
							if (!p(t, r)) h = r, c = t, r = 0, t = new(n || Array)(8);
							e.buffer = t, e.offset = r |= 0, i !== typeof c && ("string" ==
								typeof c ? function(e, t, n, i) {
									var r = 0,
										s = n.length,
										a = 0,
										o = 0;
									"-" === n[0] && r++;
									for (var c = r; r < s;) {
										var h = parseInt(n[r++], i);
										if (!(h >= 0)) break;
										o = o * i + h, a = a * i + Math.floor(o / l), o %= l
									}
									c && (a = ~a, o ? o = l - o : a++), j(e, t + b, a), j(e, t + x, o)
								}(t, r, c, h || 10) : p(c, h) ? g(t, r, c, h) : "number" == typeof h ?
								(j(t, r + b, c), j(t, r + x, h)) : c > 0 ? M(t, r, c) : c < 0 ? A(
									t, r, c) : g(t, r, o, 0))
						} else e.buffer = m(o, 0)
					}(this, e, t, r, c) : new O(e, t, r, c)
				}

				function R() {
					var e = this.buffer,
						t = this.offset,
						n = _(e, t + b),
						i = _(e, t + x);
					return h || (n |= 0), n ? n * l + i : i
				}

				function j(e, t, n) {
					e[t + E] = 255 & n, n >>= 8, e[t + I] = 255 & n, n >>= 8, e[t + T] =
						255 & n, n >>= 8, e[t + S] = 255 & n
				}

				function _(e, t) {
					return 16777216 * e[t + S] + (e[t + T] << 16) + (e[t + I] << 8) + e[t +
						E]
				}
			}

			function u(e) {
				var t = this.buffer,
					i = this.offset;
				return n = null, !1 !== e && 0 === i && 8 === t.length && c(t) ? t : m(t,
					i)
			}

			function f(t) {
				var i = this.buffer,
					s = this.offset;
				if (n = r, !1 !== t && 0 === s && 8 === i.length && e.isBuffer(i)) return i;
				var a = new r(8);
				return g(a, 0, i, s), a
			}

			function d(e) {
				var t = this.buffer,
					i = this.offset,
					r = t.buffer;
				if (n = s, !1 !== e && 0 === i && r instanceof a && 8 === r.byteLength)
					return r;
				var o = new s(8);
				return g(o, 0, t, i), o.buffer
			}

			function p(e, t) {
				var n = e && e.length;
				return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
			}

			function g(e, t, n, i) {
				t |= 0, i |= 0;
				for (var r = 0; r < 8; r++) e[t++] = 255 & n[i++]
			}

			function m(e, t) {
				return Array.prototype.slice.call(e, t, t + 8)
			}

			function y(e, t, n) {
				for (var i = t + 8; i > t;) e[--i] = 255 & n, n /= 256
			}

			function k(e, t, n) {
				var i = t + 8;
				for (n++; i > t;) e[--i] = 255 & -n ^ 255, n /= 256
			}

			function v(e, t, n) {
				for (var i = t + 8; t < i;) e[t++] = 255 & n, n /= 256
			}

			function w(e, t, n) {
				var i = t + 8;
				for (n++; t < i;) e[t++] = 255 & -n ^ 255, n /= 256
			}
			h("Uint64BE", !0, !0), h("Int64BE", !0, !1), h("Uint64LE", !1, !0), h(
				"Int64LE", !1, !1)
		}("string" != typeof t.nodeName ? t : this || {})
	}).call(this, n(11).Buffer)
}, function(e, t, n) {
	var i = n(3).ExtBuffer,
		r = n(35),
		s = n(17).readUint8,
		a = n(36),
		o = n(1);

	function c() {
		var e = this.options;
		return this.decode = function(e) {
			var t = a.getReadToken(e);
			return function(e) {
				var n = s(e),
					i = t[n];
				if (!i) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) :
					n));
				return i(e)
			}
		}(e), e && e.preset && r.setExtUnpackers(this), this
	}
	o.install({
		addExtUnpacker: function(e, t) {
			(this.extUnpackers || (this.extUnpackers = []))[e] = o.filter(t)
		},
		getExtUnpacker: function(e) {
			return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
				return new i(t, e)
			}
		},
		init: c
	}), t.preset = c.call(o.preset)
}, function(e, t, n) {
	t.encode = function(e, t) {
		var n = new i(t);
		return n.write(e), n.read()
	};
	var i = n(10).EncodeBuffer
}, function(e, t, n) {
	t.EncodeBuffer = r;
	var i = n(2).preset;

	function r(e) {
		if (!(this instanceof r)) return new r(e);
		if (e && (this.options = e, e.codec)) {
			var t = this.codec = e.codec;
			t.bufferish && (this.bufferish = t.bufferish)
		}
	}
	n(14).FlexEncoder.mixin(r.prototype), r.prototype.codec = i, r.prototype.write =
		function(e) {
			this.codec.encode(this, e)
		}
}, function(e, t, n) {
	"use strict";
	(function(e) {
		/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <http://feross.org>
		 * @license  MIT
		 */
		var i = n(26),
			r = n(4),
			s = n(27);

		function a() {
			return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
		}

		function o(e, t) {
			if (a() < t) throw new RangeError("Invalid typed array length");
			return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype :
				(null === e && (e = new c(t)), e.length = t), e
		}

		function c(e, t, n) {
			if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
			if ("number" == typeof e) {
				if ("string" == typeof t) throw new Error(
					"If encoding is specified then the first argument must be a string");
				return u(this, e)
			}
			return l(this, e, t, n)
		}

		function l(e, t, n, i) {
			if ("number" == typeof t) throw new TypeError(
				'"value" argument must not be a number');
			return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ?
				function(e, t, n, i) {
					if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError(
						"'offset' is out of bounds");
					if (t.byteLength < n + (i || 0)) throw new RangeError(
						"'length' is out of bounds");
					return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 ===
						i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), c.TYPED_ARRAY_SUPPORT ?
						(e = t).__proto__ = c.prototype : e = f(e, t), e
				}(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
					if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n))
						throw new TypeError('"encoding" must be a valid string encoding');
					var i = 0 | p(t, n),
						r = (e = o(e, i)).write(t, n);
					return r !== i && (e = e.slice(0, r)), e
				}(e, t, n) : function(e, t) {
					if (c.isBuffer(t)) {
						var n = 0 | d(t.length);
						return 0 === (e = o(e, n)).length || t.copy(e, 0, 0, n), e
					}
					if (t) {
						if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer ||
							"length" in t) return "number" != typeof t.length || function(e) {
							return e != e
						}(t.length) ? o(e, 0) : f(e, t);
						if ("Buffer" === t.type && s(t.data)) return f(e, t.data)
					}
					throw new TypeError(
						"First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
					)
				}(e, t)
		}

		function h(e) {
			if ("number" != typeof e) throw new TypeError(
				'"size" argument must be a number');
			if (e < 0) throw new RangeError('"size" argument must not be negative')
		}

		function u(e, t) {
			if (h(t), e = o(e, t < 0 ? 0 : 0 | d(t)), !c.TYPED_ARRAY_SUPPORT)
				for (var n = 0; n < t; ++n) e[n] = 0;
			return e
		}

		function f(e, t) {
			var n = t.length < 0 ? 0 : 0 | d(t.length);
			e = o(e, n);
			for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
			return e
		}

		function d(e) {
			if (e >= a()) throw new RangeError(
				"Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(
					16) + " bytes");
			return 0 | e
		}

		function p(e, t) {
			if (c.isBuffer(e)) return e.length;
			if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer
				.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e
				.byteLength;
			"string" != typeof e && (e = "" + e);
			var n = e.length;
			if (0 === n) return 0;
			for (var i = !1;;) switch (t) {
				case "ascii":
				case "latin1":
				case "binary":
					return n;
				case "utf8":
				case "utf-8":
				case void 0:
					return z(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * n;
				case "hex":
					return n >>> 1;
				case "base64":
					return H(e).length;
				default:
					if (i) return z(e).length;
					t = ("" + t).toLowerCase(), i = !0
			}
		}

		function g(e, t, n) {
			var i = e[t];
			e[t] = e[n], e[n] = i
		}

		function m(e, t, n, i, r) {
			if (0 === e.length) return -1;
			if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n =
				2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (
					n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
				if (r) return -1;
				n = e.length - 1
			} else if (n < 0) {
				if (!r) return -1;
				n = 0
			}
			if ("string" == typeof t && (t = c.from(t, i)), c.isBuffer(t)) return 0 ===
				t.length ? -1 : y(e, t, n, i, r);
			if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT &&
				"function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype
				.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) :
				y(e, [t], n, i, r);
			throw new TypeError("val must be string, number or Buffer")
		}

		function y(e, t, n, i, r) {
			var s, a = 1,
				o = e.length,
				c = t.length;
			if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" ===
					i || "utf16le" === i || "utf-16le" === i)) {
				if (e.length < 2 || t.length < 2) return -1;
				a = 2, o /= 2, c /= 2, n /= 2
			}

			function l(e, t) {
				return 1 === a ? e[t] : e.readUInt16BE(t * a)
			}
			if (r) {
				var h = -1;
				for (s = n; s < o; s++)
					if (l(e, s) === l(t, -1 === h ? 0 : s - h)) {
						if (-1 === h && (h = s), s - h + 1 === c) return h * a
					} else -1 !== h && (s -= s - h), h = -1
			} else
				for (n + c > o && (n = o - c), s = n; s >= 0; s--) {
					for (var u = !0, f = 0; f < c; f++)
						if (l(e, s + f) !== l(t, f)) {
							u = !1;
							break
						}
					if (u) return s
				}
			return -1
		}

		function k(e, t, n, i) {
			n = Number(n) || 0;
			var r = e.length - n;
			i ? (i = Number(i)) > r && (i = r) : i = r;
			var s = t.length;
			if (s % 2 != 0) throw new TypeError("Invalid hex string");
			i > s / 2 && (i = s / 2);
			for (var a = 0; a < i; ++a) {
				var o = parseInt(t.substr(2 * a, 2), 16);
				if (isNaN(o)) return a;
				e[n + a] = o
			}
			return a
		}

		function v(e, t, n, i) {
			return V(z(t, e.length - n), e, n, i)
		}

		function w(e, t, n, i) {
			return V(function(e) {
				for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
				return t
			}(t), e, n, i)
		}

		function b(e, t, n, i) {
			return w(e, t, n, i)
		}

		function x(e, t, n, i) {
			return V(H(t), e, n, i)
		}

		function S(e, t, n, i) {
			return V(function(e, t) {
				for (var n, i, r, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
					i = (n = e.charCodeAt(a)) >> 8, r = n % 256, s.push(r), s.push(i);
				return s
			}(t, e.length - n), e, n, i)
		}

		function T(e, t, n) {
			return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e
				.slice(t, n))
		}

		function I(e, t, n) {
			n = Math.min(e.length, n);
			for (var i = [], r = t; r < n;) {
				var s, a, o, c, l = e[r],
					h = null,
					u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
				if (r + u <= n) switch (u) {
					case 1:
						l < 128 && (h = l);
						break;
					case 2:
						128 == (192 & (s = e[r + 1])) && (c = (31 & l) << 6 | 63 & s) > 127 &&
							(h = c);
						break;
					case 3:
						s = e[r + 1], a = e[r + 2], 128 == (192 & s) && 128 == (192 & a) && (
							c = (15 & l) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (c < 55296 ||
							c > 57343) && (h = c);
						break;
					case 4:
						s = e[r + 1], a = e[r + 2], o = e[r + 3], 128 == (192 & s) && 128 ==
							(192 & a) && 128 == (192 & o) && (c = (15 & l) << 18 | (63 & s) <<
								12 | (63 & a) << 6 | 63 & o) > 65535 && c < 1114112 && (h = c)
				}
				null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, i.push(h >>>
					10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), r += u
			}
			return function(e) {
				var t = e.length;
				if (t <= E) return String.fromCharCode.apply(String, e);
				for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String,
					e.slice(i, i += E));
				return n
			}(i)
		}
		t.Buffer = c, t.SlowBuffer = function(e) {
				return +e != e && (e = 0), c.alloc(+e)
			}, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ?
			e.TYPED_ARRAY_SUPPORT : function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(
						1, 1).byteLength
				} catch (e) {
					return !1
				}
			}(), t.kMaxLength = a(), c.poolSize = 8192, c._augment = function(e) {
				return e.__proto__ = c.prototype, e
			}, c.from = function(e, t, n) {
				return l(null, e, t, n)
			}, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype,
				c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species &&
				c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
					value: null,
					configurable: !0
				})), c.alloc = function(e, t, n) {
				return function(e, t, n, i) {
					return h(t), t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof i ?
						o(e, t).fill(n, i) : o(e, t).fill(n) : o(e, t)
				}(null, e, t, n)
			}, c.allocUnsafe = function(e) {
				return u(null, e)
			}, c.allocUnsafeSlow = function(e) {
				return u(null, e)
			}, c.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, c.compare = function(e, t) {
				if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError(
					"Arguments must be Buffers");
				if (e === t) return 0;
				for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); r < s; ++
					r)
					if (e[r] !== t[r]) {
						n = e[r], i = t[r];
						break
					}
				return n < i ? -1 : i < n ? 1 : 0
			}, c.isEncoding = function(e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, c.concat = function(e, t) {
				if (!s(e)) throw new TypeError(
					'"list" argument must be an Array of Buffers');
				if (0 === e.length) return c.alloc(0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var i = c.allocUnsafe(t),
					r = 0;
				for (n = 0; n < e.length; ++n) {
					var a = e[n];
					if (!c.isBuffer(a)) throw new TypeError(
						'"list" argument must be an Array of Buffers');
					a.copy(i, r), r += a.length
				}
				return i
			}, c.byteLength = p, c.prototype._isBuffer = !0, c.prototype.swap16 =
			function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError(
					"Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) g(this, t, t + 1);
				return this
			}, c.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError(
					"Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
				return this
			}, c.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError(
					"Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6),
					g(this, t + 2, t + 5), g(this, t + 3, t + 4);
				return this
			}, c.prototype.toString = function() {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function(
					e, t, n) {
					var i = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
						return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return P(this, t, n);
						case "utf8":
						case "utf-8":
							return I(this, t, n);
						case "ascii":
							return M(this, t, n);
						case "latin1":
						case "binary":
							return A(this, t, n);
						case "base64":
							return T(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return B(this, t, n);
						default:
							if (i) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), i = !0
					}
				}.apply(this, arguments)
			}, c.prototype.equals = function(e) {
				if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === c.compare(this, e)
			}, c.prototype.inspect = function() {
				var e = "",
					n = t.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g)
					.join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
			}, c.prototype.compare = function(e, t, n, i, r) {
				if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0),
					void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n >
					e.length || i < 0 || r > this.length) throw new RangeError(
					"out of range index");
				if (i >= r && t >= n) return 0;
				if (i >= r) return -1;
				if (t >= n) return 1;
				if (this === e) return 0;
				for (var s = (r >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (t >>>= 0), o =
						Math.min(s, a), l = this.slice(i, r), h = e.slice(t, n), u = 0; u < o; ++
					u)
					if (l[u] !== h[u]) {
						s = l[u], a = h[u];
						break
					}
				return s < a ? -1 : a < s ? 1 : 0
			}, c.prototype.includes = function(e, t, n) {
				return -1 !== this.indexOf(e, t, n)
			}, c.prototype.indexOf = function(e, t, n) {
				return m(this, e, t, n, !0)
			}, c.prototype.lastIndexOf = function(e, t, n) {
				return m(this, e, t, n, !1)
			}, c.prototype.write = function(e, t, n, i) {
				if (void 0 === t) i = "utf8", n = this.length, t = 0;
				else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t =
					0;
				else {
					if (!isFinite(t)) throw new Error(
						"Buffer.write(string, encoding, offset[, length]) is no longer supported"
					);
					t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n,
						n = void 0)
				}
				var r = this.length - t;
				if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) ||
					t > this.length) throw new RangeError(
					"Attempt to write outside buffer bounds");
				i || (i = "utf8");
				for (var s = !1;;) switch (i) {
					case "hex":
						return k(this, e, t, n);
					case "utf8":
					case "utf-8":
						return v(this, e, t, n);
					case "ascii":
						return w(this, e, t, n);
					case "latin1":
					case "binary":
						return b(this, e, t, n);
					case "base64":
						return x(this, e, t, n);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return S(this, e, t, n);
					default:
						if (s) throw new TypeError("Unknown encoding: " + i);
						i = ("" + i).toLowerCase(), s = !0
				}
			}, c.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
		var E = 4096;

		function M(e, t, n) {
			var i = "";
			n = Math.min(e.length, n);
			for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
			return i
		}

		function A(e, t, n) {
			var i = "";
			n = Math.min(e.length, n);
			for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
			return i
		}

		function P(e, t, n) {
			var i = e.length;
			(!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
			for (var r = "", s = t; s < n; ++s) r += F(e[s]);
			return r
		}

		function B(e, t, n) {
			for (var i = e.slice(t, n), r = "", s = 0; s < i.length; s += 2) r +=
				String.fromCharCode(i[s] + 256 * i[s + 1]);
			return r
		}

		function C(e, t, n) {
			if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
			if (e + t > n) throw new RangeError(
				"Trying to access beyond buffer length")
		}

		function O(e, t, n, i, r, s) {
			if (!c.isBuffer(e)) throw new TypeError(
				'"buffer" argument must be a Buffer instance');
			if (t > r || t < s) throw new RangeError(
				'"value" argument is out of bounds');
			if (n + i > e.length) throw new RangeError("Index out of range")
		}

		function R(e, t, n, i) {
			t < 0 && (t = 65535 + t + 1);
			for (var r = 0, s = Math.min(e.length - n, 2); r < s; ++r) e[n + r] = (t &
				255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
		}

		function j(e, t, n, i) {
			t < 0 && (t = 4294967295 + t + 1);
			for (var r = 0, s = Math.min(e.length - n, 4); r < s; ++r) e[n + r] = t >>>
				8 * (i ? r : 3 - r) & 255
		}

		function _(e, t, n, i, r, s) {
			if (n + i > e.length) throw new RangeError("Index out of range");
			if (n < 0) throw new RangeError("Index out of range")
		}

		function U(e, t, n, i, s) {
			return s || _(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4
		}

		function D(e, t, n, i, s) {
			return s || _(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8
		}
		c.prototype.slice = function(e, t) {
			var n, i = this.length;
			if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), (t =
					void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t =
					i), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ =
				c.prototype;
			else {
				var r = t - e;
				n = new c(r, void 0);
				for (var s = 0; s < r; ++s) n[s] = this[s + e]
			}
			return n
		}, c.prototype.readUIntLE = function(e, t, n) {
			e |= 0, t |= 0, n || C(e, t, this.length);
			for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256);) i += this[e +
				s] * r;
			return i
		}, c.prototype.readUIntBE = function(e, t, n) {
			e |= 0, t |= 0, n || C(e, t, this.length);
			for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e +
				--t] * r;
			return i
		}, c.prototype.readUInt8 = function(e, t) {
			return t || C(e, 1, this.length), this[e]
		}, c.prototype.readUInt16LE = function(e, t) {
			return t || C(e, 2, this.length), this[e] | this[e + 1] << 8
		}, c.prototype.readUInt16BE = function(e, t) {
			return t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
		}, c.prototype.readUInt32LE = function(e, t) {
			return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e +
				2] << 16) + 16777216 * this[e + 3]
		}, c.prototype.readUInt32BE = function(e, t) {
			return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] <<
				16 | this[e + 2] << 8 | this[e + 3])
		}, c.prototype.readIntLE = function(e, t, n) {
			e |= 0, t |= 0, n || C(e, t, this.length);
			for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256);) i += this[e +
				s] * r;
			return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i
		}, c.prototype.readIntBE = function(e, t, n) {
			e |= 0, t |= 0, n || C(e, t, this.length);
			for (var i = t, r = 1, s = this[e + --i]; i > 0 && (r *= 256);) s +=
				this[e + --i] * r;
			return s >= (r *= 128) && (s -= Math.pow(2, 8 * t)), s
		}, c.prototype.readInt8 = function(e, t) {
			return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] +
				1) : this[e]
		}, c.prototype.readInt16LE = function(e, t) {
			t || C(e, 2, this.length);
			var n = this[e] | this[e + 1] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, c.prototype.readInt16BE = function(e, t) {
			t || C(e, 2, this.length);
			var n = this[e + 1] | this[e] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, c.prototype.readInt32LE = function(e, t) {
			return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e +
				2] << 16 | this[e + 3] << 24
		}, c.prototype.readInt32BE = function(e, t) {
			return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 |
				this[e + 2] << 8 | this[e + 3]
		}, c.prototype.readFloatLE = function(e, t) {
			return t || C(e, 4, this.length), r.read(this, e, !0, 23, 4)
		}, c.prototype.readFloatBE = function(e, t) {
			return t || C(e, 4, this.length), r.read(this, e, !1, 23, 4)
		}, c.prototype.readDoubleLE = function(e, t) {
			return t || C(e, 8, this.length), r.read(this, e, !0, 52, 8)
		}, c.prototype.readDoubleBE = function(e, t) {
			return t || C(e, 8, this.length), r.read(this, e, !1, 52, 8)
		}, c.prototype.writeUIntLE = function(e, t, n, i) {
			e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
			var r = 1,
				s = 0;
			for (this[t] = 255 & e; ++s < n && (r *= 256);) this[t + s] = e / r &
				255;
			return t + n
		}, c.prototype.writeUIntBE = function(e, t, n, i) {
			e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
			var r = n - 1,
				s = 1;
			for (this[t + r] = 255 & e; --r >= 0 && (s *= 256);) this[t + r] = e / s &
				255;
			return t + n
		}, c.prototype.writeUInt8 = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT ||
				(e = Math.floor(e)), this[t] = 255 & e, t + 1
		}, c.prototype.writeUInt16LE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ?
				(this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
		}, c.prototype.writeUInt16BE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ?
				(this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
		}, c.prototype.writeUInt32LE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ?
				(this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8,
					this[t] = 255 & e) : j(this, e, t, !0), t + 4
		}, c.prototype.writeUInt32BE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ?
				(this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8,
					this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
		}, c.prototype.writeIntLE = function(e, t, n, i) {
			if (e = +e, t |= 0, !i) {
				var r = Math.pow(2, 8 * n - 1);
				O(this, e, t, n, r - 1, -r)
			}
			var s = 0,
				a = 1,
				o = 0;
			for (this[t] = 255 & e; ++s < n && (a *= 256);) e < 0 && 0 === o && 0 !==
				this[t + s - 1] && (o = 1), this[t + s] = (e / a >> 0) - o & 255;
			return t + n
		}, c.prototype.writeIntBE = function(e, t, n, i) {
			if (e = +e, t |= 0, !i) {
				var r = Math.pow(2, 8 * n - 1);
				O(this, e, t, n, r - 1, -r)
			}
			var s = n - 1,
				a = 1,
				o = 0;
			for (this[t + s] = 255 & e; --s >= 0 && (a *= 256);) e < 0 && 0 === o &&
				0 !== this[t + s + 1] && (o = 1), this[t + s] = (e / a >> 0) - o & 255;
			return t + n
		}, c.prototype.writeInt8 = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT ||
				(e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t +
				1
		}, c.prototype.writeInt16LE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ?
				(this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
		}, c.prototype.writeInt16BE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ?
				(this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
		}, c.prototype.writeInt32LE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), c
				.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[
					t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
		}, c.prototype.writeInt32BE = function(e, t, n) {
			return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e <
				0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>>
					24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 &
					e) : j(this, e, t, !1), t + 4
		}, c.prototype.writeFloatLE = function(e, t, n) {
			return U(this, e, t, !0, n)
		}, c.prototype.writeFloatBE = function(e, t, n) {
			return U(this, e, t, !1, n)
		}, c.prototype.writeDoubleLE = function(e, t, n) {
			return D(this, e, t, !0, n)
		}, c.prototype.writeDoubleBE = function(e, t, n) {
			return D(this, e, t, !1, n)
		}, c.prototype.copy = function(e, t, n, i) {
			if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t =
					e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
			if (0 === e.length || 0 === this.length) return 0;
			if (t < 0) throw new RangeError("targetStart out of bounds");
			if (n < 0 || n >= this.length) throw new RangeError(
				"sourceStart out of bounds");
			if (i < 0) throw new RangeError("sourceEnd out of bounds");
			i > this.length && (i = this.length), e.length - t < i - n && (i = e.length -
				t + n);
			var r, s = i - n;
			if (this === e && n < t && t < i)
				for (r = s - 1; r >= 0; --r) e[r + t] = this[r + n];
			else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT)
				for (r = 0; r < s; ++r) e[r + t] = this[r + n];
			else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
			return s
		}, c.prototype.fill = function(e, t, n, i) {
			if ("string" == typeof e) {
				if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" ==
					typeof n && (i = n, n = this.length), 1 === e.length) {
					var r = e.charCodeAt(0);
					r < 256 && (e = r)
				}
				if (void 0 !== i && "string" != typeof i) throw new TypeError(
					"encoding must be a string");
				if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError(
					"Unknown encoding: " + i)
			} else "number" == typeof e && (e &= 255);
			if (t < 0 || this.length < t || this.length < n) throw new RangeError(
				"Out of range index");
			if (n <= t) return this;
			var s;
			if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0),
				"number" == typeof e)
				for (s = t; s < n; ++s) this[s] = e;
			else {
				var a = c.isBuffer(e) ? e : z(new c(e, i).toString()),
					o = a.length;
				for (s = 0; s < n - t; ++s) this[s + t] = a[s % o]
			}
			return this
		};
		var L = /[^+\/0-9A-Za-z-_]/g;

		function F(e) {
			return e < 16 ? "0" + e.toString(16) : e.toString(16)
		}

		function z(e, t) {
			var n;
			t = t || 1 / 0;
			for (var i = e.length, r = null, s = [], a = 0; a < i; ++a) {
				if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
					if (!r) {
						if (n > 56319) {
							(t -= 3) > -1 && s.push(239, 191, 189);
							continue
						}
						if (a + 1 === i) {
							(t -= 3) > -1 && s.push(239, 191, 189);
							continue
						}
						r = n;
						continue
					}
					if (n < 56320) {
						(t -= 3) > -1 && s.push(239, 191, 189), r = n;
						continue
					}
					n = 65536 + (r - 55296 << 10 | n - 56320)
				} else r && (t -= 3) > -1 && s.push(239, 191, 189);
				if (r = null, n < 128) {
					if ((t -= 1) < 0) break;
					s.push(n)
				} else if (n < 2048) {
					if ((t -= 2) < 0) break;
					s.push(n >> 6 | 192, 63 & n | 128)
				} else if (n < 65536) {
					if ((t -= 3) < 0) break;
					s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
				} else {
					if (!(n < 1114112)) throw new Error("Invalid code point");
					if ((t -= 4) < 0) break;
					s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n |
						128)
				}
			}
			return s
		}

		function H(e) {
			return i.toByteArray(function(e) {
				if ((e = function(e) {
						return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
					}(e).replace(L, "")).length < 2) return "";
				for (; e.length % 4 != 0;) e += "=";
				return e
			}(e))
		}

		function V(e, t, n, i) {
			for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r +
				n] = e[r];
			return r
		}
	}).call(this, n(12))
}, function(e, t) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t) {
	for (var n = t.uint8 = new Array(256), i = 0; i <= 255; i++) n[i] = r(i);

	function r(e) {
		return function(t) {
			var n = t.reserve(1);
			t.buffer[n] = e
		}
	}
}, function(e, t, n) {
	t.FlexDecoder = s, t.FlexEncoder = a;
	var i = n(0),
		r = "BUFFER_SHORTAGE";

	function s() {
		if (!(this instanceof s)) return new s
	}

	function a() {
		if (!(this instanceof a)) return new a
	}

	function o() {
		throw new Error("method not implemented: write()")
	}

	function c() {
		throw new Error("method not implemented: fetch()")
	}

	function l() {
		return this.buffers && this.buffers.length ? (this.flush(), this.pull()) :
			this.fetch()
	}

	function h(e) {
		(this.buffers || (this.buffers = [])).push(e)
	}

	function u() {
		return (this.buffers || (this.buffers = [])).shift()
	}

	function f(e) {
		return function(t) {
			for (var n in e) t[n] = e[n];
			return t
		}
	}
	s.mixin = f({
		bufferish: i,
		write: function(e) {
			var t = this.offset ? i.prototype.slice.call(this.buffer, this.offset) :
				this.buffer;
			this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset =
				0
		},
		fetch: c,
		flush: function() {
			for (; this.offset < this.buffer.length;) {
				var e, t = this.offset;
				try {
					e = this.fetch()
				} catch (e) {
					if (e && e.message != r) throw e;
					this.offset = t;
					break
				}
				this.push(e)
			}
		},
		push: h,
		pull: u,
		read: l,
		reserve: function(e) {
			var t = this.offset,
				n = t + e;
			if (n > this.buffer.length) throw new Error(r);
			return this.offset = n, t
		},
		offset: 0
	}), s.mixin(s.prototype), a.mixin = f({
		bufferish: i,
		write: o,
		fetch: function() {
			var e = this.start;
			if (e < this.offset) {
				var t = this.start = this.offset;
				return i.prototype.slice.call(this.buffer, e, t)
			}
		},
		flush: function() {
			for (; this.start < this.offset;) {
				var e = this.fetch();
				e && this.push(e)
			}
		},
		push: h,
		pull: function() {
			var e = this.buffers || (this.buffers = []),
				t = e.length > 1 ? this.bufferish.concat(e) : e[0];
			return e.length = 0, t
		},
		read: l,
		reserve: function(e) {
			var t = 0 | e;
			if (this.buffer) {
				var n = this.buffer.length,
					i = 0 | this.offset,
					r = i + t;
				if (r < n) return this.offset = r, i;
				this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
			}
			return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish
				.alloc(e), this.start = 0, this.offset = t, 0
		},
		send: function(e) {
			var t = e.length;
			if (t > this.minBufferSize) this.flush(), this.push(e);
			else {
				var n = this.reserve(t);
				i.prototype.copy.call(e, this.buffer, n)
			}
		},
		maxBufferSize: 65536,
		minBufferSize: 2048,
		offset: 0,
		start: 0
	}), a.mixin(a.prototype)
}, function(e, t, n) {
	t.decode = function(e, t) {
		var n = new i(t);
		return n.write(e), n.read()
	};
	var i = n(16).DecodeBuffer
}, function(e, t, n) {
	t.DecodeBuffer = r;
	var i = n(8).preset;

	function r(e) {
		if (!(this instanceof r)) return new r(e);
		if (e && (this.options = e, e.codec)) {
			var t = this.codec = e.codec;
			t.bufferish && (this.bufferish = t.bufferish)
		}
	}
	n(14).FlexDecoder.mixin(r.prototype), r.prototype.codec = i, r.prototype.fetch =
		function() {
			return this.codec.decode(this)
		}
}, function(e, t, n) {
	var i = n(4),
		r = n(7),
		s = r.Uint64BE,
		a = r.Int64BE;
	t.getReadFormat = function(e) {
		var t = o.hasArrayBuffer && e && e.binarraybuffer,
			n = e && e.int64;
		return {
			map: l && e && e.usemap ? u : h,
			array: f,
			str: d,
			bin: t ? g : p,
			ext: m,
			uint8: y,
			uint16: v,
			uint32: b,
			uint64: S(8, n ? E : T),
			int8: k,
			int16: w,
			int32: x,
			int64: S(8, n ? M : I),
			float32: S(4, A),
			float64: S(8, P)
		}
	}, t.readUint8 = y;
	var o = n(0),
		c = n(6),
		l = "undefined" != typeof Map;

	function h(e, t) {
		var n, i = {},
			r = new Array(t),
			s = new Array(t),
			a = e.codec.decode;
		for (n = 0; n < t; n++) r[n] = a(e), s[n] = a(e);
		for (n = 0; n < t; n++) i[r[n]] = s[n];
		return i
	}

	function u(e, t) {
		var n, i = new Map,
			r = new Array(t),
			s = new Array(t),
			a = e.codec.decode;
		for (n = 0; n < t; n++) r[n] = a(e), s[n] = a(e);
		for (n = 0; n < t; n++) i.set(r[n], s[n]);
		return i
	}

	function f(e, t) {
		for (var n = new Array(t), i = e.codec.decode, r = 0; r < t; r++) n[r] = i(
			e);
		return n
	}

	function d(e, t) {
		var n = e.reserve(t),
			i = n + t;
		return c.toString.call(e.buffer, "utf-8", n, i)
	}

	function p(e, t) {
		var n = e.reserve(t),
			i = n + t,
			r = c.slice.call(e.buffer, n, i);
		return o.from(r)
	}

	function g(e, t) {
		var n = e.reserve(t),
			i = n + t,
			r = c.slice.call(e.buffer, n, i);
		return o.Uint8Array.from(r).buffer
	}

	function m(e, t) {
		var n = e.reserve(t + 1),
			i = e.buffer[n++],
			r = n + t,
			s = e.codec.getExtUnpacker(i);
		if (!s) throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) :
			i));
		return s(c.slice.call(e.buffer, n, r))
	}

	function y(e) {
		var t = e.reserve(1);
		return e.buffer[t]
	}

	function k(e) {
		var t = e.reserve(1),
			n = e.buffer[t];
		return 128 & n ? n - 256 : n
	}

	function v(e) {
		var t = e.reserve(2),
			n = e.buffer;
		return n[t++] << 8 | n[t]
	}

	function w(e) {
		var t = e.reserve(2),
			n = e.buffer,
			i = n[t++] << 8 | n[t];
		return 32768 & i ? i - 65536 : i
	}

	function b(e) {
		var t = e.reserve(4),
			n = e.buffer;
		return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
	}

	function x(e) {
		var t = e.reserve(4),
			n = e.buffer;
		return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
	}

	function S(e, t) {
		return function(n) {
			var i = n.reserve(e);
			return t.call(n.buffer, i, !0)
		}
	}

	function T(e) {
		return new s(this, e).toNumber()
	}

	function I(e) {
		return new a(this, e).toNumber()
	}

	function E(e) {
		return new s(this, e)
	}

	function M(e) {
		return new a(this, e)
	}

	function A(e) {
		return i.read(this, e, !1, 23, 4)
	}

	function P(e) {
		return i.read(this, e, !1, 52, 8)
	}
}, function(e, t, n) {
	! function(t) {
		e.exports = t;
		var n = "listeners",
			i = {
				on: function(e, t) {
					return a(this, e).push(t), this
				},
				once: function(e, t) {
					var n = this;
					return i.originalListener = t, a(n, e).push(i), n;

					function i() {
						s.call(n, e, i), t.apply(this, arguments)
					}
				},
				off: s,
				emit: function(e, t) {
					var n = this,
						i = a(n, e, !0);
					if (!i) return !1;
					var r = arguments.length;
					if (1 === r) i.forEach((function(e) {
						e.call(n)
					}));
					else if (2 === r) i.forEach((function(e) {
						e.call(n, t)
					}));
					else {
						var s = Array.prototype.slice.call(arguments, 1);
						i.forEach((function(e) {
							e.apply(n, s)
						}))
					}
					return !!i.length
				}
			};

		function r(e) {
			for (var t in i) e[t] = i[t];
			return e
		}

		function s(e, t) {
			var i;
			if (arguments.length) {
				if (t) {
					if (i = a(this, e, !0)) {
						if (!(i = i.filter((function(e) {
								return e !== t && e.originalListener !== t
							}))).length) return s.call(this, e);
						this[n][e] = i
					}
				} else if ((i = this[n]) && (delete i[e], !Object.keys(i).length)) return s
					.call(this)
			} else delete this[n];
			return this
		}

		function a(e, t, i) {
			if (!i || e[n]) {
				var r = e[n] || (e[n] = {});
				return r[t] || (r[t] = [])
			}
		}
		r(t.prototype), t.mixin = r
	}((
		/**
		 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
		 *
		 * @copyright Yusuke Kawasaki
		 * @license MIT
		 * @constructor
		 * @see https://github.com/kawanet/event-lite
		 * @see http://kawanet.github.io/event-lite/EventLite.html
		 * @example
		 * var EventLite = require("event-lite");
		 *
		 * function MyClass() {...}             // your class
		 *
		 * EventLite.mixin(MyClass.prototype);  // import event methods
		 *
		 * var obj = new MyClass();
		 * obj.on("foo", function() {...});     // add event listener
		 * obj.once("bar", function() {...});   // add one-time event listener
		 * obj.emit("foo");                     // dispatch event
		 * obj.emit("bar");                     // dispatch another event
		 * obj.off("foo");                      // remove event listener
		 */
		function e() {
			if (!(this instanceof e)) return new e
		}))
}, function(e, t, n) {
	(function(t) {
		e.exports.maxScreenWidth = 3000, e.exports.maxScreenHeight = 1800, e.exports
			.serverUpdateRate = 9, e.exports.maxPlayers = 50, e.exports.maxPlayersHard = 50, e.exports.collisionDepth = 6, e.exports.minimapRate = 3e3, e.exports.colGrid =
			10, e.exports.clientSendRate = 5, e.exports.healthBarWidth = 50, e.exports
			.healthBarPad = 4.5, e.exports.iconPadding = 15, e.exports.iconPad = .9,
			e.exports.deathFadeout = 1, e.exports.crownIconScale = 60, e.exports.crownPad =
			35, e.exports.chatCountdown = 3000, e.exports.chatCooldown = 0, e.exports
			.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME, e.exports.maxAge = 100,
			e.exports.gatherAngle = Math.PI / 2.6, e.exports.gatherWiggle = 10, e.exports
			.hitReturnRatio = .25, e.exports.hitAngle = Math.PI / 2, e.exports.playerScale =
			35, e.exports.playerSpeed = .0016, e.exports.playerDecel = .993, e.exports
			.nameY = 34, e.exports.skinColors = ["#bf8f54", "#cbb091", "#896c4b",
				"#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
				"#00000000"
			], e.exports.animalCount = 7, e.exports.aiTurnRandom = .06, e.exports.cowNames = [
				"Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince",
				"Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald",
				"Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben",
				"Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined",
				"Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy",
				"Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn",
				"Milky"
			], e.exports.shieldAngle = Math.PI / 3, e.exports.weaponVariants = [{
				id: 0,
				src: "",
				xp: 0,
				val: 1
			}, {
				id: 1,
				src: "_g",
				xp: 3e3,
				val: 1.1
			}, {
				id: 2,
				src: "_d",
				xp: 7e3,
				val: 1.18
			}, {
				id: 3,
				src: "_r",
				poison: !0,
				xp: 12e3,
				val: 1.18
			}], e.exports.fetchVariant = function(t) {
				for (var n = t.weaponXP[t.weaponIndex] || 0, i = e.exports.weaponVariants
						.length - 1; i >= 0; --i)
					if (n >= e.exports.weaponVariants[i].xp) return e.exports.weaponVariants[
						i]
			}, e.exports.resourceTypes = ["wood", "food", "stone", "points"], e.exports
			.areaCount = 7, e.exports.treesPerArea = 9, e.exports.bushesPerArea = 3,
			e.exports.totalRocks = 32, e.exports.goldOres = 7, e.exports.riverWidth =
			724, e.exports.riverPadding = 114, e.exports.waterCurrent = .0011, e.exports
			.waveSpeed = 1e-4, e.exports.waveMax = 1.3, e.exports.treeScales = [150,
				160, 165, 175
			], e.exports.bushScales = [80, 85, 95], e.exports.rockScales = [80, 85,
				90
			], e.exports.snowBiomeTop = 2400, e.exports.snowSpeed = .75, e.exports.maxNameLength =
			15, e.exports.mapScale = 14400, e.exports.mapPingScale = 40, e.exports.mapPingTime =
			2200
	}).call(this, n(41))
}, function(e, t) {
	var n = {
		utf8: {
			stringToBytes: function(e) {
				return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
			},
			bytesToString: function(e) {
				return decodeURIComponent(escape(n.bin.bytesToString(e)))
			}
		},
		bin: {
			stringToBytes: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
				return t
			},
			bytesToString: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[
					n]));
				return t.join("")
			}
		}
	};
	e.exports = n
}, function(e, t, n) {
	"use strict";
	window.loadedScript = !0;
	var i = "127.0.0.1" !== location.hostname && !location.hostname.startsWith(
		"192.168.");
	n(22);
	var r = n(23),
		s = n(42),
		a = n(43),
		o = n(19),
		c = n(44),
		l = n(45),
		h = (n(46), n(47)),
		u = n(48),
		f = n(55),
		d = n(56),
		p = n(57),
		g = n(58).obj,
		m = new a.TextManager,
		y = new(n(59))("moomoo.io", 3e3, o.maxPlayers, 5, !1);
	y.debugLog = !1;
	var k = !1;

	function v() {
		ht && ut && (k = !0, i ? window.grecaptcha.execute(
			"6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
				action: "homepage"
			}).then((function(e) {
			w(e)
		})) : w(null))
	}

	function w(e) {
		y.start((function(t, n, a) {
			var c = (i ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + a;
			e && (c += "&token=" + encodeURIComponent(e)), r.connect(c, (function(e) {
				Bi(), setInterval(() => Bi(), 2500), e ? ft(e) : (ue.onclick = s.checkTrusted(
						(function() {
							! function() {
								var e = ++bt > 1,
									t = Date.now() - wt > vt;
								e && t ? (wt = Date.now(), xt()) : Tn()
							}()
						})), s.hookTouchEvents(ue), fe.onclick = s.checkTrusted((
						function() {
							Oi("https://krunker.io")
						})), s.hookTouchEvents(fe), pe.onclick = s.checkTrusted((
						function() {
							setTimeout((function() {
								! function() {
									var e = xe.value,
										t = prompt("party key", e);
									t && (window.onbeforeunload = void 0, window.location.href =
										"/?server=" + t)
								}()
							}), 10)
						})), s.hookTouchEvents(pe), ge.onclick = s.checkTrusted((
						function() {
							Ae.classList.contains("showing") ? (Ae.classList.remove(
								"showing"), me.innerText = "Settings") : (Ae.classList.add(
								"showing"), me.innerText = "Close")
						})), s.hookTouchEvents(ge), ye.onclick = s.checkTrusted((
						function() {
							yn(), "block" != Ye.style.display ? Ut() : Ye.style.display =
								"none"
						})), s.hookTouchEvents(ye), ke.onclick = s.checkTrusted((
						function() {
							"block" != Qe.style.display ? (Qe.style.display = "block", Ye.style
								.display = "none", an(), Gt()) : Qe.style.display = "none"
						})), s.hookTouchEvents(ke), ve.onclick = s.checkTrusted((
						function() {
							rn()
						})), s.hookTouchEvents(ve), Ne.onclick = s.checkTrusted((
						function() {
							xn()
						})), s.hookTouchEvents(Ne), function() {
						for (var e = 0; e < jn.length; ++e) {
							var t = new Image;
							t.onload = function() {
								this.isLoaded = !0
							}, t.src = ".././img/icons/" + jn[e] + ".png", Rn[jn[e]] = t
						}
					}(), Pe.style.display = "none", Me.style.display = "block", Le.value =
					E("moo_name") || "",
					function() {
						var e = E("native_resolution");
						Zt(e ? "true" == e : "undefined" != typeof cordova), A = "true" ==
							E("show_ping"), Ie.hidden = !A, E("moo_moosic"), setInterval((
								function() {
									window.cordova && (document.getElementById(
											"downloadButtonContainer").classList.add("cordova"),
										document.getElementById("mobileDownloadButtonContainer").classList
										.add("cordova"))
								}), 1e3), en(), s.removeAllChildren(Ce);
						for (var t = 0; t < l.weapons.length + l.list.length; ++t) !
							function(e) {
								s.generateElement({
									id: "actionBarItem" + e,
									class: "actionBarItem",
									style: "display:none",
									onmouseout: function() {
										Tt()
									},
									parent: Ce
								})
							}(t);
						for (t = 0; t < l.list.length + l.weapons.length; ++t) ! function(
							e) {
							var t = document.createElement("canvas");
							t.width = t.height = 66;
							var n = t.getContext("2d");
							if (n.translate(t.width / 2, t.height / 2), n.imageSmoothingEnabled = !
								1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !
								1, l.weapons[e]) {
								n.rotate(Math.PI / 4 + Math.PI);
								var i = new Image;
								Zn[l.weapons[e].src] = i, i.onload = function() {
										this.isLoaded = !0;
										var i = 1 / (this.height / this.width),
											r = l.weapons[e].iPad || 1;
										n.drawImage(this, -t.width * r * o.iconPad * i / 2, -t.height *
												r * o.iconPad / 2, t.width * r * i * o.iconPad, t.height *
												r * o.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation =
											"source-atop", n.fillRect(-t.width / 2, -t.height / 2, t.width,
												t.height), document.getElementById("actionBarItem" + e).style
											.backgroundImage = "url(" + t.toDataURL() + ")"
									}, i.src = ".././img/weapons/" + l.weapons[e].src + ".png",
									(r = document.getElementById("actionBarItem" + e)).onmouseover =
									s.checkTrusted((function() {
										Tt(l.weapons[e], !0)
									})), r.onclick = s.checkTrusted((function() {
										Sn(e, !0)
									})), s.hookTouchEvents(r)
							} else {
								i = ri(l.list[e - l.weapons.length], !0);
								var r, a = Math.min(t.width - o.iconPadding, i.width);
								n.globalAlpha = 1, n.drawImage(i, -a / 2, -a / 2, a, a), n.fillStyle =
									"rgba(0, 0, 70, 0.1)", n.globalCompositeOperation =
									"source-atop", n.fillRect(-a / 2, -a / 2, a, a), document.getElementById(
										"actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() +
									")", (r = document.getElementById("actionBarItem" + e)).onmouseover =
									s.checkTrusted((function() {
										Tt(l.list[e - l.weapons.length])
									})), r.onclick = s.checkTrusted((function() {
										Sn(e - l.weapons.length)
									})), s.hookTouchEvents(r)
							}
						}(t);
						Le.ontouchstart = s.checkTrusted((function(e) {
							e.preventDefault();
							var t = prompt("enter name", e.currentTarget.value);
							e.currentTarget.value = t.slice(0, 15)
						})), Se.checked = M, Se.onchange = s.checkTrusted((function(e) {
							Zt(e.target.checked)
						})), Te.checked = A, Te.onchange = s.checkTrusted((function(e) {
							A = Te.checked, Ie.hidden = !A, I("show_ping", A ? "true" :
								"false")
						}))
					}())
			}), {
				id: st,
				d: ft,
				1: En,
				2: vi,
				4: wi,
				33: Ti,
				5: Ln,
				6: li,
				a: gi,
				aa: pi,
				7: Wn,
				8: hi,
				sp: ui,
				9: xi,
				h: Si,
				11: Pn,
				12: Cn,
				13: Bn,
				14: bi,
				15: Dn,
				16: Un,
				17: $t,
				18: fi,
				19: di,
				20: Ci,
				ac: Ot,
				ad: _t,
				an: Bt,
				st: Rt,
				sa: jt,
				us: Nt,
				ch: hn,
				mm: Wt,
				t: Mn,
				p: Yt,
				pp: Pi
			}), pt(), setTimeout(() => gt(), 3e3)
		}), (function(e) {
			console.error("Vultr error:", e), alert("Error:\n" + e), ft(
				"disconnected")
		}))
	}
	var b, x = new g(o, s),
		S = Math.PI,
		T = 2 * S;

	function I(e, t) {
		b && localStorage.setItem(e, t)
	}

	function E(e) {
		return b ? localStorage.getItem(e) : null
	}
	Math.lerpAngle = function(e, t, n) {
		Math.abs(t - e) > S && (e > t ? t += T : e += T);
		var i = t + (e - t) * n;
		return i >= 0 && i <= T ? i : i % T
	}, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, r) {
		return n < 2 * r && (r = n / 2), i < 2 * r && (r = i / 2), r < 0 && (r = 0),
			this.beginPath(), this.moveTo(e + r, t), this.arcTo(e + n, t, e + n, t +
				i, r), this.arcTo(e + n, t + i, e, t + i, r), this.arcTo(e, t + i, e, t,
				r), this.arcTo(e, t, e + n, t, r), this.closePath(), this
	}, "undefined" != typeof Storage && (b = !0), E("consent") || (consentBlock
		.style.display = "block"), window.checkTerms = function(e) {
		e ? (consentBlock.style.display = "none", I("consent", 1)) : $(
			"#consentShake").effect("shake")
	};
	var M, A, P, B, C, O, R, j, _, U, D, L, F, z, H = E("moofoll"),
		V = 1,
		q = Date.now(),
		Y = [],
		W = [],
		X = [],
		N = [],
		G = [],
		J = new p(d, G, W, Y, nt, l, o, s),
		K = n(70),
		Q = n(71),
		Z = new K(Y, Q, W, l, null, o, s),
		ee = 1,
		te = 0,
		ne = 0,
		ie = 0,
		re = {
			id: -1,
			startX: 0,
			startY: 0,
			currentX: 0,
			currentY: 0
		},
		se = {
			id: -1,
			startX: 0,
			startY: 0,
			currentX: 0,
			currentY: 0
		},
		ae = 0,
		oe = o.maxScreenWidth,
		ce = o.maxScreenHeight,
		le = !1,
		he = (document.getElementById("ad-container"), document.getElementById(
			"mainMenu")),
		ue = document.getElementById("enterGame"),
		fe = document.getElementById("promoImg"),
		de = document.getElementById("partyButton"),
		pe = document.getElementById("joinPartyButton"),
		ge = document.getElementById("settingsButton"),
		me = ge.getElementsByTagName("span")[0],
		ye = document.getElementById("allianceButton"),
		ke = document.getElementById("storeButton"),
		ve = document.getElementById("chatButton"),
		we = document.getElementById("gameCanvas"),
		be = we.getContext("2d"),
		xe = document.getElementById("serverBrowser"),
		Se = document.getElementById("nativeResolution"),
		Te = document.getElementById("showPing"),
		Ie = (document.getElementById("playMusic"), document.getElementById(
			"pingDisplay")),
		Ee = document.getElementById("shutdownDisplay"),
		Me = document.getElementById("menuCardHolder"),
		Ae = document.getElementById("guideCard"),
		Pe = document.getElementById("loadingText"),
		Be = document.getElementById("gameUI"),
		Ce = document.getElementById("actionBar"),
		Oe = document.getElementById("scoreDisplay"),
		Re = document.getElementById("foodDisplay"),
		je = document.getElementById("woodDisplay"),
		_e = document.getElementById("stoneDisplay"),
		Ue = document.getElementById("killCounter"),
		De = document.getElementById("leaderboardData"),
		Le = document.getElementById("nameInput"),
		Fe = document.getElementById("itemInfoHolder"),
		ze = document.getElementById("ageText"),
		He = document.getElementById("ageBarBody"),
		Ve = document.getElementById("upgradeHolder"),
		qe = document.getElementById("upgradeCounter"),
		Ye = document.getElementById("allianceMenu"),
		We = document.getElementById("allianceHolder"),
		Xe = document.getElementById("allianceManager"),
		Ne = document.getElementById("mapDisplay"),
		Ge = document.getElementById("diedText"),
		Je = document.getElementById("skinColorHolder"),
		Ke = Ne.getContext("2d");
	Ne.width = 300, Ne.height = 300;
	var Qe = document.getElementById("storeMenu"),
		$e = document.getElementById("storeHolder"),
		Ze = document.getElementById("noticationDisplay"),
		et = f.hats,
		tt = f.accessories,
		nt = new h(c, N, s, o),
		it = "#525252",
		rt = "#3d3f42";

	function st(e) {
		X = e.teams
	}
	var at = document.getElementById("featuredYoutube"),
		ot = [{
			name: "Corrupt X",
			link: "https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw"
		}, {
			name: "Tweak Big",
			link: "https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw"
		}, {
			name: "Arena Closer",
			link: "https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ"
		}, {
			name: "Godenot",
			link: "https://www.youtube.com/user/SirGodenot"
		}, {
			name: "RajNoobTV",
			link: "https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q"
		}, {
			name: "TomNotTom",
			link: "https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw"
		}, {
			name: "Nation",
			link: "https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g"
		}, {
			name: "Pidyohago",
			link: "https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q"
		}, {
			name: "Enigma",
			link: "https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg"
		}, {
			name: "Bauer",
			link: "https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g"
		}, {
			name: "iStealth",
			link: "https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A"
		}, {
			name: "SICKmania",
			link: "https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g"
		}, {
			name: "LightThief",
			link: "https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ"
		}, {
			name: "Fortish",
			link: "https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q"
		}, {
			name: "巧克力",
			link: "https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg"
		}, {
			name: "i Febag",
			link: "https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg"
		}, {
			name: "GoneGaming",
			link: "https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g"
		}],
		ct = ot[s.randInt(0, ot.length - 1)];
	at.innerHTML = "<a target='_blank' class='ytLink' href='" + ct.link +
		"'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " +
		ct.name + "</a>";
	var lt = !0,
		ht = !1,
		ut = !1;

	function ft(e) {
		r.close(), dt(e)
	}

	function dt(e) {
		he.style.display = "block", Be.style.display = "none", Me.style.display =
			"none", Ge.style.display = "none", Pe.style.display = "block", Pe.innerHTML =
			e +
			"<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"
	}
	window.onblur = function() {
		lt = !1
	}, window.onfocus = function() {
		lt = !0, R && R.alive && yn()
	}, window.onload = function() {
		ht = !0, v(), setTimeout((function() {
			k || (alert("Captcha failed to load"), window.location.reload())
		}), 2e4)
	}, window.captchaCallback = function() {
		ut = !0, v()
	}, we.oncontextmenu = function() {
		return !1
	};

	function pt() {
		var e, t, n = "",
			i = 0;
		for (var r in y.servers) {
			for (var s = y.servers[r], a = 0, c = 0; c < s.length; c++)
				for (var l = 0; l < s[c].games.length; l++) a += s[c].games[l].playerCount;
			i += a;
			var h = y.regionInfo[r].name;
			n += "<option disabled>" + h + " - " + a + " players</option>";
			for (var u = 0; u < s.length; u++)
				for (var f = s[u], d = 0; d < f.games.length; d++) {
					var p = f.games[d],
						g = 1 * f.index + d + 1,
						m = y.server && y.server.region === f.region && y.server.index === f.index &&
						y.gameIndex == d,
						k = h + " " + g + " [" + Math.min(p.playerCount, o.maxPlayers) + "/" +
						o.maxPlayers + "]";
					let e = y.stripRegion(r) + ":" + u + ":" + d;
					m && (de.getElementsByTagName("span")[0].innerText = e), n +=
						"<option value='" + e + "' " + (m ? "selected" : "") + ">" + k +
						"</option>"
				}
			n += "<option disabled></option>"
		}
		n += "<option disabled>All Servers - " + i + " players</option>", xe.innerHTML =
			n, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t =
				"//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"),
			document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" +
			e +
			"<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
	}

	function gt() {
		var e = new XMLHttpRequest;
		e.onreadystatechange = function() {
			4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(
				this.responseText), y.processServers(vultr.servers), pt()) : console.error(
				"Failed to load server data with status code:", this.status))
		}, e.open("GET", "/serverData", !0), e.send()
	}
	xe.addEventListener("change", s.checkTrusted((function() {
		let e = xe.value.split(":");
		y.switchServer(e[0], e[1], e[2])
	})));
	var mt = document.getElementById("pre-content-container"),
		yt = null,
		kt = null;
	window.cpmstarAPI((function(e) {
		e.game.setTarget(mt), kt = e
	}));
	var vt = 3e5,
		wt = 0,
		bt = 0;

	function xt() {
		if (!cpmstarAPI || !kt) return console.log("Failed to load video ad API", !
			!cpmstarAPI, !!kt), void Tn();
		(yt = new kt.game.RewardedVideoView("rewardedvideo")).addEventListener(
			"ad_closed", (function(e) {
				console.log("Video ad closed"), St()
			})), yt.addEventListener("loaded", (function(e) {
			console.log("Video ad loaded"), yt.show()
		})), yt.addEventListener("load_failed", (function(e) {
			console.log("Video ad load failed", e), St()
		})), yt.load(), mt.style.display = "block"
	}

	function St() {
		mt.style.display = "none", Tn()
	}

	function Tt(e, t, n) {
		if (R && e)
			if (s.removeAllChildren(Fe), Fe.classList.add("visible"), s.generateElement({
					id: "itemInfoName",
					text: s.capitalizeFirst(e.name),
					parent: Fe
				}), s.generateElement({
					id: "itemInfoDesc",
					text: e.desc,
					parent: Fe
				}), n);
			else if (t) s.generateElement({
			class: "itemInfoReq",
			text: e.type ? "secondary" : "primary",
			parent: Fe
		});
		else {
			for (var i = 0; i < e.req.length; i += 2) s.generateElement({
				class: "itemInfoReq",
				html: e.req[i] + "<span class='itemInfoReqVal'> x" + e.req[i + 1] +
					"</span>",
				parent: Fe
			});
			e.group.limit && s.generateElement({
				class: "itemInfoLmt",
				text: (R.itemCounts[e.group.id] || 0) + "/" + e.group.limit,
				parent: Fe
			})
		} else Fe.classList.remove("visible")
	}
	window.showPreAd = xt;
	var It, Et, Mt, At = [],
		Pt = [];

	function Bt(e, t) {
		At.push({
			sid: e,
			name: t
		}), Ct()
	}

	function Ct() {
		if (At[0]) {
			var e = At[0];
			s.removeAllChildren(Ze), Ze.style.display = "block", s.generateElement({
				class: "notificationText",
				text: e.name,
				parent: Ze
			}), s.generateElement({
				class: "notifButton",
				html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
				parent: Ze,
				onclick: function() {
					Dt(0)
				},
				hookTouch: !0
			}), s.generateElement({
				class: "notifButton",
				html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
				parent: Ze,
				onclick: function() {
					Dt(1)
				},
				hookTouch: !0
			})
		} else Ze.style.display = "none"
	}

	function Ot(e) {
		X.push(e), "block" == Ye.style.display && Ut()
	}

	function Rt(e, t) {
		R && (R.team = e, R.isOwner = t, "block" == Ye.style.display && Ut())
	}

	function jt(e) {
		Pt = e, "block" == Ye.style.display && Ut()
	}

	function _t(e) {
		for (var t = X.length - 1; t >= 0; t--) X[t].sid == e && X.splice(t, 1);
		"block" == Ye.style.display && Ut()
	}

	function Ut() {
		if (R && R.alive) {
			if (an(), Qe.style.display = "none", Ye.style.display = "block", s.removeAllChildren(
					We), R.team)
				for (var e = 0; e < Pt.length; e += 2) ! function(e) {
					var t = s.generateElement({
						class: "allianceItem",
						style: "color:" + (Pt[e] == R.sid ? "#fff" : "rgba(255,255,255,0.6)"),
						text: Pt[e + 1],
						parent: We
					});
					R.isOwner && Pt[e] != R.sid && s.generateElement({
						class: "joinAlBtn",
						text: "Kick",
						onclick: function() {
							Lt(Pt[e])
						},
						hookTouch: !0,
						parent: t
					})
				}(e);
			else if (X.length)
				for (e = 0; e < X.length; ++e) ! function(e) {
					var t = s.generateElement({
						class: "allianceItem",
						style: "color:" + (X[e].sid == R.team ? "#fff" :
							"rgba(255,255,255,0.6)"),
						text: X[e].sid,
						parent: We
					});
					s.generateElement({
						class: "joinAlBtn",
						text: "Join",
						onclick: function() {
							Ft(e)
						},
						hookTouch: !0,
						parent: t
					})
				}(e);
			else s.generateElement({
				class: "allianceItem",
				text: "No Tribes Yet",
				parent: We
			});
			s.removeAllChildren(Xe), R.team ? s.generateElement({
				class: "allianceButtonM",
				style: "width: 360px",
				text: R.isOwner ? "Delete Tribe" : "Leave Tribe",
				onclick: function() {
					Ht()
				},
				hookTouch: !0,
				parent: Xe
			}) : (s.generateElement({
				tag: "input",
				type: "text",
				id: "allianceInput",
				maxLength: 7,
				placeholder: "unique name",
				ontouchstart: function(e) {
					e.preventDefault();
					var t = prompt("unique name", e.currentTarget.value);
					e.currentTarget.value = t.slice(0, 7)
				},
				parent: Xe
			}), s.generateElement({
				tag: "div",
				class: "allianceButtonM",
				style: "width: 140px;",
				text: "Create",
				onclick: function() {
					zt()
				},
				hookTouch: !0,
				parent: Xe
			}))
		}
	}

	function Dt(e) {
		r.send("11", At[0].sid, e), At.splice(0, 1), Ct();
	}

    document.onkeydown = function(e) {
        if (e.keyCode == 191) {
            alert('The key for enabling auto acceptance into the clan is pressed (enabled by default)');
        Toggle12134 = (Toggle12134 + 1) % 2;
        }
    }
    let Toggle12134 = 1;

    setInterval(() => {
        if(Toggle12134 == 1) {
            Dt(1)
        }
    },100);

    document.onkeydown = function(e) {// спам едой. НЕУБЕРАЙТЕ ЗАДЕРЖКУ!! Ну если вообще кто то это видит то это по тому что если вы уберете ее то в конце от самого клиета будет нажата q тобишь еда ))
        if (e.keyCode == 81) {
            Sn(R.items[0])
            r.send("c", 1)
            r.send("c", 0)
            Sn(R.items[0])
            r.send("c", 1)
            r.send("c", 0)
            Sn(R.items[0])
            r.send("c", 1)
            r.send("c", 0)
            Sn(R.items[0])
            r.send("c", 1)
            r.send("c", 0)
            setTimeout( () => {
            r.send("5")
            },1)

        }
    }
    //r.send("5") = прошлое "главное" оружие
    //Sn(R.items[0]) = еда
    //Sn(R.items[1]) = стена
    //Sn(R.items[2]) = спайк или же шип
    //Sn(R.items[3]) = мельница
    //Sn(R.items[4]) = трапка или же буст(если этого предмета нету то ты береш примари или секондари оружие
    //Sn(R.items[5]) = тут мои полномочия уже все, окончены
    var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };


    }

	function Lt(e) {
		r.send("12", e)
	}

	function Ft(e) {
		r.send("10", X[e].sid)
	}
	function zt() {
		r.send("8", document.getElementById("allianceInput").value)
	}

	function Ht() {
		At = [], Ct(), r.send("9")
	}
	var Vt, qt = [];

	function Yt(e, t) {
		for (var n = 0; n < qt.length; ++n)
			if (!qt[n].active) {
				Vt = qt[n];
				break
			}
		Vt || (Vt = new function() {
			this.init = function(e, t) {
				this.scale = 0, this.x = e, this.y = t, this.active = !0
			}, this.update = function(e, t) {
				this.active && (this.scale += .05 * t, this.scale >= o.mapPingScale ?
					this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / o.mapPingScale),
						e.beginPath(), e.arc(this.x / o.mapScale * Ne.width, this.y / o.mapScale *
							Ne.width, this.scale, 0, 2 * Math.PI), e.stroke()))
			}
		}, qt.push(Vt)), Vt.init(e, t)
	}

	function Wt(e) {
		Et = e
	}
	var Xt = 0;

	function Nt(e, t, n) {
		n ? e ? R.tailIndex = t : R.tails[t] = 1 : e ? R.skinIndex = t : R.skins[t] =
			1, "block" == Qe.style.display && Gt()
	}

	function Gt() {
		if (R) {
			s.removeAllChildren($e);
			for (var e = Xt, t = e ? tt : et, n = 0; n < t.length; ++n) t[n].dontSell ||
				function(n) {
					var i = s.generateElement({
						id: "storeDisplay" + n,
						class: "storeItem",
						onmouseout: function() {
							Tt()
						},
						onmouseover: function() {
							Tt(t[n], !1, !0)
						},
						parent: $e
					});
					s.hookTouchEvents(i, !0), s.generateElement({
							tag: "img",
							class: "hatPreview",
							src: "../img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id +
								(t[n].topSprite ? "_p" : "") + ".png",
							parent: i
						}), s.generateElement({
							tag: "span",
							text: t[n].name,
							parent: i
						}), (e ? R.tails[t[n].id] : R.skins[t[n].id]) ? (e ? R.tailIndex : R.skinIndex) ==
						t[n].id ? s.generateElement({
							class: "joinAlBtn",
							style: "margin-top: 5px",
							text: "Unequip",
							onclick: function() {
								Jt(0, e)
							},
							hookTouch: !0,
							parent: i
						}) : s.generateElement({
							class: "joinAlBtn",
							style: "margin-top: 5px",
							text: "Equip",
							onclick: function() {
								Jt(t[n].id, e)
							},
							hookTouch: !0,
							parent: i
						}) : (s.generateElement({
							class: "joinAlBtn",
							style: "margin-top: 5px",
							text: "Buy",
							onclick: function() {
								Kt(t[n].id, e)
							},
							hookTouch: !0,
							parent: i
						}), s.generateElement({
							tag: "span",
							class: "itemPrice",
							text: t[n].price,
							parent: i
						}))
				}(n)
		}
	}

	function Jt(e, t) {
		r.send("13c", 0, e, t)
	}

	function Kt(e, t) {
		r.send("13c", 1, e, t)
	}

	function Qt() {
		Qe.style.display = "none", Ye.style.display = "none", an()
	}

	function $t(e, t) {
		e && (t ? R.weapons = e : R.items = e);
		for (var n = 0; n < l.list.length; ++n) {
			var i = l.weapons.length + n;
			document.getElementById("actionBarItem" + i).style.display = R.items.indexOf(
				l.list[n].id) >= 0 ? "inline-block" : "none"
		}
		for (n = 0; n < l.weapons.length; ++n) document.getElementById(
			"actionBarItem" + n).style.display = R.weapons[l.weapons[n].type] == l.weapons[
			n].id ? "inline-block" : "none"
	}

	function Zt(e) {
		M = e, V = e && window.devicePixelRatio || 1, Se.checked = e, I(
			"native_resolution", e.toString()), un()
	}

	function en() {
		for (var e = "", t = 0; t < o.skinColors.length; ++t) e += t == ae ?
			"<div class='skinColorItem activeSkin' style='background-color:" + o.skinColors[
				t] + "' onclick='selectSkinColor(" + t + ")'></div>" :
			"<div class='skinColorItem' style='background-color:" + o.skinColors[t] +
			"' onclick='selectSkinColor(" + t + ")'></div>";
		Je.innerHTML = e
	}
	var tn = document.getElementById("chatBox"),
		nn = document.getElementById("chatHolder");

	function rn() {
		on ? setTimeout((function() {
				var e = prompt("chat message");
				e && sn(e)
			}), 1) : "block" == nn.style.display ? (tn.value && sn(tn.value), an()) :
			(Qe.style.display = "none", Ye.style.display = "none", nn.style.display =
				"block", tn.focus(), yn()), tn.value = ""
	}

	function sn(e) {
		r.send("ch", e.slice(0, 30))
	}

	function an() {
		tn.value = "", nn.style.display = "none"
	}
	var on, cn, ln = ["cunt", "whore", "fuck", "shit", "faggot", "nigger",
		"nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits",
		"penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche",
		"wanker", "damn", "bitch", "dick", "fag", "bastard"
	];

	function hn(e, t) {
		var n = Ii(e);
		n && (n.chatMessage = function(e) {
			for (var t, n = 0; n < ln.length; ++n)
				if (e.indexOf(ln[n]) > -1) {
					t = "";
					for (var i = 0; i < ln[n].length; ++i) t += t.length ? "o" : "M";
					var r = new RegExp(ln[n], "g");
					e = e.replace(r, t)
				}
			return e
		}(t), n.chatCountdown = o.chatCountdown)
	}

	function un() {
		F = window.innerWidth, z = window.innerHeight;
		var e = Math.max(F / oe, z / ce) * V;
		we.width = F * V, we.height = z * V, we.style.width = F + "px", we.style.height =
			z + "px", be.setTransform(e, 0, 0, e, (F * V - oe * e) / 2, (z * V - ce *
				e) / 2)
	}

	function fn(e) {
		(on = e) ? Ae.classList.add("touch"): Ae.classList.remove("touch")
	}

	function dn(e) {
		e.preventDefault(), e.stopPropagation(), fn(!0);
		for (var t = 0; t < e.changedTouches.length; t++) {
			var n = e.changedTouches[t];
			n.identifier == re.id ? (re.id = -1, bn()) : n.identifier == se.id && (se.id = -
				1, R.buildIndex >= 0 && (O = 1, vn()), O = 0, vn())
		}
	}

	function pn() {
		return R ? (-1 != se.id ? cn = Math.atan2(se.currentY - se.startY, se.currentX -
				se.startX) : R.lockDir || on || (cn = Math.atan2(ie - z / 2, ne - F / 2)),
			s.fixTo(cn || 0, 2)) : 0
	}
	window.addEventListener("resize", s.checkTrusted(un)), un(), fn(!1), window.setUsingTouch =
		fn, we.addEventListener("touchmove", s.checkTrusted((function(e) {
			e.preventDefault(), e.stopPropagation(), fn(!0);
			for (var t = 0; t < e.changedTouches.length; t++) {
				var n = e.changedTouches[t];
				n.identifier == re.id ? (re.currentX = n.pageX, re.currentY = n.pageY,
					bn()) : n.identifier == se.id && (se.currentX = n.pageX, se.currentY =
					n.pageY, O = 1)
			}
		})), !1), we.addEventListener("touchstart", s.checkTrusted((function(e) {
			e.preventDefault(), e.stopPropagation(), fn(!0);
			for (var t = 0; t < e.changedTouches.length; t++) {
				var n = e.changedTouches[t];
				n.pageX < document.body.scrollWidth / 2 && -1 == re.id ? (re.id = n.identifier,
					re.startX = re.currentX = n.pageX, re.startY = re.currentY = n.pageY,
					bn()) : n.pageX > document.body.scrollWidth / 2 && -1 == se.id && (
					se.id = n.identifier, se.startX = se.currentX = n.pageX, se.startY =
					se.currentY = n.pageY, R.buildIndex < 0 && (O = 1, vn()))
			}
		})), !1), we.addEventListener("touchend", s.checkTrusted(dn), !1), we.addEventListener(
			"touchcancel", s.checkTrusted(dn), !1), we.addEventListener("touchleave",
			s.checkTrusted(dn), !1), we.addEventListener("mousemove", (function(e) {
			e.preventDefault(), e.stopPropagation(), fn(!1), ne = e.clientX, ie = e.clientY
		}), !1), we.addEventListener("mousedown", (function(e) {
			fn(!1), 1 != O && (O = 1, vn())
		}), !1), we.addEventListener("mouseup", (function(e) {
			fn(!1), 0 != O && (O = 0, vn())
		}), !1);
	var gn = {},
		mn = {
			87: [0, -1],
			38: [0, -1],
			83: [0, 1],
			40: [0, 1],
			65: [-1, 0],
			37: [-1, 0],
			68: [1, 0],
			39: [1, 0]
		};

	function yn() {
		gn = {}, r.send("rmd")
	}

	function kn() {
		return "block" != Ye.style.display && "block" != nn.style.display
	}

	function vn() {
		R && R.alive && r.send("c", O, R.buildIndex >= 0 ? pn() : null)
	}
	window.addEventListener("keydown", s.checkTrusted((function(e) {
		var t = e.which || e.keyCode || 0;
		27 == t ? Qt() : R && R.alive && kn() && (gn[t] || (gn[t] = 1, 69 == t ?
			r.send("7", 1) : 67 == t ? (Mt || (Mt = {}), Mt.x = R.x, Mt.y = R.y) :
			88 == t ? (R.lockDir = R.lockDir ? 0 : 1, r.send("7", 0)) : null !=
			R.weapons[t - 49] ? Sn(R.weapons[t - 49], !0) : null != R.items[t -
				49 - R.weapons.length] ? Sn(R.items[t - 49 - R.weapons.length]) :
			81 == t ? Sn(R.items[0]) : 82 == t ? xn() : mn[t] ? bn() : 32 == t &&
			(O = 1, vn())))
	}))), window.addEventListener("keyup", s.checkTrusted((function(e) {
		if (R && R.alive) {
			var t = e.which || e.keyCode || 0;
			13 == t ? rn() : kn() && gn[t] && (gn[t] = 0, mn[t] ? bn() : 32 == t &&
				(O = 0, vn()))
		}
	})));
	var wn = void 0;

	function bn() {
		var e = function() {
			var e = 0,
				t = 0;
			if (-1 != re.id) e += re.currentX - re.startX, t += re.currentY - re.startY;
			else
				for (var n in mn) {
					var i = mn[n];
					e += !!gn[n] * i[0], t += !!gn[n] * i[1]
				}
			return 0 == e && 0 == t ? void 0 : s.fixTo(Math.atan2(t, e), 2)
		}();
		(null == wn || null == e || Math.abs(e - wn) > .3) && (r.send("33", e), wn =
			e)
	}

	function xn() {
		r.send("14", 1)
	}

	function Sn(e, t) {
		r.send("5", e, t)
	}

	function Tn() {
		I("moo_name", Le.value), !le && r.connected && (le = !0, x.stop("menu"), dt(
			"Loading..."), r.send("sp", {
			name: Le.value,
			moofoll: H,
			skin: ae
		}))
	}
	var In = !0;

	function En(e) {
		Pe.style.display = "none", Me.style.display = "block", he.style.display =
			"none", gn = {}, j = e, O = 0, le = !0, In && (In = !1, N.length = 0)
	}

	function Mn(e, t, n, i) {
		m.showText(e, t, 50, .18, 500, Math.abs(n), n >= 0 ? "#fff" : "#8ecc51")
	}
	var An = 99999;

	function Pn() {
		le = !1;
		try {
			factorem.refreshAds([2], !0)
		} catch (e) {}
		Be.style.display = "none", Qt(), It = {
				x: R.x,
				y: R.y
			}, Pe.style.display = "none", Ge.style.display = "block", Ge.style.fontSize =
			"0px", An = 0, setTimeout((function() {
				Me.style.display = "block", he.style.display = "block", Ge.style.display =
					"none"
			}), o.deathFadeout), gt()
	}

	function Bn(e) {
		R && nt.removeAllItems(e)
	}

	function Cn(e) {
		nt.disableBySid(e)
	}

	function On() {
		Oe.innerText = R.points, Re.innerText = R.food, je.innerText = R.wood, _e.innerText =
			R.stone, Ue.innerText = R.kills
	}
	var Rn = {},
		jn = ["crown", "skull"],
		_n = [];

	function Un(e, t) {
		if (R.upgradePoints = e, R.upgrAge = t, e > 0) {
			_n.length = 0, s.removeAllChildren(Ve);
			for (var n = 0; n < l.weapons.length; ++n) l.weapons[n].age == t && (null ==
				l.weapons[n].pre || R.weapons.indexOf(l.weapons[n].pre) >= 0) && (s.generateElement({
					id: "upgradeItem" + n,
					class: "actionBarItem",
					onmouseout: function() {
						Tt()
					},
					parent: Ve
				}).style.backgroundImage = document.getElementById("actionBarItem" + n).style
				.backgroundImage, _n.push(n));
			for (n = 0; n < l.list.length; ++n)
				if (l.list[n].age == t && (null == l.list[n].pre || R.items.indexOf(l.list[
						n].pre) >= 0)) {
					var i = l.weapons.length + n;
					s.generateElement({
							id: "upgradeItem" + i,
							class: "actionBarItem",
							onmouseout: function() {
								Tt()
							},
							parent: Ve
						}).style.backgroundImage = document.getElementById("actionBarItem" + i)
						.style.backgroundImage, _n.push(i)
				}
			for (n = 0; n < _n.length; n++) ! function(e) {
				var t = document.getElementById("upgradeItem" + e);
				t.onmouseover = function() {
					l.weapons[e] ? Tt(l.weapons[e], !0) : Tt(l.list[e - l.weapons.length])
				}, t.onclick = s.checkTrusted((function() {
					r.send("6", e)
				})), s.hookTouchEvents(t)
			}(_n[n]);
			_n.length ? (Ve.style.display = "block", qe.style.display = "block", qe.innerHTML =
				"SELECT ITEMS (" + e + ")") : (Ve.style.display = "none", qe.style.display =
				"none", Tt())
		} else Ve.style.display = "none", qe.style.display = "none", Tt()
	}

	function Dn(e, t, n) {
		null != e && (R.XP = e), null != t && (R.maxXP = t), null != n && (R.age =
				n), n == o.maxAge ? (ze.innerHTML = "MAX AGE", He.style.width = "100%") :
			(ze.innerHTML = "AGE " + R.age, He.style.width = R.XP / R.maxXP * 100 +
				"%")
	}

	function Ln(e) {
		s.removeAllChildren(De);
		for (var t = 1, n = 0; n < e.length; n += 3) ! function(n) {
			s.generateElement({
				class: "leaderHolder",
				parent: De,
				children: [s.generateElement({
					class: "leaderboardItem",
					style: "color:" + (e[n] == j ? "#fff" : "rgba(255,255,255,0.6)"),
					text: t + ". " + ("" != e[n + 1] ? e[n + 1] : "unknown")
				}), s.generateElement({
					class: "leaderScore",
					text: s.kFormat(e[n + 2]) || "0"
				})]
			})
		}(n), t++
	}

	function Fn(e, t, n, i) {
		be.save(), be.setTransform(1, 0, 0, 1, 0, 0), be.scale(V, V);
		var r = 50;
		be.beginPath(), be.arc(e, t, r, 0, 2 * Math.PI, !1), be.closePath(), be.fillStyle =
			"rgba(255, 255, 255, 0.3)", be.fill(), r = 50;
		var s = n - e,
			a = i - t,
			o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2)),
			c = o > r ? o / r : 1;
		s /= c, a /= c, be.beginPath(), be.arc(e + s, t + a, .5 * r, 0, 2 * Math.PI, !
			1), be.closePath(), be.fillStyle = "white", be.fill(), be.restore()
	}

	function zn(e, t, n) {
		for (var i = 0; i < G.length; ++i)(_ = G[i]).active && _.layer == e && (_.update(
			P), _.active && ki(_.x - t, _.y - n, _.scale) && (be.save(), be.translate(
			_.x - t, _.y - n), be.rotate(_.dir), Vn(0, 0, _, be, 1), be.restore()))
	}
	var Hn = {};

	function Vn(e, t, n, i, r) {
		if (n.src) {
			var s = l.projectiles[n.indx].src,
				a = Hn[s];
			a || ((a = new Image).onload = function() {
				this.isLoaded = !0
			}, a.src = ".././img/weapons/" + s + ".png", Hn[s] = a), a.isLoaded && i.drawImage(
				a, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
		} else 1 == n.indx && (i.fillStyle = "#939393", si(e, t, n.scale, i))
	}

	function qn(e, t, n, i) {
		var r = o.riverWidth + i,
			s = o.mapScale / 2 - t - r / 2;
		s < ce && s + r > 0 && n.fillRect(0, s, oe, r)
	}

	function Yn(e, t, n) {
		for (var i, r, s, a = 0; a < N.length; ++a)(_ = N[a]).active && (r = _.x +
			_.xWiggle - t, s = _.y + _.yWiggle - n, 0 == e && _.update(P), _.layer ==
			e && ki(r, s, _.scale + (_.blocker || 0)) && (be.globalAlpha = _.hideFromEnemy ?
				.6 : 1, _.isItem ? (i = ri(_), be.save(), be.translate(r, s), be.rotate(
					_.dir), be.drawImage(i, -i.width / 2, -i.height / 2), _.blocker && (be
					.strokeStyle = "#db6e6e", be.globalAlpha = .3, be.lineWidth = 6, si(0,
						0, _.blocker, be, !1, !0)), be.restore()) : (i = ni(_), be.drawImage(i,
					r - i.width / 2, s - i.height / 2))))
	}

	function Wn(e, t, n) {
		(_ = Ii(e)) && _.startAnim(t, n)
	}

	function Xn(e, t, n) {
		be.globalAlpha = 1;
		for (var i = 0; i < W.length; ++i)(_ = W[i]).zIndex == n && (_.animate(P),
			_.visible && (_.skinRot += .002 * P, L = (_ == R ? pn() : _.dir) + _.dirPlus,
				be.save(), be.translate(_.x - e, _.y - t), be.rotate(L), Nn(_, be), be.restore()
			))
	}

	function Nn(e, t) {
		(t = t || be).lineWidth = 5.5, t.lineJoin = "miter";
		var n = Math.PI / 4 * (l.weapons[e.weaponIndex].armS || 1),
			i = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndS || 1,
			r = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndD || 1;
		if (e.tailIndex > 0 && function(e, t, n) {
				if (!(Gn = Qn[e])) {
					var i = new Image;
					i.onload = function() {
							this.isLoaded = !0, this.onload = null
						}, i.src = ".././img/accessories/access_" + e + ".png", Qn[e] = i, Gn =
						i
				}
				var r = $n[e];
				if (!r) {
					for (var s = 0; s < tt.length; ++s)
						if (tt[s].id == e) {
							r = tt[s];
							break
						}
					$n[e] = r
				}
				Gn.isLoaded && (t.save(), t.translate(-20 - (r.xOff || 0), 0), r.spin &&
					t.rotate(n.skinRot), t.drawImage(Gn, -r.scale / 2, -r.scale / 2, r.scale,
						r.scale), t.restore())
			}(e.tailIndex, t, e), e.buildIndex < 0 && !l.weapons[e.weaponIndex].aboveHand &&
			(ei(l.weapons[e.weaponIndex], o.weaponVariants[e.weaponVariant].src, e.scale,
					0, t), null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex]
				.hideProjectile || Vn(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile],
					be)), t.fillStyle = o.skinColors[e.skinColor], si(e.scale * Math.cos(n),
				e.scale * Math.sin(n), 14), si(e.scale * r * Math.cos(-n * i), e.scale *
				r * Math.sin(-n * i), 14), e.buildIndex < 0 && l.weapons[e.weaponIndex].aboveHand &&
			(ei(l.weapons[e.weaponIndex], o.weaponVariants[e.weaponVariant].src, e.scale,
					0, t), null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex]
				.hideProjectile || Vn(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile],
					be)), e.buildIndex >= 0) {
			var s = ri(l.list[e.buildIndex]);
			t.drawImage(s, e.scale - l.list[e.buildIndex].holdOffset, -s.width / 2)
		}
		si(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function e(
			t, n, i, r) {
			if (!(Gn = Jn[t])) {
				var s = new Image;
				s.onload = function() {
					this.isLoaded = !0, this.onload = null
				}, s.src = ".././img/hats/hat_" + t + ".png", Jn[t] = s, Gn = s
			}
			var a = i || Kn[t];
			if (!a) {
				for (var o = 0; o < et.length; ++o)
					if (et[o].id == t) {
						a = et[o];
						break
					}
				Kn[t] = a
			}
			Gn.isLoaded && n.drawImage(Gn, -a.scale / 2, -a.scale / 2, a.scale, a.scale), !
				i && a.topSprite && (n.save(), n.rotate(r.skinRot), e(t + "_top", n, a,
					r), n.restore())
		}(e.skinIndex, t, null, e))
	}
	var Gn, Jn = {},
		Kn = {},
		Qn = {},
		$n = {},
		Zn = {};

	function ei(e, t, n, i, r) {
		var s = e.src + (t || ""),
			a = Zn[s];
		a || ((a = new Image).onload = function() {
			this.isLoaded = !0
		}, a.src = ".././img/weapons/" + s + ".png", Zn[s] = a), a.isLoaded && r.drawImage(
			a, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width
		)
	}
	var ti = {};

	function ni(e) {
		var t = e.y >= o.mapScale - o.snowBiomeTop ? 2 : e.y <= o.snowBiomeTop ? 1 :
			0,
			n = e.type + "_" + e.scale + "_" + t,
			i = ti[n];
		if (!i) {
			var r = document.createElement("canvas");
			r.width = r.height = 2.1 * e.scale + 5.5;
			var a = r.getContext("2d");
			if (a.translate(r.width / 2, r.height / 2), a.rotate(s.randFloat(0, Math.PI)),
				a.strokeStyle = it, a.lineWidth = 5.5, 0 == e.type)
				for (var c, l = 0; l < 2; ++l) ai(a, 7, c = _.scale * (l ? .5 : 1), .7 *
						c), a.fillStyle = t ? l ? "#fff" : "#e3f1f4" : l ? "#b4db62" :
					"#9ebf57", a.fill(), l || a.stroke();
			else if (1 == e.type)
				if (2 == t) a.fillStyle = "#606060", ai(a, 6, .3 * e.scale, .71 * e.scale),
					a.fill(), a.stroke(), a.fillStyle = "#89a54c", si(0, 0, .55 * e.scale, a),
					a.fillStyle = "#a5c65b", si(0, 0, .3 * e.scale, a, !0);
				else {
					var h;
					! function(e, t, n, i) {
						var r, a = Math.PI / 2 * 3,
							o = Math.PI / 6;
						e.beginPath(), e.moveTo(0, -i);
						for (var c = 0; c < 6; c++) r = s.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(
							Math.cos(a + o) * r, Math.sin(a + o) * r, Math.cos(a + 2 * o) * i,
							Math.sin(a + 2 * o) * i), a += 2 * o;
						e.lineTo(0, -i), e.closePath()
					}(a, 0, _.scale, .7 * _.scale), a.fillStyle = t ? "#e3f1f4" : "#89a54c",
						a.fill(), a.stroke(), a.fillStyle = t ? "#6a64af" : "#c15555";
					var u = T / 4;
					for (l = 0; l < 4; ++l) si((h = s.randInt(_.scale / 3.5, _.scale / 2.3)) *
						Math.cos(u * l), h * Math.sin(u * l), s.randInt(10, 12), a)
				}
			else 2 != e.type && 3 != e.type || (a.fillStyle = 2 == e.type ? 2 == t ?
				"#938d77" : "#939393" : "#e0c655", ai(a, 3, e.scale, e.scale), a.fill(),
				a.stroke(), a.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" :
				"#ebdca3", ai(a, 3, .55 * e.scale, .65 * e.scale), a.fill());
			i = r, ti[n] = i
		}
		return i
	}
	var ii = [];

	function ri(e, t) {
		var n = ii[e.id];
		if (!n || t) {
			var i = document.createElement("canvas");
			i.width = i.height = 2.5 * e.scale + 5.5 + (l.list[e.id].spritePadding ||
				0);
			var r = i.getContext("2d");
			if (r.translate(i.width / 2, i.height / 2), r.rotate(t ? 0 : Math.PI / 2),
				r.strokeStyle = it, r.lineWidth = 5.5 * (t ? i.width / 81 : 1), "apple" ==
				e.name) {
				r.fillStyle = "#c15555", si(0, 0, e.scale, r), r.fillStyle = "#89a54c";
				var a = -Math.PI / 2;
				! function(e, t, n, i, r) {
					var s = e + 25 * Math.cos(i),
						a = t + 25 * Math.sin(i);
					r.moveTo(e, t), r.beginPath(), r.quadraticCurveTo((e + s) / 2 + 10 *
							Math.cos(i + Math.PI / 2), (t + a) / 2 + 10 * Math.sin(i + Math.PI / 2),
							s, a), r.quadraticCurveTo((e + s) / 2 - 10 * Math.cos(i + Math.PI / 2),
							(t + a) / 2 - 10 * Math.sin(i + Math.PI / 2), e, t), r.closePath(), r.fill(),
						r.stroke()
				}(e.scale * Math.cos(a), e.scale * Math.sin(a), 0, a + Math.PI / 2, r)
			} else if ("cookie" == e.name) {
				r.fillStyle = "#cca861", si(0, 0, e.scale, r), r.fillStyle = "#937c4b";
				for (var o = T / (h = 4), c = 0; c < h; ++c) si((u = s.randInt(e.scale /
					2.5, e.scale / 1.7)) * Math.cos(o * c), u * Math.sin(o * c), s.randInt(
					4, 5), r, !0)
			} else if ("cheese" == e.name) {
				var h, u;
				for (r.fillStyle = "#f4f3ac", si(0, 0, e.scale, r), r.fillStyle =
					"#c3c28b", o = T / (h = 4), c = 0; c < h; ++c) si((u = s.randInt(e.scale /
					2.5, e.scale / 1.7)) * Math.cos(o * c), u * Math.sin(o * c), s.randInt(
					4, 5), r, !0)
			} else if ("wood wall" == e.name || "stone wall" == e.name ||
				"castle wall" == e.name) {
				r.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ?
					"#a5974c" : "#939393";
				var f = "castle wall" == e.name ? 4 : 3;
				ai(r, f, 1.1 * e.scale, 1.1 * e.scale), r.fill(), r.stroke(), r.fillStyle =
					"castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" :
					"#bcbcbc", ai(r, f, .65 * e.scale, .65 * e.scale), r.fill()
			} else if ("spikes" == e.name || "greater spikes" == e.name ||
				"poison spikes" == e.name || "spinning spikes" == e.name) {
				r.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
				var d = .6 * e.scale;
				ai(r, "spikes" == e.name ? 5 : 6, e.scale, d), r.fill(), r.stroke(), r.fillStyle =
					"#a5974c", si(0, 0, d, r), r.fillStyle = "#c9b758", si(0, 0, d / 2, r, !
						0)
			} else if ("windmill" == e.name || "faster windmill" == e.name ||
				"power mill" == e.name) r.fillStyle = "#a5974c", si(0, 0, e.scale, r), r.fillStyle =
				"#c9b758", ci(0, 0, 1.5 * e.scale, 29, 4, r), r.fillStyle = "#a5974c", si(
					0, 0, .5 * e.scale, r);
			else if ("mine" == e.name) r.fillStyle = "#939393", ai(r, 3, e.scale, e.scale),
				r.fill(), r.stroke(), r.fillStyle = "#bcbcbc", ai(r, 3, .55 * e.scale,
					.65 * e.scale), r.fill();
			else if ("sapling" == e.name)
				for (c = 0; c < 2; ++c) ai(r, 7, d = e.scale * (c ? .5 : 1), .7 * d), r.fillStyle =
					c ? "#b4db62" : "#9ebf57", r.fill(), c || r.stroke();
			else if ("pit trap" == e.name) r.fillStyle = "#a5974c", ai(r, 3, 1.1 * e.scale,
				1.1 * e.scale), r.fill(), r.stroke(), r.fillStyle = it, ai(r, 3, .65 * e
				.scale, .65 * e.scale), r.fill();
			else if ("boost pad" == e.name) r.fillStyle = "#7e7f82", oi(0, 0, 2 * e.scale,
					2 * e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#dbd97d",
				function(e, t) {
					t = t || be;
					var n = e * (Math.sqrt(3) / 2);
					t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e /
						2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
				}(1 * e.scale, r);
			else if ("turret" == e.name) r.fillStyle = "#a5974c", si(0, 0, e.scale, r),
				r.fill(), r.stroke(), r.fillStyle = "#939393", oi(0, -25, .9 * e.scale,
					50, r), si(0, 0, .6 * e.scale, r), r.fill(), r.stroke();
			else if ("platform" == e.name) {
				r.fillStyle = "#cebd5f";
				var p = 2 * e.scale,
					g = p / 4,
					m = -e.scale / 2;
				for (c = 0; c < 4; ++c) oi(m - g / 2, 0, g, 2 * e.scale, r), r.fill(), r.stroke(),
					m += p / 4
			} else "healing pad" == e.name ? (r.fillStyle = "#7e7f82", oi(0, 0, 2 * e.scale,
					2 * e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#db6e6e", ci(0, 0,
					.65 * e.scale, 20, 4, r, !0)) : "spawn pad" == e.name ? (r.fillStyle =
					"#7e7f82", oi(0, 0, 2 * e.scale, 2 * e.scale, r), r.fill(), r.stroke(),
					r.fillStyle = "#71aad6", si(0, 0, .6 * e.scale, r)) : "blocker" == e.name ?
				(r.fillStyle = "#7e7f82", si(0, 0, e.scale, r), r.fill(), r.stroke(), r.rotate(
					Math.PI / 4), r.fillStyle = "#db6e6e", ci(0, 0, .65 * e.scale, 20, 4, r, !
					0)) : "teleporter" == e.name && (r.fillStyle = "#7e7f82", si(0, 0, e.scale,
						r), r.fill(), r.stroke(), r.rotate(Math.PI / 4), r.fillStyle =
					"#d76edb", si(0, 0, .5 * e.scale, r, !0));
			n = i, t || (ii[e.id] = n)
		}
		return n
	}

	function si(e, t, n, i, r, s) {
		(i = i || be).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), s || i.fill(), r ||
			i.stroke()
	}

	function ai(e, t, n, i) {
		var r, s, a = Math.PI / 2 * 3,
			o = Math.PI / t;
		e.beginPath(), e.moveTo(0, -n);
		for (var c = 0; c < t; c++) r = Math.cos(a) * n, s = Math.sin(a) * n, e.lineTo(
				r, s), a += o, r = Math.cos(a) * i, s = Math.sin(a) * i, e.lineTo(r, s),
			a += o;
		e.lineTo(0, -n), e.closePath()
	}

	function oi(e, t, n, i, r, s) {
		r.fillRect(e - n / 2, t - i / 2, n, i), s || r.strokeRect(e - n / 2, t - i /
			2, n, i)
	}

	function ci(e, t, n, i, r, s, a) {
		s.save(), s.translate(e, t), r = Math.ceil(r / 2);
		for (var o = 0; o < r; o++) oi(0, 0, 2 * n, i, s, a), s.rotate(Math.PI / r);
		s.restore()
	}

	function li(e) {
		for (var t = 0; t < e.length;) nt.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[
			t + 4], e[t + 5], l.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
			sid: e[t + 7]
		} : null), t += 8
	}

	function hi(e, t) {
		(_ = Mi(t)) && (_.xWiggle += o.gatherWiggle * Math.cos(e), _.yWiggle += o.gatherWiggle *
			Math.sin(e))
	}

	function ui(e, t) {
		(_ = Mi(e)) && (_.dir = t, _.xWiggle += o.gatherWiggle * Math.cos(t + Math.PI),
			_.yWiggle += o.gatherWiggle * Math.sin(t + Math.PI))
	}

	function fi(e, t, n, i, r, s, a, o) {
		lt && (J.addProjectile(e, t, n, i, r, s, null, null, a).sid = o)
	}

	function di(e, t) {
		for (var n = 0; n < G.length; ++n) G[n].sid == e && (G[n].range = t)
	}

	function pi(e) {
		(_ = Ei(e)) && _.startAnim()
	}

	function gi(e) {
		for (var t = 0; t < Y.length; ++t) Y[t].forcePos = !Y[t].visible, Y[t].visible = !
			1;
		if (e) {
			var n = Date.now();
			for (t = 0; t < e.length;)(_ = Ei(e[t])) ? (_.index = e[t + 1], _.t1 =
				void 0 === _.t2 ? n : _.t2, _.t2 = n, _.x1 = _.x, _.y1 = _.y, _.x2 = e[t +
					2], _.y2 = e[t + 3], _.d1 = void 0 === _.d2 ? e[t + 4] : _.d2, _.d2 = e[
					t + 4], _.health = e[t + 5], _.dt = 0, _.visible = !0) : ((_ = Z.spawn(
					e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = _.x, _.y2 = _.y, _.d2 = _
				.dir, _.health = e[t + 5], Z.aiTypes[e[t + 1]].name || (_.name = o.cowNames[
					e[t + 6]]), _.forcePos = !0, _.sid = e[t], _.visible = !0), t += 7
		}
	}
	var mi = {};

	function yi(e, t) {
		var n = e.index,
			i = mi[n];
		if (!i) {
			var r = new Image;
			r.onload = function() {
				this.isLoaded = !0, this.onload = null
			}, r.src = ".././img/animals/" + e.src + ".png", i = r, mi[n] = i
		}
		if (i.isLoaded) {
			var s = 1.2 * e.scale * (e.spriteMlt || 1);
			t.drawImage(i, -s, -s, 2 * s, 2 * s)
		}
	}

	function ki(e, t, n) {
		return e + n >= 0 && e - n <= oe && t + n >= 0 && t - n <= ce
	}

	function vi(e, t) {
		var n = function(e) {
			for (var t = 0; t < W.length; ++t)
				if (W[t].id == e) return W[t];
			return null
		}(e[0]);
		n || (n = new u(e[0], e[1], o, s, J, nt, W, Y, l, et, tt), W.push(n)), n.spawn(
				t ? H : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e),
			t && (U = (R = n).x, D = R.y, $t(), On(), Dn(), Un(0), Be.style.display =
				"block")
	}

	function wi(e) {
		for (var t = 0; t < W.length; t++)
			if (W[t].id == e) {
				W.splice(t, 1);
				break
			}
	}

	function bi(e, t) {
		R && (R.itemCounts[e] = t)
	}

	function xi(e, t, n) {
		R && (R[e] = t, n && On())
	}

	function Si(e, t) {
		(_ = Ii(e)) && (_.health = t)
	}

	function Ti(e) {
		for (var t = Date.now(), n = 0; n < W.length; ++n) W[n].forcePos = !W[n].visible,
			W[n].visible = !1;
		for (n = 0; n < e.length;)(_ = Ii(e[n])) && (_.t1 = void 0 === _.t2 ? t : _
				.t2, _.t2 = t, _.x1 = _.x, _.y1 = _.y, _.x2 = e[n + 1], _.y2 = e[n + 2],
				_.d1 = void 0 === _.d2 ? e[n + 3] : _.d2, _.d2 = e[n + 3], _.dt = 0, _.buildIndex =
				e[n + 4], _.weaponIndex = e[n + 5], _.weaponVariant = e[n + 6], _.team =
				e[n + 7], _.isLeader = e[n + 8], _.skinIndex = e[n + 9], _.tailIndex = e[
					n + 10], _.iconIndex = e[n + 11], _.zIndex = e[n + 12], _.visible = !0),
			n += 13
	}

	function Ii(e) {
		for (var t = 0; t < W.length; ++t)
			if (W[t].sid == e) return W[t];
		return null
	}

	function Ei(e) {
		for (var t = 0; t < Y.length; ++t)
			if (Y[t].sid == e) return Y[t];
		return null
	}

	function Mi(e) {
		for (var t = 0; t < N.length; ++t)
			if (N[t].sid == e) return N[t];
		return null
	}
	var Ai = -1;

	function Pi() {
		var e = Date.now() - Ai;
		window.pingTime = e, Ie.innerText = "Ping: " + e + " ms"
	}

	function Bi() {
		Ai = Date.now(), r.send("pp")
	}

	function Ci(e) {
		if (!(e < 0)) {
			var t = Math.floor(e / 60),
				n = e % 60;
			n = ("0" + n).slice(-2), Ee.innerText = "Server restarting in " + t + ":" +
				n, Ee.hidden = !1
		}
	}

	function Oi(e) {
		window.open(e, "_blank")
	}
	window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame || function(e) {
			window.setTimeout(e, 1e3 / 60)
		},
		function() {
			var e = o.mapScale / 2;
			nt.add(0, e, e + 200, 0, o.treeScales[3], 0), nt.add(1, e, e - 480, 0, o.treeScales[
				3], 0), nt.add(2, e + 300, e + 450, 0, o.treeScales[3], 0), nt.add(3, e -
				950, e - 130, 0, o.treeScales[2], 0), nt.add(4, e - 750, e - 400, 0, o.treeScales[
				3], 0), nt.add(5, e - 700, e + 400, 0, o.treeScales[2], 0), nt.add(6, e +
				800, e - 200, 0, o.treeScales[3], 0), nt.add(7, e - 260, e + 340, 0, o.bushScales[
				3], 1), nt.add(8, e + 760, e + 310, 0, o.bushScales[3], 1), nt.add(9, e -
				800, e + 100, 0, o.bushScales[3], 1), nt.add(10, e - 800, e + 300, 0, l.list[
				4].scale, l.list[4].id, l.list[10]), nt.add(11, e + 650, e - 390, 0, l.list[
				4].scale, l.list[4].id, l.list[10]), nt.add(12, e - 400, e - 450, 0, o.rockScales[
				2], 2)
		}(),
		function e() {
			B = Date.now(), P = B - q, q = B,
				function() {
					if (R && (!C || B - C >= 1e3 / o.clientSendRate) && (C = B, r.send("2",
							pn())), An < 120 && (An += .1 * P, Ge.style.fontSize = Math.min(Math.round(
							An), 120) + "px"), R) {
						var e = s.getDistance(U, D, R.x, R.y),
							t = s.getDirection(R.x, R.y, U, D),
							n = Math.min(.01 * e * P, e);
						e > .05 ? (U += n * Math.cos(t), D += n * Math.sin(t)) : (U = R.x, D =
							R.y)
					} else U = o.mapScale / 2, D = o.mapScale / 2;
					for (var i = B - 1e3 / o.serverUpdateRate, a = 0; a < W.length + Y.length; ++
						a)
						if ((_ = W[a] || Y[a - W.length]) && _.visible)
							if (_.forcePos) _.x = _.x2, _.y = _.y2, _.dir = _.d2;
							else {
								var c = _.t2 - _.t1,
									l = (i - _.t1) / c;
								_.dt += P;
								var h = Math.min(1.7, _.dt / 170),
									u = _.x2 - _.x1;
								_.x = _.x1 + u * h, u = _.y2 - _.y1, _.y = _.y1 + u * h, _.dir = Math
									.lerpAngle(_.d2, _.d1, Math.min(1.2, l))
							}
					var f = U - oe / 2,
						d = D - ce / 2;
					o.snowBiomeTop - d <= 0 && o.mapScale - o.snowBiomeTop - d >= ce ? (be.fillStyle =
							"#b6db66", be.fillRect(0, 0, oe, ce)) : o.mapScale - o.snowBiomeTop -
						d <= 0 ? (be.fillStyle = "#dbc666", be.fillRect(0, 0, oe, ce)) : o.snowBiomeTop -
						d >= ce ? (be.fillStyle = "#fff", be.fillRect(0, 0, oe, ce)) : o.snowBiomeTop -
						d >= 0 ? (be.fillStyle = "#fff", be.fillRect(0, 0, oe, o.snowBiomeTop -
							d), be.fillStyle = "#b6db66", be.fillRect(0, o.snowBiomeTop - d, oe,
							ce - (o.snowBiomeTop - d))) : (be.fillStyle = "#b6db66", be.fillRect(0,
								0, oe, o.mapScale - o.snowBiomeTop - d), be.fillStyle = "#dbc666", be
							.fillRect(0, o.mapScale - o.snowBiomeTop - d, oe, ce - (o.mapScale - o
								.snowBiomeTop - d))), In || ((ee += te * o.waveSpeed * P) >= o.waveMax ?
							(ee = o.waveMax, te = -1) : ee <= 1 && (ee = te = 1), be.globalAlpha =
							1, be.fillStyle = "#dbc666", qn(f, d, be, o.riverPadding), be.fillStyle =
							"#91b2db", qn(f, d, be, 250 * (ee - 1))), be.lineWidth = 4, be.strokeStyle =
						"#000", be.globalAlpha = .06, be.beginPath();
					for (var p = -U; p < oe; p += ce / 18) p > 0 && (be.moveTo(p, 0), be.lineTo(
						p, ce));
					for (var g = -D; g < ce; g += ce / 18) p > 0 && (be.moveTo(0, g), be.lineTo(
						oe, g));
					for (be.stroke(), be.globalAlpha = 1, be.strokeStyle = it, Yn(-1, f, d),
						be.globalAlpha = 1, be.lineWidth = 5.5, zn(0, f, d), Xn(f, d, 0), be.globalAlpha =
						1, a = 0; a < Y.length; ++a)(_ = Y[a]).active && _.visible && (_.animate(
						P), be.save(), be.translate(_.x - f, _.y - d), be.rotate(_.dir + _.dirPlus -
						Math.PI / 2), yi(_, be), be.restore());
					if (Yn(0, f, d), zn(1, f, d), Yn(1, f, d), Xn(f, d, 1), Yn(2, f, d), Yn(
							3, f, d), be.fillStyle = "#000", be.globalAlpha = .09, f <= 0 && be.fillRect(
							0, 0, -f, ce), o.mapScale - f <= oe) {
						var y = Math.max(0, -d);
						be.fillRect(o.mapScale - f, y, oe - (o.mapScale - f), ce - y)
					}
					if (d <= 0 && be.fillRect(-f, 0, oe + f, -d), o.mapScale - d <= ce) {
						var k = Math.max(0, -f),
							v = 0;
						o.mapScale - f <= oe && (v = oe - (o.mapScale - f)), be.fillRect(k, o.mapScale -
							d, oe - k - v, ce - (o.mapScale - d))
					}
					for (be.globalAlpha = 1, be.fillStyle = "rgba(0, 0, 70, 0.35)", be.fillRect(
							0, 0, oe, ce), be.strokeStyle = rt, a = 0; a < W.length + Y.length; ++
						a)
						if ((_ = W[a] || Y[a - W.length]).visible && (10 != _.skinIndex || _ ==
								R || _.team && _.team == R.team)) {
							var w = (_.team ? ".:" + _.team + ":. " : "") + (_.isPlayer&&_.sid? "[id:" + _.sid + "] " : "") + (_.name || "");//id
							if ("" != w) {
								if (be.font = (_.nameScale || 20) + "px Hammersmith One", be.fillStyle =
									"#fff", be.textBaseline = "middle", be.textAlign = "center", be.lineWidth =
									_.nameScale ? 11 : 8, be.lineJoin = "round", be.strokeText(w, _.x -
										f, _.y - d - _.scale - o.nameY), be.fillText(w, _.x - f, _.y - d -
										_.scale - o.nameY), _.isLeader && Rn.crown.isLoaded) {
									var b = o.crownIconScale;
									k = _.x - f - b / 2 - be.measureText(w).width / 2 - o.crownPad, be.drawImage(
										Rn.crown, k, _.y - d - _.scale - o.nameY - b / 2 - 5, b, b)
								}
								1 == _.iconIndex && Rn.skull.isLoaded && (b = o.crownIconScale, k = _
									.x - f - b / 2 + be.measureText(w).width / 2 + o.crownPad, be.drawImage(
										Rn.skull, k, _.y - d - _.scale - o.nameY - b / 2 - 5, b, b))
                            }
                            window.items = R.items;
                            window.w = R.weapons;
                           (be.textAlign = "center",//hp number
                            be.fillStyle = "#fff",
                            be.lineJoin = "round",
                            be.font = "20px Hammersmith One",
                            be.lineWidth = 6,
                            be.strokeText(`\nHP:${_.health}/${_.maxHealth}`,_.x - f,_.y - d + _.scale + o.nameY+(34)),
                            be.fillText(`\nHP:${_.health}/${_.maxHealth}`,_.x - f,_.y - d + _.scale + o.nameY+(34))
                            )
                            if(_.isPlayer&&_!=R&&_.team&&_.team==R.team){//tribe tracers
                            be.lineCap = "round";
                            be.strokeStyle = "#228b22";
                            be.lineWidth = 3;
                            be.beginPath();
                            be.moveTo(R.x-f, R.y-d);
                            be.lineTo(_.x-f, _.y-d);
                            be.stroke();
                            be.strokeStyle = nt;
                          }
                          if(_.isPlayer&&_!=R&&(_.team!=R.team||!_.team)){//enemy tracers
                            be.lineCap = "round";
                            be.strokeStyle = "#ff0000";
                            be.lineWidth = 3;
                            be.beginPath();
                            be.moveTo(R.x-f, R.y-d);
                            be.lineTo(_.x-f, _.y-d);
                            be.stroke();
                            be.strokeStyle = nt;
                          }
                          if(!_.isPlayer){//animal tracers
                            be.lineCap = "round";
                            be.strokeStyle = "#0000ff";
                            be.lineWidth = 3;
                            be.beginPath();
                            be.moveTo(R.x-f, R.y-d);
                            be.lineTo(_.x-f, _.y-d);
                            be.stroke();
                            be.strokeStyle = nt;

							}
							_.health > 0 && (o.healthBarWidth, be.fillStyle = rt, be.roundRect(_.x -
									f - o.healthBarWidth - o.healthBarPad, _.y - d + _.scale + o.nameY,
									2 * o.healthBarWidth + 2 * o.healthBarPad, 17, 8), be.fill(), be.fillStyle =
								_ == R || _.team && _.team == R.team ? "#8ecc51" : "#cc5151", be.roundRect(
									_.x - f - o.healthBarWidth, _.y - d + _.scale + o.nameY + o.healthBarPad,
									2 * o.healthBarWidth * (_.health / _.maxHealth), 17 - 2 * o.healthBarPad,
									7), be.fill())
						}
					for (m.update(P, be, f, d), a = 0; a < W.length; ++a)
						if ((_ = W[a]).visible && _.chatCountdown > 0) {
							_.chatCountdown -= P, _.chatCountdown <= 0 && (_.chatCountdown = 0),
								be.font = "32px Hammersmith One";
							var x = be.measureText(_.chatMessage);
							be.textBaseline = "middle", be.textAlign = "center", k = _.x - f, y =
								_.y - _.scale - d - 90;
							var S = x.width + 17;
							be.fillStyle = "rgba(0,0,0,0.2)", be.roundRect(k - S / 2, y - 23.5, S,
								47, 6), be.fill(), be.fillStyle = "#fff", be.fillText(_.chatMessage,
								k, y)
						}! function(e) {
						if (R && R.alive) {
							Ke.clearRect(0, 0, Ne.width, Ne.height), Ke.strokeStyle = "#fff", Ke.lineWidth =
								4;
							for (var t = 0; t < qt.length; ++t)(Vt = qt[t]).update(Ke, e);
							if (Ke.globalAlpha = 1, Ke.fillStyle = "#fff", si(R.x / o.mapScale *
									Ne.width, R.y / o.mapScale * Ne.height, 7, Ke, !0), Ke.fillStyle =
								"rgba(255,255,255,0.35)", R.team && Et)
								for (t = 0; t < Et.length;) si(Et[t] / o.mapScale * Ne.width, Et[t +
									1] / o.mapScale * Ne.height, 7, Ke, !0), t += 2;
							It && (Ke.fillStyle = "#fc5553", Ke.font = "34px Hammersmith One", Ke.textBaseline =
								"middle", Ke.textAlign = "center", Ke.fillText("x", It.x / o.mapScale *
									Ne.width, It.y / o.mapScale * Ne.height)), Mt && (Ke.fillStyle =
								"#fff", Ke.font = "34px Hammersmith One", Ke.textBaseline = "middle",
								Ke.textAlign = "center", Ke.fillText("x", Mt.x / o.mapScale * Ne.width,
									Mt.y / o.mapScale * Ne.height))
						}
					}(P), -1 !== re.id && Fn(re.startX, re.startY, re.currentX, re.currentY), -
						1 !== se.id && Fn(se.startX, se.startY, se.currentX, se.currentY)
				}(), requestAnimFrame(e)
		}(), window.openLink = Oi, window.aJoinReq = Dt, window.follmoo = function() {
			H || (H = !0, I("moofoll", 1))
		}, window.kickFromClan = Lt, window.sendJoin = Ft, window.leaveAlliance =
		Ht, window.createAlliance = zt, window.storeBuy = Kt, window.storeEquip =
		Jt, window.showItemInfo = Tt, window.selectSkinColor = function(e) {
			ae = e, en()
		}, window.changeStoreIndex = function(e) {
			Xt != e && (Xt = e, Gt())
		}, window.config = o
}, function(e, t) {
	! function(e, t, n) {
		function i(e, t) {
			return typeof e === t
		}
		var r = [],
			s = [],
			a = {
				_version: "3.5.0",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function(e, t) {
					var n = this;
					setTimeout((function() {
						t(n[e])
					}), 0)
				},
				addTest: function(e, t, n) {
					s.push({
						name: e,
						fn: t,
						options: n
					})
				},
				addAsyncTest: function(e) {
					s.push({
						name: null,
						fn: e
					})
				}
			},
			o = function() {};
		o.prototype = a, o = new o;
		var c = t.documentElement,
			l = "svg" === c.nodeName.toLowerCase();
		o.addTest("passiveeventlisteners", (function() {
				var t = !1;
				try {
					var n = Object.defineProperty({}, "passive", {
						get: function() {
							t = !0
						}
					});
					e.addEventListener("test", null, n)
				} catch (e) {}
				return t
			})),
			function() {
				var e, t, n, a, c, l;
				for (var h in s)
					if (s.hasOwnProperty(h)) {
						if (e = [], (t = s[h]).name && (e.push(t.name.toLowerCase()), t.options &&
								t.options.aliases && t.options.aliases.length))
							for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[
								n].toLowerCase());
						for (a = i(t.fn, "function") ? t.fn() : t.fn, c = 0; c < e.length; c++)
							1 === (l = e[c].split(".")).length ? o[l[0]] = a : (!o[l[0]] || o[l[0]] instanceof Boolean ||
								(o[l[0]] = new Boolean(o[l[0]])), o[l[0]][l[1]] = a), r.push((a ? "" :
								"no-") + l.join("-"))
					}
			}(),
			function(e) {
				var t = c.className,
					n = o._config.classPrefix || "";
				if (l && (t = t.baseVal), o._config.enableJSClass) {
					var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
					t = t.replace(i, "$1" + n + "js$2")
				}
				o._config.enableClasses && (t += " " + n + e.join(" " + n), l ? c.className
					.baseVal = t : c.className = t)
			}(r), delete a.addTest, delete a.addAsyncTest;
		for (var h = 0; h < o._q.length; h++) o._q[h]();
		e.Modernizr = o
	}(window, document)
}, function(e, t, n) {
	var i = n(24);
	n(19), e.exports = {
		socket: null,
		connected: !1,
		socketId: -1,
		connect: function(e, t, n) {
			if (!this.socket) {
				var r = this;
				try {
					var s = !1,
						a = e;
					this.socket = new WebSocket(a), this.socket.binaryType = "arraybuffer",
						this.socket.onmessage = function(e) {
							var t = new Uint8Array(e.data),
								s = i.decode(t),
								a = s[0];
							t = s[1], "io-init" == a ? r.socketId = t[0] : n[a].apply(void 0, t)
						}, this.socket.onopen = function() {
							r.connected = !0, t()
						}, this.socket.onclose = function(e) {
							r.connected = !1, 4001 == e.code ? t("Invalid Connection") : s || t(
								"disconnected")
						}, this.socket.onerror = function(e) {
							this.socket && this.socket.readyState != WebSocket.OPEN && (s = !0,
								console.error("Socket error", arguments), t("Socket error"))
						}
				} catch (e) {
					console.warn("Socket connection error:", e), t(e)
				}
			}
		},
		send: function(e) {
			var t = Array.prototype.slice.call(arguments, 1),
				n = i.encode([e, t]);
			this.socket.send(n)
		},
		socketReady: function() {
			return this.socket && this.connected
		},
		close: function() {
			this.socket && this.socket.close()
		}
	}
}, function(e, t, n) {
	t.encode = n(9).encode, t.decode = n(15).decode, t.Encoder = n(37).Encoder,
		t.Decoder = n(38).Decoder, t.createCodec = n(39).createCodec, t.codec = n(
			40).codec
}, function(e, t, n) {
	(function(t) {
		function n(e) {
			return e && e.isBuffer && e
		}
		e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" !=
			typeof window && window.Buffer) || this.Buffer
	}).call(this, n(11).Buffer)
}, function(e, t, n) {
	"use strict";
	t.byteLength = function(e) {
		var t = l(e),
			n = t[0],
			i = t[1];
		return 3 * (n + i) / 4 - i
	}, t.toByteArray = function(e) {
		var t, n, i = l(e),
			a = i[0],
			o = i[1],
			c = new s(function(e, t, n) {
				return 3 * (t + n) / 4 - n
			}(0, a, o)),
			h = 0,
			u = o > 0 ? a - 4 : a;
		for (n = 0; n < u; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n +
				1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[h++] =
			t >> 16 & 255, c[h++] = t >> 8 & 255, c[h++] = 255 & t;
		return 2 === o && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >>
			4, c[h++] = 255 & t), 1 === o && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(
				n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[h++] = t >> 8 & 255, c[h++] =
			255 & t), c
	}, t.fromByteArray = function(e) {
		for (var t, n = e.length, r = n % 3, s = [], a = 0, o = n - r; a < o; a +=
			16383) s.push(u(e, a, a + 16383 > o ? o : a + 16383));
		return 1 === r ? (t = e[n - 1], s.push(i[t >> 2] + i[t << 4 & 63] + "==")) :
			2 === r && (t = (e[n - 2] << 8) + e[n - 1], s.push(i[t >> 10] + i[t >> 4 &
				63] + i[t << 2 & 63] + "=")), s.join("")
	};
	for (var i = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array :
			Array, a =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0,
			c = a.length; o < c; ++o) i[o] = a[o], r[a.charCodeAt(o)] = o;

	function l(e) {
		var t = e.length;
		if (t % 4 > 0) throw new Error(
			"Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
	}

	function h(e) {
		return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
	}

	function u(e, t, n) {
		for (var i, r = [], s = t; s < n; s += 3) i = (e[s] << 16 & 16711680) + (e[
			s + 1] << 8 & 65280) + (255 & e[s + 2]), r.push(h(i));
		return r.join("")
	}
	r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
}, function(e, t) {
	var n = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == n.call(e)
	}
}, function(e, t, n) {
	var i = n(0);

	function r(e) {
		return new Array(e)
	}(t = e.exports = r(0)).alloc = r, t.concat = i.concat, t.from = function(e) {
		if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
		else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
		else {
			if ("string" == typeof e) return i.from.call(t, e);
			if ("number" == typeof e) throw new TypeError(
				'"value" argument must not be a number')
		}
		return Array.prototype.slice.call(e)
	}
}, function(e, t, n) {
	var i = n(0),
		r = i.global;

	function s(e) {
		return new r(e)
	}(t = e.exports = i.hasBuffer ? s(0) : []).alloc = i.hasBuffer && r.alloc ||
		s, t.concat = i.concat, t.from = function(e) {
			if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
			else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
			else {
				if ("string" == typeof e) return i.from.call(t, e);
				if ("number" == typeof e) throw new TypeError(
					'"value" argument must not be a number')
			}
			return r.from && 1 !== r.from.length ? r.from(e) : new r(e)
		}
}, function(e, t, n) {
	var i = n(0);

	function r(e) {
		return new Uint8Array(e)
	}(t = e.exports = i.hasArrayBuffer ? r(0) : []).alloc = r, t.concat = i.concat,
		t.from = function(e) {
			if (i.isView(e)) {
				var n = e.byteOffset,
					r = e.byteLength;
				(e = e.buffer).byteLength !== r && (e.slice ? e = e.slice(n, n + r) : (e =
					new Uint8Array(e)).byteLength !== r && (e = Array.prototype.slice.call(
					e, n, n + r)))
			} else {
				if ("string" == typeof e) return i.from.call(t, e);
				if ("number" == typeof e) throw new TypeError(
					'"value" argument must not be a number')
			}
			return new Uint8Array(e)
		}
}, function(e, t) {
	t.copy = function(e, t, n, i) {
		var r;
		n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0);
		var s = i - n;
		if (e === this && n < t && t < i)
			for (r = s - 1; r >= 0; r--) e[r + t] = this[r + n];
		else
			for (r = 0; r < s; r++) e[r + t] = this[r + n];
		return s
	}, t.toString = function(e, t, n) {
		var i = 0 | t;
		n || (n = this.length);
		for (var r = "", s = 0; i < n;)(s = this[i++]) < 128 ? r += String.fromCharCode(
			s) : (192 == (224 & s) ? s = (31 & s) << 6 | 63 & this[i++] : 224 == (
				240 & s) ? s = (15 & s) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] :
			240 == (248 & s) && (s = (7 & s) << 18 | (63 & this[i++]) << 12 | (63 &
				this[i++]) << 6 | 63 & this[i++]), s >= 65536 ? (s -= 65536, r +=
				String.fromCharCode(55296 + (s >>> 10), 56320 + (1023 & s))) : r +=
			String.fromCharCode(s));
		return r
	}, t.write = function(e, t) {
		for (var n = t || (t |= 0), i = e.length, r = 0, s = 0; s < i;)(r = e.charCodeAt(
			s++)) < 128 ? this[n++] = r : r < 2048 ? (this[n++] = 192 | r >>> 6,
			this[n++] = 128 | 63 & r) : r < 55296 || r > 57343 ? (this[n++] = 224 |
			r >>> 12, this[n++] = 128 | r >>> 6 & 63, this[n++] = 128 | 63 & r) : (r =
			65536 + (r - 55296 << 10 | e.charCodeAt(s++) - 56320), this[n++] = 240 |
			r >>> 18, this[n++] = 128 | r >>> 12 & 63, this[n++] = 128 | r >>> 6 &
			63, this[n++] = 128 | 63 & r);
		return n - t
	}
}, function(e, t, n) {
	t.setExtPackers = function(e) {
		e.addExtPacker(14, Error, [u, c]), e.addExtPacker(1, EvalError, [u, c]), e
			.addExtPacker(2, RangeError, [u, c]), e.addExtPacker(3, ReferenceError, [
				u, c
			]), e.addExtPacker(4, SyntaxError, [u, c]), e.addExtPacker(5, TypeError, [
				u, c
			]), e.addExtPacker(6, URIError, [u, c]), e.addExtPacker(10, RegExp, [h, c]),
			e.addExtPacker(11, Boolean, [l, c]), e.addExtPacker(12, String, [l, c]),
			e.addExtPacker(13, Date, [Number, c]), e.addExtPacker(15, Number, [l, c]),
			"undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, a), e.addExtPacker(
					18, Uint8Array, a), e.addExtPacker(19, Int16Array, a), e.addExtPacker(
					20, Uint16Array, a), e.addExtPacker(21, Int32Array, a), e.addExtPacker(
					22, Uint32Array, a), e.addExtPacker(23, Float32Array, a), "undefined" !=
				typeof Float64Array && e.addExtPacker(24, Float64Array, a), "undefined" !=
				typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, a), e.addExtPacker(
					26, ArrayBuffer, a), e.addExtPacker(29, DataView, a)), r.hasBuffer && e
			.addExtPacker(27, s, r.from)
	};
	var i, r = n(0),
		s = r.global,
		a = r.Uint8Array.from,
		o = {
			name: 1,
			message: 1,
			stack: 1,
			columnNumber: 1,
			fileName: 1,
			lineNumber: 1
		};

	function c(e) {
		return i || (i = n(9).encode), i(e)
	}

	function l(e) {
		return e.valueOf()
	}

	function h(e) {
		(e = RegExp.prototype.toString.call(e).split("/")).shift();
		var t = [e.pop()];
		return t.unshift(e.join("/")), t
	}

	function u(e) {
		var t = {};
		for (var n in o) t[n] = e[n];
		return t
	}
}, function(e, t, n) {
	var i = n(5),
		r = n(7),
		s = r.Uint64BE,
		a = r.Int64BE,
		o = n(0),
		c = n(6),
		l = n(34),
		h = n(13).uint8,
		u = n(3).ExtBuffer,
		f = "undefined" != typeof Uint8Array,
		d = "undefined" != typeof Map,
		p = [];
	p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, t.getWriteType =
		function(e) {
			var t = l.getWriteToken(e),
				n = e && e.useraw,
				r = f && e && e.binarraybuffer,
				g = r ? o.isArrayBuffer : o.isBuffer,
				m = r ? function(e, t) {
					w(e, new Uint8Array(t))
				} : w,
				y = d && e && e.usemap ? function(e, n) {
					if (!(n instanceof Map)) return b(e, n);
					var i = n.size;
					t[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
					var r = e.codec.encode;
					n.forEach((function(t, n, i) {
						r(e, n), r(e, t)
					}))
				} : b;
			return {
				boolean: function(e, n) {
					t[n ? 195 : 194](e, n)
				},
				function: v,
				number: function(e, n) {
					var i = 0 | n;
					n === i ? t[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 :
						i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e,
						i) : t[203](e, n)
				},
				object: n ? function(e, n) {
					if (g(n)) return function(e, n) {
						var i = n.length;
						t[i < 32 ? 160 + i : i <= 65535 ? 218 : 219](e, i), e.send(n)
					}(e, n);
					k(e, n)
				} : k,
				string: function(e) {
					return function(n, i) {
						var r = i.length,
							s = 5 + 3 * r;
						n.offset = n.reserve(s);
						var a = n.buffer,
							o = e(r),
							l = n.offset + o;
						r = c.write.call(a, i, l);
						var h = e(r);
						if (o !== h) {
							var u = l + h - o,
								f = l + r;
							c.copy.call(a, a, u, l, f)
						}
						t[1 === h ? 160 + r : h <= 3 ? 215 + h : 219](n, r), n.offset += r
					}
				}(n ? function(e) {
					return e < 32 ? 1 : e <= 65535 ? 3 : 5
				} : function(e) {
					return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
				}),
				symbol: v,
				undefined: v
			};

			function k(e, n) {
				if (null === n) return v(e, n);
				if (g(n)) return m(e, n);
				if (i(n)) return function(e, n) {
					var i = n.length;
					t[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
					for (var r = e.codec.encode, s = 0; s < i; s++) r(e, n[s])
				}(e, n);
				if (s.isUint64BE(n)) return function(e, n) {
					t[207](e, n.toArray())
				}(e, n);
				if (a.isInt64BE(n)) return function(e, n) {
					t[211](e, n.toArray())
				}(e, n);
				var r = e.codec.getExtPacker(n);
				if (r && (n = r(n)), n instanceof u) return function(e, n) {
					var i = n.buffer,
						r = i.length,
						s = p[r] || (r < 255 ? 199 : r <= 65535 ? 200 : 201);
					t[s](e, r), h[n.type](e), e.send(i)
				}(e, n);
				y(e, n)
			}

			function v(e, n) {
				t[192](e, n)
			}

			function w(e, n) {
				var i = n.length;
				t[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i), e.send(n)
			}

			function b(e, n) {
				var i = Object.keys(n),
					r = i.length;
				t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
				var s = e.codec.encode;
				i.forEach((function(t) {
					s(e, t), s(e, n[t])
				}))
			}
		}
}, function(e, t, n) {
	var i = n(4),
		r = n(7),
		s = r.Uint64BE,
		a = r.Int64BE,
		o = n(13).uint8,
		c = n(0),
		l = c.global,
		h = c.hasBuffer && "TYPED_ARRAY_SUPPORT" in l && !l.TYPED_ARRAY_SUPPORT,
		u = c.hasBuffer && l.prototype || {};

	function f() {
		var e = o.slice();
		return e[196] = d(196), e[197] = p(197), e[198] = g(198), e[199] = d(199),
			e[200] = p(200), e[201] = g(201), e[202] = m(202, 4, u.writeFloatBE || v, !
				0), e[203] = m(203, 8, u.writeDoubleBE || w, !0), e[204] = d(204), e[205] =
			p(205), e[206] = g(206), e[207] = m(207, 8, y), e[208] = d(208), e[209] =
			p(209), e[210] = g(210), e[211] = m(211, 8, k), e[217] = d(217), e[218] =
			p(218), e[219] = g(219), e[220] = p(220), e[221] = g(221), e[222] = p(222),
			e[223] = g(223), e
	}

	function d(e) {
		return function(t, n) {
			var i = t.reserve(2),
				r = t.buffer;
			r[i++] = e, r[i] = n
		}
	}

	function p(e) {
		return function(t, n) {
			var i = t.reserve(3),
				r = t.buffer;
			r[i++] = e, r[i++] = n >>> 8, r[i] = n
		}
	}

	function g(e) {
		return function(t, n) {
			var i = t.reserve(5),
				r = t.buffer;
			r[i++] = e, r[i++] = n >>> 24, r[i++] = n >>> 16, r[i++] = n >>> 8, r[i] =
				n
		}
	}

	function m(e, t, n, i) {
		return function(r, s) {
			var a = r.reserve(t + 1);
			r.buffer[a++] = e, n.call(r.buffer, s, a, i)
		}
	}

	function y(e, t) {
		new s(this, t, e)
	}

	function k(e, t) {
		new a(this, t, e)
	}

	function v(e, t) {
		i.write(this, e, t, !1, 23, 4)
	}

	function w(e, t) {
		i.write(this, e, t, !1, 52, 8)
	}
	t.getWriteToken = function(e) {
		return e && e.uint8array ? function() {
			var e = f();
			return e[202] = m(202, 4, v), e[203] = m(203, 8, w), e
		}() : h || c.hasBuffer && e && e.safe ? function() {
			var e = o.slice();
			return e[196] = m(196, 1, l.prototype.writeUInt8), e[197] = m(197, 2, l.prototype
					.writeUInt16BE), e[198] = m(198, 4, l.prototype.writeUInt32BE), e[199] =
				m(199, 1, l.prototype.writeUInt8), e[200] = m(200, 2, l.prototype.writeUInt16BE),
				e[201] = m(201, 4, l.prototype.writeUInt32BE), e[202] = m(202, 4, l.prototype
					.writeFloatBE), e[203] = m(203, 8, l.prototype.writeDoubleBE), e[204] =
				m(204, 1, l.prototype.writeUInt8), e[205] = m(205, 2, l.prototype.writeUInt16BE),
				e[206] = m(206, 4, l.prototype.writeUInt32BE), e[207] = m(207, 8, y), e[
					208] = m(208, 1, l.prototype.writeInt8), e[209] = m(209, 2, l.prototype
					.writeInt16BE), e[210] = m(210, 4, l.prototype.writeInt32BE), e[211] =
				m(211, 8, k), e[217] = m(217, 1, l.prototype.writeUInt8), e[218] = m(
					218, 2, l.prototype.writeUInt16BE), e[219] = m(219, 4, l.prototype.writeUInt32BE),
				e[220] = m(220, 2, l.prototype.writeUInt16BE), e[221] = m(221, 4, l.prototype
					.writeUInt32BE), e[222] = m(222, 2, l.prototype.writeUInt16BE), e[223] =
				m(223, 4, l.prototype.writeUInt32BE), e
		}() : f()
	}
}, function(e, t, n) {
	t.setExtUnpackers = function(e) {
		e.addExtUnpacker(14, [o, l(Error)]), e.addExtUnpacker(1, [o, l(EvalError)]),
			e.addExtUnpacker(2, [o, l(RangeError)]), e.addExtUnpacker(3, [o, l(
				ReferenceError)]), e.addExtUnpacker(4, [o, l(SyntaxError)]), e.addExtUnpacker(
				5, [o, l(TypeError)]), e.addExtUnpacker(6, [o, l(URIError)]), e.addExtUnpacker(
				10, [o, c]), e.addExtUnpacker(11, [o, h(Boolean)]), e.addExtUnpacker(12, [
				o, h(String)
			]), e.addExtUnpacker(13, [o, h(Date)]), e.addExtUnpacker(15, [o, h(Number)]),
			"undefined" != typeof Uint8Array && (e.addExtUnpacker(17, h(Int8Array)),
				e.addExtUnpacker(18, h(Uint8Array)), e.addExtUnpacker(19, [u, h(
					Int16Array)]), e.addExtUnpacker(20, [u, h(Uint16Array)]), e.addExtUnpacker(
					21, [u, h(Int32Array)]), e.addExtUnpacker(22, [u, h(Uint32Array)]), e.addExtUnpacker(
					23, [u, h(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(
					24, [u, h(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e
				.addExtUnpacker(25, h(Uint8ClampedArray)), e.addExtUnpacker(26, u), e.addExtUnpacker(
					29, [u, h(DataView)])), r.hasBuffer && e.addExtUnpacker(27, h(s))
	};
	var i, r = n(0),
		s = r.global,
		a = {
			name: 1,
			message: 1,
			stack: 1,
			columnNumber: 1,
			fileName: 1,
			lineNumber: 1
		};

	function o(e) {
		return i || (i = n(15).decode), i(e)
	}

	function c(e) {
		return RegExp.apply(null, e)
	}

	function l(e) {
		return function(t) {
			var n = new e;
			for (var i in a) n[i] = t[i];
			return n
		}
	}

	function h(e) {
		return function(t) {
			return new e(t)
		}
	}

	function u(e) {
		return new Uint8Array(e).buffer
	}
}, function(e, t, n) {
	var i = n(17);

	function r(e) {
		var t, n = new Array(256);
		for (t = 0; t <= 127; t++) n[t] = s(t);
		for (t = 128; t <= 143; t++) n[t] = o(t - 128, e.map);
		for (t = 144; t <= 159; t++) n[t] = o(t - 144, e.array);
		for (t = 160; t <= 191; t++) n[t] = o(t - 160, e.str);
		for (n[192] = s(null), n[193] = null, n[194] = s(!1), n[195] = s(!0), n[196] =
			a(e.uint8, e.bin), n[197] = a(e.uint16, e.bin), n[198] = a(e.uint32, e.bin),
			n[199] = a(e.uint8, e.ext), n[200] = a(e.uint16, e.ext), n[201] = a(e.uint32,
				e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] =
			e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] =
			e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = o(1, e.ext), n[213] =
			o(2, e.ext), n[214] = o(4, e.ext), n[215] = o(8, e.ext), n[216] = o(16, e.ext),
			n[217] = a(e.uint8, e.str), n[218] = a(e.uint16, e.str), n[219] = a(e.uint32,
				e.str), n[220] = a(e.uint16, e.array), n[221] = a(e.uint32, e.array), n[
				222] = a(e.uint16, e.map), n[223] = a(e.uint32, e.map), t = 224; t <= 255; t++
		) n[t] = s(t - 256);
		return n
	}

	function s(e) {
		return function() {
			return e
		}
	}

	function a(e, t) {
		return function(n) {
			var i = e(n);
			return t(n, i)
		}
	}

	function o(e, t) {
		return function(n) {
			return t(n, e)
		}
	}
	t.getReadToken = function(e) {
		var t = i.getReadFormat(e);
		return e && e.useraw ? function(e) {
			var t, n = r(e).slice();
			for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <=
				191; t++) n[t] = o(t - 160, e.bin);
			return n
		}(t) : r(t)
	}
}, function(e, t, n) {
	t.Encoder = s;
	var i = n(18),
		r = n(10).EncodeBuffer;

	function s(e) {
		if (!(this instanceof s)) return new s(e);
		r.call(this, e)
	}
	s.prototype = new r, i.mixin(s.prototype), s.prototype.encode = function(e) {
		this.write(e), this.emit("data", this.read())
	}, s.prototype.end = function(e) {
		arguments.length && this.encode(e), this.flush(), this.emit("end")
	}
}, function(e, t, n) {
	t.Decoder = s;
	var i = n(18),
		r = n(16).DecodeBuffer;

	function s(e) {
		if (!(this instanceof s)) return new s(e);
		r.call(this, e)
	}
	s.prototype = new r, i.mixin(s.prototype), s.prototype.decode = function(e) {
		arguments.length && this.write(e), this.flush()
	}, s.prototype.push = function(e) {
		this.emit("data", e)
	}, s.prototype.end = function(e) {
		this.decode(e), this.emit("end")
	}
}, function(e, t, n) {
	n(8), n(2), t.createCodec = n(1).createCodec
}, function(e, t, n) {
	n(8), n(2), t.codec = {
		preset: n(1).preset
	}
}, function(e, t) {
	var n, i, r = e.exports = {};

	function s() {
		throw new Error("setTimeout has not been defined")
	}

	function a() {
		throw new Error("clearTimeout has not been defined")
	}

	function o(e) {
		if (n === setTimeout) return setTimeout(e, 0);
		if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
		try {
			return n(e, 0)
		} catch (t) {
			try {
				return n.call(null, e, 0)
			} catch (t) {
				return n.call(this, e, 0)
			}
		}
	}! function() {
		try {
			n = "function" == typeof setTimeout ? setTimeout : s
		} catch (e) {
			n = s
		}
		try {
			i = "function" == typeof clearTimeout ? clearTimeout : a
		} catch (e) {
			i = a
		}
	}();
	var c, l = [],
		h = !1,
		u = -1;

	function f() {
		h && c && (h = !1, c.length ? l = c.concat(l) : u = -1, l.length && d())
	}

	function d() {
		if (!h) {
			var e = o(f);
			h = !0;
			for (var t = l.length; t;) {
				for (c = l, l = []; ++u < t;) c && c[u].run();
				u = -1, t = l.length
			}
			c = null, h = !1,
				function(e) {
					if (i === clearTimeout) return clearTimeout(e);
					if ((i === a || !i) && clearTimeout) return i = clearTimeout,
						clearTimeout(e);
					try {
						i(e)
					} catch (t) {
						try {
							return i.call(null, e)
						} catch (t) {
							return i.call(this, e)
						}
					}
				}(e)
		}
	}

	function p(e, t) {
		this.fun = e, this.array = t
	}

	function g() {}
	r.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			l.push(new p(e, t)), 1 !== l.length || h || o(d)
		}, p.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version =
		"", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener =
		g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener =
		g, r.listeners = function(e) {
			return []
		}, r.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, r.cwd = function() {
			return "/"
		}, r.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, r.umask = function() {
			return 0
		}
}, function(e, t) {
	var n = Math.abs,
		i = (Math.cos, Math.sin, Math.pow, Math.sqrt),
		r = (n = Math.abs, Math.atan2),
		s = Math.PI;
	e.exports.randInt = function(e, t) {
		return Math.floor(Math.random() * (t - e + 1)) + e
	}, e.exports.randFloat = function(e, t) {
		return Math.random() * (t - e + 1) + e
	}, e.exports.lerp = function(e, t, n) {
		return e + (t - e) * n
	}, e.exports.decel = function(e, t) {
		return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)),
			e
	}, e.exports.getDistance = function(e, t, n, r) {
		return i((n -= e) * n + (r -= t) * r)
	}, e.exports.getDirection = function(e, t, n, i) {
		return r(t - i, e - n)
	}, e.exports.getAngleDist = function(e, t) {
		var i = n(t - e) % (2 * s);
		return i > s ? 2 * s - i : i
	}, e.exports.isNumber = function(e) {
		return "number" == typeof e && !isNaN(e) && isFinite(e)
	}, e.exports.isString = function(e) {
		return e && "string" == typeof e
	}, e.exports.kFormat = function(e) {
		return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
	}, e.exports.capitalizeFirst = function(e) {
		return e.charAt(0).toUpperCase() + e.slice(1)
	}, e.exports.fixTo = function(e, t) {
		return parseFloat(e.toFixed(t))
	}, e.exports.sortByPoints = function(e, t) {
		return parseFloat(t.points) - parseFloat(e.points)
	}, e.exports.lineInRect = function(e, t, n, i, r, s, a, o) {
		var c = r,
			l = a;
		if (r > a && (c = a, l = r), l > n && (l = n), c < e && (c = e), c > l)
			return !1;
		var h = s,
			u = o,
			f = a - r;
		if (Math.abs(f) > 1e-7) {
			var d = (o - s) / f,
				p = s - d * r;
			h = d * c + p, u = d * l + p
		}
		if (h > u) {
			var g = u;
			u = h, h = g
		}
		return u > i && (u = i), h < t && (h = t), !(h > u)
	}, e.exports.containsPoint = function(e, t, n) {
		var i = e.getBoundingClientRect(),
			r = i.left + window.scrollX,
			s = i.top + window.scrollY,
			a = i.width,
			o = i.height;
		return t > r && t < r + a && n > s && n < s + o
	}, e.exports.mousifyTouchEvent = function(e) {
		var t = e.changedTouches[0];
		e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY =
			t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
	}, e.exports.hookTouchEvents = function(t, n) {
		var i = !n,
			r = !1;

		function s(n) {
			e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(),
				n.stopPropagation()), r && (t.onclick && t.onclick(n), t.onmouseout &&
				t.onmouseout(n), r = !1)
		}
		t.addEventListener("touchstart", e.exports.checkTrusted((function(n) {
				e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(),
					n.stopPropagation()), t.onmouseover && t.onmouseover(n), r = !0
			})), !1), t.addEventListener("touchmove", e.exports.checkTrusted((
				function(n) {
					e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(),
							n.stopPropagation()), e.exports.containsPoint(t, n.pageX, n.pageY) ?
						r || (t.onmouseover && t.onmouseover(n), r = !0) : r && (t.onmouseout &&
							t.onmouseout(n), r = !1)
				})), !1), t.addEventListener("touchend", e.exports.checkTrusted(s), !1),
			t.addEventListener("touchcancel", e.exports.checkTrusted(s), !1), t.addEventListener(
				"touchleave", e.exports.checkTrusted(s), !1)
	}, e.exports.removeAllChildren = function(e) {
		for (; e.hasChildNodes();) e.removeChild(e.lastChild)
	}, e.exports.generateElement = function(t) {
		var n = document.createElement(t.tag || "div");

		function i(e, i) {
			t[e] && (n[i] = t[e])
		}
		for (var r in i("text", "textContent"), i("html", "innerHTML"), i("class",
				"className"), t) {
			switch (r) {
				case "tag":
				case "text":
				case "html":
				case "class":
				case "style":
				case "hookTouch":
				case "parent":
				case "children":
					continue
			}
			n[r] = t[r]
		}
		if (n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)), n.onmouseover &&
			(n.onmouseover = e.exports.checkTrusted(n.onmouseover)), n.onmouseout &&
			(n.onmouseout = e.exports.checkTrusted(n.onmouseout)), t.style && (n.style
				.cssText = t.style), t.hookTouch && e.exports.hookTouchEvents(n), t.parent &&
			t.parent.appendChild(n), t.children)
			for (var s = 0; s < t.children.length; s++) n.appendChild(t.children[s]);
		return n
	}, e.exports.eventIsTrusted = function(e) {
		return !e || "boolean" != typeof e.isTrusted || e.isTrusted
	}, e.exports.checkTrusted = function(t) {
		return function(n) {
			n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n)
		}
	}, e.exports.randomString = function(e) {
		for (var t = "", n =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i <
			e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
		return t
	}, e.exports.countInArray = function(e, t) {
		for (var n = 0, i = 0; i < e.length; i++) e[i] === t && n++;
		return n
	}
}, function(e, t) {
	e.exports.AnimText = function() {
		this.init = function(e, t, n, i, r, s, a) {
			this.x = e, this.y = t, this.color = a, this.scale = n, this.startScale =
				this.scale, this.maxScale = 1.5 * n, this.scaleSpeed = .7, this.speed =
				i, this.life = r, this.text = s
		}, this.update = function(e) {
			this.life && (this.life -= e, this.y -= this.speed * e, this.scale +=
				this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale,
					this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale =
					this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life =
					0))
		}, this.render = function(e, t, n) {
			e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(
				this.text, this.x - t, this.y - n)
		}
	}, e.exports.TextManager = function() {
		this.texts = [], this.update = function(e, t, n, i) {
			t.textBaseline = "middle", t.textAlign = "center";
			for (var r = 0; r < this.texts.length; ++r) this.texts[r].life && (this.texts[
				r].update(e), this.texts[r].render(t, n, i))
		}, this.showText = function(t, n, i, r, s, a, o) {
			for (var c, l = 0; l < this.texts.length; ++l)
				if (!this.texts[l].life) {
					c = this.texts[l];
					break
				}
			c || (c = new e.exports.AnimText, this.texts.push(c)), c.init(t, n, i, r,
				s, a, o)
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		this.sid = e, this.init = function(e, t, n, i, r, s, a) {
			s = s || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0,
				this.doUpdate = s.doUpdate, this.x = e, this.y = t, this.dir = n, this.xWiggle =
				0, this.yWiggle = 0, this.scale = i, this.type = r, this.id = s.id,
				this.owner = a, this.name = s.name, this.isItem = null != this.id, this
				.group = s.group, this.health = s.health, this.layer = 2, null != this.group ?
				this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 ==
				this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv =
				s.colDiv || 1, this.blocker = s.blocker, this.ignoreCollision = s.ignoreCollision,
				this.dontGather = s.dontGather, this.hideFromEnemy = s.hideFromEnemy,
				this.friction = s.friction, this.projDmg = s.projDmg, this.dmg = s.dmg,
				this.pDmg = s.pDmg, this.pps = s.pps, this.zIndex = s.zIndex || 0, this
				.turnSpeed = s.turnSpeed, this.req = s.req, this.trap = s.trap, this.healCol =
				s.healCol, this.teleport = s.teleport, this.boostSpeed = s.boostSpeed,
				this.projectile = s.projectile, this.shootRange = s.shootRange, this.shootRate =
				s.shootRate, this.shootCount = this.shootRate, this.spawnPoint = s.spawnPoint
		}, this.changeHealth = function(e, t) {
			return this.health += e, this.health <= 0
		}, this.getScale = function(e, t) {
			return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 ==
				this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
		}, this.visibleToPlayer = function(e) {
			return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner
				.team && e.team == this.owner.team)
		}, this.update = function(e) {
			this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this
				.yWiggle && (this.yWiggle *= Math.pow(.99, e)), this.turnSpeed && (
					this.dir += this.turnSpeed * e))
		}
	}
}, function(e, t) {
	e.exports.groups = [{
		id: 0,
		name: "food",
		layer: 0
	}, {
		id: 1,
		name: "walls",
		place: !0,
		limit: 30,
		layer: 0
	}, {
		id: 2,
		name: "spikes",
		place: !0,
		limit: 15,
		layer: 0
	}, {
		id: 3,
		name: "mill",
		place: !0,
		limit: 7,
		layer: 1
	}, {
		id: 4,
		name: "mine",
		place: !0,
		limit: 1,
		layer: 0
	}, {
		id: 5,
		name: "trap",
		place: !0,
		limit: 6,
		layer: -1
	}, {
		id: 6,
		name: "booster",
		place: !0,
		limit: 12,
		layer: -1
	}, {
		id: 7,
		name: "turret",
		place: !0,
		limit: 2,
		layer: 1
	}, {
		id: 8,
		name: "watchtower",
		place: !0,
		limit: 12,
		layer: 1
	}, {
		id: 9,
		name: "buff",
		place: !0,
		limit: 4,
		layer: -1
	}, {
		id: 10,
		name: "spawn",
		place: !0,
		limit: 1,
		layer: -1
	}, {
		id: 11,
		name: "sapling",
		place: !0,
		limit: 2,
		layer: 0
	}, {
		id: 12,
		name: "blocker",
		place: !0,
		limit: 3,
		layer: -1
	}, {
		id: 13,
		name: "teleporter",
		place: !0,
		limit: 2,
		layer: -1
	}], t.projectiles = [{
		indx: 0,
		layer: 0,
		src: "arrow_1",
		dmg: 25,
		speed: 1.6,
		scale: 103,
		range: 1e3
	}, {
		indx: 1,
		layer: 1,
		dmg: 25,
		scale: 20
	}, {
		indx: 0,
		layer: 0,
		src: "arrow_1",
		dmg: 35,
		speed: 2.5,
		scale: 103,
		range: 1200
	}, {
		indx: 0,
		layer: 0,
		src: "arrow_1",
		dmg: 30,
		speed: 2,
		scale: 103,
		range: 1200
	}, {
		indx: 1,
		layer: 1,
		dmg: 16,
		scale: 20
	}, {
		indx: 0,
		layer: 0,
		src: "bullet_1",
		dmg: 50,
		speed: 3.6,
		scale: 160,
		range: 1400
	}], t.weapons = [{
		id: 0,
		type: 0,
        age: 2,
		name: "tool hammer",
		desc: "tool for gathering all resources",
		src: "hammer_1",
		length: 140,
		width: 140,
		xOff: -3,
		yOff: 18,
		dmg: 25,
		range: 65,
		gather: 1,
		speed: 300
	}, {
		id: 1,
		type: 0,
		age: 2,
		name: "hand axe",
		desc: "gathers resources at a higher rate",
		src: "axe_1",
		length: 140,
		width: 140,
		xOff: 3,
		yOff: 24,
		dmg: 30,
		spdMult: 1,
		range: 70,
		gather: 2,
		speed: 400
	}, {
		id: 2,
		type: 0,
		age: 8,
		name: "great axe",
		desc: "deal more damage and gather more resources",
		src: "great_axe_1",
		length: 140,
		width: 140,
		xOff: -8,
		yOff: 25,
		dmg: 35,
		spdMult: 1,
		range: 75,
		gather: 4,
		speed: 400
	}, {
		id: 3,
		type: 0,
		age: 2,
		name: "short sword",
		desc: "increased attack power but slower move speed",
		src: "sword_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 46,
		dmg: 35,
		spdMult: .85,
		range: 110,
		gather: 1,
		speed: 300
	}, {
		id: 4,
		type: 0,
		age: 8,
		name: "katana",
		desc: "greater range and damage",
		src: "samurai_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 59,
		dmg: 40,
		spdMult: .8,
		range: 118,
		gather: 1,
		speed: 300
	}, {
		id: 5,
		type: 0,
		age: 2,
		name: "polearm",
		desc: "long range melee weapon",
		src: "spear_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 53,
		dmg: 45,
		knock: .2,
		spdMult: .82,
		range: 142,
		gather: 1,
		speed: 700
	}, {
		id: 6,
		type: 0,
		age: 2,
		name: "bat",
		desc: "fast long range melee weapon",
		src: "bat_1",
		iPad: 1.3,
		length: 110,
		width: 180,
		xOff: -8,
		yOff: 53,
		dmg: 20,
		knock: .7,
		range: 110,
		gather: 1,
		speed: 300
	}, {
		id: 7,
		type: 0,
		age: 2,
		name: "daggers",
		desc: "really fast short range weapon",
		src: "dagger_1",
		iPad: .8,
		length: 110,
		width: 110,
		xOff: 18,
		yOff: 0,
		dmg: 20,
		knock: .1,
		range: 65,
		gather: 1,
		hitSlow: .1,
		spdMult: 1.13,
		speed: 100
	}, {
		id: 8,
		type: 0,
		age: 2,
		name: "stick",
		desc: "great for gathering but very weak",
		src: "stick_1",
		length: 140,
		width: 140,
		xOff: 3,
		yOff: 24,
		dmg: 1,
		spdMult: 1,
		range: 70,
		gather: 7,
		speed: 400
	}, {
		id: 9,
		type: 1,
		age: 6,
		name: "hunting bow",
		desc: "bow used for ranged combat and hunting",
		src: "bow_1",
		req: ["wood", 4],
		length: 120,
		width: 120,
		xOff: -6,
		yOff: 0,
		projectile: 0,
		spdMult: .75,
		speed: 600
	}, {
		id: 10,
		type: 1,
		age: 6,
		name: "great hammer",
		desc: "hammer used for destroying structures",
		src: "great_hammer_1",
		length: 140,
		width: 140,
		xOff: -9,
		yOff: 25,
		dmg: 10,
		spdMult: .88,
		range: 75,
		sDmg: 7.5,
		gather: 1,
		speed: 400
	}, {
		id: 11,
		type: 1,
		age: 6,
		name: "wooden shield",
		desc: "blocks projectiles and reduces melee damage",
		src: "shield_1",
		length: 120,
		width: 120,
		shield: .2,
		xOff: 6,
		yOff: 0,
		spdMult: .7
	}, {
		id: 12,
		type: 1,
		age: 8,
		name: "crossbow",
		desc: "deals more damage and has greater range",
		src: "crossbow_1",
		req: ["wood", 5],
		aboveHand: !0,
		armS: .75,
		length: 120,
		width: 120,
		xOff: -4,
		yOff: 0,
		projectile: 2,
		spdMult: .7,
		speed: 700
	}, {
		id: 13,
		type: 1,
		age: 9,
		name: "repeater crossbow",
		desc: "high firerate crossbow with reduced damage",
		src: "crossbow_2",
		req: ["wood", 10],
		aboveHand: !0,
		armS: .75,
		length: 120,
		width: 120,
		xOff: -4,
		yOff: 0,
		projectile: 3,
		spdMult: .7,
		speed: 230
	}, {
		id: 14,
		type: 1,
		age: 6,
		name: "mc grabby",
		desc: "steals resources from enemies",
		src: "grab_1",
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 53,
		dmg: 0,
		steal: 250,
		knock: .2,
		spdMult: 1.05,
		range: 125,
		gather: 0,
		speed: 700
	}, {
		id: 15,
		type: 1,
		age: 9,
		name: "musket",
		desc: "slow firerate but high damage and range",
		src: "musket_1",
		req: ["stone", 10],
		aboveHand: !0,
		rec: .35,
		armS: .6,
		hndS: .3,
		hndD: 1.6,
		length: 205,
		width: 205,
		xOff: 25,
		yOff: 0,
		projectile: 5,
		hideProjectile: !0,
		spdMult: .6,
		speed: 1500
        }, {
		id: 16,
		type: 1,
		age: 10,
		name: "By NoT_BoT",
		desc: "This mod is made by a NoT BoT. Ver 1.4.1",
		src: "shield_2",
	}], e.exports.list = [{
		group: e.exports.groups[0],
		name: "apple",
		desc: "restores 20 health when consumed",
		req: ["food", 10],
		consume: function(e) {
			return e.changeHealth(20, e)
		},
		scale: 22,
		holdOffset: 15
	}, {
		age: 3,
		group: e.exports.groups[0],
		name: "cookie",
		desc: "restores 40 health when consumed",
		req: ["food", 15],
		consume: function(e) {
			return e.changeHealth(40, e)
		},
		scale: 27,
		holdOffset: 15
	}, {
		age: 7,
		group: e.exports.groups[0],
		name: "cheese",
		desc: "restores 30 health and another 50 over 5 seconds",
		req: ["food", 25],
		consume: function(e) {
			return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -
				10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
		},
		scale: 27,
		holdOffset: 15
	}, {
		group: e.exports.groups[1],
		name: "wood wall",
		desc: "provides protection for your village",
		req: ["wood", 10],
		projDmg: !0,
		health: 380,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 3,
		group: e.exports.groups[1],
		name: "stone wall",
		desc: "provides improved protection for your village",
		req: ["stone", 25],
		health: 900,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[1],
		name: "castle wall",
		desc: "provides powerful protection for your village",
		req: ["stone", 35],
		health: 1500,
		scale: 52,
		holdOffset: 20,
		placeOffset: -5
	}, {
		group: e.exports.groups[2],
		name: "spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 20, "stone", 5],
		health: 400,
		dmg: 20,
		scale: 49,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 5,
		group: e.exports.groups[2],
		name: "greater spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 30, "stone", 10],
		health: 500,
		dmg: 35,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 9,
		group: e.exports.groups[2],
		name: "poison spikes",
		desc: "poisons enemies when they touch them",
		req: ["wood", 35, "stone", 15],
		health: 600,
		dmg: 30,
		pDmg: 5,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 9,
		group: e.exports.groups[2],
		name: "spinning spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 30, "stone", 20],
		health: 500,
		dmg: 45,
		turnSpeed: .003,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		group: e.exports.groups[3],
		name: "windmill",
		desc: "generates gold over time",
		req: ["wood", 50, "stone", 10],
		health: 400,
		pps: 1,
		turnSpeed: .0016,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 45,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 5,
		group: e.exports.groups[3],
		name: "faster windmill",
		desc: "generates more gold over time",
		req: ["wood", 60, "stone", 20],
		health: 500,
		pps: 1.5,
		turnSpeed: .0025,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 47,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 8,
		group: e.exports.groups[3],
		name: "power mill",
		desc: "generates more gold over time",
		req: ["wood", 100, "stone", 50],
		health: 800,
		pps: 2,
		turnSpeed: .005,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 47,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 5,
		group: e.exports.groups[4],
		type: 2,
		name: "mine",
		desc: "allows you to mine stone",
		req: ["wood", 20, "stone", 100],
		iconLineMult: 12,
		scale: 65,
		holdOffset: 20,
		placeOffset: 0
	}, {
		age: 5,
		group: e.exports.groups[11],
		type: 0,
		name: "sapling",
		desc: "allows you to farm wood",
		req: ["wood", 150],
		iconLineMult: 12,
		colDiv: .5,
		scale: 110,
		holdOffset: 50,
		placeOffset: -15
	}, {
		age: 4,
		group: e.exports.groups[5],
		name: "pit trap",
		desc: "pit that traps enemies if they walk over it",
		req: ["wood", 30, "stone", 30],
		trap: !0,
		ignoreCollision: !0,
		hideFromEnemy: !0,
		health: 500,
		colDiv: .2,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 4,
		group: e.exports.groups[6],
		name: "boost pad",
		desc: "provides boost when stepped on",
		req: ["stone", 20, "wood", 5],
		ignoreCollision: !0,
		boostSpeed: 1.5,
		health: 150,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[7],
		doUpdate: !0,
		name: "turret",
		desc: "defensive structure that shoots at enemies",
		req: ["wood", 200, "stone", 150],
		health: 800,
		projectile: 1,
		shootRange: 700,
		shootRate: 2200,
		scale: 43,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[8],
		name: "platform",
		desc: "platform to shoot over walls and cross over water",
		req: ["wood", 20],
		ignoreCollision: !0,
		zIndex: 1,
		health: 300,
		scale: 43,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[9],
		name: "healing pad",
		desc: "standing on it will slowly heal you",
		req: ["wood", 30, "food", 10],
		ignoreCollision: !0,
		healCol: 15,
		health: 400,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 9,
		group: e.exports.groups[10],
		name: "spawn pad",
		desc: "you will spawn here when you die but it will dissapear",
		req: ["wood", 100, "stone", 100],
		health: 400,
		ignoreCollision: !0,
		spawnPoint: !0,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[12],
		name: "blocker",
		desc: "blocks building in radius",
		req: ["wood", 30, "stone", 25],
		ignoreCollision: !0,
		blocker: 300,
		health: 400,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		group: e.exports.groups[13],
		name: "teleporter",
		desc: "teleports you to a random point on the map",
		req: ["wood", 60, "stone", 60],
		ignoreCollision: !0,
		teleport: !0,
		health: 200,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}];
	for (var n = 0; n < e.exports.list.length; ++n) e.exports.list[n].id = n, e.exports
		.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre)
}, function(e, t) {
	e.exports = {}
}, function(e, t) {
	var n = Math.floor,
		i = Math.abs,
		r = Math.cos,
		s = Math.sin,
		a = (Math.pow, Math.sqrt);
	e.exports = function(e, t, o, c, l, h) {
		var u, f;
		this.objects = t, this.grids = {}, this.updateObjects = [];
		var d = c.mapScale / c.colGrid;
		this.setObjectGrids = function(e) {
			for (var t = Math.min(c.mapScale, Math.max(0, e.x)), n = Math.min(c.mapScale,
					Math.max(0, e.y)), i = 0; i < c.colGrid; ++i) {
				u = i * d;
				for (var r = 0; r < c.colGrid; ++r) f = r * d, t + e.scale >= u && t -
					e.scale <= u + d && n + e.scale >= f && n - e.scale <= f + d && (this.grids[
						i + "_" + r] || (this.grids[i + "_" + r] = []), this.grids[i + "_" +
						r].push(e), e.gridLocations.push(i + "_" + r))
			}
		}, this.removeObjGrid = function(e) {
			for (var t, n = 0; n < e.gridLocations.length; ++n)(t = this.grids[e.gridLocations[
				n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1)
		}, this.disableObj = function(e) {
			if (e.active = !1, h) {
				e.owner && e.pps && (e.owner.pps -= e.pps), this.removeObjGrid(e);
				var t = this.updateObjects.indexOf(e);
				t >= 0 && this.updateObjects.splice(t, 1)
			}
		}, this.hitObj = function(e, t) {
			for (var n = 0; n < l.length; ++n) l[n].active && (e.sentTo[l[n].id] &&
				(e.active ? l[n].canSee(e) && h.send(l[n].id, "8", o.fixTo(t, 1), e.sid) :
					h.send(l[n].id, "12", e.sid)), e.active || e.owner != l[n] || l[n].changeItemCount(
					e.group.id, -1))
		};
		var p, g, m = [];
		this.getGridArrays = function(e, t, i) {
			u = n(e / d), f = n(t / d), m.length = 0;
			try {
				this.grids[u + "_" + f] && m.push(this.grids[u + "_" + f]), e + i >= (u +
						1) * d && ((p = this.grids[u + 1 + "_" + f]) && m.push(p), f && t - i <=
						f * d ? (p = this.grids[u + 1 + "_" + (f - 1)]) && m.push(p) : t + i >=
						(f + 1) * d && (p = this.grids[u + 1 + "_" + (f + 1)]) && m.push(p)),
					u && e - i <= u * d && ((p = this.grids[u - 1 + "_" + f]) && m.push(p),
						f && t - i <= f * d ? (p = this.grids[u - 1 + "_" + (f - 1)]) && m.push(
							p) : t + i >= (f + 1) * d && (p = this.grids[u - 1 + "_" + (f + 1)]) &&
						m.push(p)), t + i >= (f + 1) * d && (p = this.grids[u + "_" + (f + 1)]) &&
					m.push(p), f && t - i <= f * d && (p = this.grids[u + "_" + (f - 1)]) &&
					m.push(p)
			} catch (e) {}
			return m
		}, this.add = function(n, i, r, s, a, o, c, l, u) {
			g = null;
			for (var f = 0; f < t.length; ++f)
				if (t[f].sid == n) {
					g = t[f];
					break
				}
			if (!g)
				for (f = 0; f < t.length; ++f)
					if (!t[f].active) {
						g = t[f];
						break
					}
			g || (g = new e(n), t.push(g)), l && (g.sid = n), g.init(i, r, s, a, o,
				c, u), h && (this.setObjectGrids(g), g.doUpdate && this.updateObjects.push(
				g))
		}, this.disableBySid = function(e) {
			for (var n = 0; n < t.length; ++n)
				if (t[n].sid == e) {
					this.disableObj(t[n]);
					break
				}
		}, this.removeAllItems = function(e, n) {
			for (var i = 0; i < t.length; ++i) t[i].active && t[i].owner && t[i].owner
				.sid == e && this.disableObj(t[i]);
			n && n.broadcast("13", e)
		}, this.fetchSpawnObj = function(e) {
			for (var n = null, i = 0; i < t.length; ++i)
				if ((g = t[i]).active && g.owner && g.owner.sid == e && g.spawnPoint) {
					n = [g.x, g.y], this.disableObj(g), h.broadcast("12", g.sid), g.owner &&
						g.owner.changeItemCount(g.group.id, -1);
					break
				}
			return n
		}, this.checkItemLocation = function(e, n, i, r, s, a, l) {
			for (var h = 0; h < t.length; ++h) {
				var u = t[h].blocker ? t[h].blocker : t[h].getScale(r, t[h].isItem);
				if (t[h].active && o.getDistance(e, n, t[h].x, t[h].y) < i + u) return !
					1
			}
			return !(!a && 18 != s && n >= c.mapScale / 2 - c.riverWidth / 2 && n <=
				c.mapScale / 2 + c.riverWidth / 2)
		}, this.addProjectile = function(e, t, n, i, r) {
			for (var s, a = items.projectiles[r], c = 0; c < projectiles.length; ++c)
				if (!projectiles[c].active) {
					s = projectiles[c];
					break
				}
			s || (s = new Projectile(l, o), projectiles.push(s)), s.init(r, e, t, n,
				a.speed, i, a.scale)
		}, this.checkCollision = function(e, t, n) {
			n = n || 1;
			var l = e.x - t.x,
				h = e.y - t.y,
				u = e.scale + t.scale;
			if (i(l) <= u || i(h) <= u) {
				u = e.scale + (t.getScale ? t.getScale() : t.scale);
				var f = a(l * l + h * h) - u;
				if (f <= 0) {
					if (t.ignoreCollision) !t.trap || e.noTrap || t.owner == e || t.owner &&
						t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n *
							t.boostSpeed * (t.weightM || 1) * r(t.dir), e.yVel += n * t.boostSpeed *
							(t.weightM || 1) * s(t.dir)) : t.healCol ? e.healCol = t.healCol : t
						.teleport && (e.x = o.randInt(0, c.mapScale), e.y = o.randInt(0, c.mapScale)) :
						(e.lockMove = !0, t.hideFromEnemy = !1);
					else {
						var d = o.getDirection(e.x, e.y, t.x, t.y);
						if (o.getDistance(e.x, e.y, t.x, t.y), t.isPlayer ? (f = -1 * f / 2,
								e.x += f * r(d), e.y += f * s(d), t.x -= f * r(d), t.y -= f * s(d)) :
							(e.x = t.x + u * r(d), e.y = t.y + u * s(d), e.xVel *= .75, e.yVel *=
								.75), t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner
								.team != e.team)) {
							e.changeHealth(-t.dmg, t.owner, t);
							var p = 1.5 * (t.weightM || 1);
							e.xVel += p * r(d), e.yVel += p * s(d), !t.pDmg || e.skin && e.skin.poisonRes ||
								(e.dmgOverTime.dmg = t.pDmg, e.dmgOverTime.time = 5, e.dmgOverTime.doer =
									t.owner), e.colDmg && t.health && (t.changeHealth(-e.colDmg) &&
									this.disableObj(t), this.hitObj(t, o.getDirection(e.x, e.y, t.x, t
										.y)))
						}
					}
					return t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0
				}
			}
			return !1
		}
	}
}, function(e, t, n) {
	var i = new(n(49));
	i.addWords("jew", "black", "baby", "child", "white", "porn", "pedo", "trump",
		"clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch",
		"poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy",
		"rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig",
		"fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi",
		"hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick",
		"nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick",
		"condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny",
		"sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore",
		"whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord",
		"d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio",
		"vries", "asa");
	var r = Math.abs,
		s = Math.cos,
		a = Math.sin,
		o = Math.pow,
		c = Math.sqrt;
	e.exports = function(e, t, n, l, h, u, f, d, p, g, m, y, k, v) {
		this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex =
			0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
		for (var w = 0; w < m.length; ++w) m[w].price <= 0 && (this.tails[m[w].id] =
			1);
		for (this.skins = {}, w = 0; w < g.length; ++w) g[w].price <= 0 && (this.skins[
			g[w].id] = 1);
		this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this
			.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0,
			this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn =
			function(e) {
				this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1,
					this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0,
					this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather =
					0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -
					1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0,
					this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge =
					2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0,
					this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus =
					0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this
					.health = this.maxHealth, this.scale = n.playerScale, this.speed = n.playerSpeed,
					this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10],
					this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}
			}, this.resetMoveDir = function() {
				this.moveDir = void 0
			}, this.resetResources = function(e) {
				for (var t = 0; t < n.resourceTypes.length; ++t) this[n.resourceTypes[t]] =
					e ? 100 : 0
			}, this.addItem = function(e) {
				var t = p.list[e];
				if (t) {
					for (var n = 0; n < this.items.length; ++n)
						if (p.list[this.items[n]].group == t.group) return this.buildIndex ==
							this.items[n] && (this.buildIndex = e), this.items[n] = e, !0;
					return this.items.push(e), !0
				}
				return !1
			}, this.setUserData = function(e) {
				if (e) {
					this.name = "unknown";
					var t = e.name + "",
						r = !1,
						s = (t = (t = (t = (t = t.slice(0, n.maxNameLength)).replace(
							/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase()
						.replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g,
							"s");
					for (var a of i.list)
						if (-1 != s.indexOf(a)) {
							r = !0;
							break
						}
					t.length > 0 && !r && (this.name = t), this.skinColor = 0, n.skinColors[
						e.skin] && (this.skinColor = e.skin)
				}
			}, this.getData = function() {
				return [this.id, this.sid, this.name, l.fixTo(this.x, 2), l.fixTo(this.y,
						2), l.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale,
					this.skinColor
				]
			}, this.setData = function(e) {
				this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y =
					e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale =
					e[8], this.skinColor = e[9]
			};
		var b = 0;
		this.update = function(e) {
			if (this.alive) {
				if (this.shameTimer > 0 && (this.shameTimer -= e, this.shameTimer <= 0 &&
						(this.shameTimer = 0, this.shameCount = 0)), (b -= e) <= 0) {
					var t = (this.skin && this.skin.healthRegen ? this.skin.healthRegen :
						0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
					t && this.changeHealth(t, this), this.dmgOverTime.dmg && (this.changeHealth(-
								this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -=
							1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol &&
						this.changeHealth(this.healCol, this), b = 1e3
				}
				if (this.alive) {
					if (this.slowMult < 1 && (this.slowMult += 8e-4 * e, this.slowMult > 1 &&
							(this.slowMult = 1)), this.noMovTimer += e, (this.xVel || this.yVel) &&
						(this.noMovTimer = 0), this.lockMove) this.xVel = 0, this.yVel = 0;
					else {
						var i = (this.buildIndex >= 0 ? .5 : 1) * (p.weapons[this.weaponIndex]
							.spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail &&
							this.tail.spdMult || 1) * (this.y <= n.snowBiomeTop ? this.skin &&
							this.skin.coldM ? 1 : n.snowSpeed : 1) * this.slowMult;
						!this.zIndex && this.y >= n.mapScale / 2 - n.riverWidth / 2 && this.y <=
							n.mapScale / 2 + n.riverWidth / 2 && (this.skin && this.skin.watrImm ?
								(i *= .75, this.xVel += .4 * n.waterCurrent * e) : (i *= .33, this.xVel +=
									n.waterCurrent * e));
						var r = null != this.moveDir ? s(this.moveDir) : 0,
							d = null != this.moveDir ? a(this.moveDir) : 0,
							g = c(r * r + d * d);
						0 != g && (r /= g, d /= g), r && (this.xVel += r * this.speed * i * e),
							d && (this.yVel += d * this.speed * i * e)
					}
					var m;
					this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
					for (var y = l.getDistance(0, 0, this.xVel * e, this.yVel * e), k =
							Math.min(4, Math.max(1, Math.round(y / 40))), v = 1 / k, w = 0; w <
						k; ++w) {
						this.xVel && (this.x += this.xVel * e * v), this.yVel && (this.y +=
							this.yVel * e * v), m = u.getGridArrays(this.x, this.y, this.scale);
						for (var x = 0; x < m.length; ++x)
							for (var S = 0; S < m[x].length; ++S) m[x][S].active && u.checkCollision(
								this, m[x][S], v)
					}
					for (w = (I = f.indexOf(this)) + 1; w < f.length; ++w) f[w] != this &&
						f[w].alive && u.checkCollision(this, f[w]);
					if (this.xVel && (this.xVel *= o(n.playerDecel, e), this.xVel <= .01 &&
							this.xVel >= -.01 && (this.xVel = 0)), this.yVel && (this.yVel *= o(
							n.playerDecel, e), this.yVel <= .01 && this.yVel >= -.01 && (this.yVel =
							0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale >
						n.mapScale && (this.x = n.mapScale - this.scale), this.y - this.scale <
						0 ? this.y = this.scale : this.y + this.scale > n.mapScale && (this.y =
							n.mapScale - this.scale), this.buildIndex < 0)
						if (this.reloads[this.weaponIndex] > 0) this.reloads[this.weaponIndex] -=
							e, this.gathering = this.mouseState;
						else if (this.gathering || this.autoGather) {
						var T = !0;
						if (null != p.weapons[this.weaponIndex].gather) this.gather(f);
						else if (null != p.weapons[this.weaponIndex].projectile && this.hasRes(
								p.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
							this.useRes(p.weapons[this.weaponIndex], this.skin ? this.skin.projCost :
								0), this.noMovTimer = 0;
							var I = p.weapons[this.weaponIndex].projectile,
								E = 2 * this.scale,
								M = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
							p.weapons[this.weaponIndex].rec && (this.xVel -= p.weapons[this.weaponIndex]
								.rec * s(this.dir), this.yVel -= p.weapons[this.weaponIndex].rec *
								a(this.dir)), h.addProjectile(this.x + E * s(this.dir), this.y + E *
								a(this.dir), this.dir, p.projectiles[I].range * M, p.projectiles[I]
								.speed * M, I, this, null, this.zIndex)
						} else T = !1;
						this.gathering = this.mouseState, T && (this.reloads[this.weaponIndex] =
							p.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd ||
								1))
					}
				}
			}
		}, this.addWeaponXP = function(e) {
			this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0),
				this.weaponXP[this.weaponIndex] += e
		}, this.earnXP = function(e) {
			this.age < n.maxAge && (this.XP += e, this.XP >= this.maxXP ? (this.age <
				n.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP =
				this.maxXP, this.upgradePoints++, y.send(this.id, "16", this.upgradePoints,
					this.upgrAge), y.send(this.id, "15", this.XP, l.fixTo(this.maxXP, 1),
					this.age)) : y.send(this.id, "15", this.XP))
		}, this.changeHealth = function(e, t) {
			if (e > 0 && this.health >= this.maxHealth) return !1;
			e < 0 && this.skin && (e *= this.skin.dmgMult || 1), e < 0 && this.tail &&
				(e *= this.tail.dmgMult || 1), e < 0 && (this.hitTime = Date.now()),
				this.health += e, this.health > this.maxHealth && (e -= this.health -
					this.maxHealth, this.health = this.maxHealth), this.health <= 0 &&
				this.kill(t);
			for (var n = 0; n < f.length; ++n) this.sentTo[f[n].id] && y.send(f[n].id,
				"h", this.sid, Math.round(this.health));
			return !t || !t.canSee(this) || t == this && e < 0 || y.send(t.id, "t",
				Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0
		}, this.kill = function(e) {
			e && e.alive && (e.kills++, e.skin && e.skin.goldSteal ? k(e, Math.round(
					this.points / 2)) : k(e, Math.round(100 * this.age * (e.skin && e.skin
					.kScrM ? e.skin.kScrM : 1))), y.send(e.id, "9", "kills", e.kills, 1)),
				this.alive = !1, y.send(this.id, "11"), v()
		}, this.addResource = function(e, t, i) {
			!i && t > 0 && this.addWeaponXP(t), 3 == e ? k(this, t, !0) : (this[n.resourceTypes[
				e]] += t, y.send(this.id, "9", n.resourceTypes[e], this[n.resourceTypes[
				e]], 1))
		}, this.changeItemCount = function(e, t) {
			this.itemCounts[e] = this.itemCounts[e] || 0, this.itemCounts[e] += t, y
				.send(this.id, "14", e, this.itemCounts[e])
		}, this.buildItem = function(e) {
			var t = this.scale + e.scale + (e.placeOffset || 0),
				n = this.x + t * s(this.dir),
				i = this.y + t * a(this.dir);
			if (this.canBuild(e) && !(e.consume && this.skin && this.skin.noEat) &&
				(e.consume || u.checkItemLocation(n, i, e.scale, .6, e.id, !1, this))) {
				var r = !1;
				if (e.consume) {
					if (this.hitTime) {
						var o = Date.now() - this.hitTime;
						this.hitTime = 0, o <= 120 ? (this.shameCount++, this.shameCount >= 8 &&
							(this.shameTimer = 3e4, this.shameCount = 0)) : (this.shameCount -=
							2, this.shameCount <= 0 && (this.shameCount = 0))
					}
					this.shameTimer <= 0 && (r = e.consume(this))
				} else r = !0, e.group.limit && this.changeItemCount(e.group.id, 1), e.pps &&
					(this.pps += e.pps), u.add(u.objects.length, n, i, this.dir, e.scale,
						e.type, e, !1, this);
				r && (this.useRes(e), this.buildIndex = -1)
			}
		}, this.hasRes = function(e, t) {
			for (var n = 0; n < e.req.length;) {
				if (this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1))) return !1;
				n += 2
			}
			return !0
		}, this.useRes = function(e, t) {
			if (!n.inSandbox)
				for (var i = 0; i < e.req.length;) this.addResource(n.resourceTypes.indexOf(
					e.req[i]), -Math.round(e.req[i + 1] * (t || 1))), i += 2
		}, this.canBuild = function(e) {
			return !!n.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >=
				e.group.limit) && this.hasRes(e)
		}, this.gather = function() {
			this.noMovTimer = 0, this.slowMult -= p.weapons[this.weaponIndex].hitSlow ||
				.3, this.slowMult < 0 && (this.slowMult = 0);
			for (var e, t, i, r = n.fetchVariant(this), o = r.poison, c = r.val, h = {},
					g = u.getGridArrays(this.x, this.y, p.weapons[this.weaponIndex].range),
					m = 0; m < g.length; ++m)
				for (var y = 0; y < g[m].length; ++y)
					if ((t = g[m][y]).active && !t.dontGather && !h[t.sid] && t.visibleToPlayer(
							this) && l.getDistance(this.x, this.y, t.x, t.y) - t.scale <= p.weapons[
							this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x,
							this.y), l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
						if (h[t.sid] = 1, t.health) {
							if (t.changeHealth(-p.weapons[this.weaponIndex].dmg * c * (p.weapons[
									this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ?
									this.skin.bDmg : 1), this)) {
								for (var k = 0; k < t.req.length;) this.addResource(n.resourceTypes
									.indexOf(t.req[k]), t.req[k + 1]), k += 2;
								u.disableObj(t)
							}
						} else {
							this.earnXP(4 * p.weapons[this.weaponIndex].gather);
							var v = p.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
							this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(
								t.type, v)
						}
						i = !0, u.hitObj(t, e)
					}
			for (y = 0; y < f.length + d.length; ++y)
				if ((t = f[y] || d[y - f.length]) != this && t.alive && (!t.team || t.team !=
						this.team) && l.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <=
					p.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y,
						this.x, this.y), l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
					var w = p.weapons[this.weaponIndex].steal;
					w && t.addResource && (w = Math.min(t.points || 0, w), this.addResource(
						3, w), t.addResource(3, -w));
					var b = c;
					null != t.weaponIndex && p.weapons[t.weaponIndex].shield && l.getAngleDist(
						e + Math.PI, t.dir) <= n.shieldAngle && (b = p.weapons[t.weaponIndex]
						.shield);
					var x = p.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ?
							this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail
							.dmgMultO : 1),
						S = .3 * (t.weightM || 1) + (p.weapons[this.weaponIndex].knock || 0);
					t.xVel += S * s(e), t.yVel += S * a(e), this.skin && this.skin.healD &&
						this.changeHealth(x * b * this.skin.healD, this), this.tail && this.tail
						.healD && this.changeHealth(x * b * this.tail.healD, this), t.skin &&
						t.skin.dmg && 1 == b && this.changeHealth(-x * t.skin.dmg, t), t.tail &&
						t.tail.dmg && 1 == b && this.changeHealth(-x * t.tail.dmg, t), !(t.dmgOverTime &&
							this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (
							t.dmgOverTime.dmg = this.skin.poisonDmg, t.dmgOverTime.time = this.skin
							.poisonTime || 1, t.dmgOverTime.doer = this), !t.dmgOverTime || !o ||
						t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = 5, t.dmgOverTime.time =
							5, t.dmgOverTime.doer = this), t.skin && t.skin.dmgK && (this.xVel -=
							t.skin.dmgK * s(e), this.yVel -= t.skin.dmgK * a(e)), t.changeHealth(-
							x * b, this, this)
				}
			this.sendAnimation(i ? 1 : 0)
		}, this.sendAnimation = function(e) {
			for (var t = 0; t < f.length; ++t) this.sentTo[f[t].id] && this.canSee(f[
				t]) && y.send(f[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex)
		};
		var x = 0,
			S = 0;
		this.animate = function(e) {
			this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime =
				0, this.dirPlus = 0, x = 0, S = 0) : 0 == S ? (x += e / (this.animSpeed *
				n.hitReturnRatio), this.dirPlus = l.lerp(0, this.targetAngle, Math.min(
				1, x)), x >= 1 && (x = 1, S = 1)) : (x -= e / (this.animSpeed * (1 -
				n.hitReturnRatio)), this.dirPlus = l.lerp(0, this.targetAngle, Math.max(
				0, x))))
		}, this.startAnim = function(e, t) {
			this.animTime = this.animSpeed = p.weapons[t].speed, this.targetAngle =
				e ? -n.hitAngle : -Math.PI, x = 0, S = 0
		}, this.canSee = function(e) {
			if (!e) return !1;
			if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer)
				return !1;
			var t = r(e.x - this.x) - e.scale,
				i = r(e.y - this.y) - e.scale;
			return t <= n.maxScreenWidth / 2 * 1.3 && i <= n.maxScreenHeight / 2 *
				1.3
		}
	}
}, function(e, t, n) {
	const i = n(50).words,
		r = n(51).array;
	e.exports = class {
		constructor(e = {}) {
			Object.assign(this, {
				list: e.emptyList && [] || Array.prototype.concat.apply(i, [r, e.list || []]),
				exclude: e.exclude || [],
				placeHolder: e.placeHolder || "*",
				regex: e.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
				replaceRegex: e.replaceRegex || /\w/g
			})
		}
		isProfane(e) {
			return this.list.filter(t => {
				const n = new RegExp(`\\b${t.replace(/(\W)/g,"\\$1")}\\b`, "gi");
				return !this.exclude.includes(t.toLowerCase()) && n.test(e)
			}).length > 0 || !1
		}
		replaceWord(e) {
			return e.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder)
		}
		clean(e) {
			return e.split(/\b/).map(e => this.isProfane(e) ? this.replaceWord(e) :
				e).join("")
		}
		addWords() {
			let e = Array.from(arguments);
			this.list.push(...e), e.map(e => e.toLowerCase()).forEach(e => {
				this.exclude.includes(e) && this.exclude.splice(this.exclude.indexOf(
					e), 1)
			})
		}
		removeWords() {
			this.exclude.push(...Array.from(arguments).map(e => e.toLowerCase()))
		}
	}
}, function(e) {
	e.exports = {
		words: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass",
			"Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes",
			"assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards",
			"bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches",
			"Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k",
			"Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock",
			"cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap",
			"cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo",
			"dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics",
			"dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t",
			"faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz",
			"faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin",
			"fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker",
			"Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k",
			"God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore",
			"jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz",
			"knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian",
			"Lipshits", "Lipshitz", "masochist", "masokist", "massterbait",
			"masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates",
			"Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker",
			"Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah",
			"Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah",
			"Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt",
			"nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm",
			"orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy",
			"paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus",
			"peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus",
			"Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak",
			"Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke",
			"puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir",
			"recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing",
			"semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter",
			"sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt",
			"Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey",
			"skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz",
			"son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina",
			"vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re",
			"whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit",
			"arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch",
			"bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa",
			"clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass",
			"fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch",
			"l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3",
			"motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack",
			"phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale",
			"shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs",
			"teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank",
			"whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik",
			"andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*",
			"breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*",
			"cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka",
			"ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo",
			"fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker",
			"foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena",
			"h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui",
			"injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk",
			"kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon",
			"masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie",
			"mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*",
			"perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda",
			"poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule",
			"puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*",
			"schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute",
			"shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic",
			"spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat",
			"vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"
		]
	}
}, function(e, t, n) {
	e.exports = {
		object: n(52),
		array: n(53),
		regex: n(54)
	}
}, function(e, t) {
	e.exports = {
		"4r5e": 1,
		"5h1t": 1,
		"5hit": 1,
		a55: 1,
		anal: 1,
		anus: 1,
		ar5e: 1,
		arrse: 1,
		arse: 1,
		ass: 1,
		"ass-fucker": 1,
		asses: 1,
		assfucker: 1,
		assfukka: 1,
		asshole: 1,
		assholes: 1,
		asswhole: 1,
		a_s_s: 1,
		"b!tch": 1,
		b00bs: 1,
		b17ch: 1,
		b1tch: 1,
		ballbag: 1,
		balls: 1,
		ballsack: 1,
		bastard: 1,
		beastial: 1,
		beastiality: 1,
		bellend: 1,
		bestial: 1,
		bestiality: 1,
		"bi+ch": 1,
		biatch: 1,
		bitch: 1,
		bitcher: 1,
		bitchers: 1,
		bitches: 1,
		bitchin: 1,
		bitching: 1,
		bloody: 1,
		"blow job": 1,
		blowjob: 1,
		blowjobs: 1,
		boiolas: 1,
		bollock: 1,
		bollok: 1,
		boner: 1,
		boob: 1,
		boobs: 1,
		booobs: 1,
		boooobs: 1,
		booooobs: 1,
		booooooobs: 1,
		breasts: 1,
		buceta: 1,
		bugger: 1,
		bum: 1,
		"bunny fucker": 1,
		butt: 1,
		butthole: 1,
		buttmuch: 1,
		buttplug: 1,
		c0ck: 1,
		c0cksucker: 1,
		"carpet muncher": 1,
		cawk: 1,
		chink: 1,
		cipa: 1,
		cl1t: 1,
		clit: 1,
		clitoris: 1,
		clits: 1,
		cnut: 1,
		cock: 1,
		"cock-sucker": 1,
		cockface: 1,
		cockhead: 1,
		cockmunch: 1,
		cockmuncher: 1,
		cocks: 1,
		cocksuck: 1,
		cocksucked: 1,
		cocksucker: 1,
		cocksucking: 1,
		cocksucks: 1,
		cocksuka: 1,
		cocksukka: 1,
		cok: 1,
		cokmuncher: 1,
		coksucka: 1,
		coon: 1,
		cox: 1,
		crap: 1,
		cum: 1,
		cummer: 1,
		cumming: 1,
		cums: 1,
		cumshot: 1,
		cunilingus: 1,
		cunillingus: 1,
		cunnilingus: 1,
		cunt: 1,
		cuntlick: 1,
		cuntlicker: 1,
		cuntlicking: 1,
		cunts: 1,
		cyalis: 1,
		cyberfuc: 1,
		cyberfuck: 1,
		cyberfucked: 1,
		cyberfucker: 1,
		cyberfuckers: 1,
		cyberfucking: 1,
		d1ck: 1,
		damn: 1,
		dick: 1,
		dickhead: 1,
		dildo: 1,
		dildos: 1,
		dink: 1,
		dinks: 1,
		dirsa: 1,
		dlck: 1,
		"dog-fucker": 1,
		doggin: 1,
		dogging: 1,
		donkeyribber: 1,
		doosh: 1,
		duche: 1,
		dyke: 1,
		ejaculate: 1,
		ejaculated: 1,
		ejaculates: 1,
		ejaculating: 1,
		ejaculatings: 1,
		ejaculation: 1,
		ejakulate: 1,
		"f u c k": 1,
		"f u c k e r": 1,
		f4nny: 1,
		fag: 1,
		fagging: 1,
		faggitt: 1,
		faggot: 1,
		faggs: 1,
		fagot: 1,
		fagots: 1,
		fags: 1,
		fanny: 1,
		fannyflaps: 1,
		fannyfucker: 1,
		fanyy: 1,
		fatass: 1,
		fcuk: 1,
		fcuker: 1,
		fcuking: 1,
		feck: 1,
		fecker: 1,
		felching: 1,
		fellate: 1,
		fellatio: 1,
		fingerfuck: 1,
		fingerfucked: 1,
		fingerfucker: 1,
		fingerfuckers: 1,
		fingerfucking: 1,
		fingerfucks: 1,
		fistfuck: 1,
		fistfucked: 1,
		fistfucker: 1,
		fistfuckers: 1,
		fistfucking: 1,
		fistfuckings: 1,
		fistfucks: 1,
		flange: 1,
		fook: 1,
		fooker: 1,
		fuck: 1,
		fucka: 1,
		fucked: 1,
		fucker: 1,
		fuckers: 1,
		fuckhead: 1,
		fuckheads: 1,
		fuckin: 1,
		fucking: 1,
		fuckings: 1,
		fuckingshitmotherfucker: 1,
		fuckme: 1,
		fucks: 1,
		fuckwhit: 1,
		fuckwit: 1,
		"fudge packer": 1,
		fudgepacker: 1,
		fuk: 1,
		fuker: 1,
		fukker: 1,
		fukkin: 1,
		fuks: 1,
		fukwhit: 1,
		fukwit: 1,
		fux: 1,
		fux0r: 1,
		f_u_c_k: 1,
		gangbang: 1,
		gangbanged: 1,
		gangbangs: 1,
		gaylord: 1,
		gaysex: 1,
		goatse: 1,
		God: 1,
		"god-dam": 1,
		"god-damned": 1,
		goddamn: 1,
		goddamned: 1,
		hardcoresex: 1,
		hell: 1,
		heshe: 1,
		hoar: 1,
		hoare: 1,
		hoer: 1,
		homo: 1,
		hore: 1,
		horniest: 1,
		horny: 1,
		hotsex: 1,
		"jack-off": 1,
		jackoff: 1,
		jap: 1,
		"jerk-off": 1,
		jism: 1,
		jiz: 1,
		jizm: 1,
		jizz: 1,
		kawk: 1,
		knob: 1,
		knobead: 1,
		knobed: 1,
		knobend: 1,
		knobhead: 1,
		knobjocky: 1,
		knobjokey: 1,
		kock: 1,
		kondum: 1,
		kondums: 1,
		kum: 1,
		kummer: 1,
		kumming: 1,
		kums: 1,
		kunilingus: 1,
		"l3i+ch": 1,
		l3itch: 1,
		labia: 1,
		lust: 1,
		lusting: 1,
		m0f0: 1,
		m0fo: 1,
		m45terbate: 1,
		ma5terb8: 1,
		ma5terbate: 1,
		masochist: 1,
		"master-bate": 1,
		masterb8: 1,
		"masterbat*": 1,
		masterbat3: 1,
		masterbate: 1,
		masterbation: 1,
		masterbations: 1,
		masturbate: 1,
		"mo-fo": 1,
		mof0: 1,
		mofo: 1,
		mothafuck: 1,
		mothafucka: 1,
		mothafuckas: 1,
		mothafuckaz: 1,
		mothafucked: 1,
		mothafucker: 1,
		mothafuckers: 1,
		mothafuckin: 1,
		mothafucking: 1,
		mothafuckings: 1,
		mothafucks: 1,
		"mother fucker": 1,
		motherfuck: 1,
		motherfucked: 1,
		motherfucker: 1,
		motherfuckers: 1,
		motherfuckin: 1,
		motherfucking: 1,
		motherfuckings: 1,
		motherfuckka: 1,
		motherfucks: 1,
		muff: 1,
		mutha: 1,
		muthafecker: 1,
		muthafuckker: 1,
		muther: 1,
		mutherfucker: 1,
		n1gga: 1,
		n1gger: 1,
		nazi: 1,
		nigg3r: 1,
		nigg4h: 1,
		nigga: 1,
		niggah: 1,
		niggas: 1,
		niggaz: 1,
		nigger: 1,
		niggers: 1,
		nob: 1,
		"nob jokey": 1,
		nobhead: 1,
		nobjocky: 1,
		nobjokey: 1,
		numbnuts: 1,
		nutsack: 1,
		orgasim: 1,
		orgasims: 1,
		orgasm: 1,
		orgasms: 1,
		p0rn: 1,
		pawn: 1,
		pecker: 1,
		penis: 1,
		penisfucker: 1,
		phonesex: 1,
		phuck: 1,
		phuk: 1,
		phuked: 1,
		phuking: 1,
		phukked: 1,
		phukking: 1,
		phuks: 1,
		phuq: 1,
		pigfucker: 1,
		pimpis: 1,
		piss: 1,
		pissed: 1,
		pisser: 1,
		pissers: 1,
		pisses: 1,
		pissflaps: 1,
		pissin: 1,
		pissing: 1,
		pissoff: 1,
		poop: 1,
		porn: 1,
		porno: 1,
		pornography: 1,
		pornos: 1,
		prick: 1,
		pricks: 1,
		pron: 1,
		pube: 1,
		pusse: 1,
		pussi: 1,
		pussies: 1,
		pussy: 1,
		pussys: 1,
		rectum: 1,
		retard: 1,
		rimjaw: 1,
		rimming: 1,
		"s hit": 1,
		"s.o.b.": 1,
		sadist: 1,
		schlong: 1,
		screwing: 1,
		scroat: 1,
		scrote: 1,
		scrotum: 1,
		semen: 1,
		sex: 1,
		"sh!+": 1,
		"sh!t": 1,
		sh1t: 1,
		shag: 1,
		shagger: 1,
		shaggin: 1,
		shagging: 1,
		shemale: 1,
		"shi+": 1,
		shit: 1,
		shitdick: 1,
		shite: 1,
		shited: 1,
		shitey: 1,
		shitfuck: 1,
		shitfull: 1,
		shithead: 1,
		shiting: 1,
		shitings: 1,
		shits: 1,
		shitted: 1,
		shitter: 1,
		shitters: 1,
		shitting: 1,
		shittings: 1,
		shitty: 1,
		skank: 1,
		slut: 1,
		sluts: 1,
		smegma: 1,
		smut: 1,
		snatch: 1,
		"son-of-a-bitch": 1,
		spac: 1,
		spunk: 1,
		s_h_i_t: 1,
		t1tt1e5: 1,
		t1tties: 1,
		teets: 1,
		teez: 1,
		testical: 1,
		testicle: 1,
		tit: 1,
		titfuck: 1,
		tits: 1,
		titt: 1,
		tittie5: 1,
		tittiefucker: 1,
		titties: 1,
		tittyfuck: 1,
		tittywank: 1,
		titwank: 1,
		tosser: 1,
		turd: 1,
		tw4t: 1,
		twat: 1,
		twathead: 1,
		twatty: 1,
		twunt: 1,
		twunter: 1,
		v14gra: 1,
		v1gra: 1,
		vagina: 1,
		viagra: 1,
		vulva: 1,
		w00se: 1,
		wang: 1,
		wank: 1,
		wanker: 1,
		wanky: 1,
		whoar: 1,
		whore: 1,
		willies: 1,
		willy: 1,
		xrated: 1,
		xxx: 1
	}
}, function(e, t) {
	e.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse",
		"arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole",
		"assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch",
		"ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality",
		"bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher",
		"bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job",
		"blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob",
		"boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts",
		"buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch",
		"buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink",
		"cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker",
		"cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck",
		"cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka",
		"cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum",
		"cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus",
		"cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts",
		"cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker",
		"cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead",
		"dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker",
		"doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate",
		"ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation",
		"ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging",
		"faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny",
		"fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker",
		"fcuking", "feck", "fecker", "felching", "fellate", "fellatio",
		"fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers",
		"fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker",
		"fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange",
		"fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers",
		"fuckhead", "fuckheads", "fuckin", "fucking", "fuckings",
		"fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit",
		"fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks",
		"fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged",
		"gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned",
		"goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare",
		"hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off",
		"jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk",
		"knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky",
		"knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming",
		"kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting",
		"m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist",
		"master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate",
		"masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo",
		"mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked",
		"mothafucker", "mothafuckers", "mothafuckin", "mothafucking",
		"mothafuckings", "mothafucks", "mother fucker", "motherfuck",
		"motherfucked", "motherfucker", "motherfuckers", "motherfuckin",
		"motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff",
		"mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga",
		"n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas",
		"niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky",
		"nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm",
		"orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex",
		"phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks",
		"phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers",
		"pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn",
		"porno", "pornography", "pornos", "prick", "pricks", "pron", "pube",
		"pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard",
		"rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing",
		"scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t",
		"shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit",
		"shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull",
		"shithead", "shiting", "shitings", "shits", "shitted", "shitter",
		"shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts",
		"smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t",
		"t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit",
		"titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties",
		"tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat",
		"twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina",
		"viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar",
		"whore", "willies", "willy", "xrated", "xxx"
	]
}, function(e, t) {
	e.exports =
		/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
}, function(e, t) {
	e.exports.hats = [{
		id: 45,
		name: "Shame!",
		dontSell: !0,
		price: 0,
		scale: 120,
		desc: "hacks are for losers"
	}, {
		id: 51,
		name: "Moo Cap",
		price: 0,
		scale: 120,
		desc: "coolest mooer around"
	}, {
		id: 50,
		name: "Apple Cap",
		price: 0,
		scale: 120,
		desc: "apple farms remembers"
	}, {
		id: 28,
		name: "Moo Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 29,
		name: "Pig Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 30,
		name: "Fluff Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 36,
		name: "Pandou Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 37,
		name: "Bear Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 38,
		name: "Monkey Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 44,
		name: "Polar Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 35,
		name: "Fez Hat",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 42,
		name: "Enigma Hat",
		price: 0,
		scale: 120,
		desc: "join the enigma army"
	}, {
		id: 43,
		name: "Blitz Hat",
		price: 0,
		scale: 120,
		desc: "hey everybody i'm blitz"
	}, {
		id: 49,
		name: "Bob XIII Hat",
		price: 0,
		scale: 120,
		desc: "like and subscribe"
	}, {
		id: 57,
		name: "Pumpkin",
		price: 50,
		scale: 120,
		desc: "Spooooky"
	}, {
		id: 8,
		name: "Bummle Hat",
		price: 100,
		scale: 120,
		desc: "no effect"
	}, {
		id: 2,
		name: "Straw Hat",
		price: 500,
		scale: 120,
		desc: "no effect"
	}, {
		id: 15,
		name: "Winter Cap",
		price: 600,
		scale: 120,
		desc: "allows you to move at normal speed in snow",
		coldM: 1
	}, {
		id: 5,
		name: "Cowboy Hat",
		price: 1e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 4,
		name: "Ranger Hat",
		price: 2e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 18,
		name: "Explorer Hat",
		price: 2e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 31,
		name: "Flipper Hat",
		price: 2500,
		scale: 120,
		desc: "have more control while in water",
		watrImm: !0
	}, {
		id: 1,
		name: "Marksman Cap",
		price: 3e3,
		scale: 120,
		desc: "increases arrow speed and range",
		aMlt: 1.3
	}, {
		id: 10,
		name: "Bush Gear",
		price: 3e3,
		scale: 160,
		desc: "allows you to disguise yourself as a bush"
	}, {
		id: 48,
		name: "Halo",
		price: 3e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 6,
		name: "Soldier Helmet",
		price: 4e3,
		scale: 120,
		desc: "reduces damage taken but slows movement",
		spdMult: .94,
		dmgMult: .75
	}, {
		id: 23,
		name: "Anti Venom Gear",
		price: 4e3,
		scale: 120,
		desc: "makes you immune to poison",
		poisonRes: 1
	}, {
		id: 13,
		name: "Medic Gear",
		price: 5e3,
		scale: 110,
		desc: "slowly regenerates health over time",
		healthRegen: 3
	}, {
		id: 9,
		name: "Miners Helmet",
		price: 5e3,
		scale: 120,
		desc: "earn 1 extra gold per resource",
		extraGold: 1
	}, {
		id: 32,
		name: "Musketeer Hat",
		price: 5e3,
		scale: 120,
		desc: "reduces cost of projectiles",
		projCost: .5
	}, {
		id: 7,
		name: "Bull Helmet",
		price: 6e3,
		scale: 120,
		desc: "increases damage done but drains health",
		healthRegen: -5,
		dmgMultO: 1.5,
		spdMult: .96
	}, {
		id: 22,
		name: "Emp Helmet",
		price: 6e3,
		scale: 120,
		desc: "turrets won't attack but you move slower",
		antiTurret: 1,
		spdMult: .7
	}, {
		id: 12,
		name: "Booster Hat",
		price: 6e3,
		scale: 120,
		desc: "increases your movement speed",
		spdMult: 1.16
	}, {
		id: 26,
		name: "Barbarian Armor",
		price: 8e3,
		scale: 120,
		desc: "knocks back enemies that attack you",
		dmgK: .6
	}, {
		id: 21,
		name: "Plague Mask",
		price: 1e4,
		scale: 120,
		desc: "melee attacks deal poison damage",
		poisonDmg: 5,
		poisonTime: 6
	}, {
		id: 46,
		name: "Bull Mask",
		price: 1e4,
		scale: 120,
		desc: "bulls won't target you unless you attack them",
		bullRepel: 1
	}, {
		id: 14,
		name: "Windmill Hat",
		topSprite: !0,
		price: 1e4,
		scale: 120,
		desc: "generates points while worn",
		pps: 1.5
	}, {
		id: 11,
		name: "Spike Gear",
		topSprite: !0,
		price: 1e4,
		scale: 120,
		desc: "deal damage to players that damage you",
		dmg: .45
	}, {
		id: 53,
		name: "Turret Gear",
		topSprite: !0,
		price: 1e4,
		scale: 120,
		desc: "you become a walking turret",
		turret: {
			proj: 1,
			range: 700,
			rate: 2500
		},
		spdMult: .7
	}, {
		id: 20,
		name: "Samurai Armor",
		price: 12e3,
		scale: 120,
		desc: "increased attack speed and fire rate",
		atkSpd: .78
	}, {
		id: 58,
		name: "Dark Knight",
		price: 12e3,
		scale: 120,
		desc: "restores health when you deal damage",
		healD: .4
	}, {
		id: 27,
		name: "Scavenger Gear",
		price: 15e3,
		scale: 120,
		desc: "earn double points for each kill",
		kScrM: 2
	}, {
		id: 40,
		name: "Tank Gear",
		price: 15e3,
		scale: 120,
		desc: "increased damage to buildings but slower movement",
		spdMult: .3,
		bDmg: 3.3
	}, {
		id: 52,
		name: "Thief Gear",
		price: 15e3,
		scale: 120,
		desc: "steal half of a players gold when you kill them",
		goldSteal: .5
	}, {
		id: 55,
		name: "Bloodthirster",
		price: 2e4,
		scale: 120,
		desc: "Restore Health when dealing damage. And increased damage",
		healD: .25,
		dmgMultO: 1.2
	}, {
		id: 56,
		name: "Assassin Gear",
		price: 2e4,
		scale: 120,
		desc: "Go invisible when not moving. Can't eat. Increased speed",
		noEat: !0,
		spdMult: 1.1,
		invisTimer: 1e3
	}], e.exports.accessories = [{
		id: 12,
		name: "Snowball",
		price: 1e3,
		scale: 105,
		xOff: 18,
		desc: "no effect"
	}, {
		id: 9,
		name: "Tree Cape",
		price: 1e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 10,
		name: "Stone Cape",
		price: 1e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 3,
		name: "Cookie Cape",
		price: 1500,
		scale: 90,
		desc: "no effect"
	}, {
		id: 8,
		name: "Cow Cape",
		price: 2e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 11,
		name: "Monkey Tail",
		price: 2e3,
		scale: 97,
		xOff: 25,
		desc: "Super speed but reduced damage",
		spdMult: 1.35,
		dmgMultO: .2
	}, {
		id: 17,
		name: "Apple Basket",
		price: 3e3,
		scale: 80,
		xOff: 12,
		desc: "slowly regenerates health over time",
		healthRegen: 1
	}, {
		id: 6,
		name: "Winter Cape",
		price: 3e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 4,
		name: "Skull Cape",
		price: 4e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 5,
		name: "Dash Cape",
		price: 5e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 2,
		name: "Dragon Cape",
		price: 6e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 1,
		name: "Super Cape",
		price: 8e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 7,
		name: "Troll Cape",
		price: 8e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 14,
		name: "Thorns",
		price: 1e4,
		scale: 115,
		xOff: 20,
		desc: "no effect"
	}, {
		id: 15,
		name: "Blockades",
		price: 1e4,
		scale: 95,
		xOff: 15,
		desc: "no effect"
	}, {
		id: 20,
		name: "Devils Tail",
		price: 1e4,
		scale: 95,
		xOff: 20,
		desc: "no effect"
	}, {
		id: 16,
		name: "Sawblade",
		price: 12e3,
		scale: 90,
		spin: !0,
		xOff: 0,
		desc: "deal damage to players that damage you",
		dmg: .15
	}, {
		id: 13,
		name: "Angel Wings",
		price: 15e3,
		scale: 138,
		xOff: 22,
		desc: "slowly regenerates health over time",
		healthRegen: 3
	}, {
		id: 19,
		name: "Shadow Wings",
		price: 15e3,
		scale: 138,
		xOff: 22,
		desc: "increased movement speed",
		spdMult: 1.1
	}, {
		id: 18,
		name: "Blood Wings",
		price: 2e4,
		scale: 178,
		xOff: 26,
		desc: "restores health when you deal damage",
		healD: .2
	}, {
		id: 21,
		name: "Corrupt X Wings",
		price: 2e4,
		scale: 178,
		xOff: 26,
		desc: "deal damage to players that damage you",
		dmg: .25
	}]
}, function(e, t) {
	e.exports = function(e, t, n, i, r, s, a) {
		this.init = function(e, t, n, i, r, s, o, c, l) {
			this.active = !0, this.indx = e, this.x = t, this.y = n, this.dir = i,
				this.skipMov = !0, this.speed = r, this.dmg = s, this.scale = c, this.range =
				o, this.owner = l, a && (this.sentTo = {})
		};
		var o, c = [];
		this.update = function(l) {
			if (this.active) {
				var h, u = this.speed * l;
				if (this.skipMov ? this.skipMov = !1 : (this.x += u * Math.cos(this.dir),
						this.y += u * Math.sin(this.dir), this.range -= u, this.range <= 0 &&
						(this.x += this.range * Math.cos(this.dir), this.y += this.range *
							Math.sin(this.dir), u = 1, this.range = 0, this.active = !1)), a) {
					for (var f = 0; f < e.length; ++f) !this.sentTo[e[f].id] && e[f].canSee(
						this) && (this.sentTo[e[f].id] = 1, a.send(e[f].id, "18", s.fixTo(
						this.x, 1), s.fixTo(this.y, 1), s.fixTo(this.dir, 2), s.fixTo(this
						.range, 1), this.speed, this.indx, this.layer, this.sid));
					for (c.length = 0, f = 0; f < e.length + t.length; ++f) !(o = e[f] ||
							t[f - e.length]).alive || o == this.owner || this.owner.team && o.team ==
						this.owner.team || s.lineInRect(o.x - o.scale, o.y - o.scale, o.x + o
							.scale, o.y + o.scale, this.x, this.y, this.x + u * Math.cos(this.dir),
							this.y + u * Math.sin(this.dir)) && c.push(o);
					for (var d = n.getGridArrays(this.x, this.y, this.scale), p = 0; p < d
						.length; ++p)
						for (var g = 0; g < d[p].length; ++g) h = (o = d[p][g]).getScale(), o
							.active && this.ignoreObj != o.sid && this.layer <= o.layer && c.indexOf(
								o) < 0 && !o.ignoreCollision && s.lineInRect(o.x - h, o.y - h, o.x +
								h, o.y + h, this.x, this.y, this.x + u * Math.cos(this.dir), this.y +
								u * Math.sin(this.dir)) && c.push(o);
					if (c.length > 0) {
						var m = null,
							y = null,
							k = null;
						for (f = 0; f < c.length; ++f) k = s.getDistance(this.x, this.y, c[f]
							.x, c[f].y), (null == y || k < y) && (y = k, m = c[f]);
						if (m.isPlayer || m.isAI) {
							var v = .3 * (m.weightM || 1);
							m.xVel += v * Math.cos(this.dir), m.yVel += v * Math.sin(this.dir),
								null != m.weaponIndex && i.weapons[m.weaponIndex].shield && s.getAngleDist(
									this.dir + Math.PI, m.dir) <= r.shieldAngle || m.changeHealth(-
									this.dmg, this.owner, this.owner)
						} else
							for (m.projDmg && m.health && m.changeHealth(-this.dmg) && n.disableObj(
									m), f = 0; f < e.length; ++f) e[f].active && (m.sentTo[e[f].id] &&
								(m.active ? e[f].canSee(m) && a.send(e[f].id, "8", s.fixTo(this.dir,
									2), m.sid) : a.send(e[f].id, "12", m.sid)), m.active || m.owner !=
								e[f] || e[f].changeItemCount(m.group.id, -1));
						for (this.active = !1, f = 0; f < e.length; ++f) this.sentTo[e[f].id] &&
							a.send(e[f].id, "19", this.sid, s.fixTo(y, 1))
					}
				}
			}
		}
	}
}, function(e, t) {
	e.exports = function(e, t, n, i, r, s, a, o, c) {
		this.addProjectile = function(l, h, u, f, d, p, g, m, y) {
			for (var k, v = s.projectiles[p], w = 0; w < t.length; ++w)
				if (!t[w].active) {
					k = t[w];
					break
				}
			return k || ((k = new e(n, i, r, s, a, o, c)).sid = t.length, t.push(k)),
				k.init(p, l, h, u, d, v.dmg, f, v.scale, g), k.ignoreObj = m, k.layer =
				y || v.layer, k.src = v.src, k
		}
	}
}, function(e, t) {
	e.exports.obj = function(e, t) {
		var n;
		this.sounds = [], this.active = !0, this.play = function(t, i, r) {
			i && this.active && ((n = this.sounds[t]) || (n = new Howl({
				src: ".././sound/" + t + ".mp3"
			}), this.sounds[t] = n), r && n.isPlaying || (n.isPlaying = !0, n.play(),
				n.volume((i || 1) * e.volumeMult), n.loop(r)))
		}, this.toggleMute = function(e, t) {
			(n = this.sounds[e]) && n.mute(t)
		}, this.stop = function(e) {
			(n = this.sounds[e]) && (n.stop(), n.isPlaying = !1)
		}
	}
}, function(e, t, n) {
	var i = n(60),
		r = n(67);

	function s(e, t, n, i, r) {
		"localhost" == location.hostname && (window.location.hostname = "127.0.0.1"),
			this.debugLog = !1, this.baseUrl = e, this.lobbySize = n, this.devPort = t,
			this.lobbySpread = i, this.rawIPs = !!r, this.server = void 0, this.gameIndex =
			void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(
				vultr.servers)
	}
	s.prototype.regionInfo = {
		0: {
			name: "Local",
			latitude: 0,
			longitude: 0
		},
		"vultr:1": {
			name: "New Jersey",
			latitude: 40.1393329,
			longitude: -75.8521818
		},
		"vultr:2": {
			name: "Chicago",
			latitude: 41.8339037,
			longitude: -87.872238
		},
		"vultr:3": {
			name: "Dallas",
			latitude: 32.8208751,
			longitude: -96.8714229
		},
		"vultr:4": {
			name: "Seattle",
			latitude: 47.6149942,
			longitude: -122.4759879
		},
		"vultr:5": {
			name: "Los Angeles",
			latitude: 34.0207504,
			longitude: -118.691914
		},
		"vultr:6": {
			name: "Atlanta",
			latitude: 33.7676334,
			longitude: -84.5610332
		},
		"vultr:7": {
			name: "Amsterdam",
			latitude: 52.3745287,
			longitude: 4.7581878
		},
		"vultr:8": {
			name: "London",
			latitude: 51.5283063,
			longitude: -.382486
		},
		"vultr:9": {
			name: "Frankfurt",
			latitude: 50.1211273,
			longitude: 8.496137
		},
		"vultr:12": {
			name: "Silicon Valley",
			latitude: 37.4024714,
			longitude: -122.3219752
		},
		"vultr:19": {
			name: "Sydney",
			latitude: -33.8479715,
			longitude: 150.651084
		},
		"vultr:24": {
			name: "Paris",
			latitude: 48.8588376,
			longitude: 2.2773454
		},
		"vultr:25": {
			name: "Tokyo",
			latitude: 35.6732615,
			longitude: 139.569959
		},
		"vultr:39": {
			name: "Miami",
			latitude: 25.7823071,
			longitude: -80.3012156
		},
		"vultr:40": {
			name: "Singapore",
			latitude: 1.3147268,
			longitude: 103.7065876
		}
	}, s.prototype.start = function(e, t) {
		this.callback = e, this.errorCallback = t;
		var n = this.parseServerQuery();
		n ? (this.log("Found server in query."), this.password = n[3], this.connect(
			n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers())
	}, s.prototype.parseServerQuery = function() {
		var e = i.parse(location.href, !0),
			t = e.query.server;
		if ("string" == typeof t) {
			var n = t.split(":");
			if (3 == n.length) {
				var r = n[0],
					s = parseInt(n[1]),
					a = parseInt(n[2]);
				return "0" == r || r.startsWith("vultr:") || (r = "vultr:" + r), [r, s,
					a, e.query.password
				]
			}
			this.errorCallback("Invalid number of server parameters in " + t)
		}
	}, s.prototype.findServer = function(e, t) {
		var n = this.servers[e];
		if (Array.isArray(n)) {
			for (var i = 0; i < n.length; i++) {
				var r = n[i];
				if (r.index == t) return r
			}
			console.warn("Could not find server in region " + e + " with index " + t +
				".")
		} else this.errorCallback("No server list for region " + e)
	}, s.prototype.pingServers = function() {
		var e = this,
			t = [];
		for (var n in this.servers)
			if (this.servers.hasOwnProperty(n)) {
				var i = this.servers[n],
					r = i[Math.floor(Math.random() * i.length)];
				null != r ? function(i, r) {
					var s = new XMLHttpRequest;
					s.onreadystatechange = function(i) {
						var s = i.target;
						if (4 == s.readyState)
							if (200 == s.status) {
								for (var a = 0; a < t.length; a++) t[a].abort();
								e.log("Connecting to region", r.region);
								var o = e.seekServer(r.region);
								e.connect(o[0], o[1], o[2])
							} else console.warn("Error pinging " + r.ip + " in region " + n)
					};
					var a = "//" + e.serverAddress(r.ip, !0) + ":" + e.serverPort(r) +
						"/ping";
					s.open("GET", a, !0), s.send(null), e.log("Pinging", a), t.push(s)
				}(0, r) : console.log("No target server for region " + n)
			}
	}, s.prototype.seekServer = function(e, t, n) {
		null == n && (n = "random"), null == t && (t = !1);
		const i = ["random"];
		var r = this.lobbySize,
			s = this.lobbySpread,
			a = this.servers[e].flatMap((function(e) {
				var t = 0;
				return e.games.map((function(n) {
					var i = t++;
					return {
						region: e.region,
						index: e.index * e.games.length + i,
						gameIndex: i,
						gameCount: e.games.length,
						playerCount: n.playerCount,
						isPrivate: n.isPrivate
					}
				}))
			})).filter((function(e) {
				return !e.isPrivate
			})).filter((function(e) {
				return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2
			})).filter((function(e) {
				return "random" == n || i[e.index % i.length].key == n
			})).sort((function(e, t) {
				return t.playerCount - e.playerCount
			})).filter((function(e) {
				return e.playerCount < r
			}));
		if (t && a.reverse(), 0 != a.length) {
			var o = Math.min(s, a.length),
				c = Math.floor(Math.random() * o),
				l = a[c = Math.min(c, a.length - 1)],
				h = l.region,
				u = (c = Math.floor(l.index / l.gameCount), l.index % l.gameCount);
			return this.log("Found server."), [h, c, u]
		}
		this.errorCallback("No open servers.")
	}, s.prototype.connect = function(e, t, n) {
		if (!this.connected) {
			var i = this.findServer(e, t);
			null != i ? (this.log("Connecting to server", i, "with game index", n), i
				.games[n].playerCount >= this.lobbySize ? this.errorCallback(
					"Server is already full.") : (window.history.replaceState(document.title,
						document.title, this.generateHref(e, t, n, this.password)), this.server =
					i, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(
						i.ip), "on port", this.serverPort(i), "with game index", n), this.callback(
						this.serverAddress(i.ip), this.serverPort(i), n))) : this.errorCallback(
				"Failed to find server for region " + e + " and index " + t)
		}
	}, s.prototype.switchServer = function(e, t, n, i) {
		this.switchingServers = !0, window.location.href = this.generateHref(e, t,
			n, i)
	}, s.prototype.generateHref = function(e, t, n, i) {
		var r = "/?server=" + (e = this.stripRegion(e)) + ":" + t + ":" + n;
		return i && (r += "&password=" + encodeURIComponent(i)), r
	}, s.prototype.serverAddress = function(e, t) {
		return "127.0.0.1" == e || "7f000001" == e ||
			"903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this
			.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e +
			"." + this.baseUrl
	}, s.prototype.serverPort = function(e) {
		return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ?
			443 : 80
	}, s.prototype.processServers = function(e) {
		for (var t = {}, n = 0; n < e.length; n++) {
			var i = e[n],
				r = t[i.region];
			null == r && (r = [], t[i.region] = r), r.push(i)
		}
		for (var s in t) t[s] = t[s].sort((function(e, t) {
			return e.index - t.index
		}));
		this.servers = t
	}, s.prototype.ipToHex = function(e) {
		return e.split(".").map(e => ("00" + parseInt(e).toString(16)).substr(-2))
			.join("").toLowerCase()
	}, s.prototype.hashIP = function(e) {
		return r(this.ipToHex(e))
	}, s.prototype.log = function() {
		return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ?
			console.verbose.apply(void 0, arguments) : void 0
	}, s.prototype.stripRegion = function(e) {
		return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e =
			e.slice(3)), e
	}, window.testVultrClient = function() {
		var e = 1;

		function t(t, n) {
			(t = "" + t) == (n = "" + n) ? console.log(`Assert ${e} passed.`):
				console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`), e++
		}
		var n = new s("test.io", -1, 5, 1, !1);
		n.errorCallback = function(e) {}, n.processServers(function(e) {
				var t = [];
				for (var n in e)
					for (var i = e[n], r = 0; r < i.length; r++) t.push({
						ip: n + ":" + r,
						scheme: "testing",
						region: n,
						index: r,
						games: i[r].map(e => ({
							playerCount: e,
							isPrivate: !1
						}))
					});
				return t
			}({
				1: [
					[0, 0, 0, 0],
					[0, 0, 0, 0]
				],
				2: [
					[5, 1, 0, 0],
					[0, 0, 0, 0]
				],
				3: [
					[5, 0, 1, 5],
					[0, 0, 0, 0]
				],
				4: [
					[5, 1, 1, 5],
					[1, 0, 0, 0]
				],
				5: [
					[5, 1, 1, 5],
					[1, 0, 4, 0]
				],
				6: [
					[5, 5, 5, 5],
					[2, 3, 1, 4]
				],
				7: [
					[5, 5, 5, 5],
					[5, 5, 5, 5]
				]
			})), t(n.seekServer(1, !1), [1, 0, 0]), t(n.seekServer(1, !0), [1, 1, 3]),
			t(n.seekServer(2, !1), [2, 0, 1]), t(n.seekServer(2, !0), [2, 1, 3]), t(n
				.seekServer(3, !1), [3, 0, 2]), t(n.seekServer(3, !0), [3, 1, 3]), t(n.seekServer(
				4, !1), [4, 0, 1]), t(n.seekServer(4, !0), [4, 1, 3]), t(n.seekServer(5, !
				1), [5, 1, 2]), t(n.seekServer(5, !0), [5, 1, 3]), t(n.seekServer(6, !1), [
				6, 1, 3
			]), t(n.seekServer(6, !0), void 0), t(n.seekServer(7, !1), void 0), t(n.seekServer(
				7, !0), void 0), console.log("Tests passed.")
	};
	var a = function(e, t) {
		return e.concat(t)
	};
	Array.prototype.flatMap = function(e) {
		return function(e, t) {
			return t.map(e).reduce(a, [])
		}(e, this)
	}, e.exports = s
}, function(e, t, n) {
	"use strict";
	var i = n(61),
		r = n(63);

	function s() {
		this.protocol = null, this.slashes = null, this.auth = null, this.host =
			null, this.port = null, this.hostname = null, this.hash = null, this.search =
			null, this.query = null, this.pathname = null, this.path = null, this.href =
			null
	}
	t.parse = v, t.resolve = function(e, t) {
		return v(e, !1, !0).resolve(t)
	}, t.resolveObject = function(e, t) {
		return e ? v(e, !1, !0).resolveObject(t) : t
	}, t.format = function(e) {
		return r.isString(e) && (e = v(e)), e instanceof s ? e.format() : s.prototype
			.format.call(e)
	}, t.Url = s;
	var a = /^([a-z0-9.+-]+:)/i,
		o = /:[0-9]*$/,
		c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
		l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r",
			"\n", "\t"
		]),
		h = ["'"].concat(l),
		u = ["%", "/", "?", ";", "#"].concat(h),
		f = ["/", "?", "#"],
		d = /^[+a-z0-9A-Z_-]{0,63}$/,
		p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
		g = {
			javascript: !0,
			"javascript:": !0
		},
		m = {
			javascript: !0,
			"javascript:": !0
		},
		y = {
			http: !0,
			https: !0,
			ftp: !0,
			gopher: !0,
			file: !0,
			"http:": !0,
			"https:": !0,
			"ftp:": !0,
			"gopher:": !0,
			"file:": !0
		},
		k = n(64);

	function v(e, t, n) {
		if (e && r.isObject(e) && e instanceof s) return e;
		var i = new s;
		return i.parse(e, t, n), i
	}
	s.prototype.parse = function(e, t, n) {
		if (!r.isString(e)) throw new TypeError(
			"Parameter 'url' must be a string, not " + typeof e);
		var s = e.indexOf("?"),
			o = -1 !== s && s < e.indexOf("#") ? "?" : "#",
			l = e.split(o);
		l[0] = l[0].replace(/\\/g, "/");
		var v = e = l.join(o);
		if (v = v.trim(), !n && 1 === e.split("#").length) {
			var w = c.exec(v);
			if (w) return this.path = v, this.href = v, this.pathname = w[1], w[2] ?
				(this.search = w[2], this.query = t ? k.parse(this.search.substr(1)) :
					this.search.substr(1)) : t && (this.search = "", this.query = {}),
				this
		}
		var b = a.exec(v);
		if (b) {
			var x = (b = b[0]).toLowerCase();
			this.protocol = x, v = v.substr(b.length)
		}
		if (n || b || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
			var S = "//" === v.substr(0, 2);
			!S || b && m[b] || (v = v.substr(2), this.slashes = !0)
		}
		if (!m[b] && (S || b && !y[b])) {
			for (var T, I, E = -1, M = 0; M < f.length; M++) - 1 !== (A = v.indexOf(f[
				M])) && (-1 === E || A < E) && (E = A);
			for (-1 !== (I = -1 === E ? v.lastIndexOf("@") : v.lastIndexOf("@", E)) &&
				(T = v.slice(0, I), v = v.slice(I + 1), this.auth = decodeURIComponent(T)),
				E = -1, M = 0; M < u.length; M++) {
				var A; - 1 !== (A = v.indexOf(u[M])) && (-1 === E || A < E) && (E = A)
			} - 1 === E && (E = v.length), this.host = v.slice(0, E), v = v.slice(E),
				this.parseHost(), this.hostname = this.hostname || "";
			var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length -
				1];
			if (!P)
				for (var B = this.hostname.split(/\./), C = (M = 0, B.length); M < C; M++) {
					var O = B[M];
					if (O && !O.match(d)) {
						for (var R = "", j = 0, _ = O.length; j < _; j++) O.charCodeAt(j) >
							127 ? R += "x" : R += O[j];
						if (!R.match(d)) {
							var U = B.slice(0, M),
								D = B.slice(M + 1),
								L = O.match(p);
							L && (U.push(L[1]), D.unshift(L[2])), D.length && (v = "/" + D.join(
								".") + v), this.hostname = U.join(".");
							break
						}
					}
				}
			this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname
				.toLowerCase(), P || (this.hostname = i.toASCII(this.hostname));
			var F = this.port ? ":" + this.port : "",
				z = this.hostname || "";
			this.host = z + F, this.href += this.host, P && (this.hostname = this.hostname
				.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v))
		}
		if (!g[x])
			for (M = 0, C = h.length; M < C; M++) {
				var H = h[M];
				if (-1 !== v.indexOf(H)) {
					var V = encodeURIComponent(H);
					V === H && (V = escape(H)), v = v.split(H).join(V)
				}
			}
		var q = v.indexOf("#"); - 1 !== q && (this.hash = v.substr(q), v = v.slice(
			0, q));
		var Y = v.indexOf("?");
		if (-1 !== Y ? (this.search = v.substr(Y), this.query = v.substr(Y + 1), t &&
				(this.query = k.parse(this.query)), v = v.slice(0, Y)) : t && (this.search =
				"", this.query = {}), v && (this.pathname = v), y[x] && this.hostname &&
			!this.pathname && (this.pathname = "/"), this.pathname || this.search) {
			F = this.pathname || "";
			var W = this.search || "";
			this.path = F + W
		}
		return this.href = this.format(), this
	}, s.prototype.format = function() {
		var e = this.auth || "";
		e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
		var t = this.protocol || "",
			n = this.pathname || "",
			i = this.hash || "",
			s = !1,
			a = "";
		this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname
				.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port &&
			(s += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(
			this.query).length && (a = k.stringify(this.query));
		var o = this.search || a && "?" + a || "";
		return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) &&
			!1 !== s ? (s = "//" + (s || ""), n && "/" !== n.charAt(0) && (n = "/" +
				n)) : s || (s = ""), i && "#" !== i.charAt(0) && (i = "#" + i), o && "?" !==
			o.charAt(0) && (o = "?" + o), t + s + (n = n.replace(/[?#]/g, (function(e) {
				return encodeURIComponent(e)
			}))) + (o = o.replace("#", "%23")) + i
	}, s.prototype.resolve = function(e) {
		return this.resolveObject(v(e, !1, !0)).format()
	}, s.prototype.resolveObject = function(e) {
		if (r.isString(e)) {
			var t = new s;
			t.parse(e, !1, !0), e = t
		}
		for (var n = new s, i = Object.keys(this), a = 0; a < i.length; a++) {
			var o = i[a];
			n[o] = this[o]
		}
		if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
		if (e.slashes && !e.protocol) {
			for (var c = Object.keys(e), l = 0; l < c.length; l++) {
				var h = c[l];
				"protocol" !== h && (n[h] = e[h])
			}
			return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname =
				"/"), n.href = n.format(), n
		}
		if (e.protocol && e.protocol !== n.protocol) {
			if (!y[e.protocol]) {
				for (var u = Object.keys(e), f = 0; f < u.length; f++) {
					var d = u[f];
					n[d] = e[d]
				}
				return n.href = n.format(), n
			}
			if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
			else {
				for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift());)
				;
				e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] &&
					p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
			}
			if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth =
				e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname ||
				n.search) {
				var g = n.pathname || "",
					k = n.search || "";
				n.path = g + k
			}
			return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
		}
		var v = n.pathname && "/" === n.pathname.charAt(0),
			w = e.host || e.pathname && "/" === e.pathname.charAt(0),
			b = w || v || n.host && e.pathname,
			x = b,
			S = n.pathname && n.pathname.split("/") || [],
			T = (p = e.pathname && e.pathname.split("/") || [], n.protocol && !y[n.protocol]);
		if (T && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] =
				n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname =
				null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(
					e.host)), e.host = null), b = b && ("" === p[0] || "" === S[0])), w) n.host =
			e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" ===
			e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query,
			S = p;
		else if (p.length) S || (S = []), S.pop(), S = S.concat(p), n.search = e.search,
			n.query = e.query;
		else if (!r.isNullOrUndefined(e.search)) return T && (n.hostname = n.host =
				S.shift(), (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split(
					"@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift())), n.search =
			e.search, n.query = e.query, r.isNull(n.pathname) && r.isNull(n.search) ||
			(n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
			n.href = n.format(), n;
		if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search :
			n.path = null, n.href = n.format(), n;
		for (var I = S.slice(-1)[0], E = (n.host || e.host || S.length > 1) && (
				"." === I || ".." === I) || "" === I, M = 0, A = S.length; A >= 0; A--)
			"." === (I = S[A]) ? S.splice(A, 1) : ".." === I ? (S.splice(A, 1), M++) :
			M && (S.splice(A, 1), M--);
		if (!b && !x)
			for (; M--; M) S.unshift("..");
		!b || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), E &&
			"/" !== S.join("/").substr(-1) && S.push("");
		var P, B = "" === S[0] || S[0] && "/" === S[0].charAt(0);
		return T && (n.hostname = n.host = B ? "" : S.length ? S.shift() : "", (P = !
				!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth =
				P.shift(), n.host = n.hostname = P.shift())), (b = b || n.host && S.length) &&
			!B && S.unshift(""), S.length ? n.pathname = S.join("/") : (n.pathname =
				null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path =
				(n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e
			.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(),
			n
	}, s.prototype.parseHost = function() {
		var e = this.host,
			t = o.exec(e);
		t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length -
			t.length)), e && (this.hostname = e)
	}
}, function(e, t, n) {
	(function(e, i) {
		var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
		! function(s) {
			t && t.nodeType, e && e.nodeType;
			var a = "object" == typeof i && i;
			a.global !== a && a.window !== a && a.self;
			var o, c = 2147483647,
				l = 36,
				h = /^xn--/,
				u = /[^\x20-\x7E]/,
				f = /[\x2E\u3002\uFF0E\uFF61]/g,
				d = {
					overflow: "Overflow: input needs wider integers to process",
					"not-basic": "Illegal input >= 0x80 (not a basic code point)",
					"invalid-input": "Invalid input"
				},
				p = Math.floor,
				g = String.fromCharCode;

			function m(e) {
				throw new RangeError(d[e])
			}

			function y(e, t) {
				for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
				return i
			}

			function k(e, t) {
				var n = e.split("@"),
					i = "";
				return n.length > 1 && (i = n[0] + "@", e = n[1]), i + y((e = e.replace(
					f, ".")).split("."), t).join(".")
			}

			function v(e) {
				for (var t, n, i = [], r = 0, s = e.length; r < s;)(t = e.charCodeAt(r++)) >=
					55296 && t <= 56319 && r < s ? 56320 == (64512 & (n = e.charCodeAt(r++))) ?
					i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(
						t);
				return i
			}

			function w(e) {
				return y(e, (function(e) {
					var t = "";
					return e > 65535 && (t += g((e -= 65536) >>> 10 & 1023 | 55296), e =
						56320 | 1023 & e), t + g(e)
				})).join("")
			}

			function b(e) {
				return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e -
					97 : l
			}

			function x(e, t) {
				return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
			}

			function S(e, t, n) {
				var i = 0;
				for (e = n ? p(e / 700) : e >> 1, e += p(e / t); e > 455; i += l) e = p(
					e / 35);
				return p(i + 36 * e / (e + 38))
			}

			function T(e) {
				var t, n, i, r, s, a, o, h, u, f, d = [],
					g = e.length,
					y = 0,
					k = 128,
					v = 72;
				for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(
					i) >= 128 && m("not-basic"), d.push(e.charCodeAt(i));
				for (r = n > 0 ? n + 1 : 0; r < g;) {
					for (s = y, a = 1, o = l; r >= g && m("invalid-input"), ((h = b(e.charCodeAt(
							r++))) >= l || h > p((c - y) / a)) && m("overflow"), y += h * a, !(h <
							(u = o <= v ? 1 : o >= v + 26 ? 26 : o - v)); o += l) a > p(c / (f =
						l - u)) && m("overflow"), a *= f;
					v = S(y - s, t = d.length + 1, 0 == s), p(y / t) > c - k && m(
						"overflow"), k += p(y / t), y %= t, d.splice(y++, 0, k)
				}
				return w(d)
			}

			function I(e) {
				var t, n, i, r, s, a, o, h, u, f, d, y, k, w, b, T = [];
				for (y = (e = v(e)).length, t = 128, n = 0, s = 72, a = 0; a < y; ++a)(d =
					e[a]) < 128 && T.push(g(d));
				for (i = r = T.length, r && T.push("-"); i < y;) {
					for (o = c, a = 0; a < y; ++a)(d = e[a]) >= t && d < o && (o = d);
					for (o - t > p((c - n) / (k = i + 1)) && m("overflow"), n += (o - t) *
						k, t = o, a = 0; a < y; ++a)
						if ((d = e[a]) < t && ++n > c && m("overflow"), d == t) {
							for (h = n, u = l; !(h < (f = u <= s ? 1 : u >= s + 26 ? 26 : u - s)); u +=
								l) b = h - f, w = l - f, T.push(g(x(f + b % w, 0))), h = p(b / w);
							T.push(g(x(h, 0))), s = S(n, k, i == r), n = 0, ++i
						}++n, ++t
				}
				return T.join("")
			}
			o = {
				version: "1.4.1",
				ucs2: {
					decode: v,
					encode: w
				},
				decode: T,
				encode: I,
				toASCII: function(e) {
					return k(e, (function(e) {
						return u.test(e) ? "xn--" + I(e) : e
					}))
				},
				toUnicode: function(e) {
					return k(e, (function(e) {
						return h.test(e) ? T(e.slice(4).toLowerCase()) : e
					}))
				}
			}, void 0 === (r = function() {
				return o
			}.call(t, n, t, e)) || (e.exports = r)
		}()
	}).call(this, n(62)(e), n(12))
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children ||
			(e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
	}
}, function(e, t, n) {
	"use strict";
	e.exports = {
		isString: function(e) {
			return "string" == typeof e
		},
		isObject: function(e) {
			return "object" == typeof e && null !== e
		},
		isNull: function(e) {
			return null === e
		},
		isNullOrUndefined: function(e) {
			return null == e
		}
	}
}, function(e, t, n) {
	"use strict";
	t.decode = t.parse = n(65), t.encode = t.stringify = n(66)
}, function(e, t, n) {
	"use strict";

	function i(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}
	e.exports = function(e, t, n, s) {
		t = t || "&", n = n || "=";
		var a = {};
		if ("string" != typeof e || 0 === e.length) return a;
		var o = /\+/g;
		e = e.split(t);
		var c = 1e3;
		s && "number" == typeof s.maxKeys && (c = s.maxKeys);
		var l = e.length;
		c > 0 && l > c && (l = c);
		for (var h = 0; h < l; ++h) {
			var u, f, d, p, g = e[h].replace(o, "%20"),
				m = g.indexOf(n);
			m >= 0 ? (u = g.substr(0, m), f = g.substr(m + 1)) : (u = g, f = ""), d =
				decodeURIComponent(u), p = decodeURIComponent(f), i(a, d) ? r(a[d]) ? a[
					d].push(p) : a[d] = [a[d], p] : a[d] = p
		}
		return a
	};
	var r = Array.isArray || function(e) {
		return "[object Array]" === Object.prototype.toString.call(e)
	}
}, function(e, t, n) {
	"use strict";
	var i = function(e) {
		switch (typeof e) {
			case "string":
				return e;
			case "boolean":
				return e ? "true" : "false";
			case "number":
				return isFinite(e) ? e : "";
			default:
				return ""
		}
	};
	e.exports = function(e, t, n, o) {
		return t = t || "&", n = n || "=", null === e && (e = void 0), "object" ==
			typeof e ? s(a(e), (function(a) {
				var o = encodeURIComponent(i(a)) + n;
				return r(e[a]) ? s(e[a], (function(e) {
					return o + encodeURIComponent(i(e))
				})).join(t) : o + encodeURIComponent(i(e[a]))
			})).join(t) : o ? encodeURIComponent(i(o)) + n + encodeURIComponent(i(e)) :
			""
	};
	var r = Array.isArray || function(e) {
		return "[object Array]" === Object.prototype.toString.call(e)
	};

	function s(e, t) {
		if (e.map) return e.map(t);
		for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
		return n
	}
	var a = Object.keys || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
		return t
	}
}, function(e, t, n) {
	! function() {
		var t = n(68),
			i = n(20).utf8,
			r = n(69),
			s = n(20).bin,
			a = function(e, n) {
				e.constructor == String ? e = n && "binary" === n.encoding ? s.stringToBytes(
						e) : i.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) :
					Array.isArray(e) || (e = e.toString());
				for (var o = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, h = -
						271733879, u = -1732584194, f = 271733878, d = 0; d < o.length; d++) o[
					d] = 16711935 & (o[d] << 8 | o[d] >>> 24) | 4278255360 & (o[d] << 24 |
					o[d] >>> 8);
				o[c >>> 5] |= 128 << c % 32, o[14 + (c + 64 >>> 9 << 4)] = c;
				var p = a._ff,
					g = a._gg,
					m = a._hh,
					y = a._ii;
				for (d = 0; d < o.length; d += 16) {
					var k = l,
						v = h,
						w = u,
						b = f;
					h = y(h = y(h = y(h = y(h = m(h = m(h = m(h = m(h = g(h = g(h = g(h = g(
												h = p(h = p(h = p(h = p(h, u = p(u, f = p(f, l = p(l, h, u,
														f, o[d + 0], 7, -680876936), h, u, o[d + 1], 12, -
													389564586), l, h, o[d + 2], 17, 606105819), f, l, o[d +
													3], 22, -1044525330), u = p(u, f = p(f, l = p(l, h, u,
														f, o[d + 4], 7, -176418897), h, u, o[d + 5], 12,
													1200080426), l, h, o[d + 6], 17, -1473231341), f, l, o[
													d + 7], 22, -45705983), u = p(u, f = p(f, l = p(l, h, u,
														f, o[d + 8], 7, 1770035416), h, u, o[d + 9], 12, -
													1958414417), l, h, o[d + 10], 17, -42063), f, l, o[d +
													11], 22, -1990404162), u = p(u, f = p(f, l = p(l, h, u, f,
														o[d + 12], 7, 1804603682), h, u, o[d + 13], 12, -
													40341101), l, h, o[d + 14], 17, -1502002290), f, l, o[d +
													15], 22, 1236535329), u = g(u, f = g(f, l = g(l, h, u, f,
														o[d + 1], 5, -165796510), h, u, o[d + 6], 9, -1069501632),
													l, h, o[d + 11], 14, 643717713), f, l, o[d + 0], 20, -
												373897302), u = g(u, f = g(f, l = g(l, h, u, f, o[d + 5], 5, -
													701558691), h, u, o[d + 10], 9, 38016083), l, h, o[d + 15],
												14, -660478335), f, l, o[d + 4], 20, -405537848), u = g(u, f =
												g(f, l = g(l, h, u, f, o[d + 9], 5, 568446438), h, u, o[d +
													14], 9, -1019803690), l, h, o[d + 3], 14, -187363961), f, l,
											o[d + 8], 20, 1163531501), u = g(u, f = g(f, l = g(l, h, u, f,
												o[d + 13], 5, -1444681467), h, u, o[d + 2], 9, -51403784), l,
											h, o[d + 7], 14, 1735328473), f, l, o[d + 12], 20, -
										1926607734), u = m(u, f = m(f, l = m(l, h, u, f, o[d + 5], 4, -
											378558), h, u, o[d + 8], 11, -2022574463), l, h, o[d + 11],
										16, 1839030562), f, l, o[d + 14], 23, -35309556), u = m(u, f =
										m(f, l = m(l, h, u, f, o[d + 1], 4, -1530992060), h, u, o[d + 4],
											11, 1272893353), l, h, o[d + 7], 16, -155497632), f, l, o[d +
										10], 23, -1094730640), u = m(u, f = m(f, l = m(l, h, u, f, o[d +
										13], 4, 681279174), h, u, o[d + 0], 11, -358537222), l, h, o[d +
										3], 16, -722521979), f, l, o[d + 6], 23, 76029189), u = m(u, f =
										m(f, l = m(l, h, u, f, o[d + 9], 4, -640364487), h, u, o[d + 12],
											11, -421815835), l, h, o[d + 15], 16, 530742520), f, l, o[d + 2],
									23, -995338651), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 0], 6, -
										198630844), h, u, o[d + 7], 10, 1126891415), l, h, o[d + 14], 15, -
									1416354905), f, l, o[d + 5], 21, -57434055), u = y(u, f = y(f, l =
									y(l, h, u, f, o[d + 12], 6, 1700485571), h, u, o[d + 3], 10, -
									1894986606), l, h, o[d + 10], 15, -1051523), f, l, o[d + 1], 21, -
								2054922799), u = y(u, f = y(f, l = y(l, h, u, f, o[d + 8], 6,
									1873313359), h, u, o[d + 15], 10, -30611744), l, h, o[d + 6], 15, -
								1560198380), f, l, o[d + 13], 21, 1309151649), u = y(u, f = y(f, l =
								y(l, h, u, f, o[d + 4], 6, -145523070), h, u, o[d + 11], 10, -
								1120210379), l, h, o[d + 2], 15, 718787259), f, l, o[d + 9], 21, -
							343485551), l = l + k >>> 0, h = h + v >>> 0, u = u + w >>> 0, f = f +
						b >>> 0
				}
				return t.endian([l, h, u, f])
			};
		a._ff = function(e, t, n, i, r, s, a) {
			var o = e + (t & n | ~t & i) + (r >>> 0) + a;
			return (o << s | o >>> 32 - s) + t
		}, a._gg = function(e, t, n, i, r, s, a) {
			var o = e + (t & i | n & ~i) + (r >>> 0) + a;
			return (o << s | o >>> 32 - s) + t
		}, a._hh = function(e, t, n, i, r, s, a) {
			var o = e + (t ^ n ^ i) + (r >>> 0) + a;
			return (o << s | o >>> 32 - s) + t
		}, a._ii = function(e, t, n, i, r, s, a) {
			var o = e + (n ^ (t | ~i)) + (r >>> 0) + a;
			return (o << s | o >>> 32 - s) + t
		}, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
			if (null == e) throw new Error("Illegal argument " + e);
			var i = t.wordsToBytes(a(e, n));
			return n && n.asBytes ? i : n && n.asString ? s.bytesToString(i) : t.bytesToHex(
				i)
		}
	}()
}, function(e, t) {
	! function() {
		var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
			n = {
				rotl: function(e, t) {
					return e << t | e >>> 32 - t
				},
				rotr: function(e, t) {
					return e << 32 - t | e >>> t
				},
				endian: function(e) {
					if (e.constructor == Number) return 16711935 & n.rotl(e, 8) |
						4278255360 & n.rotl(e, 24);
					for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
					return e
				},
				randomBytes: function(e) {
					for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
					return t
				},
				bytesToWords: function(e) {
					for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) t[i >>> 5] |=
						e[n] << 24 - i % 32;
					return t
				},
				wordsToBytes: function(e) {
					for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>>
						24 - n % 32 & 255);
					return t
				},
				bytesToHex: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(
						16)), t.push((15 & e[n]).toString(16));
					return t.join("")
				},
				hexToBytes: function(e) {
					for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(
						n, 2), 16));
					return t
				},
				bytesToBase64: function(e) {
					for (var n = [], i = 0; i < e.length; i += 3)
						for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], s = 0; s < 4; s++)
							8 * i + 6 * s <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - s) &
								63)) : n.push("=");
					return n.join("")
				},
				base64ToBytes: function(e) {
					e = e.replace(/[^A-Z0-9+\/]/gi, "");
					for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4) 0 != r && n.push(
						(t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r |
						t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
					return n
				}
			};
		e.exports = n
	}()
}, function(e, t) {
	function n(e) {
		return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor
			.isBuffer(e)
	}
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	e.exports = function(e) {
		return null != e && (n(e) || function(e) {
			return "function" == typeof e.readFloatLE && "function" == typeof e.slice &&
				n(e.slice(0, 0))
		}(e) || !!e._isBuffer)
	}
}, function(e, t) {
	e.exports = function(e, t, n, i, r, s, a, o, c) {
		this.aiTypes = [{
			id: 0,
			src: "cow_1",
			killScore: 150,
			health: 500,
			weightM: .8,
			speed: 95e-5,
			turnSpeed: .001,
			scale: 72,
			drop: ["food", 50]
		}, {
			id: 1,
			src: "pig_1",
			killScore: 200,
			health: 800,
			weightM: .6,
			speed: 85e-5,
			turnSpeed: .001,
			scale: 72,
			drop: ["food", 80]
		}, {
			id: 2,
			name: "Bull",
			src: "bull_2",
			hostile: !0,
			dmg: 20,
			killScore: 1e3,
			health: 1800,
			weightM: .5,
			speed: 94e-5,
			turnSpeed: 74e-5,
			scale: 78,
			viewRange: 800,
			chargePlayer: !0,
			drop: ["food", 100]
		}, {
			id: 3,
			name: "Bully",
			src: "bull_1",
			hostile: !0,
			dmg: 20,
			killScore: 2e3,
			health: 2800,
			weightM: .45,
			speed: .001,
			turnSpeed: 8e-4,
			scale: 90,
			viewRange: 900,
			chargePlayer: !0,
			drop: ["food", 400]
		}, {
			id: 4,
			name: "Wolf",
			src: "wolf_1",
			hostile: !0,
			dmg: 8,
			killScore: 500,
			health: 300,
			weightM: .45,
			speed: .001,
			turnSpeed: .002,
			scale: 84,
			viewRange: 800,
			chargePlayer: !0,
			drop: ["food", 200]
		}, {
			id: 5,
			name: "Quack",
			src: "chicken_1",
			dmg: 8,
			killScore: 2e3,
			noTrap: !0,
			health: 300,
			weightM: .2,
			speed: .0018,
			turnSpeed: .006,
			scale: 70,
			drop: ["food", 100]
		}, {
			id: 6,
			name: "MOOSTAFA",
			nameScale: 50,
			src: "enemy",
			hostile: !0,
			dontRun: !0,
			fixedSpawn: !0,
			spawnDelay: 6e4,
			noTrap: !0,
			colDmg: 100,
			dmg: 40,
			killScore: 8e3,
			health: 18e3,
			weightM: .4,
			speed: 7e-4,
			turnSpeed: .01,
			scale: 80,
			spriteMlt: 1.8,
			leapForce: .9,
			viewRange: 1e3,
			hitRange: 210,
			hitDelay: 1e3,
			chargePlayer: !0,
			drop: ["food", 100]
		}, {
			id: 7,
			name: "Treasure",
			hostile: !0,
			nameScale: 35,
			src: "crate_1",
			fixedSpawn: !0,
			spawnDelay: 12e4,
			colDmg: 200,
			killScore: 5e3,
			health: 2e4,
			weightM: .1,
			speed: 0,
			turnSpeed: 0,
			scale: 70,
			spriteMlt: 1
		}, {
			id: 8,
			name: "MOOFIE",
			src: "wolf_2",
			hostile: !0,
			fixedSpawn: !0,
			dontRun: !0,
			hitScare: 4,
			spawnDelay: 3e4,
			noTrap: !0,
			nameScale: 35,
			dmg: 10,
			colDmg: 100,
			killScore: 3e3,
			health: 7e3,
			weightM: .45,
			speed: .0015,
			turnSpeed: .002,
			scale: 90,
			viewRange: 800,
			chargePlayer: !0,
			drop: ["food", 1e3]
		}], this.spawn = function(l, h, u, f) {
			for (var d, p = 0; p < e.length; ++p)
				if (!e[p].active) {
					d = e[p];
					break
				}
			return d || (d = new t(e.length, r, n, i, a, s, o, c), e.push(d)), d.init(
				l, h, u, f, this.aiTypes[f]), d
		}
	}
}, function(e, t) {
	var n = 2 * Math.PI;
	e.exports = function(e, t, i, r, s, a, o, c) {
		this.sid = e, this.isAI = !0, this.nameIndex = s.randInt(0, a.cowNames.length -
			1), this.init = function(e, t, n, i, r) {
			this.x = e, this.y = t, this.startX = r.fixedSpawn ? e : null, this.startY =
				r.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0,
				this.dir = n, this.dirPlus = 0, this.index = i, this.src = r.src, r.name &&
				(this.name = r.name), this.weightM = r.weightM, this.speed = r.speed,
				this.killScore = r.killScore, this.turnSpeed = r.turnSpeed, this.scale =
				r.scale, this.maxHealth = r.health, this.leapForce = r.leapForce, this.health =
				this.maxHealth, this.chargePlayer = r.chargePlayer, this.viewRange = r.viewRange,
				this.drop = r.drop, this.dmg = r.dmg, this.hostile = r.hostile, this.dontRun =
				r.dontRun, this.hitRange = r.hitRange, this.hitDelay = r.hitDelay, this
				.hitScare = r.hitScare, this.spriteMlt = r.spriteMlt, this.nameScale =
				r.nameScale, this.colDmg = r.colDmg, this.noTrap = r.noTrap, this.spawnDelay =
				r.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount =
				0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom =
				null, this.chargeTarget = null, this.dmgOverTime = {}
		};
		var l = 0;
		this.update = function(e) {
			if (this.active) {
				if (this.spawnCounter) return this.spawnCounter -= e, void(this.spawnCounter <=
					0 && (this.spawnCounter = 0, this.x = this.startX || s.randInt(0, a.mapScale),
						this.y = this.startY || s.randInt(0, a.mapScale)));
				(l -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime
						.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime
					.time <= 0 && (this.dmgOverTime.dmg = 0)), l = 1e3);
				var r = !1,
					o = 1;
				if (!this.zIndex && !this.lockMove && this.y >= a.mapScale / 2 - a.riverWidth /
					2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (o = .33, this.xVel +=
						a.waterCurrent * e), this.lockMove) this.xVel = 0, this.yVel = 0;
				else if (this.waitCount > 0) {
					if (this.waitCount -= e, this.waitCount <= 0)
						if (this.chargePlayer) {
							for (var h, u, f, d = 0; d < i.length; ++d) !i[d].alive || i[d].skin &&
								i[d].skin.bullRepel || (f = s.getDistance(this.x, this.y, i[d].x, i[
									d].y)) <= this.viewRange && (!h || f < u) && (u = f, h = i[d]);
							h ? (this.chargeTarget = h, this.moveCount = s.randInt(8e3, 12e3)) :
								(this.moveCount = s.randInt(1e3, 2e3), this.targetDir = s.randFloat(-
									Math.PI, Math.PI))
						} else this.moveCount = s.randInt(4e3, 1e4), this.targetDir = s.randFloat(-
							Math.PI, Math.PI)
				} else if (this.moveCount > 0) {
					var p = this.speed * o;
					if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer ||
							this.runFrom.alive) ? (this.targetDir = s.getDirection(this.x, this.y,
							this.runFrom.x, this.runFrom.y), p *= 1.42) : this.chargeTarget &&
						this.chargeTarget.alive && (this.targetDir = s.getDirection(this.chargeTarget
							.x, this.chargeTarget.y, this.x, this.y), p *= 1.75, r = !0), this.hitWait &&
						(p *= .3), this.dir != this.targetDir) {
						this.dir %= n;
						var g = (this.dir - this.targetDir + n) % n,
							m = Math.min(Math.abs(g - n), g, this.turnSpeed * e),
							y = g - Math.PI >= 0 ? 1 : -1;
						this.dir += y * m + n
					}
					this.dir %= n, this.xVel += p * e * Math.cos(this.dir), this.yVel += p *
						e * Math.sin(this.dir), this.moveCount -= e, this.moveCount <= 0 && (
							this.runFrom = null, this.chargeTarget = null, this.waitCount = this
							.hostile ? 1500 : s.randInt(1500, 6e3))
				}
				this.zIndex = 0, this.lockMove = !1;
				var k = s.getDistance(0, 0, this.xVel * e, this.yVel * e),
					v = Math.min(4, Math.max(1, Math.round(k / 40))),
					w = 1 / v;
				for (d = 0; d < v; ++d) {
					this.xVel && (this.x += this.xVel * e * w), this.yVel && (this.y +=
						this.yVel * e * w), M = t.getGridArrays(this.x, this.y, this.scale);
					for (var b = 0; b < M.length; ++b)
						for (var x = 0; x < M[b].length; ++x) M[b][x].active && t.checkCollision(
							this, M[b][x], w)
				}
				var S, T, I, E = !1;
				if (this.hitWait > 0 && (this.hitWait -= e, this.hitWait <= 0)) {
					E = !0, this.hitWait = 0, this.leapForce && !s.randInt(0, 2) && (this.xVel +=
						this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce *
						Math.sin(this.dir));
					for (var M = t.getGridArrays(this.x, this.y, this.hitRange), A = 0; A <
						M.length; ++A)
						for (b = 0; b < M[A].length; ++b)(S = M[A][b]).health && (T = s.getDistance(
							this.x, this.y, S.x, S.y)) < S.scale + this.hitRange && (S.changeHealth(
							5 * -this.dmg) && t.disableObj(S), t.hitObj(S, s.getDirection(this
							.x, this.y, S.x, S.y)));
					for (b = 0; b < i.length; ++b) i[b].canSee(this) && c.send(i[b].id,
						"aa", this.sid)
				}
				if (r || E)
					for (d = 0; d < i.length; ++d)(S = i[d]) && S.alive && (T = s.getDistance(
							this.x, this.y, S.x, S.y), this.hitRange ? !this.hitWait && T <=
						this.hitRange + S.scale && (E ? (I = s.getDirection(S.x, S.y, this.x,
								this.y), S.changeHealth(-this.dmg), S.xVel += .6 * Math.cos(I), S
							.yVel += .6 * Math.sin(I), this.runFrom = null, this.chargeTarget =
							null, this.waitCount = 3e3, this.hitWait = s.randInt(0, 2) ? 0 :
							600) : this.hitWait = this.hitDelay) : T <= this.scale + S.scale &&
						(I = s.getDirection(S.x, S.y, this.x, this.y), S.changeHealth(-this.dmg),
							S.xVel += .55 * Math.cos(I), S.yVel += .55 * Math.sin(I)));
				this.xVel && (this.xVel *= Math.pow(a.playerDecel, e)), this.yVel && (
					this.yVel *= Math.pow(a.playerDecel, e));
				var P = this.scale;
				this.x - P < 0 ? (this.x = P, this.xVel = 0) : this.x + P > a.mapScale &&
					(this.x = a.mapScale - P, this.xVel = 0), this.y - P < 0 ? (this.y = P,
						this.yVel = 0) : this.y + P > a.mapScale && (this.y = a.mapScale - P,
						this.yVel = 0)
			}
		}, this.canSee = function(e) {
			if (!e) return !1;
			if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer)
				return !1;
			var t = Math.abs(e.x - this.x) - e.scale,
				n = Math.abs(e.y - this.y) - e.scale;
			return t <= a.maxScreenWidth / 2 * 1.3 && n <= a.maxScreenHeight / 2 *
				1.3
		};
		var h = 0,
			u = 0;
		this.animate = function(e) {
			this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime =
				0, this.dirPlus = 0, h = 0, u = 0) : 0 == u ? (h += e / (this.animSpeed *
				a.hitReturnRatio), this.dirPlus = s.lerp(0, this.targetAngle, Math.min(
				1, h)), h >= 1 && (h = 1, u = 1)) : (h -= e / (this.animSpeed * (1 -
				a.hitReturnRatio)), this.dirPlus = s.lerp(0, this.targetAngle, Math.max(
				0, h))))
		}, this.startAnim = function() {
			this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, h =
				0, u = 0
		}, this.changeHealth = function(e, t, n) {
			if (this.active && (this.health += e, n && (this.hitScare && !s.randInt(
						0, this.hitScare) ? (this.runFrom = n, this.waitCount = 0, this.moveCount =
						2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget =
						n, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this
						.runFrom = n, this.waitCount = 0, this.moveCount = 2e3)), e < 0 &&
					this.hitRange && s.randInt(0, 1) && (this.hitWait = 500), t && t.canSee(
						this) && e < 0 && c.send(t.id, "t", Math.round(this.x), Math.round(
						this.y), Math.round(-e), 1), this.health <= 0 && (this.spawnDelay ? (
							this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6) :
						(this.x = this.startX || s.randInt(0, a.mapScale), this.y = this.startY ||
							s.randInt(0, a.mapScale)), this.health = this.maxHealth, this.runFrom =
						null, t && (o(t, this.killScore), this.drop))))
				for (var i = 0; i < this.drop.length;) t.addResource(a.resourceTypes.indexOf(
					this.drop[i]), this.drop[i + 1]), i += 2
		}
	}
}]);
//# sourceMappingURL=bundle.js.map
