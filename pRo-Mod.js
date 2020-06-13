// ==UserScript==
// @name           MooMoo.io | pRo Mod | By Nuro
// @namespace      -
// @version        1
// @description    O P mod
// @author         Nuro.
// @match          *://moomoo.io/*
// @match          *://dev.moomoo.io/*
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @icon         http://moomoo.io/img/icons/skull.png
// ==/UserScript==

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
	"    border: 2px solid #013a80;",
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
	"    color: #013a80;",
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
	"    color: #ff0000;",
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


$('#menuContainer').append('You are invissible power!')

$("#youtuberOf").css({display: "none"});
let newImg = document.createElement("img");
newImg.src = "https://user-images.githubusercontent.com/15173170/51895430-6193cf00-23aa-11e9-9ca5-eecb7904fb41.png";
newImg.style = `position: absolute; top: -55px; left: -55px; z-index: 100000; width: 0px; height: 0px; cursor: pointer;`;
document.body.prepend(newImg);

newImg.addEventListener("click", () => {
       let w = window.open("", null, `height=650, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});

try {
document.getElementById("moomooio_728x90_home").style.display = "none";
    $("#moomooio_728x90_home").parent().css({display: "none"});
} catch (e) {
  console.log(" removing ad");
}

unsafeWindow.onbeforeunload = null;


({'position':'absolute','bottom':'72px','left':'20px','width':'420px','height':'236.25px','padding-bottom':'18px','margin-top':'0px'});

$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/games/gam-15/gam1422.gif), default');

$('.menuCard').css({'white-space': 'normal',
                    'text-align': 'center',
                    'background-color': 'rgba(0, 0, 0, 0.74)',
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

var moomooVer = $('#linksContainer2 .menuLink').html(),
    hideSelectors = ['#mobileDownloadButtonContainer',
                     '#followText',
                     '#smallLinks',
                     '#linksContainer1',
                     '#twitterFollow',
                     '#youtubeFollow',
                     '#cdm-zone-02',
                     '#youtuberOf',
                     '#promoImg',
                     '#downloadButtonContainer',
                     '.menuHeader',
                     '.menuLink',
                     '.menuHeader:nth-child(5)',
                     '.menuHeader:nth-child(6)',
                     '.menuText'
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

for ( let i = 0; i < hideSelectors.length; i++ ) {
    $(hideSelectors[i]).hide();
}
head.appendChild(style);
$('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">' + moomooVer + '</a>');

document.getElementById('enterGame').innerHTML = ' GO KILL ';
document.getElementById('loadingText').innerHTML = '. . . . . . . . . Load pRo Mod . . . . . . . . .  ';
document.getElementById('nameInput').placeholder = "name";
document.getElementById("gameName").innerHTML = "pRo mOd"
document.getElementById('chatBox').placeholder = "Suprise";
document.getElementById('diedText').innerHTML = 'revange will kill him';
document.getElementById('diedText').style.color = "yellow";

document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"

document.getElementById('adCard').remove();
document.getElementById('errorNotification').remove();

document.getElementById("leaderboard").style.color = "yellow";
document.getElementById("gameName").style.color = "yellow";
document.getElementById("setupCard").style.color = "yellow";
document.getElementById("promoImg").remove();
document.getElementById("scoreDisplay").style.color = "yellow";
document.getElementById("woodDisplay").style.color = "yellow";
document.getElementById("stoneDisplay").style.color = "yellow";
document.getElementById("killCounter").style.color = "yellow";
document.getElementById("foodDisplay").style.color = "yellow";
document.getElementById("ageText").style.color = "yellow";
document.getElementById("allianceButton").style.color = "yellow";
document.getElementById("chatButton").style.color = "yellow";
document.getElementById("storeButton").style.color = "yellow";

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

$('.uiElement, .resourceDisplay').css({'-webkit-border-radius': '0px',
                                       '-moz-border-radius': '0px',
                                       'border-radius': '0px',
                                       'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '0px',
                   'background-color': 'rgba(0, 0, 0, 0.4)',
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

$('#ageText').css({'color': '#ffdfd'});

$('#ageBar').css({'-webkit-border-radius': '0px',
                  '-moz-border-radius': '0px',
                  'border-radius': '0px',
                  'background-color': 'rgba(0, 0, 0, 0.4)'});

$('#ageBarBody').css({'-webkit-border-radius': '0px',
                      '-moz-border-radius': '0px',
                      'border-radius': '0px',
                      'background-color': '#f00'});

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


var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#fffdfd";
myElement.style.color = "#000000";

var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#d61818";
getElement.style.color = "#000000";

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
var TankGearKey = 90;
var BullHelmetKey = 74;
var SoldierHelmetKey = 71;
var TurretKey = 72;
var BoosterHatKey = 66;
var uneqiup = 16;
var SpikeGearKey = 89;
var BarabarianKey = 84;
var SpikeKey = 86

document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});

var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;">pRo Mod</h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
<label class="container">Premium Map!
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
 </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
<label class="container">Get More FPS
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <h3 style="color: black; font-size: 17px;">Hat keys ▼</h3>
                <h3 style="color: red; font-size: 17px;">TO UNEQUIP HAT PRESS SHIFT</h3>
                <h3 class="menuPrompt">Tank Gear : </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull Helmet : </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Soldier Helmet : </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret Gear : </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Booster Hat : </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike Gear : </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Barbarian Armor : </h3> <input value="${String.fromCharCode(BarabarianKey)}" id="barb" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <hr>
        <div class="modal-footer">
            <p>Mod By Nuro.</p>
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



$("#barb").on("input", () => {
    var cval = $("#barb").val();
    if (cval){
        BarabarianKey = cval.toUpperCase();
        BarabarianKey = BarabarianKey.charCodeAt(0);
        console.log(BarabarianKey);
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
    background: #000000;
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
    background: #000000;
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
    color: #e01313;
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

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ec6b20;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

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
    } else if (e.keyCode == BarabarianKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BarbarianArmor);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
    }
})

var modal = document.getElementById("simpleModal");
var closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function closeModal() {
  modal.style.display = 'none';
}

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


$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});

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
var instaSpeed = 220;
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

let healSpeed = 120;
var messageToggle = 0;
var clanToggle = 0;
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

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(wallType, angle)
        }
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
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
    if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(20);
    }

    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
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
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, instaSpeed);
    }

    if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
    }

    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == 106 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
    if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [secondary, true]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["6", [12]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["6", [15]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["c", [0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["5", [primary, true]]);
            autoaim = false;
        }, 300);
    }

    if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 111 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal - off| pRo Mod"
            } else {
                document.title = "Heal - off| pRo Mod"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal - on| pRo Mod"
            } else {
                document.title = "Heal - on| pRo Mod"
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
        characters = 'ME pro YOU noob';
    } else {
        characters = 'nO-_bbO'
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

document.title = "RN MOD"

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
