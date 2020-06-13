// ==UserScript==
// @name           MooMoo.io | .:GodMod:. | 2020
// @namespace      -
// @version          ╳GodMod1.0╳
// @description    | Just write a review for more hacks :)【Hacks & Hackkeys】 ➜ 〖 AUTO HEAL 〗 〖 INSTAKILL - R 〗 〖 AUTOSPIKE - V 〗 〖 AUTOCLAN - 2 [Numpad] OR ▼ 〗 〖 AUTOCHAT - 8 [Numpad] OR ▲ 〗 〖 BOOST & SPIKE - G 〗 〖 AUTOWINDMILL - N 〗 〖 HATMACRO 【U CAN CHANGE A KEY FOR HAT MACRO】 〗 〖 PREMIUM MAP 〗 〖 INSTAWINDMILL´S - O 〗 〖 INSTATRAPS / BOOSTPADS - I 〗 〖 CX insta - SPACEBAR 〗 〖 INSTASPIKE´S - Ü 〗 〖 AIMCURSOR 〗 〖 BIG SHOP 〗 〖LABYMOD WEBSITE - TOP LEFT【WOLF SYMBOL】 〗 〖GAMING MUSIC〗 
// @author         .:Noodmy:.
// @match          *://moomoo.io/*
// @match          *://dev.moomoo.io/*
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598725
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==


document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});

window.onbeforeunload = null;

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
var instaSpeed = 250;
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

let healSpeed = 100;
var messageToggle = 1;
var clanToggle = 0;
let healToggle = 2;
let hatToggle = 2;

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
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == false) {
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
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                place(foodType, null);
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

    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(6);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(6);
        } else {
	        hat(6);
        }
    }

        if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(0);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(0);
        } else {
	        hat(0);
        }
    }
        if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(40);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(40);
        } else {
	        hat(40);
        }
    }
        if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(53);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(53);
        } else {
	        hat(53);
        }
    }
        if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(20);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(20);
        } else {
	        hat(20);
        }
    }
        if (e.keyCode == 86 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(7);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(7);
        } else {
	        hat(7);
        }
    }
            if (e.keyCode == 81 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(foodType)
    }


    if(e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 53, 0]]);
            autoaim = false;
        }, instaSpeed);
    }

    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 53, 0]]);
            autoaim = false;
        }, instaSpeed);
    }


    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == 220 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal - OFF | Hat - OFF"
            } else {
                document.title = "Heal - OFF | Hat - ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "MooMod"
            } else {
                document.title = "MooMod"
            }
        }
    }
   
    if(e.keyCode == 111 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal - off|🐺GodMod🐺"
            } else {
                document.title = "Heal - off|🐺GodMod🐺"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal - on|🐺GodMod🐺"
            } else {
                document.title = "Heal - on|🐺GodMod🐺"
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
        characters = 'GodMod You Cant Win Nub!!';
    } else {
        characters = 'GodMod'
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           result += "_";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}

document.title = "🐺GodMod🐺"

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

document.getElementById('promoImgHolder').innerHTML = '<iframe width="420px" height="236.25px" src="https://www.youtube.com/watch?v=2AEoZU1motM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
document.getElementById('adCard').innerHTML = '<iframe width="420px" height="236.25px" src="https://www.youtube.com/watch?v=FC26v0u1U2o" frameborder="0" allowfullscreen></iframe>';
