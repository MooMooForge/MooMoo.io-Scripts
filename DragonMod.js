// ==UserScript==
// @name        DraGonMod (Fixed)
// @namespace    Best Hack 2020
// @version      Last_Version
// @description  Fixed by Nuro
// @author        Nuro
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @icon    https://cdn.steemitimages.com/DQmZ2JU5w9YJY7GKtUaKvRxL5kNnwCP9xoT84iwB6v2pYbZ/dragon%20awaken.jpg
// @downloadURL none
// ==/UserScript==

var YouName = window.prompt("You Name (SaVeGe Or ixPROx3):","");

var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {

        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "BEXTİYAR";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        setTimeout(function () {document.title = "BEXTİYAR";}, 1000)
    }
}, 50);

(() => {
	try {
		class Collection {
			constructor(array = []) {
				this.__array = array;
			}

			fromID(id) {
				return this.__array.filter(thing => thing.id === id);
			}

			get(id) {
				return this.fromID(id)[0];
			}

			has(id) {
				return this.fromID(id).length > 0;
			}

			forEach(callback) {
				this.__array.forEach(callback);
			}
		}

		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");

		const players = {};
		let currentID = null;

		let ws;

		function randInt(min, max) {
			const mini = Math.ceil(min);
			return Math.floor(Math.random() * (Math.floor(max) - mini + 1)) + mini;
		}
		function randItem(array) {
			return array[randInt(0, array.length - 1)];
		}

		const modules = new Collection([{
			id: "core",
			name: "Main",
			description: "Fixed VErsion By Bextiyar",
			required: true,
			init: () => {
				const example = $($("#linksContainer2").children()[0]);

				const mesLink = example.clone();
				mesLink.text(`MES v${GM_info.script.version}`);
				mesLink.attr("href", "https://github.com/Nebula-Developers/Moomoo-Enhancement-Suite");

				example.after(" | ", mesLink);
			}
		}, {
			id: "tracers",
			name: "Tracers",
			settings: [{
				id: "line_color",
				type: "color",
				name: "Line Color",
				description: "The color of the tracers.",
				default: "#000000"
			}],
			init: () => {
				function drawTracers() {
					Object.values(players).forEach(player => {
						if (currentID === null || players[currentID] === undefined || players[currentID].longID === undefined) return;

						ctx.strokeStyle = color;
						ctx.lineWidth = 3;

						const player2 = players[currentID];

						ctx.beginPath();
						ctx.moveTo(player2.x, player2.y);
						ctx.lineTo(player.x, player.y);
						ctx.stroke();
					});

					window.requestAnimationFrame(drawTracers);
				}
				drawTracers();
			},
		}, {
			id: "auto_chat",
			name: "Automatic Chat",
			description: "Automatically chats certain messages.",
			settings: [{
				id: "messages",
				name: "Message List",
				hover: "You can insert multiple messages with a comma; if you want to say both '1' and '2', put '1,2'.",
				default: "Hello!,Git gud!",
				type: "text",
			}, {
				id: "randomize_messages",
				name: "Randomize Messages",
				default: true,
				type: "checkbox",
			}],
			init: () => {
				let index = 0;
				const messages = config.auto_chat.messages.split(",");

				setInterval(() => {
					if (ws) {
						const toSend = config.auto_chat.randomize_messages ? randItem(messages) : messages[index];

						ws.emit("ch", [
							toSend,
						]);

						index += 1;
						if (index >= messages.length) {
							index = 0;
						}
					}
				}, 3000);
			}
		}, {
			id: "smart_hat",
			name: "Smart Hats",
			description: "This module allows you to equip certain hats at certain times to get the most out of those actions.",
		}, {
			id: "heal",
			name: "Autoheal",
			description: "With this module, you can automatically heal when you get damaged.",
		}, {
			id: "object_map",
			name: "Object Mapper",
			description: "Maps the position of objects to your minimap.",
		}, {
			id: "projectile_blocker",
			name: "Arrow Blocking",
			description: "When you have a shield, this module will prevent arrows from hitting you by equipping it and blocking the arrow.",
		}, {
			id: "coordinates",
			name: "Coordinates",
			description: "Shows your coordinates.",
		}, {
			id: "minimap_biomes",
			name: "Biomes on Minimap",
			description: "Shows the different biomes on the minimap by coloring each region.",
			init: () => {
				$("#mapDisplay").css("background", "url('https://cdn.discordapp.com/attachments/652521766555746325/683639971101278260/dragon.png')");
			},
			deinit: () => {
				$("#mapDisplay").css("background", "rgba(0, 0, 0, 0.25)");
			},
		}, {
			id: "custom_text",
			name: "Custom Text",
			description: "This module lets you change the text of many things.",
			settings: [{
				id: "death",
				name: "Death",
				default: "YOU DIED",
				type: "text",
			}, {
				id: "title",
				name: "Title",
				default: "Moo Moo",
				type: "text",
			}],
			init: () => {
				$("#diedText").text(config.custom_text.death);
				document.title = config.custom_text.title;
			},
		}, {
			id: "ping_display",
			name: "Show Ping",
			description: "Adds the ping counter in-game.",
			init: () => {
				const pingDisplay = $("#pingDisplay");
				pingDisplay.css("top", "3px");
				pingDisplay.css("display", "block");

				$("body").append(pingDisplay);
			}
		}]);

		const config = JSON.parse(localStorage.getItem("mes_config")) || {};
		function setConfig(moduleID, key, value) {
			if (!config[moduleID]) {
				config[moduleID] = {};
			}

			if (!(key === undefined || value === undefined)) {
				config[moduleID][key] = value;
			}

			return localStorage.setItem("mes_config", JSON.stringify(config));
		}
		modules.forEach(module => {
			setConfig(module.id);
		});

		WebSocket = class extends WebSocket {
			constructor(...arg) {
				super(...arg);
				ws = this;

				this.addEventListener("message", event => {
					const data = msgpack.decode(event.data);

					switch (data[0]) {
						case "1":
							currentID = data[1][0];
						case "2":
							players[data[1][0][1]] = {
								longID: data[1][0][0],
								name: data[1][0][2],
								x: data[1][0][3],
								y: data[1][0][4],
								angle: data[1][0][5],
								lastUpdated: Date.now(),
							};
							break;
						case "3":
							for (let i = 0, len = data[1][0].length / 13; i < len; i++) {
								if (!players[data[1][0][0 + i * 13]]) {
									players[data[1][0][0 + i * 13]] = {
										x: data[1][0][1 + i * 13],
										y: data[1][0][2 + i * 13],
										angle: data[1][0][3 + i * 13],
										lastUpdated: Date.now(),
									};
								} else {
									const p = players[data[1][0][0 + i * 13]];
									p.x = data[1][0][1 + i * 13];
									p.y = data[1][0][2 + i * 13],
									p.angle = data[1][0][3 + i * 13],
									p.lastUpdated = Date.now();
								}
							}
							break;
						case "4":
							for (const k in players) {
								if (players[k].longID == data[1][0]) delete players[k];
							}
					}
				});

				this._send = this.send;
				this.send = function () {
					this._send.apply(this, arguments);
				};
				this.emit = function () {
					const input = msgpack.encode(arguments);
					this.send(input);
				}
			}
		};

		let menuOpen = false;

		const gameUI = $("#gameUI");

		const menuButton = $("#allianceButton").clone(false);
		menuButton.children()[0].innerText = "touch_app";
		menuButton.css("right", "450px");
		menuButton.attr("title", `Moomoo Enhancement Script v${GM_info.script.version}`);

		menuButton.on("click", toggleMenu);

		gameUI.append(menuButton);

		const menuWrapper = $("<div/>");

		menuWrapper.css("display", "none");
		menuWrapper.css("width", "100%");
		menuWrapper.css("position", "absolute");
		menuWrapper.css("top", "50%");
		menuWrapper.css("transform", "translateY(-50%)");
		menuWrapper.css("text-align", "center");
		menuWrapper.css("pointer-events", "initial");

		const hackMenu = $("<div/>");
		hackMenu.attr("id", "hackMenu");

		const settingsBox = $("<div/>");
		settingsBox.attr("id", "settingsBox");

		const categoryChoose = $("<select/>");
		categoryChoose.css("width", "30%");
		categoryChoose.append("<option disabled>Choose Category</option>");

		// Add all modules to the module options select...
		modules.forEach(module => {
			const moduleOpt = $("<option/>");

			moduleOpt.attr("value", module.id);
			moduleOpt.text(module.name)

			categoryChoose.append(moduleOpt);
		});

		function makeInput(setting, configVal) {
			const input = $(`<input/>`);

			input.attr("type", setting.type);
			input.attr("name", setting.id);

			input.css("margin", "5px");
			input.css("max-width", "25px");

			const label = $(`<label class="settingRadio" />`);

			label.text(setting.name);
			input.attr("title", setting.hover);

			switch (setting.type) {
				case "text":
					input.css("width", "170px");
					input.css("max-width", "170px");

					input.attr("placeholder", `Default: ${setting.default}`);
					input.val(configVal);

					label.text(setting.name + ":");

					break;
				case "checkbox":
					input.prop("checked", configVal);
					break;
				default:
					input.val(configVal);
			}

			if (setting.type === "text") {
				label.append(input);
			} else {
				label.prepend(input);
			}

			return label;
		}

		categoryChoose.on("change", event => {
			const newmod = modules.get(event.target.value);
			settingsBox.empty();

			const desc = $("<p/>");
			desc.text(newmod.description || `You can change settings for the ${newmod.name} module here.`);
			settingsBox.append(desc);

			if (!newmod.required) {
				const enabledToggle = makeInput({
					type: "checkbox",
					id: "enabled",
					name: "Enable Module",
					hover: "Toggles all functionality in this module.",
				}, config[newmod.id].enabled);
				settingsBox.append(enabledToggle);
			}

			// Append module-provided settings.
			if (newmod.settings) {
				newmod.settings.forEach(setting => {
					settingsBox.append("<br/>");
					settingsBox.append(makeInput(setting, config[newmod.id][setting.id]));
				});
			}
		});

		settingsBox.on("change", event => {
			const target = $(event.target);

			switch (target.attr("type")) {
				case "checkbox":
					return setConfig(categoryChoose.val(), target.attr("name"), target.prop("checked"));
				default:
					return setConfig(categoryChoose.val(), target.attr("name"), target.val());
			}
		});

		categoryChoose.val("core").change();

		hackMenu.append("<h1>Options</h2>");
		hackMenu.append(categoryChoose);
		hackMenu.append(settingsBox);

		menuWrapper.append(hackMenu);
		gameUI.append(menuWrapper);

		$("head").append(`
			<style>
				#hackMenu {
					background-color: rgb(119, 0, 1, 0.75);
					width: 400px;
					height: 400px;
					color: white;
					max-height: calc(100vh - 400px);
					overflow-y: hidden;
					display: inline-block;
					border-radius: 4px;
				}
				#settingsBox {
					height: 300px;
					overflow-y: scroll;
					padding: 25px;
					text-align: left;
					font-size: 18px;
				}
				h1 {
					font-size: 26px;
					text-transform: uppercase;
				}
			</style>
		`);

		function toggleMenu() {
			menuOpen = !menuOpen;
			menuWrapper.css("display", menuOpen ? "block" : "none");
		}

		modules.forEach(module => {
			if (config[module.id].enabled || module.required) {
				if (module.init) {
					module.init();
				} else {
					console.warn(`Module ${module.id} has no initialization.`);
				}
			}
		});
	} catch (e) {
		console.warn(e)
	}
})();

