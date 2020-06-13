// ==UserScript==
// @name        L̴̐̒egit o̷̩̊P H̵̾́ack
// @namespace    -
// @version      o̷̩̊P
// @description  OpHack
// @author       BEXTIYAR
        //    MooMoo.io
// @match        *://moomoo.io/*
// @match        *sandbox.moomoo.io/*
// @match        *dev.moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js


// ==/UserScript==


$('#guideCard').prepend('<a href = "https://discord.gg/TAG8ZBC">L̴̐̒egit o̷̩̊P H̵̾́ack Discord</a> <br> ');

document.getElementById('enterGame').innerHTML = 'L̴̐̒egit';
document.getElementById("gameName").style.color = "Red";
document.getElementById('loadingText').innerHTML = 'L̴̐̒egit o̷̩̊P H̵̾́ack Loading';
document.getElementById('nameInput').placeholder = "L̴̐̒egit";
document.getElementById('chatBox').placeholder = "L̴̐̒egit o̷̩̊P H̵̾́ack Chat";
document.getElementById("pingDisplay").style.color = "red";
document.getElementById('diedText').innerHTML = 'G̴̓́ame ë̷̝́nd';
document.getElementById('diedText').style.color = "Red";

document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"

document.getElementById('adCard').remove();
document.getElementById('errorNotification').remove();

document.getElementById("leaderboard").style.color = "red";
document.getElementById("gameName").style.color = "Red";
document.getElementById("setupCard").style.color = "Red";
document.getElementById('gameName').innerHTML = 'L̴̐̒egit o̷̩̊P H̵̾́ack';
document.getElementById("promoImg").remove();
document.getElementById("scoreDisplay").style.color = "Red";
document.getElementById("woodDisplay").style.color = "Red";
document.getElementById("stoneDisplay").style.color = "Red";
document.getElementById("killCounter").style.color = "Red";
document.getElementById("foodDisplay").style.color = "Red";
document.getElementById("ageText").style.color = "red";
document.getElementById("allianceButton").style.color = "black";
document.getElementById("chatButton").style.color = "black";
document.getElementById("storeButton").style.color = "black";
    $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
$("#mapDisplay").css({
  'border-radious':'350px',
  'border':'3px solid #ff0202'
});

$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(0, 0, 0, 0)',
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

$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(231, 76, 60), 0 2px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 4px 0 rgba(231, 76, 60), 0 5px 0 rgba(231, 76, 60), 0 6px 0 rgba(231, 76, 60), 0 7px 0 rgba(231, 76, 60), 0 8px 0 rgba(231, 76, 60), 0 9px 0 rgba(255, 0, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});


$('#skinColorHolder').css({'margin-bottom': '30.75px'});

$('.settingRadio').css({'margin-bottom': '30.75px'});



$('#linksContainer2').css({'-webkit-border-radius': '0px 0 0 0',
                           '-moz-border-radius': '0px 0 0 0',
                           'border-radius': '0px 0 0 0',
                           'right': '44%',
                           'left': '44%',
                           'background-color': 'rgba(0, 0, 0, 0)',
                           'text-align': 'center',
                           'bottom': '12px'});

$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(231, 76, 60), 0 2px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 4px 0 rgba(231, 76, 60), 0 5px 0 rgba(231, 76, 60), 0 6px 0 rgba(231, 76, 60), 0 7px 0 rgba(231, 76, 60), 0 8px 0 rgba(231, 76, 60), 0 9px 0 rgba(255, 0, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});

$('pingDisplay').css({'color': '#ffcf23',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0), 0 2px 0 rgba(255, 255, 255, 0), 0 3px 0 rgba(255, 255, 255, 0), 0 4px 0 rgba(255, 255, 255, 0), 0 5px 0 rgba(255, 255, 255, 0), 0 6px 0 rgba(255, 255, 255, 0), 0 7px 0 rgba(255, 255, 255, 0), 0 8px 0 rgba(255, 255, 255, 0), 0 9px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '156px',
                    'margin-bottom': '-30px'});

$('#loadingText').css({'color': '#000000',
                       'background-color': 'rgba(0, 0, 0, 0)',
                       'padding': '8px',
                       'right': '150%',
                       'left': '150%',
                       'margin-top': '40px'});

$('.ytLink').css({'color': '#144db4',
                  'padding': '8px',
                  'background-color': 'rgba(255, 0, 0, 0)'});

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


$('.menuHeader').css({'color': 'rgba(255, 255, 255, 1)'});

