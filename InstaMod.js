// ==UserScript==
// @name  �𒅒⚔༺INSTA MOD༻⚔𒅒�
// @version    3.0.0
// @author     Nuro
// @description EVERYTHING IN THE AUTHOR’S DESCRIPTION!    I MADE THIS MOD FOR ¿BEXTIYAR¿
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *dev.moomoo.io/*
// @icon         https://i.imgur.com/hkMSocA.png
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @Troubles :1. ForceConnect not has options (Force the Force connect)(Fixing)
// @Notices :1. Heal Bar is on BETA! (So, learn this before Type on FeedBack)
// @namespace -
// ==/UserScript==

//Start edit
var fh = false
$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');
$("#enterGame").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');
document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"
$("followText").remove();
document.getElementById('loadingText').innerHTML = '�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠  L̷̸̞̣̝̺̝̺̇̋̈̔̾̑ǭ̶̴̟̙̺̪̗͇̪͉̙̤̻̋̈́͋̂͑̾͌͌̒̀͑̀̔͘͘͘͜͝ǎ̵̵̧͇̜̦̖̯̲̟͇̮̲̯̜͔̤̘̅͂̾̈́̃̓̇̈̾̏̚͜ͅd̸̸̛̝̰̙̙̘̬̙͚̝̣̼̙̾̾̔͆̑̅̐ͅi̶̵͈̟̝͕̲̲͎̟̗̥̺̼͔̮͔͚̟͂̓̾̂̓͒̈́̓̿̿͘̕͝ͅn̸̷̨͉͕̜̰͙̬͍̘̯̓̄͐͑̾͛͜ͅg̷̷̲̜͚͔̜̼͕͉͎̗͇̲̘̝̝̘͍̀͛͐̾̓༻⚔𒅒� ';





document.getElementById('gameName').innerHTML = '�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�';
document.getElementById("leaderboard").append('�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�');;
document.getElementById('errorNotification').remove();
document.getElementById("pingDisplay").remove();
$("#enterGame").click( () => {
   currentheal = 100;
   if (fh == false) {
    fh = true
   } else {
       fh = false
   }
})
setInterval(() => {
if (fh == false) {
    $("#youtuberOf").html(`<div id="youtuberOf">
    ´
		<div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href="https://www.youtube.com/channel/UChujyWNvKA2u_TkpAvvWxqA?sub_confirmation=1"><i class="material-icons" style="vertical-align: top;"></i> ¿BEXTIYAR¿ </a></div>
	</div>
Featured Hacker:`) // ¿BEXTIYAR¿
} else {
    $("#youtuberOf").html (`<div id="youtuberOf">
    ´
		<div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href="https://www.youtube.com/channel/UChujyWNvKA2u_TkpAvvWxqA?sub_confirmation=1"><i class="material-icons" style="vertical-align: top;"></i> ¿BEXTIYAR¿ </a></div>
	</div>
Featured Hacker:`) // ¿BEXTIYAR¿
}
}, 10000);
$("#consentBlock").css({display: "none"});
document.getElementById("promoImgHolder").innerHTML = '</iframe><iframe width="300px"height="126.5px" src="https://www.youtube-nocookie.com/embed/xreinp0-Yj4" frameborder="0" allowfullscreen></iframe>'; // Game music !! :D
$("#menuCardHolder").append(`<div class='menuCard' id='guideCard' style='background-color:Gainsboro'><div class='menuHeader'>MooJax Features & Settings<br></div><div class='menuText'> <br> Left Arrow Key --------> <br><br>Hat(id): <input type="number" id="HAT1" /> <br> <br> Acc(id): <input type="number" id="ACC1" /> <br> <br> Right Arrow Key --------> <br> <br>Hat(id): <input type="number" id="HET1" /> <br> <br>  Acc(id): <input type="number" id="AEC1" /> <br> <br> Auto Feed [Q] (Don't Hold or clown hat!) <br> <br> InstaKill pike On/Off [;(side of P)] <br> <br> Insta Kill [R] <br> <br> Katana [,] Musket [.] <br> <br> 4 Pits [O] <br> <br> 5 Windmills [P] <br> <br> Spike + Boost [G] <br> <br> 2 Turrets [H] <br> <br> Bow+Crossbow+Musket Instakill [K] <br> <br> Get age 5 (Dont choose age 6 and 7 , 8 and 9 dont choose NOTHING) And press *K* <br> <br> 4 Pikes [L] <br> <br> 4 Turrets [J] <br> <br> 1 Pike [V] 1 Pit [F] <br> <br> Sword + Katana instakill [B] <br> <br> 1 Windmill [N] <br> <br> Unequip hat *Shift* <br> <br> Unequip Acc *<*  <br> <br> [U] For age 1 InstaKill <br> <br> AutoChoose [Polearm+Musket = (F10)][Katana+Musket = (F7)][Great.Axe+Musket = (F8)][Stick+Hammer = (F2)] <br> <br> Combos = [Z - Shadow Wings + Tank Gear] [ X - Blood Wings + Bull Helmet] [C - Angel Wings + Medic Gear] [M - Monkey Tail + Booster/Flipper/Snow ] <br> <br>  ______________________ <br> <br>  ALL features by Jack LaL. </div></div>`);
$("#resDisplay").append(`<div id='healthDisplay' class='resourceDisplay'></div>`);
$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});
document.getElementById("partyButton").innerHTML = `<label class="container">Dark Theme?
                    <input type="checkbox" id="myCheck7">
                    <span class="checkmark"></span>
                </label>`;
document.getElementById("linksContainer2").innerHTML = `<a href="https://www.youtube.com/channel/UCrZVnif0yPniQfdwvdMgf_Q" target="_blank" class="menuLink">YouTube</a> | <a href="https://discord.gg/GwzdWQy" target="_blank" class="menuLink"> Discord </a> | <a href="https://greasyfork.org/en/scripts/396859-moojax-bots-autoattack-featured-hacker" target="_blank" class="menuLink"> Little Bots </a> `
//Edit end
try {
document.getElementById("moomooio_728x90_home").style.display = "none"; //Remove sidney's ads
    $("#moomooio_728x90_home").parent().css({display: "none"});
} catch (e) {
  console.log("error removing ad");
}

window.onbeforeunload = null;
unsafeWindow.onbeforeunload = null;

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
        document.getElementById("pre-content-container").style.display = "none";
}, 1);
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
var object = "object Object";
var isEnemyNear;
var instaSpeed = 200;
var botmode = false;
var primary;
var instapike = false;
var instaCHAT = false;
var secondary;
var boostdir4 = null;
var boostDir2 = nearestEnemyAngle;
var MooJaxAntiAds = true;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var Walkbot = false;
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
var aresp = false;
var msgpack5 = msgpack;
var boostDir;
var boostDir1;
var CORESTATE = {
		inwater: {active: false},
		nearenemy: {active: false},
		intrap: {active: false},
		ipress: {active: false},
};
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
var currentheal = 100;
var allMooMooObjects = {};
let healSpeed = 30;
var messageToggle = 0;
var clanToggle = 0;
var dartheme = false;
var withtheme = true;
let healToggle = 1;
let weaponnclickright = 1;
let hatToggle = 1;
var MYID;
var allTraps = [];
var botSpan;
var doit = true;

document.msgpack = msgpack;
function n(){
     this.buffer = new Uint8Array([0]);
     this.buffer.__proto__ = new Uint8Array;
     this.type = 0;
}

unsafeWindow.WebSocket.prototype.oldSend = WebSocket.prototype.send;
unsafeWindow.WebSocket.prototype.send = function(m){
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
    if (botmode){
    Walkbot = true;
    doNewSend(["33", [nearestEnemyAngle]]);
    doNewSend(["c", [1, null]]);
    autoaim = true;
    doNewSend(["13c", [0, 7, 0]]);
    } else {
    autoaim = false;
    Walk();
    Walkbot = false;
    doNewSend(["c", [0]]);
    }
    if(data[0] == "11" && aresp){
    setTimeout(() => {
        doNewSend(["sp", [object]]);
    }, 5000);
    }
    if(data[0] == "11"){
    modal.style.display = "none";
    currentheal = 0;
    }
    if(data[0] == "11"){
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
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 21;
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
       if(data[2] < 100 && data[2] > 0){
               currentheal = data[2]
       }
       if(data[2] < 100 && data[2] > 5 && healToggle == 1) {
           setTimeout( () => {
               place(foodType, null);
           setTimeout( () => {
               currentheal = data[2]
           }, 5000);
           }, healSpeed);
       }
    }
   update();
}

function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
    console.log("Sending")
}
function Walk(){
    if(Walkbot){
    doNewSend(["33", [null]]);
    }
}
function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}
setInterval(()=>{
document.getElementById("healthDisplay").innerHTML = currentheal + " HP";
if(currentheal <= 50 && currentheal > 25){
document.getElementById("healthDisplay").style.color = "yellow"
}else if(currentheal <= 25 && currentheal > 10){
document.getElementById("healthDisplay").style.color = "DarkOrange"
}else if(currentheal <= 10 && currentheal < 25){
document.getElementById("healthDisplay").style.color = "Red"
}else if(currentheal >= 51 && currentheal > 50){
document.getElementById("healthDisplay").style.color = "lime"
}
}, 500);

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

    if (e.keyCode == 115 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (var elem of Object.values(allMooMooObjects)){
           console.info(elem);
          elem.style.opacity = 0;
        }
    }
    if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if(botmode){
        botmode = false;
        } else {
        botmode = true;
        }
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [9,]]);
        doNewSend(["5", [9, true]]);
        doNewSend(["c", [1]]);
        doNewSend(["6", [33]]);
        setTimeout( () => {
        doNewSend(["6", [12]]);
        doNewSend(["5", [12, true]]);
        }, 500);
        setTimeout( () => {
        doNewSend(["6", [15]]);
        doNewSend(["5", [15, true]]);
        }, 500);
    }
    var HAT = document.getElementById("HAT1").value;
    var ACC = document.getElementById("ACC1").value;
    if (e.keyCode == 37 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, HAT, 0]]);
        doNewSend(["13c", [0, ACC, 1]]);
    }
    var HET = document.getElementById("HET1").value;
    var AEC = document.getElementById("AEC1").value;
    if (e.keyCode == 39 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, HET, 0]]);
        doNewSend(["13c", [0, AEC, 1]]);
    }
    if (e.keyCode == 226 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 0, 1]]);
    }
    if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }
    if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(turretType, angle)
        }
    }
    if (e.keyCode == 46 && document.activeElement.id.toLowerCase() !== 'chatbox') {
          const EDITION = 0;

          var head = document.getElementsByTagName('head')[0];
          var icon = document.createElement('link');

          icon.setAttribute('type', 'image/png');
          icon.setAttribute('rel', 'shortcut icon');

                if (EDITION == 0) icon.setAttribute('href', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAA3NCSVQICAjb4U/gAAABHVBMVEX///9FRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUXt7e3r6+vp6enn5+fl5eXj4+Ph4eHf39/d3d3b29vZ2dnX19fV1dXT09PR0dHPz8/MzMzJycnHx8fFxcXDw8PBwcG/v7+9vb27u7u5ubm3t7e1tbWzs7OxsbGvr6+tra2rq6upqamnp6elpaWjo6OhoaGfn5+dnZ2ZmZmVlZWTk5ORkZGPj4+NjY2Li4uJiYmHh4eFhYWDg4OBgYF+fn58fHx6enp4eHh2dnZ0dHRycnJwcHBubm5sbGxqampmZmZiYmJgYGBeXl5cXFxaWlpYWFhWVlZUVFRSUlJQUFBOTk5MTExKSkpISEhGRkZFRUUChAOfAAAAX3RSTlMAESIzRFVmd4iZqrvM3e7//////////////////////////////////////////////////////////////////////////////////////////////////////////4gnOa8AAAAJcEhZcwAACpwAAAqcAfTS3xIAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzE3LzE3CP1IFgAADiFJREFUeJztnXsjG00XwJ8gaULYhLRudSlFL4RS9PKUVsuDEooIkc33/xiviMjuOWdusTOz+s7vX8maM5k9c25z5p9/HA6Hw+FwOBwOh8PhcDgcDofD4XA4HHpIdCdT6Uxftr9/oP7AQH9/ti+TTiW7E7bHp5FEdyqTDUhNM5DNpP7CaehKZrIi0YNkM8m/ZxK6Upl+FeFb9GdSXbbH/mi6Ur3CRc9joPcpT0Kys18erYR0t21JOqE7/aif/qnPQUpJ5cmQTdmWSZ5EOmrpm6SfxsaQyOgRv0HmCUyBpl+/Rdq2fAKe6RW/wTPbMnKIXvVRxFcdanz5w2RsS0qSjMTqkSObtC0txtjP3yRui6BH+u2/Lv36d70492pipJD37skXRiZezRXX//1VupZ9TjZWtqGU8q8efVt59dwT8GJmZeu4KvO8GG0H4r2/8nN1KieSvU1ueu1XRfjQ2NgE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');
                if (EDITION == 1) icon.setAttribute('href', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAA3NCSVQICAjb4U/gAAABNVBMVEX///9FRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUXfxlXdxFXcw1Xbw1XZwVTawVTXv1TVvVTTvFTSu1TPuVPRuVLNt1PLtVPJtFPIs1PGsVLFsVLEr1LDrlLBrVK/q1K9qlG6p1G5plG3pVG1o1CyoVCxoFCvnlCtnVCsm1CqmU+nl0+llU+jlE+hkk+gkU6fkE6dj06bjU6Yi06Zi06XiU2Uh02RhU2Pg02NgUyLgEyJfkyIfUyFe0yDeUuBeEt9dEt8c0t4cEp2bkp0bEpyakpwaUpuZ0ltZklqZEloYklmYUhmYEhlYEhjXkhiXUhgXEheWkhbWEdaV0dYVUdWU0dVUkdSUEZPTkZQTkZNTEZOTEZMS0ZKSkZKSUZISEVFRUVGRkXhDf0HAAAAZ3RSTlMAESIzRFVmd4iZqrvM3e7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9O0EYAAAAAlwSFlzAAAKnAAACpwB9NLfEgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDMvMTcvMTcI/UgWAAAJuElEQVR4nO2de1/URhSG5RKuC7NgVXBRRClaa3XFirRY74ooxVK8K1Jgk+//EbrLwrLJe+aWzCT8wnn+JLPhzOTM7cybkzNnGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGMYFfQMjY2E4NjLQV7QlBdA3ODIedhgfGTxVjdA71FX5TiMM9RZtV14MY+3bDBVtWS70VWT1D8PKKegIg/Lqtxgo2j7P9Iyo6x+GIz1F2+iTHoX7d7pBmVtA+/wPfKBoK/2h6f9HlHYc6DOrfxiWdS4wGADaVIq21A/S9Q9SyhVRr3n9w7CMq2ILByinC9jUPwyLttY9/XYN0F+0vc6h1gCbi7WJau3ev8SlwaLtdc4o1HGvLg6p78HF0aLtdQ6EQPbmRYefoQXGi7bXNbgK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');

          head.appendChild(icon);
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
	        hat(12);
        }
        acc(11);
    }
    if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
    hat(40);
        acc(19);
    }
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
    hat(7);
        acc(18);
    }
    if (e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
    hat(13);
        acc(13);
    }
    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
                    doNewSend(["13c", [0, 53, 0]]);
                    doNewSend(["13c", [0, 0, 1]]);
                    doNewSend(["13c", [0, 21, 1]]);
        }, 80);
        setTimeout( () => {
        doNewSend(["5", [primary, true]]);
        }, 10);
            setTimeout( () => {
            doNewSend(["5", [secondary, true]]);
            doNewSend(["c", [0, null]]);
                    doNewSend(["13c", [0, 6, 0]]);
                    doNewSend(["13c", [0, 0, 1]]);
                    doNewSend(["13c", [0, 21, 1]]);
            if (instaCHAT == true) {
             if (instapike == true) {
             doNewSend(["5", [spikeType]]);
             doNewSend(["c", [1]]);
             doNewSend(["c", [0]]);
                 autoaim = false;
             } else {
            doNewSend(["c", [1]]);
            doNewSend(["c", [0]]);
            autoaim = false;
             }
            doNewSend(["ch", [ichat(true, 5)]])
            } else {
             if (instapike == true) {
             doNewSend(["5", [spikeType]]);
             doNewSend(["c", [1]]);
             doNewSend(["c", [0]]);
                 autoaim = false;
             } else {
            doNewSend(["c", [1]]);
            doNewSend(["c", [0]]);
            autoaim = false;
             }
            }
        }, 200);
        setTimeout(() => {
        doNewSend(["5", [primary, true]]);
        }, 1800);
    }


    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }
    if(e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (instapike == false) {
            instapike = true;
        doNewSend(["ch", ["On"]]);
        } else {
        doNewSend(["ch", ["Off"]]);
            instapike = false;
    }
    }
    if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            } else {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            } else {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            }
        }
    }
    if(e.keyCode == 188 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 190 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 189 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 113 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [8]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
        doNewSend(["5", [1]]);
        doNewSend(["c", [1]]);
        doNewSend(["c", [0]]);
    }
    if(e.keyCode == 118 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
            }
    if(e.keyCode == 119 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [1]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 121 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [5]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [12]]);
        doNewSend(["6", [15]]);

    }
    if(e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["6", [5]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["c", [1]]);
            doNewSend(["13c", [0, 53, 0]]);
            autoaim = false;
        }, instaSpeed);
    }
    if(e.keyCode == 66 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["6", [4]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["c", [1]]);
            doNewSend(["13c", [0, 53, 0]]);
            autoaim = false;
        }, instaSpeed);
}
    if(e.keyCode == 120 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            } else {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
            } else {
                document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"
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


document.title = "�𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠༻⚔𒅒�"

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
var SpikeKey = 86;
var PitKey = 70;
var PikeKey = 86;
var WindKey = 78;
try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;"> �𒅒⚔༺I̷̷̵̡̛͔͔̭̩̤̥̤̺͇͙͓͙̙͖͙̜̭͇̋͗̂͐͆̑̓̽̓̄̆̈́̌̌͋͗͘͘͜͠N̵̶̷̢̧̨̗̹̞͖̺̻̼̤̦͚̬̟͙͓̙̉̐̒̒̆͆̽̈́̌̓̐́̀͛̉̊͒̕͜S̷̶̵͚͉͓̞̹̬̤̬̞̩͓̬̣̈́̀͛̈̔͋͋̀́̽̈́̀̄̕ͅT̵̷̵̢̘̥̟̺̹̫̼̦̱̹͓̜͉̆̾́͗̽͊͊̉̅͐͆͋͐̾̏͊̉̔̀̾̊͘͠͝A̸̶̷̛̙͓̱͓̠͇͕̫͇͋̈́̾̊̒̃̽̓̔́̑̈́ͅ ̴̴̶̧̡̢̛̘̮̦̥̤̤̪̦͇͓̫͙̩͕̗̹̍̀̐̉͑̏̓̿̅̽̑̍̽̽͛̓̅̌̎̉̋̇M̶̷̷̨̨͎̖̮̺̻̗̰̼͍̭̙͔͉͚̪̪̬̣͓̼̼͈̬͚̺͎̜͂̽̅͂̄͑͊͌́͑̕Ơ̸̴̷̭̜̹̪̭͇͓͚̪̲̙̊̆̏͗̑̽͗̀̅̉̔͂̀̆̓̇̓̽̈́̿̕͘͠͝Ḑ̶̶̵͖̙̪̱͇̙̺̱̯̯̣͓̘̠̻̞̰̩̯͙̍̽̈́̉͒̓͐̀̑͊̈́̆͆͑̽͊͠  S̴̮̻̗̗̥̝̺̲̖̿̒͌̌̀É̸̳͙̹̠̘͒͐̒͜T̴͇̤̀̀̈͘T̸̨͚̹̪͙̜̪̰̑͜I̸̮̋͑̀͋̾͊̚͝N̵͍̖̳̟̠̱̳̩̪͑͛̓̎͝Ģ̸̩̩̫̩͐̃͋̑̎̈́̓̚Ś̸̟̝͙͚̖̤͉̲̀̎̔̐͂́̋̃͘༻⚔𒅒� </h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <h3 style="color: #2196F3; font-size: 17px;">To unquip a hat press: LEFT SHIFT</h3>
                <h3 style="color: #2196F3; font-size: 17px;">To unquip a acc press: THE "<" KEY</h3>
                <br><h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br>
                <br><h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/><br>
                <br><h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/><br>
                <br><h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpKey)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Samurai Armor:</h3> <input value="${String.fromCharCode(SamuKey)}" id="samu" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br>
                <h3 style="font-size: 17px;"> Settings </h3>
                <label class="container">Show biomes on the map ?(Snow, Plains, desert)
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Put pike on the InstaKill?
                    <input type="checkbox" id="myCheck2">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Put autochat on Instakill?
                    <input type="checkbox" id="myCheck3">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Put secondary on RightClick?
                    <input type="checkbox" id="myCheck4">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Auto Respawn?(wait 5 seconds when die)
                    <input type="checkbox" id="myCheck5">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Dark Theme
                    <input type="checkbox" id="myCheck6">
                    <span class="checkmark"></span>
                </label>
               <h3 style="font-size: 17px;"> Autochat settings </h3>
               <br>AutoChat:<input type="text" value="1" id="ach1" width="100" height="50"/><br>
               <br>InstaKill AutoChat:<input type="text" value="2" id="ach2" /><br>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">Edit and live save your changes !</h3>
            <p>Sub to (¿BEXTIYAR¿)</p>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)


$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log(TankGearKey);
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log(BullHelmetKey);
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log(SoldierHelmetKey);
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log(TurretKey);
    }
});



$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval){
        EmpKey = cval.toUpperCase();
        EmpKey = EmpKey.charCodeAt(0);
        console.log(EmpKey);
    }
});

$("#samu").on("input", () => {
    var cval = $("#samu").val();
    if (cval){
        SamuKey = cval.toUpperCase();
        SamuKey = SamuKey.charCodeAt(0);
        console.log(SamuKey);
    }
});
$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
    }
});

$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval){
        SpikeGearKey = cval.toUpperCase();
        SpikeGearKey = SpikeGearKey.charCodeAt(0);
        console.log(SpikeGearKey);
    }
});

$("#trap").on("input", () => {
    var cval = $("#trap").val();
    if (cval){
        TrapKey = cval.toUpperCase();
        TrapKey = TrapKey.charCodeAt(0);
        console.log(TrapKey);
    }
});

var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
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
    background: #000;
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
    background: #000;
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
  background-color: #cf2727;
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


document.addEventListener('keydown', function(e) {
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("done")
        storeEquip(0);
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
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

var checkbox = document.querySelector("#myCheck")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
        console.log('checked')
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
    }
})
var checkbox2 = document.querySelector("#myCheck2")

checkbox2.addEventListener('change', function() {
    if (this.checked) {
        instapike = true;
    } else {
        instapike = false;
    }
})
var checkbox3 = document.querySelector("#myCheck3")

checkbox3.addEventListener('change', function() {
    if (this.checked) {
        instaCHAT = true;
    } else {
        instaCHAT = false;
    }
})
var checkbox6 = document.querySelector("#myCheck6")

checkbox6.addEventListener('change', function() {
    if (this.checked) {
        colorsblack();
    } else {
        colorswhite();
    }
})
var checkbox7 = document.querySelector("#myCheck7")

checkbox7.addEventListener('change', function() {
    if (this.checked) {
        colorsblack();
    } else {
        colorswhite();
    }
})
var checkbox4 = document.querySelector("#myCheck4")

checkbox4.addEventListener('change', function() {
    if (this.checked) {
        clickwithright = 1;
    } else {
        clickwithright = 0;
    }
})
var checkbox5 = document.querySelector("#myCheck5")

checkbox5.addEventListener('change', function() {
    if (this.checked) {
        aresp = true;
    } else {
        aresp = false;
    }
})
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
        characters = "Try To Kill Me Noob!";
    } else {
        characters = 'INSTA';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != " " && count < 2 && characters.charAt(i) != " ") {
           result += " ";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
var lel = false;
function nothig() {
    var lel = false;
    console.log("fOlS");
}
setInterval(() => {
    var ach = document.getElementById("ach1").value;
    if(ach == 1) {
        nothig();
    } else {
        doNewSend(["ch", [ach]]);
    }
}, 1000);

unsafeWindow.admob = {
    requestInterstitialAd: ()=>{},
    showInterstitialAd: ()=>{}
}
function ichat(space, chance) {
    var ach1 = document.getElementById("ach2").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
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
var accessories = [{
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


var hats = hats = [{
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
		spdMult: .5
	}, {
		id: 20,
		name: "Samurai Armor",
		price: 12e3,
		scale: 120,
		desc: "increased attack speed and fire rate",
		atkSpd: .78
	}, {
		id: 16,
		name: "Bushido Armor",
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
	}]


var objects = [{
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
		limit: 1,
		layer: -1
	}]

    var weapons = [{
		id: 0,
		type: 0,
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
		pre: 1,
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
		pre: 3,
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
		pre: 9,
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
		pre: 12,
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
		speed: 300
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
		pre: 12,
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
	}]

var activeObjects = [{
		name: "apple",
		desc: "restores 20 health when consumed",
		req: ["food", 10],
		consume: function (e) {
			return e.changeHealth(20, e)
		},
		scale: 22,
		holdOffset: 15
	}, {
		age: 3,
		name: "cookie",
		desc: "restores 40 health when consumed",
		req: ["food", 15],
		consume: function (e) {
			return e.changeHealth(40, e)
		},
		scale: 27,
		holdOffset: 15
	}, {
		age: 7,
		name: "pizza",
		desc: "restores 30 health and another 50 over 5 seconds",
		req: ["food", 30],
		consume: function (e) {
			return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
		},
		scale: 27,
		holdOffset: 15
	}, {
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
		name: "stone wall",
		desc: "provides improved protection for your village",
		req: ["stone", 25],
		health: 900,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		pre: 1,
		name: "castle wall",
		desc: "provides powerful protection for your village",
		req: ["stone", 35],
		health: 1500,
		scale: 52,
		holdOffset: 20,
		placeOffset: -5
	}, {
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
		pre: 1,
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
		pre: 2,
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
		pre: 1,
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
		pre: 1,
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

var allContainers = [accessories, hats, objects, weapons, activeObjects];
function obs(objName){
    for (let container of allContainers){
       for (let obj of container){
           if (obj.name.toLowerCase() == objName.toLowerCase()){
             return obj.id;
           }
       }
    }

    return -1;

}

function activeObs(objName){
    for (var i=0;i<activeObjects.length;i++){
      let activeObj = activeObjects[i];
      if (activeObj.name.toLowerCase() == objName.toLowerCase()){
          return i;
      }

    }
}
var styleItems = document.createElement("style");
styleItems.type = "text/css";
styleItems.appendChild(document.createTextNode(`

	#sback, #okbtn {
		font-family: sans-serif;
		font-weight: 300;
		border: none;
		outline: none;
		font-size: 15px;

	}

	#sback {

		border-radius: 5px;
		padding: 9px;
		cursor: pointer;
		margin-top: -1.5px;
		background-color: #d85858;
		color: white;


	}

	#okbtn {

		border-radius: 5px;
		padding: 9px;
		cursor: pointer;
		margin-top: -1.5px;
		background-color: #7399d6;
		color: white;

	}

	#flexlow {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;

	}

	#changeAlert {
		font-family: sans-serif;
		font-weight: 200;
		font-size: 23px;


	}

	#typealert {
		font-family: sans-serif;
		font-weight: 200;
		font-size: 17px;
		width: 95%;
		margin-left: 2.5%;
		text-align: center;
		margin-top: 5.5px;
	}

#hatChangeAlert {
    position: absolute;
    padding: 5px;
    top: -300px;
    opacity: 0;
    left: 20px;
    width: 300px;
    height: 165px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);



}

#changeAlert {
 display: inline-block;

}

#hatimgmain {
 	width: 50px;
 	height: 50px;
 	display: inline-block;


}

#flextop {
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;

}

#tbtn {
 position: absolute;
 left: 0;
 top: 0;
 width: 80px;
 height: 80px;
 opacity: 0;

}

.chosenhat {
  border: 1px solid #7daaf2;
}

.chosenwing {
  border: 1px solid #7daaf2;
}

.inalertHat {
     margin-left: 30px !important;
     margin-top: 10px !important;
}

.inalertWing {
     margin-left: 30px !important;
     margin-top: 10px !important;
}

option {
  border-radius: 0px;
}

#hrule {
  margin-top: 20px;
}

#endwrap {
 margin-top: 15px;
 width: 100%;
text-align: center;
margin-bottom: -15px;
}

#createEnd {
width: 100%;
text-align: center;
margin: 0 auto;

}

.lowprompt {
margin-bottom: -100px !important;

}


.lowpromptdetail {
margin-left: 25px;
color: #4c4c4c !important;
margin-top: 20px !important;
margin-bottom: 0 !important;

}

.toplow {
  margin-top: 10px !important;
}


.objplace {
   width: 45px;
   height: 45px;
   margin-bottom: -17px;
   border: 0.5px solid #f2f2f2;
   border-radius: 10px;
   margin-left: 5px;
   cursor: pointer;
}

.selPrev {
width: 80px;
height: 80px;
display: block;
margin: auto;
margin-top: 10px;

}

#choiceWrap {
display: flex;
justify-content: space-evenly;
align-items: center;


}

#middlePlus {
display: inline-block;
width: 50px;
height: 50px;
font-weight: 100;
font-family: sans-serif;
color: #4A4A4A;
opacity: 0.8;

}

.selectObj {
cursor: pointer;
 width: 100px;
height: 100px;
background-color: #fcfcfc;
display: inline-block;
border-radius: 10px;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

}


.selectObjAlert {
 cursor: pointer;
 width: 100px;
 height: 100px;
 background-color: #fcfcfc;
 display: inline-block;
 border-radius: 10px;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

}

#mnwrap {
  width: 100%;
text-align: center;
margin-bottom: -7px;
margin-top: 8px;
}

#flexControl {


}

#keyPress {
   margin-left: 20px;
   height: 20px;
   width: 50px;
   background-color: #e5e3e3;
   border-radius: 7.5px;
font-size: 16px;
border: none;
text-align: center;
color: #4A4A4A;

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

#keyPress:focus {
border: none;
outline: none;
}

.keyPressLow:focus{

outline: none;
}

input[type=range] {
  -webkit-appearance: none;
  margin-top: 0px;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
#healSlider::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: #dddddd;
  border-radius: 5px;
}
#healSlider::-webkit-slider-thumb {
  width: 25px;
height: 25px;
background: rgb(142, 210, 101);
border-radius: 12.5px;
margin-top: -6.25px;
  -webkit-appearance: none;

}


#speedContain {
width: 80%;
height: 40px;
background-color: #75d679;
border-radius: 20px;
margin-left: 10%;
box-shadow: 1px 1px 4px gray;
}

#currentSpeed {
height: 40px;
width: 100%;
text-align: center;

color: white;
font-weight: 400 !important;
font-family: sans-serif;
font-size: 20px;
}

#numfocus {
  background-color: white;
color: #75d679;
border-radius: 20px;
margin-right: -24%;
padding: 10px;
display: inline-block;
font-size: 20px;
font-weight: 400;
font-family: sans-serif;

}

#cspeed {
      display: inline-block;
      height: 300px;
margin-top: 0px;
margin-left: -10px;
color: white;
font-weight: 400 !important;
font-family: sans-serif;
font-size: 20px;

}



.menuPrompt {
font-size: 18px;
font-family: 'Hammersmith One';
color: #4A4A4A;
flex: 0.2;
text-align: center;
margin-top: 10px;
display: inline-block;

}

#mainSettings {
   width: 400px;
   height: 375px;
overflow-y: scroll;

}

#settingsTitle {
font-size: 32px;
font-family: 'Hammersmith One';
color: #4A4A4A;
width: 100%;
text-align: center;
margin-top: 10px;

}

#rmvMonkey {
   font-size: 16.5px;
   opacity: 0.9;

}



#infoDiv {
  position: absolute;
  left: -25%;
  right: 0%;
  text-align: center;
  background-color: rgba(252, 252, 252, 0.5);
  display: inline-block;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

}

#autotitle {
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 200;
}

#arrivalest {
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 200;
}

#timeest {

}

#cancelTrip {
  background-color: rgb(203, 68, 74);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 17px;
  font-family: sans-serif;
  cursor: pointer;
  outline: none;
  font-weight: 300;
  margin-bottom: 18px;
  width: 112px;
  height: 33.6px;

}

#spotDiv {
position: absolute;
width: 10px;
height: 10px;
marginLeft: -5px;
marginTop: -5px;
opacity: 1;
background-color: rgb(203, 68, 74);
left: 0;
right: 0;
border-radius: 5px;
z-index: 1000;

}

@media only screen and (max-width: 765px){
#numfocus {
margin-right: -13%;
}
}

#botText {
color: #5aed57;
font-size: 20px;
font-family: sans-serif;
font-weight: 300;
}

`))

window.history.replaceState = () => {};
window.history.pushState = () => {};

const force = getParam("force-connect", window.location.search);
const party = getParam("server", window.location.search);
const ip = /\d+:\d+:\d+/.exec(party);
console.log(force, party, ip);
if (force !== null && party !== null && ip && ip[0]){
    window.location = window.location.origin + window.location.pathname + `?force-connect=${ip[0]}`;
}

WebSocket = class extends WebSocket {
    constructor(...args){
        if (force !== null && /\d+:\d+:\d+/.test(force)){
            const allServers = [];
            const servers = window.vultr.servers;
            let len = servers.length;
            let server;
            let games;
            let gameLen;
            while (len--) {
                server = servers[len];
                games = server.games;
                gameLen = games.length;
                while (gameLen--) {
                    allServers.push({id: `${server.region}:${server.index}:${gameLen}`, ip: server.ip, gameIndex: gameLen});
                }
            }
            const s = (function (id) {
                let len = allServers.length;
                while (len--) {
                    if (allServers[len].id === id) return allServers[len];
                }
                return false;
            })(force);
            args[0] = args[0].replace(/ip_[a-z0-9]+/, `ip_${s.ip}`).replace(/\?gameIndex=\d+/, `?gameIndex=${s.gameIndex}`);
        }
        super(...args);
    }
};

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
window.sessionStorage.force = coreURL.searchParams.get("fc");


if (window.sessionStorage.force != "false" && window.sessionStorage.force && window.sessionStorage.force.toString() != "null"){
    console.error(window.sessionStorage.force);
    /*alert(window.location.force);*/
    document.getElementsByClassName("menuHeader")[0].innerHTML = `Servers <span style="color: red;">Force (${window.sessionStorage.force})</span>`;
}