$("#consentBlock").css({display: "none"});
$("#ytLink").css({display: "none"});
let newImg = document.createElement("img");
newImg.src = "https://lh3.googleusercontent.com/VG0tNLta0Aen5-6gsJfErOCJBNLIWocsQR8nTEQti-cJDMQ4SGVSZ8KGaxdwb2Tt376i=s85";
newImg.style = `position: absolute; top: 30px; left: 30px; z-index: 100000; width: 100px; height: 100px; cursor: pointer;`;
document.body.prepend(newImg);
newImg.addEventListener("click", () => {
       let w = window.open("https://www.youtube.com/channel/UChujyWNvKA2u_TkpAvvWxqA", null, `height=650, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});
$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');

$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});
$("#mapDisplay").css({background: `url('https://cdn.discordapp.com/attachments/652521766555746325/683639971101278260/dragon.png')`});
$("#mapDisplay").css({
  'border-radious':'300px',
  'border':'3px solid #AC0E0E'
});
$("#menuButton").css({background: `url('https://cdn.discordapp.com/attachments/632465085855563776/682964309478866994/download_32.jpg')`});
$("#allianceButton").css({background: `url('https://cdn.discordapp.com/attachments/632465085855563776/682964309478866994/download_32.jpg')`});
$("#storeButton").css({background: `url('https://cdn.discordapp.com/attachments/632465085855563776/682964309478866994/download_32.jpg')`});
$("#chatButton").css({background: `url('https://cdn.discordapp.com/attachments/632465085855563776/682964309478866994/download_32.jpg')`});

const pingDisplay = $("#pingDisplay");
pingDisplay.css("top", "3px");
pingDisplay.css("display", "block");
$("body").append(pingDisplay);

document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});

(function() {
    var můjVar;
    var můjVar2;
    var můjVar3;
    var můjVar4;
    var můjVar5;
    var můjVar6;
    var můjVar7;
    var můjVar8;
    var můjVar9;
    var můjVar10;
    var můjVar11;
    var můjVar12;
    var můjVar13;
    var můjVar14;
    var můjVar15;
    var můjVar16;
    var můjVar17;
    var můjVar18;
    var můjVar19;
    var můjVar20;
    var můjVar21;
    var můjVar22;
    var můjVar23;
    var můjVar24;
    var můjVar25;
    var můjVar26;
    var můjVar27;
    var můjVar28;
    var můjVar29;
    var můjVar30;
    var můjVar31;
    var můjVar32;
    var můjVar33;
    var můjVar34;
    var můjVar35;
    var můjVar36;
    var můjVar37;
    var můjVar38;
    var můjVar39;
    var můjVar40;
    var můjVar41;
	var změna = true;
    var ID_FΔZΣ = 45;
	var ID_Moo_Head = 28;
    var ID_Moo_Cap = 51;
    var ID_Apple_Cap = 50;
	var ID_Pig_Head = 29;
    var ID_Fluff_Head = 30;
    var ID_Pandou_Head = 36;
    var ID_Bear_Head = 37;
    var ID_Monkey_Head = 38;
    var ID_Polar_Head = 44;
	var ID_Fez_Hat = 35;
	var ID_Enigma_Hat = 42;
	var ID_Blitz_Hat = 43;
	var ID_Bob_XIII_Hat = 49;
	var ID_Bummle_Hat = 8;
	var ID_Straw_Hat = 2;
	var ID_Winter_Cap = 15;
	var ID_Cowboy_Hat = 5;
	var ID_Ranger_Hat = 4;
	var ID_Explorer_Hat = 18;
	var ID_Flipper_Hat = 31;
	var ID_Marksman_Cap = 1;
	var ID_Bush_Gear = 10;
    var ID_Halo = 48;
	var ID_Soldier_Helmet = 6;
	var ID_Anti_Venom_Gear = 23;
	var ID_Medic_Gear = 13;
	var ID_Miners_Helmet = 9;
	var ID_Musketeer_Hat = 32;
	var ID_Bull_Helmet = 7;
    var ID_Emp_Helmet = 22;
    var ID_Booster_Hat = 12;
    var ID_Barbarian_Armor = 26;
    var ID_Plague_Mask = 21;
    var ID_Bull_Mask = 46;
    var ID_Windmill_Hat = 14;
    var ID_Spike_Gear = 11;
    var ID_Samurai_Armor = 20;
    var ID_Bushido_Armor = 16;
    var ID_Scavenger_Gear = 27;
    var ID_Tank_Gear = 40;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 118) {
			e.preventDefault();
			if (změna) {
            storeEquip(ID_FΔZΣ);
            můjVar = setTimeout(function(){ h1(); }, 75);
			} else {
            clearTimeout(můjVar);
            clearTimeout(můjVar2);
            clearTimeout(můjVar3);
            clearTimeout(můjVar4);
            clearTimeout(můjVar5);
            clearTimeout(můjVar6);
            clearTimeout(můjVar7);
            clearTimeout(můjVar8);
            clearTimeout(můjVar9);
            clearTimeout(můjVar10);
            clearTimeout(můjVar11);
            clearTimeout(můjVar12);
            clearTimeout(můjVar13);
            clearTimeout(můjVar14);
            clearTimeout(můjVar15);
            clearTimeout(můjVar16);
            clearTimeout(můjVar17);
            clearTimeout(můjVar18);
            clearTimeout(můjVar19);
            clearTimeout(můjVar20);
            clearTimeout(můjVar21);
            clearTimeout(můjVar22);
            clearTimeout(můjVar23);
            clearTimeout(můjVar24);
            clearTimeout(můjVar25);
            clearTimeout(můjVar26);
            clearTimeout(můjVar27);
            clearTimeout(můjVar28);
            clearTimeout(můjVar29);
            clearTimeout(můjVar30);
            clearTimeout(můjVar31);
            clearTimeout(můjVar32);
            clearTimeout(můjVar33);
            clearTimeout(můjVar34);
            clearTimeout(můjVar35);
            clearTimeout(můjVar36);
            clearTimeout(můjVar37);
            clearTimeout(můjVar38);
            clearTimeout(můjVar39);
            clearTimeout(můjVar40);
            clearTimeout(můjVar41);
            storeEquip(ID_FΔZΣ);
			}
			změna = !změna;
		}
	});

    function h1() {
    storeEquip(ID_FΔZΣ);
    clearTimeout(můjVar);
    můjVar2 = setTimeout(function(){ h2(); }, 75);
    }
    function h2() {
    storeEquip(ID_Moo_Head);
    clearTimeout(můjVar2);
    můjVar3 = setTimeout(function(){ h3(); }, 75);
    }
    function h3() {
    storeEquip(ID_Pig_Head);
    clearTimeout(můjVar3);
    můjVar4 = setTimeout(function(){ h4(); }, 75);
    }
    function h4() {
    storeEquip(ID_Fluff_Head);
    clearTimeout(můjVar4);
    můjVar5 = setTimeout(function(){ h5(); }, 75);
    }
    function h5() {
    storeEquip(ID_Pandou_Head);
    clearTimeout(můjVar5);
    můjVar6 = setTimeout(function(){ h6(); }, 75);
    }
    function h6() {
    storeEquip(ID_Bear_Head);
    clearTimeout(můjVar6);
    můjVar7 = setTimeout(function(){ h7(); }, 75);
    }
    function h7() {
    storeEquip(ID_Monkey_Head);
    clearTimeout(můjVar7);
    můjVar8 = setTimeout(function(){ h8(); }, 75);
    }
    function h8() {
    storeEquip(ID_Polar_Head);
    clearTimeout(můjVar8);
    můjVar9 = setTimeout(function(){ h9(); }, 75);
    }
    function h9() {
    storeEquip(ID_Fez_Hat);
    clearTimeout(můjVar9);
    můjVar10 = setTimeout(function(){ h10(); }, 75);
    }
    function h10() {
    storeEquip(ID_Enigma_Hat);
    clearTimeout(můjVar10);
    můjVar11 = setTimeout(function(){ h11(); }, 75);
    }
    function h11() {
    storeEquip(ID_Blitz_Hat);
    clearTimeout(můjVar11);
    můjVar12 = setTimeout(function(){ h12(); }, 75);
    }
    function h12() {
    storeEquip(ID_Bob_XIII_Hat);
    clearTimeout(můjVar12);
    můjVar13 = setTimeout(function(){ h13(); }, 75);
    }
     function h13() {
    storeEquip(ID_Moo_Cap);
    clearTimeout(můjVar12);
    můjVar14 = setTimeout(function(){ h14(); }, 75);
    }
     function h14() {
    storeEquip(ID_Apple_Cap);
    clearTimeout(můjVar12);
    můjVar = setTimeout(function(){ h1(); }, 75);
    }
})();

(function() {
    var můjVar;
    var můjVar2;
    var můjVar3;
    var můjVar4;
    var můjVar5;
    var můjVar6;
    var můjVar7;
    var můjVar8;
    var můjVar9;
    var můjVar10;
    var můjVar11;
    var můjVar12;
    var můjVar13;
    var můjVar14;
    var můjVar15;
    var můjVar16;
    var můjVar17;
    var můjVar18;
    var můjVar19;
    var můjVar20;
    var můjVar21;
    var můjVar22;
    var můjVar23;
    var můjVar24;
    var můjVar25;
    var můjVar26;
    var můjVar27;
    var můjVar28;
    var můjVar29;
    var můjVar30;
    var můjVar31;
    var můjVar32;
    var můjVar33;
    var můjVar34;
    var můjVar35;
    var můjVar36;
    var můjVar37;
    var můjVar38;
    var můjVar39;
    var můjVar40;
    var můjVar41;
	var změna = true;
    var ID_FΔZΣ = 45;
	var ID_Moo_Head = 28;
	var ID_Pig_Head = 29;
    var ID_Fluff_Head = 30;
    var ID_Pandou_Head = 36;
    var ID_Bear_Head = 37;
    var ID_Monkey_Head = 38;
    var ID_Polar_Head = 44;
	var ID_Fez_Hat = 35;
	var ID_Enigma_Hat = 42;
	var ID_Blitz_Hat = 43;
	var ID_Bob_XIII_Hat = 49;
	var ID_Bummle_Hat = 8;
	var ID_Straw_Hat = 2;
	var ID_Winter_Cap = 15;
	var ID_Cowboy_Hat = 5;
	var ID_Ranger_Hat = 4;
	var ID_Explorer_Hat = 18;
	var ID_Flipper_Hat = 31;
	var ID_Marksman_Cap = 1;
	var ID_Bush_Gear = 10;
    var ID_Halo = 48;
	var ID_Soldier_Helmet = 6;
	var ID_Anti_Venom_Gear = 23;
	var ID_Medic_Gear = 13;
	var ID_Miners_Helmet = 9;
	var ID_Musketeer_Hat = 32;
	var ID_Bull_Helmet = 7;
    var ID_Emp_Helmet = 22;
    var ID_Booster_Hat = 12;
    var ID_Barbarian_Armor = 26;
    var ID_Plague_Mask = 21;
    var ID_Bull_Mask = 46;
    var ID_Windmill_Hat = 14;
    var ID_Spike_Gear = 11;
    var ID_Samurai_Armor = 20;
    var ID_Bushido_Armor = 16;
    var ID_Scavenger_Gear = 27;
    var ID_Tank_Gear = 40;
    var ID_Moo_Cap = 51;
    var ID_Apple_Cap = 50;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 117) {
			e.preventDefault();
			if (změna) {
            storeEquip(ID_FΔZΣ);
            můjVar = setTimeout(function(){ h1(); }, 75);
			} else {
            clearTimeout(můjVar);
            clearTimeout(můjVar2);
            clearTimeout(můjVar3);
            clearTimeout(můjVar4);
            clearTimeout(můjVar5);
            clearTimeout(můjVar6);
            clearTimeout(můjVar7);
            clearTimeout(můjVar8);
            clearTimeout(můjVar9);
            clearTimeout(můjVar10);
            clearTimeout(můjVar11);
            clearTimeout(můjVar12);
            clearTimeout(můjVar13);
            clearTimeout(můjVar14);
            clearTimeout(můjVar15);
            clearTimeout(můjVar16);
            clearTimeout(můjVar17);
            clearTimeout(můjVar18);
            clearTimeout(můjVar19);
            clearTimeout(můjVar20);
            clearTimeout(můjVar21);
            clearTimeout(můjVar22);
            clearTimeout(můjVar23);
            clearTimeout(můjVar24);
            clearTimeout(můjVar25);
            clearTimeout(můjVar26);
            clearTimeout(můjVar27);
            clearTimeout(můjVar28);
            clearTimeout(můjVar29);
            clearTimeout(můjVar30);
            clearTimeout(můjVar31);
            clearTimeout(můjVar32);
            clearTimeout(můjVar33);
            clearTimeout(můjVar34);
            clearTimeout(můjVar35);
            clearTimeout(můjVar36);
            clearTimeout(můjVar37);
            clearTimeout(můjVar38);
            clearTimeout(můjVar39);
                clearTimeout(můjVar40);
                clearTimeout(můjVar41);
            storeEquip(ID_FΔZΣ);
			}
			změna = !změna;
		}
	});

    function h1() {
    storeEquip(ID_FΔZΣ);
    clearTimeout(můjVar);
    můjVar2 = setTimeout(function(){ h2(); }, 75);
    }
    function h2() {
    storeEquip(ID_Moo_Head);
    clearTimeout(můjVar2);
    můjVar3 = setTimeout(function(){ h3(); }, 75);
    }
    function h3() {
    storeEquip(ID_Pig_Head);
    clearTimeout(můjVar3);
    můjVar4 = setTimeout(function(){ h4(); }, 75);
    }
    function h4() {
    storeEquip(ID_Fluff_Head);
    clearTimeout(můjVar4);
    můjVar5 = setTimeout(function(){ h5(); }, 75);
    }
    function h5() {
    storeEquip(ID_Pandou_Head);
    clearTimeout(můjVar5);
    můjVar6 = setTimeout(function(){ h6(); }, 75);
    }
    function h6() {
    storeEquip(ID_Bear_Head);
    clearTimeout(můjVar6);
    můjVar7 = setTimeout(function(){ h7(); }, 75);
    }
    function h7() {
    storeEquip(ID_Monkey_Head);
    clearTimeout(můjVar7);
    můjVar8 = setTimeout(function(){ h8(); }, 75);
    }
    function h8() {
    storeEquip(ID_Polar_Head);
    clearTimeout(můjVar8);
    můjVar9 = setTimeout(function(){ h9(); }, 75);
    }
    function h9() {
    storeEquip(ID_Fez_Hat);
    clearTimeout(můjVar9);
    můjVar10 = setTimeout(function(){ h10(); }, 75);
    }
    function h10() {
    storeEquip(ID_Enigma_Hat);
    clearTimeout(můjVar10);
    můjVar11 = setTimeout(function(){ h11(); }, 75);
    }
    function h11() {
    storeEquip(ID_Blitz_Hat);
    clearTimeout(můjVar11);
    můjVar12 = setTimeout(function(){ h12(); }, 75);
    }
    function h12() {
    storeEquip(ID_Bob_XIII_Hat);
    clearTimeout(můjVar12);
    můjVar13 = setTimeout(function(){ h13(); }, 75);
    }
        function h13() {
    storeEquip(ID_Bummle_Hat);
    clearTimeout(můjVar13);
    můjVar14 = setTimeout(function(){ h14(); }, 75);
    }
    function h14() {
    storeEquip(ID_Straw_Hat);
    clearTimeout(můjVar14);
    můjVar15 = setTimeout(function(){ h15(); }, 75);
    }
    function h15() {
    storeEquip(ID_Winter_Cap);
    clearTimeout(můjVar15);
    můjVar16 = setTimeout(function(){ h16(); }, 75);
    }
    function h16() {
    storeEquip(ID_Cowboy_Hat);
    clearTimeout(můjVar16);
    můjVar17 = setTimeout(function(){ h17(); }, 75);
    }
    function h17() {
    storeEquip(ID_Ranger_Hat);
    clearTimeout(můjVar17);
    můjVar18 = setTimeout(function(){ h18(); }, 75);
    }
    function h18() {
    storeEquip(ID_Explorer_Hat);
    clearTimeout(můjVar18);
    můjVar19 = setTimeout(function(){ h19(); }, 75);
    }
    function h19() {
    storeEquip(ID_Flipper_Hat);
    clearTimeout(můjVar19);
    můjVar20 = setTimeout(function(){ h20(); }, 75);
    }
    function h20() {
    storeEquip(ID_Marksman_Cap);
    clearTimeout(můjVar20);
    můjVar21 = setTimeout(function(){ h21(); }, 75);
    }
    function h21() {
    storeEquip(ID_Bush_Gear);
    clearTimeout(můjVar21);
    můjVar22 = setTimeout(function(){ h22(); }, 75);
    }
    function h22() {
    storeEquip(ID_Halo);
    clearTimeout(můjVar22);
    můjVar23 = setTimeout(function(){ h23(); }, 75);
    }
    function h23() {
    storeEquip(ID_Soldier_Helmet);
    clearTimeout(můjVar23);
    můjVar24 = setTimeout(function(){ h24(); }, 75);
    }
    function h24() {
    storeEquip(ID_Anti_Venom_Gear);
    clearTimeout(můjVar24);
    můjVar25 = setTimeout(function(){ h25(); }, 75);
    }
    function h25() {
    storeEquip(ID_Medic_Gear);
    clearTimeout(můjVar25);
    můjVar26 = setTimeout(function(){ h26(); }, 75);
    }
    function h26() {
    storeEquip(ID_Miners_Helmet);
    clearTimeout(můjVar26);
    můjVar27 = setTimeout(function(){ h27(); }, 75);
    }
    function h27() {
    storeEquip(ID_Musketeer_Hat);
    clearTimeout(můjVar27);
    můjVar28 = setTimeout(function(){ h28(); }, 75);
    }
    function h28() {
    storeEquip(ID_Bull_Helmet);
    clearTimeout(můjVar28);
    můjVar29 = setTimeout(function(){ h29(); }, 75);
    }
    function h29() {
    storeEquip(ID_Emp_Helmet);
    clearTimeout(můjVar29);
    můjVar30 = setTimeout(function(){ h30(); }, 75);
    }
    function h30() {
    storeEquip(ID_Booster_Hat);
    clearTimeout(můjVar30);
    můjVar31 = setTimeout(function(){ h31(); }, 75);
    }
    function h31() {
    storeEquip(ID_Barbarian_Armor);
    clearTimeout(můjVar31);
    můjVar32 = setTimeout(function(){ h32(); }, 75);
    }
    function h32() {
    storeEquip(ID_Plague_Mask);
    clearTimeout(můjVar32);
    můjVar33 = setTimeout(function(){ h33(); }, 75);
    }
    function h33() {
    storeEquip(ID_Bull_Mask);
    clearTimeout(můjVar33);
    můjVar34 = setTimeout(function(){ h34(); }, 75);
    }
    function h34() {
    storeEquip(ID_Windmill_Hat);
    clearTimeout(můjVar34);
    můjVar35 = setTimeout(function(){ h35(); }, 75);
    }
    function h35() {
    storeEquip(ID_Spike_Gear);
    clearTimeout(můjVar35);
    můjVar36 = setTimeout(function(){ h36(); }, 75);
    }
    function h36() {
    storeEquip(ID_Samurai_Armor);
    clearTimeout(můjVar36);
    můjVar37 = setTimeout(function(){ h37(); }, 75);
    }
    function h37() {
    storeEquip(ID_Bushido_Armor);
    clearTimeout(můjVar37);
    můjVar38 = setTimeout(function(){ h38(); }, 75);
    }
    function h38() {
    storeEquip(ID_Scavenger_Gear);
    clearTimeout(můjVar38);
    můjVar39 = setTimeout(function(){ h39(); }, 75);
    }
    function h39() {
    storeEquip(ID_Tank_Gear);
    clearTimeout(můjVar39);
    můjVar40 = setTimeout(function(){ h40(); }, 75);
    }
         function h40() {
    storeEquip(ID_Moo_Cap);
    clearTimeout(můjVar12);
    můjVar41 = setTimeout(function(){ h41(); }, 75);
    }
     function h41() {
    storeEquip(ID_Apple_Cap);
    clearTimeout(můjVar12);
    můjVar = setTimeout(function(){ h1(); }, 75);
    }
})();

(function() {
    var můjVar;
    var můjVar2;
    var můjVar3;
    var můjVar4;
    var můjVar5;
    var můjVar6;
    var můjVar7;
    var můjVar8;
    var můjVar9;
    var můjVar10;
    var můjVar11;
    var můjVar12;
    var můjVar13;
    var můjVar14;
    var můjVar15;
    var můjVar16;
    var můjVar17;
    var můjVar18;
    var můjVar19;
    var můjVar20;
    var můjVar21;
    var můjVar22;
    var můjVar23;
    var můjVar24;
    var můjVar25;
    var můjVar26;
    var můjVar27;
    var můjVar28;
    var můjVar29;
    var můjVar30;
    var můjVar31;
    var můjVar32;
    var můjVar33;
    var můjVar34;
    var můjVar35;
    var můjVar36;
    var můjVar37;
    var můjVar38;
    var můjVar39;
    var můjVar40;
    var můjVar41;
	var změna = true;
    var ID_FΔZΣ = 45;
	var ID_Moo_Head = 28;
	var ID_Pig_Head = 29;
      var ID_Moo_Cap = 51;
    var ID_Apple_Cap = 50;
    var ID_Fluff_Head = 30;
    var ID_Pandou_Head = 36;
    var ID_Bear_Head = 37;
    var ID_Monkey_Head = 38;
    var ID_Polar_Head = 44;
	var ID_Fez_Hat = 35;
	var ID_Enigma_Hat = 42;
	var ID_Blitz_Hat = 43;
	var ID_Bob_XIII_Hat = 49;
	var ID_Bummle_Hat = 8;
	var ID_Straw_Hat = 2;
	var ID_Winter_Cap = 15;
	var ID_Cowboy_Hat = 5;
	var ID_Ranger_Hat = 4;
	var ID_Explorer_Hat = 18;
	var ID_Flipper_Hat = 31;
	var ID_Marksman_Cap = 1;
	var ID_Bush_Gear = 10;
    var ID_Halo = 48;
	var ID_Soldier_Helmet = 6;
	var ID_Anti_Venom_Gear = 23;
	var ID_Medic_Gear = 13;
	var ID_Miners_Helmet = 9;
	var ID_Musketeer_Hat = 32;
	var ID_Bull_Helmet = 7;
    var ID_Emp_Helmet = 22;
    var ID_Booster_Hat = 12;
    var ID_Barbarian_Armor = 26;
    var ID_Plague_Mask = 21;
    var ID_Bull_Mask = 46;
    var ID_Windmill_Hat = 14;
    var ID_Spike_Gear = 11;
    var ID_Samurai_Armor = 20;
    var ID_Bushido_Armor = 16;
    var ID_Scavenger_Gear = 27;
    var ID_Tank_Gear = 40;
    var ID_Moo_Cap = 51;
    var ID_Apple_Cap = 50;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 121) {
			e.preventDefault();
			if (změna) {
            storeEquip(ID_FΔZΣ);
            můjVar = setTimeout(function(){ h1(); }, 75);
			} else {
            clearTimeout(můjVar);
            clearTimeout(můjVar2);
            clearTimeout(můjVar3);
            clearTimeout(můjVar4);
            clearTimeout(můjVar5);
            clearTimeout(můjVar6);
            clearTimeout(můjVar7);
            clearTimeout(můjVar8);
            clearTimeout(můjVar9);
            clearTimeout(můjVar10);
            clearTimeout(můjVar11);
            clearTimeout(můjVar12);
            clearTimeout(můjVar13);
            clearTimeout(můjVar14);
            clearTimeout(můjVar15);
            clearTimeout(můjVar16);
            clearTimeout(můjVar17);
            clearTimeout(můjVar18);
            clearTimeout(můjVar19);
            clearTimeout(můjVar20);
            clearTimeout(můjVar21);
            clearTimeout(můjVar22);
            clearTimeout(můjVar23);
            clearTimeout(můjVar24);
            clearTimeout(můjVar25);
            clearTimeout(můjVar26);
            clearTimeout(můjVar27);
            clearTimeout(můjVar28);
            clearTimeout(můjVar29);
            clearTimeout(můjVar30);
            clearTimeout(můjVar31);
            clearTimeout(můjVar32);
            clearTimeout(můjVar33);
            clearTimeout(můjVar34);
            clearTimeout(můjVar35);
            clearTimeout(můjVar36);
            clearTimeout(můjVar37);
            clearTimeout(můjVar38);
            clearTimeout(můjVar39);
                clearTimeout(můjVar40);
                clearTimeout(můjVar41);
            storeEquip(ID_FΔZΣ);
			}
			změna = !změna;
		}
	});

    function h1() {
    storeEquip(ID_Winter_Cap);
    clearTimeout(můjVar);
    můjVar2 = setTimeout(function(){ h2(); }, 75);
    }
    function h2() {
    storeEquip(ID_Bummle_Hat);
    clearTimeout(můjVar2);
    můjVar = setTimeout(function(){ h1(); }, 75);
    }
})();

window.onbeforeunload = null;
let mouseX;
let mouseY;

let width;
let height;
$('#promoImgHolder').append('')


!
setInterval(() => {
  if(clanCrash == 1) {
       doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
            doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);

             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
             doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);
          doNewSend(["8", [crash(false, 5)]])
      doNewSend(["9", [null]]);


         }
   doNewSend(["testing", [6]]);
}, 100);

setInterval(() => {
  if(clanfake == 1) {
       doNewSend(["9", [null]]);
       doNewSend(["8", [fake(false, 5)]])
   }
   doNewSend(["testing", [6]]);
}, 100);

setInterval(() => {
  if(clanToggle == 1) {
       doNewSend(["9", [null]]);
       doNewSend(["8", [animate(false, 5)]])
      }
   doNewSend(["testing", [6]]);
}, 0);

setInterval(() => {
   if(messagecrash == 1) {
       doNewSend(["ch", [crash(true, 5)]])
   }
}, 0);

setInterval(() => {
   if(messagefake == 1) {
       doNewSend(["ch", [fake(true, 5)]])
   }
}, 0);

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


if (window.sessionStorage.force != "false" && window.sessionStorage.force && window.sessionStorage.force.toString() != "null"){
   document.getElementsByClassName("menuHeader")[0].innerHTML = `Servers <span style="color: red;">Force (${window.sessionStorage.force})</span>`;
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
                 delete window.sessionStorage.force;
             }

            super(...args);

         }


}

    WebSocket = ForceSocket;
var accessories = [{
		id: 12,
		name: "Snowball",
		price: 0e3,
		scale: 105,
		xOff: 18,
		desc: "no effect"
	}, {
		id: 9,
		name: "Tree Cape",
		price: 0e3,
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
		price: 500,
		scale: 90,
		desc: "no effect"
	}, {
		id: 8,
		name: "Cow Cape",
		price: 0e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 11,
		name: "Monkey Tail",
		price: 0e3,
		scale: 97,
		xOff: 25,
		desc: "Super speed but reduced damage",
		spdMult: 1.35,
		dmgMultO: .2
	}, {
		id: 17,
		name: "Apple Basket",
		price: 0e3,
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
		price: 0e3,
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
		price: 200,
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
		price: 500,
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
		price: 0e3,
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
		price: 0e3,
		scale: 120,
		desc: "increases damage done but drains health",
		healthRegen: -5,
		dmgMultO: 1.5,
		spdMult: .96
	}, {
		id: 22,
		name: "Emp Helmet",
		price: 0e3,
		scale: 120,
		desc: "turrets won't attack but you move slower",
		antiTurret: 1,
		spdMult: .7
	}, {
		id: 12,
		name: "Booster Hat",
		price: 0e3,
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
		price: 0e4,
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
		price: 0e3,
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
		dmg: 90,
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
		dmg: 90,
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
		dmg: 50,
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

WebSocket = ForceSocket;


var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 200;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var trapType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var tick = 0;
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

let healSpeed = 40;
let healSpeed2 = 0;
var messagecrash = 0;
var clanToggle = 0;
var clanCrash = 0;
var clanfake = 0;
var messagefake = 0;
let healToggle = 0;
let healToggle2 = 0;
let hatToggle = 0;

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
                   normalAcc = 21
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

   if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 100 && data[2] > 0 && healToggle2 == 1) {
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
function boostWall() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(wallType, boostDir + toRad(90));
    place(wallType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}
function fourSpike() {
        place(spikeType, myPlayer.dir + toRad(0));
        place(spikeType, myPlayer.dir - toRad(90));
        place(spikeType, myPlayer.dir + toRad(90));
        place(spikeType, myPlayer.dir - toRad(180));
        place(spikeType, myPlayer.dir + toRad(45));
        place(spikeType, myPlayer.dir - toRad(45));
        place(spikeType, myPlayer.dir + toRad(135));
        place(spikeType, myPlayer.dir - toRad(135));
        place(spikeType, myPlayer.dir + toRad(60));
        place(spikeType, myPlayer.dir - toRad(60));
        place(spikeType, myPlayer.dir + toRad(150));
        place(spikeType, myPlayer.dir - toRad(150));
        place(spikeType, myPlayer.dir + toRad(30));
        place(spikeType, myPlayer.dir - toRad(30));
        place(spikeType, myPlayer.dir + toRad(120));
        place(spikeType, myPlayer.dir - toRad(120));
}
function fourSpawnpad() {
       place(spawnpadType, myPlayer.dir + toRad(135));
       place(spawnpadType, myPlayer.dir + toRad(150));
       place(spawnpadType, myPlayer.dir + toRad(165));
       place(spawnpadType, myPlayer.dir + toRad(180));
       place(spawnpadType, myPlayer.dir + toRad(195));
       place(spawnpadType, myPlayer.dir + toRad(210));
       place(spawnpadType, myPlayer.dir + toRad(225));
       place(spawnpadType, myPlayer.dir + toRad(240));
       place(spawnpadType, myPlayer.dir + toRad(255));
       place(spawnpadType, myPlayer.dir + toRad(270));
       place(spawnpadType, myPlayer.dir + toRad(285));
       place(spawnpadType, myPlayer.dir + toRad(300));
       place(spawnpadType, myPlayer.dir + toRad(315));
       place(spawnpadType, myPlayer.dir + toRad(330));
       place(spawnpadType, myPlayer.dir + toRad(345));
       place(spawnpadType, myPlayer.dir + toRad(360));
}

function fourTrap() {
       place(trapType, myPlayer.dir + toRad(135));
       place(trapType, myPlayer.dir + toRad(150));
       place(trapType, myPlayer.dir + toRad(165));
       place(trapType, myPlayer.dir + toRad(180));
       place(trapType, myPlayer.dir + toRad(195));
       place(trapType, myPlayer.dir + toRad(210));
       place(trapType, myPlayer.dir + toRad(225));
       place(trapType, myPlayer.dir + toRad(240));
       place(trapType, myPlayer.dir + toRad(255));
       place(trapType, myPlayer.dir + toRad(270));
       place(trapType, myPlayer.dir + toRad(285));
       place(trapType, myPlayer.dir + toRad(300));
       place(trapType, myPlayer.dir + toRad(315));
       place(trapType, myPlayer.dir + toRad(330));
       place(trapType, myPlayer.dir + toRad(345));
       place(trapType, myPlayer.dir + toRad(360));
}
var repeater = function(key, action, interval, bu) {
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
const turretPlacer = repeater(56, () => {place(turretType)}, 0);
const wallPlacer = repeater(52, () => {place(wallType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);
const boostWaller = repeater(191, boostWall, 0);
const fourSpiker = repeater(66, fourSpike, 0);
const fourTraper = repeater(219, fourTrap, 0);
const fourSpawnpader = repeater(115, fourSpawnpad, 0);





document.addEventListener('keydown', (e)=>{
   spikePlacer.start(e.keyCode);
   healer.start(e.keyCode);
   boostPlacer.start(e.keyCode);
   boostWaller.start(e.keyCode);
   fourTraper.start(e.keyCode);
   fourSpawnpader.start(e.keyCode);
   fourSpiker.start(e.keyCode);
   boostSpiker.start(e.keyCode);
   millPlacer.start(e.keyCode);
   wallPlacer.start(e.keyCode);
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
   if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(turretType, myPlayer.dir + toRad(45));
       place(turretType, myPlayer.dir - toRad(45));
   }

   if (e.keyCode == 115 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(spawnpadType, myPlayer.dir + toRad(45));
       place(spawnpadType, myPlayer.dir - toRad(45));
   }

   if (e.keyCode == 188 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(wallType, myPlayer.dir + toRad(90));
       place(spikeType, myPlayer.dir + toRad(180));
       place(boostType, myPlayer.dir + toRad(270));
       place(trapType, myPlayer.dir + toRad(270));
       place(millType, myPlayer.dir + toRad(0));
   }
      if (e.keyCode == 18 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(millType, myPlayer.dir + toRad(90));
       place(millType, myPlayer.dir + toRad(270));
       place(millType, myPlayer.dir + toRad(0));
   }
    if (e.keyCode == 70 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(boostType, myPlayer.dir + toRad(0));
   }
          if (e.keyCode == 120 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(millType, myPlayer.dir + toRad(90));
       place(millType, myPlayer.dir + toRad(270));
       place(boostType, myPlayer.dir + toRad(0));
                     place(millType, myPlayer.dir + toRad(90));
       place(millType, myPlayer.dir + toRad(270));
       place(boostType, myPlayer.dir + toRad(0));
                     place(millType, myPlayer.dir + toRad(90));
       place(millType, myPlayer.dir + toRad(270));
       place(boostType, myPlayer.dir + toRad(0));
   }
   if (e.keyCode == 33 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       place(trapType, myPlayer.dir + toRad(45));
       place(trapType, myPlayer.dir - toRad(45));
       place(spikeType, myPlayer.dir + toRad(135));
       place(spikeType, myPlayer.dir + toRad(225));
   }
       if (e.keyCode == 219 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }

   if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       if (myPlayer.y < 2400){
           hat(15);
       } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
           hat(31);
       } else {
            hat(12);
       }
       acc(11);
   }

   if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
           hat(7);
           acc(21);
   }

   if (e.keyCode == 109 && document.activeElement.id.toLowerCase() !== 'chatbox') {
           hat(7);
           acc(21);
   }
       if (e.keyCode == 220 && document.activeElement.id.toLowerCase() !== 'chatbox') {
           hat(31);
           acc(18)
   }
        if (e.keyCode == 221 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(22);
        acc(19);
    }
    if (e.keyCode == 17 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(27);
        acc(18);
    }

   if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') {
           hat(6);
           acc(19);
   }
      if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       hat(26);
       acc(13);
   }
   if (e.keyCode == 192 && document.activeElement.id.toLowerCase() !== 'chatbox') {
           hat(0);
           acc(0);
   }
       if (e.keyCode == 75 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       hat(20);
       acc(18);
   }
     if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(40);
        acc(19);
    }
   if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(53);
        acc(19);
    }
     if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       hat(11);
       acc(21);
   }
     if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       acc(0);
   }
       if (e.keyCode == 8 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       hat(28);
       acc(8);
   }
   if(e.keyCode == 187 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
       doNewSend(["ch", [me(true, 5)]])
           doNewSend(["13c", [0, 11, 0]]);
           doNewSend(["13c", [0, 21, 1]]);

       setTimeout( () => {
           doNewSend(["5", [primary, true]]);
           doNewSend(["13c", [0, 7, 0]]);
           doNewSend(["13c", [0, 0, 1]]);
           doNewSend(["13c", [0, 18, 1]]);
           doNewSend(["c", [1]]);
       }, 100);

       setTimeout( () => {
           doNewSend(["13c", [0, 53, 0]]);
           doNewSend(["5", [secondary, true]]);
       }, 200);

       setTimeout( () => {
           doNewSend(["c", [0]]);
           doNewSend(["5", [primary, true]]);
           doNewSend(["13c", [0, 6, 0]]);
           doNewSend(["13c", [0, 21, 1]]);
           autoaim = false;
       }, 300);
   }


    if(e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["ch", [mes(true, 5)]])
            doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["6", [5]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            place(spikeType, myPlayer.dir + toRad(0));
        }, 200);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            autoaim = false;
        }, 300);
    }
   if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       autoaim = true;
       doNewSend(["5", [primary, true]]);
       doNewSend(["13c", [0, 7, 0]]);
       doNewSend(["13c", [0, 0, 1]]);
       doNewSend(["13c", [0, 18, 1]]);
       place(spikeType, myPlayer.dir + toRad(45));
       place(spikeType, myPlayer.dir - toRad(45));
       doNewSend(["c", [1]]);

       setTimeout( () => {
           doNewSend(["13c", [0, 53, 0]]);
           doNewSend(["ch", [Boom(true, 5)]])
       }, 100);

       setTimeout( () => {
           doNewSend(["c", [0, null]]);
           doNewSend(["13c", [0, 0, 0]]);
           doNewSend(["13c", [0, 6, 0]]);
           doNewSend(["13c", [0, 19, 1]]);
           autoaim = false;
       }, 200);
   }

if(e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       autoaim = false;
       doNewSend(["5", [primary, true]]);
       doNewSend(["13c", [0, 7, 0]]);
       doNewSend(["13c", [0, 0, 1]]);
       doNewSend(["13c", [0, 18, 1]]);
    doNewSend(["ch", [hahaha(true, 5)]])
       doNewSend(["c", [1]]);

       setTimeout( () => {
           doNewSend(["13c", [0, 53, 0]]);
           doNewSend(["13c", [0, 21, 1]]);
       }, instaSpeed - 130);

       setTimeout( () => {
       doNewSend(["5", [primary, true]]);
       doNewSend(["c", [0, null]]);
       doNewSend(["13c", [0, 0, 0]]);
       doNewSend(["13c", [0, 12, 0]]);
       doNewSend(["13c", [0, 11, 1]]);
       autoaim = false;
       }, instaSpeed);
   }

    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["ch", [mess(true, 5)]])
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

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
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = null;
        }, instaSpeed);
    }

        if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = false;
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 6, 0]]);
        }, instaSpeed - 160);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, instaSpeed);
    }
    if(e.keyCode == 20 && document.activeElement.id.toLowerCase() !== 'chatbox') {
  autoaim = true;
        doNewSend(["13c", [0, 7, 0]]);
                        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 6, 0]]);
        doNewSend(["13c", [0, 21, 1]]);
        }, instaSpeed - 160);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 12, 0]]);
                    doNewSend(["13c", [0, 19, 1]]);
            autoaim = false;
        }, instaSpeed);
    }
    if(e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 26, 0]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
                 doNewSend(["ch", [m(true, 5)]])
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
              place(spikeType, myPlayer.dir + toRad(0));
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["5", [7]]);
            doNewSend(["c", [1]]);
            doNewSend(["c", [0]]);
            autoaim = false;
        }, instaSpeed);
    }
        if(e.keyCode == 9 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["ch", [lol(true, 5)]])
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["6", [4]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["c", [1]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["c", [0, null]]);
            autoaim = false;
        }, instaSpeed);
}
      if(e.keyCode == 189 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [5]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [28]]);
        doNewSend(["6", [15]]);

    }
        if(e.keyCode == 119 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
            }
            if(e.keyCode == 17 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [27]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [38]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [25]]);
            }

   if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       messagecrash = (messagecrash + 1) % 2;
   }

    if(e.keyCode == 37 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       messagefake = (messagefake + 1) % 2;
   }

   if(e.keyCode == 39 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       clanfake = (clanfake + 1) % 2;
   }
     if(e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       clanfake2 = (clanReTryPro + 1) % 2;
   }

   if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       clanToggle = (clanToggle + 1) % 2;
   }

   if(e.keyCode == 46 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       clanCrash = (clanCrash + 1) % 2;
   }

   if(e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
        if(e.keyCode == 115 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (autoaim == false) {
            autoaim = true;
        document.title = "SaVeGeMod / Aim : On";
        } else {
        document.title = "SaVeGeMod / Aim : Off";
            autoaim = false;
    }
    }

   if(e.keyCode == 114 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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

   if(e.keyCode == 190 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       autoaim = true;
       doNewSend(["5", [secondary, true]]);
       doNewSend(["ch", [spam(true, 5)]])
           doNewSend(["13c", [0, 32, 0]]);
           doNewSend(["13c", [0, 21, 1]]);
       doNewSend(["13c", [0, 53, 0]]);
       doNewSend(["c", [1]]);

       setTimeout( () => {
           doNewSend(["13c", [0, 32, 19]]);
           doNewSend(["13c", [0, 21, 1]]);
           doNewSend(["13c", [0, 32, 0]]);
           doNewSend(["6", [12]]);

       }, 100);

       setTimeout( () => {
           doNewSend(["6", [15]]);

       }, 200);

       setTimeout( () => {
           doNewSend(["c", [0]]);
           doNewSend(["5", [primary, true]]);
           autoaim = false;
       }, 300);
   }

   if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num1 katana [age 8]
       doNewSend(["6", [4]]);
   }
   if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num2 musket [age 9]
       doNewSend(["6", [15]]);
   }
   if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num2 crossbow [age 8]
       doNewSend(["6", [12]]);
   }
   if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num9 max mill [age 8]
       doNewSend(["6", [28]]);
   }
   if(e.keyCode == 104 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num8 max wall [age 7]
       doNewSend(["6", [21]]);
   }
   if(e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num5 spin spike [age 9]
       doNewSend(["6", [25]]);
   }
   if(e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num6 fast crossbow [age 9]
       doNewSend(["6", [13]]);
   }
   if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num3 great axe [age 8]
       doNewSend(["6", [2]]);
   }
   if(e.keyCode == 112 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
   boostWaller.stop(e.keyCode);
   fourTraper.stop(e.keyCode);
   fourSpawnpader.stop(e.keyCode);
   fourSpiker.stop(e.keyCode);
   boostSpiker.stop(e.keyCode);
   millPlacer.stop(e.keyCode);
   turretPlacer.stop(e.keyCode);
   wallPlacer.stop(e.keyCode);
   healer.stop(e.keyCode);
   if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       setTimeout( () => {
           doNewSend(["33", [null]]);
           boostDir = null;
       }, 10);
   }
   if(e.keyCode == 66 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       setTimeout( () => {
           doNewSend(["33"]);
       }, 1);
   }
   if(e.keyCode == 219 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       setTimeout( () => {
           doNewSend(["33"]);
       }, 1);
   }
   if(e.keyCode == 115 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       setTimeout( () => {
           doNewSend(["33"]);
       }, 1);
   }
   if(e.keyCode == 191 && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
       characters = 'Bextiyar=PERFECT+PRO+GOD+BEST';
   } else {
       characters = 'BEX';
   }
   if(space) {
       characters = characters.padStart((70 - characters.length) / 6 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 6 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}

function crash(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'COMON MAN U NEVE KILL ME';
   } else {
       characters = 'DIE';
   }
   if(space) {
       characters = characters.padStart((70 - characters.length) / 6 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 6 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}

function fake(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'DraGonMod Fixed By Bextiyar';
   } else {
       characters = 'DGM';
   }
   if(space) {
       characters = characters.padStart((70 - characters.length) / 6 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 6 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}
function ReTryPro(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = ':/';
    } else {
        characters = 'AHR';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}

function spam(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'PEWeZNooBB';
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
       characters = '!Why~|So|~eZ!';
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
        function radar(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'Someone here';
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
    function hahaha(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'OWOSoproe';
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
       characters = 'eZGetREKT';
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
function m(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'GotABot';
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
function Boom(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'IM()OP';
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

function me(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'DAMDAMdone';
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

function mes(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'AGE1OP';
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
(function() {
  var UPDATE_DELAY = 700;

  var lastUpdate = 0;
  var frames = 0;

  var displayElement = document.createElement("div");
  displayElement.style.padding = "5px";
  displayElement.style.font = "16px Arial";
  displayElement.style.display = "block";
  displayElement.style.position = "fixed";
  displayElement.style.top = "0px";
  displayElement.style.left = "0px";
  displayElement.textContent = "Calculating...";
  document.body.appendChild(displayElement);

  function cssColorToRGB(color) {
    var values;

    if (color.startsWith("rgba")) {
      values = color.substring(5, color.length - 1).split(",");
    } else if (color.startsWith("rgb")) {
      values = color.substring(4, color.length - 1).split(",");
    } else if (color.startsWith("#") && color.length === 4) {
      values = [];
      values[0] = "" + parseInt("0x" + color.substr(1, 1));
      values[1] = "" + parseInt("0x" + color.substr(2, 1));
      values[2] = "" + parseInt("0x" + color.substr(3, 1));
    } else if (color.startsWith("#") && color.length === 7) {
      values = [];
      values[0] = "" + parseInt("0x" + color.substr(1, 2));
      values[1] = "" + parseInt("0x" + color.substr(3, 2));
      values[2] = "" + parseInt("0x" + color.substr(5, 2));
    } else {
      return {r : 255, g : 255, b : 255};
    }

    return {
      r : Number(values[0]),
      g : Number(values[1]),
      b : Number(values[2])
    };
  }

  function getInvertedRGB(values) {
    return "rgb(" + (255 - values.r) + "," + (9 - values.g) + ","
      + (9 - values.b) + ")";
  }

  function getOpaqueRGB(values) {
    return "rgba(" + values.r + "," + values.g + "," + values.b + ",0.7)";
  }

  function updateCounter() {
    var bgColor = getComputedStyle(document.body, null).getPropertyValue(
      "background-color");
    var bgColorValues = cssColorToRGB(bgColor);
    var textColor = getInvertedRGB(bgColorValues);
    var displayBg = getOpaqueRGB(bgColorValues);
    displayElement.style.color = textColor;
    displayElement.style.background = displayBg;

    var now = Date.now();
    var elapsed = now - lastUpdate;
    if (elapsed < UPDATE_DELAY) {
      ++frames;
    } else {
      var fps = Math.round(frames / (elapsed / 1000));
      displayElement.textContent = fps + " FPS";
      frames = 0;
      lastUpdate = now;
    }

    requestAnimationFrame(updateCounter);
  }

  lastUpdate = Date.now();
  requestAnimationFrame(updateCounter);
})();

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

   for (let i=33;i<36;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           turretType = i - 16;
       }
   }

   for (let i=36;i<37;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           spawnpadType = i - 16;
       }
   }

   for (let i=37;i<39;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           turretType = i - 16;
       }
   }
}

function createTribe(name) {
   leaveTribe();
   doNewSend(["8", [name]]);
}

function leaveTribe() {
   doNewSend(["9", [null]]);
}

var _msgs = ["DeatMod", "DeAthMod", "DeAtHMod", "DeAtHModv2"];
var msgs = _msgs;
var msgCycleSwitch = false;
var shift = false;
var minus = false;
var home = false;
var chat;
var msgNum = 0;

var socket = null;

var scriptSetup = false;

WebSocket = class extends WebSocket {
    constructor(...arg) {
        super(...arg);
        if (!scriptSetup){
            scriptSetup = true;
            styleInit();
            ren_overlay();
            window.onbeforeunload = function (){
                return 'Are you sure you want to leave?';
            };
        }
        socket = this;
    }
};

if (storageAvailable('localStorage')){
   if (!localStorage.getItem("msgs")){
       localStorage.setItem("msgs", JSON.stringify(msgs));
   }else{
       let temp;
       try{
           temp = JSON.parse(localStorage.getItem("msgs"));
       }
       catch (e){
           alert("Invalid Array! Setting default...");
           saveData();
           temp = "";
       }
       if (temp !== ""){
           msgs = temp;
       }
   }
}

const overlay = {};
overlay.keyCode = 36;
overlay.toggle = false;
overlay.inputString = msgs.join("\n");
overlay.tempMsgs = _msgs;

function styleInit() {
    addGlobalStyle(`#chatCyclerUI{padding: 0.2em; margin:0.2em; position: absolute;top: 0;left: 0;width: 30%;
    background-color: RGB(255, 4, 4);display:none;}`);
    addGlobalStyle(".table{ display: table; text-align: center; width: 100%; height: 80%;}");
    addGlobalStyle(".row{ display: table-row; }");
    addGlobalStyle(`.cell{ display: table-cell; padding: 0px 0.3em;border: 1px solid black;}`);
    addGlobalStyle(`.backRed{background-color:#FFFF00}`);
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
}

function toggleOverlay(tf){
    if (tf){
        document.querySelector('#chatCyclerUI').style.display = "block";
    }else{
        document.querySelector('#chatCyclerUI').style.display = "none";
    }
};

function ren_overlay(){
    const title = `<div style="font-size:32px;color:rgba(0, 0, 0, 0.75)">Menu</div>`;
    const descr = `<div>Press HOME to repeat this menu.</div>`;
    const body = `
            <div class="table">
                <div class="row">Message  Settings
                </div>
                <div class="row">
                    <div class="cell" style="vertical-align:middle">Messages</div>
                    <div class="cell" style="vertical-align:middle"><textarea name="overlay_messages" rows=4 cols=32 style="background-color:rgba(255, 255, 255, 0.35);resize:none;  rgba(255, 255, 255, 0.75) padding-left: 0px;border-left-width: 0px;border-top-width: 0px;padding-top: 0px;padding-right: 0px;border-right-width: 0px;padding-bottom: 0px;border-bottom-width: 0px;"></textarea></div>
                </div>
                <div class="row">
                    <div class="cell" style="vertical-align:middle">Save Message </div>
                    <div class="cell" style="vertical-align:middle"><input type="button" name="overlay_update_cycle" value="Save"  style="border-right-width: 0px;border-left-width: 0px;border-top-width: 0px;padding-left: 6px;border-bottom-width: 0px;"></div>
                </div>
                <br>
                <div class="row">Message  Repeat
                </div>
                <div class="row">
                    <div class="cell" style="vertical-align:middle">Repeat<br><span class="overlay_cycle_toggle_value"><span style="font-size:24px;color:rgba(0, 0, 0, 0.75)";>Off</span></span></div>
                    <div class="cell" style="vertical-align:middle"><input type="button" name="overlay_cycle_toggle" value="Repeat"></div>
                </div>
            </div>`;
    const footer = `<div style="font-size:24px;color:rgba(0, 0, 0, 0.75)">AutoChat</div>`;
    const temp = `${title} ${body} ${descr} ${footer}`;
    const d = document.createElement("div")
    d.id = "chatCyclerUI";
    d.innerHTML = temp;
    d.style.zIndex = 999999;
    document.body.appendChild(d);
    const val = document.querySelector('textarea[name="overlay_messages"]');
    val.value = overlay.inputString;
    val.addEventListener('input', function(e) {
        overlay.inputString = e.target.value;
    });
    document.querySelector('input[name="overlay_update_cycle"]').addEventListener('click', function() {
        if (!overlay.inputString){
            overlay.tempMsgs = _msgs;
        }else{
            overlay.tempMsgs = overlay.inputString.split(/\r?\n/);
        }
        msgNum = 99;
        msgs = overlay.tempMsgs;
        saveData();
    });
    document.querySelector('input[name="overlay_cycle_toggle"]').addEventListener('click', function(e) {
        msgCycleSwitch = !msgCycleSwitch;
        if (msgCycleSwitch){
            chat = setInterval(autoChat, 1);
            document.querySelector('.overlay_cycle_toggle_value').innerHTML = `<span style="font-size:24px;color:rgba(0, 0, 0, 0.75)";>On</span>`;
        }else{
            document.querySelector('.overlay_cycle_toggle_value').innerHTML = `<span style="font-size:24px;color:rgba(0, 0, 0, 0.75)";>Off</span>`;
            clearInterval(chat);
            msgNum = 0;
        }
    });
}

function concatBuffers(buffer1, buffer2){
  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}

const four = Uint8Array.from([4]).buffer;

function autoChat(){
    socket && socket.send(msgpack.encode(["ch", [msgs[msgNum]]]));
    msgNum++;
    if (msgNum >= msgs.length) msgNum = 0;
}

function storageAvailable(type){
	try{
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e){
		return false;
	}
}

function saveData(){
    if (storageAvailable('localStorage')){
        localStorage.setItem("msgs", JSON.stringify(msgs));
    }
}

window.addEventListener('keydown', function (event){
    if (overlay.toggle) event.stopImmediatePropagation();
    if (!minus && event.keyCode === 19){ //L
        msgCycleSwitch = !msgCycleSwitch;
        if (msgCycleSwitch){
            chat = setInterval(autoChat, 0);
        }else{
            clearInterval(chat);
            msgNum =0;
        }
        minus = true;
    }
    if (!home && event.keyCode === overlay.keyCode){ //HOME
        overlay.toggle = !overlay.toggle;
        toggleOverlay(overlay.toggle);
        home = true;
    }
});

window.addEventListener('keypress', function (event){
    if (overlay.toggle) event.stopImmediatePropagation();
});

window.addEventListener('keyup', function (event){
    if (overlay.toggle) event.stopImmediatePropagation();
    if (event.keyCode == 19){
        minus = false;
    }else if (event.keyCode == 36){
        home = false;
    }
});

var ID_WinterCap = 15;
var ID_AssassinGear = 56;
var ID_Bloodthirster = 55;
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
//Turret Gear. "Use if you want to"
var ID_TurretGear = 53;

// Keys

var TankGearKey = 90;
var AssassinGearKey = 107;
var BullHelmetKey = 75;
var SoldierHelmetKey = 67;
var TurretKey = 74;
var BoosterHatKey = 0;
var uneqiup = 189;
var SpikeGearKey = 220;
var BushGearKey = 186;
var EmpHelmetKey = 221;
var SamuraiArmorKey = 0;
var ScavengerGearKey = 106;

// Remove all of the ads on the page.

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
            <h2 style="font-size: 17px;">Hat Settings</h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <h3 style="color: red; font-size: 17px;"></h3>
                <h3 class="menuPrompt">Tank: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Soldier: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Booster: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Samurai: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="samuraiArmor" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Emp: </h3> <input value="${String.fromCharCode(EmpHelmetKey)}" id="empHelmet" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Bush: </h3> <input value="${String.fromCharCode(BushGearKey)}" id="bushGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Assassin: </h3> <input value="${String.fromCharCode(AssassinGearKey)}" id="assassinGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Scavenger: </h3> <input value="${String.fromCharCode(ScavengerGearKey)}" id="scavengerGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <hr>
                <h3 style="font-size: 17px;"> Map Settings </h3>

                <label class="container"> Biomes
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">Fixed By Bextiyar</h3>
            <p>Bextiyar</p>
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

$("#scavengerGear").on("input", () => {
    var cval = $("#scavengerGear").val();
    if (cval){
        ScavengerGearKey = cval.toUpperCase();
        ScavengerGearKey = ScavengerGearKey.charCodeAt(0);
        console.log(ScavengerGearKey);
    }
});

$("#assassinGear").on("input", () => {
    var cval = $("#assassinGear").val();
    if (cval){
        AssassinGearKey = cval.toUpperCase();
        AssassinGearKey = AssassinGearKey.charCodeAt(0);
        console.log(AssassinGearKey);
    }
});

$("#empHelmet").on("input", () => {
    var cval = $("#empHelmet").val();
    if (cval){
        EmpHelmetKey = cval.toUpperCase();
        EmpHelmetKey = EmpHelmetKey.charCodeAt(0);
        console.log(EmpHelmetKey);
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

$("#bushGear").on("input", () => {
    var cval = $("#bushGear").val();
    if (cval){
        BushGearKey = cval.toUpperCase();
        BushGearKey = BushGearKey.charCodeAt(0);
        console.log(BushGearKey);
    }
});


$("#samuraiArmor").on("input", () => {
    var cval = $("#samuraiArmor").val();
    if (cval){
        SamuraiArmorKey = cval.toUpperCase();
        SamuraiArmorKey = SamuraiArmorKey.charCodeAt(0);
        console.log(SamuraiArmorKey);
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

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
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
    color: #4a4a4a;
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
    background: #00FF00;
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
    background: #00FF00;
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
   } else if (e.keyCode == ScavengerGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_ScavengerGearGear);
   } else if (e.keyCode == AssassinGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_AssassinGear);
   } else if (e.keyCode == BushGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_BushGear);
   } else if (e.keyCode == EmpHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_EmpHelmet);
   } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_TankGear);
   } else if (e.keyCode == SamuraiArmorKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_SamuraiArmor);
   } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_SoldierHelmet);
   } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_BullHelmet);
   } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
       storeEquip(ID_BoosterHat);
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
function Parse() {
                    document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 89) {
                            storeBuy(6)
                            console.info('Attempted to buy soldier')
                        }
                    });
                };

                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 16) {
                            storeBuy(12)
                            console.info('Attempted to buy samurai')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 221) {
                            storeBuy(22)
                            console.info('Attempted to buy emp')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 75) {
                            storeBuy(20)
                            console.info('Attempted to buy flipper')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 71) {
                            storeBuy(26)
                            console.info('Attempted to buy Barbarian')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 84) {
                            storeBuy(7)
                            console.info('Attempted to buy bull')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 73) {
                            storeBuy(11)
                            console.info('Attempted to buy Spike')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 74) {
                            storeBuy(53)
                            console.info('Attempted to buy turret')
                        }
                        }
                    );
                ;
                     document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 90) {
                            storeBuy(40)
                            console.info('Attempted to buy Tank')
                        }
                        }
                    );
                ;
                           document.addEventListener('keydown', function (CustomKey1) {
                        if (CustomKey1.keyCode == 17) {
                            storeBuy(27)
                            console.info('Attempted to buy scavenger')
                        }
                        }
                    );
                ;
