// ==UserScript==
// @name         MooMoo.io Katana + Musket / Great Axe + Musket Hack
// @namespace    -
// @version     The Latest Version
// @description  -
// @author      Nuro
// @match        *://moomoo.io/*
// @match        http://dev.moomoo.io/*
// @match        *sandbox.moomoo.io/*
// @match        *abc.moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

var hud = document.createElement("div");
hud.innerHTML = '<div> <div id="WSDIhtmlDiv" class="hackDisp" border="0" style="opacity: 1;width: 200px; position: absolute;top: 333px;left: 20px;pointer-events: none;"> <input id="WSDirectInputhtml" class="hackDisp" type="text" position="absolute" placeholder="WS Sender" style="padding: 6px;font-size: 20px;color: #fff;background-color: rgba(0, 0, 0, 0.25);-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;pointer-events: all;border: 0;text-align: center;"> </div></div><div style="width: 100%;position: absolute;top: 20px;right: 390px;margin: auto;text-align: center;color: red;font-size: 40px;opacity: 1;" id="TS1Shothtml" class="hackDisp"></div><table id="WSTable" class="hackDisp" style="opacity: 1;min-width: 100px;max-width: 157.8px;max-height: 296px;position: absolute;top: 20px;left: 20px;color: #fff;background-color: rgba(0, 0, 0, 0.25);border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px;pointer-events: none;text-align: left;" border="0px"> <tbody><tr> <th id="WS1">No Activity Yet</th> </tr> <tr> <td id="WS2">No Activity Yet</td> </tr> <tr> <td id="WS3">No Activity Yet</td> </tr> <tr> <td id="WS4">No Activity Yet</td> </tr> <tr> <td id="WS5">No Activity Yet</td> </tr> <tr> <td id="WS6">No Activity Yet</td> </tr> <tr> <td id="WS7">No Activity Yet</td> </tr> <tr> <td id="WS8">No Activity Yet</td> </tr> <tr> <td id="WS9">No Activity Yet</td> </tr> <tr> <td id="WS10">No Activity Yet</td> </tr> <tr> <td id="WS11">No Activity Yet</td> </tr> <tr> <td id="WS12">No Activity Yet</td> </tr> <tr> <td id="WS13">No Activity Yet</td> </tr> <tr> <td id="WS14">No Activity Yet</td> </tr> <tr> <td id="WS15">No Activity Yet</td> </tr> <tr> <td><input type="checkbox" id="noShowDWS" style="pointer-events: all;" checked="">Filter Out PD, pp, &amp; rmd</td> </tr> </tbody></table> <table id="WSBTable" class="hackDisp" style="opacity: 1;min-width: 100px;max-height: 296px;position: absolute;top: 20px;left: 185px;color: #fff;background-color: rgba(0, 0, 0, 0.25);border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px;pointer-events: none;text-align: left;" border="0px"> <tbody><tr> <th id="WSB1">Focus not set</th> </tr> <tr> <td id="WSB2">Focus not set</td> </tr> <tr> <td id="WSB3">Focus not set</td> </tr> <tr> <td id="WSB4">Focus not set</td> </tr> <tr> <td id="WSB5">Focus not set</td> </tr> <tr> <td id="WSB6">Focus not set</td> </tr> <tr> <td id="WSB7">Focus not set</td> </tr> <tr> <td id="WSB8">Focus not set</td> </tr> <tr> <td id="WSB9">Focus not set</td> </tr> <tr> <td id="WSB10">Focus not set</td> </tr> <tr> <td id="WSB11">Focus not set</td> </tr> <tr> <td id="WSB12">Focus not set</td> </tr> <tr> <td id="WSB13">Focus not set</td> </tr> <tr> <td id="WSB14">Focus not set</td> </tr> <tr> <td id="WSB15">Focus not set</td> </tr> </tbody></table>';
document.getElementsByTagName("body")[0].appendChild(hud);
$(hud).animate({opacity: 1});