$('#killCounter').css({'color': '#ededed'});

$('#diedText').css({'background-color': 'rgba(0, 0, 0, 0)'});

$('#gameCanvas').css({'background-color': '#f4f4f4'});

$('#allianceButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#storeButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('#chatButton').css({'color': 'rgba(241, 241, 241, 1)'});

$('.gameButton').css({'-webkit-border-radius': '0px 0 0 0',
                      '-moz-border-radius': '0px 0 0 0',
                      'border-radius': '0px 0 0 0',
                      'background-color': 'rgba(0, 0, 0, 0.4)'});

    $('#partyButton').css({'color': '#000000',
'text-shadow': '0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(255, 0, 0)',
'text-align': 'center',
'font-size': '30px',
'margin-bottom': '30px'});

        $('#joinPartyButton').css({'color': '#000000',
'text-shadow': '0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 3px 0 rgba(255, 0, 0)',
'text-align': 'center',
'font-size': '30px',
'margin-bottom': '30px'});

$('.uiElement, .resourceDisplay').css({'-webkit-border-radius': '0px',
                                       '-moz-border-radius': '0px',
                                       'border-radius': '0px',
                                       'background-color': 'rgba(0, 0, 0, 0.25);'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '700px',
                   'background-color': 'rgba(0, 0, 0, 0.18)',
                   'text-align': 'center'});

$('#foodDisplay').css({'color': '#F40D0D'});
$('#killCounter').css({'color': '#F40D0D'});
$('#woodDisplay').css({'color': '#49FF00'});
$('#stoneDisplay').css({'color': '#555252'});
$('#scoreDisplay').css({'color': '#ffd700'});

$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 0, 0, 0.4)'});
$('#ageBarBody').css({'-webkit-border-radius': '0px',
                      '-moz-border-radius': '0px',
                      'border-radius': '0px',
                      'background-color': '#FF0000'});

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


