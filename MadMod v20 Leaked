// ==UserScript==
// @name        MadMod V 20
// @namespace    -
// @version     20
// @description 😡🅿🆁🅸🆅🅰🆃🅴😡
// @author      MadMod
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://dev.moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
/*
*/
// ==/UserScript==
let changelook = false;
let instaChat = "*;::;*" // change if you want to
let quadChat = "Madmod V20" // change if you want to
$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});
if(changelook == true){
$("#mapDisplay").css({background: `url('https://imgur.com/PwNilyb.png')`});
}
let _1536E = false;
//https://i.imgur.com/fgFsQJp.png
//https://imgur.com/9K3aTqY.png
document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});
var soundx;
soundx = "http://soundbible.com/grab.php?id=1948&type=wav"
var sound = new Audio(soundx)
var boomx;
boomx = "https://audio-vk4.ru/?mp3=%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD+%E2%80%93+Look+at+this+dude%2C+no+no+no+HAHAHAHAAHA+Meme"
var boom = new Audio(boomx)
var gunshotx;
gunshotx = "https://audio-vk4.ru/?mp3=%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD+%E2%80%93+Look+at+this+dude%2C+no+no+no+HAHAHAHAAHA+Meme"
var gunshot = new Audio(gunshotx)
var mydeathx;
mydeathx = "http://soundbible.com/grab.php?id=2121&type=mp3"
var mydeath = new Audio(mydeathx)
var musicp = 0;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");



window.onbeforeunload = null;
$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/cursors/cur-11/cur1029.cur), default');


let mouseX;
let mouseY;
let enemyX;
let enemyY;
let euse = true;
let width;
let height;
let killcount;
let showMap = 1;
let whichMap = 1;

setInterval(() => {
     killcount = parseInt(document.getElementById("killCounter").innerText);
        if (killcount > kills) {
            boom.play();
            //doNewSend(["ch", ["SAMmod"]);
        }
        kills = killcount;
},20);

/*setInterval(() => {
    if(showMap == 1){
        if(whichMap == 1){
            $("#mapDisplay").css({background: `url('https://imgur.com/PwNilyb.png')`});
            whichMap = 2;
        }else{
            $("#mapDisplay").css({background: `url('https://imgur.com/oO4U3G1.png')`});
            whichMap = 1;
        }
    }else{
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
    }
},200);*/