var ws;
var WSFocus = "all";
var WSBFocus;
var WSBRecord = false;
var WSBList = "data:text/html, <p>";
const START_SSWX = [146, 161, 52, 146, 1, 192]
const END_SSWX = [146, 161, 52, 146, 0, 192]
const TAKEOUT = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 15, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const APPLE = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 0, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const COOKIE = [4, 132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 1, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47];
const PIZZA = [97, 117, 116, 111, 115, 112, 101, 101, 100]
var currentHat = 0;
var currentAccessory = 0;
var IN_PROCESS = false;
var justDied = false;
var recentHealth = 100;
var MYID;
var hasApple = true;
var foodInHand = false;
var autoheal = false;
var autobull = false;
var STATE = 0;
var msgpack5 = msgpack;
var inInstaProcess = false;
var bowWorked = false;
var myCLAN = null;
var goodData;
var myPlayer;
var nearestPlayer;
var nearestPlayerAngle = 0;
var MYANGLE = 0;
let coregood = [212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112];
var autoreloadloop;
var autoreloadenough = 0;
var constChatLoop;
var constChatLoopAll;
var policeLoop;
var policeLoopC;
var policeLoopAll;
var policeLoopAllC;

let badreplace = [130, 166, 98, 117, 102, 102, 101, 114, 130, 164, 116, 121, 112, 101, 166, 66, 117, 102, 102, 101, 114, 164, 100, 97, 116, 97, 145, 0, 164, 116, 121, 112, 101, 0]
document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}

var nval = msgpack5.decode([132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 146, 161, 51, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47]).data[1];
document.n = nval;
document.timeTween = 130;

function replaceFromArray(oldp, newp, array){
    return array.join(",").replace(oldp.join(","), newp.join(",")).split(",").map(x => parseInt(x))

}

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        document.title = "autoReloader working";
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "autoReloader done";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Moo Moo";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "autoReloader done";
        setTimeout(function () {document.title = "Moo Moo";}, 1000)
    }
}, 50);

function healthFunction(t, a) {
    return Math.abs(((t + a/2) % a) - a/2);
}

function encodeSEND(json){
    let OC = msgpack5.encode(json);
    var aAdd = Array.from(OC); //[132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 0, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47]; //Array.from(OC);
    return new Uint8Array(aAdd).buffer;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    //console.info(new Uint8Array(m));

    if (!ws){
        document.ws = this;

        ws = this;
        console.info("WS SET");
        socketFound(this);
    }


    if (inInstaProcess){
        this.oldSend(m);
        console.log("here");
        return;
    }
    let x = new Uint8Array(m);
    this.oldSend(m);
    //console.info(x);
    let x_arr_SSX = Array.from(x);

    /*let usageArray = Array.from(new Uint8Array(m));
    if (usageArray.length == 45){
        if (usageArray[16] == 0 || usageArray[16] == 1) foodInHand = false;
        console.info(`Food in hand: null{foodInHand}`);

    };*/

    let realData = {}
    let realInfo = msgpack5.decode(x);
    if (realInfo[1] instanceof Array){
        realData.data = [realInfo[0], ...realInfo[1]]
    } else {
        realData.data = realInfo
    }

    //console.log(realData)
    //console.info("sent");
    //console.info(realData.data);
    if(realData.data[0]!="2") {
        console.info("HERE3");
        console.info(realData.data[0])
        console.info(realData.data);
        console.log(x);
        if (realData.data[0]=="3"){
            //console.info(realData.data[1]);
            /*console.info(new Uint8Array(m));
         if(typeof realData.data[1] != "number" && !nval){
             nval = realData.data[1];
             document.n = nval;
             console.info("SET NVAL to");
             console.info(nval);


         }*/
            /*console.info(typeof realData.data[2]);
        console.info(realData.data[2].buffer);
        goodData = realData.data;
        console.info(goodData);
        console.info(["5", 0, nval]);
        document.n = goodData[2];
        document.nval = nval*/
        }
    }
    //console.info(new Date().getTime());
    var rd0 = realData.data[0];
    var rd1 = realData.data[1];
    var rd2 = realData.data[2];
    var rd3 = realData.data[3];
    var rd4 = realData.data[4];

    if (document.getElementById("noShowDWS").checked == false || document.getElementById("noShowDWS").checked == true && rd0 != 2) {
        if (rd0 == "pp" && document.getElementById("noShowDWS").checked == true) {
        } else if (rd0 == "rmd" && document.getElementById("noShowDWS").checked == true) {}
        else {
            if (WSFocus == "all" || WSFocus == realData.toString().slice(0, WSFocus.length)) {
                wsLog(rd0, rd1, rd2, rd3, rd4);
            }
        }
    }
    if (realData.data[0]=="1"){
        console.info("user respawned");
        justDied = false;
    } else if (realData.data[0]=="13"){
        console.info("In Hat Part");
        console.info(realData);
        console.info(IN_PROCESS);
        console.info(realData.data);
        console.info("test");
        if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==0 &&realData.data[1]==0){
            currentHat = realData.data[2];
            console.info("Changed hat to " + currentHat);

        } else if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==1 &&realData.data[1]==0){
            currentAccessory = realData.data[2];
            console.info("Changed accessory to " + currentAccessory);
        }

    } else if (realData.data[0]=="2"){
        MYANGLE = realData.data[1];
    } else if (realData.data[0]=="5") {
        console.info("hai");
        console.info(new Uint8Array(m));
        console.info(realData.data);
    }
};