Parse();
// ==UserScript==
// @name         This is a basic script, just visual moomoo.io changes.
// @namespace    This is a basic script, just visual moomoo.io changes.
// @version      2.2.1
// @match        *://*.moomoo.io/*
// @match        *://dev.moomoo.io/*
// @description  A few changes.
// @author       Alone? Al
// @match        *://sandbox.moomoo.io/*
// @grant        none
// ==/UserScript==


document.getElementById('enterGame').innerHTML = '➡️| ☯️ℙ𝕃𝔸𝕐☯️ |⬅️';
document.getElementById("gameName").style.color = "Red";
document.getElementById('loadingText').innerHTML = 'Loading Dragonmod Fixed Version!';
document.getElementById('nameInput').placeholder = "𝔻𝒓𝓪𝔾𝝾𝖓𝕄𝗼𝕕";
document.getElementById('chatBox').placeholder = "╰𝔻𝒓𝓪𝔾𝝾𝖓𝕄𝗼𝕕╮";
document.getElementById("pingDisplay").style.color = "#ff0202";
document.getElementById('diedText').innerHTML = '➡️☠₲𝓪𝕞𝒆 ⵀ𝛎𝓮𝒓☠⬅️';
document.getElementById('diedText').style.color = "Red";

document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"

document.getElementById('adCard').remove();
document.getElementById('errorNotification').remove();