var oldAlert = unsafeWindow.alert;
unsafeWindow.alert = function(){
                          let coreURL =  new URL(window.location.href);
                          let server = coreURL.searchParams.get("server");
                          window.sessionStorage.force = server;
                          window.sessionStorage.dog = server;
                          console.error(window.sessionStorage.force);
                          console.error(window.sessionStorage.dog);
                          console.error(server);
                          document.title = "Server is full... forcing connect"
                          setTimeout(() => {
                                   console.error(window.sessionStorage.force);
                                  window.location = `http://moomoo.io?force-connect=${server}`;
                          }, 2500);
                  }
class ForceSocket extends WebSocket {
          constructor(...args){
              if (window.sessionStorage.force != "false" && window.sessionStorage.force && window.sessionStorage.force.toString() != "null"){
                  let server = window.sessionStorage.force;
                  let sip = "";
                  for (let gameServer of window.vultr.servers){
                      if (`${gameServer.region}:${gameServer.index}:0` == server){
                               sip = gameServer.ip;
                      }
                  }
                  args[0] = `wss://ip_${sip}.moomoo.io:8008/?gameIndex=0`;

                  console.error("Setting false");
                  console.error(args[0]);
                  delete window.sessionStorage.force;
              }

             super(...args);

          }


}
let clickwithright = 1;
$("#gameCanvas").mousedown(function(e){
        	if(e.which == 3 && clickwithright == 1)
        		{
                doNewSend(["5", [secondary, true]]);
                }
    	});