function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

function isElementVisible(e) {
    return (e.offsetParent !== null);
}

function heal(){ //unused but removing could leave holes
    console.log("healing");
    if (recentHealth>=100) return;
    console.info(recentHealth);
    console.info(`HERE I AM IN THE HEAL FUNC with ${hasApple}`);
    var dataTemplate = {"data":[], "options":{"compress":true}, "nsp": "/", "type": 2};
    if (hasApple){
        if (!haveApple()){
            heal();
            return;
        }
        else { //User has apple
            var data2 = dataTemplate;
            data2['data'] = goodData != undefined ? goodData : ["5", [0]];
            ws.send(encodeSEND(data2['data']));

        }
    }
    else { //User has cookie
        console.info('user has cookie');
        var data3 = dataTemplate;
        data3['data'] = ["5", [1]];
        ws.send(encodeSEND(data3['data']));
    }
    dataTemplate["data"]=["c", [
        1, MYANGLE]];
    let encoded = encodeSEND(dataTemplate['data']);
    ws.send(encoded);

    recentHealth += hasApple ? 20 : 40;

}

function handleMessage(m){
    let td = new Uint8Array(m.data);
    //      console.info(td);
    //console.info(td);
    //console.info(td.slice(98,-1));
    var infotest = msgpack5.decode(td);
    var info;
    if(infotest.length > 1) {
        info = [infotest[0], ...infotest[1]];
        if (info[1] instanceof Array){
            info = info;
        }
    } else {
        info = infotest;
    }
    //    console.log(info);
    //console.info("received");
    //console.info(new Date().getTime());
    if(!info) return;
    if (inInstaProcess){
        doNewSend(["2", [nearestPlayerAngle]]);
    }
    //    doNewSend(["2", 0.45]);
    if (info[0] == "h"){
        console.info("doing stuff");
        console.info(info);
        if (info[1] == MYID) {
            if (info[2] < 100 && info[2] > 0 && autoheal){
                recentHealth = info[2];
                console.info("RECEIVED:");
                console.info(info);
                //recentHealth += hasApple ? 20 : 40;
                console.info("heal notif sent");
                setTimeout( () => {
                    heal();
                }, autoHealSpeed);
            } else if (info[2] > 0 && autoheal) {
                console.info("done healing");
                recentHealth = 100;
                if (foodInHand){
                    console.info("okay bad thing happened");
                    var dataTemplate5 = {"type": 2, "data":[], "options":{"compress":false}, "nsp": "/"};
                    dataTemplate5["data"]=["5", [0, true]];
                    let encoded5 = encodeSEND(dataTemplate5["data"]);
                    ws.send(encoded5);
                    console.info("corrected bad thing");
                }
            } else if (autoheal) {
                hasApple = true; //You've died tragically in combat; back to the apple for you!
                console.info("Setting has apple to true from here");
            }
        }
    }
    if (WSBFocus == undefined) {}
    else if (WSBFocus == "all" || WSBFocus == info.toString().slice(0, WSBFocus.length)) {
        wsbLog(info);
    }

    //    console.info("-------------")
    if (info[0] == "1" && !MYID){
        MYID = info[1];
    }


    if (info[0] == "18" && info[4]=="1200") {
        console.info(info);
        bowWorked = true;
    }

    else if(info[0] == "11"){
        console.info("doing death");
        hasApple = true;
        justDied = true;
        recentHealth = 100;
    }
}