document.getElementById("leaderboard").style.color = "red";
document.getElementById("gameName").style.color = "Red";
document.getElementById("setupCard").style.color = "Red";
document.getElementById('gameName').innerHTML = '  ⛔🐲𝔻𝒓𝓪𝔾𝝾𝖓𝕄𝗼𝕕🐲⛔  ';
document.getElementById("promoImg").remove();
document.getElementById("woodDisplay").style.color = "Red";
document.getElementById("stoneDisplay").style.color = "Red";
document.getElementById("killCounter").style.color = "Red";
document.getElementById("foodDisplay").style.color = "Red";
document.getElementById("ageText").style.color = "red";
document.getElementById("allianceButton").style.color = "black";
document.getElementById("chatButton").style.color = "black";
document.getElementById("storeButton").style.color = "black";
    $("#mapDisplay").css({background: `url('https://cdn.discordapp.com/attachments/652521766555746325/683639971101278260/dragon.png')`});
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

    $("#leaderboard").css({
  'border':'3px solid #ff0202'
});

$('pingDisplay').css({'color': '#ff0202',
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
                                       'background-color': 'rgb(101, 11, 11);'});

$('#chatBox').css({'-webkit-border-radius': '0px',
                   '-moz-border-radius': '0px',
                   'border-radius': '700px',
                   'background-color': 'rgba(0, 0, 0, 0.18)',
                   'text-align': 'center'});

    $('#mainMenu').css({'-webkit-border-radius': '0px',
                   'text-align': 'center'});