setInterval(() => {
    if(musicp == 1){
        sound.play();
    }
},5000);

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
var instaMessage;
var instaSpeed = 230;
var instaSpeedd = 5;
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
var woodLeft;
var stoneLeft;
var foodLeft;
var kills;
var gold;
var myStatus;
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
var healSpeedd = 5;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;
let hitToggle = 0;
let hitTToggle = 0;
let CrashToggle = 0;
const players = {};
let currentID = null;

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

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'Attack me & die';
    } else {
        characters = 'NooBs';
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
                enemyX = playerInfo[1];
                enemyY = playerInfo[2];
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

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        /*kills = document.getElementById("killCounter").innerHTML;
        if(kills < 4){myStatus = "Noob"}
        else if(kills < 11){myStatus = "Normal"}
        else if(kills < 31){myStatus = "Pro"}
        else if(kills < 51){myStatus = "INSANE"}
        else if(kills > 50){myStatus = "G O D L Y"}
        doNewSend(["ch", ["Kills: " + kills + ", Status: " + myStatus]])*/
        doNewSend(["9", [null]]);
    }
    if (e.keyCode == 69 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hitToggle = (hitToggle + 1) % 2;
        if(hitTToggle == 1){
            if(hitToggle == 1) {
                if(!isEnemyNear){
                    doNewSend(["13c", [0, 40, 0]]);
                }
            }else{
                doNewSend(["13c", [0, 0, 0]]);
                doNewSend(["13c", [0, 12, 0]]);
                doNewSend(["13c", [0, 6, 0]]);
            }
        }
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 17 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", [myPlayer.x + ", " + myPlayer.y]])
    }
    if (e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        CrashToggle = (CrashToggle + 1) % 2
    }
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }//doNewSend(["ch",["hahahahahah"]]);
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        woodLeft = document.getElementById("woodDisplay").innerHTML;
        stoneLeft = document.getElementById("stoneDisplay").innerHTML;
        if(woodLeft > 100 && stoneLeft > 75){
            place(spikeType, myPlayer.dir);
            place(spikeType, myPlayer.dir - toRad(90));
            place(spikeType, myPlayer.dir + toRad(90));
            place(spikeType, myPlayer.dir - toRad(180));
        }else{
            place(spikeType, myPlayer.dir);
            place(spikeType, myPlayer.dir - toRad(120));
            place(spikeType, myPlayer.dir + toRad(120));
        }
        doNewSend(["ch", [quadChat]]);
        setTimeout( () => {
            document.getElementById("woodDisplay").innerHTML = "Sam mod";
            document.getElementById("stoneDisplay").innerHTML = "IS OP";
            doNewSend(["9", [null]]);
        }, 75);
    }
    if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hitTToggle = (hitTToggle + 1) % 2;
    }
    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        /*autoaim = true;
        // doNewSend(["ch", ["hahahahahhaa"]]);
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, instaSpeed);*/

        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);
        doNewSend(["ch", [instaChat]]);

        setTimeout(() => {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
            gunshot.play();
        }, instaSpeed - 100);

        setTimeout(() => {
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
            autoaim = false;
        }, instaSpeed);
        if (true == true) {
            setTimeout(() => {
                if (true == true) {
                    hat(53)
                }
                doNewSend(["5", [secondary, true]]);
                //doNewSend(["ch", ["~^ReLoAd^~"]]);
                setTimeout(() => {
                    hat(6);
                    if (isEnemyNear){
                        hat(6);
                    } else if (myPlayer.y < 2400) {
                        hat(15);
                    } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                        hat(31);
                    } else {
                        hat(12);
                    }
                    acc(11);
                    doNewSend(["5", [primary, true]]);
                }, 1000);
            }, 1000);
        }
    }


   /* if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
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
    }*/
    /*if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["1d3c", [0, 0, 1]]);
        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);

        }, 200);
    }*/
    if(e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
        }, 200);
    }
    /*if(e.keyCode == 35 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        musicp = (musicp + 1) % 2
        if (musicp == 1){
            sound.play();
        }else{
            sound.stop();
    }*/


    if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "MadMod  autoHeal=off  autoHat: off"
                //doNewSend(["ch", ["MadMod  autoHeal=off  Hat: off"]]);
            } else {
                document.title = "MadMod autoHeal=off  autoHat=on"
                //doNewSend(["ch", ["MadMod  autoHeal=off autoHat=on"]]);
            }
        } else {
            if(hatToggle == 0) {
                document.title = "MadMod  autoHeal=on autoHat=off"
                //doNewSend(["ch", ["MadMod  autoHeal=on  autoHat=off"]]);
            } else {
                document.title = "MadMod autoHeal=on  autoHat=on"
                //doNewSend(["ch", ["MadMod  autoHeal=on  autoHat=on"]]);
            }
        }
    }
    if (e.keyCode == 113 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        gunshot.play();
        autoaim = true
        doNewSend(["5", [secondary, true]]);
        doNewSend(["c", [1]]);
        setTimeout(() => {
            doNewSend(["6", [12]]);
            doNewSend(["5", [secondary, true]]);
            doNewSend(["c", [1]]);
            setTimeout(() => {
                doNewSend(["6", [15]]);
                doNewSend(["5", [secondary, true]]);
                doNewSend(["c", [1]]);
                setTimeout(() => {
                    hat(idTurretGear)
                    setTimeout(() => {
                        doNewSend(["5", [primary, true]]);
                        setTimeout(() => {
                            hat(0)
                            if (myPlayer.y < 2400) {
                                hat(15);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
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
        autoaim = false
    }
    if(e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["6", [5]]);
            doNewSend(["c", [1]]);
        }, 90);


        setTimeout( () => {
            autoaim = false;
        }, 50);
    }

    /*if(e.keyCode == 33 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 34 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }*/
    if(e.keyCode == 33 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(instaSpeedd != 10){
            instaSpeedd += 1;
        }else{
            instaSpeedd = 1;
        }
            doNewSend(["ch",["Insta-kill Speed: "+ instaSpeedd + "/10"]]);
        instaSpeed = (10 - instaSpeedd) * 10 + 170;
    }
    if(e.keyCode == 34 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(healSpeedd != 10){
            healSpeedd += 1;
        }else{
            healSpeedd = 1;
        }
            doNewSend(["ch",["AutoHeal Speed: " + healSpeedd + "/10"]]);
        healSpeed = (10 - healSpeedd) * 10 + 40;
    }
    if(e.keyCode == 36 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 35 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [5]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                                document.title = "Anime  autoHeal=off  autoHat: off"
                //doNewSend(["ch", ["MadMod   autoHeal=off  Hat: off"]]);
            } else {
                document.title = "MadMod  autoHeal=off  autoHat=on"
                //doNewSend(["ch", ["MadMod autoHeal=off autoHat=on"]]);
            }
        } else {
            if(hatToggle == 0) {
                document.title = "MadMod autoHeal=on autoHat=off"
                //doNewSend(["ch", ["MadMod  autoHeal=on  autoHat=off"]]);
            } else {
                document.title = "MadMod autoHeal=on  autoHat=on"
                //doNewSend(["ch", ["MadMod  autoHeal=on  autoHat=on"]]);
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


document.title = "MadMod";
if(changelook == true){
document.getElementById("gameName").innerHTML = "MadMod V 17";
document.getElementById("leaderboard").append('MadMod');
document.getElementById("diedText").innerHTML = " NO WORRY ";
document.getElementById("gameName").style.color = "#0080FF";
document.getElementById('nameInput').style.color = "#0080FF";
document.getElementById("loadingText").style.color = "#99ccff";
document.getElementById("scoreDisplay").style.color = "#0080FF";
document.getElementById("woodDisplay").style.color = "#33FF33";
document.getElementById("stoneDisplay").style.color = "#A0A0A0";
document.getElementById("killCounter").style.color = "#0080FF";
document.getElementById("foodDisplay").style.color = "#FF3333";
document.getElementById("allianceButton").style.color = "#99ccFF";
document.getElementById("chatButton").style.color = "#99ccFF";
document.getElementById("storeButton").style.color = "#99ccFF";
document.getElementById("desktopInstructions").style.color = "#0080FF";
document.getElementById("leaderboardData").style.color = "#99ccff";
document.getElementById("ageText").style.color = "#000033";
document.getElementById("leaderboard").style.color = "#0080ff";
document.getElementById("diedText").style.color = "#101010";
document.getElementById("ageBar").style.color = "#99ccff";
document.getElementById('enterGame').style.color = "#0000ff";
document.getElementById('smallLinks').style.color = "#0000ff";
document.getElementById('altServer').style.color = "#0000ff";

//$("#chatButton").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
//$("#allianceButton").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
//$("#storeButton").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
//$("#chatButton").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
$("#allianceButton").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
$("#storeButton").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});

//$("#foodDisplay").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
//$("#woodDisplay").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
//$("#stoneDisplay").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
//$("#scoreDisplay").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
//$("#killCounter").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});

$("#actionBarItem1").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem2").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem3").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem4").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem5").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem6").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem7").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#actionBarItem8").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
//$("#actionBarItem9").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
//$("#actionBarItem10").css({background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-bKG1PBymL6XkAKZSNwzpudTaVnTMcPLeaEQp4rn8YmsyTXyF&usqp=CAU')`});
$("#topInfoHolder").css({background: 'linear-gradient(45deg, #0022cc 0%, #000000 100%)'});
$("#topInfoHolder").css({transition: '0.5s'});


$('.menuLink').css({
        'color': '#0080ff',
        'background-color': 'rgba(0, 0, 0, 0)'
});
$('.ageBarBody').css({
        'color': '#0080ff'
});
$('.menuHeader').css({
        'color': '#0080ff'
});
$('.menuText').css({
        'color': '#99ccff'
});
$('#serverSelect').css({
        'color': '#0080FF',
});
$('#mainMenu').css({
        'background-color': 'rgba(0, 0, 0, 0.95)'
});
$('#linksContainer2').css({
        'background-color': 'rgba(0, 0, 0, 0)'
});

document.getElementById('enterGame').innerHTML = 'GO FUN';
document.getElementById('setupCard').prepend = 'sUB dISGUSTED dUKE';
document.getElementById('desktopInstructions').innerHTML = 'Hotkeys:<br>V for spike<br>F for trap<br>R for insta-kill<br>F1 for age 1 instakill<br>F2 for bow instakill<br>P for autobull + attack<br>G for 2 spikes and boost pad<br>H for 2 turrets<br>L for 3/4 spikes around you<br>N for 1 windmill<br>O to leave clan<br>T to turn on/off AutoHeal<br>M to turn on/off AutoHat<br>U to turn on/off AutoTank<br>HOME to get Katana-Musket<br>PGUP to change insta-kill speed<br>PGDN to change autoheal speed<br>ESC to open settings'
document.getElementById('nameInput').placeholder = "What is your name?";
document.getElementById("loadingText").innerHTML = "[LoaDinG...]";
$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'left',
                    'background-color': 'rgba(0, 0, 0, 0)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px',
                    'align': 'center'});

$('#ageBar').css({'background-color': 'rgba(0, 0, 0, 0.3)',
                  'border-radius': '30px',
                 });
$('#ageBarBody').css({'background-color': 'rgba(0, 80, 255, 1)',
                      'border-radius': '30px',
                     });

$('.guideCard').css({'white-space': 'normal',
                    'text-align': 'left',
                    'left': '150px',
                    'background-color': 'rgba(0, 0, 0, 0)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px',
                    'align': 'center',
                    'position': 'absolute',
                    'top': '1000px',
                    'left': '1000px',
                    'height': '500px',
});
$('.setupCard').css({
                  'background-color': 'rgba(0, 0, 0, 0)'});
$('.storeHolder').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(20, 20, 60, 0.5)',
                    '-moz-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    'box-shadow': '0px 0px rgba(255, 255, 255, 0)',
                    '-webkit-border-radius': '0px',
                    '-moz-border-radius': '0px',
                    'border-radius': '0px',
                    'margin': '15px',
                    'margin-top': '15px',
                    'height': '1500px'});
$('.ytLink').css({'color': '#144db4',
                  'padding': '8px',
                  'background-color': 'rgba(0, 0, 0, 0)'});
$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 50, ff, 0.4)'});
$('#enterGame').css({'background-color': 'rgba(0, 50, ff, 0.4)'});
var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "000033";
myElement.style.color = "#0099ff";
let adimg = document.querySelector('#promoImg');
adimg.src = "https://imgur.com/3YGoIV2.png";
adimg.href = "https://www.youtube.com/channel/UCsusSt6oV_ZqJAieS-uWKwA/";
$("#youtuberOf").remove();
$("#followText").remove();
$("#promoImgHolder").remove();
$("#twitterFollow").remove();
$("#joinPartyButton").remove();
$("#partyButton").remove();
$("#youtubeFollow").remove();
$("#adCard").remove();
$("#mobileInstructions").remove();
$("#altServer").remove();
$("#downloadButtonContainer").remove();
$("#mobileDownloadButtonContainer").remove();
$(".downloadBadge").remove();
var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#000099";
getElement.style.color = "#000000";
$('#gameName').css({'color': '#000000',
                    'text-shadow': '0 1px 0 rgba(255, 255, 255, 0)',
                    'text-align': 'center',
                    'font-size': '100px',
                    'margin-bottom': '-30px'});