function pdist(player1, player2){
    return Math.sqrt( Math.pow((player2.y-player1.y), 2) + Math.pow((player2.x-player1.x), 2) );
}

function haveApple(){
    console.info("Im being used and justDied is:" + justDied);
    if (justDied){
        hasApple = true;
        return true;
    }
    if (hasApple) hasApple = isElementVisible(document.getElementById("actionBarItem14"));
    return hasApple;
}

function doNewSend(sender){
    ws.send(encodeSEND(sender));
}

function wsLog (rd0, rd1, rd2, rd3, rd4) {
    rd1 = (rd1==undefined) ? "" : ", "+rd1;
    rd2 = (rd2==undefined) ? "" : ", "+rd2;
    rd3 = (rd3==undefined) ? "" : ", "+rd3;
    rd4 = (rd4==undefined) ? "" : ", "+rd4;
    document.getElementById("WS15").innerHTML = document.getElementById("WS14").innerHTML;
    document.getElementById("WS14").innerHTML = document.getElementById("WS13").innerHTML;
    document.getElementById("WS13").innerHTML = document.getElementById("WS12").innerHTML;
    document.getElementById("WS12").innerHTML = document.getElementById("WS11").innerHTML;
    document.getElementById("WS11").innerHTML = document.getElementById("WS10").innerHTML;
    document.getElementById("WS10").innerHTML = document.getElementById("WS9").innerHTML;
    document.getElementById("WS9").innerHTML = document.getElementById("WS8").innerHTML;
    document.getElementById("WS8").innerHTML = document.getElementById("WS7").innerHTML;
    document.getElementById("WS7").innerHTML = document.getElementById("WS6").innerHTML;
    document.getElementById("WS6").innerHTML = document.getElementById("WS5").innerHTML;
    document.getElementById("WS5").innerHTML = document.getElementById("WS4").innerHTML;
    document.getElementById("WS4").innerHTML = document.getElementById("WS3").innerHTML;
    document.getElementById("WS3").innerHTML = document.getElementById("WS2").innerHTML;
    document.getElementById("WS2").innerHTML = document.getElementById("WS1").innerHTML;
    document.getElementById("WS1").innerHTML = rd0+rd1+rd2+rd3+rd4;
}

function wsbLog (info) {
    var i;
    for (i = 0; i < info.length; i++) {
        info[i] = " | " + info[i] + " | ";
    }
    document.getElementById("WSB15").innerHTML = document.getElementById("WSB14").innerHTML;
    document.getElementById("WSB14").innerHTML = document.getElementById("WSB13").innerHTML;
    document.getElementById("WSB13").innerHTML = document.getElementById("WSB12").innerHTML;
    document.getElementById("WSB12").innerHTML = document.getElementById("WSB11").innerHTML;
    document.getElementById("WSB11").innerHTML = document.getElementById("WSB10").innerHTML;
    document.getElementById("WSB10").innerHTML = document.getElementById("WSB9").innerHTML;
    document.getElementById("WSB9").innerHTML = document.getElementById("WSB8").innerHTML;
    document.getElementById("WSB8").innerHTML = document.getElementById("WSB7").innerHTML;
    document.getElementById("WSB7").innerHTML = document.getElementById("WSB6").innerHTML;
    document.getElementById("WSB6").innerHTML = document.getElementById("WSB5").innerHTML;
    document.getElementById("WSB5").innerHTML = document.getElementById("WSB4").innerHTML;
    document.getElementById("WSB4").innerHTML = document.getElementById("WSB3").innerHTML;
    document.getElementById("WSB3").innerHTML = document.getElementById("WSB2").innerHTML;
    document.getElementById("WSB2").innerHTML = document.getElementById("WSB1").innerHTML;
    document.getElementById("WSB1").innerHTML = info;
    if (WSBRecord == true) {
        WSBList = WSBList + info.toString() + "<br><br>";
    }
}