//Credit to Kirito Man
function colorsblack(){
document.getElementById("gameName").style.color = "black"
$('.menuCard').css({'color':'#000000'});
$('#guideCard').css({'color': '#000000'});
$('.menuLink').css({'color': '#000000'});
$('#serverSelect').css({'color': '#ffffff',
                        'background-color': '#000000'});
document.getElementById('loadingText').style.color = "black"
$('.modal-footer').css({'background-color': '#000000'});
$('.modal-header').css({'background-color': '#000000'});
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
document.getElementById("promoImgHolder").style.backgroundColor = "black";
document.getElementById("setupCard").style.boxShadow = "0px 7px black";
document.getElementById("guideCard").style.boxShadow = "0px 7px black";
document.getElementById("promoImgHolder").style.boxShadow = "0px 7px black";
document.getElementById("gameName").style.textShadow = "0 1px 0 #333333, 0 2px 0 #333333, 0 3px 0 #333333, 0 4px 0 #333333, 0 5px 0 #333333";
document.getElementById("followText").remove();
document.getElementById("youtubeFollow").remove();
document.getElementById("partyButton").style.color = "black";
dartheme = true;
withtheme = false;
}

function colorswhite(){
document.getElementById("scoreDisplay").style.color = "white";
document.getElementById("woodDisplay").style.color = "white";
document.getElementById("stoneDisplay").style.color = "white";
document.getElementById("killCounter").style.color = "white";
document.getElementById("foodDisplay").style.color = "white";
document.getElementById("setupCard").style.backgroundColor = "white";
document.getElementById("guideCard").style.backgroundColor = "white";
document.getElementById("promoImgHolder").style.backgroundColor = "white";
document.getElementById("gameName").style.color = "white"
$('#guideCard').css({'color': '#ffffff'});
document.getElementById("partyButton").style.color = "white";
document.getElementById("setupCard").style.backgroundColor = "white";
$('#serverSelect').css({'color': '#000000',
                        'background-color': '#ffffff'});
document.getElementById('loadingText').style.color = "white"
$('.menuButton').css({'background-color': '#ffffff'});
$('.menuLink').css({'color': '#a56dc8'});
$('.modal-header').css({'background-color': '#cf2727'});
$('.modal-footer').css({'background-color': '#cf2727'});
document.getElementById("leaderboard").style.color = "white"
document.getElementById('diedText').style.color = "white";
document.getElementById("setupCard").style.boxShadow = "0px 7px white";
document.getElementById("guideCard").style.boxShadow = "0px 7px white";
document.getElementById("promoImgHolder").style.boxShadow = "0px 7px white";
document.getElementById("enterGame").style.backgroundColor = "#7ee559"
document.getElementById("gameName").style.textShadow = "0 1px 0 #c4c4c4, 0 2px 0 #c4c4c4, 0 3px 0 #c4c4c4, 0 4px 0 #c4c4c4, 0 5px 0 #c4c4c4";
withtheme = true;
dartheme = false;
}
//Credits