$('#foodDisplay').css({'border-radius': '50px'});
$('#woodDisplay').css({'border-radius': '50px'});
$('#stoneDisplay').css({'border-radius': '50px'});
$('#scoreDisplay').css({'border-radius': '50px'});
$('#killCounter').css({'border-radius': '50px'});

$('#topInfoHolder').css({'border-radius': '30px'});
$('#leaderboard').css({'border-radius': '30px'});

$('#chatButton').css({'border-radius': '30px'});
$('#allianceButton').css({'border-radius': '30px'});
$('#storeButton').css({'border-radius': '30px'});

$('#serverSelect').css({
    'cursor': 'pointer',
    'color': '#000000',
    'background-color': '#0080ff',
    'border': 'hidden',
    'font-size': '25px'
});
let newImg = document.createElement("img");
newImg.src = "https://vignette.wikia.nocookie.net/moom/images/4/4a/Skull.png/revision/latest/scale-to-width-down/340?cb=20171004215540";
newImg.style = `position: absolute; top: 160px; left: 10px; z-index: 100000; width: 100px; height: 100px; cursor: pointer;`;
document.body.prepend(newImg);
newImg.addEventListener("click", () => {
       let w = window.open("https://www.youtube.com/channel/UCsusSt6oV_ZqJAieS-uWKwA", null, `height=650, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});
document.getElementById("gameName").style.color = "#0090FF";
document.getElementById("gameName").style.textShadow = "0 15px 0 #003260, 0 5px 0 #003260, 0 10px 0 #003260";
$('#linksContainer2').prepend('<a href = "https://www.youtube.com/channel/UCsusSt6oV_ZqJAieS-uWKwA" target="_blank>Subscribe BlueSky</a>');
}

try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


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
var idFlipperHat = 31;
var idMarksmanCap = 1;
var idBushGear = 10;
var idWinterCap = 15;
var idSoldierHelmet = 6;
var idAntiVenomGear = 23;
var idMusketeerHat = 32;
var idMedicGear = 13;
var idBullHelmet = 7;
var idEmpHelmet = 22;
var idBoosterHat = 12;
var idBarbarianArmor = 26;
var idSpikeGear = 11;
var idSamuraiArmor = 20;
var idTankGear = 40;
var idTurretGear = 53;

// YOU CAN CHANGE THE KEYS OR HATS

var TankGearK = 90;
var BullHelmetK = 74;
var SoldierHelmetK = 81;
var TurretGearK = 89;
var BoosterHatK = 66;
var uneqiupK = 16;
var SpikeGearK;
var EmpHelmetK = 73;
var SpikeK = 86;
var TrapK = 70;


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 30px; font:"Comic Sans MS";">Settings</h2>
        </div>
        <div class="modal-body" style="font-size: 15px;">
            <div class="flexControl">
                <h3 style="color: #428bca; font-size: 15px;">Hat Settings</h3>
                <h3 style="color: lightblue; font-size: 12px;">Press SHIFT to unequip hats.</h3>
                <h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearK)}" id="tankGear" class="keyPressLow" color="white" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetK)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetK)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretGearK)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatK)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearK)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpHelmetK)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <hr>
                <h3 style="font-size: 15px; color: #428bca">Other Settings</h3>

                <label class="container" style="font-size: 12px; color: white">Better Map
                    <input type="checkbox" id="Check1">
                    <span class="checkmark"></span>
                </label><br>
                <label class="container" style="font-size: 12px; color: white">Better Map
                    <input type="checkbox" id="Check1">
                    <span class="checkmark"></span>
                </label><br>
            </div>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)


$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearK = cval.toUpperCase();
        TankGearK = TankGearK.charCodeAt(0);
        console.log(TankGearK);
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetK = cval.toUpperCase();
        BullHelmetK = BullHelmetK.charCodeAt(0);
        console.log(BullHelmetK);
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetK = cval.toUpperCase();
        SoldierHelmetK = SoldierHelmetK.charCodeAt(0);
        console.log(SoldierHelmetK);
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretGearK = cval.toUpperCase();
        TurretGearK = TurretGearK.charCodeAt(0);
        console.log(TurretGearK);
    }
});



$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval){
        EmpHelmetK = cval.toUpperCase();
        EmpHelmetK = EmpHelmetK.charCodeAt(0);
        console.log(EmpHelmetK);
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatK = cval.toUpperCase();
        BoosterHatK = BoosterHatK.charCodeAt(0);
        console.log(BoosterHatK);
    }
});

$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval){
        SpikeGearK = cval.toUpperCase();
        SpikeGearK = SpikeGearK.charCodeAt(0);
        console.log(SpikeGearK);
    }
});

$("#trap").on("input", () => {
    var cval = $("#trap").val();
    if (cval){
        TrapK = cval.toUpperCase();
        TrapK = TrapKey.charCodeAt(0);
        console.log(TrapK);
    }
});

var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
.keyPressLow {
    margin-left: 8px;
    font-size: 12px;
    margin-right: 8px;
    height: 20px;
    width: 40px;
    background-color: #303030;
    border-radius: 50px;
    border: none;
    text-align: center;
    color: #ffffff;
    border: 3px solid #f2f2f2;
}

.menuPrompt {
    font-size: 17px;
    font-family: 'Hammersmith One';
    color: #fff;
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

.modal-content {
    margin: 10% auto;
    width: 40%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    font-size: 14px;
    line-height: 1.6;
}

.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.modal-header {
    background: #428bca;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-body {
    padding: 10px 20px;
    background: #303030;
}

.modal-footer {
    background: #428bca;
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
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
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
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
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
  left: 4px;
  top: 0px;
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
let setOpen = 0;
if(changelook){
let newImgx = document.createElement("img");
newImgx.src = "https://i.ya-webdesign.com/images/cogs-vector-8-bit-2.png";
newImgx.style = `position: absolute; top: 270px; left: 10px; z-index: 100000; width: 100px; height: 100px; cursor: pointer;`;
document.body.prepend(newImgx);
newImgx.addEventListener("click", () => {
       if (setOpen == 0) {
            modal.style.display = "block";
            setOpen = 1
        } else {
            modal.style.display = "none";
            setOpen = 0
        }
});
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == uneqiupK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("done")
        hat(0);
    } else if (e.keyCode == 27){
        if (setOpen == 0) {
            modal.style.display = "block";
            setOpen = 1
        } else {
            modal.style.display = "none";
            setOpen = 0
        }
    } else if (e.keyCode == TankGearK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idTankGear);
    } else if (e.keyCode == SoldierHelmetK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idSoldierHelmet);
    } else if (e.keyCode == BullHelmetK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idBullHelmet);
    } else if (e.keyCode == BoosterHatK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idBoosterHat);
    } else if (e.keyCode == EmpHelmetK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idEmpHelmet);
    } else if (e.keyCode == SpikeGearK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idSpikeGear);
    } else if (e.keyCode == TurretGearK && document.activeElement.id.toLowerCase() !== 'chatbox'){
        hat(idTurretGear);
    }
})


var modal = document.getElementById("simpleModal");
var closeBtn = document.getElementsByClassName('closeBtn')[0];


closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function closeModal() {
  modal.style.display = 'none';
  setOpen = 0
}


function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    setOpen = 0
  }
}

var checkbox = document.querySelector("#Check1")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        //showMap = 1;
        if(changelook){
        $("#mapDisplay").css({background: `url('https://imgur.com/PwNilyb.png')`});
        }
    } else {
        //showMap = 0;
      }
})();// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