function evalCommand (cmd) {
    cmd = cmd.slice(1, cmd.length).split("~");
    var fb;
    switch (cmd[0]) {
        case "ConstantChat":
            switch (cmd[1]) {
                case "onAll":
                    clearInterval(constChatLoop);
                    clearInterval(constChatLoopAll);
                    constChatLoopAll = setInterval(function () {
                        doNewSend(["ch", ["/CH"+cmd[2]]]);
                    }, 500);
                    break;
                case "on":
                    clearInterval(constChatLoop);
                    clearInterval(constChatLoopAll);
                    constChatLoop = setInterval(function () {
                        doNewSend(["ch", [cmd[2]]]);
                    }, 500);
                    break;
                case "off":
                    clearInterval(constChatLoop);
                    clearInterval(constChatLoopAll);
                    break;
            }
            break;
        case "Siren":
            switch (cmd[1]) {
                case "on":
                    if (cmd[2] == "all") {
                        clearInterval(policeLoopAll);
                        clearInterval(policeLoop);
                        clearInterval(policeLoopAllC);
                        clearInterval(policeLoopC);
                        policeLoopAll = setInterval(function () {
                            doNewSend(["ch", ["/WSB 13c/0/15/0"]]);
                            doNewSend(["13c", [0, 15, 0]]);
                            setTimeout(function () {
                                doNewSend(["ch", ["/WSB 13c/0/8/0"]]);
                                doNewSend(["13c", [0, 8, 0]]);
                            },500);
                        }, 1000);
                        policeLoopAllC = setInterval(function () {
                            setTimeout(function () {
                                doNewSend(["ch", ["/CHWOOP WOOP"]]);
                            }, 20);
                            setTimeout(function () {
                                doNewSend(["ch", ["/CHThat'sTheSoundOfThePolice"]]);
                            },700);
                            setTimeout(function () {
                                doNewSend(["ch", ["/CHWOOP WOOP"]]);
                            },1400);
                            setTimeout(function () {
                                doNewSend(["ch", ["/CHThat'sTheSoundOfDaBeast"]]);
                            },2100);
                        }, 2800);
                    } else {
                        clearInterval(policeLoopAll);
                        clearInterval(policeLoop);
                        clearInterval(policeLoopAllC);
                        clearInterval(policeLoopC);
                        policeLoop = setInterval(function () {
                            doNewSend(["13c", [0, 15, 0]]);
                            setTimeout(function () {
                                doNewSend(["13c", [0, 8, 0]]);
                            },500);
                        }, 1000);
                        policeLoopC = setInterval(function () {
                            setTimeout(function () {
                                doNewSend(["ch", ["WOOP WOOP"]]);
                            }, 20);
                            setTimeout(function () {
                                doNewSend(["ch", ["That'sTheSoundOfThePolice"]]);
                            },700);
                            setTimeout(function () {
                                doNewSend(["ch", ["WOOP WOOP"]]);
                            },1400);
                            setTimeout(function () {
                                doNewSend(["ch", ["That'sTheSoundOfDaBeast"]]);
                            },2100);
                        }, 2800);
                    }
                    break;
                case "off":
                    if (cmd[2] == "all") {
                        clearInterval(policeLoopAll);
                        clearInterval(policeLoop);
                        clearInterval(policeLoopAllC);
                        clearInterval(policeLoopC);
                    } else {
                        clearInterval(policeLoopAll);
                        clearInterval(policeLoop);
                        clearInterval(policeLoopAllC);
                        clearInterval(policeLoopC);
                    }
                    break;
            }
            break;
        case "WSBFocus":
            WSBFocus = cmd[1];
            fb = "WSBFocus set to: " + cmd[1];
            break;
        case "WSFocus":
            WSFocus = cmd[1];
            fb = "WSFocus set to: " + cmd[1];
            break;
        case "WSBRecord":
            switch (cmd[1]) {
                case "start":
                    WSBRecord = true;
                    fb = "WSB recording started";
                    break;
                case "stop":
                    WSBRecord = false;
                    fb = "WSB recording ended";
                    break;
                case "print":
                    document.getElementById("WSDirectInputhtml").value = WSBList; + "</p>";
                    break;
            }
            break;
    }
    document.getElementById("TS1Shothtml").innerHTML = fb;
    setTimeout(function () {document.getElementById("TS1Shothtml").innerHTML = "";}, 1000);
}