$('#foodDisplay').css({'color': '#F40D0D'});
$('#killCounter').css({'color': '#F40D0D'});
$('#woodDisplay').css({'color': '#49FF00'});
$('#stoneDisplay').css({'color': '#404040'});
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


$("#ageBarContainer").append('</br><div id="hacktext"></div><div style="width: 100%;position: absolute;bottom: 94px;text-align: center;color:blue;font-size: 24px;" id="freetext"></div><div style="width: 100%;position: absolute;bottom: 144px;text-align: center;color: #ed3f00;font-size: 24px;" id="ptext"></div><div style="width: 100%;position: absolute;bottom: 224px;text-align: center;color: #9a008b;font-size: 24px;" id="ctext"></div><div style="width: 100%;position: absolute;top: 100px;text-align: center;color: white;font-size: 12px;" id="bilgitext">|hello |</div><div style="width: 100%;position: absolute;bottom: 170px;text-align: center;color: darkgreen;font-size: 24px;" id="atext"></div><div style="width: 100%;position: absolute;bottom: 196px;text-align: center;color: black;font-size: 24px;" id="mtext"></div>');
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
	"    background-color: rgb(95, 14, 14) !important;",
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
    "  background-color: rgb(0, 0, 0, 0.4) !important;",
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

$('#leaderboard').append('𝔻𝒓𝓪𝔾𝝾𝖓𝕄𝗼𝕕');

    (function() {
    'use strict';

//var NSE = document.createElement("audio");
//NSE.src = "https://dl.dropbox.com/s/1wot3ej8ajmx8eb/NOOB-SOUND EFFECT!!!!!.mp3";

    //xD
var ezsound = new Audio("https://dl.dropboxusercontent.com/s/qjfmz3sxmig1rrp/Black%20Ops%202%20Kaboom%20Sound%20%28Nuketown%20Map%29.mp3?dl=0");

var kills = 0;

setInterval(getkills, 100);

function getkills(){
    var count = parseInt(document.getElementById("killCounter").innerText);
    if(count > kills){
	ezsound.play();
    }
    kills = count;
}
})();


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

function letThereBeLight(){
  if(rANC[0] === 1){
    rainbowColor();
  }
  katie();
  window.requestAnimationFrame(letThereBeLight);
}

window.requestAnimationFrame