$("#ageBarContainer").append('</br><div id="hacktext"></div><div style="width: 100%;position: absolute;bottom: 94px;text-align: center;color:blue;font-size: 24px;" id="freetext"></div><div style="width: 100%;position: absolute;bottom: 144px;text-align: center;color: #ed3f00;font-size: 24px;" id="ptext"></div><div style="width: 100%;position: absolute;bottom: 224px;text-align: center;color: #9a008b;font-size: 24px;" id="ctext"></div><div style="width: 100%;position: absolute;top: 100px;text-align: center;color: white;font-size: 12px;" id="bilgitext">"Z"Tank Gear | "C" Turret Gear | "K" Bull Helmet | "J" Samurai Armor | "B" Soldier Helmet | "Shift" Fish Hat | "/" Winter Cap | "," Booster Helmet</div><div style="width: 100%;position: absolute;bottom: 170px;text-align: center;color: darkgreen;font-size: 24px;" id="atext"></div><div style="width: 100%;position: absolute;bottom: 196px;text-align: center;color: black;font-size: 24px;" id="mtext"></div>');
(function() {var css = [

	"div#adCard, ",
	"  #twitterFollow, ",
	"  #youtubeFollow, ",
	"  #downloadButtonContainer, ",
	"  #promoImg {",
	"    display: none;",
	"  }",
	"",
	"  #featuredYoutube > a.ytLink, ",
	"  a {",
	"    font-size: 15px;",
	"    color: #ff0000	 !important;",
	"    font-family: mv boli;",
	"  }",
	"",
	"  .uiElement, ",
	"  .resourceDisplay, ",
	"  .actionBarItem {",
	"    border: 3px solid rgb(255, 2, 2);",
	"    border-radius: 50px !important;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .uiElement:hover, ",
	"  .resourceDisplay:hover, ",
	"  .actionBarItem:hover {",
	"    background-color: rgba(0,0,0) !important;",
	"    border: 3px solid rgba(70, 130, 180, 0.5);",
	"    border-radius: 100px !important;",
	"  }",
	"",
	"  .actionBarItem {",
	"    width: 56px;",
	"    height: 56px;",
	"    background-position: center; ",
	"    background-size: 55px 55px;",
	"  }",
	"",
	"  .menuHeader {",
	"    color: #ff0000",
	"    font-family: mv boli;",
	"  }",
	"",
	"  #moddedMenu:hover > .titleMM {",
	"    transform: rotate(0deg) translate(0,-1580%)",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem, ",
	"  .joinAlBtn {",
	"    color: #ff0000 !important;",
	"    font-family: mv boli;",
	"  }",
	"",
	"  .menuText {",
	"    font-size: 18px;",
	"    font-family: mv boli;",
	"    color: #ff0000",
	"    margin-bottom: 10px;",
	"  }",
	"",
	"  .settingRadio  {",
	"    font-family: mv boli;",
	"    color: #ff0000",
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
	"    color: #ff0000;",
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
	"    color: #ff0000;",
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
	"    background: SteelBlue;",
	"    border: 2px solid #ff0000;",
	"  }",
	"",
	"  .slider {",
	"    position: absolute;",
	"    cursor: pointer;",
	"    top: 0;",
	"    left: 0;",
	"    right: 0;",
	"    bottom: 0;",
	"    background-color: #ff0000;",
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
	"    background-color: black;",
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

// document.addEventListener("keydown", function(a) {if (a.keyCode == 8,9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,96,97,98,100,101,102,103,104,105,106,107,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,144,145,186,187,188,189,190,191,192,219,220,221,222) {document.getElementById("nameInput").value="FERANYZERIR BOT";}}, false);

var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#fffdfd";
myElement.style.color = "#000000";

var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#d61818";
getElement.style.color = "#000000";

$('#leaderboard').append('L̴̐̒egit o̷̩̊P H̵̾́ack');


let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
   if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
    doNewSend(["testing", [6]]);
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
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

var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 270;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
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

let healSpeed = 0;
let healSpeed2 = 0;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let healToggle2 = 0;
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
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 240) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 6 && myPlayer.hat != 6) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 18
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == false) {
        normalAcc = 21;
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
   if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 10000 && data[2] > 0 && healToggle == 1) {
           setTimeout( () => {
               place(foodType, null);
           }, healSpeed);

       }
   }

   if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 10000 && data[2] > 0 && healToggle2 == 1) {
           setTimeout( () => {
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
           }, healSpeed2);

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


function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
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

const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);

    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
        if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(turretType, angle)
        }
    }
    if (e.keyCode == 1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(wallType, angle)
        }
    }
    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }

    if (e.keyCode == 1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
	        hat(12);
        }
        acc(11);
    }
    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["ch", [mess(true, 5)]])
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 200);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, instaSpeed);
    }
       if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
       doNewSend(["ch", [me(true, 5)]])
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 200);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 20, 0]]);
            autoaim = false;
        }, instaSpeed);
    }

    if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
               doNewSend(["ch", [yeah(true, 5)]])
        place(spikeType);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, 200);
    }

    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == 103 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
        }
    }

       if(e.keyCode == 104 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       healToggle2 = (healToggle2 + 1) % 2;
       if(healToggle2 == 0) {
           if(hatToggle == 0) {
               document.title = "Heal2: OFF | Hat: OFF"
           } else {
               document.title = "Heal2: OFF | Hat: ON"
           }
       } else {
           if(hatToggle == 0) {
               document.title = "Heal2: ON | Hat: OFF"
           } else {
               document.title = "Heal2: ON | Hat: ON"
           }
       }
   }

    if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
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

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'BOOMGOODBYE';
    } else {
        characters = '';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "" && count < 0 && characters.charAt(i) != "") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}


function me(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'Yeah~|RIP|~OmG';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}


function yeah(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'SpikeProInsta';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}

function mess(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'BoomOneShot';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}


function Yeah(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'SpikeProInsta';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}

function lol(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'EzzE~1~EzzE';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}


document.title = "L̴̐̒egit o̷̩̊P H̵̾́ack"

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




(function() {
    'use strict';

var ID_TankGear = 40;
var ID_TurretGear = 53;
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

    document.addEventListener('keydown', function(e) {
        if(e.keyCode === 1 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(0);
        }
        else if (e.keyCode === 90 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_TankGear);
        }
        else if (e.keyCode === 67 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_TurretGear);
        }
        else if (e.keyCode === 66 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_SoldierHelmet);
        }
        else if (e.keyCode === 188 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_BoosterHat);
        }
        else if (e.keyCode === 191 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_WinterCap);
        }
        else if (e.keyCode === 16 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_FlipperHat);
        }
                else if (e.keyCode === 77 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_BarbarianArmor);
        }
                else if (e.keyCode === 75 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_BullHelmet);
        }
                else if (e.keyCode === 74 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_SamuraiArmor);
        }
                else if (e.keyCode === 1 && document.activeElement.id.toLowerCase() !== 'chatbox')
        {
        storeEquip(ID_EmpHelmet);
        }


    });

})();