document.addEventListener('keydown', function (e) {
    if (document.activeElement.id == 'chatBox') return;
    if (document.activeElement.id == 'allianceInput') return;
    if (document.activeElement.id == 'WSDirectInputhtml') {
        if (e.keyCode == 13) {
            var WSInput = document.getElementById("WSDirectInputhtml").value;
            if (WSInput.slice(0, 1) == "/") {
                evalCommand(WSInput);
                document.getElementById("WSDirectInputhtml").blur();
            }
            else {
                WSInput = document.getElementById("WSDirectInputhtml").value.split(", ");
                var t;
                for (t = 0; t < WSInput.length; t++) {
                    WSInput[t] = (parseFloat(WSInput[t]).toString()==WSInput[t]) ? parseFloat(WSInput[t]) : WSInput[t];
                }
                switch (WSInput.length) {
                    case 1: doNewSend([WSInput[0]]); break;
                    case 2: doNewSend([WSInput[0], [WSInput[1]]]); break;
                    case 3: doNewSend([WSInput[0], [WSInput[1], WSInput[2]]]); break;
                    case 4: doNewSend([WSInput[0], [WSInput[1], WSInput[2], WSInput[3]]]); break;
                    case 5: doNewSend([WSInput[0], [WSInput[1], WSInput[2], WSInput[3], WSInput[4]]]); break;
                }
                document.getElementById("WSDirectInputhtml").blur();
            }
        } else return;
        if (document.activeElement.id == 'nameInput') return;
    }
    if (e.keyCode == 80) {
        if (document.getElementById("WSBTable").style.display == "block") {
            var x = document.getElementsByClassName("hackDisp");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
        } else {
            var y = document.getElementsByClassName("hackDisp");
            var j;
            for (j = 0; j < y.length; j++) {
                y[j].style.display = "block";
            }
        }
    }
    if (e.keyCode == 9 && document.getElementById("chatBox").style.display ==! "block") {
        setTimeout(function () {
            document.getElementById("WSDirectInputhtml").blur();
            document.getElementById("noShowDWS").blur();
            document.getElementById("gameCanvas").focus();
        }, 10);
    }
}, true);

document.getElementById("WSDirectInputhtml").addEventListener('mousedown', function (e) {
    if (e.button == 0) {
        setTimeout(function () {document.getElementById("WSDirectInputhtml").select();}, 150);
    }
}, true);

$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');
$("#consentBlock").css({display: "none"});
var autoHealSpeed = 100; //Bigger number = SLOWER autoheal; fastest is 0.
var DEFAULT_HAT = 7;
var DEFAULT_WINGS = 18;
var instaKillKey = 114;
var spikeKey = 118;
var trapKey = 102;
var removeMonkeyTail = true;
var askMeAgain = true; //set this to false if the user doesnt want to be asked about hat switching again

var allTraps = [];
var CORESTATE = {
        inwater: {active: false},
        nearenemy: {active: false},
        intrap: {active: false},
        ipress: {active: false},
};

try {
document.getElementById("moomooio_728x90_home").style.display = "none"; //Remove sidney's ads
    $("#moomooio_728x90_home").parent().css({display: "none"});
} catch (e) {
  console.log("error removing ad");
}

unsafeWindow.onbeforeunload = null;


let coreURL =  new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");


if (window.sessionStorage.force != "false" && window.sessionStorage.force && window.sessionStorage.force.toString() != "null"){
    console.error(window.sessionStorage.force);
    /*alert(window.location.force);*/
    document.getElementsByClassName("menuHeader")[0].innerHTML = `Servers <span style="color: red;">Force (${window.sessionStorage.force})</span>`;
}
