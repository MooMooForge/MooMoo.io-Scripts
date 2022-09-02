// ==UserScript==
// @name           MooMoo.io | 💥TJMod💥 | MooMoo.io(Last)
// @namespace      https://www.TJMod.Weebly.Com/
// @version Last
// @icon           https://i.ibb.co/KVm8YMQ/image.png
// @description The Leading Hack ✝ MooMoo
// @author 🔰Xx_TJGaming_xX🔰
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://https://moomoo.io/bundle.js/*
// @match        *://https://sandbox.moomoo.io/bundle.js/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==
/*
=========================================================================================================================================================================================================================================================
TJMod Change Log
------------------------------------------------
V-BNRF2P
Coding Worker:Xx_TJGaming_xX

-Custom Radar Color
-Custom HP BAR COLOR
-Show Dir
-Show XY ̶Z
-InfoStyle Menu(F6)
------------------------------------------------
------------------------------------------------
V-ZYBH9W
Coding Worker:Xx_TJGaming_xX & KillerZ#9787

-Update Radar(Leader,Killer)
-Radar Text
------------------------------------------------
------------------------------------------------
V-QETAF9
Coding Worker:Xx_TJGaming_xX

-Update The HP(Show ALL)
-Update Radar
-Health Low Display
-Boss Display
-ID Display
------------------------------------------------
------------------------------------------------
V-WUR5W7
Coding Worker:Xx_TJGaming_xX

-Fix The SuperHeal
-Fix The Info Pad AutoHat OFF TEXT
-AutoChoose Menu
-INSTA Reload Speed=>1500
------------------------------------------------
------------------------------------------------
V-ZR9E3R
Coding Worker:Xx_TJGaming_xX

-Fix The Left Menu Switch Toggle Action
-Fix The OP BOT
-Beautiful Code
-Fix Some In Game Bug
-Show My HP
------------------------------------------------
=========================================================================================================================================================================================================================================================
*/
var lite = false;
var Version = "BNRF2P"
var autoskin = true;
var wtcrashoff = true
var ML;
var xd;
var IL;
var V2 = "E6H7DM"
var count2;
let healspeed=70
if (lite == true) {
    ML = "https://cdn.discordapp.com/attachments/705987996695920770/705988490482942032/Alan_Walker_-_Unity_Extended_Version_by_Albert_Vishi.mp3";
    IL = 'https://cdn.discordapp.com/attachments/705987996695920770/705988957804167188/roblox_death_sound_sound_effect_hd_255680.mp3'
} else {
    ML = "https://cdn.discordapp.com/attachments/705987996695920770/705988098588147742/TheFatRat_-_Unity.mp3";
    IL = 'https://cdn.discordapp.com/attachments/705987996695920770/706021924366450728/xd.mp3'
}
if (lite == false) {
    xd = "https://cdn.discordapp.com/attachments/705987996695920770/705988957804167188/roblox_death_sound_sound_effect_hd_255680.mp3"
} else {
    xd = "https://cdn.discordapp.com/attachments/705987996695920770/706021924366450728/xd.mp3"
}

var _0x2378=['Dexter','skins','cunillingus','whoar','safe','div','Cow\x20Cape','https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q','toDataURL','ucs-2','dontRun','penuus','die','stringify','deal\x20damage\x20to\x20players\x20that\x20damage\x20you','uint16','FlexDecoder','serverAddress','history','hidden','healing\x20pad','#a5974c','readInt16BE','str','RewardedVideoView','fart','canvas','prependListener','offset','index','bytesToString','cock','strokeRect','mothafuckas','[💠BOSS💠]MOOSTAFA','hunting\x20bow','switchingServers','feces','fucker','waterCurrent','isString','jiz','biatch','TJMod\x20ON\x20TOP','#89a54c','rotl','pube','melee\x20attacks\x20deal\x20poison\x20damage','provides\x20boost\x20when\x20stepped\x20on','byteLength','makes\x20you\x20immune\x20to\x20poison','forEach','<Buffer\x20','First\x20argument\x20must\x20be\x20a\x20string,\x20Buffer,\x20ArrayBuffer,\x20Array,\x20or\x20array-like\x20object.','wood','senpa.io','restore','getWriteType','cocksucks','margin-top:\x205px','*fuck*','blowjob','randInt','lockMove','collisionDepth','azzhole','max','limit','https://www.youtube.com/user/SirGodenot','closePath','Illegal\x20input\x20>=\x200x80\x20(not\x20a\x20basic\x20code\x20point)','iStealth','pigfucker','shag','removeObjGrid','data','cpmstarAPI','hammer_1','#consentShake','changeItemCount','.png','nastt','array','cnut','nobjocky','innerWidth','ficken','Invalid\x20input','keyCode','clitoris','Moo\x20Cap','hells','phile','getGridArrays','leaderboardData','shite','Phuk','masstrbate','Mother\x20Fucker','mousedown','unshift','chatCountdown','toByteArray','Sonia','mother\x20fucker','contains','top','noEat','cyberfucking','vagina','itemInfoLmt','Tokyo','with\x20game\x20index','Bmoe','phuq','requestAnimFrame','bytesToHex','crownPad','nameY','fast\x20long\x20range\x20melee\x20weapon','Invalid\x20ext\x20type:\x20','vajina','</span>','teleporter','motherfuckin','vries','vultr:','cheese','enter\x20name','white\x20power','webpackPolyfill','extUnpackers','seekServer','__proto__','binding','splice','pizda','penas','includes','scrollY','assholes','iconPadding','enableClasses','input','ma5terbate','owner','twatty','moomoo.io','#000','trap','fillStyle','width:\x20140px;','testing','l3i+ch','Blitz\x20Hat','Thorns','notificationText','clit','damages\x20enemies\x20when\x20they\x20touch\x20them','text','spunk','topSprite','Phuc','errorCallback','arcTo','upgradeCounter','drawImage','list','masturbat*','showItemInfo','tails','chink','kondum','fucking','hostile','_hh','spawnPoint','watrImm','uint8','devicePixelRatio','Winter\x20Cap','have\x20more\x20control\x20while\x20in\x20water','knobhead','d4mn','allianceMenu','altServer','@$$','20px\x20Hammersmith\x20One','faggot','#8ecc51','192.168.','baby','fuks','fannyflaps','preset','generateElement','_gg','disableObj','px\x20Hammersmith\x20One','itemInfoHolder','standing\x20on\x20it\x20will\x20slowly\x20heal\x20you','playerCount','lesbian','teez','slice','refreshAds','toASCII','itemPrice','gathering','3.5.0','changedTouches','friction','pageX','retard','mouliewop','s.o.b.','abs','active','log',')\x27></div>','fistfucked','m45terbate','maxPlayersHard','number','utf-16le','checkItemLocation','cookie','hasChildNodes','hideProjectile','install','_blank','writeUInt8','Module','readDoubleBE','zIndex','nig','aliases','volume','removeListener','Fez\x20Hat','endian','pr1ck','mozImageSmoothingEnabled','areaCount','resourceTypes','[💠BOSS💠]MOOFIE','monkleigh','query','Sawblade','vultr','penus','No\x20Tribes\x20Yet','activeElement','kuksuger','healthBarWidth','fingerfuckers','scrollWidth','</option>','cawk','cocksucker','wichser','wank*','hasOwnProperty','really\x20fast\x20short\x20range\x20weapon','start','pig_1','doggin','pr1k','Milky','connect','lineCap','pisses','va1jina','baseUrl','fuckingshitmotherfucker','buffer','writeDoubleLE','kuk','left','mof0','randFloat','Amsterdam','fuck','getDistance','lesbo','replaceWord','preventDefault','kondums','merd*','bDmg','return\x20this','castle\x20wall','yellow','create','onblur','little','Mother\x20Fuker','wang','pr0n','swap64','EncodeBuffer','game','breasts','version','lerpAngle','connected','hardcoresex','once','asholes','wh00r','Assassin\x20Gear','placeHolder','usemap','fingerfucks','masochist','Motha\x20Fuker','fags','chamber','readInt16LE','browser','wooden\x20shield','l3itch','show','AnimText','chatbox','textBaseline','If\x20encoding\x20is\x20specified\x20then\x20the\x20first\x20argument\x20must\x20be\x20a\x20string','_ff','dmg','assh0lez','mouseup','reduces\x20cost\x20of\x20projectiles','#738cc3','storeHolder','hitler','assh0le','totalRocks','originalListener','Try\x20the\x20sandbox','upgrAge','arrow_1','bitch*','name','kFormat','pornos','skipMov','pakie','switchServer','\x20-\x20','#2EFF00','%23','reloads','utf-8','floor','Url','booooooobs','bullet_1','SICKmania','identifier','countInArray','tits','basterdz','moveCount','maxHealth','load_failed','shutdownDisplay','appendChild','No\x20open\x20servers.','Ronald','consume','hoare','deal\x20more\x20damage\x20and\x20gather\x20more\x20resources','crap','getExtUnpacker','tool\x20hammer','asswhole','chicken_1','rgba(255,255,255,0.6)','fagit','call','invisTimer','fixedSpawn','d1ck','deprecate','scheiss*','Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2016-bits','coldM','blowjobs','jism','block','Theo','cyberfuc','heshe','species','Restore\x20Health\x20when\x20dealing\x20damage.\x20And\x20increased\x20damage','window','kill','capitalizeFirst','rmd','mc\x20grabby','link','webkitRequestAnimationFrame','butthole','moveDir','INSPECT_MAX_BYTES','hitRange','kums','hndD','cnts','boostSpeed','Emp\x20Helmet','tailIndex','New\x20Jersey','ageBarBody','rimming','objects','min','long\x20range\x20melee\x20weapon','\x22list\x22\x20argument\x20must\x20be\x20an\x20Array\x20of\x20Buffers','writeDoubleBE','__esModule','stoneDisplay','_digestsize','fag*','maxScale','Fukah','windmill','secondary','treeScales','base64','getExtPacker','price','vag1na','init','pole','scoreDisplay','points','willies','value','No\x20target\x20server\x20for\x20region\x20','hey\x20everybody\x20i\x27m\x20blitz','cumming','\x20passed.','items','cssText','Video\x20ad\x20closed','storeDisplay','Settings','spin','spear_1','c0k','chargeTarget','shameTimer','sourceStart\x20out\x20of\x20bounds','puta','testVultrClient','Mutha\x20Fukkah','cockmunch','faen','<i\x20class=\x27material-icons\x27\x20style=\x27font-size:10px;vertical-align:middle\x27>arrow_forward_ios</i></a>','toArray','onbeforeunload','killCounter','Sh!t','Phuck','clientY','\x0aHP:','mouseState','responseText','Leave\x20Tribe','Array','Huevon','cunt*','tail','blocker','waveMax','animTime','mothafuckaz','restores\x2020\x20health\x20when\x20consumed','layer','#fff','cyberfuckers','pissed','clientSendRate','readUInt16LE','hitObj','assrammer','smut','\x27offset\x27\x20is\x20out\x20of\x20bounds','env','do:','walls','healthBarPad','colGrid','https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g','screenX','hats/hat_','skinRot','Calling\x20callback\x20with\x20address','keys','enterGame','parseServerQuery','fuker','mothafucked','903d62ef5d1c2fecdcaeb5e7dd485eff','poisonRes','LightThief','auth','Dragon\x20Cape','no-js(\x5cs|$)','gai','flipping\x20the\x20bird','skinIndex','width','dziwka','val\x20must\x20be\x20string,\x20number\x20or\x20Buffer','currentTarget','forcePos','fagots','exports','strokeStyle','Ekrem*','butt','chdir','Invalid\x20number\x20of\x20server\x20parameters\x20in\x20','dmgK','isLoaded','great_axe_1','apple\x20farms\x20remembers','jisim','Shadow\x20Wings','piss*','spawnDelay','deathFadeout','asString','woodDisplay','red','passiveeventlisteners','findServer','playerSpeed','b00b*','dilld0','disableBySid','fook','Object','verbose','Socket\x20connection\x20error:','increases\x20your\x20movement\x20speed','stroke','asBytes','Cookie\x20Cape','versions','nig\x20nog','cunilingus','offset\x20is\x20not\x20uint','addListener','faig','\x22value\x22\x20argument\x20must\x20not\x20be\x20a\x20number','span','innerHTML','height','h0ar','show_ping','itemInfoDesc','assign','startY','motherfucks','maxXP','pit\x20trap','writeInt32BE','god-dam','Dir➠','poontsee','extEncoderList','mm_exp','leaveAlliance','trump','replaceRegex','<option\x20value=\x27','ad-container','Otis','defineProperty','#e3f1f4','pornography','#db6e6e','Back\x20to\x20MooMoo','phuking','set','Spike\x20Gear','menuCardHolder','faggit','cum','pDmg','targetAngle','pissoff','itemCounts','foodDisplay','\x27length\x27\x20is\x20out\x20of\x20bounds','boost\x20pad','crate_1','time','w0p','fucks','buttplug','mini','path','fagg1t','bloody','mapPingScale','maxKeys','buffers','onload','mapPingTime','fistfucking','prependOnceListener','resolve','penisfucker','Reaper','serverUpdateRate','jiss','#c15555','Dark\x20Knight','nigg4h','alive','knobjokey','vullva','maxAge','sin','Skull\x20Cape','viagra','niggah','Mutha\x20Fucker','startAnim','toString','send','bestial','muthafuckker','toUpperCase','shittings','argv','mothafuck','kills','masterb8','skull','removeChild','hitScare','masterbate','colDmg','fitt*','stick_1','keydown','addProjectile','/?server=','#dbd97d','mapScale','search','shitter','Fuken','knobz','writeUInt16BE','fanny','shit','spierdalaj','semen','Failed\x20to\x20load\x20video\x20ad\x20API','lineInRect','Socket\x20error','steals\x20resources\x20from\x20enemies','son-of-a-bitch','fag','isArrayBuffer','binaryType','#b6db66','font','c0cks','currentY','fillText','Explorer\x20Hat','DecodeBuffer','kusi*','#cc5151','addTest','clean','Kick','selected','gameCanvas','stone','onerror','animate','/ping','Vince','cockface','age','testicle*','Bull','partyButton','mousemove','assfucker','skinColorHolder','senpa','xOff','filter','increased\x20attack\x20speed\x20and\x20fire\x20rate','pissers','(dot)','buildIndex','addResource','rotate','createElement','subarray','maxScreenWidth','you\x20become\x20a\x20walking\x20turret','port','7f000001','5hit','size','bitchers','bastardz','prototype','arc','aiTurnRandom','#7b935d','poisons\x20enemies\x20when\x20they\x20touch\x20them','fatass','accessories','bastards','changeHealth','createCodec','food','#9ebf57','teets','cyberfuck','bitchin','bow_1','on\x20port','pre-content-container','c0ck','Invalid\x20typed\x20array\x20length','bollock*','nameInput','screenY','gangbanged','Go\x20invisible\x20when\x20not\x20moving.\x20Can\x27t\x20eat.\x20Increased\x20speed','swap16','color:','compare','_augment','.io','class','nigg','arse*','binary','sharmuta','shitted','captchaCallback','fudgepacker','CockSucker','Clever','touchmove','34px\x20Hammersmith\x20One','titfuck','targetDir','ash0le','gameUI','speed','#83898e','Bauer','scroat','utf16le','No\x20server\x20list\x20for\x20region\x20','dirsa','#ececec','Found\x20server.','n|ig','fudge\x20packer','hasRes','stripRegion','burn','reduces\x20damage\x20taken\x20but\x20slows\x20movement','pissflaps','goddamned','readyState','Snowball','ass-fucker','boooobs','display','scrotum','broadcast','Blockades','allows\x20you\x20to\x20move\x20at\x20normal\x20speed\x20in\x20snow','setTarget','writeUInt16LE','Shytty','bi7ch','downloadButtonContainer','hoer','emptyList','cocksuka','dinks','dominatrics','groups','oncontextmenu','backgroundImage','fuckwit','hell','1337','pedo','color','TYPED_ARRAY_SUPPORT','xrated','MooMoo\x20Head','finger','byteOffset','puto','arse','localhost','chuj','dick','knulle','shited','resetMoveDir','generates\x20more\x20gold\x20over\x20time','Barbarian\x20Armor','Invalid\x20type:\x20','Ekto','shield_1','testical','willy','Thief\x20Gear','#FF0000','getBoundingClientRect','t1tties','https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A','polak','allianceHolder','pron','join\x20the\x20enigma\x20army','bushesPerArea','stripper','socket','string','extPackers','hideFromEnemy','gangbangs','documentElement','slashes','fag1t','dmgMult','beastial','porn','close','gather','allianceInput',',\x20got\x20','strokeText','phukked','shitdick','stone\x20wall','peenus','className','riverPadding','useraw','width:\x20360px','fuckwhit','masturbate','wss','provides\x20powerful\x20protection\x20for\x20your\x20village','sh!t*','bi+ch','teleports\x20you\x20to\x20a\x20random\x20point\x20on\x20the\x20map','group','whore','spriteMlt','fecker','Vaja','promoImg','maxPlayers','textAlign','gatherAngle','which','io-init','shemale','rec','cuntlick','kunilingus','#b2ab90','isProfane','fuckheads','center','generateHref','location','fagz','Mutha\x20Fukker','twat','xWiggle','onclick','v14gra','bull_1','getReadToken','currentX','t1tt1e5','fetchVariant','fromByteArray',':8008/?gameIndex=','wanker','#ebdca3','push','range','pageY','treesPerArea','lineJoin','picka','like\x20and\x20subscribe','onreadystatechange','isPlaying','massterbait','Lezzian','Pinging\x20servers...','poolSize','shiting','maxBufferSize','#cebd5f','earn\x201\x20extra\x20gold\x20per\x20resource','slag','spawn\x20pad','SELECT\x20ITEMS\x20(','asswipe','\x22buffer\x22\x20argument\x20must\x20be\x20a\x20Buffer\x20instance','claered','nazis','wetback*','maxNameLength','body','armS','Stallion','6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ','tiny','weaponXP','function','float32','[object\x20Array]','&token=','test.io','high\x20firerate\x20crossbow\x20with\x20reduced\x20damage','writeInt16LE','dlck','upgradeItem','execute','Close','Motha\x20Fukkah','\x22size\x22\x20argument\x20must\x20not\x20be\x20negative','writeIntLE','pen1s','password','wolf_2','devPort','feg','Shity','iPad','apple','tittie5','yWiggle','nextTick','regex','orgasims','ejakulate','#a5c65b','phuked','rgba(255,255,255,0.35)','testicle','indexOf','ascii','sharmute','coksucka','Mc\x20Donald','.././img/accessories/access_','Connecting\x20to\x20server','kummer','readInt8','screwing','Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2064-bits','muthafecker','god-damned','Blood\x20Wings','Unknown\x20encoding:\x20','dildo','bum','upgradePoints','storeBuy','textContent','imageSmoothingEnabled','cocksucking','motherfuck','weaponVariants','slowMult','github','nlg','getElementsByTagName','goddamn','porno','hotsex','mute','rectum','fuk','asshole','pussee','canSee','spawn','<span\x20class=\x27itemInfoReqVal\x27>\x20x','moo_name','fillRect','Super\x20Cape','round','Paris','copy','fun','futkretzn','nigg3r','fuckin','onchange','Miners\x20Helmet','mainMenu','Sid','https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g','measureText','pingTime','from','hitReturnRatio','basterds','pula','lusting','src','fetchSpawnObj','Parameter\x20\x27url\x27\x20must\x20be\x20a\x20string,\x20not\x20','Helena','noMovTimer','moofoll','balls','sluts','\x20in\x20region\x20','<a\x20target=\x27_blank\x27\x20class=\x27ytLink\x27\x20href=\x27','short\x20sword','Fukkin','isNullOrUndefined','readUInt32LE','middle','gameIndex','niigr;','https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg','prick','Modernizr','cocksuck','niggas','vulva','666','flange','host','kurwa','foreskin','nigger','great_hammer_1','cox','allows\x20you\x20to\x20disguise\x20yourself\x20as\x20a\x20bush','indx','cock-sucker','flatMap','sadist','read','twathead','hitDelay','rewardedvideo','n1gger','.././sound/','f\x20u\x20c\x20k','isBuffer','pleasure','wolf_1','fuckme','hoor','anal','restores\x20health\x20when\x20you\x20deal\x20damage','createAlliance','\x22encoding\x22\x20must\x20be\x20a\x20valid\x20string\x20encoding','addWeaponXP','spick','lobbySize','Bloodthirster','poisonTime','nativeResolution','shitty','native_resolution','Trying\x20to\x20access\x20beyond\x20buffer\x20length','keyup','aMlt','black','hitAngle','blue','zabourah','format','ignoreObj','storeButton','ejackulate','OPEN','nameIndex','Jeremy','hoar','Fluff\x20Head','effect','skanck','svg','remove','lineWidth','skin','touch','poop','skinColor','toBuffer','vittu','Naomi','ExtBuffer','cummer','Atlanta','viewRange','pillu*','skank','showText','oriface','carpet\x20muncher','error','visible','sex','Bully','polack','ejaculate','codec','titt*','b00bs','fromCharCode','socketId','isView','mill','projCost','Devils\x20Tail','BUFFER_SHORTAGE','classPrefix','crown','knobjocky','checkTerms','toNumber','tit','dontGather','writeFloatLE','constructor','restores\x2030\x20health\x20and\x20another\x2050\x20over\x205\x20seconds','pingServers','a_s_s','daggers','Monkey\x20Tail','updateObjects','#f4f3ac','callback','masstrbait','Shyty','noTrap','doUpdate','127.0.0.1','gatherWiggle','fellatio','match','latin1','bugger','Quinn','numbnuts','piss','h0re','Buffer','stop','length','enema','cyberfucker','save','goatse','boner','mixin','orgasms','boolean','tittyfuck','dirPlus','#b4db62','Jeff','placeOffset','Server\x20is\x20already\x20full.','openLink','#7e7f82','isEncoding','checkTrusted','sh1t','bull_2','rgba(0,\x200,\x2070,\x200.35)','pissing','bullRepel','muschi','Unequip','allocUnsafe','pride','Int64BE','motherfuckers','gay','req','shiz','pecker','rgba(0,0,0,0.2)','assfukka','allianceButtonM','unique\x20name','render','gaysex','bitcher','requestAnimationFrame','doer','change','knocks\x20back\x20enemies\x20that\x20attack\x20you','addExtPacker','<option\x20disabled>','stringToBytes','kMaxLength','#896c4b','lust','https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg','clearRect','pimmel','Ben','guideCard','Fortish','ejaculation','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/','iconPad','Invalid\x20hex\x20string','split','jizz','masterbaiter','\x27><i\x20class=\x27material-icons\x27\x20style=\x27vertical-align:\x20top;\x27>&#xE064;</i>\x20','teleport','Uint64LE','joinAlBtn','London','getAngleDist','ar5e','hitTime','translate','<i\x20class=\x27material-icons\x27\x20style=\x27font-size:28px;color:#cc5151;\x27>&#xE14C;</i>','ballsack','Quack','mozRequestAnimationFrame','Overflow:\x20input\x20needs\x20wider\x20integers\x20to\x20process','n1gga','#6a64af','cos','boffing','setTimeout\x20has\x20not\x20been\x20defined','uint64','toJSON','Could\x20not\x20find\x20server\x20in\x20region\x20','primary','shitz','crownIconScale','classList','method\x20not\x20implemented:\x20write()','shitings','kike','resize','settingsButton','sidney','senpaio','jerk-off','poo','Miami','Enigma','bastard','mobileDownloadButtonContainer','%20','chatHolder','xn--','global','isNumber','Blow\x20Job','isInt64BE','phuck','GET','healD','weaponIndex','bushScales','trim','fucked','hex','bat_1','tittiefucker','orgasim;','nobhead','clientX','children','undefined','encode','healthRegen','master-bate','Encoder','FlexEncoder','readUInt32BE','aboveHand','f_u_c_k','shitfull','Tank\x20Gear','loadingText','Troll\x20Cape','add','bunny\x20fucker','process.binding\x20is\x20not\x20supported','source-atop','getElementById','map','cow_1','cuntlicker','dmgMultO','bollock','Shyte','passive','consent','provides\x20protection\x20for\x20your\x20village','actionBarItem','polac','suka','bitches','Mother\x20Fukkah','provides\x20improved\x20protection\x20for\x20your\x20village','watchtower','texts','Index\x20out\x20of\x20range','colDiv','#dbc666','Pandou\x20Head','startsWith','Tests\x20passed.','nigur;','turret','*dyke','titt','rapist','nagger','Jared','spic','setUsingTouch','substr','dontSell','addAsyncTest','Biatch','teams','Slutty','cwd','buttwipe','Silicon\x20Valley','queerz','pps','webkitImageSmoothingEnabled','Phuker','chatBox','peen','clinton','titwank','href','rgba(255,\x20255,\x20255,\x200.3)','coon','https','bollok','booooobs','nutsack','Jimmy','\x5c$1','reserve','spdMult','party\x20key','boob','ArrayBuffer','healCol','<a\x20href=\x27','Uint8Array','doosh','lobbySpread','fuckhead','Apple\x20Basket','mothafucka','beginPath','none','useRes','masokist','\x20...\x20','getData','discord','actionBar','killScore','disconnected','pit\x20that\x20traps\x20enemies\x20if\x20they\x20walk\x20over\x20it','team','readUInt16BE','masterbations','_config','nepesaurio','Wolf','free\x20KR','isArray','scaleSpeed','andskota','fukker','html','allocUnsafeSlow','knob','Nick','desc','rape','Server\x20restarting\x20in\x20','Invalid\x20string.\x20Length\x20must\x20be\x20a\x20multiple\x20of\x204','playerScale','focus','#939393','Samurai\x20Armor','writeUIntBE','100%','Create','storeEquip','bow\x20used\x20for\x20ranged\x20combat\x20and\x20hunting','turrets\x20won\x27t\x20attack\x20but\x20you\x20move\x20slower','\x22size\x22\x20argument\x20must\x20be\x20a\x20number','Dallas','mistik','#cbb091','orgasm','*damn','feck','replace','clearTimeout\x20has\x20not\x20been\x20defined','mousifyTouchEvent','lockDir','great\x20hammer','minimapCounter','kawk','increases\x20damage\x20done\x20but\x20drains\x20health','touchcancel','ip_','paska*','Fukken','https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g','condom','allianceButton','mine','dmgOverTime','waitCount','selectSkinColor','bitching','itemInfoName','jack-off','playerDecel','concat','i\x20Febag','increased\x20movement\x20speed','tag','fukkin','volumeMult','bat','fellate','test','shagging','featuredYoutube','titties','perse','boiolas','sh!+','url(','tool\x20for\x20gathering\x20all\x20resources','phonesex','hasArrayBuffer','homo','bufferish','fagging','cockhead','knobead','<i\x20class=\x27material-icons\x27\x20style=\x27font-size:28px;color:#8ecc51;\x27>&#xE876;</i>','v1gra','resetResources','ignoreCollision','you\x20will\x20spawn\x20here\x20when\x20you\x20die\x20but\x20it\x20will\x20dissapear','horny','setTransform','hatPreview','allows\x20you\x20to\x20farm\x20wood','wank','Mel','dilld0s','loaded','exclude','rgba(0,\x200,\x2070,\x200.1)','Dash\x20Cape','fukwit','Nation','lineTo','assholz','health','Anti\x20Venom\x20Gear','region','nigga','abort','hash','vaj1na','Scavenger\x20Gear','onmouseover','\x22value\x22\x20argument\x20is\x20out\x20of\x20bounds','cl1t','bind','Mother\x20Fukah','amcik','ejaculates','h0r','paths','warn','horniest','reduce','weapons','regionInfo','innerText','penis','chatCooldown','isPrivate','AGE\x20','Video\x20ad\x20load\x20failed','cordova','⬅]\x20','true','rimjaw','poison\x20spikes','niiger;','kyrpa*','waveSpeed','turnSpeed','Invalid\x20Connection','allows\x20you\x20to\x20mine\x20stone','method\x20not\x20implemented:\x20fetch()','cunt','slut','polearm','touchend','object','pow','pusse','13c','Cock*','Assface','touchleave','katana','autoGather','nob\x20jokey','maxScreenHeight','riverWidth','exec','toStringTag','Poonani','masterbat3','spinning\x20spikes','chat\x20message','quadraticCurveTo','aiTypes','fontSize','alloc','honkey','serverPort','schlampe','fcuker','chatMessage','sid','faigs','wordsToBytes','screw','pop','dominatrix','setTimeout','dog-fucker','projDmg','https://krunker.io','faster\x20windmill','kumming','yOff','onmessage','gridLocations','Kurac','Meaty','Pepe','run','power\x20mill','schlong','Steph','sphencter','roundRect','hasBuffer','shits','cocks','Musketeer\x20Hat','storeItem','faggitt','snowSpeed','#0000ff','guiena','skurwysyn','lastIndexOf','Attempt\x20to\x20write\x20outside\x20buffer\x20bounds','Allison','blocks\x20projectiles\x20and\x20reduces\x20melee\x20damage','random','/serverData','\x22:\x20','splooge','cunts','Ass\x20Monkey','readDoubleLE','earn\x20double\x20points\x20for\x20each\x20kill','fanculo','kickFromClan','xVel','mo-fo','getContext','crossbow_1','Straw\x20Hat','cyberfucked','.././img/weapons/','sort','fuckers','binarraybuffer','inSandbox','sendAnimation','update','display:none','Fukin','packie','writeInt8','skinColors','beastiality','_blocksize','fistfuckings','injun','sounds','readUint8','Nathan','bassterds','options','kuntz','../img/','https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ','decode','false','fannyfucker','poisonDmg','Phukker','toLowerCase','Skanky','projectile','cuntz','[💠BOSS💠]Treasure','\x20\x20|\x20Y➡','onclose','pingDisplay','#0a0a0a','#c9b758','sandbox.moomoo.io','minBufferSize','Pumpkin','Soldier\x20Helmet','listeners','cyalis','chatButton','cocksukka','type','pule','motherfucker','qweerz','ageText','Mike','turd','games','qahbeh','moveTo','weaponVariant','d1scord','July','setData','Invalid\x20code\x20point','default','getWriteToken','skanks','Delete\x20Tribe','crossbow','leaderboardItem','cunnilingus','nieger','cazzo','satan','kids','animalCount','increased\x20damage\x20to\x20buildings\x20but\x20slower\x20movement','sqrt','duche','scrote','startX','Fukkah','wood\x20wall','fixTo','faggs','hitSlow','fukwhit','0px','mofo','removeAllChildren','Corrupt\x20X\x20Wings','<option\x20disabled></option>','containsPoint','Monkey\x20Head','dego','hacks\x20are\x20for\x20losers','debugLog','pussies','ejaculatings','bin','wanky','fcuk','\x27\x20onclick=\x27selectSkinColor(','booobs','int64','ext','globalCompositeOperation','snowBiomeTop','write','pimpis','charCodeAt','visibleToPlayer','ass','sendJoin','Buffer.write(string,\x20encoding,\x20offset[,\x20length])\x20is\x20no\x20longer\x20supported','nazi','charAt','sh!t','great\x20for\x20gathering\x20but\x20very\x20weak','shootRate','writeFloatBE','Error:\x0a','anus','jizm','servers','pussy','getReadFormat','peeenus','#d76edb','generates\x20points\x20while\x20worn','TomNotTom','toArrayBuffer','Tree\x20Cape','nameScale','s_h_i_t','w00se','jackoff','mibun','isPlayer','Join','c0cksucker','qweir','readIntBE','parse','//sandbox.moomoo.io/','b!tch','apply','<option\x20disabled>All\x20Servers\x20-\x20','pre','dir','recktum','no\x20effect','addExtUnpacker','arraybuffer','readIntLE','yVel','writeUInt32BE','gangbang','dild0s','fistfucker','https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q','diedText','motherfuckka','queer','earnXP','Ranger\x20Hat','end','defensive\x20structure\x20that\x20shoots\x20at\x20enemies','shithead','allianceItem','join','snatch','fetch','Super\x20speed\x20but\x20reduced\x20damage','eventIsTrusted','Mutha\x20Fukah','unknown','shootCount','utf8','shieldAngle','grids','https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg','slowly\x20regenerates\x20health\x20over\x20time','hostname','readFloatLE','menu','knobed','#525252','nob','cipa','Polar\x20Head','f\x20u\x20c\x20k\x20e\x20r','#fadadc','Sydney','platform\x20to\x20shoot\x20over\x20walls\x20and\x20cross\x20over\x20water','nodeType','greater\x20range\x20and\x20damage','rockScales','knock','asa','dyke','Fudge\x20Packer','miter','32px\x20Hammersmith\x20One','writeIntBE','_isBuffer','minimapRate','mothafucks','Motha\x20Fucker','Apple\x20Cap','\x20and\x20index\x20','shield','processServers','Bummle\x20Hat','buildItem','MAX\x20AGE','dogging','#91b2db','arschloch','stopPropagation','GoneGaming','nogger','tw4t','bitch','mother-fucker','TextManager','s\x20hit','https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ','Sophia','hookTouch','Marksman\x20Cap','enemy','shipal','fanyy','follmoo','clits','gameCount','checkCollision','doggy','server','Pendy','Bull\x20Mask','https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q','isItem','Frankfurt','slutz','pisser','shitters','Assert\x20','removeAllItems','writeInt32LE','#bcbcbc','gathers\x20resources\x20at\x20a\x20higher\x20rate','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','now','leaderScore','enableJSClass','key','jap','drop','sh1tz','cntz','Bear\x20Head','mapDisplay','isAI','title','repeater\x20crossbow','cabron','fingerfucker','hashIP','motherfucking','b17ch','muff','isLeader','Failed\x20to\x20load\x20server\x20data\x20with\x20status\x20code:','getScale','overflow','mulkku','Flikker','crossbow_2','#4c4c4c','Uint64BE','no-','*shit*','fux0r','nigger*','shootRange','ipToHex','packi','scank','innerHeight','mothafuckers','Lipshitz','extraGold','Video\x20ad\x20loaded','then','nodeName','loadedScript','SlowBuffer','setUserData','animSpeed','addWords','white','uint32','mutha','&password=','emit','isOwner','Cowboy\x20Hat','onmouseout','resolveObject','buceta','mothafucker','deals\x20more\x20damage\x20and\x20has\x20greater\x20range','reverse','boobs','p0rn','\x20players</option>','life','isTrusted','Vultr\x20error:','img','uint8array','damn','b1tch','ballbag','addEventListener','canBuild','sentTo','Pig\x20Head','a55','chargePlayer','Fukker','style','.././img/hats/hat_','grecaptcha','process.chdir\x20is\x20not\x20supported','scale','fooker','projectiles','pussys','m0fo','sapling','#c37373','load','hookTouchEvents','twunter','pathname','runFrom','Buffer\x20size\x20must\x20be\x20a\x20multiple\x20of\x2032-bits','notifButton','fill','onfocus','words','isObject','ceil','phukking','yed','foo','Stone\x20Cape','shift','dild0','orgasum','setObjectGrids','weightM','grab_1','shi+','cowNames','blocks\x20building\x20in\x20radius','parseHost','motherfucked','kScrM','sourceEnd\x20out\x20of\x20bounds','storeMenu','flush','g00k','Alan','ejaculating','Decoder','status','masterbat*','shameCount','getDirection','paky','atan2','\x20bytes','holdOffset','ucs2','Corrupt\x20X','_arr','iconIndex','js$2','checked','spikes','onopen','dick*','muie','hitWait','goldOres','mothafucking','cums','spawnCounter','targetStart\x20out\x20of\x20bounds','lick','Winter\x20Cape','dagger_1','LN2','parent','Shame!','slow\x20firerate\x20but\x20high\x20damage\x20and\x20range','open','protocol','setExtPackers','isNull','homepage','showing','<div\x20class=\x27skinColorItem\x27\x20style=\x27background-color:','<a\x20href=\x27javascript:window.location.href=window.location.href\x27\x20class=\x27ytLink\x27>reload</a>','lerp','writeUInt32LE','nigger;','play','globalAlpha','://','dildos','leapForce','n1gr'];(function(_0x140a0c,_0x2378d7){var _0x4a9ca6=function(_0x49697c){while(--_0x49697c){_0x140a0c['push'](_0x140a0c['shift']());}};_0x4a9ca6(++_0x2378d7);}(_0x2378,0xb8));var _0x4a9c=function(_0x140a0c,_0x2378d7){_0x140a0c=_0x140a0c-0x0;var _0x4a9ca6=_0x2378[_0x140a0c];return _0x4a9ca6;};var HPT=0x0;var XYT=0x0;var DIT=0x0;var HPT2=0x128ffcee7c471600000000000000;var XYT2=0x128ffcee7c471600000000000000;var DIT2=0x128ffcee7c471600000000000000;var Radar1=0x128ffcee7c471600000000000000;var Radar2=0x128ffcee7c471600000000000000;var Radar3=0x128ffcee7c471600000000000000;var Radar4=0x128ffcee7c471600000000000000;var Radar5=0x128ffcee7c471600000000000000;var BR1=0x780;var BR2=0x438;var TeamR=_0x4a9c('0xa5');var TeamP=_0x4a9c('0x285');var TeamA=_0x4a9c('0x58e');var TeamL=_0x4a9c('0x6c');var TeamB=_0x4a9c('0x38e');var TeamD=_0x4a9c('0x1f0');var TeamO='#8ECC51';var HPDATA;!function(_0x2dbcfc){var _0x167f1d={};function _0x2568a7(_0x6f244c){if(_0x167f1d[_0x6f244c])return _0x167f1d[_0x6f244c][_0x4a9c('0x14f')];var _0x43ea8e=_0x167f1d[_0x6f244c]={'i':_0x6f244c,'l':!0x1,'exports':{}};return _0x2dbcfc[_0x6f244c][_0x4a9c('0xc3')](_0x43ea8e[_0x4a9c('0x14f')],_0x43ea8e,_0x43ea8e[_0x4a9c('0x14f')],_0x2568a7),_0x43ea8e['l']=!0x0,_0x43ea8e[_0x4a9c('0x14f')];}_0x2568a7['m']=_0x2dbcfc,_0x2568a7['c']=_0x167f1d,_0x2568a7['d']=function(_0x3013a6,_0x106791,_0x16ba42){_0x2568a7['o'](_0x3013a6,_0x106791)||Object[_0x4a9c('0x18d')](_0x3013a6,_0x106791,{'enumerable':!0x0,'get':_0x16ba42});},_0x2568a7['r']=function(_0x3f46ec){_0x4a9c('0x45d')!=typeof Symbol&&Symbol[_0x4a9c('0x561')]&&Object[_0x4a9c('0x18d')](_0x3f46ec,Symbol['toStringTag'],{'value':_0x4a9c('0x30')}),Object[_0x4a9c('0x18d')](_0x3f46ec,_0x4a9c('0xec'),{'value':!0x0});},_0x2568a7['t']=function(_0x44a835,_0xa39c1f){if(0x1&_0xa39c1f&&(_0x44a835=_0x2568a7(_0x44a835)),0x8&_0xa39c1f)return _0x44a835;if(0x4&_0xa39c1f&&_0x4a9c('0x554')==typeof _0x44a835&&_0x44a835&&_0x44a835['__esModule'])return _0x44a835;var _0x8046fd=Object[_0x4a9c('0x6d')](null);if(_0x2568a7['r'](_0x8046fd),Object[_0x4a9c('0x18d')](_0x8046fd,_0x4a9c('0x5e3'),{'enumerable':!0x0,'value':_0x44a835}),0x2&_0xa39c1f&&_0x4a9c('0x290')!=typeof _0x44a835)for(var _0x533390 in _0x44a835)_0x2568a7['d'](_0x8046fd,_0x533390,function(_0xadfa48){return _0x44a835[_0xadfa48];}[_0x4a9c('0x533')](null,_0x533390));return _0x8046fd;},_0x2568a7['n']=function(_0x2e0717){var _0x3b851f=_0x2e0717&&_0x2e0717[_0x4a9c('0xec')]?function(){return _0x2e0717['default'];}:function(){return _0x2e0717;};return _0x2568a7['d'](_0x3b851f,'a',_0x3b851f),_0x3b851f;},_0x2568a7['o']=function(_0x12a9b4,_0x28acad){return Object[_0x4a9c('0x216')][_0x4a9c('0x4e')]['call'](_0x12a9b4,_0x28acad);},_0x2568a7['p']='',_0x2568a7(_0x2568a7['s']=0x15);}([function(_0x22a950,_0x2dd538,_0x1a8917){var _0xd72f57=_0x2dd538[_0x4a9c('0x44b')]=_0x1a8917(0x19),_0x22fdf7=_0x2dd538['hasBuffer']=_0xd72f57&&!!_0xd72f57[_0x4a9c('0x37a')],_0x511917=_0x2dd538[_0x4a9c('0x50e')]=_0x4a9c('0x45d')!=typeof ArrayBuffer,_0x4faa03=_0x2dd538[_0x4a9c('0x4c8')]=_0x1a8917(0x5);_0x2dd538[_0x4a9c('0x1e6')]=_0x511917?function(_0x3d9dc2){return _0x3d9dc2 instanceof ArrayBuffer||_0x20aae7(_0x3d9dc2);}:_0x3c0124;var _0x50b17e=_0x2dd538[_0x4a9c('0x37a')]=_0x22fdf7?_0xd72f57[_0x4a9c('0x37a')]:_0x3c0124,_0x4451bc=_0x2dd538[_0x4a9c('0x3bb')]=_0x511917?ArrayBuffer[_0x4a9c('0x3bb')]||_0xfa634(_0x4a9c('0x4ad'),_0x4a9c('0x5b')):_0x3c0124;_0x2dd538[_0x4a9c('0x569')]=_0x5a70c9,_0x2dd538[_0x4a9c('0x4fc')]=function(_0x402b52,_0x3f67f1){_0x3f67f1||(_0x3f67f1=0x0,Array[_0x4a9c('0x216')][_0x4a9c('0x781')][_0x4a9c('0xc3')](_0x402b52,function(_0x5da263){_0x3f67f1+=_0x5da263[_0x4a9c('0x3e1')];}));var _0x2380ae=this!==_0x2dd538&&this||_0x402b52[0x0],_0x4ea46d=_0x5a70c9['call'](_0x2380ae,_0x3f67f1),_0x3386d1=0x0;return Array['prototype'][_0x4a9c('0x781')][_0x4a9c('0xc3')](_0x402b52,function(_0x446578){_0x3386d1+=_0x1d20c9[_0x4a9c('0x33e')]['call'](_0x446578,_0x4ea46d,_0x3386d1);}),_0x4ea46d;},_0x2dd538[_0x4a9c('0x34a')]=function(_0x566821){return _0x4a9c('0x290')==typeof _0x566821?function(_0x337556){var _0x1bf7f4=0x3*_0x337556[_0x4a9c('0x3e1')],_0x1fe368=_0x5a70c9['call'](this,_0x1bf7f4),_0x5bc94a=_0x1d20c9[_0x4a9c('0x60f')][_0x4a9c('0xc3')](_0x1fe368,_0x337556);return _0x1bf7f4!==_0x5bc94a&&(_0x1fe368=_0x1d20c9[_0x4a9c('0x14')][_0x4a9c('0xc3')](_0x1fe368,0x0,_0x5bc94a)),_0x1fe368;}[_0x4a9c('0xc3')](this,_0x566821):_0x3cfed9(this)[_0x4a9c('0x34a')](_0x566821);};var _0x1e91d0=_0x2dd538[_0x4a9c('0x11e')]=_0x1a8917(0x1c),_0x38cd95=_0x2dd538[_0x4a9c('0x3df')]=_0x1a8917(0x1d),_0x318195=_0x2dd538[_0x4a9c('0x4b0')]=_0x1a8917(0x1e),_0x1d20c9=_0x2dd538[_0x4a9c('0x216')]=_0x1a8917(0x6);function _0x5a70c9(_0xbaf7c){return _0x3cfed9(this)[_0x4a9c('0x569')](_0xbaf7c);}var _0x20aae7=_0xfa634('ArrayBuffer');function _0x3cfed9(_0x443158){return _0x50b17e(_0x443158)?_0x38cd95:_0x4451bc(_0x443158)?_0x318195:_0x4faa03(_0x443158)?_0x1e91d0:_0x22fdf7?_0x38cd95:_0x511917?_0x318195:_0x1e91d0;}function _0x3c0124(){return!0x1;}function _0xfa634(_0x40e7be,_0x42fcaf){return _0x40e7be='[object\x20'+_0x40e7be+']',function(_0x3e4a1c){return null!=_0x3e4a1c&&{}[_0x4a9c('0x1c1')][_0x4a9c('0xc3')](_0x42fcaf?_0x3e4a1c[_0x42fcaf]:_0x3e4a1c)===_0x40e7be;};}},function(_0x3c7def,_0x189ff7,_0x478542){var _0x212d2=_0x478542(0x5);_0x189ff7[_0x4a9c('0x21f')]=_0x39d97f,_0x189ff7[_0x4a9c('0x2d')]=function(_0xa03f8c){for(var _0x175741 in _0xa03f8c)_0x328f6f[_0x4a9c('0x216')][_0x175741]=_0x278444(_0x328f6f[_0x4a9c('0x216')][_0x175741],_0xa03f8c[_0x175741]);},_0x189ff7[_0x4a9c('0x205')]=function(_0x1798fd){return _0x212d2(_0x1798fd)?function(_0x58bc0f){return _0x58bc0f=_0x58bc0f[_0x4a9c('0x14')](),function(_0x63eb98){return _0x58bc0f[_0x4a9c('0x53b')](_0xe0fe65,_0x63eb98);};function _0xe0fe65(_0x40ce9e,_0x596970){return _0x596970(_0x40ce9e);}}(_0x1798fd):_0x1798fd;};var _0x107f3=_0x478542(0x0);function _0x328f6f(_0x343ee5){if(!(this instanceof _0x328f6f))return new _0x328f6f(_0x343ee5);this[_0x4a9c('0x5b9')]=_0x343ee5,this[_0x4a9c('0xf9')]();}function _0x278444(_0x51552b,_0x25d4b9){return _0x51552b&&_0x25d4b9?function(){return _0x51552b[_0x4a9c('0x635')](this,arguments),_0x25d4b9[_0x4a9c('0x635')](this,arguments);}:_0x51552b||_0x25d4b9;}function _0x39d97f(_0x3a15de){return new _0x328f6f(_0x3a15de);}_0x328f6f[_0x4a9c('0x216')][_0x4a9c('0xf9')]=function(){var _0x4a2a2f=this[_0x4a9c('0x5b9')];return _0x4a2a2f&&_0x4a2a2f[_0x4a9c('0x6e5')]&&(this[_0x4a9c('0x510')]=_0x107f3['Uint8Array']),this;},_0x189ff7[_0x4a9c('0xa')]=_0x39d97f({'preset':!0x0});},function(_0x57f71b,_0xf25196,_0x39245c){var _0x4b6043=_0x39245c(0x3)[_0x4a9c('0x3a7')],_0x5d0a5f=_0x39245c(0x20),_0x3e8593=_0x39245c(0x21),_0xb2435a=_0x39245c(0x1);function _0x234f70(){var _0x23b248=this[_0x4a9c('0x5b9')];return this[_0x4a9c('0x45e')]=function(_0x465981){var _0x2524f6=_0x3e8593[_0x4a9c('0x787')](_0x465981);return function(_0x21dd66,_0x49d720){var _0x29ec84=_0x2524f6[typeof _0x49d720];if(!_0x29ec84)throw new Error('Unsupported\x20type\x20\x22'+typeof _0x49d720+_0x4a9c('0x597')+_0x49d720);_0x29ec84(_0x21dd66,_0x49d720);};}(_0x23b248),_0x23b248&&_0x23b248[_0x4a9c('0xa')]&&_0x5d0a5f[_0x4a9c('0x73f')](this),this;}_0xb2435a[_0x4a9c('0x2d')]({'addExtPacker':function(_0x3dc0c1,_0x53162b,_0x3a4442){_0x3a4442=_0xb2435a[_0x4a9c('0x205')](_0x3a4442);var _0x5c021c=_0x53162b[_0x4a9c('0x9e')];_0x5c021c&&_0x4a9c('0x168')!==_0x5c021c?(this[_0x4a9c('0x291')]||(this['extPackers']={}))[_0x5c021c]=_0x14e38b:(this[_0x4a9c('0x185')]||(this[_0x4a9c('0x185')]=[]))[_0x4a9c('0x7b2')]([_0x53162b,_0x14e38b]);function _0x14e38b(_0x24e818){return _0x3a4442&&(_0x24e818=_0x3a4442(_0x24e818)),new _0x4b6043(_0x24e818,_0x3dc0c1);}},'getExtPacker':function(_0x11d293){var _0x41d41e=this[_0x4a9c('0x291')]||(this[_0x4a9c('0x291')]={}),_0x43c294=_0x11d293['constructor'],_0x27d522=_0x43c294&&_0x43c294[_0x4a9c('0x9e')]&&_0x41d41e[_0x43c294[_0x4a9c('0x9e')]];if(_0x27d522)return _0x27d522;for(var _0x3f5954=this[_0x4a9c('0x185')]||(this[_0x4a9c('0x185')]=[]),_0x545137=_0x3f5954[_0x4a9c('0x3e1')],_0x807990=0x0;_0x807990<_0x545137;_0x807990++){var _0x3d344e=_0x3f5954[_0x807990];if(_0x43c294===_0x3d344e[0x0])return _0x3d344e[0x1];}},'init':_0x234f70}),_0xf25196[_0x4a9c('0xa')]=_0x234f70[_0x4a9c('0xc3')](_0xb2435a['preset']);},function(_0x10d7c9,_0x2a3fee,_0x592666){_0x2a3fee['ExtBuffer']=function _0x4336ae(_0x4d6e56,_0x5d5b53){if(!(this instanceof _0x4336ae))return new _0x4336ae(_0x4d6e56,_0x5d5b53);this[_0x4a9c('0x5b')]=_0x2d934b[_0x4a9c('0x34a')](_0x4d6e56),this['type']=_0x5d5b53;};var _0x2d934b=_0x592666(0x0);},function(_0x46bd11,_0x2c6044){_0x2c6044[_0x4a9c('0x373')]=function(_0x1cd4dc,_0xe2a0f5,_0x40d7ce,_0x241c11,_0x2abc97){var _0x149270,_0x2f782f,_0x2a1fd9=0x8*_0x2abc97-_0x241c11-0x1,_0x4035cb=(0x1<<_0x2a1fd9)-0x1,_0xaeacef=_0x4035cb>>0x1,_0x1a8eed=-0x7,_0x14ea65=_0x40d7ce?_0x2abc97-0x1:0x0,_0x2d4f41=_0x40d7ce?-0x1:0x1,_0x176169=_0x1cd4dc[_0xe2a0f5+_0x14ea65];for(_0x14ea65+=_0x2d4f41,_0x149270=_0x176169&(0x1<<-_0x1a8eed)-0x1,_0x176169>>=-_0x1a8eed,_0x1a8eed+=_0x2a1fd9;_0x1a8eed>0x0;_0x149270=0x100*_0x149270+_0x1cd4dc[_0xe2a0f5+_0x14ea65],_0x14ea65+=_0x2d4f41,_0x1a8eed-=0x8);for(_0x2f782f=_0x149270&(0x1<<-_0x1a8eed)-0x1,_0x149270>>=-_0x1a8eed,_0x1a8eed+=_0x241c11;_0x1a8eed>0x0;_0x2f782f=0x100*_0x2f782f+_0x1cd4dc[_0xe2a0f5+_0x14ea65],_0x14ea65+=_0x2d4f41,_0x1a8eed-=0x8);if(0x0===_0x149270)_0x149270=0x1-_0xaeacef;else{if(_0x149270===_0x4035cb)return _0x2f782f?NaN:0x1/0x0*(_0x176169?-0x1:0x1);_0x2f782f+=Math['pow'](0x2,_0x241c11),_0x149270-=_0xaeacef;}return(_0x176169?-0x1:0x1)*_0x2f782f*Math[_0x4a9c('0x555')](0x2,_0x149270-_0x241c11);},_0x2c6044[_0x4a9c('0x60f')]=function(_0x4da212,_0x3584c6,_0x54cd2b,_0x2485ff,_0x475fd1,_0x76f39f){var _0x4a6c6d,_0x4d2e05,_0x3ca757,_0x5dfc02=0x8*_0x76f39f-_0x475fd1-0x1,_0x45b8e3=(0x1<<_0x5dfc02)-0x1,_0x319958=_0x45b8e3>>0x1,_0x286086=0x17===_0x475fd1?Math['pow'](0x2,-0x18)-Math['pow'](0x2,-0x4d):0x0,_0x4fcc6f=_0x2485ff?0x0:_0x76f39f-0x1,_0x260cf7=_0x2485ff?0x1:-0x1,_0x13fb59=_0x3584c6<0x0||0x0===_0x3584c6&&0x1/_0x3584c6<0x0?0x1:0x0;for(_0x3584c6=Math[_0x4a9c('0x20')](_0x3584c6),isNaN(_0x3584c6)||_0x3584c6===0x1/0x0?(_0x4d2e05=isNaN(_0x3584c6)?0x1:0x0,_0x4a6c6d=_0x45b8e3):(_0x4a6c6d=Math['floor'](Math[_0x4a9c('0x22')](_0x3584c6)/Math[_0x4a9c('0x739')]),_0x3584c6*(_0x3ca757=Math[_0x4a9c('0x555')](0x2,-_0x4a6c6d))<0x1&&(_0x4a6c6d--,_0x3ca757*=0x2),(_0x3584c6+=_0x4a6c6d+_0x319958>=0x1?_0x286086/_0x3ca757:_0x286086*Math[_0x4a9c('0x555')](0x2,0x1-_0x319958))*_0x3ca757>=0x2&&(_0x4a6c6d++,_0x3ca757/=0x2),_0x4a6c6d+_0x319958>=_0x45b8e3?(_0x4d2e05=0x0,_0x4a6c6d=_0x45b8e3):_0x4a6c6d+_0x319958>=0x1?(_0x4d2e05=(_0x3584c6*_0x3ca757-0x1)*Math[_0x4a9c('0x555')](0x2,_0x475fd1),_0x4a6c6d+=_0x319958):(_0x4d2e05=_0x3584c6*Math[_0x4a9c('0x555')](0x2,_0x319958-0x1)*Math[_0x4a9c('0x555')](0x2,_0x475fd1),_0x4a6c6d=0x0));_0x475fd1>=0x8;_0x4da212[_0x54cd2b+_0x4fcc6f]=0xff&_0x4d2e05,_0x4fcc6f+=_0x260cf7,_0x4d2e05/=0x100,_0x475fd1-=0x8);for(_0x4a6c6d=_0x4a6c6d<<_0x475fd1|_0x4d2e05,_0x5dfc02+=_0x475fd1;_0x5dfc02>0x0;_0x4da212[_0x54cd2b+_0x4fcc6f]=0xff&_0x4a6c6d,_0x4fcc6f+=_0x260cf7,_0x4a6c6d/=0x100,_0x5dfc02-=0x8);_0x4da212[_0x54cd2b+_0x4fcc6f-_0x260cf7]|=0x80*_0x13fb59;};},function(_0x124a77,_0x2d1823){var _0x46b7f2={}['toString'];_0x124a77[_0x4a9c('0x14f')]=Array[_0x4a9c('0x4c8')]||function(_0x326250){return _0x4a9c('0x2f4')==_0x46b7f2[_0x4a9c('0xc3')](_0x326250);};},function(_0x1b9b9a,_0xac3c22,_0x482839){var _0x8f9f99=_0x482839(0x1f);_0xac3c22[_0x4a9c('0x33e')]=_0x155965,_0xac3c22[_0x4a9c('0x14')]=_0x1c2e12,_0xac3c22[_0x4a9c('0x1c1')]=function(_0x16ab6c,_0x5a7984,_0x189423){return(!_0x4a3482&&_0x37819b[_0x4a9c('0x37a')](this)?this['toString']:_0x8f9f99[_0x4a9c('0x1c1')])['apply'](this,arguments);},_0xac3c22[_0x4a9c('0x60f')]=function(_0xa6bc18){return function(){return(this[_0xa6bc18]||_0x8f9f99[_0xa6bc18])[_0x4a9c('0x635')](this,arguments);};}(_0x4a9c('0x60f'));var _0x37819b=_0x482839(0x0),_0x51efe0=_0x37819b[_0x4a9c('0x44b')],_0x4a3482=_0x37819b[_0x4a9c('0x587')]&&_0x4a9c('0x270')in _0x51efe0,_0x509b3b=_0x4a3482&&!_0x51efe0[_0x4a9c('0x270')];function _0x155965(_0x1f2ee5,_0x57c730,_0x442f12,_0x2fc734){var _0x2fc893=_0x37819b[_0x4a9c('0x37a')](this),_0x23609c=_0x37819b[_0x4a9c('0x37a')](_0x1f2ee5);if(_0x2fc893&&_0x23609c)return this['copy'](_0x1f2ee5,_0x57c730,_0x442f12,_0x2fc734);if(_0x509b3b||_0x2fc893||_0x23609c||!_0x37819b[_0x4a9c('0x3bb')](this)||!_0x37819b[_0x4a9c('0x3bb')](_0x1f2ee5))return _0x8f9f99[_0x4a9c('0x33e')][_0x4a9c('0xc3')](this,_0x1f2ee5,_0x57c730,_0x442f12,_0x2fc734);var _0x2abd19=_0x442f12||null!=_0x2fc734?_0x1c2e12[_0x4a9c('0xc3')](this,_0x442f12,_0x2fc734):this;return _0x1f2ee5[_0x4a9c('0x193')](_0x2abd19,_0x57c730),_0x2abd19[_0x4a9c('0x3e1')];}function _0x1c2e12(_0x507990,_0x497c8e){var _0x54543c=this[_0x4a9c('0x14')]||!_0x509b3b&&this[_0x4a9c('0x20d')];if(_0x54543c)return _0x54543c['call'](this,_0x507990,_0x497c8e);var _0x2491d5=_0x37819b[_0x4a9c('0x569')][_0x4a9c('0xc3')](this,_0x497c8e-_0x507990);return _0x155965[_0x4a9c('0xc3')](this,_0x2491d5,0x0,_0x507990,_0x497c8e),_0x2491d5;}},function(_0x5db9ee,_0x2087e1,_0x14cd83){(function(_0x48425c){!function(_0x5b293e){var _0x2e6e93,_0x43311d=_0x4a9c('0x45d'),_0x1b5cd8=_0x43311d!==typeof _0x48425c&&_0x48425c,_0x48f8f6=_0x43311d!==typeof Uint8Array&&Uint8Array,_0x1e927e=_0x43311d!==typeof ArrayBuffer&&ArrayBuffer,_0x34a983=[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],_0x245dcc=Array[_0x4a9c('0x4c8')]||function(_0x29d30d){return!!_0x29d30d&&'[object\x20Array]'==Object['prototype']['toString'][_0x4a9c('0xc3')](_0x29d30d);},_0x5aaff0=0x100000000;function _0x5ba392(_0x14cfc1,_0xfb8a48,_0x496aba){var _0x4c0684=_0xfb8a48?0x0:0x4,_0x514645=_0xfb8a48?0x4:0x0,_0x472a93=_0xfb8a48?0x0:0x3,_0x1c8dfc=_0xfb8a48?0x1:0x2,_0x334353=_0xfb8a48?0x2:0x1,_0x1ee50d=_0xfb8a48?0x3:0x0,_0x5efedc=_0xfb8a48?_0x31e2a2:_0x274d9e,_0x1390d9=_0xfb8a48?_0x3d8291:_0xbe6d79,_0x477c3b=_0x437cd6[_0x4a9c('0x216')],_0x102619='is'+_0x14cfc1,_0x236e80='_'+_0x102619;return _0x477c3b[_0x4a9c('0x5b')]=void 0x0,_0x477c3b[_0x4a9c('0x76a')]=0x0,_0x477c3b[_0x236e80]=!0x0,_0x477c3b[_0x4a9c('0x3c4')]=_0x4a2351,_0x477c3b[_0x4a9c('0x1c1')]=function(_0x1581f1){var _0x95dbbb=this['buffer'],_0x2186b0=this[_0x4a9c('0x76a')],_0x3592bf=_0x2d77b8(_0x95dbbb,_0x2186b0+_0x4c0684),_0x494fcd=_0x2d77b8(_0x95dbbb,_0x2186b0+_0x514645),_0x1b57d3='',_0x435417=!_0x496aba&&0x80000000&_0x3592bf;for(_0x435417&&(_0x3592bf=~_0x3592bf,_0x494fcd=_0x5aaff0-_0x494fcd),_0x1581f1=_0x1581f1||0xa;;){var _0x3cc318=_0x3592bf%_0x1581f1*_0x5aaff0+_0x494fcd;if(_0x3592bf=Math[_0x4a9c('0xa9')](_0x3592bf/_0x1581f1),_0x494fcd=Math['floor'](_0x3cc318/_0x1581f1),_0x1b57d3=(_0x3cc318%_0x1581f1)['toString'](_0x1581f1)+_0x1b57d3,!_0x3592bf&&!_0x494fcd)break;}return _0x435417&&(_0x1b57d3='-'+_0x1b57d3),_0x1b57d3;},_0x477c3b[_0x4a9c('0x435')]=_0x4a2351,_0x477c3b[_0x4a9c('0x114')]=_0x15bf40,_0x1b5cd8&&(_0x477c3b[_0x4a9c('0x3a4')]=_0x415a26),_0x48f8f6&&(_0x477c3b[_0x4a9c('0x626')]=_0x190b44),_0x437cd6[_0x102619]=function(_0x5a9285){return!(!_0x5a9285||!_0x5a9285[_0x236e80]);},_0x5b293e[_0x14cfc1]=_0x437cd6,_0x437cd6;function _0x437cd6(_0x4be21b,_0x2048d9,_0x3dbbbe,_0x46c373){return this instanceof _0x437cd6?function(_0x4db452,_0x2e5060,_0x46c63b,_0x431c08,_0x34a03){if(_0x48f8f6&&_0x1e927e&&(_0x2e5060 instanceof _0x1e927e&&(_0x2e5060=new _0x48f8f6(_0x2e5060)),_0x431c08 instanceof _0x1e927e&&(_0x431c08=new _0x48f8f6(_0x431c08))),_0x2e5060||_0x46c63b||_0x431c08||_0x2e6e93){if(!_0x5061b5(_0x2e5060,_0x46c63b))_0x34a03=_0x46c63b,_0x431c08=_0x2e5060,_0x46c63b=0x0,_0x2e5060=new(_0x2e6e93||Array)(0x8);_0x4db452[_0x4a9c('0x5b')]=_0x2e5060,_0x4db452[_0x4a9c('0x76a')]=_0x46c63b|=0x0,_0x43311d!==typeof _0x431c08&&(_0x4a9c('0x290')==typeof _0x431c08?function(_0x5b6347,_0x186218,_0x5d904b,_0x16391e){var _0x1d7acd=0x0,_0x554a93=_0x5d904b['length'],_0x45297c=0x0,_0xc5c728=0x0;'-'===_0x5d904b[0x0]&&_0x1d7acd++;for(var _0x2c4afa=_0x1d7acd;_0x1d7acd<_0x554a93;){var _0x3fd4ea=parseInt(_0x5d904b[_0x1d7acd++],_0x16391e);if(!(_0x3fd4ea>=0x0))break;_0xc5c728=_0xc5c728*_0x16391e+_0x3fd4ea,_0x45297c=_0x45297c*_0x16391e+Math[_0x4a9c('0xa9')](_0xc5c728/_0x5aaff0),_0xc5c728%=_0x5aaff0;}_0x2c4afa&&(_0x45297c=~_0x45297c,_0xc5c728?_0xc5c728=_0x5aaff0-_0xc5c728:_0x45297c++),_0x49ed3c(_0x5b6347,_0x186218+_0x4c0684,_0x45297c),_0x49ed3c(_0x5b6347,_0x186218+_0x514645,_0xc5c728);}(_0x2e5060,_0x46c63b,_0x431c08,_0x34a03||0xa):_0x5061b5(_0x431c08,_0x34a03)?_0x1f86e1(_0x2e5060,_0x46c63b,_0x431c08,_0x34a03):_0x4a9c('0x27')==typeof _0x34a03?(_0x49ed3c(_0x2e5060,_0x46c63b+_0x4c0684,_0x431c08),_0x49ed3c(_0x2e5060,_0x46c63b+_0x514645,_0x34a03)):_0x431c08>0x0?_0x5efedc(_0x2e5060,_0x46c63b,_0x431c08):_0x431c08<0x0?_0x1390d9(_0x2e5060,_0x46c63b,_0x431c08):_0x1f86e1(_0x2e5060,_0x46c63b,_0x34a983,0x0));}else _0x4db452[_0x4a9c('0x5b')]=_0x24eb73(_0x34a983,0x0);}(this,_0x4be21b,_0x2048d9,_0x3dbbbe,_0x46c373):new _0x437cd6(_0x4be21b,_0x2048d9,_0x3dbbbe,_0x46c373);}function _0x4a2351(){var _0x2623f3=this[_0x4a9c('0x5b')],_0x5aa35e=this['offset'],_0x7b6089=_0x2d77b8(_0x2623f3,_0x5aa35e+_0x4c0684),_0xdcfedc=_0x2d77b8(_0x2623f3,_0x5aa35e+_0x514645);return _0x496aba||(_0x7b6089|=0x0),_0x7b6089?_0x7b6089*_0x5aaff0+_0xdcfedc:_0xdcfedc;}function _0x49ed3c(_0x4354cc,_0x17b2f7,_0x365a0e){_0x4354cc[_0x17b2f7+_0x1ee50d]=0xff&_0x365a0e,_0x365a0e>>=0x8,_0x4354cc[_0x17b2f7+_0x334353]=0xff&_0x365a0e,_0x365a0e>>=0x8,_0x4354cc[_0x17b2f7+_0x1c8dfc]=0xff&_0x365a0e,_0x365a0e>>=0x8,_0x4354cc[_0x17b2f7+_0x472a93]=0xff&_0x365a0e;}function _0x2d77b8(_0x3ff0bd,_0x16e6b3){return 0x1000000*_0x3ff0bd[_0x16e6b3+_0x472a93]+(_0x3ff0bd[_0x16e6b3+_0x1c8dfc]<<0x10)+(_0x3ff0bd[_0x16e6b3+_0x334353]<<0x8)+_0x3ff0bd[_0x16e6b3+_0x1ee50d];}}function _0x15bf40(_0x2406d9){var _0x44cdaf=this[_0x4a9c('0x5b')],_0x10979e=this['offset'];return _0x2e6e93=null,!0x1!==_0x2406d9&&0x0===_0x10979e&&0x8===_0x44cdaf[_0x4a9c('0x3e1')]&&_0x245dcc(_0x44cdaf)?_0x44cdaf:_0x24eb73(_0x44cdaf,_0x10979e);}function _0x415a26(_0x59606b){var _0x149db3=this[_0x4a9c('0x5b')],_0x5a4186=this[_0x4a9c('0x76a')];if(_0x2e6e93=_0x1b5cd8,!0x1!==_0x59606b&&0x0===_0x5a4186&&0x8===_0x149db3[_0x4a9c('0x3e1')]&&_0x48425c[_0x4a9c('0x37a')](_0x149db3))return _0x149db3;var _0xcc53f7=new _0x1b5cd8(0x8);return _0x1f86e1(_0xcc53f7,0x0,_0x149db3,_0x5a4186),_0xcc53f7;}function _0x190b44(_0x292e1f){var _0x1ba1e5=this[_0x4a9c('0x5b')],_0x445897=this[_0x4a9c('0x76a')],_0x20ed5f=_0x1ba1e5[_0x4a9c('0x5b')];if(_0x2e6e93=_0x48f8f6,!0x1!==_0x292e1f&&0x0===_0x445897&&_0x20ed5f instanceof _0x1e927e&&0x8===_0x20ed5f['byteLength'])return _0x20ed5f;var _0x4b8251=new _0x48f8f6(0x8);return _0x1f86e1(_0x4b8251,0x0,_0x1ba1e5,_0x445897),_0x4b8251['buffer'];}function _0x5061b5(_0x4f6b2d,_0x5c2a22){var _0x453a16=_0x4f6b2d&&_0x4f6b2d[_0x4a9c('0x3e1')];return _0x5c2a22|=0x0,_0x453a16&&_0x5c2a22+0x8<=_0x453a16&&_0x4a9c('0x290')!=typeof _0x4f6b2d[_0x5c2a22];}function _0x1f86e1(_0x2b04ff,_0x55ca50,_0x1cd4be,_0x484029){_0x55ca50|=0x0,_0x484029|=0x0;for(var _0x46fcf9=0x0;_0x46fcf9<0x8;_0x46fcf9++)_0x2b04ff[_0x55ca50++]=0xff&_0x1cd4be[_0x484029++];}function _0x24eb73(_0x25e9ee,_0x11913c){return Array[_0x4a9c('0x216')][_0x4a9c('0x14')]['call'](_0x25e9ee,_0x11913c,_0x11913c+0x8);}function _0x31e2a2(_0x706d26,_0x7d325b,_0x2f805a){for(var _0x3542c4=_0x7d325b+0x8;_0x3542c4>_0x7d325b;)_0x706d26[--_0x3542c4]=0xff&_0x2f805a,_0x2f805a/=0x100;}function _0x3d8291(_0x361e1e,_0x19ad07,_0x457638){var _0x556888=_0x19ad07+0x8;for(_0x457638++;_0x556888>_0x19ad07;)_0x361e1e[--_0x556888]=0xff&-_0x457638^0xff,_0x457638/=0x100;}function _0x274d9e(_0x5304c4,_0x37142a,_0x43e9fe){for(var _0x5ab6ea=_0x37142a+0x8;_0x37142a<_0x5ab6ea;)_0x5304c4[_0x37142a++]=0xff&_0x43e9fe,_0x43e9fe/=0x100;}function _0xbe6d79(_0x321c9f,_0x1b7b20,_0x41cbe7){var _0x2c50d8=_0x1b7b20+0x8;for(_0x41cbe7++;_0x1b7b20<_0x2c50d8;)_0x321c9f[_0x1b7b20++]=0xff&-_0x41cbe7^0xff,_0x41cbe7/=0x100;}_0x5ba392(_0x4a9c('0x6bc'),!0x0,!0x0),_0x5ba392('Int64BE',!0x0,!0x1),_0x5ba392(_0x4a9c('0x423'),!0x1,!0x0),_0x5ba392('Int64LE',!0x1,!0x1);}('string'!=typeof _0x2087e1[_0x4a9c('0x6cb')]?_0x2087e1:this||{});}[_0x4a9c('0xc3')](this,_0x14cd83(0xb)[_0x4a9c('0x3df')]));},function(_0x289b8d,_0x1c2b55,_0x43d631){var _0x35aa53=_0x43d631(0x3)[_0x4a9c('0x3a7')],_0x19a806=_0x43d631(0x23),_0x989dbd=_0x43d631(0x11)[_0x4a9c('0x5b6')],_0x4fac7c=_0x43d631(0x24),_0x53c33c=_0x43d631(0x1);function _0xa6d753(){var _0x24c4c5=this[_0x4a9c('0x5b9')];return this[_0x4a9c('0x5bd')]=function(_0x345eb6){var _0x212bf9=_0x4fac7c['getReadToken'](_0x345eb6);return function(_0x56d00e){var _0x3921f8=_0x989dbd(_0x56d00e),_0x45ef45=_0x212bf9[_0x3921f8];if(!_0x45ef45)throw new Error(_0x4a9c('0x27f')+(_0x3921f8?'0x'+_0x3921f8['toString'](0x10):_0x3921f8));return _0x45ef45(_0x56d00e);};}(_0x24c4c5),_0x24c4c5&&_0x24c4c5[_0x4a9c('0xa')]&&_0x19a806['setExtUnpackers'](this),this;}_0x53c33c[_0x4a9c('0x2d')]({'addExtUnpacker':function(_0xfe4d7d,_0x29359f){(this[_0x4a9c('0x7d1')]||(this[_0x4a9c('0x7d1')]=[]))[_0xfe4d7d]=_0x53c33c['filter'](_0x29359f);},'getExtUnpacker':function(_0x5b11ac){return(this[_0x4a9c('0x7d1')]||(this[_0x4a9c('0x7d1')]=[]))[_0x5b11ac]||function(_0xc7a98a){return new _0x35aa53(_0xc7a98a,_0x5b11ac);};},'init':_0xa6d753}),_0x1c2b55[_0x4a9c('0xa')]=_0xa6d753[_0x4a9c('0xc3')](_0x53c33c[_0x4a9c('0xa')]);},function(_0x2959a0,_0x313d51,_0x211506){_0x313d51[_0x4a9c('0x45e')]=function(_0x3088b4,_0xe71fa0){var _0x49a350=new _0x24209c(_0xe71fa0);return _0x49a350[_0x4a9c('0x60f')](_0x3088b4),_0x49a350['read']();};var _0x24209c=_0x211506(0xa)[_0x4a9c('0x74')];},function(_0x190176,_0x550120,_0x1b7539){_0x550120[_0x4a9c('0x74')]=_0x1bc1be;var _0xc48ba4=_0x1b7539(0x2)[_0x4a9c('0xa')];function _0x1bc1be(_0x555d12){if(!(this instanceof _0x1bc1be))return new _0x1bc1be(_0x555d12);if(_0x555d12&&(this[_0x4a9c('0x5b9')]=_0x555d12,_0x555d12[_0x4a9c('0x3b6')])){var _0x521b36=this[_0x4a9c('0x3b6')]=_0x555d12[_0x4a9c('0x3b6')];_0x521b36[_0x4a9c('0x510')]&&(this[_0x4a9c('0x510')]=_0x521b36[_0x4a9c('0x510')]);}}_0x1b7539(0xe)[_0x4a9c('0x462')][_0x4a9c('0x3e7')](_0x1bc1be[_0x4a9c('0x216')]),_0x1bc1be[_0x4a9c('0x216')][_0x4a9c('0x3b6')]=_0xc48ba4,_0x1bc1be[_0x4a9c('0x216')][_0x4a9c('0x60f')]=function(_0x32c5d5){this[_0x4a9c('0x3b6')][_0x4a9c('0x45e')](this,_0x32c5d5);};},function(_0x12f6ed,_0x39d9af,_0x315960){'use strict';(function(_0x40f6f3){/*!* The buffer module from node.js, for the browser.** @author   Feross Aboukhadijeh <http://feross.org>* @license  MIT*/var _0x3fa5f0=_0x315960(0x1a),_0x51356e=_0x315960(0x4),_0x7b66ce=_0x315960(0x1b);function _0x52e15c(){return _0x4cf28b['TYPED_ARRAY_SUPPORT']?0x7fffffff:0x3fffffff;}function _0xcabe12(_0x59b24e,_0x42ae6c){if(_0x52e15c()<_0x42ae6c)throw new RangeError(_0x4a9c('0x229'));return _0x4cf28b[_0x4a9c('0x270')]?(_0x59b24e=new Uint8Array(_0x42ae6c))[_0x4a9c('0x7d3')]=_0x4cf28b['prototype']:(null===_0x59b24e&&(_0x59b24e=new _0x4cf28b(_0x42ae6c)),_0x59b24e[_0x4a9c('0x3e1')]=_0x42ae6c),_0x59b24e;}function _0x4cf28b(_0x8ae1b2,_0x290fbf,_0x39dc07){if(!(_0x4cf28b['TYPED_ARRAY_SUPPORT']||this instanceof _0x4cf28b))return new _0x4cf28b(_0x8ae1b2,_0x290fbf,_0x39dc07);if(_0x4a9c('0x27')==typeof _0x8ae1b2){if('string'==typeof _0x290fbf)throw new Error(_0x4a9c('0x8e'));return _0x151aa7(this,_0x8ae1b2);}return _0x3556e4(this,_0x8ae1b2,_0x290fbf,_0x39dc07);}function _0x3556e4(_0x4ed737,_0x3cd134,_0x4893f3,_0x2090ad){if(_0x4a9c('0x27')==typeof _0x3cd134)throw new TypeError('\x22value\x22\x20argument\x20must\x20not\x20be\x20a\x20number');return _0x4a9c('0x45d')!=typeof ArrayBuffer&&_0x3cd134 instanceof ArrayBuffer?function(_0x2eb940,_0x20c2dd,_0xb4dede,_0x3be99){if(_0x20c2dd[_0x4a9c('0x77f')],_0xb4dede<0x0||_0x20c2dd[_0x4a9c('0x77f')]<_0xb4dede)throw new RangeError(_0x4a9c('0x130'));if(_0x20c2dd[_0x4a9c('0x77f')]<_0xb4dede+(_0x3be99||0x0))throw new RangeError(_0x4a9c('0x19d'));return _0x20c2dd=void 0x0===_0xb4dede&&void 0x0===_0x3be99?new Uint8Array(_0x20c2dd):void 0x0===_0x3be99?new Uint8Array(_0x20c2dd,_0xb4dede):new Uint8Array(_0x20c2dd,_0xb4dede,_0x3be99),_0x4cf28b[_0x4a9c('0x270')]?(_0x2eb940=_0x20c2dd)[_0x4a9c('0x7d3')]=_0x4cf28b[_0x4a9c('0x216')]:_0x2eb940=_0x4ec390(_0x2eb940,_0x20c2dd),_0x2eb940;}(_0x4ed737,_0x3cd134,_0x4893f3,_0x2090ad):_0x4a9c('0x290')==typeof _0x3cd134?function(_0x18edc6,_0x4ded9c,_0x56995f){if(_0x4a9c('0x290')==typeof _0x56995f&&''!==_0x56995f||(_0x56995f='utf8'),!_0x4cf28b[_0x4a9c('0x3f2')](_0x56995f))throw new TypeError(_0x4a9c('0x382'));var _0x2013d2=0x0|_0x196a08(_0x4ded9c,_0x56995f),_0x4a6ac7=(_0x18edc6=_0xcabe12(_0x18edc6,_0x2013d2))[_0x4a9c('0x60f')](_0x4ded9c,_0x56995f);return _0x4a6ac7!==_0x2013d2&&(_0x18edc6=_0x18edc6[_0x4a9c('0x14')](0x0,_0x4a6ac7)),_0x18edc6;}(_0x4ed737,_0x3cd134,_0x4893f3):function(_0x308c43,_0x3d300c){if(_0x4cf28b[_0x4a9c('0x37a')](_0x3d300c)){var _0x10442a=0x0|_0xbbe272(_0x3d300c[_0x4a9c('0x3e1')]);return 0x0===(_0x308c43=_0xcabe12(_0x308c43,_0x10442a))[_0x4a9c('0x3e1')]||_0x3d300c[_0x4a9c('0x33e')](_0x308c43,0x0,0x0,_0x10442a),_0x308c43;}if(_0x3d300c){if(_0x4a9c('0x45d')!=typeof ArrayBuffer&&_0x3d300c[_0x4a9c('0x5b')]instanceof ArrayBuffer||_0x4a9c('0x3e1')in _0x3d300c)return _0x4a9c('0x27')!=typeof _0x3d300c[_0x4a9c('0x3e1')]||function(_0x34769f){return _0x34769f!=_0x34769f;}(_0x3d300c[_0x4a9c('0x3e1')])?_0xcabe12(_0x308c43,0x0):_0x4ec390(_0x308c43,_0x3d300c);if(_0x4a9c('0x3df')===_0x3d300c[_0x4a9c('0x5d4')]&&_0x7b66ce(_0x3d300c[_0x4a9c('0x799')]))return _0x4ec390(_0x308c43,_0x3d300c[_0x4a9c('0x799')]);}throw new TypeError(_0x4a9c('0x783'));}(_0x4ed737,_0x3cd134);}function _0x106173(_0xd9cc2d){if(_0x4a9c('0x27')!=typeof _0xd9cc2d)throw new TypeError(_0x4a9c('0x4de'));if(_0xd9cc2d<0x0)throw new RangeError(_0x4a9c('0x2fe'));}function _0x151aa7(_0x50e894,_0x16a9eb){if(_0x106173(_0x16a9eb),_0x50e894=_0xcabe12(_0x50e894,_0x16a9eb<0x0?0x0:0x0|_0xbbe272(_0x16a9eb)),!_0x4cf28b['TYPED_ARRAY_SUPPORT'])for(var _0x50eb3f=0x0;_0x50eb3f<_0x16a9eb;++_0x50eb3f)_0x50e894[_0x50eb3f]=0x0;return _0x50e894;}function _0x4ec390(_0x4cd141,_0x7ea8aa){var _0x2f9091=_0x7ea8aa[_0x4a9c('0x3e1')]<0x0?0x0:0x0|_0xbbe272(_0x7ea8aa[_0x4a9c('0x3e1')]);_0x4cd141=_0xcabe12(_0x4cd141,_0x2f9091);for(var _0x2aaedf=0x0;_0x2aaedf<_0x2f9091;_0x2aaedf+=0x1)_0x4cd141[_0x2aaedf]=0xff&_0x7ea8aa[_0x2aaedf];return _0x4cd141;}function _0xbbe272(_0x6cff6e){if(_0x6cff6e>=_0x52e15c())throw new RangeError('Attempt\x20to\x20allocate\x20Buffer\x20larger\x20than\x20maximum\x20size:\x200x'+_0x52e15c()['toString'](0x10)+_0x4a9c('0x724'));return 0x0|_0x6cff6e;}function _0x196a08(_0x4b58b5,_0x1f9e8a){if(_0x4cf28b[_0x4a9c('0x37a')](_0x4b58b5))return _0x4b58b5[_0x4a9c('0x3e1')];if(_0x4a9c('0x45d')!=typeof ArrayBuffer&&_0x4a9c('0x2f2')==typeof ArrayBuffer[_0x4a9c('0x3bb')]&&(ArrayBuffer[_0x4a9c('0x3bb')](_0x4b58b5)||_0x4b58b5 instanceof ArrayBuffer))return _0x4b58b5['byteLength'];_0x4a9c('0x290')!=typeof _0x4b58b5&&(_0x4b58b5=''+_0x4b58b5);var _0x40a441=_0x4b58b5['length'];if(0x0===_0x40a441)return 0x0;for(var _0x3c4a77=!0x1;;)switch(_0x1f9e8a){case _0x4a9c('0x313'):case _0x4a9c('0x3d9'):case _0x4a9c('0x237'):return _0x40a441;case _0x4a9c('0x655'):case _0x4a9c('0xa8'):case void 0x0:return _0x11b8b2(_0x4b58b5)['length'];case _0x4a9c('0x726'):case _0x4a9c('0x757'):case _0x4a9c('0x248'):case _0x4a9c('0x28'):return 0x2*_0x40a441;case _0x4a9c('0x456'):return _0x40a441>>>0x1;case'base64':return _0x5ec3fa(_0x4b58b5)[_0x4a9c('0x3e1')];default:if(_0x3c4a77)return _0x11b8b2(_0x4b58b5)[_0x4a9c('0x3e1')];_0x1f9e8a=(''+_0x1f9e8a)[_0x4a9c('0x5c2')](),_0x3c4a77=!0x0;}}function _0x15f83f(_0xdb1b71,_0x537b63,_0x553b4a){var _0x3d7440=_0xdb1b71[_0x537b63];_0xdb1b71[_0x537b63]=_0xdb1b71[_0x553b4a],_0xdb1b71[_0x553b4a]=_0x3d7440;}function _0x4be53b(_0x42e202,_0x16017c,_0x412821,_0xe83c15,_0x512a6c){if(0x0===_0x42e202[_0x4a9c('0x3e1')])return-0x1;if(_0x4a9c('0x290')==typeof _0x412821?(_0xe83c15=_0x412821,_0x412821=0x0):_0x412821>0x7fffffff?_0x412821=0x7fffffff:_0x412821<-0x80000000&&(_0x412821=-0x80000000),_0x412821=+_0x412821,isNaN(_0x412821)&&(_0x412821=_0x512a6c?0x0:_0x42e202[_0x4a9c('0x3e1')]-0x1),_0x412821<0x0&&(_0x412821=_0x42e202[_0x4a9c('0x3e1')]+_0x412821),_0x412821>=_0x42e202['length']){if(_0x512a6c)return-0x1;_0x412821=_0x42e202[_0x4a9c('0x3e1')]-0x1;}else if(_0x412821<0x0){if(!_0x512a6c)return-0x1;_0x412821=0x0;}if(_0x4a9c('0x290')==typeof _0x16017c&&(_0x16017c=_0x4cf28b[_0x4a9c('0x34a')](_0x16017c,_0xe83c15)),_0x4cf28b[_0x4a9c('0x37a')](_0x16017c))return 0x0===_0x16017c[_0x4a9c('0x3e1')]?-0x1:_0x2dea10(_0x42e202,_0x16017c,_0x412821,_0xe83c15,_0x512a6c);if(_0x4a9c('0x27')==typeof _0x16017c)return _0x16017c&=0xff,_0x4cf28b[_0x4a9c('0x270')]&&_0x4a9c('0x2f2')==typeof Uint8Array['prototype'][_0x4a9c('0x312')]?_0x512a6c?Uint8Array[_0x4a9c('0x216')][_0x4a9c('0x312')][_0x4a9c('0xc3')](_0x42e202,_0x16017c,_0x412821):Uint8Array[_0x4a9c('0x216')][_0x4a9c('0x591')][_0x4a9c('0xc3')](_0x42e202,_0x16017c,_0x412821):_0x2dea10(_0x42e202,[_0x16017c],_0x412821,_0xe83c15,_0x512a6c);throw new TypeError(_0x4a9c('0x14b'));}function _0x2dea10(_0x266786,_0x3d8ac6,_0x288e1e,_0x117ad5,_0x68601d){var _0x23ae26,_0x5e862f=0x1,_0xe15da1=_0x266786[_0x4a9c('0x3e1')],_0x31ea83=_0x3d8ac6[_0x4a9c('0x3e1')];if(void 0x0!==_0x117ad5&&(_0x4a9c('0x726')===(_0x117ad5=String(_0x117ad5)[_0x4a9c('0x5c2')]())||_0x4a9c('0x757')===_0x117ad5||'utf16le'===_0x117ad5||_0x4a9c('0x28')===_0x117ad5)){if(_0x266786['length']<0x2||_0x3d8ac6[_0x4a9c('0x3e1')]<0x2)return-0x1;_0x5e862f=0x2,_0xe15da1/=0x2,_0x31ea83/=0x2,_0x288e1e/=0x2;}function _0x2b58fc(_0x40f1ff,_0x404a27){return 0x1===_0x5e862f?_0x40f1ff[_0x404a27]:_0x40f1ff['readUInt16BE'](_0x404a27*_0x5e862f);}if(_0x68601d){var _0x3acf3d=-0x1;for(_0x23ae26=_0x288e1e;_0x23ae26<_0xe15da1;_0x23ae26++)if(_0x2b58fc(_0x266786,_0x23ae26)===_0x2b58fc(_0x3d8ac6,-0x1===_0x3acf3d?0x0:_0x23ae26-_0x3acf3d)){if(-0x1===_0x3acf3d&&(_0x3acf3d=_0x23ae26),_0x23ae26-_0x3acf3d+0x1===_0x31ea83)return _0x3acf3d*_0x5e862f;}else-0x1!==_0x3acf3d&&(_0x23ae26-=_0x23ae26-_0x3acf3d),_0x3acf3d=-0x1;}else for(_0x288e1e+_0x31ea83>_0xe15da1&&(_0x288e1e=_0xe15da1-_0x31ea83),_0x23ae26=_0x288e1e;_0x23ae26>=0x0;_0x23ae26--){for(var _0x39c744=!0x0,_0x3d8694=0x0;_0x3d8694<_0x31ea83;_0x3d8694++)if(_0x2b58fc(_0x266786,_0x23ae26+_0x3d8694)!==_0x2b58fc(_0x3d8ac6,_0x3d8694)){_0x39c744=!0x1;break;}if(_0x39c744)return _0x23ae26;}return-0x1;}function _0x475dab(_0x29e500,_0x193df8,_0x2a1519,_0x4a3058){_0x2a1519=Number(_0x2a1519)||0x0;var _0x427c9f=_0x29e500[_0x4a9c('0x3e1')]-_0x2a1519;_0x4a3058?(_0x4a3058=Number(_0x4a3058))>_0x427c9f&&(_0x4a3058=_0x427c9f):_0x4a3058=_0x427c9f;var _0x28de2f=_0x193df8[_0x4a9c('0x3e1')];if(_0x28de2f%0x2!=0x0)throw new TypeError(_0x4a9c('0x41d'));_0x4a3058>_0x28de2f/0x2&&(_0x4a3058=_0x28de2f/0x2);for(var _0x28fe3c=0x0;_0x28fe3c<_0x4a3058;++_0x28fe3c){var _0x419fbd=parseInt(_0x193df8[_0x4a9c('0x48f')](0x2*_0x28fe3c,0x2),0x10);if(isNaN(_0x419fbd))return _0x28fe3c;_0x29e500[_0x2a1519+_0x28fe3c]=_0x419fbd;}return _0x28fe3c;}function _0x56274b(_0x42f18a,_0x5d1730,_0x74565a,_0x3df616){return _0x4a9cc8(_0x11b8b2(_0x5d1730,_0x42f18a['length']-_0x74565a),_0x42f18a,_0x74565a,_0x3df616);}function _0x58954f(_0x4c282c,_0x243123,_0x99f4e1,_0x48c986){return _0x4a9cc8(function(_0x13ce62){for(var _0x7b1204=[],_0x3bec01=0x0;_0x3bec01<_0x13ce62[_0x4a9c('0x3e1')];++_0x3bec01)_0x7b1204[_0x4a9c('0x2d2')](0xff&_0x13ce62[_0x4a9c('0x611')](_0x3bec01));return _0x7b1204;}(_0x243123),_0x4c282c,_0x99f4e1,_0x48c986);}function _0x44e2ef(_0xb6f70b,_0x1af304,_0x5e6bdc,_0x4a422d){return _0x58954f(_0xb6f70b,_0x1af304,_0x5e6bdc,_0x4a422d);}function _0x1fa48a(_0x28371f,_0x32c622,_0x336846,_0x27b90f){return _0x4a9cc8(_0x5ec3fa(_0x32c622),_0x28371f,_0x336846,_0x27b90f);}function _0x4aaf30(_0x5a56ac,_0x495151,_0xc66c9a,_0x482437){return _0x4a9cc8(function(_0x35c435,_0x4f56d3){for(var _0x44d7fd,_0x5939f8,_0x5ef39f,_0x3b1a94=[],_0x5c4590=0x0;_0x5c4590<_0x35c435[_0x4a9c('0x3e1')]&&!((_0x4f56d3-=0x2)<0x0);++_0x5c4590)_0x5939f8=(_0x44d7fd=_0x35c435[_0x4a9c('0x611')](_0x5c4590))>>0x8,_0x5ef39f=_0x44d7fd%0x100,_0x3b1a94[_0x4a9c('0x2d2')](_0x5ef39f),_0x3b1a94[_0x4a9c('0x2d2')](_0x5939f8);return _0x3b1a94;}(_0x495151,_0x5a56ac['length']-_0xc66c9a),_0x5a56ac,_0xc66c9a,_0x482437);}function _0x1d3a1c(_0x505aec,_0x2b6c27,_0x35df1a){return 0x0===_0x2b6c27&&_0x35df1a===_0x505aec[_0x4a9c('0x3e1')]?_0x3fa5f0[_0x4a9c('0x2ce')](_0x505aec):_0x3fa5f0[_0x4a9c('0x2ce')](_0x505aec[_0x4a9c('0x14')](_0x2b6c27,_0x35df1a));}function _0x1e0ee9(_0x164627,_0x232a51,_0x85db8b){_0x85db8b=Math[_0x4a9c('0xe8')](_0x164627[_0x4a9c('0x3e1')],_0x85db8b);for(var _0x1a32dc=[],_0x418e22=_0x232a51;_0x418e22<_0x85db8b;){var _0x503a75,_0x308452,_0xb51179,_0x345e9e,_0x27339f=_0x164627[_0x418e22],_0x110a08=null,_0x26e913=_0x27339f>0xef?0x4:_0x27339f>0xdf?0x3:_0x27339f>0xbf?0x2:0x1;if(_0x418e22+_0x26e913<=_0x85db8b)switch(_0x26e913){case 0x1:_0x27339f<0x80&&(_0x110a08=_0x27339f);break;case 0x2:0x80==(0xc0&(_0x503a75=_0x164627[_0x418e22+0x1]))&&(_0x345e9e=(0x1f&_0x27339f)<<0x6|0x3f&_0x503a75)>0x7f&&(_0x110a08=_0x345e9e);break;case 0x3:_0x503a75=_0x164627[_0x418e22+0x1],_0x308452=_0x164627[_0x418e22+0x2],0x80==(0xc0&_0x503a75)&&0x80==(0xc0&_0x308452)&&(_0x345e9e=(0xf&_0x27339f)<<0xc|(0x3f&_0x503a75)<<0x6|0x3f&_0x308452)>0x7ff&&(_0x345e9e<0xd800||_0x345e9e>0xdfff)&&(_0x110a08=_0x345e9e);break;case 0x4:_0x503a75=_0x164627[_0x418e22+0x1],_0x308452=_0x164627[_0x418e22+0x2],_0xb51179=_0x164627[_0x418e22+0x3],0x80==(0xc0&_0x503a75)&&0x80==(0xc0&_0x308452)&&0x80==(0xc0&_0xb51179)&&(_0x345e9e=(0xf&_0x27339f)<<0x12|(0x3f&_0x503a75)<<0xc|(0x3f&_0x308452)<<0x6|0x3f&_0xb51179)>0xffff&&_0x345e9e<0x110000&&(_0x110a08=_0x345e9e);}null===_0x110a08?(_0x110a08=0xfffd,_0x26e913=0x1):_0x110a08>0xffff&&(_0x110a08-=0x10000,_0x1a32dc[_0x4a9c('0x2d2')](_0x110a08>>>0xa&0x3ff|0xd800),_0x110a08=0xdc00|0x3ff&_0x110a08),_0x1a32dc['push'](_0x110a08),_0x418e22+=_0x26e913;}return function(_0x38cd7f){var _0x5d5bb3=_0x38cd7f[_0x4a9c('0x3e1')];if(_0x5d5bb3<=_0x23e488)return String['fromCharCode'][_0x4a9c('0x635')](String,_0x38cd7f);for(var _0x34105d='',_0x1f07a6=0x0;_0x1f07a6<_0x5d5bb3;)_0x34105d+=String[_0x4a9c('0x3b9')][_0x4a9c('0x635')](String,_0x38cd7f['slice'](_0x1f07a6,_0x1f07a6+=_0x23e488));return _0x34105d;}(_0x1a32dc);}_0x39d9af[_0x4a9c('0x3df')]=_0x4cf28b,_0x39d9af[_0x4a9c('0x6cd')]=function(_0x220d2b){return+_0x220d2b!=_0x220d2b&&(_0x220d2b=0x0),_0x4cf28b[_0x4a9c('0x569')](+_0x220d2b);},_0x39d9af['INSPECT_MAX_BYTES']=0x32,_0x4cf28b[_0x4a9c('0x270')]=void 0x0!==_0x40f6f3[_0x4a9c('0x270')]?_0x40f6f3['TYPED_ARRAY_SUPPORT']:function(){try{var _0x5ebca2=new Uint8Array(0x1);return _0x5ebca2[_0x4a9c('0x7d3')]={'__proto__':Uint8Array['prototype'],'foo':function(){return 0x2a;}},0x2a===_0x5ebca2[_0x4a9c('0x709')]()&&_0x4a9c('0x2f2')==typeof _0x5ebca2[_0x4a9c('0x20d')]&&0x0===_0x5ebca2['subarray'](0x1,0x1)[_0x4a9c('0x77f')];}catch(_0x2dad1c){return!0x1;}}(),_0x39d9af[_0x4a9c('0x411')]=_0x52e15c(),_0x4cf28b[_0x4a9c('0x2de')]=0x2000,_0x4cf28b[_0x4a9c('0x232')]=function(_0xed8e68){return _0xed8e68[_0x4a9c('0x7d3')]=_0x4cf28b['prototype'],_0xed8e68;},_0x4cf28b[_0x4a9c('0x34a')]=function(_0xaa3e15,_0x19a304,_0x2b7189){return _0x3556e4(null,_0xaa3e15,_0x19a304,_0x2b7189);},_0x4cf28b[_0x4a9c('0x270')]&&(_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x7d3')]=Uint8Array['prototype'],_0x4cf28b[_0x4a9c('0x7d3')]=Uint8Array,_0x4a9c('0x45d')!=typeof Symbol&&Symbol[_0x4a9c('0xd1')]&&_0x4cf28b[Symbol[_0x4a9c('0xd1')]]===_0x4cf28b&&Object[_0x4a9c('0x18d')](_0x4cf28b,Symbol[_0x4a9c('0xd1')],{'value':null,'configurable':!0x0})),_0x4cf28b[_0x4a9c('0x569')]=function(_0xf794f5,_0x2c138d,_0x5d0f76){return function(_0x458c8a,_0x2c1862,_0x369892,_0x145dd1){return _0x106173(_0x2c1862),_0x2c1862<=0x0?_0xcabe12(_0x458c8a,_0x2c1862):void 0x0!==_0x369892?'string'==typeof _0x145dd1?_0xcabe12(_0x458c8a,_0x2c1862)['fill'](_0x369892,_0x145dd1):_0xcabe12(_0x458c8a,_0x2c1862)[_0x4a9c('0x702')](_0x369892):_0xcabe12(_0x458c8a,_0x2c1862);}(null,_0xf794f5,_0x2c138d,_0x5d0f76);},_0x4cf28b['allocUnsafe']=function(_0x507bdc){return _0x151aa7(null,_0x507bdc);},_0x4cf28b[_0x4a9c('0x4cd')]=function(_0xb48499){return _0x151aa7(null,_0xb48499);},_0x4cf28b[_0x4a9c('0x37a')]=function(_0xcedca4){return!(null==_0xcedca4||!_0xcedca4[_0x4a9c('0x670')]);},_0x4cf28b[_0x4a9c('0x231')]=function(_0x52b243,_0x15f93d){if(!_0x4cf28b['isBuffer'](_0x52b243)||!_0x4cf28b[_0x4a9c('0x37a')](_0x15f93d))throw new TypeError('Arguments\x20must\x20be\x20Buffers');if(_0x52b243===_0x15f93d)return 0x0;for(var _0x4927f9=_0x52b243[_0x4a9c('0x3e1')],_0x3fbddf=_0x15f93d[_0x4a9c('0x3e1')],_0x3b51f5=0x0,_0x4c748c=Math[_0x4a9c('0xe8')](_0x4927f9,_0x3fbddf);_0x3b51f5<_0x4c748c;++_0x3b51f5)if(_0x52b243[_0x3b51f5]!==_0x15f93d[_0x3b51f5]){_0x4927f9=_0x52b243[_0x3b51f5],_0x3fbddf=_0x15f93d[_0x3b51f5];break;}return _0x4927f9<_0x3fbddf?-0x1:_0x3fbddf<_0x4927f9?0x1:0x0;},_0x4cf28b['isEncoding']=function(_0x1e17db){switch(String(_0x1e17db)[_0x4a9c('0x5c2')]()){case _0x4a9c('0x456'):case'utf8':case _0x4a9c('0xa8'):case _0x4a9c('0x313'):case _0x4a9c('0x3d9'):case _0x4a9c('0x237'):case _0x4a9c('0xf5'):case _0x4a9c('0x726'):case _0x4a9c('0x757'):case _0x4a9c('0x248'):case _0x4a9c('0x28'):return!0x0;default:return!0x1;}},_0x4cf28b[_0x4a9c('0x4fc')]=function(_0x2d87c2,_0x137cef){if(!_0x7b66ce(_0x2d87c2))throw new TypeError(_0x4a9c('0xea'));if(0x0===_0x2d87c2[_0x4a9c('0x3e1')])return _0x4cf28b['alloc'](0x0);var _0x138437;if(void 0x0===_0x137cef)for(_0x137cef=0x0,_0x138437=0x0;_0x138437<_0x2d87c2['length'];++_0x138437)_0x137cef+=_0x2d87c2[_0x138437][_0x4a9c('0x3e1')];var _0x2a6fae=_0x4cf28b[_0x4a9c('0x3fb')](_0x137cef),_0x6011bd=0x0;for(_0x138437=0x0;_0x138437<_0x2d87c2[_0x4a9c('0x3e1')];++_0x138437){var _0x4b784e=_0x2d87c2[_0x138437];if(!_0x4cf28b[_0x4a9c('0x37a')](_0x4b784e))throw new TypeError(_0x4a9c('0xea'));_0x4b784e[_0x4a9c('0x33e')](_0x2a6fae,_0x6011bd),_0x6011bd+=_0x4b784e['length'];}return _0x2a6fae;},_0x4cf28b[_0x4a9c('0x77f')]=_0x196a08,_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x670')]=!0x0,_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x22f')]=function(){var _0x56d0cb=this[_0x4a9c('0x3e1')];if(_0x56d0cb%0x2!=0x0)throw new RangeError(_0x4a9c('0xc9'));for(var _0x352623=0x0;_0x352623<_0x56d0cb;_0x352623+=0x2)_0x15f83f(this,_0x352623,_0x352623+0x1);return this;},_0x4cf28b['prototype']['swap32']=function(){var _0x5757b3=this[_0x4a9c('0x3e1')];if(_0x5757b3%0x4!=0x0)throw new RangeError(_0x4a9c('0x700'));for(var _0x5be483=0x0;_0x5be483<_0x5757b3;_0x5be483+=0x4)_0x15f83f(this,_0x5be483,_0x5be483+0x3),_0x15f83f(this,_0x5be483+0x1,_0x5be483+0x2);return this;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x73')]=function(){var _0x1aa187=this[_0x4a9c('0x3e1')];if(_0x1aa187%0x8!=0x0)throw new RangeError(_0x4a9c('0x31c'));for(var _0x4c5dac=0x0;_0x4c5dac<_0x1aa187;_0x4c5dac+=0x8)_0x15f83f(this,_0x4c5dac,_0x4c5dac+0x7),_0x15f83f(this,_0x4c5dac+0x1,_0x4c5dac+0x6),_0x15f83f(this,_0x4c5dac+0x2,_0x4c5dac+0x5),_0x15f83f(this,_0x4c5dac+0x3,_0x4c5dac+0x4);return this;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x1c1')]=function(){var _0x185560=0x0|this[_0x4a9c('0x3e1')];return 0x0===_0x185560?'':0x0===arguments[_0x4a9c('0x3e1')]?_0x1e0ee9(this,0x0,_0x185560):function(_0x5b5ab3,_0x5712b8,_0x310aca){var _0xb6f563=!0x1;if((void 0x0===_0x5712b8||_0x5712b8<0x0)&&(_0x5712b8=0x0),_0x5712b8>this[_0x4a9c('0x3e1')])return'';if((void 0x0===_0x310aca||_0x310aca>this[_0x4a9c('0x3e1')])&&(_0x310aca=this[_0x4a9c('0x3e1')]),_0x310aca<=0x0)return'';if((_0x310aca>>>=0x0)<=(_0x5712b8>>>=0x0))return'';for(_0x5b5ab3||(_0x5b5ab3=_0x4a9c('0x655'));;)switch(_0x5b5ab3){case _0x4a9c('0x456'):return _0x50db78(this,_0x5712b8,_0x310aca);case _0x4a9c('0x655'):case'utf-8':return _0x1e0ee9(this,_0x5712b8,_0x310aca);case _0x4a9c('0x313'):return _0x1571f1(this,_0x5712b8,_0x310aca);case'latin1':case _0x4a9c('0x237'):return _0x54fa93(this,_0x5712b8,_0x310aca);case'base64':return _0x1d3a1c(this,_0x5712b8,_0x310aca);case _0x4a9c('0x726'):case _0x4a9c('0x757'):case _0x4a9c('0x248'):case'utf-16le':return _0x408953(this,_0x5712b8,_0x310aca);default:if(_0xb6f563)throw new TypeError(_0x4a9c('0x320')+_0x5b5ab3);_0x5b5ab3=(_0x5b5ab3+'')[_0x4a9c('0x5c2')](),_0xb6f563=!0x0;}}[_0x4a9c('0x635')](this,arguments);},_0x4cf28b['prototype']['equals']=function(_0x246ffa){if(!_0x4cf28b['isBuffer'](_0x246ffa))throw new TypeError('Argument\x20must\x20be\x20a\x20Buffer');return this===_0x246ffa||0x0===_0x4cf28b[_0x4a9c('0x231')](this,_0x246ffa);},_0x4cf28b['prototype']['inspect']=function(){var _0x18a15e='',_0x315b8e=_0x39d9af[_0x4a9c('0xdc')];return this[_0x4a9c('0x3e1')]>0x0&&(_0x18a15e=this[_0x4a9c('0x1c1')](_0x4a9c('0x456'),0x0,_0x315b8e)[_0x4a9c('0x3d8')](/.{2}/g)[_0x4a9c('0x64d')]('\x20'),this[_0x4a9c('0x3e1')]>_0x315b8e&&(_0x18a15e+=_0x4a9c('0x4ba'))),_0x4a9c('0x782')+_0x18a15e+'>';},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x231')]=function(_0x23f6be,_0x2e37af,_0x3cc647,_0x44cdcb,_0x4b020b){if(!_0x4cf28b['isBuffer'](_0x23f6be))throw new TypeError('Argument\x20must\x20be\x20a\x20Buffer');if(void 0x0===_0x2e37af&&(_0x2e37af=0x0),void 0x0===_0x3cc647&&(_0x3cc647=_0x23f6be?_0x23f6be[_0x4a9c('0x3e1')]:0x0),void 0x0===_0x44cdcb&&(_0x44cdcb=0x0),void 0x0===_0x4b020b&&(_0x4b020b=this[_0x4a9c('0x3e1')]),_0x2e37af<0x0||_0x3cc647>_0x23f6be[_0x4a9c('0x3e1')]||_0x44cdcb<0x0||_0x4b020b>this[_0x4a9c('0x3e1')])throw new RangeError('out\x20of\x20range\x20index');if(_0x44cdcb>=_0x4b020b&&_0x2e37af>=_0x3cc647)return 0x0;if(_0x44cdcb>=_0x4b020b)return-0x1;if(_0x2e37af>=_0x3cc647)return 0x1;if(this===_0x23f6be)return 0x0;for(var _0x4cd13b=(_0x4b020b>>>=0x0)-(_0x44cdcb>>>=0x0),_0x5dd677=(_0x3cc647>>>=0x0)-(_0x2e37af>>>=0x0),_0x5523d3=Math[_0x4a9c('0xe8')](_0x4cd13b,_0x5dd677),_0x346088=this[_0x4a9c('0x14')](_0x44cdcb,_0x4b020b),_0x15187=_0x23f6be['slice'](_0x2e37af,_0x3cc647),_0x3a1d87=0x0;_0x3a1d87<_0x5523d3;++_0x3a1d87)if(_0x346088[_0x3a1d87]!==_0x15187[_0x3a1d87]){_0x4cd13b=_0x346088[_0x3a1d87],_0x5dd677=_0x15187[_0x3a1d87];break;}return _0x4cd13b<_0x5dd677?-0x1:_0x5dd677<_0x4cd13b?0x1:0x0;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x7d8')]=function(_0x2eebb2,_0x357fe0,_0x5d211e){return-0x1!==this[_0x4a9c('0x312')](_0x2eebb2,_0x357fe0,_0x5d211e);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x312')]=function(_0x41d3a1,_0x276800,_0x5b3f52){return _0x4be53b(this,_0x41d3a1,_0x276800,_0x5b3f52,!0x0);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x591')]=function(_0x30c2ee,_0x5546ff,_0x4642fc){return _0x4be53b(this,_0x30c2ee,_0x5546ff,_0x4642fc,!0x1);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x60f')]=function(_0x1e8a5b,_0x295663,_0x1a2525,_0xd6b9ad){if(void 0x0===_0x295663)_0xd6b9ad=_0x4a9c('0x655'),_0x1a2525=this[_0x4a9c('0x3e1')],_0x295663=0x0;else if(void 0x0===_0x1a2525&&_0x4a9c('0x290')==typeof _0x295663)_0xd6b9ad=_0x295663,_0x1a2525=this[_0x4a9c('0x3e1')],_0x295663=0x0;else{if(!isFinite(_0x295663))throw new Error(_0x4a9c('0x615'));_0x295663|=0x0,isFinite(_0x1a2525)?(_0x1a2525|=0x0,void 0x0===_0xd6b9ad&&(_0xd6b9ad=_0x4a9c('0x655'))):(_0xd6b9ad=_0x1a2525,_0x1a2525=void 0x0);}var _0x331e61=this[_0x4a9c('0x3e1')]-_0x295663;if((void 0x0===_0x1a2525||_0x1a2525>_0x331e61)&&(_0x1a2525=_0x331e61),_0x1e8a5b[_0x4a9c('0x3e1')]>0x0&&(_0x1a2525<0x0||_0x295663<0x0)||_0x295663>this[_0x4a9c('0x3e1')])throw new RangeError(_0x4a9c('0x592'));_0xd6b9ad||(_0xd6b9ad=_0x4a9c('0x655'));for(var _0x48c567=!0x1;;)switch(_0xd6b9ad){case _0x4a9c('0x456'):return _0x475dab(this,_0x1e8a5b,_0x295663,_0x1a2525);case _0x4a9c('0x655'):case _0x4a9c('0xa8'):return _0x56274b(this,_0x1e8a5b,_0x295663,_0x1a2525);case _0x4a9c('0x313'):return _0x58954f(this,_0x1e8a5b,_0x295663,_0x1a2525);case _0x4a9c('0x3d9'):case _0x4a9c('0x237'):return _0x44e2ef(this,_0x1e8a5b,_0x295663,_0x1a2525);case _0x4a9c('0xf5'):return _0x1fa48a(this,_0x1e8a5b,_0x295663,_0x1a2525);case _0x4a9c('0x726'):case _0x4a9c('0x757'):case _0x4a9c('0x248'):case _0x4a9c('0x28'):return _0x4aaf30(this,_0x1e8a5b,_0x295663,_0x1a2525);default:if(_0x48c567)throw new TypeError(_0x4a9c('0x320')+_0xd6b9ad);_0xd6b9ad=(''+_0xd6b9ad)[_0x4a9c('0x5c2')](),_0x48c567=!0x0;}},_0x4cf28b['prototype'][_0x4a9c('0x435')]=function(){return{'type':_0x4a9c('0x3df'),'data':Array[_0x4a9c('0x216')][_0x4a9c('0x14')][_0x4a9c('0xc3')](this[_0x4a9c('0x728')]||this,0x0)};};var _0x23e488=0x1000;function _0x1571f1(_0x122a82,_0x366071,_0x57f174){var _0x5ebbaf='';_0x57f174=Math[_0x4a9c('0xe8')](_0x122a82[_0x4a9c('0x3e1')],_0x57f174);for(var _0x15b80f=_0x366071;_0x15b80f<_0x57f174;++_0x15b80f)_0x5ebbaf+=String[_0x4a9c('0x3b9')](0x7f&_0x122a82[_0x15b80f]);return _0x5ebbaf;}function _0x54fa93(_0xa656ab,_0x54dbb8,_0x13aef1){var _0x29bb74='';_0x13aef1=Math[_0x4a9c('0xe8')](_0xa656ab[_0x4a9c('0x3e1')],_0x13aef1);for(var _0x20b72b=_0x54dbb8;_0x20b72b<_0x13aef1;++_0x20b72b)_0x29bb74+=String[_0x4a9c('0x3b9')](_0xa656ab[_0x20b72b]);return _0x29bb74;}function _0x50db78(_0x52d4f6,_0x3fb554,_0x4937ba){var _0x43a5b4=_0x52d4f6[_0x4a9c('0x3e1')];(!_0x3fb554||_0x3fb554<0x0)&&(_0x3fb554=0x0),(!_0x4937ba||_0x4937ba<0x0||_0x4937ba>_0x43a5b4)&&(_0x4937ba=_0x43a5b4);for(var _0x42e93a='',_0x18e327=_0x3fb554;_0x18e327<_0x4937ba;++_0x18e327)_0x42e93a+=_0x5b2006(_0x52d4f6[_0x18e327]);return _0x42e93a;}function _0x408953(_0x13ce4a,_0x5312e3,_0x1fc757){for(var _0x325997=_0x13ce4a[_0x4a9c('0x14')](_0x5312e3,_0x1fc757),_0x17954d='',_0x46973a=0x0;_0x46973a<_0x325997[_0x4a9c('0x3e1')];_0x46973a+=0x2)_0x17954d+=String[_0x4a9c('0x3b9')](_0x325997[_0x46973a]+0x100*_0x325997[_0x46973a+0x1]);return _0x17954d;}function _0x125783(_0x152354,_0x32282d,_0x1e8ce8){if(_0x152354%0x1!=0x0||_0x152354<0x0)throw new RangeError(_0x4a9c('0x172'));if(_0x152354+_0x32282d>_0x1e8ce8)throw new RangeError(_0x4a9c('0x38b'));}function _0x3d0da9(_0x37fed6,_0x5774a5,_0x1bf011,_0x205e35,_0x1d4a39,_0x23ef64){if(!_0x4cf28b[_0x4a9c('0x37a')](_0x37fed6))throw new TypeError(_0x4a9c('0x2e7'));if(_0x5774a5>_0x1d4a39||_0x5774a5<_0x23ef64)throw new RangeError(_0x4a9c('0x531'));if(_0x1bf011+_0x205e35>_0x37fed6[_0x4a9c('0x3e1')])throw new RangeError(_0x4a9c('0x480'));}function _0x3050f2(_0x2070c8,_0x461e88,_0x2791cb,_0x5e251e){_0x461e88<0x0&&(_0x461e88=0xffff+_0x461e88+0x1);for(var _0x45cf15=0x0,_0x40fe80=Math[_0x4a9c('0xe8')](_0x2070c8[_0x4a9c('0x3e1')]-_0x2791cb,0x2);_0x45cf15<_0x40fe80;++_0x45cf15)_0x2070c8[_0x2791cb+_0x45cf15]=(_0x461e88&0xff<<0x8*(_0x5e251e?_0x45cf15:0x1-_0x45cf15))>>>0x8*(_0x5e251e?_0x45cf15:0x1-_0x45cf15);}function _0x347c4b(_0x52199e,_0x113aa3,_0x3183d3,_0x2f647a){_0x113aa3<0x0&&(_0x113aa3=0xffffffff+_0x113aa3+0x1);for(var _0x43e954=0x0,_0x4ff7b2=Math[_0x4a9c('0xe8')](_0x52199e[_0x4a9c('0x3e1')]-_0x3183d3,0x4);_0x43e954<_0x4ff7b2;++_0x43e954)_0x52199e[_0x3183d3+_0x43e954]=_0x113aa3>>>0x8*(_0x2f647a?_0x43e954:0x3-_0x43e954)&0xff;}function _0x3cc05f(_0x443a84,_0x5e10b5,_0x56f866,_0x39f51b,_0x3ba84a,_0x5ac04e){if(_0x56f866+_0x39f51b>_0x443a84[_0x4a9c('0x3e1')])throw new RangeError(_0x4a9c('0x480'));if(_0x56f866<0x0)throw new RangeError('Index\x20out\x20of\x20range');}function _0x4b6e8d(_0x17e888,_0x530de6,_0x58e248,_0xa4b0e8,_0x73acd4){return _0x73acd4||_0x3cc05f(_0x17e888,0x0,_0x58e248,0x4),_0x51356e[_0x4a9c('0x60f')](_0x17e888,_0x530de6,_0x58e248,_0xa4b0e8,0x17,0x4),_0x58e248+0x4;}function _0x3e5096(_0x52482f,_0x4d20e7,_0x1bd79e,_0x324bfa,_0x47c78b){return _0x47c78b||_0x3cc05f(_0x52482f,0x0,_0x1bd79e,0x8),_0x51356e[_0x4a9c('0x60f')](_0x52482f,_0x4d20e7,_0x1bd79e,_0x324bfa,0x34,0x8),_0x1bd79e+0x8;}_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x14')]=function(_0x547fc6,_0x656673){var _0x3e34c8,_0x543be6=this[_0x4a9c('0x3e1')];if((_0x547fc6=~~_0x547fc6)<0x0?(_0x547fc6+=_0x543be6)<0x0&&(_0x547fc6=0x0):_0x547fc6>_0x543be6&&(_0x547fc6=_0x543be6),(_0x656673=void 0x0===_0x656673?_0x543be6:~~_0x656673)<0x0?(_0x656673+=_0x543be6)<0x0&&(_0x656673=0x0):_0x656673>_0x543be6&&(_0x656673=_0x543be6),_0x656673<_0x547fc6&&(_0x656673=_0x547fc6),_0x4cf28b[_0x4a9c('0x270')])(_0x3e34c8=this[_0x4a9c('0x20d')](_0x547fc6,_0x656673))['__proto__']=_0x4cf28b[_0x4a9c('0x216')];else{var _0x58516a=_0x656673-_0x547fc6;_0x3e34c8=new _0x4cf28b(_0x58516a,void 0x0);for(var _0x322716=0x0;_0x322716<_0x58516a;++_0x322716)_0x3e34c8[_0x322716]=this[_0x322716+_0x547fc6];}return _0x3e34c8;},_0x4cf28b['prototype']['readUIntLE']=function(_0x53b77b,_0x27f5c5,_0x521872){_0x53b77b|=0x0,_0x27f5c5|=0x0,_0x521872||_0x125783(_0x53b77b,_0x27f5c5,this['length']);for(var _0x5b63ff=this[_0x53b77b],_0x5a8433=0x1,_0x30bc56=0x0;++_0x30bc56<_0x27f5c5&&(_0x5a8433*=0x100);)_0x5b63ff+=this[_0x53b77b+_0x30bc56]*_0x5a8433;return _0x5b63ff;},_0x4cf28b[_0x4a9c('0x216')]['readUIntBE']=function(_0x1df497,_0x4a63ba,_0x224eb1){_0x1df497|=0x0,_0x4a63ba|=0x0,_0x224eb1||_0x125783(_0x1df497,_0x4a63ba,this[_0x4a9c('0x3e1')]);for(var _0xc8a945=this[_0x1df497+--_0x4a63ba],_0x426c32=0x1;_0x4a63ba>0x0&&(_0x426c32*=0x100);)_0xc8a945+=this[_0x1df497+--_0x4a63ba]*_0x426c32;return _0xc8a945;},_0x4cf28b[_0x4a9c('0x216')]['readUInt8']=function(_0x125d13,_0x134f03){return _0x134f03||_0x125783(_0x125d13,0x1,this[_0x4a9c('0x3e1')]),this[_0x125d13];},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x12c')]=function(_0xbdd471,_0x3845a7){return _0x3845a7||_0x125783(_0xbdd471,0x2,this['length']),this[_0xbdd471]|this[_0xbdd471+0x1]<<0x8;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x4c2')]=function(_0x593cf4,_0x1b2e1e){return _0x1b2e1e||_0x125783(_0x593cf4,0x2,this['length']),this[_0x593cf4]<<0x8|this[_0x593cf4+0x1];},_0x4cf28b['prototype'][_0x4a9c('0x35c')]=function(_0x147831,_0x53997b){return _0x53997b||_0x125783(_0x147831,0x4,this[_0x4a9c('0x3e1')]),(this[_0x147831]|this[_0x147831+0x1]<<0x8|this[_0x147831+0x2]<<0x10)+0x1000000*this[_0x147831+0x3];},_0x4cf28b['prototype'][_0x4a9c('0x463')]=function(_0xdea246,_0x290807){return _0x290807||_0x125783(_0xdea246,0x4,this[_0x4a9c('0x3e1')]),0x1000000*this[_0xdea246]+(this[_0xdea246+0x1]<<0x10|this[_0xdea246+0x2]<<0x8|this[_0xdea246+0x3]);},_0x4cf28b['prototype'][_0x4a9c('0x63d')]=function(_0x59bc7f,_0x48d4c6,_0x15309f){_0x59bc7f|=0x0,_0x48d4c6|=0x0,_0x15309f||_0x125783(_0x59bc7f,_0x48d4c6,this[_0x4a9c('0x3e1')]);for(var _0x24b1c5=this[_0x59bc7f],_0x14739b=0x1,_0x4e7ccd=0x0;++_0x4e7ccd<_0x48d4c6&&(_0x14739b*=0x100);)_0x24b1c5+=this[_0x59bc7f+_0x4e7ccd]*_0x14739b;return _0x24b1c5>=(_0x14739b*=0x80)&&(_0x24b1c5-=Math[_0x4a9c('0x555')](0x2,0x8*_0x48d4c6)),_0x24b1c5;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x631')]=function(_0x347059,_0x41e52a,_0x10e36c){_0x347059|=0x0,_0x41e52a|=0x0,_0x10e36c||_0x125783(_0x347059,_0x41e52a,this[_0x4a9c('0x3e1')]);for(var _0x214830=_0x41e52a,_0xbc1791=0x1,_0x2230e5=this[_0x347059+--_0x214830];_0x214830>0x0&&(_0xbc1791*=0x100);)_0x2230e5+=this[_0x347059+--_0x214830]*_0xbc1791;return _0x2230e5>=(_0xbc1791*=0x80)&&(_0x2230e5-=Math[_0x4a9c('0x555')](0x2,0x8*_0x41e52a)),_0x2230e5;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x31a')]=function(_0x2139e6,_0x48a100){return _0x48a100||_0x125783(_0x2139e6,0x1,this['length']),0x80&this[_0x2139e6]?-0x1*(0xff-this[_0x2139e6]+0x1):this[_0x2139e6];},_0x4cf28b['prototype'][_0x4a9c('0x86')]=function(_0x1a5a3b,_0x4c0e16){_0x4c0e16||_0x125783(_0x1a5a3b,0x2,this[_0x4a9c('0x3e1')]);var _0x56bffc=this[_0x1a5a3b]|this[_0x1a5a3b+0x1]<<0x8;return 0x8000&_0x56bffc?0xffff0000|_0x56bffc:_0x56bffc;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x764')]=function(_0x2aaaf2,_0x63b38a){_0x63b38a||_0x125783(_0x2aaaf2,0x2,this[_0x4a9c('0x3e1')]);var _0x46c30c=this[_0x2aaaf2+0x1]|this[_0x2aaaf2]<<0x8;return 0x8000&_0x46c30c?0xffff0000|_0x46c30c:_0x46c30c;},_0x4cf28b[_0x4a9c('0x216')]['readInt32LE']=function(_0x4c9f2c,_0x5d292e){return _0x5d292e||_0x125783(_0x4c9f2c,0x4,this[_0x4a9c('0x3e1')]),this[_0x4c9f2c]|this[_0x4c9f2c+0x1]<<0x8|this[_0x4c9f2c+0x2]<<0x10|this[_0x4c9f2c+0x3]<<0x18;},_0x4cf28b[_0x4a9c('0x216')]['readInt32BE']=function(_0x252ecf,_0x4baa5b){return _0x4baa5b||_0x125783(_0x252ecf,0x4,this['length']),this[_0x252ecf]<<0x18|this[_0x252ecf+0x1]<<0x10|this[_0x252ecf+0x2]<<0x8|this[_0x252ecf+0x3];},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x65b')]=function(_0x1753aa,_0x3a0dec){return _0x3a0dec||_0x125783(_0x1753aa,0x4,this[_0x4a9c('0x3e1')]),_0x51356e[_0x4a9c('0x373')](this,_0x1753aa,!0x0,0x17,0x4);},_0x4cf28b['prototype']['readFloatBE']=function(_0x3e6746,_0x52067b){return _0x52067b||_0x125783(_0x3e6746,0x4,this[_0x4a9c('0x3e1')]),_0x51356e[_0x4a9c('0x373')](this,_0x3e6746,!0x1,0x17,0x4);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x59b')]=function(_0x37dee9,_0x253d92){return _0x253d92||_0x125783(_0x37dee9,0x8,this[_0x4a9c('0x3e1')]),_0x51356e[_0x4a9c('0x373')](this,_0x37dee9,!0x0,0x34,0x8);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x31')]=function(_0x5171ec,_0x154216){return _0x154216||_0x125783(_0x5171ec,0x8,this[_0x4a9c('0x3e1')]),_0x51356e[_0x4a9c('0x373')](this,_0x5171ec,!0x1,0x34,0x8);},_0x4cf28b[_0x4a9c('0x216')]['writeUIntLE']=function(_0x48f6ee,_0x4ff153,_0x433127,_0x232ad2){_0x48f6ee=+_0x48f6ee,_0x4ff153|=0x0,_0x433127|=0x0,_0x232ad2||_0x3d0da9(this,_0x48f6ee,_0x4ff153,_0x433127,Math[_0x4a9c('0x555')](0x2,0x8*_0x433127)-0x1,0x0);var _0x4f1b7b=0x1,_0x10e3ba=0x0;for(this[_0x4ff153]=0xff&_0x48f6ee;++_0x10e3ba<_0x433127&&(_0x4f1b7b*=0x100);)this[_0x4ff153+_0x10e3ba]=_0x48f6ee/_0x4f1b7b&0xff;return _0x4ff153+_0x433127;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x4d8')]=function(_0x303d47,_0x5304be,_0x97d9bf,_0x1564ab){_0x303d47=+_0x303d47,_0x5304be|=0x0,_0x97d9bf|=0x0,_0x1564ab||_0x3d0da9(this,_0x303d47,_0x5304be,_0x97d9bf,Math[_0x4a9c('0x555')](0x2,0x8*_0x97d9bf)-0x1,0x0);var _0x32c455=_0x97d9bf-0x1,_0x318ada=0x1;for(this[_0x5304be+_0x32c455]=0xff&_0x303d47;--_0x32c455>=0x0&&(_0x318ada*=0x100);)this[_0x5304be+_0x32c455]=_0x303d47/_0x318ada&0xff;return _0x5304be+_0x97d9bf;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x2f')]=function(_0x1f044e,_0x1173ef,_0x23e69a){return _0x1f044e=+_0x1f044e,_0x1173ef|=0x0,_0x23e69a||_0x3d0da9(this,_0x1f044e,_0x1173ef,0x1,0xff,0x0),_0x4cf28b[_0x4a9c('0x270')]||(_0x1f044e=Math[_0x4a9c('0xa9')](_0x1f044e)),this[_0x1173ef]=0xff&_0x1f044e,_0x1173ef+0x1;},_0x4cf28b['prototype'][_0x4a9c('0x25f')]=function(_0x1240ce,_0x596acf,_0x15a0ee){return _0x1240ce=+_0x1240ce,_0x596acf|=0x0,_0x15a0ee||_0x3d0da9(this,_0x1240ce,_0x596acf,0x2,0xffff,0x0),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x596acf]=0xff&_0x1240ce,this[_0x596acf+0x1]=_0x1240ce>>>0x8):_0x3050f2(this,_0x1240ce,_0x596acf,!0x0),_0x596acf+0x2;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x1db')]=function(_0x43096d,_0x1878f9,_0x36c64f){return _0x43096d=+_0x43096d,_0x1878f9|=0x0,_0x36c64f||_0x3d0da9(this,_0x43096d,_0x1878f9,0x2,0xffff,0x0),_0x4cf28b['TYPED_ARRAY_SUPPORT']?(this[_0x1878f9]=_0x43096d>>>0x8,this[_0x1878f9+0x1]=0xff&_0x43096d):_0x3050f2(this,_0x43096d,_0x1878f9,!0x1),_0x1878f9+0x2;},_0x4cf28b['prototype'][_0x4a9c('0x746')]=function(_0x170480,_0x23f4f5,_0x4d3881){return _0x170480=+_0x170480,_0x23f4f5|=0x0,_0x4d3881||_0x3d0da9(this,_0x170480,_0x23f4f5,0x4,0xffffffff,0x0),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x23f4f5+0x3]=_0x170480>>>0x18,this[_0x23f4f5+0x2]=_0x170480>>>0x10,this[_0x23f4f5+0x1]=_0x170480>>>0x8,this[_0x23f4f5]=0xff&_0x170480):_0x347c4b(this,_0x170480,_0x23f4f5,!0x0),_0x23f4f5+0x4;},_0x4cf28b['prototype'][_0x4a9c('0x63f')]=function(_0x3da791,_0x55ab54,_0x1e48f3){return _0x3da791=+_0x3da791,_0x55ab54|=0x0,_0x1e48f3||_0x3d0da9(this,_0x3da791,_0x55ab54,0x4,0xffffffff,0x0),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x55ab54]=_0x3da791>>>0x18,this[_0x55ab54+0x1]=_0x3da791>>>0x10,this[_0x55ab54+0x2]=_0x3da791>>>0x8,this[_0x55ab54+0x3]=0xff&_0x3da791):_0x347c4b(this,_0x3da791,_0x55ab54,!0x1),_0x55ab54+0x4;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x2ff')]=function(_0x10d572,_0x16372c,_0x3bbf1a,_0x3758f3){if(_0x10d572=+_0x10d572,_0x16372c|=0x0,!_0x3758f3){var _0x18117b=Math[_0x4a9c('0x555')](0x2,0x8*_0x3bbf1a-0x1);_0x3d0da9(this,_0x10d572,_0x16372c,_0x3bbf1a,_0x18117b-0x1,-_0x18117b);}var _0x43eef7=0x0,_0x110f1d=0x1,_0x4de376=0x0;for(this[_0x16372c]=0xff&_0x10d572;++_0x43eef7<_0x3bbf1a&&(_0x110f1d*=0x100);)_0x10d572<0x0&&0x0===_0x4de376&&0x0!==this[_0x16372c+_0x43eef7-0x1]&&(_0x4de376=0x1),this[_0x16372c+_0x43eef7]=(_0x10d572/_0x110f1d>>0x0)-_0x4de376&0xff;return _0x16372c+_0x3bbf1a;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x66f')]=function(_0x1e240a,_0x5d8d9a,_0x18ac7b,_0x217daa){if(_0x1e240a=+_0x1e240a,_0x5d8d9a|=0x0,!_0x217daa){var _0x33694e=Math[_0x4a9c('0x555')](0x2,0x8*_0x18ac7b-0x1);_0x3d0da9(this,_0x1e240a,_0x5d8d9a,_0x18ac7b,_0x33694e-0x1,-_0x33694e);}var _0x5b660c=_0x18ac7b-0x1,_0x48ec67=0x1,_0x35bfb5=0x0;for(this[_0x5d8d9a+_0x5b660c]=0xff&_0x1e240a;--_0x5b660c>=0x0&&(_0x48ec67*=0x100);)_0x1e240a<0x0&&0x0===_0x35bfb5&&0x0!==this[_0x5d8d9a+_0x5b660c+0x1]&&(_0x35bfb5=0x1),this[_0x5d8d9a+_0x5b660c]=(_0x1e240a/_0x48ec67>>0x0)-_0x35bfb5&0xff;return _0x5d8d9a+_0x18ac7b;},_0x4cf28b['prototype'][_0x4a9c('0x5af')]=function(_0x232a54,_0x320ec6,_0x18fc17){return _0x232a54=+_0x232a54,_0x320ec6|=0x0,_0x18fc17||_0x3d0da9(this,_0x232a54,_0x320ec6,0x1,0x7f,-0x80),_0x4cf28b[_0x4a9c('0x270')]||(_0x232a54=Math[_0x4a9c('0xa9')](_0x232a54)),_0x232a54<0x0&&(_0x232a54=0xff+_0x232a54+0x1),this[_0x320ec6]=0xff&_0x232a54,_0x320ec6+0x1;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x2f8')]=function(_0x31d1f5,_0x3aac19,_0x1f7266){return _0x31d1f5=+_0x31d1f5,_0x3aac19|=0x0,_0x1f7266||_0x3d0da9(this,_0x31d1f5,_0x3aac19,0x2,0x7fff,-0x8000),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x3aac19]=0xff&_0x31d1f5,this[_0x3aac19+0x1]=_0x31d1f5>>>0x8):_0x3050f2(this,_0x31d1f5,_0x3aac19,!0x0),_0x3aac19+0x2;},_0x4cf28b[_0x4a9c('0x216')]['writeInt16BE']=function(_0x7d4c76,_0x2e4181,_0x16d281){return _0x7d4c76=+_0x7d4c76,_0x2e4181|=0x0,_0x16d281||_0x3d0da9(this,_0x7d4c76,_0x2e4181,0x2,0x7fff,-0x8000),_0x4cf28b['TYPED_ARRAY_SUPPORT']?(this[_0x2e4181]=_0x7d4c76>>>0x8,this[_0x2e4181+0x1]=0xff&_0x7d4c76):_0x3050f2(this,_0x7d4c76,_0x2e4181,!0x1),_0x2e4181+0x2;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x69d')]=function(_0x3a1d44,_0x5a85af,_0x2c0908){return _0x3a1d44=+_0x3a1d44,_0x5a85af|=0x0,_0x2c0908||_0x3d0da9(this,_0x3a1d44,_0x5a85af,0x4,0x7fffffff,-0x80000000),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x5a85af]=0xff&_0x3a1d44,this[_0x5a85af+0x1]=_0x3a1d44>>>0x8,this[_0x5a85af+0x2]=_0x3a1d44>>>0x10,this[_0x5a85af+0x3]=_0x3a1d44>>>0x18):_0x347c4b(this,_0x3a1d44,_0x5a85af,!0x0),_0x5a85af+0x4;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x181')]=function(_0x1defa6,_0x556c2a,_0x2aa3f8){return _0x1defa6=+_0x1defa6,_0x556c2a|=0x0,_0x2aa3f8||_0x3d0da9(this,_0x1defa6,_0x556c2a,0x4,0x7fffffff,-0x80000000),_0x1defa6<0x0&&(_0x1defa6=0xffffffff+_0x1defa6+0x1),_0x4cf28b[_0x4a9c('0x270')]?(this[_0x556c2a]=_0x1defa6>>>0x18,this[_0x556c2a+0x1]=_0x1defa6>>>0x10,this[_0x556c2a+0x2]=_0x1defa6>>>0x8,this[_0x556c2a+0x3]=0xff&_0x1defa6):_0x347c4b(this,_0x1defa6,_0x556c2a,!0x1),_0x556c2a+0x4;},_0x4cf28b['prototype'][_0x4a9c('0x3c7')]=function(_0x36a305,_0x205d1f,_0x1c2bbc){return _0x4b6e8d(this,_0x36a305,_0x205d1f,!0x0,_0x1c2bbc);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x61b')]=function(_0xe40aba,_0x19e896,_0x3e38bc){return _0x4b6e8d(this,_0xe40aba,_0x19e896,!0x1,_0x3e38bc);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x5c')]=function(_0x3a78c2,_0x17b2ec,_0x360631){return _0x3e5096(this,_0x3a78c2,_0x17b2ec,!0x0,_0x360631);},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0xeb')]=function(_0x1a0b32,_0x44a001,_0x2f7659){return _0x3e5096(this,_0x1a0b32,_0x44a001,!0x1,_0x2f7659);},_0x4cf28b['prototype']['copy']=function(_0x3277c4,_0x10f7a6,_0x4f8944,_0x1e719d){if(_0x4f8944||(_0x4f8944=0x0),_0x1e719d||0x0===_0x1e719d||(_0x1e719d=this['length']),_0x10f7a6>=_0x3277c4[_0x4a9c('0x3e1')]&&(_0x10f7a6=_0x3277c4[_0x4a9c('0x3e1')]),_0x10f7a6||(_0x10f7a6=0x0),_0x1e719d>0x0&&_0x1e719d<_0x4f8944&&(_0x1e719d=_0x4f8944),_0x1e719d===_0x4f8944)return 0x0;if(0x0===_0x3277c4[_0x4a9c('0x3e1')]||0x0===this[_0x4a9c('0x3e1')])return 0x0;if(_0x10f7a6<0x0)throw new RangeError(_0x4a9c('0x735'));if(_0x4f8944<0x0||_0x4f8944>=this[_0x4a9c('0x3e1')])throw new RangeError(_0x4a9c('0x10d'));if(_0x1e719d<0x0)throw new RangeError(_0x4a9c('0x717'));_0x1e719d>this[_0x4a9c('0x3e1')]&&(_0x1e719d=this['length']),_0x3277c4[_0x4a9c('0x3e1')]-_0x10f7a6<_0x1e719d-_0x4f8944&&(_0x1e719d=_0x3277c4[_0x4a9c('0x3e1')]-_0x10f7a6+_0x4f8944);var _0x1506d1,_0x576dd2=_0x1e719d-_0x4f8944;if(this===_0x3277c4&&_0x4f8944<_0x10f7a6&&_0x10f7a6<_0x1e719d)for(_0x1506d1=_0x576dd2-0x1;_0x1506d1>=0x0;--_0x1506d1)_0x3277c4[_0x1506d1+_0x10f7a6]=this[_0x1506d1+_0x4f8944];else if(_0x576dd2<0x3e8||!_0x4cf28b[_0x4a9c('0x270')])for(_0x1506d1=0x0;_0x1506d1<_0x576dd2;++_0x1506d1)_0x3277c4[_0x1506d1+_0x10f7a6]=this[_0x1506d1+_0x4f8944];else Uint8Array[_0x4a9c('0x216')][_0x4a9c('0x193')][_0x4a9c('0xc3')](_0x3277c4,this[_0x4a9c('0x20d')](_0x4f8944,_0x4f8944+_0x576dd2),_0x10f7a6);return _0x576dd2;},_0x4cf28b[_0x4a9c('0x216')][_0x4a9c('0x702')]=function(_0xc2922,_0x2ca6df,_0x1701b6,_0x23d921){if(_0x4a9c('0x290')==typeof _0xc2922){if('string'==typeof _0x2ca6df?(_0x23d921=_0x2ca6df,_0x2ca6df=0x0,_0x1701b6=this[_0x4a9c('0x3e1')]):_0x4a9c('0x290')==typeof _0x1701b6&&(_0x23d921=_0x1701b6,_0x1701b6=this[_0x4a9c('0x3e1')]),0x1===_0xc2922[_0x4a9c('0x3e1')]){var _0x1c42f7=_0xc2922[_0x4a9c('0x611')](0x0);_0x1c42f7<0x100&&(_0xc2922=_0x1c42f7);}if(void 0x0!==_0x23d921&&_0x4a9c('0x290')!=typeof _0x23d921)throw new TypeError('encoding\x20must\x20be\x20a\x20string');if(_0x4a9c('0x290')==typeof _0x23d921&&!_0x4cf28b['isEncoding'](_0x23d921))throw new TypeError('Unknown\x20encoding:\x20'+_0x23d921);}else _0x4a9c('0x27')==typeof _0xc2922&&(_0xc2922&=0xff);if(_0x2ca6df<0x0||this[_0x4a9c('0x3e1')]<_0x2ca6df||this['length']<_0x1701b6)throw new RangeError('Out\x20of\x20range\x20index');if(_0x1701b6<=_0x2ca6df)return this;var _0x206a8f;if(_0x2ca6df>>>=0x0,_0x1701b6=void 0x0===_0x1701b6?this[_0x4a9c('0x3e1')]:_0x1701b6>>>0x0,_0xc2922||(_0xc2922=0x0),_0x4a9c('0x27')==typeof _0xc2922)for(_0x206a8f=_0x2ca6df;_0x206a8f<_0x1701b6;++_0x206a8f)this[_0x206a8f]=_0xc2922;else{var _0x15e215=_0x4cf28b['isBuffer'](_0xc2922)?_0xc2922:_0x11b8b2(new _0x4cf28b(_0xc2922,_0x23d921)['toString']()),_0x2e3055=_0x15e215[_0x4a9c('0x3e1')];for(_0x206a8f=0x0;_0x206a8f<_0x1701b6-_0x2ca6df;++_0x206a8f)this[_0x206a8f+_0x2ca6df]=_0x15e215[_0x206a8f%_0x2e3055];}return this;};var _0x283aaf=/[^+\/0-9A-Za-z-_]/g;function _0x5b2006(_0x9ade0b){return _0x9ade0b<0x10?'0'+_0x9ade0b[_0x4a9c('0x1c1')](0x10):_0x9ade0b[_0x4a9c('0x1c1')](0x10);}function _0x11b8b2(_0x5e74e1,_0x1ac8c8){var _0x18f34e;_0x1ac8c8=_0x1ac8c8||0x1/0x0;for(var _0x387b94=_0x5e74e1[_0x4a9c('0x3e1')],_0x1917e3=null,_0x36ca4a=[],_0x48b409=0x0;_0x48b409<_0x387b94;++_0x48b409){if((_0x18f34e=_0x5e74e1[_0x4a9c('0x611')](_0x48b409))>0xd7ff&&_0x18f34e<0xe000){if(!_0x1917e3){if(_0x18f34e>0xdbff){(_0x1ac8c8-=0x3)>-0x1&&_0x36ca4a[_0x4a9c('0x2d2')](0xef,0xbf,0xbd);continue;}if(_0x48b409+0x1===_0x387b94){(_0x1ac8c8-=0x3)>-0x1&&_0x36ca4a[_0x4a9c('0x2d2')](0xef,0xbf,0xbd);continue;}_0x1917e3=_0x18f34e;continue;}if(_0x18f34e<0xdc00){(_0x1ac8c8-=0x3)>-0x1&&_0x36ca4a[_0x4a9c('0x2d2')](0xef,0xbf,0xbd),_0x1917e3=_0x18f34e;continue;}_0x18f34e=0x10000+(_0x1917e3-0xd800<<0xa|_0x18f34e-0xdc00);}else _0x1917e3&&(_0x1ac8c8-=0x3)>-0x1&&_0x36ca4a[_0x4a9c('0x2d2')](0xef,0xbf,0xbd);if(_0x1917e3=null,_0x18f34e<0x80){if((_0x1ac8c8-=0x1)<0x0)break;_0x36ca4a[_0x4a9c('0x2d2')](_0x18f34e);}else if(_0x18f34e<0x800){if((_0x1ac8c8-=0x2)<0x0)break;_0x36ca4a[_0x4a9c('0x2d2')](_0x18f34e>>0x6|0xc0,0x3f&_0x18f34e|0x80);}else if(_0x18f34e<0x10000){if((_0x1ac8c8-=0x3)<0x0)break;_0x36ca4a[_0x4a9c('0x2d2')](_0x18f34e>>0xc|0xe0,_0x18f34e>>0x6&0x3f|0x80,0x3f&_0x18f34e|0x80);}else{if(!(_0x18f34e<0x110000))throw new Error(_0x4a9c('0x5e2'));if((_0x1ac8c8-=0x4)<0x0)break;_0x36ca4a[_0x4a9c('0x2d2')](_0x18f34e>>0x12|0xf0,_0x18f34e>>0xc&0x3f|0x80,_0x18f34e>>0x6&0x3f|0x80,0x3f&_0x18f34e|0x80);}}return _0x36ca4a;}function _0x5ec3fa(_0x137a6b){return _0x3fa5f0[_0x4a9c('0x7b4')](function(_0x3f47cc){if((_0x3f47cc=function(_0x4c6b30){return _0x4c6b30[_0x4a9c('0x454')]?_0x4c6b30[_0x4a9c('0x454')]():_0x4c6b30[_0x4a9c('0x4e5')](/^\s+|\s+$/g,'');}(_0x3f47cc)[_0x4a9c('0x4e5')](_0x283aaf,''))['length']<0x2)return'';for(;_0x3f47cc[_0x4a9c('0x3e1')]%0x4!=0x0;)_0x3f47cc+='=';return _0x3f47cc;}(_0x137a6b));}function _0x4a9cc8(_0x48089a,_0x89b684,_0x49ef16,_0x45ff91){for(var _0x29fd47=0x0;_0x29fd47<_0x45ff91&&!(_0x29fd47+_0x49ef16>=_0x89b684[_0x4a9c('0x3e1')]||_0x29fd47>=_0x48089a[_0x4a9c('0x3e1')]);++_0x29fd47)_0x89b684[_0x29fd47+_0x49ef16]=_0x48089a[_0x29fd47];return _0x29fd47;}}[_0x4a9c('0xc3')](this,_0x315960(0xc)));},function(_0x48a545,_0x37ceb4){var _0x3c9a1a;_0x3c9a1a=function(){return this;}();try{_0x3c9a1a=_0x3c9a1a||new Function(_0x4a9c('0x6a'))();}catch(_0xffe853){_0x4a9c('0x554')==typeof window&&(_0x3c9a1a=window);}_0x48a545[_0x4a9c('0x14f')]=_0x3c9a1a;},function(_0x10e73e,_0x2b9b1d){for(var _0x203fd0=_0x2b9b1d[_0x4a9c('0x800')]=new Array(0x100),_0x329667=0x0;_0x329667<=0xff;_0x329667++)_0x203fd0[_0x329667]=_0x5df207(_0x329667);function _0x5df207(_0x523352){return function(_0x5987b0){var _0x56bca6=_0x5987b0['reserve'](0x1);_0x5987b0[_0x4a9c('0x5b')][_0x56bca6]=_0x523352;};}},function(_0x4858da,_0x1335fe,_0x11f333){_0x1335fe[_0x4a9c('0x75e')]=_0x47e025,_0x1335fe['FlexEncoder']=_0x3b09a9;var _0x544b7d=_0x11f333(0x0),_0x42900e=_0x4a9c('0x3bf');function _0x47e025(){if(!(this instanceof _0x47e025))return new _0x47e025();}function _0x3b09a9(){if(!(this instanceof _0x3b09a9))return new _0x3b09a9();}function _0x40a664(){throw new Error(_0x4a9c('0x43b'));}function _0x43852c(){throw new Error(_0x4a9c('0x54f'));}function _0x4ab6a0(){return this[_0x4a9c('0x1aa')]&&this[_0x4a9c('0x1aa')][_0x4a9c('0x3e1')]?(this[_0x4a9c('0x719')](),this['pull']()):this[_0x4a9c('0x64f')]();}function _0x2fa525(_0x2171d4){(this[_0x4a9c('0x1aa')]||(this[_0x4a9c('0x1aa')]=[]))[_0x4a9c('0x2d2')](_0x2171d4);}function _0x41cbec(){return(this['buffers']||(this['buffers']=[]))[_0x4a9c('0x70b')]();}function _0x10bec0(_0x54ec1f){return function(_0x376ee6){for(var _0x319976 in _0x54ec1f)_0x376ee6[_0x319976]=_0x54ec1f[_0x319976];return _0x376ee6;};}_0x47e025[_0x4a9c('0x3e7')]=_0x10bec0({'bufferish':_0x544b7d,'write':function(_0x3ecd26){var _0x38176e=this['offset']?_0x544b7d[_0x4a9c('0x216')][_0x4a9c('0x14')][_0x4a9c('0xc3')](this[_0x4a9c('0x5b')],this['offset']):this[_0x4a9c('0x5b')];this[_0x4a9c('0x5b')]=_0x38176e?_0x3ecd26?this[_0x4a9c('0x510')]['concat']([_0x38176e,_0x3ecd26]):_0x38176e:_0x3ecd26,this[_0x4a9c('0x76a')]=0x0;},'fetch':_0x43852c,'flush':function(){for(;this[_0x4a9c('0x76a')]<this[_0x4a9c('0x5b')][_0x4a9c('0x3e1')];){var _0x1ebd5d,_0x280696=this[_0x4a9c('0x76a')];try{_0x1ebd5d=this['fetch']();}catch(_0x3fe2fc){if(_0x3fe2fc&&_0x3fe2fc['message']!=_0x42900e)throw _0x3fe2fc;this['offset']=_0x280696;break;}this[_0x4a9c('0x2d2')](_0x1ebd5d);}},'push':_0x2fa525,'pull':_0x41cbec,'read':_0x4ab6a0,'reserve':function(_0x1800f2){var _0x122857=this[_0x4a9c('0x76a')],_0x5aa65a=_0x122857+_0x1800f2;if(_0x5aa65a>this[_0x4a9c('0x5b')][_0x4a9c('0x3e1')])throw new Error(_0x42900e);return this[_0x4a9c('0x76a')]=_0x5aa65a,_0x122857;},'offset':0x0}),_0x47e025[_0x4a9c('0x3e7')](_0x47e025['prototype']),_0x3b09a9[_0x4a9c('0x3e7')]=_0x10bec0({'bufferish':_0x544b7d,'write':_0x40a664,'fetch':function(){var _0x22a416=this[_0x4a9c('0x50')];if(_0x22a416<this['offset']){var _0x5e3de8=this[_0x4a9c('0x50')]=this[_0x4a9c('0x76a')];return _0x544b7d['prototype'][_0x4a9c('0x14')][_0x4a9c('0xc3')](this[_0x4a9c('0x5b')],_0x22a416,_0x5e3de8);}},'flush':function(){for(;this[_0x4a9c('0x50')]<this[_0x4a9c('0x76a')];){var _0x4f3884=this['fetch']();_0x4f3884&&this[_0x4a9c('0x2d2')](_0x4f3884);}},'push':_0x2fa525,'pull':function(){var _0x41a66e=this[_0x4a9c('0x1aa')]||(this[_0x4a9c('0x1aa')]=[]),_0x4e59b3=_0x41a66e['length']>0x1?this['bufferish'][_0x4a9c('0x4fc')](_0x41a66e):_0x41a66e[0x0];return _0x41a66e[_0x4a9c('0x3e1')]=0x0,_0x4e59b3;},'read':_0x4ab6a0,'reserve':function(_0x2e283f){var _0x597fda=0x0|_0x2e283f;if(this[_0x4a9c('0x5b')]){var _0x3096ea=this[_0x4a9c('0x5b')][_0x4a9c('0x3e1')],_0x3695f9=0x0|this[_0x4a9c('0x76a')],_0x20c35d=_0x3695f9+_0x597fda;if(_0x20c35d<_0x3096ea)return this[_0x4a9c('0x76a')]=_0x20c35d,_0x3695f9;this[_0x4a9c('0x719')](),_0x2e283f=Math[_0x4a9c('0x790')](_0x2e283f,Math[_0x4a9c('0xe8')](0x2*_0x3096ea,this[_0x4a9c('0x2e0')]));}return _0x2e283f=Math[_0x4a9c('0x790')](_0x2e283f,this[_0x4a9c('0x5cd')]),this[_0x4a9c('0x5b')]=this[_0x4a9c('0x510')][_0x4a9c('0x569')](_0x2e283f),this['start']=0x0,this['offset']=_0x597fda,0x0;},'send':function(_0x5d4cbf){var _0x115ee1=_0x5d4cbf[_0x4a9c('0x3e1')];if(_0x115ee1>this['minBufferSize'])this[_0x4a9c('0x719')](),this[_0x4a9c('0x2d2')](_0x5d4cbf);else{var _0x30e7c8=this['reserve'](_0x115ee1);_0x544b7d[_0x4a9c('0x216')][_0x4a9c('0x33e')]['call'](_0x5d4cbf,this['buffer'],_0x30e7c8);}},'maxBufferSize':0x10000,'minBufferSize':0x800,'offset':0x0,'start':0x0}),_0x3b09a9[_0x4a9c('0x3e7')](_0x3b09a9[_0x4a9c('0x216')]);},function(_0x7edca2,_0x9e8581,_0xf4120a){_0x9e8581[_0x4a9c('0x5bd')]=function(_0x21f539,_0x3c73f4){var _0x1ff29c=new _0xbb5062(_0x3c73f4);return _0x1ff29c[_0x4a9c('0x60f')](_0x21f539),_0x1ff29c[_0x4a9c('0x373')]();};var _0xbb5062=_0xf4120a(0x10)[_0x4a9c('0x1ee')];},function(_0x46a66d,_0x21225b,_0x158004){_0x21225b[_0x4a9c('0x1ee')]=_0x5b187c;var _0x113ce6=_0x158004(0x8)[_0x4a9c('0xa')];function _0x5b187c(_0x2abea0){if(!(this instanceof _0x5b187c))return new _0x5b187c(_0x2abea0);if(_0x2abea0&&(this['options']=_0x2abea0,_0x2abea0['codec'])){var _0x3de4f7=this[_0x4a9c('0x3b6')]=_0x2abea0[_0x4a9c('0x3b6')];_0x3de4f7[_0x4a9c('0x510')]&&(this[_0x4a9c('0x510')]=_0x3de4f7['bufferish']);}}_0x158004(0xe)[_0x4a9c('0x75e')][_0x4a9c('0x3e7')](_0x5b187c[_0x4a9c('0x216')]),_0x5b187c[_0x4a9c('0x216')]['codec']=_0x113ce6,_0x5b187c[_0x4a9c('0x216')][_0x4a9c('0x64f')]=function(){return this[_0x4a9c('0x3b6')][_0x4a9c('0x5bd')](this);};},function(_0x539afc,_0xd623df,_0xe557d4){var _0x40de5d=_0xe557d4(0x4),_0x54917d=_0xe557d4(0x7),_0x395c2f=_0x54917d[_0x4a9c('0x6bc')],_0x5c8724=_0x54917d[_0x4a9c('0x3fd')];_0xd623df[_0x4a9c('0x621')]=function(_0xb7757f){var _0x55cd69=_0x5d3374['hasArrayBuffer']&&_0xb7757f&&_0xb7757f['binarraybuffer'],_0x4eb662=_0xb7757f&&_0xb7757f[_0x4a9c('0x60b')];return{'map':_0x4efc9f&&_0xb7757f&&_0xb7757f[_0x4a9c('0x80')]?_0x810ccb:_0x54e151,'array':_0x7ebd4d,'str':_0xf413a4,'bin':_0x55cd69?_0x3be9ae:_0x4e2077,'ext':_0x4269bd,'uint8':_0x4c2d44,'uint16':_0x4010c7,'uint32':_0x3625a4,'uint64':_0x438180(0x8,_0x4eb662?_0x48b894:_0x23cb9c),'int8':_0x3ae5c8,'int16':_0x5af13b,'int32':_0xfdfe4a,'int64':_0x438180(0x8,_0x4eb662?_0x28e553:_0x579cd8),'float32':_0x438180(0x4,_0x226ff4),'float64':_0x438180(0x8,_0x23e71e)};},_0xd623df[_0x4a9c('0x5b6')]=_0x4c2d44;var _0x5d3374=_0xe557d4(0x0),_0x144085=_0xe557d4(0x6),_0x4efc9f=_0x4a9c('0x45d')!=typeof Map;function _0x54e151(_0x21de52,_0xac6c4f){var _0x163a00,_0x217403={},_0x1a8cc8=new Array(_0xac6c4f),_0x884893=new Array(_0xac6c4f),_0x5d0bda=_0x21de52[_0x4a9c('0x3b6')][_0x4a9c('0x5bd')];for(_0x163a00=0x0;_0x163a00<_0xac6c4f;_0x163a00++)_0x1a8cc8[_0x163a00]=_0x5d0bda(_0x21de52),_0x884893[_0x163a00]=_0x5d0bda(_0x21de52);for(_0x163a00=0x0;_0x163a00<_0xac6c4f;_0x163a00++)_0x217403[_0x1a8cc8[_0x163a00]]=_0x884893[_0x163a00];return _0x217403;}function _0x810ccb(_0x4ecc86,_0x12d88c){var _0x48fe29,_0x23f507=new Map(),_0x36a50b=new Array(_0x12d88c),_0x486806=new Array(_0x12d88c),_0x33f76b=_0x4ecc86[_0x4a9c('0x3b6')]['decode'];for(_0x48fe29=0x0;_0x48fe29<_0x12d88c;_0x48fe29++)_0x36a50b[_0x48fe29]=_0x33f76b(_0x4ecc86),_0x486806[_0x48fe29]=_0x33f76b(_0x4ecc86);for(_0x48fe29=0x0;_0x48fe29<_0x12d88c;_0x48fe29++)_0x23f507[_0x4a9c('0x193')](_0x36a50b[_0x48fe29],_0x486806[_0x48fe29]);return _0x23f507;}function _0x7ebd4d(_0x472bb0,_0x32929b){for(var _0x5bec0f=new Array(_0x32929b),_0x257d60=_0x472bb0[_0x4a9c('0x3b6')][_0x4a9c('0x5bd')],_0x2be6e9=0x0;_0x2be6e9<_0x32929b;_0x2be6e9++)_0x5bec0f[_0x2be6e9]=_0x257d60(_0x472bb0);return _0x5bec0f;}function _0xf413a4(_0x30d19e,_0xcdf7e8){var _0x3042ff=_0x30d19e[_0x4a9c('0x4a9')](_0xcdf7e8),_0x4184aa=_0x3042ff+_0xcdf7e8;return _0x144085[_0x4a9c('0x1c1')][_0x4a9c('0xc3')](_0x30d19e[_0x4a9c('0x5b')],_0x4a9c('0xa8'),_0x3042ff,_0x4184aa);}function _0x4e2077(_0x4cc78b,_0x50d357){var _0x3ceeb1=_0x4cc78b[_0x4a9c('0x4a9')](_0x50d357),_0x159049=_0x3ceeb1+_0x50d357,_0x73bb1f=_0x144085[_0x4a9c('0x14')][_0x4a9c('0xc3')](_0x4cc78b[_0x4a9c('0x5b')],_0x3ceeb1,_0x159049);return _0x5d3374[_0x4a9c('0x34a')](_0x73bb1f);}function _0x3be9ae(_0x42e70c,_0x1dc479){var _0x3e4469=_0x42e70c[_0x4a9c('0x4a9')](_0x1dc479),_0x197f86=_0x3e4469+_0x1dc479,_0x461fce=_0x144085[_0x4a9c('0x14')][_0x4a9c('0xc3')](_0x42e70c[_0x4a9c('0x5b')],_0x3e4469,_0x197f86);return _0x5d3374[_0x4a9c('0x4b0')][_0x4a9c('0x34a')](_0x461fce)[_0x4a9c('0x5b')];}function _0x4269bd(_0xc7b04,_0x3d86c2){var _0x16cf4d=_0xc7b04[_0x4a9c('0x4a9')](_0x3d86c2+0x1),_0x2abebe=_0xc7b04[_0x4a9c('0x5b')][_0x16cf4d++],_0x17205b=_0x16cf4d+_0x3d86c2,_0x20a4f2=_0xc7b04['codec'][_0x4a9c('0xbd')](_0x2abebe);if(!_0x20a4f2)throw new Error(_0x4a9c('0x7c6')+(_0x2abebe?'0x'+_0x2abebe['toString'](0x10):_0x2abebe));return _0x20a4f2(_0x144085[_0x4a9c('0x14')][_0x4a9c('0xc3')](_0xc7b04[_0x4a9c('0x5b')],_0x16cf4d,_0x17205b));}function _0x4c2d44(_0x41f927){var _0x2474ec=_0x41f927[_0x4a9c('0x4a9')](0x1);return _0x41f927['buffer'][_0x2474ec];}function _0x3ae5c8(_0x188749){var _0xa29707=_0x188749[_0x4a9c('0x4a9')](0x1),_0x5673df=_0x188749[_0x4a9c('0x5b')][_0xa29707];return 0x80&_0x5673df?_0x5673df-0x100:_0x5673df;}function _0x4010c7(_0x845d97){var _0x386878=_0x845d97['reserve'](0x2),_0x3cbf92=_0x845d97[_0x4a9c('0x5b')];return _0x3cbf92[_0x386878++]<<0x8|_0x3cbf92[_0x386878];}function _0x5af13b(_0x7530c8){var _0x307a4d=_0x7530c8[_0x4a9c('0x4a9')](0x2),_0x446dc3=_0x7530c8[_0x4a9c('0x5b')],_0x2c86a5=_0x446dc3[_0x307a4d++]<<0x8|_0x446dc3[_0x307a4d];return 0x8000&_0x2c86a5?_0x2c86a5-0x10000:_0x2c86a5;}function _0x3625a4(_0x5e0d7b){var _0xab0e5e=_0x5e0d7b[_0x4a9c('0x4a9')](0x4),_0x35b492=_0x5e0d7b[_0x4a9c('0x5b')];return 0x1000000*_0x35b492[_0xab0e5e++]+(_0x35b492[_0xab0e5e++]<<0x10)+(_0x35b492[_0xab0e5e++]<<0x8)+_0x35b492[_0xab0e5e];}function _0xfdfe4a(_0x1087a5){var _0xcefb4a=_0x1087a5['reserve'](0x4),_0x4a3ac4=_0x1087a5[_0x4a9c('0x5b')];return _0x4a3ac4[_0xcefb4a++]<<0x18|_0x4a3ac4[_0xcefb4a++]<<0x10|_0x4a3ac4[_0xcefb4a++]<<0x8|_0x4a3ac4[_0xcefb4a];}function _0x438180(_0x478760,_0x5733ae){return function(_0x190904){var _0x4019f8=_0x190904[_0x4a9c('0x4a9')](_0x478760);return _0x5733ae[_0x4a9c('0xc3')](_0x190904[_0x4a9c('0x5b')],_0x4019f8,!0x0);};}function _0x23cb9c(_0x43fdc0){return new _0x395c2f(this,_0x43fdc0)[_0x4a9c('0x3c4')]();}function _0x579cd8(_0x490086){return new _0x5c8724(this,_0x490086)[_0x4a9c('0x3c4')]();}function _0x48b894(_0x431960){return new _0x395c2f(this,_0x431960);}function _0x28e553(_0x3b1b36){return new _0x5c8724(this,_0x3b1b36);}function _0x226ff4(_0x49c0e4){return _0x40de5d[_0x4a9c('0x373')](this,_0x49c0e4,!0x1,0x17,0x4);}function _0x23e71e(_0x1fa6b4){return _0x40de5d[_0x4a9c('0x373')](this,_0x1fa6b4,!0x1,0x34,0x8);}},function(_0x1c2776,_0x52dfba,_0x318945){!function(_0x40bbf3){_0x1c2776[_0x4a9c('0x14f')]=_0x40bbf3;var _0x1a0435=_0x4a9c('0x5d0'),_0x45064c={'on':function(_0x536c44,_0x422987){return _0x50707c(this,_0x536c44)[_0x4a9c('0x2d2')](_0x422987),this;},'once':function(_0x5109d7,_0x5ee08f){var _0x3ca3e9=this;return _0x55ed75[_0x4a9c('0x99')]=_0x5ee08f,_0x50707c(_0x3ca3e9,_0x5109d7)['push'](_0x55ed75),_0x3ca3e9;function _0x55ed75(){_0x1f57fb[_0x4a9c('0xc3')](_0x3ca3e9,_0x5109d7,_0x55ed75),_0x5ee08f['apply'](this,arguments);}},'off':_0x1f57fb,'emit':function(_0xcdfc60,_0x55ef5f){var _0x2b41f4=this,_0x25a7cb=_0x50707c(_0x2b41f4,_0xcdfc60,!0x0);if(!_0x25a7cb)return!0x1;var _0x567a83=arguments[_0x4a9c('0x3e1')];if(0x1===_0x567a83)_0x25a7cb[_0x4a9c('0x781')](function(_0x489ce5){_0x489ce5[_0x4a9c('0xc3')](_0x2b41f4);});else if(0x2===_0x567a83)_0x25a7cb[_0x4a9c('0x781')](function(_0x3e5419){_0x3e5419[_0x4a9c('0xc3')](_0x2b41f4,_0x55ef5f);});else{var _0x2203dc=Array[_0x4a9c('0x216')][_0x4a9c('0x14')][_0x4a9c('0xc3')](arguments,0x1);_0x25a7cb[_0x4a9c('0x781')](function(_0x30bbfa){_0x30bbfa[_0x4a9c('0x635')](_0x2b41f4,_0x2203dc);});}return!!_0x25a7cb[_0x4a9c('0x3e1')];}};function _0xa02cf5(_0x50b2b8){for(var _0x3c6d95 in _0x45064c)_0x50b2b8[_0x3c6d95]=_0x45064c[_0x3c6d95];return _0x50b2b8;}function _0x1f57fb(_0x342f69,_0x2d305c){var _0x37b4b8;if(arguments[_0x4a9c('0x3e1')]){if(_0x2d305c){if(_0x37b4b8=_0x50707c(this,_0x342f69,!0x0)){if(!(_0x37b4b8=_0x37b4b8[_0x4a9c('0x205')](function(_0x41e3cb){return _0x41e3cb!==_0x2d305c&&_0x41e3cb[_0x4a9c('0x99')]!==_0x2d305c;}))[_0x4a9c('0x3e1')])return _0x1f57fb['call'](this,_0x342f69);this[_0x1a0435][_0x342f69]=_0x37b4b8;}}else if((_0x37b4b8=this[_0x1a0435])&&(delete _0x37b4b8[_0x342f69],!Object[_0x4a9c('0x13b')](_0x37b4b8)[_0x4a9c('0x3e1')]))return _0x1f57fb[_0x4a9c('0xc3')](this);}else delete this[_0x1a0435];return this;}function _0x50707c(_0x529295,_0x59b5c5,_0x2ad144){if(!_0x2ad144||_0x529295[_0x1a0435]){var _0x5ddd7d=_0x529295[_0x1a0435]||(_0x529295[_0x1a0435]={});return _0x5ddd7d[_0x59b5c5]||(_0x5ddd7d[_0x59b5c5]=[]);}}_0xa02cf5(_0x40bbf3[_0x4a9c('0x216')]),_0x40bbf3[_0x4a9c('0x3e7')]=_0xa02cf5;}(/*** event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)** @copyright Yusuke Kawasaki* @license MIT* @constructor* @see https://github.com/kawanet/event-lite* @see http://kawanet.github.io/event-lite/EventLite.html* @example* var EventLite = require("event-lite");** function MyClass() {...}             // your class** EventLite.mixin(MyClass.prototype);  // import event methods** var obj = new MyClass();* obj.on("foo", function() {...});     // add event listener* obj.once("bar", function() {...});   // add one-time event listener* obj.emit("foo");                     // dispatch event* obj.emit("bar");                     // dispatch another event* obj.off("foo");                      // remove event listener*/function _0x4cb7a7(){if(!(this instanceof _0x4cb7a7))return new _0x4cb7a7();});},function(_0x21220e,_0x4194b2,_0x2b2240){(function(_0x17bdb5){_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x20e')]=BR1,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x55e')]=BR2,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x1b2')]=0x9,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x2b4')]=0x1869f,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x26')]=0x1869f,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x78e')]=0x6,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x671')]=0xbb8,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x135')]=0xa,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x12b')]=0x5,_0x21220e['exports'][_0x4a9c('0x46')]=0x32,_0x21220e[_0x4a9c('0x14f')]['healthBarPad']=4.5,_0x21220e['exports'][_0x4a9c('0x7db')]=0xf,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x41c')]=0.9,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x15d')]=0x1,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x439')]=0x3c,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x7c3')]=0x23,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x7b3')]=0xbb8,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x540')]=0x0,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x5a9')]=_0x17bdb5&&_0x4a9c('0x186')===_0x17bdb5[_0x4a9c('0x131')]['VULTR_SCHEME'],_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x1ba')]=0x64,_0x21220e[_0x4a9c('0x14f')]['gatherAngle']=Math['PI']/2.6,_0x21220e['exports'][_0x4a9c('0x3d6')]=0xa,_0x21220e[_0x4a9c('0x14f')]['hitReturnRatio']=0.25,_0x21220e['exports'][_0x4a9c('0x38f')]=Math['PI']/0x2,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x4d4')]=0x23,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x163')]=0.0016,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x4fb')]=0.993,_0x21220e[_0x4a9c('0x14f')]['nameY']=0x22,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x5b0')]=['#bf8f54',_0x4a9c('0x4e1'),_0x4a9c('0x412'),_0x4a9c('0x663'),_0x4a9c('0x24b'),_0x4a9c('0x6fa'),_0x4a9c('0x6bb'),'#ecaff7',_0x4a9c('0x94'),'#8bc373'],_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x5ee')]=0x7,_0x21220e['exports'][_0x4a9c('0x218')]=0.06,_0x21220e['exports'][_0x4a9c('0x712')]=[_0x4a9c('0x346'),_0x4a9c('0x584'),_0x4a9c('0x7bf'),'Romn','Jononthecool','Fiona',_0x4a9c('0x1fa'),_0x4a9c('0x5b7'),_0x4a9c('0x4cf'),'Flappy',_0x4a9c('0xb8'),_0x4a9c('0x18c'),_0x4a9c('0x580'),_0x4a9c('0x316'),_0x4a9c('0xce'),'Fabz','Oliver',_0x4a9c('0x3ed'),_0x4a9c('0x4a7'),_0x4a9c('0x352'),_0x4a9c('0x1b1'),_0x4a9c('0x417'),_0x4a9c('0x71b'),_0x4a9c('0x3a6'),'XYZ',_0x4a9c('0x23d'),_0x4a9c('0x398'),_0x4a9c('0x5d9'),'Destined',_0x4a9c('0x2ee'),_0x4a9c('0x593'),_0x4a9c('0x57f'),_0x4a9c('0x687'),_0x4a9c('0x2b2'),'Joey',_0x4a9c('0x693'),'Murdoch',_0x4a9c('0xce'),_0x4a9c('0x48c'),_0x4a9c('0x5e0'),_0x4a9c('0x7b5'),_0x4a9c('0x51e'),_0x4a9c('0x74e'),_0x4a9c('0x3db'),_0x4a9c('0x54')],_0x21220e[_0x4a9c('0x14f')]['shieldAngle']=Math['PI']/0x3,_0x21220e[_0x4a9c('0x14f')]['weaponVariants']=[{'id':0x0,'src':'','xp':0x0,'val':0x1},{'id':0x1,'src':'_g','xp':0xbb8,'val':1.1},{'id':0x2,'src':'_d','xp':0x1b58,'val':1.18},{'id':0x3,'src':'_r','poison':!0x0,'xp':0x2ee0,'val':1.18}],_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x2cd')]=function(_0x1f53a2){for(var _0x3df715=_0x1f53a2[_0x4a9c('0x2f1')][_0x1f53a2[_0x4a9c('0x452')]]||0x0,_0x48aa3b=_0x21220e[_0x4a9c('0x14f')]['weaponVariants'][_0x4a9c('0x3e1')]-0x1;_0x48aa3b>=0x0;--_0x48aa3b)if(_0x3df715>=_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x329')][_0x48aa3b]['xp'])return _0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x329')][_0x48aa3b];},_0x21220e[_0x4a9c('0x14f')]['resourceTypes']=[_0x4a9c('0x784'),_0x4a9c('0x220'),_0x4a9c('0x1f6'),_0x4a9c('0xfc')],_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x3b')]=0x7,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x2d5')]=0x9,_0x21220e['exports'][_0x4a9c('0x28d')]=0x3,_0x21220e['exports'][_0x4a9c('0x98')]=0x20,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x731')]=0x7,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x55f')]=0x2d4,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x2a4')]=0x72,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x775')]=0.0011,_0x21220e[_0x4a9c('0x14f')]['waveSpeed']=0.0001,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x123')]=1.3,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0xf4')]=[0x96,0xa0,0xa5,0xaf],_0x21220e[_0x4a9c('0x14f')]['bushScales']=[0x50,0x55,0x5f],_0x21220e['exports'][_0x4a9c('0x668')]=[0x50,0x55,0x5a],_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x60e')]=0x960,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x58d')]=0.75,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x2eb')]=0xf,_0x21220e[_0x4a9c('0x14f')]['mapScale']=0x3840,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x1a8')]=0x28,_0x21220e[_0x4a9c('0x14f')][_0x4a9c('0x1ac')]=0x898;}[_0x4a9c('0xc3')](this,_0x2b2240(0x29)));},function(_0x35a339,_0x262328){var _0xcb8963={'utf8':{'stringToBytes':function(_0x5bd17a){return _0xcb8963['bin'][_0x4a9c('0x410')](unescape(encodeURIComponent(_0x5bd17a)));},'bytesToString':function(_0x10975f){return decodeURIComponent(escape(_0xcb8963['bin']['bytesToString'](_0x10975f)));}},'bin':{'stringToBytes':function(_0x12530f){for(var _0x5451f1=[],_0x2546ba=0x0;_0x2546ba<_0x12530f[_0x4a9c('0x3e1')];_0x2546ba++)_0x5451f1[_0x4a9c('0x2d2')](0xff&_0x12530f['charCodeAt'](_0x2546ba));return _0x5451f1;},'bytesToString':function(_0x322314){for(var _0x2095e0=[],_0x1edda6=0x0;_0x1edda6<_0x322314['length'];_0x1edda6++)_0x2095e0[_0x4a9c('0x2d2')](String[_0x4a9c('0x3b9')](_0x322314[_0x1edda6]));return _0x2095e0['join']('');}}};_0x35a339[_0x4a9c('0x14f')]=_0xcb8963;},function(_0x9a0f97,_0x1f3690,_0x38732f){'use strict';window[_0x4a9c('0x6cc')]=!0x0;var _0x7075c0=_0x4a9c('0x3d5')!==location['hostname']&&!location[_0x4a9c('0x65a')][_0x4a9c('0x484')](_0x4a9c('0x6'));_0x38732f(0x16);var _0x481801=_0x38732f(0x17),_0x5eec63=_0x38732f(0x2a),_0x3a3fc3=_0x38732f(0x2b),_0xd14dd8=_0x38732f(0x13),_0x33b07f=_0x38732f(0x2c),_0x15d498=_0x38732f(0x2d),_0xe168fd=(_0x38732f(0x2e),_0x38732f(0x2f)),_0xa1437=_0x38732f(0x30),_0x40c0bc=_0x38732f(0x37),_0x5e13d3=_0x38732f(0x38),_0x1a5a1c=_0x38732f(0x39),_0x1a13b8=_0x38732f(0x3a)['obj'],_0x30e254=new _0x3a3fc3[(_0x4a9c('0x684'))](),_0x3a0eff=new(_0x38732f(0x3b))(_0x4a9c('0x7e1'),0xbb8,_0xd14dd8['maxPlayers'],0x5,!0x1);_0x3a0eff[_0x4a9c('0x603')]=!0x1;var _0x56f1fe=!0x1;function _0xec0b40(){_0x5b4202&&_0x5b43a3&&(_0x56f1fe=!0x0,_0x7075c0?window[_0x4a9c('0x6f2')][_0x4a9c('0x2fb')](_0x4a9c('0x2ef'),{'action':_0x4a9c('0x741')})[_0x4a9c('0x6ca')](function(_0x472358){_0x575cc0(_0x472358);}):_0x575cc0(null));}function _0x575cc0(_0x4242e3){_0x3a0eff[_0x4a9c('0x50')](function(_0x373845,_0x355535,_0x24586a){var _0x2740bd=(_0x7075c0?_0x4a9c('0x2a9'):'ws')+_0x4a9c('0x74a')+_0x373845+_0x4a9c('0x2cf')+_0x24586a;_0x4242e3&&(_0x2740bd+=_0x4a9c('0x2f5')+encodeURIComponent(_0x4242e3)),_0x481801[_0x4a9c('0x55')](_0x2740bd,function(_0x4c7fec){_0x218bbd(),setInterval(()=>_0x218bbd(),0x9c4),_0x4c7fec?_0x59ae57(_0x4c7fec):(_0x1b9346['onclick']=_0x5eec63['checkTrusted'](function(){!function(){var _0x38a326=++_0x524d56>0x1,_0x1e7002=Date[_0x4a9c('0x6a1')]()-_0x12e43e>_0x547318;_0x38a326&&_0x1e7002?(_0x12e43e=Date['now'](),_0x51489b()):_0x266447();}();}),_0x5eec63[_0x4a9c('0x6fc')](_0x1b9346),_0x16c9ee[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x3877b4(_0x4a9c('0x578'));}),_0x5eec63[_0x4a9c('0x6fc')](_0x16c9ee),_0x19e053[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){setTimeout(function(){!function(){var _0x309e4a=_0x75db73['value'],_0x431446=prompt(_0x4a9c('0x4ab'),_0x309e4a);_0x431446&&(window[_0x4a9c('0x115')]=void 0x0,window[_0x4a9c('0x2c2')][_0x4a9c('0x4a0')]=_0x4a9c('0x1d4')+_0x431446);}();},0xa);}),_0x5eec63[_0x4a9c('0x6fc')](_0x19e053),_0x560f4a[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x242c3a[_0x4a9c('0x43a')][_0x4a9c('0x7b7')](_0x4a9c('0x742'))?(_0x242c3a[_0x4a9c('0x43a')][_0x4a9c('0x39e')]('showing'),_0x59f47c[_0x4a9c('0x53e')]=_0x4a9c('0x107')):(_0x242c3a[_0x4a9c('0x43a')][_0x4a9c('0x46a')](_0x4a9c('0x742')),_0x59f47c[_0x4a9c('0x53e')]=_0x4a9c('0x2fc'));}),_0x5eec63[_0x4a9c('0x6fc')](_0x560f4a),_0x113ac9[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x249099(),_0x4a9c('0xcd')!=_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]?_0x4b8e3f():_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7');}),_0x5eec63[_0x4a9c('0x6fc')](_0x113ac9),_0x315858[_0x4a9c('0x2c7')]=_0x5eec63['checkTrusted'](function(){_0x4a9c('0xcd')!=_0x55e875[_0x4a9c('0x6f0')]['display']?(_0x55e875['style'][_0x4a9c('0x259')]=_0x4a9c('0xcd'),_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]='none',_0x562017(),_0x2c35d7()):_0x55e875[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7');}),_0x5eec63[_0x4a9c('0x6fc')](_0x315858),_0x322dd0['onclick']=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x30ce30();}),_0x5eec63[_0x4a9c('0x6fc')](_0x322dd0),_0x388c11[_0x4a9c('0x2c7')]=_0x5eec63['checkTrusted'](function(){_0x4cd2bf();}),_0x5eec63[_0x4a9c('0x6fc')](_0x388c11),function(){for(var _0x341f10=0x0;_0x341f10<_0xce2641['length'];++_0x341f10){var _0x4db1cd=new Image();_0x4db1cd[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0;},_0x4db1cd[_0x4a9c('0x34f')]='.././img/icons/'+_0xce2641[_0x341f10]+_0x4a9c('0x79e'),_0x4e11ed[_0xce2641[_0x341f10]]=_0x4db1cd;}}(),_0x4e1e9d[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x524f3e[_0x4a9c('0x6f0')][_0x4a9c('0x259')]='block',_0x4f5d79[_0x4a9c('0xfe')]=_0x17e8f0('moo_name')||'',function(){var _0x1a5a2a=_0x17e8f0(_0x4a9c('0x38a'));_0x577d1e(_0x1a5a2a?'true'==_0x1a5a2a:'undefined'!=typeof cordova),_0x4d6fe1=_0x4a9c('0x546')==_0x17e8f0(_0x4a9c('0x17a')),_0x3a7043[_0x4a9c('0x761')]=!_0x4d6fe1,_0x17e8f0('moo_moosic'),setInterval(function(){window['cordova']&&(document[_0x4a9c('0x46e')](_0x4a9c('0x262'))['classList'][_0x4a9c('0x46a')](_0x4a9c('0x544')),document[_0x4a9c('0x46e')](_0x4a9c('0x447'))['classList'][_0x4a9c('0x46a')](_0x4a9c('0x544')));},0x3e8),_0x45db1d(),_0x5eec63[_0x4a9c('0x5fc')](_0x106ad6);for(var _0x491401=0x0;_0x491401<_0x15d498[_0x4a9c('0x53c')][_0x4a9c('0x3e1')]+_0x15d498[_0x4a9c('0x7f5')][_0x4a9c('0x3e1')];++_0x491401)!function(_0x2d691c){_0x5eec63[_0x4a9c('0xb')]({'id':'actionBarItem'+_0x2d691c,'class':_0x4a9c('0x478'),'style':_0x4a9c('0x5ac'),'onmouseout':function(){_0x2041ff();},'parent':_0x106ad6});}(_0x491401);for(_0x491401=0x0;_0x491401<_0x15d498[_0x4a9c('0x7f5')]['length']+_0x15d498[_0x4a9c('0x53c')][_0x4a9c('0x3e1')];++_0x491401)!function(_0x400d1e){var _0x2c6c00=document[_0x4a9c('0x20c')]('canvas');_0x2c6c00[_0x4a9c('0x149')]=_0x2c6c00['height']=0x42;var _0x13d6ea=_0x2c6c00[_0x4a9c('0x5a1')]('2d');if(_0x13d6ea['translate'](_0x2c6c00[_0x4a9c('0x149')]/0x2,_0x2c6c00['height']/0x2),_0x13d6ea[_0x4a9c('0x326')]=!0x1,_0x13d6ea[_0x4a9c('0x49a')]=!0x1,_0x13d6ea[_0x4a9c('0x3a')]=!0x1,_0x15d498[_0x4a9c('0x53c')][_0x400d1e]){_0x13d6ea[_0x4a9c('0x20b')](Math['PI']/0x4+Math['PI']);var _0x100061=new Image();_0x2b581b[_0x15d498[_0x4a9c('0x53c')][_0x400d1e]['src']]=_0x100061,_0x100061[_0x4a9c('0x1ab')]=function(){this['isLoaded']=!0x0;var _0x4e3e3b=0x1/(this[_0x4a9c('0x178')]/this[_0x4a9c('0x149')]),_0x1e9af1=_0x15d498[_0x4a9c('0x53c')][_0x400d1e][_0x4a9c('0x306')]||0x1;_0x13d6ea[_0x4a9c('0x7f4')](this,-_0x2c6c00[_0x4a9c('0x149')]*_0x1e9af1*_0xd14dd8[_0x4a9c('0x41c')]*_0x4e3e3b/0x2,-_0x2c6c00[_0x4a9c('0x178')]*_0x1e9af1*_0xd14dd8[_0x4a9c('0x41c')]/0x2,_0x2c6c00[_0x4a9c('0x149')]*_0x1e9af1*_0x4e3e3b*_0xd14dd8[_0x4a9c('0x41c')],_0x2c6c00['height']*_0x1e9af1*_0xd14dd8[_0x4a9c('0x41c')]),_0x13d6ea[_0x4a9c('0x7e4')]=_0x4a9c('0x522'),_0x13d6ea[_0x4a9c('0x60d')]=_0x4a9c('0x46d'),_0x13d6ea[_0x4a9c('0x33a')](-_0x2c6c00[_0x4a9c('0x149')]/0x2,-_0x2c6c00[_0x4a9c('0x178')]/0x2,_0x2c6c00[_0x4a9c('0x149')],_0x2c6c00[_0x4a9c('0x178')]),document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x400d1e)[_0x4a9c('0x6f0')][_0x4a9c('0x26a')]=_0x4a9c('0x50b')+_0x2c6c00[_0x4a9c('0x756')]()+')';},_0x100061[_0x4a9c('0x34f')]=_0x4a9c('0x5a5')+_0x15d498[_0x4a9c('0x53c')][_0x400d1e]['src']+_0x4a9c('0x79e'),(_0x516942=document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x400d1e))[_0x4a9c('0x530')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x2041ff(_0x15d498[_0x4a9c('0x53c')][_0x400d1e],!0x0);}),_0x516942[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x15fcfc(_0x400d1e,!0x0);}),_0x5eec63['hookTouchEvents'](_0x516942);}else{_0x100061=_0x510944(_0x15d498[_0x4a9c('0x7f5')][_0x400d1e-_0x15d498[_0x4a9c('0x53c')]['length']],!0x0);var _0x516942,_0x2d856c=Math[_0x4a9c('0xe8')](_0x2c6c00[_0x4a9c('0x149')]-_0xd14dd8['iconPadding'],_0x100061['width']);_0x13d6ea['globalAlpha']=0x1,_0x13d6ea['drawImage'](_0x100061,-_0x2d856c/0x2,-_0x2d856c/0x2,_0x2d856c,_0x2d856c),_0x13d6ea[_0x4a9c('0x7e4')]=_0x4a9c('0x522'),_0x13d6ea[_0x4a9c('0x60d')]=_0x4a9c('0x46d'),_0x13d6ea['fillRect'](-_0x2d856c/0x2,-_0x2d856c/0x2,_0x2d856c,_0x2d856c),document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x400d1e)[_0x4a9c('0x6f0')]['backgroundImage']='url('+_0x2c6c00[_0x4a9c('0x756')]()+')',(_0x516942=document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x400d1e))[_0x4a9c('0x530')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x2041ff(_0x15d498[_0x4a9c('0x7f5')][_0x400d1e-_0x15d498[_0x4a9c('0x53c')]['length']]);}),_0x516942[_0x4a9c('0x2c7')]=_0x5eec63[_0x4a9c('0x3f3')](function(){_0x15fcfc(_0x400d1e-_0x15d498[_0x4a9c('0x53c')][_0x4a9c('0x3e1')]);}),_0x5eec63[_0x4a9c('0x6fc')](_0x516942);}}(_0x491401);_0x4f5d79['ontouchstart']=_0x5eec63[_0x4a9c('0x3f3')](function(_0x36c5cb){_0x36c5cb[_0x4a9c('0x66')]();var _0x36b574=prompt(_0x4a9c('0x7ce'),_0x36c5cb[_0x4a9c('0x14c')][_0x4a9c('0xfe')]);_0x36c5cb[_0x4a9c('0x14c')][_0x4a9c('0xfe')]=_0x36b574[_0x4a9c('0x14')](0x0,0xf);}),_0x1db92a['checked']=_0x4aa0f4,_0x1db92a['onchange']=_0x5eec63[_0x4a9c('0x3f3')](function(_0x436201){_0x577d1e(_0x436201['target'][_0x4a9c('0x72b')]);}),_0x1cbc3a[_0x4a9c('0x72b')]=_0x4d6fe1,_0x1cbc3a[_0x4a9c('0x343')]=_0x5eec63[_0x4a9c('0x3f3')](function(_0x43aac8){_0x4d6fe1=_0x1cbc3a[_0x4a9c('0x72b')],_0x3a7043[_0x4a9c('0x761')]=!_0x4d6fe1,_0x172d43(_0x4a9c('0x17a'),_0x4d6fe1?_0x4a9c('0x546'):_0x4a9c('0x5be'));});}());},{'id':_0x29abfb,'d':_0x59ae57,1:_0x2fa2dc,2:_0x3819aa,4:_0x294956,33:_0xf64976,5:_0x5a830c,6:_0x314054,'a':_0x279de2,'aa':_0x3ffe51,7:_0x3240fe,8:_0x3d7bcc,'sp':_0xc9cdef,9:_0x33566d,'h':_0x307e5c,11:_0x2f28a3,12:_0x73335e,13:_0x1d1a5a,14:_0xae190e,15:_0x213b75,16:_0x5be3ae,17:_0x484a6a,18:_0x33e301,19:_0x27a2ae,20:_0x3fc1a3,'ac':_0x2e201f,'ad':_0x22fcd4,'an':_0x473b7f,'st':_0x3ea678,'sa':_0x249f17,'us':_0x19b31f,'ch':_0x572b10,'mm':_0x44075f,'t':_0x4c75a5,'p':_0x2a377d,'pp':_0x540260}),_0x285aad(),setTimeout(()=>_0x3be7a7(),0xbb8);},function(_0x5e9259){console['error'](_0x4a9c('0x6e3'),_0x5e9259),alert(_0x4a9c('0x61c')+_0x5e9259),_0x59ae57(_0x4a9c('0x4bf'));});}var _0x406324,_0x348c09=new _0x1a13b8(_0xd14dd8,_0x5eec63),_0x459e5a=Math['PI'],_0x55b547=0x2*_0x459e5a;function _0x172d43(_0x227458,_0x1f2338){_0x406324&&localStorage['setItem'](_0x227458,_0x1f2338);}function _0x17e8f0(_0x513d2a){return _0x406324?localStorage['getItem'](_0x513d2a):null;}Math[_0x4a9c('0x78')]=function(_0x2b2617,_0x37ef4a,_0x5cf071){Math[_0x4a9c('0x20')](_0x37ef4a-_0x2b2617)>_0x459e5a&&(_0x2b2617>_0x37ef4a?_0x37ef4a+=_0x55b547:_0x2b2617+=_0x55b547);var _0x20d358=_0x37ef4a+(_0x2b2617-_0x37ef4a)*_0x5cf071;return _0x20d358>=0x0&&_0x20d358<=_0x55b547?_0x20d358:_0x20d358%_0x55b547;},CanvasRenderingContext2D['prototype'][_0x4a9c('0x586')]=function(_0x21c913,_0x121482,_0x21ffb5,_0x4a98ed,_0xf156c){return _0x21ffb5<0x2*_0xf156c&&(_0xf156c=_0x21ffb5/0x2),_0x4a98ed<0x2*_0xf156c&&(_0xf156c=_0x4a98ed/0x2),_0xf156c<0x0&&(_0xf156c=0x0),this['beginPath'](),this[_0x4a9c('0x5dd')](_0x21c913+_0xf156c,_0x121482),this[_0x4a9c('0x7f2')](_0x21c913+_0x21ffb5,_0x121482,_0x21c913+_0x21ffb5,_0x121482+_0x4a98ed,_0xf156c),this[_0x4a9c('0x7f2')](_0x21c913+_0x21ffb5,_0x121482+_0x4a98ed,_0x21c913,_0x121482+_0x4a98ed,_0xf156c),this['arcTo'](_0x21c913,_0x121482+_0x4a98ed,_0x21c913,_0x121482,_0xf156c),this[_0x4a9c('0x7f2')](_0x21c913,_0x121482,_0x21c913+_0x21ffb5,_0x121482,_0xf156c),this[_0x4a9c('0x793')](),this;},_0x4a9c('0x45d')!=typeof Storage&&(_0x406324=!0x0),_0x17e8f0('consent')||(consentBlock[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0xcd')),window[_0x4a9c('0x3c3')]=function(_0x5cb2f6){_0x5cb2f6?(consentBlock[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x172d43(_0x4a9c('0x476'),0x1)):$(_0x4a9c('0x79c'))[_0x4a9c('0x39b')]('shake');};var _0x4aa0f4,_0x4d6fe1,_0x208eee,_0x22b64a,_0x47304f,_0x12de68,_0xff3350,_0x3cba8b,_0x28a0df,_0x3bff16,_0x472093,_0x1ff6e3,_0x32d802,_0x328c5f,_0x494254=_0x17e8f0(_0x4a9c('0x354')),_0x17b6c1=0x1,_0x2984d3=Date[_0x4a9c('0x6a1')](),_0x30eff1=[],_0x60dc7b=[],_0x479e5c=[],_0xe4187f=[],_0x5833b8=[],_0x49861c=new _0x1a5a1c(_0x5e13d3,_0x5833b8,_0x60dc7b,_0x30eff1,_0x4ee612,_0x15d498,_0xd14dd8,_0x5eec63),_0x26ebd6=_0x38732f(0x46),_0x149773=_0x38732f(0x47),_0x5b205e=new _0x26ebd6(_0x30eff1,_0x149773,_0x60dc7b,_0x15d498,null,_0xd14dd8,_0x5eec63),_0x3e5525=0x1,_0x4ee023=0x0,_0x41a5c1=0x0,_0x1b6d49=0x0,_0x5d08b2={'id':-0x1,'startX':0x0,'startY':0x0,'currentX':0x0,'currentY':0x0},_0x5ef49f={'id':-0x1,'startX':0x0,'startY':0x0,'currentX':0x0,'currentY':0x0},_0x11c090=0x0,_0x43afbc=_0xd14dd8[_0x4a9c('0x20e')],_0x240669=_0xd14dd8[_0x4a9c('0x55e')],_0x43f566=!0x1,_0x37ba2b=(document[_0x4a9c('0x46e')](_0x4a9c('0x18b')),document['getElementById'](_0x4a9c('0x345'))),_0x1b9346=document[_0x4a9c('0x46e')](_0x4a9c('0x13c')),_0x16c9ee=document[_0x4a9c('0x46e')](_0x4a9c('0x2b3')),_0xd8442b=document[_0x4a9c('0x46e')](_0x4a9c('0x1ff')),_0x19e053=document[_0x4a9c('0x46e')]('joinPartyButton'),_0x560f4a=document[_0x4a9c('0x46e')](_0x4a9c('0x43f')),_0x59f47c=_0x560f4a[_0x4a9c('0x32d')]('span')[0x0],_0x113ac9=document[_0x4a9c('0x46e')](_0x4a9c('0x4f3')),_0x315858=document[_0x4a9c('0x46e')](_0x4a9c('0x394')),_0x322dd0=document[_0x4a9c('0x46e')](_0x4a9c('0x5d2')),_0x5a1add=document[_0x4a9c('0x46e')](_0x4a9c('0x1f5')),_0x33e287=_0x5a1add[_0x4a9c('0x5a1')]('2d'),_0x75db73=document[_0x4a9c('0x46e')]('serverBrowser'),_0x1db92a=document[_0x4a9c('0x46e')](_0x4a9c('0x388')),_0x1cbc3a=document[_0x4a9c('0x46e')]('showPing'),_0x3a7043=(document[_0x4a9c('0x46e')]('playMusic'),document[_0x4a9c('0x46e')](_0x4a9c('0x5c9'))),_0x3dcfe3=document[_0x4a9c('0x46e')](_0x4a9c('0xb5')),_0x524f3e=document[_0x4a9c('0x46e')](_0x4a9c('0x195')),_0x242c3a=document[_0x4a9c('0x46e')](_0x4a9c('0x418')),_0x4e1e9d=document['getElementById'](_0x4a9c('0x468')),_0x3bc497=document[_0x4a9c('0x46e')](_0x4a9c('0x243')),_0x106ad6=document[_0x4a9c('0x46e')](_0x4a9c('0x4bd')),_0x2d9ad9=document[_0x4a9c('0x46e')](_0x4a9c('0xfb')),_0x527cf9=document[_0x4a9c('0x46e')](_0x4a9c('0x19c')),_0x28f0ac=document[_0x4a9c('0x46e')](_0x4a9c('0x15f')),_0x309355=document['getElementById'](_0x4a9c('0xed')),_0x38bdea=document['getElementById'](_0x4a9c('0x116')),_0x15b3a5=document[_0x4a9c('0x46e')](_0x4a9c('0x7ac')),_0x4f5d79=document[_0x4a9c('0x46e')](_0x4a9c('0x22b')),_0x5baa8e=document['getElementById'](_0x4a9c('0xf')),_0x5ca6b5=document[_0x4a9c('0x46e')](_0x4a9c('0x5d8')),_0x51c5a3=document[_0x4a9c('0x46e')](_0x4a9c('0xe5')),_0x56a71e=document[_0x4a9c('0x46e')]('upgradeHolder'),_0x501fa0=document['getElementById'](_0x4a9c('0x7f3')),_0x313f3b=document[_0x4a9c('0x46e')](_0x4a9c('0x0')),_0x6933b7=document['getElementById'](_0x4a9c('0x28a')),_0x4ded02=document[_0x4a9c('0x46e')]('allianceManager'),_0x388c11=document[_0x4a9c('0x46e')](_0x4a9c('0x6aa')),_0x15266e=document[_0x4a9c('0x46e')](_0x4a9c('0x644')),_0x446483=document[_0x4a9c('0x46e')](_0x4a9c('0x202')),_0x4fd410=_0x388c11['getContext']('2d');_0x388c11['width']=0x12c,_0x388c11[_0x4a9c('0x178')]=0x12c;var _0x55e875=document['getElementById'](_0x4a9c('0x718')),_0x17bf0b=document[_0x4a9c('0x46e')](_0x4a9c('0x95')),_0x4f32c3=document['getElementById']('noticationDisplay'),_0x5d3413=_0x40c0bc['hats'],_0x1c6b93=_0x40c0bc[_0x4a9c('0x21c')],_0x4ee612=new _0xe168fd(_0x33b07f,_0xe4187f,_0x5eec63,_0xd14dd8),_0x55f187=_0x4a9c('0x65e'),_0x218d6c='#3d3f42';function _0x29abfb(_0x7887c3){_0x479e5c=_0x7887c3[_0x4a9c('0x493')];}var _0x132930=document[_0x4a9c('0x46e')](_0x4a9c('0x506')),_0x42b7ec=[{'name':_0x4a9c('0x727'),'link':'https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw'},{'name':'Tweak\x20Big','link':'https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw'},{'name':'Arena\x20Closer','link':_0x4a9c('0x686')},{'name':'Godenot','link':_0x4a9c('0x792')},{'name':'RajNoobTV','link':_0x4a9c('0x643')},{'name':_0x4a9c('0x625'),'link':'https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw'},{'name':_0x4a9c('0x525'),'link':_0x4a9c('0x136')},{'name':'Pidyohago','link':_0x4a9c('0x755')},{'name':_0x4a9c('0x445'),'link':_0x4a9c('0x360')},{'name':_0x4a9c('0x246'),'link':_0x4a9c('0x4f1')},{'name':_0x4a9c('0x795'),'link':_0x4a9c('0x288')},{'name':_0x4a9c('0xad'),'link':_0x4a9c('0x347')},{'name':_0x4a9c('0x142'),'link':_0x4a9c('0x5bc')},{'name':_0x4a9c('0x419'),'link':_0x4a9c('0x695')},{'name':'巧克力','link':_0x4a9c('0x414')},{'name':_0x4a9c('0x4fd'),'link':_0x4a9c('0x658')},{'name':_0x4a9c('0x67f'),'link':'https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g'}],_0x29b248=_0x42b7ec[_0x5eec63[_0x4a9c('0x78c')](0x0,_0x42b7ec['length']-0x1)];_0x132930[_0x4a9c('0x177')]=_0x4a9c('0x358')+_0x29b248[_0x4a9c('0xd8')]+_0x4a9c('0x421')+_0x29b248[_0x4a9c('0x9e')]+'</a>';var _0x3975bf=!0x0,_0x5b4202=!0x1,_0x5b43a3=!0x1;function _0x59ae57(_0xc2b51){_0x481801[_0x4a9c('0x29a')](),_0x555889(_0xc2b51);}function _0x555889(_0xeb98a){_0x37ba2b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]='block',_0x3bc497[_0x4a9c('0x6f0')]['display']=_0x4a9c('0x4b7'),_0x524f3e['style'][_0x4a9c('0x259')]='none',_0x15266e[_0x4a9c('0x6f0')]['display']=_0x4a9c('0x4b7'),_0x4e1e9d[_0x4a9c('0x6f0')][_0x4a9c('0x259')]='block',_0x4e1e9d[_0x4a9c('0x177')]=_0xeb98a+_0x4a9c('0x744');}window[_0x4a9c('0x6e')]=function(){_0x3975bf=!0x1;},window[_0x4a9c('0x703')]=function(){_0x3975bf=!0x0,_0xff3350&&_0xff3350[_0x4a9c('0x1b7')]&&_0x249099();},window[_0x4a9c('0x1ab')]=function(){_0x5b4202=!0x0,_0xec0b40(),setTimeout(function(){},0x0);},window[_0x4a9c('0x23a')]=function(){_0x5b43a3=!0x0,_0xec0b40();},_0x5a1add[_0x4a9c('0x269')]=function(){return!0x1;};function _0x285aad(){var _0x551e21,_0x202866,_0x579e9c='',_0x4470bf=0x0;for(var _0x1165f9 in _0x3a0eff[_0x4a9c('0x61f')]){for(var _0x400bef=_0x3a0eff[_0x4a9c('0x61f')][_0x1165f9],_0x403c2a=0x0,_0x35d522=0x0;_0x35d522<_0x400bef[_0x4a9c('0x3e1')];_0x35d522++)for(var _0x47fee7=0x0;_0x47fee7<_0x400bef[_0x35d522][_0x4a9c('0x5db')][_0x4a9c('0x3e1')];_0x47fee7++)_0x403c2a+=_0x400bef[_0x35d522][_0x4a9c('0x5db')][_0x47fee7][_0x4a9c('0x11')];_0x4470bf+=_0x403c2a;var _0x5cae19=_0x3a0eff[_0x4a9c('0x53d')][_0x1165f9][_0x4a9c('0x9e')];_0x579e9c+=_0x4a9c('0x40f')+_0x5cae19+_0x4a9c('0xa4')+_0x403c2a+_0x4a9c('0x6e0');for(var _0x438fcd=0x0;_0x438fcd<_0x400bef['length'];_0x438fcd++)for(var _0x5d98e9=_0x400bef[_0x438fcd],_0xc98410=0x0;_0xc98410<_0x5d98e9[_0x4a9c('0x5db')][_0x4a9c('0x3e1')];_0xc98410++){var _0x56468d=_0x5d98e9[_0x4a9c('0x5db')][_0xc98410],_0x247f54=0x1*_0x5d98e9[_0x4a9c('0x76b')]+_0xc98410+0x1,_0xdf2bdb=_0x3a0eff[_0x4a9c('0x692')]&&_0x3a0eff[_0x4a9c('0x692')][_0x4a9c('0x52a')]===_0x5d98e9[_0x4a9c('0x52a')]&&_0x3a0eff[_0x4a9c('0x692')][_0x4a9c('0x76b')]===_0x5d98e9[_0x4a9c('0x76b')]&&_0x3a0eff['gameIndex']==_0xc98410,_0x2972cc=_0x5cae19+'\x20'+_0x247f54+'\x20['+Math[_0x4a9c('0xe8')](_0x56468d[_0x4a9c('0x11')],_0xd14dd8[_0x4a9c('0x2b4')])+'/'+_0xd14dd8[_0x4a9c('0x2b4')]+']';let _0x32dc9d=_0x3a0eff[_0x4a9c('0x250')](_0x1165f9)+':'+_0x438fcd+':'+_0xc98410;_0xdf2bdb&&(_0xd8442b[_0x4a9c('0x32d')](_0x4a9c('0x176'))[0x0][_0x4a9c('0x53e')]=_0x32dc9d),_0x579e9c+=_0x4a9c('0x18a')+_0x32dc9d+'\x27\x20'+(_0xdf2bdb?_0x4a9c('0x1f4'):'')+'>'+_0x2972cc+_0x4a9c('0x49');}_0x579e9c+=_0x4a9c('0x5fe');}_0x579e9c+=_0x4a9c('0x636')+_0x4470bf+_0x4a9c('0x6e0'),_0x75db73['innerHTML']=_0x579e9c,_0x4a9c('0x5cc')==location[_0x4a9c('0x65a')]?(_0x551e21=_0x4a9c('0x191'),_0x202866='//moomoo.io/'):(_0x551e21=_0x4a9c('0x9a'),_0x202866=_0x4a9c('0x633')),document[_0x4a9c('0x46e')](_0x4a9c('0x1'))['innerHTML']=_0x4a9c('0x4af')+_0x202866+'\x27>'+_0x551e21+_0x4a9c('0x113');}function _0x3be7a7(){var _0x14b042=new XMLHttpRequest();_0x14b042['onreadystatechange']=function(){0x4==this[_0x4a9c('0x255')]&&(0xc8==this[_0x4a9c('0x71e')]?(window[_0x4a9c('0x41')]=JSON[_0x4a9c('0x632')](this[_0x4a9c('0x11c')]),_0x3a0eff[_0x4a9c('0x677')](vultr[_0x4a9c('0x61f')]),_0x285aad()):console['error'](_0x4a9c('0x6b5'),this['status']));},_0x14b042[_0x4a9c('0x73d')](_0x4a9c('0x450'),_0x4a9c('0x596'),!0x0),_0x14b042['send']();}_0x75db73[_0x4a9c('0x6e9')](_0x4a9c('0x40c'),_0x5eec63[_0x4a9c('0x3f3')](function(){let _0x49fe01=_0x75db73[_0x4a9c('0xfe')][_0x4a9c('0x41e')](':');_0x3a0eff[_0x4a9c('0xa3')](_0x49fe01[0x0],_0x49fe01[0x1],_0x49fe01[0x2]);}));var _0x42a884=document[_0x4a9c('0x46e')](_0x4a9c('0x227')),_0x570dc8=null,_0x4e4ad5=null;window[_0x4a9c('0x79a')](function(_0x532068){_0x532068['game'][_0x4a9c('0x25e')](_0x42a884),_0x4e4ad5=_0x532068;});var _0x547318=0x493e0,_0x12e43e=0x0,_0x524d56=0x0;function _0x51489b(){if(!cpmstarAPI||!_0x4e4ad5)return console[_0x4a9c('0x22')](_0x4a9c('0x1e0'),!!cpmstarAPI,!!_0x4e4ad5),void _0x266447();(_0x570dc8=new _0x4e4ad5[(_0x4a9c('0x75'))][(_0x4a9c('0x766'))](_0x4a9c('0x376')))[_0x4a9c('0x6e9')]('ad_closed',function(_0x197ab3){console[_0x4a9c('0x22')](_0x4a9c('0x105')),_0x503ff1();}),_0x570dc8[_0x4a9c('0x6e9')](_0x4a9c('0x520'),function(_0x530c68){console[_0x4a9c('0x22')](_0x4a9c('0x6c9')),_0x570dc8[_0x4a9c('0x8a')]();}),_0x570dc8[_0x4a9c('0x6e9')](_0x4a9c('0xb4'),function(_0x389c5c){console['log'](_0x4a9c('0x543'),_0x389c5c),_0x503ff1();}),_0x570dc8[_0x4a9c('0x6fb')](),_0x42a884[_0x4a9c('0x6f0')]['display']=_0x4a9c('0xcd');}function _0x503ff1(){_0x42a884[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x266447();}function _0x2041ff(_0x39a181,_0xbcee3c,_0x233519){if(_0xff3350&&_0x39a181)if(_0x5eec63[_0x4a9c('0x5fc')](_0x5baa8e),_0x5baa8e[_0x4a9c('0x43a')][_0x4a9c('0x46a')](_0x4a9c('0x3b1')),_0x5eec63[_0x4a9c('0xb')]({'id':_0x4a9c('0x4f9'),'text':_0x5eec63[_0x4a9c('0xd5')](_0x39a181[_0x4a9c('0x9e')]),'parent':_0x5baa8e}),_0x5eec63[_0x4a9c('0xb')]({'id':_0x4a9c('0x17b'),'text':_0x39a181[_0x4a9c('0x4d0')],'parent':_0x5baa8e}),_0x233519);else if(_0xbcee3c)_0x5eec63[_0x4a9c('0xb')]({'class':'itemInfoReq','text':_0x39a181[_0x4a9c('0x5d4')]?_0x4a9c('0xf3'):_0x4a9c('0x437'),'parent':_0x5baa8e});else{for(var _0x650626=0x0;_0x650626<_0x39a181[_0x4a9c('0x400')][_0x4a9c('0x3e1')];_0x650626+=0x2)_0x5eec63[_0x4a9c('0xb')]({'class':'itemInfoReq','html':_0x39a181['req'][_0x650626]+_0x4a9c('0x338')+_0x39a181[_0x4a9c('0x400')][_0x650626+0x1]+_0x4a9c('0x7c8'),'parent':_0x5baa8e});_0x39a181[_0x4a9c('0x2ae')][_0x4a9c('0x791')]&&_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x7bc'),'text':(_0xff3350[_0x4a9c('0x19b')][_0x39a181[_0x4a9c('0x2ae')]['id']]||0x0)+'/'+_0x39a181['group'][_0x4a9c('0x791')],'parent':_0x5baa8e});}else _0x5baa8e[_0x4a9c('0x43a')][_0x4a9c('0x39e')](_0x4a9c('0x3b1'));}window['showPreAd']=_0x51489b;var _0x60ebe1,_0xcebb0c,_0x439268,_0x32d0e7=[],_0x239b5b=[];function _0x473b7f(_0x17dc74,_0x21ac3f){_0x32d0e7['push']({'sid':_0x17dc74,'name':_0x21ac3f}),_0x37a65d();}function _0x37a65d(){if(_0x32d0e7[0x0]){var _0x212ecc=_0x32d0e7[0x0];_0x5eec63[_0x4a9c('0x5fc')](_0x4f32c3),_0x4f32c3['style'][_0x4a9c('0x259')]='block',_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x7ea'),'text':_0x212ecc[_0x4a9c('0x9e')],'parent':_0x4f32c3}),_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x701'),'html':_0x4a9c('0x42a'),'parent':_0x4f32c3,'onclick':function(){_0x3ad055(0x0);},'hookTouch':!0x0}),_0x5eec63['generateElement']({'class':'notifButton','html':_0x4a9c('0x514'),'parent':_0x4f32c3,'onclick':function(){_0x3ad055(0x1);},'hookTouch':!0x0});}else _0x4f32c3['style'][_0x4a9c('0x259')]=_0x4a9c('0x4b7');}function _0x2e201f(_0x2ac2f1){_0x479e5c['push'](_0x2ac2f1),_0x4a9c('0xcd')==_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x4b8e3f();}function _0x3ea678(_0x5ca026,_0x5f2a0e){_0xff3350&&(_0xff3350[_0x4a9c('0x4c1')]=_0x5ca026,_0xff3350[_0x4a9c('0x6d6')]=_0x5f2a0e,_0x4a9c('0xcd')==_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x4b8e3f());}function _0x249f17(_0x2692d9){_0x239b5b=_0x2692d9,_0x4a9c('0xcd')==_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x4b8e3f();}function _0x22fcd4(_0x42401e){for(var _0x27f7fc=_0x479e5c['length']-0x1;_0x27f7fc>=0x0;_0x27f7fc--)_0x479e5c[_0x27f7fc]['sid']==_0x42401e&&_0x479e5c[_0x4a9c('0x7d5')](_0x27f7fc,0x1);_0x4a9c('0xcd')==_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x4b8e3f();}function _0x4b8e3f(){if(_0xff3350&&_0xff3350[_0x4a9c('0x1b7')]){if(_0x562017(),_0x55e875[_0x4a9c('0x6f0')]['display']=_0x4a9c('0x4b7'),_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0xcd'),_0x5eec63[_0x4a9c('0x5fc')](_0x6933b7),_0xff3350[_0x4a9c('0x4c1')])for(var _0x1ac207=0x0;_0x1ac207<_0x239b5b[_0x4a9c('0x3e1')];_0x1ac207+=0x2)!function(_0x16e1c8){var _0x1c1633=_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x64c'),'style':_0x4a9c('0x230')+(_0x239b5b[_0x16e1c8]==_0xff3350[_0x4a9c('0x56f')]?_0x4a9c('0x128'):_0x4a9c('0xc1')),'text':_0x239b5b[_0x16e1c8+0x1],'parent':_0x6933b7});_0xff3350['isOwner']&&_0x239b5b[_0x16e1c8]!=_0xff3350[_0x4a9c('0x56f')]&&_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x424'),'text':_0x4a9c('0x1f3'),'onclick':function(){_0x517d0d(_0x239b5b[_0x16e1c8]);},'hookTouch':!0x0,'parent':_0x1c1633});}(_0x1ac207);else if(_0x479e5c['length'])for(_0x1ac207=0x0;_0x1ac207<_0x479e5c['length'];++_0x1ac207)!function(_0x5d8d75){var _0x4a6b5c=_0x5eec63[_0x4a9c('0xb')]({'class':'allianceItem','style':_0x4a9c('0x230')+(_0x479e5c[_0x5d8d75][_0x4a9c('0x56f')]==_0xff3350[_0x4a9c('0x4c1')]?_0x4a9c('0x128'):_0x4a9c('0xc1')),'text':_0x479e5c[_0x5d8d75]['sid'],'parent':_0x6933b7});_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x424'),'text':_0x4a9c('0x62e'),'onclick':function(){_0x15da5c(_0x5d8d75);},'hookTouch':!0x0,'parent':_0x4a6b5c});}(_0x1ac207);else _0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x64c'),'text':_0x4a9c('0x43'),'parent':_0x6933b7});_0x5eec63[_0x4a9c('0x5fc')](_0x4ded02),_0xff3350[_0x4a9c('0x4c1')]?_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x405'),'style':_0x4a9c('0x2a6'),'text':_0xff3350[_0x4a9c('0x6d6')]?_0x4a9c('0x5e6'):_0x4a9c('0x11d'),'onclick':function(){_0x17bee1();},'hookTouch':!0x0,'parent':_0x4ded02}):(_0x5eec63[_0x4a9c('0xb')]({'tag':_0x4a9c('0x7dd'),'type':_0x4a9c('0x7ed'),'id':_0x4a9c('0x29c'),'maxLength':0x7,'placeholder':_0x4a9c('0x406'),'ontouchstart':function(_0x5a989c){_0x5a989c[_0x4a9c('0x66')]();var _0x2c3042=prompt(_0x4a9c('0x406'),_0x5a989c[_0x4a9c('0x14c')][_0x4a9c('0xfe')]);_0x5a989c[_0x4a9c('0x14c')][_0x4a9c('0xfe')]=_0x2c3042[_0x4a9c('0x14')](0x0,0x7);},'parent':_0x4ded02}),_0x5eec63[_0x4a9c('0xb')]({'tag':_0x4a9c('0x753'),'class':_0x4a9c('0x405'),'style':_0x4a9c('0x7e5'),'text':_0x4a9c('0x4da'),'onclick':function(){_0x404ea9();},'hookTouch':!0x0,'parent':_0x4ded02}));}}function _0x3ad055(_0x291a26){_0x481801[_0x4a9c('0x1c2')]('11',_0x32d0e7[0x0][_0x4a9c('0x56f')],_0x291a26),_0x32d0e7['splice'](0x0,0x1),_0x37a65d();}var _0x178fa4=function(_0x95628d,_0x4f6c0a,_0x82ec23){let _0x378594=![];let _0xae6aa2=undefined;return{'start'(_0x25310c){if(_0x25310c==_0x95628d&&document[_0x4a9c('0x44')]['id'][_0x4a9c('0x5c2')]()!==_0x4a9c('0x8c')){_0x378594=!![];if(_0xae6aa2===undefined){_0xae6aa2=setInterval(()=>{_0x4f6c0a();if(!_0x378594){clearInterval(_0xae6aa2);_0xae6aa2=undefined;console[_0x4a9c('0x22')](_0x4a9c('0x2e8'));}},_0x82ec23);}}},'stop'(_0x2d41d6){if(_0x2d41d6==_0x95628d&&document[_0x4a9c('0x44')]['id'][_0x4a9c('0x5c2')]()!==_0x4a9c('0x8c')){_0x378594=![];}}};};function _0x517d0d(_0x53c7a4){_0x481801['send']('12',_0x53c7a4);}function _0x15da5c(_0x5a1180){_0x481801['send']('10',_0x479e5c[_0x5a1180][_0x4a9c('0x56f')]);}function _0x404ea9(){_0x481801['send']('8',document[_0x4a9c('0x46e')](_0x4a9c('0x29c'))['value']);}function _0x17bee1(){_0x32d0e7=[],_0x37a65d(),_0x481801['send']('9');}var _0x16004e,_0x239fc0=[];function _0x2a377d(_0x451d88,_0x53cd3a){for(var _0x5d6c72=0x0;_0x5d6c72<_0x239fc0[_0x4a9c('0x3e1')];++_0x5d6c72)if(!_0x239fc0[_0x5d6c72][_0x4a9c('0x21')]){_0x16004e=_0x239fc0[_0x5d6c72];break;}_0x16004e||(_0x16004e=new function(){this['init']=function(_0x4fe554,_0x343421){this[_0x4a9c('0x6f4')]=0x0,this['x']=_0x4fe554,this['y']=_0x343421,this[_0x4a9c('0x21')]=!0x0;},this[_0x4a9c('0x5ab')]=function(_0x474b64,_0x4490ac){this[_0x4a9c('0x21')]&&(this[_0x4a9c('0x6f4')]+=0.05*_0x4490ac,this['scale']>=_0xd14dd8['mapPingScale']?this[_0x4a9c('0x21')]=!0x1:(_0x474b64[_0x4a9c('0x749')]=0x1-Math['max'](0x0,this['scale']/_0xd14dd8[_0x4a9c('0x1a8')]),_0x474b64[_0x4a9c('0x4b6')](),_0x474b64['arc'](this['x']/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11[_0x4a9c('0x149')],this['y']/_0xd14dd8['mapScale']*_0x388c11['width'],this['scale'],0x0,0x2*Math['PI']),_0x474b64[_0x4a9c('0x16c')]()));};}(),_0x239fc0[_0x4a9c('0x2d2')](_0x16004e)),_0x16004e[_0x4a9c('0xf9')](_0x451d88,_0x53cd3a);}function _0x44075f(_0x46ed46){_0xcebb0c=_0x46ed46;}var _0x2008f5=0x0;function _0x19b31f(_0x10afc6,_0x5409df,_0x52daa2){_0x52daa2?_0x10afc6?_0xff3350[_0x4a9c('0xe3')]=_0x5409df:_0xff3350[_0x4a9c('0x7f8')][_0x5409df]=0x1:_0x10afc6?_0xff3350[_0x4a9c('0x148')]=_0x5409df:_0xff3350[_0x4a9c('0x74f')][_0x5409df]=0x1,_0x4a9c('0xcd')==_0x55e875[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x2c35d7();}function _0x2c35d7(){if(_0xff3350){_0x5eec63[_0x4a9c('0x5fc')](_0x17bf0b);for(var _0x23cd5a=_0x2008f5,_0x467e06=_0x23cd5a?_0x1c6b93:_0x5d3413,_0x40084a=0x0;_0x40084a<_0x467e06[_0x4a9c('0x3e1')];++_0x40084a)_0x467e06[_0x40084a][_0x4a9c('0x490')]||function(_0x55cff1){var _0x3ee57b=_0x5eec63[_0x4a9c('0xb')]({'id':_0x4a9c('0x106')+_0x55cff1,'class':_0x4a9c('0x58b'),'onmouseout':function(){_0x2041ff();},'onmouseover':function(){_0x2041ff(_0x467e06[_0x55cff1],!0x1,!0x0);},'parent':_0x17bf0b});_0x5eec63[_0x4a9c('0x6fc')](_0x3ee57b,!0x0),_0x5eec63[_0x4a9c('0xb')]({'tag':_0x4a9c('0x6e4'),'class':_0x4a9c('0x51b'),'src':_0x4a9c('0x5bb')+(_0x23cd5a?'accessories/access_':_0x4a9c('0x138'))+_0x467e06[_0x55cff1]['id']+(_0x467e06[_0x55cff1][_0x4a9c('0x7ef')]?'_p':'')+_0x4a9c('0x79e'),'parent':_0x3ee57b}),_0x5eec63['generateElement']({'tag':_0x4a9c('0x176'),'text':_0x467e06[_0x55cff1][_0x4a9c('0x9e')],'parent':_0x3ee57b}),(_0x23cd5a?_0xff3350[_0x4a9c('0x7f8')][_0x467e06[_0x55cff1]['id']]:_0xff3350[_0x4a9c('0x74f')][_0x467e06[_0x55cff1]['id']])?(_0x23cd5a?_0xff3350[_0x4a9c('0xe3')]:_0xff3350[_0x4a9c('0x148')])==_0x467e06[_0x55cff1]['id']?_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x424'),'style':_0x4a9c('0x789'),'text':_0x4a9c('0x3fa'),'onclick':function(){_0x2085e2(0x0,_0x23cd5a);},'hookTouch':!0x0,'parent':_0x3ee57b}):_0x5eec63[_0x4a9c('0xb')]({'class':'joinAlBtn','style':_0x4a9c('0x789'),'text':'Equip','onclick':function(){_0x2085e2(_0x467e06[_0x55cff1]['id'],_0x23cd5a);},'hookTouch':!0x0,'parent':_0x3ee57b}):(_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x424'),'style':'margin-top:\x205px','text':'Buy','onclick':function(){_0x4207a6(_0x467e06[_0x55cff1]['id'],_0x23cd5a);},'hookTouch':!0x0,'parent':_0x3ee57b}),_0x5eec63[_0x4a9c('0xb')]({'tag':_0x4a9c('0x176'),'class':_0x4a9c('0x17'),'text':_0x467e06[_0x55cff1][_0x4a9c('0xf7')],'parent':_0x3ee57b}));}(_0x40084a);}}function _0x2085e2(_0x37ff60,_0x1a1532){_0x481801[_0x4a9c('0x1c2')](_0x4a9c('0x557'),0x0,_0x37ff60,_0x1a1532);}function _0x4207a6(_0x2f232f,_0x3a4ca4){_0x481801[_0x4a9c('0x1c2')](_0x4a9c('0x557'),0x1,_0x2f232f,_0x3a4ca4);}function _0x21e402(){_0x55e875['style'][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x562017();}function _0x484a6a(_0x9c49a0,_0x46d38a){_0x9c49a0&&(_0x46d38a?_0xff3350[_0x4a9c('0x53c')]=_0x9c49a0:_0xff3350['items']=_0x9c49a0);for(var _0x5dd927=0x0;_0x5dd927<_0x15d498['list'][_0x4a9c('0x3e1')];++_0x5dd927){var _0x386c7b=_0x15d498[_0x4a9c('0x53c')][_0x4a9c('0x3e1')]+_0x5dd927;document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x386c7b)[_0x4a9c('0x6f0')]['display']=_0xff3350[_0x4a9c('0x103')][_0x4a9c('0x312')](_0x15d498[_0x4a9c('0x7f5')][_0x5dd927]['id'])>=0x0?'inline-block':_0x4a9c('0x4b7');}for(_0x5dd927=0x0;_0x5dd927<_0x15d498['weapons']['length'];++_0x5dd927)document['getElementById'](_0x4a9c('0x478')+_0x5dd927)['style']['display']=_0xff3350[_0x4a9c('0x53c')][_0x15d498[_0x4a9c('0x53c')][_0x5dd927][_0x4a9c('0x5d4')]]==_0x15d498[_0x4a9c('0x53c')][_0x5dd927]['id']?'inline-block':_0x4a9c('0x4b7');}function _0x577d1e(_0x3ddba0){_0x4aa0f4=_0x3ddba0,_0x17b6c1=_0x3ddba0&&window[_0x4a9c('0x801')]||0x1,_0x1db92a[_0x4a9c('0x72b')]=_0x3ddba0,_0x172d43(_0x4a9c('0x38a'),_0x3ddba0[_0x4a9c('0x1c1')]()),_0xc54002();}function _0x45db1d(){for(var _0xf20d91='',_0x39c6bc=0x0;_0x39c6bc<_0xd14dd8[_0x4a9c('0x5b0')][_0x4a9c('0x3e1')];++_0x39c6bc)_0xf20d91+=_0x39c6bc==_0x11c090?'<div\x20class=\x27skinColorItem\x20activeSkin\x27\x20style=\x27background-color:'+_0xd14dd8[_0x4a9c('0x5b0')][_0x39c6bc]+_0x4a9c('0x609')+_0x39c6bc+_0x4a9c('0x23'):_0x4a9c('0x743')+_0xd14dd8[_0x4a9c('0x5b0')][_0x39c6bc]+_0x4a9c('0x609')+_0x39c6bc+')\x27></div>';_0x446483[_0x4a9c('0x177')]=_0xf20d91;}var _0x1b43b3=document[_0x4a9c('0x46e')](_0x4a9c('0x49c')),_0x1d9905=document[_0x4a9c('0x46e')](_0x4a9c('0x449'));function _0x30ce30(){_0x4bf18d?setTimeout(function(){var _0x2a2801=prompt(_0x4a9c('0x565'));_0x2a2801&&_0xe400c(_0x2a2801);},0x1):_0x4a9c('0xcd')==_0x1d9905['style']['display']?(_0x1b43b3[_0x4a9c('0xfe')]&&_0xe400c(_0x1b43b3[_0x4a9c('0xfe')]),_0x562017()):(_0x55e875[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x1d9905[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0xcd'),_0x1b43b3[_0x4a9c('0x4d5')](),_0x249099()),_0x1b43b3[_0x4a9c('0xfe')]='';}function _0xe400c(_0xa4752f){_0x481801[_0x4a9c('0x1c2')]('ch',_0xa4752f['slice'](0x0,0x1e));}function _0x562017(){_0x1b43b3['value']='',_0x1d9905['style'][_0x4a9c('0x259')]=_0x4a9c('0x4b7');}var _0x4bf18d,_0x5c8aed,_0x282b3e=[_0x4a9c('0x6b1')];function _0x572b10(_0x4387e2,_0x360179){var _0x4ae4f2=_0x23f692(_0x4387e2);_0x4ae4f2&&(_0x4ae4f2[_0x4a9c('0x56e')]=function(_0x3f823b){for(var _0x2298bf,_0xc94583=0x0;_0xc94583<_0x282b3e[_0x4a9c('0x3e1')];++_0xc94583)if(_0x3f823b[_0x4a9c('0x312')](_0x282b3e[_0xc94583])>-0x1){_0x2298bf='';for(var _0x4b3337=0x0;_0x4b3337<_0x282b3e[_0xc94583]['length'];++_0x4b3337)_0x2298bf+=_0x2298bf[_0x4a9c('0x3e1')]?'o':'M';var _0x333db4=new RegExp(_0x282b3e[_0xc94583],'g');_0x3f823b=_0x3f823b[_0x4a9c('0x4e5')](_0x333db4,_0x2298bf);}return _0x3f823b;}(_0x360179),_0x4ae4f2['chatCountdown']=_0xd14dd8['chatCountdown']);}function _0xc54002(){_0x32d802=window[_0x4a9c('0x7a3')],_0x328c5f=window[_0x4a9c('0x6c5')];var _0x5757c5=Math[_0x4a9c('0x790')](_0x32d802/_0x43afbc,_0x328c5f/_0x240669)*_0x17b6c1;_0x5a1add[_0x4a9c('0x149')]=_0x32d802*_0x17b6c1,_0x5a1add[_0x4a9c('0x178')]=_0x328c5f*_0x17b6c1,_0x5a1add['style'][_0x4a9c('0x149')]=_0x32d802+'px',_0x5a1add[_0x4a9c('0x6f0')][_0x4a9c('0x178')]=_0x328c5f+'px',_0x33e287[_0x4a9c('0x51a')](_0x5757c5,0x0,0x0,_0x5757c5,(_0x32d802*_0x17b6c1-_0x43afbc*_0x5757c5)/0x2,(_0x328c5f*_0x17b6c1-_0x240669*_0x5757c5)/0x2);}function _0x463683(_0x2736dc){(_0x4bf18d=_0x2736dc)?_0x242c3a[_0x4a9c('0x43a')][_0x4a9c('0x46a')](_0x4a9c('0x3a1')):_0x242c3a[_0x4a9c('0x43a')]['remove'](_0x4a9c('0x3a1'));}function _0x42f2c2(_0x1d4951){_0x1d4951['preventDefault'](),_0x1d4951[_0x4a9c('0x67e')](),_0x463683(!0x0);for(var _0x13200c=0x0;_0x13200c<_0x1d4951[_0x4a9c('0x1a')][_0x4a9c('0x3e1')];_0x13200c++){var _0x2a6abc=_0x1d4951[_0x4a9c('0x1a')][_0x13200c];_0x2a6abc[_0x4a9c('0xae')]==_0x5d08b2['id']?(_0x5d08b2['id']=-0x1,_0x4f17c9()):_0x2a6abc[_0x4a9c('0xae')]==_0x5ef49f['id']&&(_0x5ef49f['id']=-0x1,_0xff3350['buildIndex']>=0x0&&(_0x12de68=0x1,_0xe6e42e()),_0x12de68=0x0,_0xe6e42e());}}function _0x3e741a(){return _0xff3350?(-0x1!=_0x5ef49f['id']?_0x5c8aed=Math['atan2'](_0x5ef49f['currentY']-_0x5ef49f['startY'],_0x5ef49f[_0x4a9c('0x2cb')]-_0x5ef49f[_0x4a9c('0x5f3')]):_0xff3350['lockDir']||_0x4bf18d||(_0x5c8aed=Math[_0x4a9c('0x723')](_0x1b6d49-_0x328c5f/0x2,_0x41a5c1-_0x32d802/0x2)),_0x5eec63[_0x4a9c('0x5f6')](_0x5c8aed||0x0,0x2)):0x0;}window[_0x4a9c('0x6e9')](_0x4a9c('0x43e'),_0x5eec63[_0x4a9c('0x3f3')](_0xc54002)),_0xc54002(),_0x463683(!0x1),window[_0x4a9c('0x48e')]=_0x463683,_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x23e'),_0x5eec63['checkTrusted'](function(_0x20cbeb){_0x20cbeb[_0x4a9c('0x66')](),_0x20cbeb[_0x4a9c('0x67e')](),_0x463683(!0x0);for(var _0x2db891=0x0;_0x2db891<_0x20cbeb[_0x4a9c('0x1a')][_0x4a9c('0x3e1')];_0x2db891++){var _0x136dac=_0x20cbeb[_0x4a9c('0x1a')][_0x2db891];_0x136dac[_0x4a9c('0xae')]==_0x5d08b2['id']?(_0x5d08b2['currentX']=_0x136dac['pageX'],_0x5d08b2['currentY']=_0x136dac[_0x4a9c('0x2d4')],_0x4f17c9()):_0x136dac[_0x4a9c('0xae')]==_0x5ef49f['id']&&(_0x5ef49f[_0x4a9c('0x2cb')]=_0x136dac['pageX'],_0x5ef49f[_0x4a9c('0x1eb')]=_0x136dac['pageY'],_0x12de68=0x1);}}),!0x1),_0x5a1add[_0x4a9c('0x6e9')]('touchstart',_0x5eec63[_0x4a9c('0x3f3')](function(_0x28fcf2){_0x28fcf2[_0x4a9c('0x66')](),_0x28fcf2[_0x4a9c('0x67e')](),_0x463683(!0x0);for(var _0x359a15=0x0;_0x359a15<_0x28fcf2['changedTouches']['length'];_0x359a15++){var _0x264ed5=_0x28fcf2['changedTouches'][_0x359a15];_0x264ed5[_0x4a9c('0x1c')]<document[_0x4a9c('0x2ec')][_0x4a9c('0x48')]/0x2&&-0x1==_0x5d08b2['id']?(_0x5d08b2['id']=_0x264ed5['identifier'],_0x5d08b2[_0x4a9c('0x5f3')]=_0x5d08b2['currentX']=_0x264ed5[_0x4a9c('0x1c')],_0x5d08b2['startY']=_0x5d08b2[_0x4a9c('0x1eb')]=_0x264ed5[_0x4a9c('0x2d4')],_0x4f17c9()):_0x264ed5[_0x4a9c('0x1c')]>document[_0x4a9c('0x2ec')][_0x4a9c('0x48')]/0x2&&-0x1==_0x5ef49f['id']&&(_0x5ef49f['id']=_0x264ed5[_0x4a9c('0xae')],_0x5ef49f[_0x4a9c('0x5f3')]=_0x5ef49f[_0x4a9c('0x2cb')]=_0x264ed5[_0x4a9c('0x1c')],_0x5ef49f['startY']=_0x5ef49f[_0x4a9c('0x1eb')]=_0x264ed5[_0x4a9c('0x2d4')],_0xff3350[_0x4a9c('0x209')]<0x0&&(_0x12de68=0x1,_0xe6e42e()));}}),!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x553'),_0x5eec63[_0x4a9c('0x3f3')](_0x42f2c2),!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x4ed'),_0x5eec63[_0x4a9c('0x3f3')](_0x42f2c2),!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x55a'),_0x5eec63['checkTrusted'](_0x42f2c2),!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x200'),function(_0x1c4514){_0x1c4514[_0x4a9c('0x66')](),_0x1c4514[_0x4a9c('0x67e')](),_0x463683(!0x1),_0x41a5c1=_0x1c4514[_0x4a9c('0x45b')],_0x1b6d49=_0x1c4514[_0x4a9c('0x119')];},!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x7b1'),function(_0x163289){_0x463683(!0x1),0x1!=_0x12de68&&(_0x12de68=0x1,_0xe6e42e());},!0x1),_0x5a1add[_0x4a9c('0x6e9')](_0x4a9c('0x92'),function(_0x126d7b){_0x463683(!0x1),0x0!=_0x12de68&&(_0x12de68=0x0,_0xe6e42e());},!0x1);var _0x24c294={},_0x30e6c0={87:[0x0,-0x1],38:[0x0,-0x1],83:[0x0,0x1],40:[0x0,0x1],65:[-0x1,0x0],37:[-0x1,0x0],68:[0x1,0x0],39:[0x1,0x0]};function _0x249099(){_0x24c294={},_0x481801['send'](_0x4a9c('0xd6'));}function _0x4b4561(){return _0x4a9c('0xcd')!=_0x313f3b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]&&_0x4a9c('0xcd')!=_0x1d9905[_0x4a9c('0x6f0')][_0x4a9c('0x259')];}function _0xe6e42e(){_0xff3350&&_0xff3350[_0x4a9c('0x1b7')]&&_0x481801[_0x4a9c('0x1c2')]('c',_0x12de68,_0xff3350[_0x4a9c('0x209')]>=0x0?_0x3e741a():null);}window[_0x4a9c('0x6e9')](_0x4a9c('0x1d2'),_0x5eec63[_0x4a9c('0x3f3')](function(_0x434d5b){var _0x4531c6=_0x434d5b[_0x4a9c('0x2b7')]||_0x434d5b[_0x4a9c('0x7a6')]||0x0;0x1b==_0x4531c6?_0x21e402():_0xff3350&&_0xff3350['alive']&&_0x4b4561()&&(_0x24c294[_0x4531c6]||(_0x24c294[_0x4531c6]=0x1,0x45==_0x4531c6?_0x481801['send']('7',0x1):0x43==_0x4531c6?(_0x439268||(_0x439268={}),_0x439268['x']=_0xff3350['x'],_0x439268['y']=_0xff3350['y']):0x58==_0x4531c6?(_0xff3350[_0x4a9c('0x4e8')]=_0xff3350[_0x4a9c('0x4e8')]?0x0:0x1,_0x481801[_0x4a9c('0x1c2')]('7',0x0)):null!=_0xff3350[_0x4a9c('0x53c')][_0x4531c6-0x31]?_0x15fcfc(_0xff3350[_0x4a9c('0x53c')][_0x4531c6-0x31],!0x0):null!=_0xff3350[_0x4a9c('0x103')][_0x4531c6-0x31-_0xff3350[_0x4a9c('0x53c')]['length']]?_0x15fcfc(_0xff3350[_0x4a9c('0x103')][_0x4531c6-0x31-_0xff3350[_0x4a9c('0x53c')]['length']]):0x51==_0x4531c6?_0x15fcfc(_0xff3350[_0x4a9c('0x103')][0x0]):0x52==_0x4531c6?_0x4cd2bf():_0x30e6c0[_0x4531c6]?_0x4f17c9():0x20==_0x4531c6&&(_0x12de68=0x1,_0xe6e42e())));})),window['addEventListener'](_0x4a9c('0x38c'),_0x5eec63[_0x4a9c('0x3f3')](function(_0x830d4d){if(_0xff3350&&_0xff3350[_0x4a9c('0x1b7')]){var _0x5bed94=_0x830d4d[_0x4a9c('0x2b7')]||_0x830d4d[_0x4a9c('0x7a6')]||0x0;0xd==_0x5bed94?_0x30ce30():_0x4b4561()&&_0x24c294[_0x5bed94]&&(_0x24c294[_0x5bed94]=0x0,_0x30e6c0[_0x5bed94]?_0x4f17c9():0x20==_0x5bed94&&(_0x12de68=0x0,_0xe6e42e()));}}));var _0x37e585=void 0x0;function _0x4f17c9(){var _0x13210b=function(){var _0x41f97a=0x0,_0x339afb=0x0;if(-0x1!=_0x5d08b2['id'])_0x41f97a+=_0x5d08b2[_0x4a9c('0x2cb')]-_0x5d08b2['startX'],_0x339afb+=_0x5d08b2['currentY']-_0x5d08b2[_0x4a9c('0x17d')];else for(var _0x525843 in _0x30e6c0){var _0x2ec3e2=_0x30e6c0[_0x525843];_0x41f97a+=!!_0x24c294[_0x525843]*_0x2ec3e2[0x0],_0x339afb+=!!_0x24c294[_0x525843]*_0x2ec3e2[0x1];}return 0x0==_0x41f97a&&0x0==_0x339afb?void 0x0:_0x5eec63[_0x4a9c('0x5f6')](Math[_0x4a9c('0x723')](_0x339afb,_0x41f97a),0x2);}();(null==_0x37e585||null==_0x13210b||Math[_0x4a9c('0x20')](_0x13210b-_0x37e585)>0.3)&&(_0x481801['send']('33',_0x13210b),_0x37e585=_0x13210b);}function _0x4cd2bf(){_0x481801[_0x4a9c('0x1c2')]('14',0x1);}function _0x15fcfc(_0x4f234d,_0x2069fa){_0x481801[_0x4a9c('0x1c2')]('5',_0x4f234d,_0x2069fa);}function _0x266447(){_0x172d43(_0x4a9c('0x339'),_0x4f5d79[_0x4a9c('0xfe')]),!_0x43f566&&_0x481801[_0x4a9c('0x79')]&&(_0x43f566=!0x0,_0x348c09[_0x4a9c('0x3e0')](_0x4a9c('0x65c')),_0x555889('Loading...'),_0x481801[_0x4a9c('0x1c2')]('sp',{'name':_0x4f5d79[_0x4a9c('0xfe')],'moofoll':_0x494254,'skin':_0x11c090}));}var _0x1b211d=!0x0;function _0x2fa2dc(_0x1776ae){_0x4e1e9d[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x524f3e[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0xcd'),_0x37ba2b[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x24c294={},_0x3cba8b=_0x1776ae,_0x12de68=0x0,_0x43f566=!0x0,_0x1b211d&&(_0x1b211d=!0x1,_0xe4187f['length']=0x0);}function _0x4c75a5(_0x57d732,_0x104d48,_0x30117c,_0x16f88e){_0x30e254[_0x4a9c('0x3ad')](_0x57d732,_0x104d48,0x32,0.18,0x1f4,Math['abs'](_0x30117c),_0x30117c>=0x0?_0x4a9c('0x128'):_0x4a9c('0x5'));}var _0x3d0486=0x1869f;function _0x2f28a3(){_0x43f566=!0x1;try{factorem[_0x4a9c('0x15')]([0x2],!0x0);}catch(_0x14be78){}_0x3bc497[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x21e402(),_0x60ebe1={'x':_0xff3350['x'],'y':_0xff3350['y']},_0x4e1e9d[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x15266e[_0x4a9c('0x6f0')]['display']=_0x4a9c('0xcd'),_0x15266e[_0x4a9c('0x6f0')][_0x4a9c('0x568')]=_0x4a9c('0x5fa'),_0x3d0486=0x0,setTimeout(function(){_0x524f3e['style'][_0x4a9c('0x259')]=_0x4a9c('0xcd'),_0x37ba2b[_0x4a9c('0x6f0')]['display']=_0x4a9c('0xcd'),_0x15266e[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7');},_0xd14dd8[_0x4a9c('0x15d')]),_0x3be7a7();}function _0x1d1a5a(_0x1b7294){_0xff3350&&_0x4ee612['removeAllItems'](_0x1b7294);}function _0x73335e(_0x4988cf){_0x4ee612[_0x4a9c('0x166')](_0x4988cf);}function _0x27993d(){_0x2d9ad9[_0x4a9c('0x53e')]=_0xff3350[_0x4a9c('0xfc')],_0x527cf9[_0x4a9c('0x53e')]=_0xff3350[_0x4a9c('0x220')],_0x28f0ac[_0x4a9c('0x53e')]=_0xff3350['wood'],_0x309355[_0x4a9c('0x53e')]=_0xff3350[_0x4a9c('0x1f6')],_0x38bdea[_0x4a9c('0x53e')]=_0xff3350['kills'];}var _0x4e11ed={},_0xce2641=['crown',_0x4a9c('0x1cb')],_0x3a058c=[];function _0x5be3ae(_0x310c09,_0x38a06b){if(_0xff3350[_0x4a9c('0x323')]=_0x310c09,_0xff3350[_0x4a9c('0x9b')]=_0x38a06b,_0x310c09>0x0){_0x3a058c[_0x4a9c('0x3e1')]=0x0,_0x5eec63[_0x4a9c('0x5fc')](_0x56a71e);for(var _0x1b8dc4=0x0;_0x1b8dc4<_0x15d498['weapons'][_0x4a9c('0x3e1')];++_0x1b8dc4)_0x15d498[_0x4a9c('0x53c')][_0x1b8dc4]['age']==_0x38a06b&&(null==_0x15d498[_0x4a9c('0x53c')][_0x1b8dc4][_0x4a9c('0x637')]||_0xff3350[_0x4a9c('0x53c')][_0x4a9c('0x312')](_0x15d498[_0x4a9c('0x53c')][_0x1b8dc4][_0x4a9c('0x637')])>=0x0)&&(_0x5eec63[_0x4a9c('0xb')]({'id':'upgradeItem'+_0x1b8dc4,'class':_0x4a9c('0x478'),'onmouseout':function(){_0x2041ff();},'parent':_0x56a71e})[_0x4a9c('0x6f0')][_0x4a9c('0x26a')]=document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x1b8dc4)[_0x4a9c('0x6f0')]['backgroundImage'],_0x3a058c[_0x4a9c('0x2d2')](_0x1b8dc4));for(_0x1b8dc4=0x0;_0x1b8dc4<_0x15d498[_0x4a9c('0x7f5')][_0x4a9c('0x3e1')];++_0x1b8dc4)if(_0x15d498[_0x4a9c('0x7f5')][_0x1b8dc4]['age']==_0x38a06b&&(null==_0x15d498[_0x4a9c('0x7f5')][_0x1b8dc4]['pre']||_0xff3350[_0x4a9c('0x103')]['indexOf'](_0x15d498['list'][_0x1b8dc4][_0x4a9c('0x637')])>=0x0)){var _0x1b49c0=_0x15d498[_0x4a9c('0x53c')]['length']+_0x1b8dc4;_0x5eec63[_0x4a9c('0xb')]({'id':_0x4a9c('0x2fa')+_0x1b49c0,'class':_0x4a9c('0x478'),'onmouseout':function(){_0x2041ff();},'parent':_0x56a71e})[_0x4a9c('0x6f0')]['backgroundImage']=document[_0x4a9c('0x46e')](_0x4a9c('0x478')+_0x1b49c0)['style'][_0x4a9c('0x26a')],_0x3a058c['push'](_0x1b49c0);}for(_0x1b8dc4=0x0;_0x1b8dc4<_0x3a058c[_0x4a9c('0x3e1')];_0x1b8dc4++)!function(_0x2819f4){var _0x3f746f=document['getElementById'](_0x4a9c('0x2fa')+_0x2819f4);_0x3f746f[_0x4a9c('0x530')]=function(){_0x15d498[_0x4a9c('0x53c')][_0x2819f4]?_0x2041ff(_0x15d498[_0x4a9c('0x53c')][_0x2819f4],!0x0):_0x2041ff(_0x15d498['list'][_0x2819f4-_0x15d498[_0x4a9c('0x53c')][_0x4a9c('0x3e1')]]);},_0x3f746f[_0x4a9c('0x2c7')]=_0x5eec63['checkTrusted'](function(){_0x481801[_0x4a9c('0x1c2')]('6',_0x2819f4);}),_0x5eec63[_0x4a9c('0x6fc')](_0x3f746f);}(_0x3a058c[_0x1b8dc4]);_0x3a058c[_0x4a9c('0x3e1')]?(_0x56a71e['style']['display']='block',_0x501fa0[_0x4a9c('0x6f0')]['display']=_0x4a9c('0xcd'),_0x501fa0[_0x4a9c('0x177')]=_0x4a9c('0x2e5')+_0x310c09+')'):(_0x56a71e[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x501fa0[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x2041ff());}else _0x56a71e['style']['display']=_0x4a9c('0x4b7'),_0x501fa0[_0x4a9c('0x6f0')][_0x4a9c('0x259')]=_0x4a9c('0x4b7'),_0x2041ff();}function _0x213b75(_0x2bdf5c,_0x29142a,_0xe4689f){null!=_0x2bdf5c&&(_0xff3350['XP']=_0x2bdf5c),null!=_0x29142a&&(_0xff3350[_0x4a9c('0x17f')]=_0x29142a),null!=_0xe4689f&&(_0xff3350[_0x4a9c('0x1fc')]=_0xe4689f),_0xe4689f==_0xd14dd8[_0x4a9c('0x1ba')]?(_0x5ca6b5[_0x4a9c('0x177')]=_0x4a9c('0x67a'),_0x51c5a3[_0x4a9c('0x6f0')][_0x4a9c('0x149')]=_0x4a9c('0x4d9')):(_0x5ca6b5[_0x4a9c('0x177')]=_0x4a9c('0x542')+_0xff3350[_0x4a9c('0x1fc')]+'\x20['+_0xff3350['XP']+'/'+_0xff3350['maxXP']+']',_0x51c5a3[_0x4a9c('0x6f0')][_0x4a9c('0x149')]=_0xff3350['XP']/_0xff3350[_0x4a9c('0x17f')]*0x64+'%');}function _0x5a830c(_0x4b5cb8){_0x5eec63[_0x4a9c('0x5fc')](_0x15b3a5);for(var _0x3c087e=0x1,_0x3ef2fa=0x0;_0x3ef2fa<_0x4b5cb8['length'];_0x3ef2fa+=0x3)!function(_0x5dce03){_0x5eec63['generateElement']({'class':'leaderHolder','parent':_0x15b3a5,'children':[_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x5e8'),'style':_0x4a9c('0x230')+(_0x4b5cb8[_0x5dce03]==_0x3cba8b?_0x4a9c('0x128'):'rgba(255,255,255,0.6)'),'text':_0x3c087e+'.\x20'+(''!=_0x4b5cb8[_0x5dce03+0x1]?_0x4b5cb8[_0x5dce03+0x1]:'unknown')}),_0x5eec63[_0x4a9c('0xb')]({'class':_0x4a9c('0x6a2'),'text':_0x5eec63[_0x4a9c('0x9f')](_0x4b5cb8[_0x5dce03+0x2])||'0'})]});}(_0x3ef2fa),_0x3c087e++;}function _0x3adc44(_0x3fb615,_0x5ac3bb,_0xfed20a,_0x469b45){_0x33e287['save'](),_0x33e287[_0x4a9c('0x51a')](0x1,0x0,0x0,0x1,0x0,0x0),_0x33e287[_0x4a9c('0x6f4')](_0x17b6c1,_0x17b6c1);var _0x31e95a=0x32;_0x33e287[_0x4a9c('0x4b6')](),_0x33e287['arc'](_0x3fb615,_0x5ac3bb,_0x31e95a,0x0,0x2*Math['PI'],!0x1),_0x33e287['closePath'](),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x4a1'),_0x33e287['fill'](),_0x31e95a=0x32;var _0x25a4c4=_0xfed20a-_0x3fb615,_0x13a310=_0x469b45-_0x5ac3bb,_0x2c6528=Math[_0x4a9c('0x5f0')](Math[_0x4a9c('0x555')](_0x25a4c4,0x2)+Math[_0x4a9c('0x555')](_0x13a310,0x2)),_0x3fbaaf=_0x2c6528>_0x31e95a?_0x2c6528/_0x31e95a:0x1;_0x25a4c4/=_0x3fbaaf,_0x13a310/=_0x3fbaaf,_0x33e287[_0x4a9c('0x4b6')](),_0x33e287['arc'](_0x3fb615+_0x25a4c4,_0x5ac3bb+_0x13a310,0.5*_0x31e95a,0x0,0x2*Math['PI'],!0x1),_0x33e287[_0x4a9c('0x793')](),_0x33e287['fillStyle']=_0x4a9c('0x6d1'),_0x33e287[_0x4a9c('0x702')](),_0x33e287[_0x4a9c('0x786')]();}function _0x5a7e51(_0x4969cd,_0x403acf,_0x3908ca){for(var _0x14e116=0x0;_0x14e116<_0x5833b8[_0x4a9c('0x3e1')];++_0x14e116)(_0x28a0df=_0x5833b8[_0x14e116])[_0x4a9c('0x21')]&&_0x28a0df['layer']==_0x4969cd&&(_0x28a0df[_0x4a9c('0x5ab')](_0x208eee),_0x28a0df['active']&&_0xb902be(_0x28a0df['x']-_0x403acf,_0x28a0df['y']-_0x3908ca,_0x28a0df[_0x4a9c('0x6f4')])&&(_0x33e287[_0x4a9c('0x3e4')](),_0x33e287['translate'](_0x28a0df['x']-_0x403acf,_0x28a0df['y']-_0x3908ca),_0x33e287['rotate'](_0x28a0df[_0x4a9c('0x638')]),_0x4b741e(0x0,0x0,_0x28a0df,_0x33e287,0x1),_0x33e287[_0x4a9c('0x786')]()));}var _0x38264a={};function _0x4b741e(_0x1795e9,_0x1370ac,_0x420c1b,_0x5c3eaa,_0xa2d063){if(_0x420c1b[_0x4a9c('0x34f')]){var _0x27d140=_0x15d498[_0x4a9c('0x6f6')][_0x420c1b[_0x4a9c('0x36f')]][_0x4a9c('0x34f')],_0x2ee0ba=_0x38264a[_0x27d140];_0x2ee0ba||((_0x2ee0ba=new Image())[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0;},_0x2ee0ba[_0x4a9c('0x34f')]=_0x4a9c('0x5a5')+_0x27d140+'.png',_0x38264a[_0x27d140]=_0x2ee0ba),_0x2ee0ba['isLoaded']&&_0x5c3eaa[_0x4a9c('0x7f4')](_0x2ee0ba,_0x1795e9-_0x420c1b[_0x4a9c('0x6f4')]/0x2,_0x1370ac-_0x420c1b[_0x4a9c('0x6f4')]/0x2,_0x420c1b[_0x4a9c('0x6f4')],_0x420c1b[_0x4a9c('0x6f4')]);}else 0x1==_0x420c1b[_0x4a9c('0x36f')]&&(_0x5c3eaa[_0x4a9c('0x7e4')]=_0x4a9c('0x4d6'),_0x15bb91(_0x1795e9,_0x1370ac,_0x420c1b['scale'],_0x5c3eaa));}function _0x51878a(_0x15d2c4,_0x3e9fb5,_0x15f352,_0x26493f){var _0x5aec38=_0xd14dd8[_0x4a9c('0x55f')]+_0x26493f,_0x4368d1=_0xd14dd8[_0x4a9c('0x1d6')]/0x2-_0x3e9fb5-_0x5aec38/0x2;_0x4368d1<_0x240669&&_0x4368d1+_0x5aec38>0x0&&_0x15f352[_0x4a9c('0x33a')](0x0,_0x4368d1,_0x43afbc,_0x5aec38);}function _0x5d3e3c(_0x538d81,_0x36f1e0,_0xaca92e){for(var _0xe2d1bb,_0xfec226,_0x5e0975,_0x29ec73=0x0;_0x29ec73<_0xe4187f[_0x4a9c('0x3e1')];++_0x29ec73)(_0x28a0df=_0xe4187f[_0x29ec73])['active']&&(_0xfec226=_0x28a0df['x']+_0x28a0df['xWiggle']-_0x36f1e0,_0x5e0975=_0x28a0df['y']+_0x28a0df[_0x4a9c('0x309')]-_0xaca92e,0x0==_0x538d81&&_0x28a0df[_0x4a9c('0x5ab')](_0x208eee),_0x28a0df[_0x4a9c('0x127')]==_0x538d81&&_0xb902be(_0xfec226,_0x5e0975,_0x28a0df['scale']+(_0x28a0df[_0x4a9c('0x122')]||0x0))&&(_0x33e287[_0x4a9c('0x749')]=_0x28a0df['hideFromEnemy']?0.6:0x1,_0x28a0df[_0x4a9c('0x696')]?(_0xe2d1bb=_0x510944(_0x28a0df),_0x33e287[_0x4a9c('0x3e4')](),_0x33e287[_0x4a9c('0x429')](_0xfec226,_0x5e0975),_0x33e287[_0x4a9c('0x20b')](_0x28a0df['dir']),_0x33e287[_0x4a9c('0x7f4')](_0xe2d1bb,-_0xe2d1bb[_0x4a9c('0x149')]/0x2,-_0xe2d1bb[_0x4a9c('0x178')]/0x2),_0x28a0df['blocker']&&(_0x33e287[_0x4a9c('0x150')]=_0x4a9c('0x190'),_0x33e287['globalAlpha']=0.3,_0x33e287[_0x4a9c('0x39f')]=0x6,_0x15bb91(0x0,0x0,_0x28a0df[_0x4a9c('0x122')],_0x33e287,!0x1,!0x0)),_0x33e287[_0x4a9c('0x786')]()):(_0xe2d1bb=_0x367c76(_0x28a0df),_0x33e287[_0x4a9c('0x7f4')](_0xe2d1bb,_0xfec226-_0xe2d1bb[_0x4a9c('0x149')]/0x2,_0x5e0975-_0xe2d1bb['height']/0x2))));}function _0x3240fe(_0x1c5db5,_0x1f0066,_0x5a54ad){(_0x28a0df=_0x23f692(_0x1c5db5))&&_0x28a0df[_0x4a9c('0x1c0')](_0x1f0066,_0x5a54ad);}function _0x5487a0(_0x5c12df,_0x2e62d1,_0x5a1eb2){_0x33e287['globalAlpha']=0x1;for(var _0x49b3e5=0x0;_0x49b3e5<_0x60dc7b[_0x4a9c('0x3e1')];++_0x49b3e5)(_0x28a0df=_0x60dc7b[_0x49b3e5])['zIndex']==_0x5a1eb2&&(_0x28a0df[_0x4a9c('0x1f8')](_0x208eee),_0x28a0df[_0x4a9c('0x3b1')]&&(_0x28a0df[_0x4a9c('0x139')]+=0.002*_0x208eee,_0x1ff6e3=(_0x28a0df==_0xff3350?_0x3e741a():_0x28a0df[_0x4a9c('0x638')])+_0x28a0df[_0x4a9c('0x3eb')],_0x33e287[_0x4a9c('0x3e4')](),_0x33e287['translate'](_0x28a0df['x']-_0x5c12df,_0x28a0df['y']-_0x2e62d1),_0x33e287[_0x4a9c('0x20b')](_0x1ff6e3),_0x13e032(_0x28a0df,_0x33e287),_0x33e287[_0x4a9c('0x786')]()));}function _0x13e032(_0x55ac3e,_0x216746){(_0x216746=_0x216746||_0x33e287)[_0x4a9c('0x39f')]=5.5,_0x216746[_0x4a9c('0x2d6')]=_0x4a9c('0x66d');var _0x3f6c2c=Math['PI']/0x4*(_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x2ed')]||0x1),_0x68f358=_0x55ac3e['buildIndex']<0x0&&_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]]['hndS']||0x1,_0x5aa7fe=_0x55ac3e['buildIndex']<0x0&&_0x15d498[_0x4a9c('0x53c')][_0x55ac3e['weaponIndex']][_0x4a9c('0xdf')]||0x1;if(_0x55ac3e[_0x4a9c('0xe3')]>0x0&&function(_0x29b081,_0x5d7301,_0x303f9f){if(!(_0x2fc86b=_0x1bc8c3[_0x29b081])){var _0x413465=new Image();_0x413465[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0,this['onload']=null;},_0x413465[_0x4a9c('0x34f')]=_0x4a9c('0x317')+_0x29b081+_0x4a9c('0x79e'),_0x1bc8c3[_0x29b081]=_0x413465,_0x2fc86b=_0x413465;}var _0x8540a6=_0x50d7ba[_0x29b081];if(!_0x8540a6){for(var _0x1326bf=0x0;_0x1326bf<_0x1c6b93[_0x4a9c('0x3e1')];++_0x1326bf)if(_0x1c6b93[_0x1326bf]['id']==_0x29b081){_0x8540a6=_0x1c6b93[_0x1326bf];break;}_0x50d7ba[_0x29b081]=_0x8540a6;}_0x2fc86b[_0x4a9c('0x156')]&&(_0x5d7301[_0x4a9c('0x3e4')](),_0x5d7301[_0x4a9c('0x429')](-0x14-(_0x8540a6[_0x4a9c('0x204')]||0x0),0x0),_0x8540a6[_0x4a9c('0x108')]&&_0x5d7301[_0x4a9c('0x20b')](_0x303f9f[_0x4a9c('0x139')]),_0x5d7301[_0x4a9c('0x7f4')](_0x2fc86b,-_0x8540a6['scale']/0x2,-_0x8540a6[_0x4a9c('0x6f4')]/0x2,_0x8540a6[_0x4a9c('0x6f4')],_0x8540a6[_0x4a9c('0x6f4')]),_0x5d7301[_0x4a9c('0x786')]());}(_0x55ac3e['tailIndex'],_0x216746,_0x55ac3e),_0x55ac3e[_0x4a9c('0x209')]<0x0&&!_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x464')]&&(_0x23d884(_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]],_0xd14dd8['weaponVariants'][_0x55ac3e[_0x4a9c('0x5de')]][_0x4a9c('0x34f')],_0x55ac3e[_0x4a9c('0x6f4')],0x0,_0x216746),null==_0x15d498['weapons'][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x5c4')]||_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x2c')]||_0x4b741e(_0x55ac3e[_0x4a9c('0x6f4')],0x0,_0x15d498['projectiles'][_0x15d498[_0x4a9c('0x53c')][_0x55ac3e['weaponIndex']][_0x4a9c('0x5c4')]],_0x33e287)),_0x216746[_0x4a9c('0x7e4')]=_0xd14dd8[_0x4a9c('0x5b0')][_0x55ac3e['skinColor']],_0x15bb91(_0x55ac3e['scale']*Math[_0x4a9c('0x431')](_0x3f6c2c),_0x55ac3e[_0x4a9c('0x6f4')]*Math[_0x4a9c('0x1bb')](_0x3f6c2c),0xe),_0x15bb91(_0x55ac3e[_0x4a9c('0x6f4')]*_0x5aa7fe*Math[_0x4a9c('0x431')](-_0x3f6c2c*_0x68f358),_0x55ac3e[_0x4a9c('0x6f4')]*_0x5aa7fe*Math[_0x4a9c('0x1bb')](-_0x3f6c2c*_0x68f358),0xe),_0x55ac3e[_0x4a9c('0x209')]<0x0&&_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]]['aboveHand']&&(_0x23d884(_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]],_0xd14dd8[_0x4a9c('0x329')][_0x55ac3e[_0x4a9c('0x5de')]]['src'],_0x55ac3e['scale'],0x0,_0x216746),null==_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x5c4')]||_0x15d498[_0x4a9c('0x53c')][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x2c')]||_0x4b741e(_0x55ac3e[_0x4a9c('0x6f4')],0x0,_0x15d498['projectiles'][_0x15d498['weapons'][_0x55ac3e[_0x4a9c('0x452')]][_0x4a9c('0x5c4')]],_0x33e287)),_0x55ac3e[_0x4a9c('0x209')]>=0x0){var _0x52b116=_0x510944(_0x15d498[_0x4a9c('0x7f5')][_0x55ac3e[_0x4a9c('0x209')]]);_0x216746[_0x4a9c('0x7f4')](_0x52b116,_0x55ac3e[_0x4a9c('0x6f4')]-_0x15d498['list'][_0x55ac3e[_0x4a9c('0x209')]][_0x4a9c('0x725')],-_0x52b116[_0x4a9c('0x149')]/0x2);}_0x15bb91(0x0,0x0,_0x55ac3e[_0x4a9c('0x6f4')],_0x216746),_0x55ac3e[_0x4a9c('0x148')]>0x0&&(_0x216746[_0x4a9c('0x20b')](Math['PI']/0x2),function _0x491264(_0x155af4,_0x105098,_0xf9817e,_0x3d7f7f){if(!(_0x2fc86b=_0x54b149[_0x155af4])){var _0x2c61a0=new Image();_0x2c61a0[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0,this[_0x4a9c('0x1ab')]=null;},_0x2c61a0[_0x4a9c('0x34f')]=_0x4a9c('0x6f1')+_0x155af4+_0x4a9c('0x79e'),_0x54b149[_0x155af4]=_0x2c61a0,_0x2fc86b=_0x2c61a0;}var _0x390c51=_0xf9817e||_0x50978d[_0x155af4];if(!_0x390c51){for(var _0x424d36=0x0;_0x424d36<_0x5d3413['length'];++_0x424d36)if(_0x5d3413[_0x424d36]['id']==_0x155af4){_0x390c51=_0x5d3413[_0x424d36];break;}_0x50978d[_0x155af4]=_0x390c51;}_0x2fc86b['isLoaded']&&_0x105098[_0x4a9c('0x7f4')](_0x2fc86b,-_0x390c51[_0x4a9c('0x6f4')]/0x2,-_0x390c51['scale']/0x2,_0x390c51[_0x4a9c('0x6f4')],_0x390c51['scale']),!_0xf9817e&&_0x390c51['topSprite']&&(_0x105098[_0x4a9c('0x3e4')](),_0x105098['rotate'](_0x3d7f7f[_0x4a9c('0x139')]),_0x491264(_0x155af4+'_top',_0x105098,_0x390c51,_0x3d7f7f),_0x105098[_0x4a9c('0x786')]());}(_0x55ac3e[_0x4a9c('0x148')],_0x216746,null,_0x55ac3e));}var _0x2fc86b,_0x54b149={},_0x50978d={},_0x1bc8c3={},_0x50d7ba={},_0x2b581b={};function _0x23d884(_0x2ece0f,_0x57bfff,_0x3b22ad,_0x169c5b,_0x16045d){var _0x3eb02d=_0x2ece0f['src']+(_0x57bfff||''),_0x140cf0=_0x2b581b[_0x3eb02d];_0x140cf0||((_0x140cf0=new Image())[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0;},_0x140cf0['src']=_0x4a9c('0x5a5')+_0x3eb02d+_0x4a9c('0x79e'),_0x2b581b[_0x3eb02d]=_0x140cf0),_0x140cf0[_0x4a9c('0x156')]&&_0x16045d[_0x4a9c('0x7f4')](_0x140cf0,_0x3b22ad+_0x2ece0f[_0x4a9c('0x204')]-_0x2ece0f['length']/0x2,_0x169c5b+_0x2ece0f[_0x4a9c('0x57b')]-_0x2ece0f[_0x4a9c('0x149')]/0x2,_0x2ece0f['length'],_0x2ece0f[_0x4a9c('0x149')]);}var _0x5c1c07={};function _0x367c76(_0x3cc959){var _0x5dae08=_0x3cc959['y']>=_0xd14dd8[_0x4a9c('0x1d6')]-_0xd14dd8[_0x4a9c('0x60e')]?0x2:_0x3cc959['y']<=_0xd14dd8['snowBiomeTop']?0x1:0x0,_0x5545c1=_0x3cc959[_0x4a9c('0x5d4')]+'_'+_0x3cc959[_0x4a9c('0x6f4')]+'_'+_0x5dae08,_0xb50302=_0x5c1c07[_0x5545c1];if(!_0xb50302){var _0x4769a7=document['createElement'](_0x4a9c('0x768'));_0x4769a7[_0x4a9c('0x149')]=_0x4769a7[_0x4a9c('0x178')]=2.1*_0x3cc959[_0x4a9c('0x6f4')]+5.5;var _0x71577e=_0x4769a7[_0x4a9c('0x5a1')]('2d');if(_0x71577e['translate'](_0x4769a7[_0x4a9c('0x149')]/0x2,_0x4769a7['height']/0x2),_0x71577e['rotate'](_0x5eec63[_0x4a9c('0x60')](0x0,Math['PI'])),_0x71577e['strokeStyle']=_0x55f187,_0x71577e[_0x4a9c('0x39f')]=5.5,0x0==_0x3cc959[_0x4a9c('0x5d4')])for(var _0x4bfe4d,_0x254d4c=0x0;_0x254d4c<0x2;++_0x254d4c)_0x149ef1(_0x71577e,0x7,_0x4bfe4d=_0x28a0df[_0x4a9c('0x6f4')]*(_0x254d4c?0.5:0x1),0.7*_0x4bfe4d),_0x71577e[_0x4a9c('0x7e4')]=_0x5dae08?_0x254d4c?_0x4a9c('0x128'):_0x4a9c('0x18e'):_0x254d4c?_0x4a9c('0x3ec'):_0x4a9c('0x221'),_0x71577e[_0x4a9c('0x702')](),_0x254d4c||_0x71577e[_0x4a9c('0x16c')]();else if(0x1==_0x3cc959[_0x4a9c('0x5d4')])if(0x2==_0x5dae08)_0x71577e[_0x4a9c('0x7e4')]='#606060',_0x149ef1(_0x71577e,0x6,0.3*_0x3cc959[_0x4a9c('0x6f4')],0.71*_0x3cc959[_0x4a9c('0x6f4')]),_0x71577e[_0x4a9c('0x702')](),_0x71577e[_0x4a9c('0x16c')](),_0x71577e[_0x4a9c('0x7e4')]=_0x4a9c('0x77a'),_0x15bb91(0x0,0x0,0.55*_0x3cc959[_0x4a9c('0x6f4')],_0x71577e),_0x71577e[_0x4a9c('0x7e4')]=_0x4a9c('0x30e'),_0x15bb91(0x0,0x0,0.3*_0x3cc959[_0x4a9c('0x6f4')],_0x71577e,!0x0);else{var _0x44b077;!function(_0x3a6e32,_0x354cb3,_0x20d922,_0x6aad2d){var _0x40faee,_0x4bce7b=Math['PI']/0x2*0x3,_0x8c58b4=Math['PI']/0x6;_0x3a6e32[_0x4a9c('0x4b6')](),_0x3a6e32[_0x4a9c('0x5dd')](0x0,-_0x6aad2d);for(var _0x262bfc=0x0;_0x262bfc<0x6;_0x262bfc++)_0x40faee=_0x5eec63[_0x4a9c('0x78c')](_0x20d922+0.9,1.2*_0x20d922),_0x3a6e32[_0x4a9c('0x566')](Math['cos'](_0x4bce7b+_0x8c58b4)*_0x40faee,Math[_0x4a9c('0x1bb')](_0x4bce7b+_0x8c58b4)*_0x40faee,Math['cos'](_0x4bce7b+0x2*_0x8c58b4)*_0x6aad2d,Math[_0x4a9c('0x1bb')](_0x4bce7b+0x2*_0x8c58b4)*_0x6aad2d),_0x4bce7b+=0x2*_0x8c58b4;_0x3a6e32[_0x4a9c('0x526')](0x0,-_0x6aad2d),_0x3a6e32[_0x4a9c('0x793')]();}(_0x71577e,0x0,_0x28a0df[_0x4a9c('0x6f4')],0.7*_0x28a0df[_0x4a9c('0x6f4')]),_0x71577e['fillStyle']=_0x5dae08?_0x4a9c('0x18e'):_0x4a9c('0x77a'),_0x71577e['fill'](),_0x71577e[_0x4a9c('0x16c')](),_0x71577e[_0x4a9c('0x7e4')]=_0x5dae08?_0x4a9c('0x430'):_0x4a9c('0x1b4');var _0x37e9ac=_0x55b547/0x4;for(_0x254d4c=0x0;_0x254d4c<0x4;++_0x254d4c)_0x15bb91((_0x44b077=_0x5eec63[_0x4a9c('0x78c')](_0x28a0df[_0x4a9c('0x6f4')]/3.5,_0x28a0df['scale']/2.3))*Math[_0x4a9c('0x431')](_0x37e9ac*_0x254d4c),_0x44b077*Math[_0x4a9c('0x1bb')](_0x37e9ac*_0x254d4c),_0x5eec63[_0x4a9c('0x78c')](0xa,0xc),_0x71577e);}else 0x2!=_0x3cc959[_0x4a9c('0x5d4')]&&0x3!=_0x3cc959[_0x4a9c('0x5d4')]||(_0x71577e[_0x4a9c('0x7e4')]=0x2==_0x3cc959[_0x4a9c('0x5d4')]?0x2==_0x5dae08?'#938d77':_0x4a9c('0x4d6'):'#e0c655',_0x149ef1(_0x71577e,0x3,_0x3cc959[_0x4a9c('0x6f4')],_0x3cc959['scale']),_0x71577e['fill'](),_0x71577e[_0x4a9c('0x16c')](),_0x71577e[_0x4a9c('0x7e4')]=0x2==_0x3cc959[_0x4a9c('0x5d4')]?0x2==_0x5dae08?_0x4a9c('0x2bd'):_0x4a9c('0x69e'):_0x4a9c('0x2d1'),_0x149ef1(_0x71577e,0x3,0.55*_0x3cc959[_0x4a9c('0x6f4')],0.65*_0x3cc959[_0x4a9c('0x6f4')]),_0x71577e[_0x4a9c('0x702')]());_0xb50302=_0x4769a7,_0x5c1c07[_0x5545c1]=_0xb50302;}return _0xb50302;}var _0x7ae451=[];function _0x510944(_0x462290,_0x2e97c4){var _0x3e935b=_0x7ae451[_0x462290['id']];if(!_0x3e935b||_0x2e97c4){var _0x1b3c33=document[_0x4a9c('0x20c')](_0x4a9c('0x768'));_0x1b3c33['width']=_0x1b3c33[_0x4a9c('0x178')]=2.5*_0x462290[_0x4a9c('0x6f4')]+5.5+(_0x15d498[_0x4a9c('0x7f5')][_0x462290['id']]['spritePadding']||0x0);var _0x362ad9=_0x1b3c33[_0x4a9c('0x5a1')]('2d');if(_0x362ad9['translate'](_0x1b3c33[_0x4a9c('0x149')]/0x2,_0x1b3c33[_0x4a9c('0x178')]/0x2),_0x362ad9[_0x4a9c('0x20b')](_0x2e97c4?0x0:Math['PI']/0x2),_0x362ad9[_0x4a9c('0x150')]=_0x55f187,_0x362ad9[_0x4a9c('0x39f')]=5.5*(_0x2e97c4?_0x1b3c33[_0x4a9c('0x149')]/0x51:0x1),'apple'==_0x462290[_0x4a9c('0x9e')]){_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x1b4'),_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x77a');var _0x48d595=-Math['PI']/0x2;!function(_0x3b3fe2,_0x510cfe,_0x1acf8f,_0x3f63b0,_0x20bedd){var _0x2b70f5=_0x3b3fe2+0x19*Math[_0x4a9c('0x431')](_0x3f63b0),_0x2352f7=_0x510cfe+0x19*Math[_0x4a9c('0x1bb')](_0x3f63b0);_0x20bedd['moveTo'](_0x3b3fe2,_0x510cfe),_0x20bedd[_0x4a9c('0x4b6')](),_0x20bedd['quadraticCurveTo']((_0x3b3fe2+_0x2b70f5)/0x2+0xa*Math[_0x4a9c('0x431')](_0x3f63b0+Math['PI']/0x2),(_0x510cfe+_0x2352f7)/0x2+0xa*Math[_0x4a9c('0x1bb')](_0x3f63b0+Math['PI']/0x2),_0x2b70f5,_0x2352f7),_0x20bedd[_0x4a9c('0x566')]((_0x3b3fe2+_0x2b70f5)/0x2-0xa*Math[_0x4a9c('0x431')](_0x3f63b0+Math['PI']/0x2),(_0x510cfe+_0x2352f7)/0x2-0xa*Math[_0x4a9c('0x1bb')](_0x3f63b0+Math['PI']/0x2),_0x3b3fe2,_0x510cfe),_0x20bedd[_0x4a9c('0x793')](),_0x20bedd[_0x4a9c('0x702')](),_0x20bedd[_0x4a9c('0x16c')]();}(_0x462290[_0x4a9c('0x6f4')]*Math[_0x4a9c('0x431')](_0x48d595),_0x462290[_0x4a9c('0x6f4')]*Math[_0x4a9c('0x1bb')](_0x48d595),0x0,_0x48d595+Math['PI']/0x2,_0x362ad9);}else if(_0x4a9c('0x2a')==_0x462290[_0x4a9c('0x9e')]){_0x362ad9[_0x4a9c('0x7e4')]='#cca861',_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x7e4')]='#937c4b';for(var _0x17fafc=_0x55b547/(_0x364804=0x4),_0x2ce8f1=0x0;_0x2ce8f1<_0x364804;++_0x2ce8f1)_0x15bb91((_0x13bc48=_0x5eec63[_0x4a9c('0x78c')](_0x462290['scale']/2.5,_0x462290[_0x4a9c('0x6f4')]/1.7))*Math[_0x4a9c('0x431')](_0x17fafc*_0x2ce8f1),_0x13bc48*Math[_0x4a9c('0x1bb')](_0x17fafc*_0x2ce8f1),_0x5eec63[_0x4a9c('0x78c')](0x4,0x5),_0x362ad9,!0x0);}else if(_0x4a9c('0x7cd')==_0x462290[_0x4a9c('0x9e')]){var _0x364804,_0x13bc48;for(_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x3cf'),_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x7e4')]='#c3c28b',_0x17fafc=_0x55b547/(_0x364804=0x4),_0x2ce8f1=0x0;_0x2ce8f1<_0x364804;++_0x2ce8f1)_0x15bb91((_0x13bc48=_0x5eec63[_0x4a9c('0x78c')](_0x462290[_0x4a9c('0x6f4')]/2.5,_0x462290[_0x4a9c('0x6f4')]/1.7))*Math[_0x4a9c('0x431')](_0x17fafc*_0x2ce8f1),_0x13bc48*Math[_0x4a9c('0x1bb')](_0x17fafc*_0x2ce8f1),_0x5eec63[_0x4a9c('0x78c')](0x4,0x5),_0x362ad9,!0x0);}else if(_0x4a9c('0x5f5')==_0x462290[_0x4a9c('0x9e')]||_0x4a9c('0x2a1')==_0x462290[_0x4a9c('0x9e')]||_0x4a9c('0x6b')==_0x462290[_0x4a9c('0x9e')]){_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x6b')==_0x462290['name']?_0x4a9c('0x245'):_0x4a9c('0x5f5')==_0x462290['name']?_0x4a9c('0x763'):_0x4a9c('0x4d6');var _0x5a1e5c=_0x4a9c('0x6b')==_0x462290[_0x4a9c('0x9e')]?0x4:0x3;_0x149ef1(_0x362ad9,_0x5a1e5c,1.1*_0x462290[_0x4a9c('0x6f4')],1.1*_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x6b')==_0x462290[_0x4a9c('0x9e')]?'#9da4aa':_0x4a9c('0x5f5')==_0x462290[_0x4a9c('0x9e')]?_0x4a9c('0x5cb'):_0x4a9c('0x69e'),_0x149ef1(_0x362ad9,_0x5a1e5c,0.65*_0x462290['scale'],0.65*_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')]();}else if(_0x4a9c('0x72c')==_0x462290[_0x4a9c('0x9e')]||'greater\x20spikes'==_0x462290['name']||'poison\x20spikes'==_0x462290[_0x4a9c('0x9e')]||_0x4a9c('0x564')==_0x462290[_0x4a9c('0x9e')]){_0x362ad9[_0x4a9c('0x7e4')]='poison\x20spikes'==_0x462290[_0x4a9c('0x9e')]?_0x4a9c('0x219'):_0x4a9c('0x4d6');var _0x57a0d5=0.6*_0x462290[_0x4a9c('0x6f4')];_0x149ef1(_0x362ad9,_0x4a9c('0x72c')==_0x462290[_0x4a9c('0x9e')]?0x5:0x6,_0x462290[_0x4a9c('0x6f4')],_0x57a0d5),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x763'),_0x15bb91(0x0,0x0,_0x57a0d5,_0x362ad9),_0x362ad9[_0x4a9c('0x7e4')]='#c9b758',_0x15bb91(0x0,0x0,_0x57a0d5/0x2,_0x362ad9,!0x0);}else if(_0x4a9c('0xf2')==_0x462290[_0x4a9c('0x9e')]||_0x4a9c('0x579')==_0x462290[_0x4a9c('0x9e')]||_0x4a9c('0x582')==_0x462290[_0x4a9c('0x9e')])_0x362ad9[_0x4a9c('0x7e4')]='#a5974c',_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x5cb'),_0x3d3b35(0x0,0x0,1.5*_0x462290[_0x4a9c('0x6f4')],0x1d,0x4,_0x362ad9),_0x362ad9['fillStyle']=_0x4a9c('0x763'),_0x15bb91(0x0,0x0,0.5*_0x462290[_0x4a9c('0x6f4')],_0x362ad9);else if(_0x4a9c('0x4f4')==_0x462290[_0x4a9c('0x9e')])_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x4d6'),_0x149ef1(_0x362ad9,0x3,_0x462290[_0x4a9c('0x6f4')],_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9['stroke'](),_0x362ad9['fillStyle']=_0x4a9c('0x69e'),_0x149ef1(_0x362ad9,0x3,0.55*_0x462290[_0x4a9c('0x6f4')],0.65*_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')]();else if(_0x4a9c('0x6f9')==_0x462290[_0x4a9c('0x9e')])for(_0x2ce8f1=0x0;_0x2ce8f1<0x2;++_0x2ce8f1)_0x149ef1(_0x362ad9,0x7,_0x57a0d5=_0x462290[_0x4a9c('0x6f4')]*(_0x2ce8f1?0.5:0x1),0.7*_0x57a0d5),_0x362ad9['fillStyle']=_0x2ce8f1?_0x4a9c('0x3ec'):_0x4a9c('0x221'),_0x362ad9['fill'](),_0x2ce8f1||_0x362ad9['stroke']();else if(_0x4a9c('0x180')==_0x462290[_0x4a9c('0x9e')])_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x763'),_0x149ef1(_0x362ad9,0x3,1.1*_0x462290[_0x4a9c('0x6f4')],1.1*_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9['fillStyle']=_0x55f187,_0x149ef1(_0x362ad9,0x3,0.65*_0x462290[_0x4a9c('0x6f4')],0.65*_0x462290[_0x4a9c('0x6f4')]),_0x362ad9[_0x4a9c('0x702')]();else if('boost\x20pad'==_0x462290['name'])_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x3f1'),_0x4b2342(0x0,0x0,0x2*_0x462290[_0x4a9c('0x6f4')],0x2*_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9['fill'](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9['fillStyle']=_0x4a9c('0x1d5'),function(_0x349922,_0x344ba7){_0x344ba7=_0x344ba7||_0x33e287;var _0x433e26=_0x349922*(Math[_0x4a9c('0x5f0')](0x3)/0x2);_0x344ba7[_0x4a9c('0x4b6')](),_0x344ba7[_0x4a9c('0x5dd')](0x0,-_0x433e26/0x2),_0x344ba7[_0x4a9c('0x526')](-_0x349922/0x2,_0x433e26/0x2),_0x344ba7[_0x4a9c('0x526')](_0x349922/0x2,_0x433e26/0x2),_0x344ba7['lineTo'](0x0,-_0x433e26/0x2),_0x344ba7[_0x4a9c('0x702')](),_0x344ba7[_0x4a9c('0x793')]();}(0x1*_0x462290[_0x4a9c('0x6f4')],_0x362ad9);else if('turret'==_0x462290[_0x4a9c('0x9e')])_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x763'),_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9['fill'](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9['fillStyle']='#939393',_0x4b2342(0x0,-0x19,0.9*_0x462290['scale'],0x32,_0x362ad9),_0x15bb91(0x0,0x0,0.6*_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')]();else if('platform'==_0x462290[_0x4a9c('0x9e')]){_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x2e1');var _0x56ae9f=0x2*_0x462290['scale'],_0x3ce177=_0x56ae9f/0x4,_0x10b47c=-_0x462290[_0x4a9c('0x6f4')]/0x2;for(_0x2ce8f1=0x0;_0x2ce8f1<0x4;++_0x2ce8f1)_0x4b2342(_0x10b47c-_0x3ce177/0x2,0x0,_0x3ce177,0x2*_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x10b47c+=_0x56ae9f/0x4;}else _0x4a9c('0x762')==_0x462290[_0x4a9c('0x9e')]?(_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x3f1'),_0x4b2342(0x0,0x0,0x2*_0x462290[_0x4a9c('0x6f4')],0x2*_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9['stroke'](),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x190'),_0x3d3b35(0x0,0x0,0.65*_0x462290['scale'],0x14,0x4,_0x362ad9,!0x0)):'spawn\x20pad'==_0x462290[_0x4a9c('0x9e')]?(_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x3f1'),_0x4b2342(0x0,0x0,0x2*_0x462290[_0x4a9c('0x6f4')],0x2*_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9[_0x4a9c('0x7e4')]='#71aad6',_0x15bb91(0x0,0x0,0.6*_0x462290[_0x4a9c('0x6f4')],_0x362ad9)):_0x4a9c('0x122')==_0x462290[_0x4a9c('0x9e')]?(_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x3f1'),_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9[_0x4a9c('0x20b')](Math['PI']/0x4),_0x362ad9[_0x4a9c('0x7e4')]='#db6e6e',_0x3d3b35(0x0,0x0,0.65*_0x462290['scale'],0x14,0x4,_0x362ad9,!0x0)):_0x4a9c('0x7c9')==_0x462290[_0x4a9c('0x9e')]&&(_0x362ad9['fillStyle']=_0x4a9c('0x3f1'),_0x15bb91(0x0,0x0,_0x462290[_0x4a9c('0x6f4')],_0x362ad9),_0x362ad9[_0x4a9c('0x702')](),_0x362ad9[_0x4a9c('0x16c')](),_0x362ad9['rotate'](Math['PI']/0x4),_0x362ad9[_0x4a9c('0x7e4')]=_0x4a9c('0x623'),_0x15bb91(0x0,0x0,0.5*_0x462290[_0x4a9c('0x6f4')],_0x362ad9,!0x0));_0x3e935b=_0x1b3c33,_0x2e97c4||(_0x7ae451[_0x462290['id']]=_0x3e935b);}return _0x3e935b;}function _0x15bb91(_0x49da85,_0x56357b,_0x40850c,_0x1b4332,_0x3e88ac,_0x5f5494){(_0x1b4332=_0x1b4332||_0x33e287)[_0x4a9c('0x4b6')](),_0x1b4332[_0x4a9c('0x217')](_0x49da85,_0x56357b,_0x40850c,0x0,0x2*Math['PI']),_0x5f5494||_0x1b4332['fill'](),_0x3e88ac||_0x1b4332['stroke']();}function _0x149ef1(_0x59a8cb,_0x306ca5,_0x2fd020,_0x2cd399){var _0x20e6cc,_0x6a4b2e,_0x4517fb=Math['PI']/0x2*0x3,_0xe444ac=Math['PI']/_0x306ca5;_0x59a8cb[_0x4a9c('0x4b6')](),_0x59a8cb[_0x4a9c('0x5dd')](0x0,-_0x2fd020);for(var _0x2a37cc=0x0;_0x2a37cc<_0x306ca5;_0x2a37cc++)_0x20e6cc=Math[_0x4a9c('0x431')](_0x4517fb)*_0x2fd020,_0x6a4b2e=Math[_0x4a9c('0x1bb')](_0x4517fb)*_0x2fd020,_0x59a8cb[_0x4a9c('0x526')](_0x20e6cc,_0x6a4b2e),_0x4517fb+=_0xe444ac,_0x20e6cc=Math[_0x4a9c('0x431')](_0x4517fb)*_0x2cd399,_0x6a4b2e=Math[_0x4a9c('0x1bb')](_0x4517fb)*_0x2cd399,_0x59a8cb[_0x4a9c('0x526')](_0x20e6cc,_0x6a4b2e),_0x4517fb+=_0xe444ac;_0x59a8cb[_0x4a9c('0x526')](0x0,-_0x2fd020),_0x59a8cb[_0x4a9c('0x793')]();}function _0x4b2342(_0x34dbb1,_0x1f448a,_0x1b9a26,_0x15b8dc,_0x310776,_0x4bc8df){_0x310776['fillRect'](_0x34dbb1-_0x1b9a26/0x2,_0x1f448a-_0x15b8dc/0x2,_0x1b9a26,_0x15b8dc),_0x4bc8df||_0x310776[_0x4a9c('0x76e')](_0x34dbb1-_0x1b9a26/0x2,_0x1f448a-_0x15b8dc/0x2,_0x1b9a26,_0x15b8dc);}function _0x3d3b35(_0x17aca8,_0x3eb8ed,_0x3ae25d,_0x2dc4ac,_0x4f4287,_0x2a5d85,_0x580adc){_0x2a5d85[_0x4a9c('0x3e4')](),_0x2a5d85[_0x4a9c('0x429')](_0x17aca8,_0x3eb8ed),_0x4f4287=Math[_0x4a9c('0x706')](_0x4f4287/0x2);for(var _0x9ab704=0x0;_0x9ab704<_0x4f4287;_0x9ab704++)_0x4b2342(0x0,0x0,0x2*_0x3ae25d,_0x2dc4ac,_0x2a5d85,_0x580adc),_0x2a5d85[_0x4a9c('0x20b')](Math['PI']/_0x4f4287);_0x2a5d85[_0x4a9c('0x786')]();}function _0x314054(_0x93c16){for(var _0xe5dc96=0x0;_0xe5dc96<_0x93c16[_0x4a9c('0x3e1')];)_0x4ee612[_0x4a9c('0x46a')](_0x93c16[_0xe5dc96],_0x93c16[_0xe5dc96+0x1],_0x93c16[_0xe5dc96+0x2],_0x93c16[_0xe5dc96+0x3],_0x93c16[_0xe5dc96+0x4],_0x93c16[_0xe5dc96+0x5],_0x15d498[_0x4a9c('0x7f5')][_0x93c16[_0xe5dc96+0x6]],!0x0,_0x93c16[_0xe5dc96+0x7]>=0x0?{'sid':_0x93c16[_0xe5dc96+0x7]}:null),_0xe5dc96+=0x8;}function _0x3d7bcc(_0x31fc06,_0x19b619){(_0x28a0df=_0x4dfe85(_0x19b619))&&(_0x28a0df[_0x4a9c('0x2c6')]+=_0xd14dd8[_0x4a9c('0x3d6')]*Math[_0x4a9c('0x431')](_0x31fc06),_0x28a0df[_0x4a9c('0x309')]+=_0xd14dd8[_0x4a9c('0x3d6')]*Math[_0x4a9c('0x1bb')](_0x31fc06));}function _0xc9cdef(_0x3c4ba4,_0x543711){(_0x28a0df=_0x4dfe85(_0x3c4ba4))&&(_0x28a0df[_0x4a9c('0x638')]=_0x543711,_0x28a0df[_0x4a9c('0x2c6')]+=_0xd14dd8[_0x4a9c('0x3d6')]*Math[_0x4a9c('0x431')](_0x543711+Math['PI']),_0x28a0df[_0x4a9c('0x309')]+=_0xd14dd8['gatherWiggle']*Math['sin'](_0x543711+Math['PI']));}function _0x33e301(_0x2e3fe8,_0x4d09fc,_0x4e31db,_0x3507e0,_0x2324e8,_0x21f98a,_0x563663,_0x3ea599){_0x3975bf&&(_0x49861c['addProjectile'](_0x2e3fe8,_0x4d09fc,_0x4e31db,_0x3507e0,_0x2324e8,_0x21f98a,null,null,_0x563663)[_0x4a9c('0x56f')]=_0x3ea599);}function _0x27a2ae(_0x39ca41,_0x5ad720){for(var _0x4dafc1=0x0;_0x4dafc1<_0x5833b8[_0x4a9c('0x3e1')];++_0x4dafc1)_0x5833b8[_0x4dafc1][_0x4a9c('0x56f')]==_0x39ca41&&(_0x5833b8[_0x4dafc1][_0x4a9c('0x2d3')]=_0x5ad720);}function _0x3ffe51(_0x5b7cce){(_0x28a0df=_0x3a0f6c(_0x5b7cce))&&_0x28a0df[_0x4a9c('0x1c0')]();}function _0x279de2(_0xfc9eea){for(var _0xbad626=0x0;_0xbad626<_0x30eff1[_0x4a9c('0x3e1')];++_0xbad626)_0x30eff1[_0xbad626][_0x4a9c('0x14d')]=!_0x30eff1[_0xbad626][_0x4a9c('0x3b1')],_0x30eff1[_0xbad626]['visible']=!0x1;if(_0xfc9eea){var _0x9bc4d3=Date[_0x4a9c('0x6a1')]();for(_0xbad626=0x0;_0xbad626<_0xfc9eea[_0x4a9c('0x3e1')];)(_0x28a0df=_0x3a0f6c(_0xfc9eea[_0xbad626]))?(_0x28a0df[_0x4a9c('0x76b')]=_0xfc9eea[_0xbad626+0x1],_0x28a0df['t1']=void 0x0===_0x28a0df['t2']?_0x9bc4d3:_0x28a0df['t2'],_0x28a0df['t2']=_0x9bc4d3,_0x28a0df['x1']=_0x28a0df['x'],_0x28a0df['y1']=_0x28a0df['y'],_0x28a0df['x2']=_0xfc9eea[_0xbad626+0x2],_0x28a0df['y2']=_0xfc9eea[_0xbad626+0x3],_0x28a0df['d1']=void 0x0===_0x28a0df['d2']?_0xfc9eea[_0xbad626+0x4]:_0x28a0df['d2'],_0x28a0df['d2']=_0xfc9eea[_0xbad626+0x4],_0x28a0df[_0x4a9c('0x528')]=_0xfc9eea[_0xbad626+0x5],_0x28a0df['dt']=0x0,_0x28a0df[_0x4a9c('0x3b1')]=!0x0):((_0x28a0df=_0x5b205e[_0x4a9c('0x337')](_0xfc9eea[_0xbad626+0x2],_0xfc9eea[_0xbad626+0x3],_0xfc9eea[_0xbad626+0x4],_0xfc9eea[_0xbad626+0x1]))['x2']=_0x28a0df['x'],_0x28a0df['y2']=_0x28a0df['y'],_0x28a0df['d2']=_0x28a0df[_0x4a9c('0x638')],_0x28a0df[_0x4a9c('0x528')]=_0xfc9eea[_0xbad626+0x5],_0x5b205e[_0x4a9c('0x567')][_0xfc9eea[_0xbad626+0x1]][_0x4a9c('0x9e')]||(_0x28a0df[_0x4a9c('0x9e')]=_0xd14dd8['cowNames'][_0xfc9eea[_0xbad626+0x6]]),_0x28a0df[_0x4a9c('0x14d')]=!0x0,_0x28a0df[_0x4a9c('0x56f')]=_0xfc9eea[_0xbad626],_0x28a0df[_0x4a9c('0x3b1')]=!0x0),_0xbad626+=0x7;}}var _0x53b9d2={};function _0x2f5c51(_0x387f04,_0x21aafd){var _0x4026d7=_0x387f04[_0x4a9c('0x76b')],_0x14ffa1=_0x53b9d2[_0x4026d7];if(!_0x14ffa1){var _0x592322=new Image();_0x592322[_0x4a9c('0x1ab')]=function(){this[_0x4a9c('0x156')]=!0x0,this[_0x4a9c('0x1ab')]=null;},_0x592322[_0x4a9c('0x34f')]='.././img/animals/'+_0x387f04[_0x4a9c('0x34f')]+_0x4a9c('0x79e'),_0x14ffa1=_0x592322,_0x53b9d2[_0x4026d7]=_0x14ffa1;}if(_0x14ffa1[_0x4a9c('0x156')]){var _0x209b6f=1.2*_0x387f04[_0x4a9c('0x6f4')]*(_0x387f04[_0x4a9c('0x2b0')]||0x1);_0x21aafd[_0x4a9c('0x7f4')](_0x14ffa1,-_0x209b6f,-_0x209b6f,0x2*_0x209b6f,0x2*_0x209b6f);}}function _0xb902be(_0x50f0b0,_0x47d591,_0x54f4f4){return _0x50f0b0+_0x54f4f4>=0x0&&_0x50f0b0-_0x54f4f4<=_0x43afbc&&_0x47d591+_0x54f4f4>=0x0&&_0x47d591-_0x54f4f4<=_0x240669;}function _0x3819aa(_0x2f5f46,_0x4bbdde){var _0x588f50=function(_0x4e67b8){for(var _0x1909af=0x0;_0x1909af<_0x60dc7b[_0x4a9c('0x3e1')];++_0x1909af)if(_0x60dc7b[_0x1909af]['id']==_0x4e67b8)return _0x60dc7b[_0x1909af];return null;}(_0x2f5f46[0x0]);_0x588f50||(_0x588f50=new _0xa1437(_0x2f5f46[0x0],_0x2f5f46[0x1],_0xd14dd8,_0x5eec63,_0x49861c,_0x4ee612,_0x60dc7b,_0x30eff1,_0x15d498,_0x5d3413,_0x1c6b93),_0x60dc7b[_0x4a9c('0x2d2')](_0x588f50)),_0x588f50[_0x4a9c('0x337')](_0x4bbdde?_0x494254:null),_0x588f50['visible']=!0x1,_0x588f50['x2']=void 0x0,_0x588f50['y2']=void 0x0,_0x588f50[_0x4a9c('0x5e1')](_0x2f5f46),_0x4bbdde&&(_0x3bff16=(_0xff3350=_0x588f50)['x'],_0x472093=_0xff3350['y'],_0x484a6a(),_0x27993d(),_0x213b75(),_0x5be3ae(0x0),_0x3bc497['style'][_0x4a9c('0x259')]=_0x4a9c('0xcd'));}function _0x294956(_0x1f020b){for(var _0x1f672c=0x0;_0x1f672c<_0x60dc7b[_0x4a9c('0x3e1')];_0x1f672c++)if(_0x60dc7b[_0x1f672c]['id']==_0x1f020b){_0x60dc7b[_0x4a9c('0x7d5')](_0x1f672c,0x1);break;}}function _0xae190e(_0x46b9a9,_0x443ec9){_0xff3350&&(_0xff3350['itemCounts'][_0x46b9a9]=_0x443ec9);}function _0x33566d(_0x397608,_0x467bc9,_0x26f525){_0xff3350&&(_0xff3350[_0x397608]=_0x467bc9,_0x26f525&&_0x27993d());}function _0x307e5c(_0x517895,_0x236653){(_0x28a0df=_0x23f692(_0x517895))&&(_0x28a0df['health']=_0x236653);}function _0xf64976(_0xfcc035){for(var _0x361c81=Date['now'](),_0x13c345=0x0;_0x13c345<_0x60dc7b[_0x4a9c('0x3e1')];++_0x13c345)_0x60dc7b[_0x13c345][_0x4a9c('0x14d')]=!_0x60dc7b[_0x13c345][_0x4a9c('0x3b1')],_0x60dc7b[_0x13c345][_0x4a9c('0x3b1')]=!0x1;for(_0x13c345=0x0;_0x13c345<_0xfcc035[_0x4a9c('0x3e1')];)(_0x28a0df=_0x23f692(_0xfcc035[_0x13c345]))&&(_0x28a0df['t1']=void 0x0===_0x28a0df['t2']?_0x361c81:_0x28a0df['t2'],_0x28a0df['t2']=_0x361c81,_0x28a0df['x1']=_0x28a0df['x'],_0x28a0df['y1']=_0x28a0df['y'],_0x28a0df['x2']=_0xfcc035[_0x13c345+0x1],_0x28a0df['y2']=_0xfcc035[_0x13c345+0x2],_0x28a0df['d1']=void 0x0===_0x28a0df['d2']?_0xfcc035[_0x13c345+0x3]:_0x28a0df['d2'],_0x28a0df['d2']=_0xfcc035[_0x13c345+0x3],_0x28a0df['dt']=0x0,_0x28a0df[_0x4a9c('0x209')]=_0xfcc035[_0x13c345+0x4],_0x28a0df['weaponIndex']=_0xfcc035[_0x13c345+0x5],_0x28a0df[_0x4a9c('0x5de')]=_0xfcc035[_0x13c345+0x6],_0x28a0df[_0x4a9c('0x4c1')]=_0xfcc035[_0x13c345+0x7],_0x28a0df[_0x4a9c('0x6b4')]=_0xfcc035[_0x13c345+0x8],_0x28a0df[_0x4a9c('0x148')]=_0xfcc035[_0x13c345+0x9],_0x28a0df['tailIndex']=_0xfcc035[_0x13c345+0xa],_0x28a0df[_0x4a9c('0x729')]=_0xfcc035[_0x13c345+0xb],_0x28a0df['zIndex']=_0xfcc035[_0x13c345+0xc],_0x28a0df[_0x4a9c('0x3b1')]=!0x0),_0x13c345+=0xd;}function _0x23f692(_0x978dda){for(var _0x138889=0x0;_0x138889<_0x60dc7b[_0x4a9c('0x3e1')];++_0x138889)if(_0x60dc7b[_0x138889][_0x4a9c('0x56f')]==_0x978dda)return _0x60dc7b[_0x138889];return null;}function _0x3a0f6c(_0x4f6da4){for(var _0x347944=0x0;_0x347944<_0x30eff1['length'];++_0x347944)if(_0x30eff1[_0x347944][_0x4a9c('0x56f')]==_0x4f6da4)return _0x30eff1[_0x347944];return null;}function _0x4dfe85(_0x54fcbf){for(var _0x495c51=0x0;_0x495c51<_0xe4187f[_0x4a9c('0x3e1')];++_0x495c51)if(_0xe4187f[_0x495c51][_0x4a9c('0x56f')]==_0x54fcbf)return _0xe4187f[_0x495c51];return null;}var _0x3f5dab=-0x1;function _0x540260(){var _0x77107f=Date[_0x4a9c('0x6a1')]()-_0x3f5dab;window[_0x4a9c('0x349')]=_0x77107f,_0x3a7043[_0x4a9c('0x53e')]='Ping:\x20'+_0x77107f+'\x20ms';}function _0x218bbd(){_0x3f5dab=Date[_0x4a9c('0x6a1')](),_0x481801[_0x4a9c('0x1c2')]('pp');}function _0x3fc1a3(_0x1f3618){if(!(_0x1f3618<0x0)){var _0x22c492=Math[_0x4a9c('0xa9')](_0x1f3618/0x3c),_0x9568d1=_0x1f3618%0x3c;_0x9568d1=('0'+_0x9568d1)[_0x4a9c('0x14')](-0x2),_0x3dcfe3[_0x4a9c('0x53e')]=_0x4a9c('0x4d2')+_0x22c492+':'+_0x9568d1,_0x3dcfe3['hidden']=!0x1;}}function _0x3877b4(_0x1bbfd3){window[_0x4a9c('0x73d')](_0x1bbfd3,_0x4a9c('0x2e'));}window[_0x4a9c('0x7c1')]=window[_0x4a9c('0x40a')]||window[_0x4a9c('0xd9')]||window[_0x4a9c('0x42d')]||function(_0x227689){window[_0x4a9c('0x575')](_0x227689,0x3e8/0x3c);},function(){var _0x3bbe64=_0xd14dd8[_0x4a9c('0x1d6')]/0x2;_0x4ee612[_0x4a9c('0x46a')](0x0,_0x3bbe64,_0x3bbe64+0xc8,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x3],0x0),_0x4ee612[_0x4a9c('0x46a')](0x1,_0x3bbe64,_0x3bbe64-0x1e0,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x3],0x0),_0x4ee612[_0x4a9c('0x46a')](0x2,_0x3bbe64+0x12c,_0x3bbe64+0x1c2,0x0,_0xd14dd8['treeScales'][0x3],0x0),_0x4ee612[_0x4a9c('0x46a')](0x3,_0x3bbe64-0x3b6,_0x3bbe64-0x82,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x2],0x0),_0x4ee612[_0x4a9c('0x46a')](0x4,_0x3bbe64-0x2ee,_0x3bbe64-0x190,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x3],0x0),_0x4ee612[_0x4a9c('0x46a')](0x5,_0x3bbe64-0x2bc,_0x3bbe64+0x190,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x2],0x0),_0x4ee612['add'](0x6,_0x3bbe64+0x320,_0x3bbe64-0xc8,0x0,_0xd14dd8[_0x4a9c('0xf4')][0x3],0x0),_0x4ee612[_0x4a9c('0x46a')](0x7,_0x3bbe64-0x104,_0x3bbe64+0x154,0x0,_0xd14dd8[_0x4a9c('0x453')][0x3],0x1),_0x4ee612[_0x4a9c('0x46a')](0x8,_0x3bbe64+0x2f8,_0x3bbe64+0x136,0x0,_0xd14dd8[_0x4a9c('0x453')][0x3],0x1),_0x4ee612[_0x4a9c('0x46a')](0x9,_0x3bbe64-0x320,_0x3bbe64+0x64,0x0,_0xd14dd8[_0x4a9c('0x453')][0x3],0x1),_0x4ee612[_0x4a9c('0x46a')](0xa,_0x3bbe64-0x320,_0x3bbe64+0x12c,0x0,_0x15d498[_0x4a9c('0x7f5')][0x4][_0x4a9c('0x6f4')],_0x15d498['list'][0x4]['id'],_0x15d498[_0x4a9c('0x7f5')][0xa]),_0x4ee612[_0x4a9c('0x46a')](0xb,_0x3bbe64+0x28a,_0x3bbe64-0x186,0x0,_0x15d498[_0x4a9c('0x7f5')][0x4][_0x4a9c('0x6f4')],_0x15d498[_0x4a9c('0x7f5')][0x4]['id'],_0x15d498[_0x4a9c('0x7f5')][0xa]),_0x4ee612[_0x4a9c('0x46a')](0xc,_0x3bbe64-0x190,_0x3bbe64-0x1c2,0x0,_0xd14dd8[_0x4a9c('0x668')][0x2],0x2);}(),function _0x222d52(){_0x22b64a=Date['now'](),_0x208eee=_0x22b64a-_0x2984d3,_0x2984d3=_0x22b64a,function(){if(_0xff3350&&(!_0x47304f||_0x22b64a-_0x47304f>=0x3e8/_0xd14dd8[_0x4a9c('0x12b')])&&(_0x47304f=_0x22b64a,_0x481801[_0x4a9c('0x1c2')]('2',_0x3e741a())),_0x3d0486<0x78&&(_0x3d0486+=0.1*_0x208eee,_0x15266e[_0x4a9c('0x6f0')][_0x4a9c('0x568')]=Math[_0x4a9c('0xe8')](Math[_0x4a9c('0x33c')](_0x3d0486),0x78)+'px'),_0xff3350){var _0x1686ff=_0x5eec63[_0x4a9c('0x63')](_0x3bff16,_0x472093,_0xff3350['x'],_0xff3350['y']),_0x3d748d=_0x5eec63[_0x4a9c('0x721')](_0xff3350['x'],_0xff3350['y'],_0x3bff16,_0x472093),_0x5da1c3=Math[_0x4a9c('0xe8')](0.01*_0x1686ff*_0x208eee,_0x1686ff);_0x1686ff>0.05?(_0x3bff16+=_0x5da1c3*Math[_0x4a9c('0x431')](_0x3d748d),_0x472093+=_0x5da1c3*Math[_0x4a9c('0x1bb')](_0x3d748d)):(_0x3bff16=_0xff3350['x'],_0x472093=_0xff3350['y']);}else _0x3bff16=_0xd14dd8[_0x4a9c('0x1d6')]/0x2,_0x472093=_0xd14dd8['mapScale']/0x2;for(var _0x1e359b=_0x22b64a-0x3e8/_0xd14dd8[_0x4a9c('0x1b2')],_0x200c59=0x0;_0x200c59<_0x60dc7b[_0x4a9c('0x3e1')]+_0x30eff1[_0x4a9c('0x3e1')];++_0x200c59)if((_0x28a0df=_0x60dc7b[_0x200c59]||_0x30eff1[_0x200c59-_0x60dc7b['length']])&&_0x28a0df[_0x4a9c('0x3b1')])if(_0x28a0df[_0x4a9c('0x14d')])_0x28a0df['x']=_0x28a0df['x2'],_0x28a0df['y']=_0x28a0df['y2'],_0x28a0df[_0x4a9c('0x638')]=_0x28a0df['d2'];else{var _0x184a42=_0x28a0df['t2']-_0x28a0df['t1'],_0x282b89=(_0x1e359b-_0x28a0df['t1'])/_0x184a42;_0x28a0df['dt']+=_0x208eee;var _0x468915=Math[_0x4a9c('0xe8')](1.7,_0x28a0df['dt']/0xaa),_0x40cc6a=_0x28a0df['x2']-_0x28a0df['x1'];_0x28a0df['x']=_0x28a0df['x1']+_0x40cc6a*_0x468915,_0x40cc6a=_0x28a0df['y2']-_0x28a0df['y1'],_0x28a0df['y']=_0x28a0df['y1']+_0x40cc6a*_0x468915,_0x28a0df['dir']=Math[_0x4a9c('0x78')](_0x28a0df['d2'],_0x28a0df['d1'],Math[_0x4a9c('0xe8')](1.2,_0x282b89));}var _0xa9c2e9=_0x3bff16-_0x43afbc/0x2,_0x39234b=_0x472093-_0x240669/0x2;_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b<=0x0&&_0xd14dd8['mapScale']-_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b>=_0x240669?(_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x1e8'),_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0x240669)):_0xd14dd8[_0x4a9c('0x1d6')]-_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b<=0x0?(_0x33e287['fillStyle']=_0x4a9c('0x482'),_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0x240669)):_0xd14dd8['snowBiomeTop']-_0x39234b>=_0x240669?(_0x33e287[_0x4a9c('0x7e4')]='#fff',_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0x240669)):_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b>=0x0?(_0x33e287[_0x4a9c('0x7e4')]='#fff',_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b),_0x33e287['fillStyle']=_0x4a9c('0x1e8'),_0x33e287[_0x4a9c('0x33a')](0x0,_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b,_0x43afbc,_0x240669-(_0xd14dd8[_0x4a9c('0x60e')]-_0x39234b))):(_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x1e8'),_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0xd14dd8[_0x4a9c('0x1d6')]-_0xd14dd8['snowBiomeTop']-_0x39234b),_0x33e287['fillStyle']=_0x4a9c('0x482'),_0x33e287['fillRect'](0x0,_0xd14dd8[_0x4a9c('0x1d6')]-_0xd14dd8['snowBiomeTop']-_0x39234b,_0x43afbc,_0x240669-(_0xd14dd8[_0x4a9c('0x1d6')]-_0xd14dd8['snowBiomeTop']-_0x39234b))),_0x1b211d||((_0x3e5525+=_0x4ee023*_0xd14dd8[_0x4a9c('0x54b')]*_0x208eee)>=_0xd14dd8[_0x4a9c('0x123')]?(_0x3e5525=_0xd14dd8[_0x4a9c('0x123')],_0x4ee023=-0x1):_0x3e5525<=0x1&&(_0x3e5525=_0x4ee023=0x1),_0x33e287[_0x4a9c('0x749')]=0x1,_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x482'),_0x51878a(_0xa9c2e9,_0x39234b,_0x33e287,_0xd14dd8[_0x4a9c('0x2a4')]),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x67c'),_0x51878a(_0xa9c2e9,_0x39234b,_0x33e287,0xfa*(_0x3e5525-0x1))),_0x33e287[_0x4a9c('0x39f')]=0x4,_0x33e287[_0x4a9c('0x150')]=_0x4a9c('0x7e2'),_0x33e287['globalAlpha']=0.06,_0x33e287['beginPath']();for(var _0x36703a=-_0x3bff16;_0x36703a<_0x43afbc;_0x36703a+=_0x240669/0x12)_0x36703a>0x0&&(_0x33e287[_0x4a9c('0x5dd')](_0x36703a,0x0),_0x33e287['lineTo'](_0x36703a,_0x240669));for(var _0x42d30b=-_0x472093;_0x42d30b<_0x240669;_0x42d30b+=_0x240669/0x12)_0x36703a>0x0&&(_0x33e287['moveTo'](0x0,_0x42d30b),_0x33e287[_0x4a9c('0x526')](_0x43afbc,_0x42d30b));for(_0x33e287[_0x4a9c('0x16c')](),_0x33e287['globalAlpha']=0x1,_0x33e287[_0x4a9c('0x150')]=_0x55f187,_0x5d3e3c(-0x1,_0xa9c2e9,_0x39234b),_0x33e287['globalAlpha']=0x1,_0x33e287[_0x4a9c('0x39f')]=5.5,_0x5a7e51(0x0,_0xa9c2e9,_0x39234b),_0x5487a0(_0xa9c2e9,_0x39234b,0x0),_0x33e287[_0x4a9c('0x749')]=0x1,_0x200c59=0x0;_0x200c59<_0x30eff1[_0x4a9c('0x3e1')];++_0x200c59)(_0x28a0df=_0x30eff1[_0x200c59])['active']&&_0x28a0df[_0x4a9c('0x3b1')]&&(_0x28a0df[_0x4a9c('0x1f8')](_0x208eee),_0x33e287['save'](),_0x33e287[_0x4a9c('0x429')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b),_0x33e287[_0x4a9c('0x20b')](_0x28a0df[_0x4a9c('0x638')]+_0x28a0df[_0x4a9c('0x3eb')]-Math['PI']/0x2),_0x2f5c51(_0x28a0df,_0x33e287),_0x33e287['restore']());if(_0x5d3e3c(0x0,_0xa9c2e9,_0x39234b),_0x5a7e51(0x1,_0xa9c2e9,_0x39234b),_0x5d3e3c(0x1,_0xa9c2e9,_0x39234b),_0x5487a0(_0xa9c2e9,_0x39234b,0x1),_0x5d3e3c(0x2,_0xa9c2e9,_0x39234b),_0x5d3e3c(0x3,_0xa9c2e9,_0x39234b),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x7e2'),_0x33e287[_0x4a9c('0x749')]=0.09,_0xa9c2e9<=0x0&&_0x33e287[_0x4a9c('0x33a')](0x0,0x0,-_0xa9c2e9,_0x240669),_0xd14dd8[_0x4a9c('0x1d6')]-_0xa9c2e9<=_0x43afbc){var _0x1a0246=Math[_0x4a9c('0x790')](0x0,-_0x39234b);_0x33e287[_0x4a9c('0x33a')](_0xd14dd8[_0x4a9c('0x1d6')]-_0xa9c2e9,_0x1a0246,_0x43afbc-(_0xd14dd8[_0x4a9c('0x1d6')]-_0xa9c2e9),_0x240669-_0x1a0246);}if(_0x39234b<=0x0&&_0x33e287[_0x4a9c('0x33a')](-_0xa9c2e9,0x0,_0x43afbc+_0xa9c2e9,-_0x39234b),_0xd14dd8[_0x4a9c('0x1d6')]-_0x39234b<=_0x240669){var _0x43e353=Math[_0x4a9c('0x790')](0x0,-_0xa9c2e9),_0x4ccca0=0x0;_0xd14dd8[_0x4a9c('0x1d6')]-_0xa9c2e9<=_0x43afbc&&(_0x4ccca0=_0x43afbc-(_0xd14dd8[_0x4a9c('0x1d6')]-_0xa9c2e9)),_0x33e287[_0x4a9c('0x33a')](_0x43e353,_0xd14dd8[_0x4a9c('0x1d6')]-_0x39234b,_0x43afbc-_0x43e353-_0x4ccca0,_0x240669-(_0xd14dd8['mapScale']-_0x39234b));}for(_0x33e287[_0x4a9c('0x749')]=0x1,_0x33e287['fillStyle']=_0x4a9c('0x3f6'),_0x33e287[_0x4a9c('0x33a')](0x0,0x0,_0x43afbc,_0x240669),_0x33e287[_0x4a9c('0x150')]=_0x218d6c,_0x200c59=0x0;_0x200c59<_0x60dc7b['length']+_0x30eff1[_0x4a9c('0x3e1')];++_0x200c59)if((_0x28a0df=_0x60dc7b[_0x200c59]||_0x30eff1[_0x200c59-_0x60dc7b['length']])[_0x4a9c('0x3b1')]&&(0xa!=_0x28a0df[_0x4a9c('0x148')]||_0x28a0df==_0xff3350||_0x28a0df[_0x4a9c('0x4c1')]&&_0x28a0df[_0x4a9c('0x4c1')]==_0xff3350[_0x4a9c('0x4c1')])){var _0x7549cb='☪'+(_0x28a0df[_0x4a9c('0x4c1')]?'[➡'+_0x28a0df[_0x4a9c('0x4c1')]+_0x4a9c('0x545'):'')+(_0x28a0df[_0x4a9c('0x9e')]||'')+(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df[_0x4a9c('0x56f')]?'\x20[☢ID:'+_0x28a0df['sid']+'☢]':'')+'☪';HPDATA=_0xff3350[_0x4a9c('0x528')];if(''!=_0x7549cb){if(_0x33e287[_0x4a9c('0x1e9')]=(_0x28a0df[_0x4a9c('0x628')]||0x1e)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287[_0x4a9c('0x8d')]='middle',_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x39f')]=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287['lineJoin']=_0x4a9c('0x33c'),_0x33e287[_0x4a9c('0x29e')](_0x7549cb,_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b-_0x28a0df[_0x4a9c('0x6f4')]-_0xd14dd8[_0x4a9c('0x7c4')]),_0x33e287[_0x4a9c('0x1ec')](_0x7549cb,_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b-_0x28a0df[_0x4a9c('0x6f4')]-_0xd14dd8[_0x4a9c('0x7c4')]),_0x28a0df[_0x4a9c('0x6b4')]&&_0x4e11ed[_0x4a9c('0x3c1')]['isLoaded']){var _0xd2fddf=_0xd14dd8[_0x4a9c('0x439')];_0x43e353=_0x28a0df['x']-_0xa9c2e9-_0xd2fddf/0x2-_0x33e287[_0x4a9c('0x348')](_0x7549cb)[_0x4a9c('0x149')]/0x2-_0xd14dd8[_0x4a9c('0x7c3')],_0x33e287[_0x4a9c('0x7f4')](_0x4e11ed[_0x4a9c('0x3c1')],_0x43e353,_0x28a0df['y']-_0x39234b-_0x28a0df[_0x4a9c('0x6f4')]-_0xd14dd8[_0x4a9c('0x7c4')]-_0xd2fddf/0x2-0x5,_0xd2fddf,_0xd2fddf);}0x1==_0x28a0df[_0x4a9c('0x729')]&&_0x4e11ed[_0x4a9c('0x1cb')][_0x4a9c('0x156')]&&(_0xd2fddf=_0xd14dd8[_0x4a9c('0x439')],_0x43e353=_0x28a0df['x']-_0xa9c2e9-_0xd2fddf/0x2+_0x33e287[_0x4a9c('0x348')](_0x7549cb)[_0x4a9c('0x149')]/0x2+_0xd14dd8['crownPad'],_0x33e287['drawImage'](_0x4e11ed[_0x4a9c('0x1cb')],_0x43e353,_0x28a0df['y']-_0x39234b-_0x28a0df['scale']-_0xd14dd8[_0x4a9c('0x7c4')]-_0xd2fddf/0x2-0x5,_0xd2fddf,_0xd2fddf));}window[_0x4a9c('0x103')]=_0xff3350[_0x4a9c('0x103')];window['w']=_0xff3350[_0x4a9c('0x53c')];_0x33e287['textAlign']=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x7e4')]='#fff',_0x33e287['lineJoin']='round',_0x33e287[_0x4a9c('0x1e9')]=_0x4a9c('0x3'),_0x33e287['lineWidth']=0x6,_0x33e287[_0x4a9c('0x29e')](_0x4a9c('0x11a')+_0x28a0df[_0x4a9c('0x528')]+'/'+_0x28a0df[_0x4a9c('0xb3')],_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+HPT2),_0x33e287[_0x4a9c('0x1ec')](_0x4a9c('0x11a')+_0x28a0df[_0x4a9c('0x528')]+'/'+_0x28a0df[_0x4a9c('0xb3')],_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df['scale']+_0xd14dd8[_0x4a9c('0x7c4')]+HPT2);if(_0xff3350[_0x4a9c('0x62d')]){_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x7e4')]='aqua',_0x33e287['font']=_0x4a9c('0x3'),_0x33e287['strokeStyle']=_0x4a9c('0x390'),_0x33e287['lineWidth']=0x6,_0x33e287['strokeText'](_0x4a9c('0x183')+Math[_0x4a9c('0x33c')](_0x28a0df[_0x4a9c('0x638')]*0x3e8)/0x3e8,_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+DIT2),_0x33e287[_0x4a9c('0x1ec')]('Dir➠'+Math[_0x4a9c('0x33c')](_0x28a0df[_0x4a9c('0x638')]*0x3e8)/0x3e8,_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+DIT2);};if(_0xff3350[_0x4a9c('0x62d')]){_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x160'),_0x33e287[_0x4a9c('0x1e9')]=_0x4a9c('0x3'),_0x33e287[_0x4a9c('0x150')]=_0x4a9c('0x38e'),_0x33e287['lineWidth']=0x6,_0x33e287[_0x4a9c('0x29e')]('X➡'+Math[_0x4a9c('0x33c')](_0x28a0df['x'])+_0x4a9c('0x5c7')+Math['round'](_0x28a0df['y']),_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+XYT2),_0x33e287[_0x4a9c('0x1ec')]('X➡'+Math[_0x4a9c('0x33c')](_0x28a0df['x'])+_0x4a9c('0x5c7')+Math[_0x4a9c('0x33c')](_0x28a0df['y']),_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+XYT2);};if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df!=_0xff3350&&_0x28a0df['team']&&_0x28a0df[_0x4a9c('0x4c1')]==_0xff3350[_0x4a9c('0x4c1')]){_0x33e287[_0x4a9c('0x56')]='round';_0x33e287[_0x4a9c('0x150')]=TeamR;_0x33e287[_0x4a9c('0x39f')]=0x3;_0x33e287[_0x4a9c('0x4b6')]();_0x33e287[_0x4a9c('0x5dd')](_0xff3350['x']-_0xa9c2e9,_0xff3350['y']-_0x39234b+Radar1);_0x33e287[_0x4a9c('0x526')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+Radar1);_0x33e287[_0x4a9c('0x16c')]();_0x33e287[_0x4a9c('0x150')]=_0x4ee612;}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df!=_0xff3350&&(_0x28a0df['team']!=_0xff3350[_0x4a9c('0x4c1')]||!_0x28a0df[_0x4a9c('0x4c1')])){_0x33e287[_0x4a9c('0x56')]='round';_0x33e287[_0x4a9c('0x150')]=TeamP;_0x33e287['lineWidth']=0x3;_0x33e287[_0x4a9c('0x4b6')]();_0x33e287[_0x4a9c('0x5dd')](_0xff3350['x']-_0xa9c2e9,_0xff3350['y']-_0x39234b+Radar2);_0x33e287[_0x4a9c('0x526')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+Radar2);_0x33e287[_0x4a9c('0x16c')]();_0x33e287[_0x4a9c('0x150')]=_0x4ee612;}if(!_0x28a0df[_0x4a9c('0x62d')]){_0x33e287['lineCap']=_0x4a9c('0x33c');_0x33e287[_0x4a9c('0x150')]=TeamA;_0x33e287[_0x4a9c('0x39f')]=0x3;_0x33e287[_0x4a9c('0x4b6')]();_0x33e287['moveTo'](_0xff3350['x']-_0xa9c2e9,_0xff3350['y']-_0x39234b+Radar3);_0x33e287[_0x4a9c('0x526')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+Radar3);_0x33e287['stroke']();_0x33e287[_0x4a9c('0x150')]=_0x4ee612;}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df[_0x4a9c('0x6b4')]&&_0xff3350[_0x4a9c('0x9e')]!==_0x28a0df[_0x4a9c('0x9e')]){_0x33e287[_0x4a9c('0x56')]=_0x4a9c('0x33c');_0x33e287[_0x4a9c('0x150')]=TeamL;_0x33e287['lineWidth']=0x3;_0x33e287[_0x4a9c('0x4b6')]();_0x33e287[_0x4a9c('0x5dd')](_0xff3350['x']-_0xa9c2e9,_0xff3350['y']-_0x39234b+Radar4);_0x33e287[_0x4a9c('0x526')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+Radar4);_0x33e287[_0x4a9c('0x16c')]();_0x33e287[_0x4a9c('0x150')]=_0x4ee612;}if(_0x28a0df['isPlayer']&&_0x28a0df['skull']&&_0xff3350['name']!==_0x28a0df[_0x4a9c('0x9e')]){_0x33e287[_0x4a9c('0x56')]=_0x4a9c('0x33c');_0x33e287[_0x4a9c('0x150')]=TeamB;_0x33e287[_0x4a9c('0x39f')]=0x3;_0x33e287[_0x4a9c('0x4b6')]();_0x33e287[_0x4a9c('0x5dd')](_0xff3350['x']-_0xa9c2e9,_0xff3350['y']-_0x39234b+Radar5);_0x33e287[_0x4a9c('0x526')](_0x28a0df['x']-_0xa9c2e9,_0x28a0df['y']-_0x39234b+Radar5);_0x33e287['stroke']();_0x33e287[_0x4a9c('0x150')]=_0x4ee612;}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df!=_0xff3350&&_0x28a0df['team']&&_0x28a0df[_0x4a9c('0x4c1')]==_0xff3350[_0x4a9c('0x4c1')]){_0x33e287[_0x4a9c('0x1e9')]=(_0x28a0df[_0x4a9c('0x628')]||0x19)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287['textBaseline']=_0x4a9c('0x35d'),_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x39f')]=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287[_0x4a9c('0x2d6')]=_0x4a9c('0x33c'),_0x33e287[_0x4a9c('0x150')]=TeamR,_0x33e287['strokeText'](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar1),_0x33e287[_0x4a9c('0x1ec')](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar1);}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df!=_0xff3350&&(_0x28a0df[_0x4a9c('0x4c1')]!=_0xff3350[_0x4a9c('0x4c1')]||!_0x28a0df[_0x4a9c('0x4c1')])){_0x33e287[_0x4a9c('0x1e9')]=(_0x28a0df[_0x4a9c('0x628')]||0x19)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287[_0x4a9c('0x8d')]=_0x4a9c('0x35d'),_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287[_0x4a9c('0x39f')]=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287[_0x4a9c('0x2d6')]=_0x4a9c('0x33c'),_0x33e287[_0x4a9c('0x150')]=TeamP,_0x33e287[_0x4a9c('0x29e')](_0x28a0df['name'],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar2),_0x33e287[_0x4a9c('0x1ec')](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar2);}if(!_0x28a0df[_0x4a9c('0x62d')]){_0x33e287[_0x4a9c('0x1e9')]=(_0x28a0df['nameScale']||0x19)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287[_0x4a9c('0x8d')]='middle',_0x33e287[_0x4a9c('0x2b5')]='center',_0x33e287[_0x4a9c('0x39f')]=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287[_0x4a9c('0x2d6')]=_0x4a9c('0x33c'),_0x33e287['strokeStyle']=TeamA,_0x33e287['strokeText'](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar3),_0x33e287[_0x4a9c('0x1ec')](_0x28a0df['name'],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar3);}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df['isLeader']&&_0xff3350[_0x4a9c('0x9e')]!==_0x28a0df['name']){_0x33e287[_0x4a9c('0x1e9')]=(_0x28a0df[_0x4a9c('0x628')]||0x19)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=TeamL,_0x33e287[_0x4a9c('0x8d')]='middle',_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287['lineWidth']=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287[_0x4a9c('0x2d6')]=_0x4a9c('0x33c'),_0x33e287[_0x4a9c('0x150')]=_0x4a9c('0x38e'),_0x33e287[_0x4a9c('0x29e')](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar4),_0x33e287['fillText'](_0x28a0df['name'],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar4);}if(_0x28a0df[_0x4a9c('0x62d')]&&_0x28a0df[_0x4a9c('0x1cb')]&&_0xff3350['name']!==_0x28a0df[_0x4a9c('0x9e')]){_0x33e287['font']=(_0x28a0df[_0x4a9c('0x628')]||0x19)+_0x4a9c('0xe'),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287['textBaseline']='middle',_0x33e287[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x33e287['lineWidth']=_0x28a0df[_0x4a9c('0x628')]?0xb:0x8,_0x33e287[_0x4a9c('0x2d6')]=_0x4a9c('0x33c'),_0x33e287[_0x4a9c('0x150')]=TeamB,_0x33e287['strokeText'](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar5),_0x33e287[_0x4a9c('0x1ec')](_0x28a0df[_0x4a9c('0x9e')],(_0xff3350['x']-_0xa9c2e9+_0x28a0df['x']-_0xa9c2e9)/0x2,(_0xff3350['y']-_0x39234b+_0x28a0df['y']-_0x39234b)/0x2+Radar5);}_0x28a0df[_0x4a9c('0x528')]>0x0&&(_0xd14dd8['healthBarWidth'],_0x33e287[_0x4a9c('0x7e4')]=_0x218d6c,_0x33e287[_0x4a9c('0x586')](_0x28a0df['x']-_0xa9c2e9-_0xd14dd8[_0x4a9c('0x46')]-_0xd14dd8[_0x4a9c('0x134')],_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')],0x2*_0xd14dd8[_0x4a9c('0x46')]+0x2*_0xd14dd8[_0x4a9c('0x134')],0x11,0x8),_0x33e287[_0x4a9c('0x702')](),_0x33e287[_0x4a9c('0x7e4')]=_0x28a0df==_0xff3350||_0x28a0df[_0x4a9c('0x4c1')]&&_0x28a0df[_0x4a9c('0x4c1')]==_0xff3350['team']?TeamO:TeamD,_0x33e287[_0x4a9c('0x586')](_0x28a0df['x']-_0xa9c2e9-_0xd14dd8[_0x4a9c('0x46')],_0x28a0df['y']-_0x39234b+_0x28a0df[_0x4a9c('0x6f4')]+_0xd14dd8[_0x4a9c('0x7c4')]+_0xd14dd8[_0x4a9c('0x134')],0x2*_0xd14dd8[_0x4a9c('0x46')]*(_0x28a0df['health']/_0x28a0df['maxHealth']),0x11-0x2*_0xd14dd8['healthBarPad'],0x7),_0x33e287[_0x4a9c('0x702')]());}for(_0x30e254['update'](_0x208eee,_0x33e287,_0xa9c2e9,_0x39234b),_0x200c59=0x0;_0x200c59<_0x60dc7b[_0x4a9c('0x3e1')];++_0x200c59)if((_0x28a0df=_0x60dc7b[_0x200c59])[_0x4a9c('0x3b1')]&&_0x28a0df[_0x4a9c('0x7b3')]>0x0){_0x28a0df[_0x4a9c('0x7b3')]-=_0x208eee,_0x28a0df[_0x4a9c('0x7b3')]<=0x0&&(_0x28a0df[_0x4a9c('0x7b3')]=0x0),_0x33e287[_0x4a9c('0x1e9')]=_0x4a9c('0x66e');var _0x3929e5=_0x33e287[_0x4a9c('0x348')](_0x28a0df[_0x4a9c('0x56e')]);_0x33e287[_0x4a9c('0x8d')]='middle',_0x33e287[_0x4a9c('0x2b5')]='center',_0x43e353=_0x28a0df['x']-_0xa9c2e9,_0x1a0246=_0x28a0df['y']-_0x28a0df['scale']-_0x39234b-0x5a;var _0x49a213=_0x3929e5[_0x4a9c('0x149')]+0x11;_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x403'),_0x33e287[_0x4a9c('0x586')](_0x43e353-_0x49a213/0x2,_0x1a0246-23.5,_0x49a213,0x2f,0x6),_0x33e287['fill'](),_0x33e287[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x33e287['fillText'](_0x28a0df[_0x4a9c('0x56e')],_0x43e353,_0x1a0246);}!function(_0x3220b7){if(_0xff3350&&_0xff3350['alive']){_0x4fd410[_0x4a9c('0x415')](0x0,0x0,_0x388c11[_0x4a9c('0x149')],_0x388c11[_0x4a9c('0x178')]),_0x4fd410[_0x4a9c('0x150')]=_0x4a9c('0x128'),_0x4fd410[_0x4a9c('0x39f')]=0x4;for(var _0x16426f=0x0;_0x16426f<_0x239fc0[_0x4a9c('0x3e1')];++_0x16426f)(_0x16004e=_0x239fc0[_0x16426f])[_0x4a9c('0x5ab')](_0x4fd410,_0x3220b7);if(_0x4fd410[_0x4a9c('0x749')]=0x1,_0x4fd410[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x15bb91(_0xff3350['x']/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11['width'],_0xff3350['y']/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11[_0x4a9c('0x178')],0x7,_0x4fd410,!0x0),_0x4fd410[_0x4a9c('0x7e4')]=_0x4a9c('0x310'),_0xff3350[_0x4a9c('0x4c1')]&&_0xcebb0c)for(_0x16426f=0x0;_0x16426f<_0xcebb0c[_0x4a9c('0x3e1')];)_0x15bb91(_0xcebb0c[_0x16426f]/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11[_0x4a9c('0x149')],_0xcebb0c[_0x16426f+0x1]/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11['height'],0x7,_0x4fd410,!0x0),_0x16426f+=0x2;_0x60ebe1&&(_0x4fd410[_0x4a9c('0x7e4')]=_0x4a9c('0x5ca'),_0x4fd410[_0x4a9c('0x1e9')]=_0x4a9c('0x23f'),_0x4fd410[_0x4a9c('0x8d')]=_0x4a9c('0x35d'),_0x4fd410[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x4fd410['fillText']('x',_0x60ebe1['x']/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11[_0x4a9c('0x149')],_0x60ebe1['y']/_0xd14dd8[_0x4a9c('0x1d6')]*_0x388c11[_0x4a9c('0x178')])),_0x439268&&(_0x4fd410[_0x4a9c('0x7e4')]=_0x4a9c('0x128'),_0x4fd410[_0x4a9c('0x1e9')]=_0x4a9c('0x23f'),_0x4fd410[_0x4a9c('0x8d')]=_0x4a9c('0x35d'),_0x4fd410[_0x4a9c('0x2b5')]=_0x4a9c('0x2c0'),_0x4fd410[_0x4a9c('0x1ec')]('x',_0x439268['x']/_0xd14dd8['mapScale']*_0x388c11[_0x4a9c('0x149')],_0x439268['y']/_0xd14dd8['mapScale']*_0x388c11[_0x4a9c('0x178')]));}}(_0x208eee),-0x1!==_0x5d08b2['id']&&_0x3adc44(_0x5d08b2[_0x4a9c('0x5f3')],_0x5d08b2[_0x4a9c('0x17d')],_0x5d08b2[_0x4a9c('0x2cb')],_0x5d08b2['currentY']),-0x1!==_0x5ef49f['id']&&_0x3adc44(_0x5ef49f[_0x4a9c('0x5f3')],_0x5ef49f[_0x4a9c('0x17d')],_0x5ef49f[_0x4a9c('0x2cb')],_0x5ef49f['currentY']);}(),requestAnimFrame(_0x222d52);}(),window[_0x4a9c('0x3f0')]=_0x3877b4,window['aJoinReq']=_0x3ad055,window[_0x4a9c('0x68d')]=function(){_0x494254||(_0x494254=!0x0,_0x172d43(_0x4a9c('0x354'),0x1));},window[_0x4a9c('0x59e')]=_0x517d0d,window[_0x4a9c('0x614')]=_0x15da5c,window[_0x4a9c('0x187')]=_0x17bee1,window[_0x4a9c('0x381')]=_0x404ea9,window[_0x4a9c('0x324')]=_0x4207a6,window[_0x4a9c('0x4db')]=_0x2085e2,window[_0x4a9c('0x7f7')]=_0x2041ff,window[_0x4a9c('0x4f7')]=function(_0x221513){_0x11c090=_0x221513,_0x45db1d();},window['changeStoreIndex']=function(_0x25a48c){_0x2008f5!=_0x25a48c&&(_0x2008f5=_0x25a48c,_0x2c35d7());},window['config']=_0xd14dd8;},function(_0x201e3e,_0x28007a){!function(_0x360d7e,_0x2382b5,_0xbb45db){function _0x730194(_0x2ab9f1,_0x5cf378){return typeof _0x2ab9f1===_0x5cf378;}var _0x97a415=[],_0x4edeab=[],_0x2beef5={'_version':_0x4a9c('0x19'),'_config':{'classPrefix':'','enableClasses':!0x0,'enableJSClass':!0x0,'usePrefixes':!0x0},'_q':[],'on':function(_0x40ad50,_0x503c0d){var _0x308072=this;setTimeout(function(){_0x503c0d(_0x308072[_0x40ad50]);},0x0);},'addTest':function(_0x318313,_0x5c2785,_0x54abbd){_0x4edeab[_0x4a9c('0x2d2')]({'name':_0x318313,'fn':_0x5c2785,'options':_0x54abbd});},'addAsyncTest':function(_0x4c391c){_0x4edeab['push']({'name':null,'fn':_0x4c391c});}},_0x4e3a38=function(){};_0x4e3a38[_0x4a9c('0x216')]=_0x2beef5,_0x4e3a38=new _0x4e3a38();var _0x4ecb60=_0x2382b5[_0x4a9c('0x294')],_0x146455=_0x4a9c('0x39d')===_0x4ecb60[_0x4a9c('0x6cb')]['toLowerCase']();_0x4e3a38[_0x4a9c('0x1f1')](_0x4a9c('0x161'),function(){var _0x1f9111=!0x1;try{var _0x2d8384=Object[_0x4a9c('0x18d')]({},_0x4a9c('0x475'),{'get':function(){_0x1f9111=!0x0;}});_0x360d7e[_0x4a9c('0x6e9')](_0x4a9c('0x504'),null,_0x2d8384);}catch(_0x4ffb3b){}return _0x1f9111;}),function(){var _0x20e814,_0x572e2b,_0x5e6a42,_0x1a26eb,_0x222a67,_0xca8545;for(var _0x26f20c in _0x4edeab)if(_0x4edeab[_0x4a9c('0x4e')](_0x26f20c)){if(_0x20e814=[],(_0x572e2b=_0x4edeab[_0x26f20c])['name']&&(_0x20e814[_0x4a9c('0x2d2')](_0x572e2b[_0x4a9c('0x9e')][_0x4a9c('0x5c2')]()),_0x572e2b[_0x4a9c('0x5b9')]&&_0x572e2b[_0x4a9c('0x5b9')][_0x4a9c('0x34')]&&_0x572e2b['options'][_0x4a9c('0x34')][_0x4a9c('0x3e1')]))for(_0x5e6a42=0x0;_0x5e6a42<_0x572e2b[_0x4a9c('0x5b9')][_0x4a9c('0x34')][_0x4a9c('0x3e1')];_0x5e6a42++)_0x20e814[_0x4a9c('0x2d2')](_0x572e2b[_0x4a9c('0x5b9')][_0x4a9c('0x34')][_0x5e6a42][_0x4a9c('0x5c2')]());for(_0x1a26eb=_0x730194(_0x572e2b['fn'],_0x4a9c('0x2f2'))?_0x572e2b['fn']():_0x572e2b['fn'],_0x222a67=0x0;_0x222a67<_0x20e814['length'];_0x222a67++)0x1===(_0xca8545=_0x20e814[_0x222a67][_0x4a9c('0x41e')]('.'))[_0x4a9c('0x3e1')]?_0x4e3a38[_0xca8545[0x0]]=_0x1a26eb:(!_0x4e3a38[_0xca8545[0x0]]||_0x4e3a38[_0xca8545[0x0]]instanceof Boolean||(_0x4e3a38[_0xca8545[0x0]]=new Boolean(_0x4e3a38[_0xca8545[0x0]])),_0x4e3a38[_0xca8545[0x0]][_0xca8545[0x1]]=_0x1a26eb),_0x97a415['push']((_0x1a26eb?'':_0x4a9c('0x6bd'))+_0xca8545[_0x4a9c('0x64d')]('-'));}}(),function(_0x5ab18d){var _0x23164d=_0x4ecb60['className'],_0x428246=_0x4e3a38['_config'][_0x4a9c('0x3c0')]||'';if(_0x146455&&(_0x23164d=_0x23164d['baseVal']),_0x4e3a38[_0x4a9c('0x4c4')][_0x4a9c('0x6a3')]){var _0x1f7940=new RegExp('(^|\x5cs)'+_0x428246+_0x4a9c('0x145'));_0x23164d=_0x23164d['replace'](_0x1f7940,'$1'+_0x428246+_0x4a9c('0x72a'));}_0x4e3a38[_0x4a9c('0x4c4')][_0x4a9c('0x7dc')]&&(_0x23164d+='\x20'+_0x428246+_0x5ab18d[_0x4a9c('0x64d')]('\x20'+_0x428246),_0x146455?_0x4ecb60[_0x4a9c('0x2a3')]['baseVal']=_0x23164d:_0x4ecb60[_0x4a9c('0x2a3')]=_0x23164d);}(_0x97a415),delete _0x2beef5['addTest'],delete _0x2beef5[_0x4a9c('0x491')];for(var _0x282888=0x0;_0x282888<_0x4e3a38['_q']['length'];_0x282888++)_0x4e3a38['_q'][_0x282888]();_0x360d7e[_0x4a9c('0x362')]=_0x4e3a38;}(window,document);},function(_0x4af887,_0x16b705,_0x2fd04d){var _0x476963=_0x2fd04d(0x18);_0x2fd04d(0x13),_0x4af887[_0x4a9c('0x14f')]={'socket':null,'connected':!0x1,'socketId':-0x1,'connect':function(_0x2c7edf,_0x2dd510,_0x35c531){if(!this[_0x4a9c('0x28f')]){var _0x14f72a=this;try{var _0x54798e=!0x1,_0x10303d=_0x2c7edf;this['socket']=new WebSocket(_0x10303d),this[_0x4a9c('0x28f')][_0x4a9c('0x1e7')]=_0x4a9c('0x63c'),this[_0x4a9c('0x28f')][_0x4a9c('0x57c')]=function(_0x534e83){var _0x144a8e=new Uint8Array(_0x534e83[_0x4a9c('0x799')]),_0x2cc439=_0x476963['decode'](_0x144a8e),_0x2f8192=_0x2cc439[0x0];_0x144a8e=_0x2cc439[0x1],_0x4a9c('0x2b8')==_0x2f8192?_0x14f72a[_0x4a9c('0x3ba')]=_0x144a8e[0x0]:_0x35c531[_0x2f8192][_0x4a9c('0x635')](void 0x0,_0x144a8e);},this[_0x4a9c('0x28f')][_0x4a9c('0x72d')]=function(){_0x14f72a[_0x4a9c('0x79')]=!0x0,_0x2dd510();},this[_0x4a9c('0x28f')][_0x4a9c('0x5c8')]=function(_0x1f534d){_0x14f72a['connected']=!0x1,0xfa1==_0x1f534d['code']?_0x2dd510(_0x4a9c('0x54d')):_0x54798e||_0x2dd510(_0x4a9c('0x4bf'));},this[_0x4a9c('0x28f')][_0x4a9c('0x1f7')]=function(_0x310074){this['socket']&&this[_0x4a9c('0x28f')][_0x4a9c('0x255')]!=WebSocket[_0x4a9c('0x396')]&&(_0x54798e=!0x0,console[_0x4a9c('0x3b0')](_0x4a9c('0x1e2'),arguments),_0x2dd510(_0x4a9c('0x1e2')));};}catch(_0x37e787){console[_0x4a9c('0x539')](_0x4a9c('0x16a'),_0x37e787),_0x2dd510(_0x37e787);}}},'send':function(_0xa50532){var _0x4aadb2=Array[_0x4a9c('0x216')][_0x4a9c('0x14')][_0x4a9c('0xc3')](arguments,0x1),_0x4d4f15=_0x476963[_0x4a9c('0x45e')]([_0xa50532,_0x4aadb2]);this[_0x4a9c('0x28f')]['send'](_0x4d4f15);},'socketReady':function(){return this[_0x4a9c('0x28f')]&&this[_0x4a9c('0x79')];},'close':function(){this[_0x4a9c('0x28f')]&&this[_0x4a9c('0x28f')]['close']();}};},function(_0x6a0ce2,_0x61dd04,_0x5e90e9){_0x61dd04['encode']=_0x5e90e9(0x9)[_0x4a9c('0x45e')],_0x61dd04[_0x4a9c('0x5bd')]=_0x5e90e9(0xf)[_0x4a9c('0x5bd')],_0x61dd04[_0x4a9c('0x461')]=_0x5e90e9(0x25)[_0x4a9c('0x461')],_0x61dd04[_0x4a9c('0x71d')]=_0x5e90e9(0x26)[_0x4a9c('0x71d')],_0x61dd04[_0x4a9c('0x21f')]=_0x5e90e9(0x27)[_0x4a9c('0x21f')],_0x61dd04[_0x4a9c('0x3b6')]=_0x5e90e9(0x28)[_0x4a9c('0x3b6')];},function(_0x15c208,_0x49147b,_0x1fd765){(function(_0x5bb093){function _0x4020e7(_0x1abdcb){return _0x1abdcb&&_0x1abdcb[_0x4a9c('0x37a')]&&_0x1abdcb;}_0x15c208['exports']=_0x4020e7(void 0x0!==_0x5bb093&&_0x5bb093)||_0x4020e7(this[_0x4a9c('0x3df')])||_0x4020e7(_0x4a9c('0x45d')!=typeof window&&window['Buffer'])||this[_0x4a9c('0x3df')];}[_0x4a9c('0xc3')](this,_0x1fd765(0xb)[_0x4a9c('0x3df')]));},function(_0x46a1e7,_0x56cd6b,_0x220040){'use strict';_0x56cd6b[_0x4a9c('0x77f')]=function(_0x3e8365){var _0x5d6f3e=_0x52c092(_0x3e8365),_0x2c7e63=_0x5d6f3e[0x0],_0x16a420=_0x5d6f3e[0x1];return 0x3*(_0x2c7e63+_0x16a420)/0x4-_0x16a420;},_0x56cd6b[_0x4a9c('0x7b4')]=function(_0x1513c6){var _0x3c274b,_0x4b60de,_0x531e40=_0x52c092(_0x1513c6),_0x35a717=_0x531e40[0x0],_0x4aac40=_0x531e40[0x1],_0xc3960=new _0xdce929(function(_0x5d6618,_0x4a4036,_0x2ed28a){return 0x3*(_0x4a4036+_0x2ed28a)/0x4-_0x2ed28a;}(0x0,_0x35a717,_0x4aac40)),_0x5a2e58=0x0,_0xcccd64=_0x4aac40>0x0?_0x35a717-0x4:_0x35a717;for(_0x4b60de=0x0;_0x4b60de<_0xcccd64;_0x4b60de+=0x4)_0x3c274b=_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de)]<<0x12|_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de+0x1)]<<0xc|_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de+0x2)]<<0x6|_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de+0x3)],_0xc3960[_0x5a2e58++]=_0x3c274b>>0x10&0xff,_0xc3960[_0x5a2e58++]=_0x3c274b>>0x8&0xff,_0xc3960[_0x5a2e58++]=0xff&_0x3c274b;return 0x2===_0x4aac40&&(_0x3c274b=_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de)]<<0x2|_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de+0x1)]>>0x4,_0xc3960[_0x5a2e58++]=0xff&_0x3c274b),0x1===_0x4aac40&&(_0x3c274b=_0x197fd3[_0x1513c6['charCodeAt'](_0x4b60de)]<<0xa|_0x197fd3[_0x1513c6[_0x4a9c('0x611')](_0x4b60de+0x1)]<<0x4|_0x197fd3[_0x1513c6['charCodeAt'](_0x4b60de+0x2)]>>0x2,_0xc3960[_0x5a2e58++]=_0x3c274b>>0x8&0xff,_0xc3960[_0x5a2e58++]=0xff&_0x3c274b),_0xc3960;},_0x56cd6b[_0x4a9c('0x2ce')]=function(_0x5d8070){for(var _0x1e7e13,_0xf49978=_0x5d8070[_0x4a9c('0x3e1')],_0x9e0a46=_0xf49978%0x3,_0x598d5f=[],_0x54eab8=0x0,_0x163d55=_0xf49978-_0x9e0a46;_0x54eab8<_0x163d55;_0x54eab8+=0x3fff)_0x598d5f[_0x4a9c('0x2d2')](_0x2fd424(_0x5d8070,_0x54eab8,_0x54eab8+0x3fff>_0x163d55?_0x163d55:_0x54eab8+0x3fff));return 0x1===_0x9e0a46?(_0x1e7e13=_0x5d8070[_0xf49978-0x1],_0x598d5f[_0x4a9c('0x2d2')](_0xc5fb4c[_0x1e7e13>>0x2]+_0xc5fb4c[_0x1e7e13<<0x4&0x3f]+'==')):0x2===_0x9e0a46&&(_0x1e7e13=(_0x5d8070[_0xf49978-0x2]<<0x8)+_0x5d8070[_0xf49978-0x1],_0x598d5f['push'](_0xc5fb4c[_0x1e7e13>>0xa]+_0xc5fb4c[_0x1e7e13>>0x4&0x3f]+_0xc5fb4c[_0x1e7e13<<0x2&0x3f]+'=')),_0x598d5f[_0x4a9c('0x64d')]('');};for(var _0xc5fb4c=[],_0x197fd3=[],_0xdce929=_0x4a9c('0x45d')!=typeof Uint8Array?Uint8Array:Array,_0x4e4bc7=_0x4a9c('0x41b'),_0x476a28=0x0,_0x4ac897=_0x4e4bc7['length'];_0x476a28<_0x4ac897;++_0x476a28)_0xc5fb4c[_0x476a28]=_0x4e4bc7[_0x476a28],_0x197fd3[_0x4e4bc7[_0x4a9c('0x611')](_0x476a28)]=_0x476a28;function _0x52c092(_0x271294){var _0x34c3e4=_0x271294[_0x4a9c('0x3e1')];if(_0x34c3e4%0x4>0x0)throw new Error(_0x4a9c('0x4d3'));var _0x545f8a=_0x271294[_0x4a9c('0x312')]('=');return-0x1===_0x545f8a&&(_0x545f8a=_0x34c3e4),[_0x545f8a,_0x545f8a===_0x34c3e4?0x0:0x4-_0x545f8a%0x4];}function _0x3ad574(_0x4bd9d7){return _0xc5fb4c[_0x4bd9d7>>0x12&0x3f]+_0xc5fb4c[_0x4bd9d7>>0xc&0x3f]+_0xc5fb4c[_0x4bd9d7>>0x6&0x3f]+_0xc5fb4c[0x3f&_0x4bd9d7];}function _0x2fd424(_0x53f904,_0x2398de,_0x147d90){for(var _0xf2f82d,_0x20e151=[],_0x5c43d7=_0x2398de;_0x5c43d7<_0x147d90;_0x5c43d7+=0x3)_0xf2f82d=(_0x53f904[_0x5c43d7]<<0x10&0xff0000)+(_0x53f904[_0x5c43d7+0x1]<<0x8&0xff00)+(0xff&_0x53f904[_0x5c43d7+0x2]),_0x20e151[_0x4a9c('0x2d2')](_0x3ad574(_0xf2f82d));return _0x20e151[_0x4a9c('0x64d')]('');}_0x197fd3['-'[_0x4a9c('0x611')](0x0)]=0x3e,_0x197fd3['_'[_0x4a9c('0x611')](0x0)]=0x3f;},function(_0x2696cc,_0x156da8){var _0x240244={}['toString'];_0x2696cc[_0x4a9c('0x14f')]=Array[_0x4a9c('0x4c8')]||function(_0x541d67){return _0x4a9c('0x2f4')==_0x240244[_0x4a9c('0xc3')](_0x541d67);};},function(_0x118841,_0x4f91ee,_0x2799c2){var _0x1e844d=_0x2799c2(0x0);function _0x48d27d(_0x37bb29){return new Array(_0x37bb29);}(_0x4f91ee=_0x118841[_0x4a9c('0x14f')]=_0x48d27d(0x0))[_0x4a9c('0x569')]=_0x48d27d,_0x4f91ee['concat']=_0x1e844d[_0x4a9c('0x4fc')],_0x4f91ee[_0x4a9c('0x34a')]=function(_0x227972){if(!_0x1e844d[_0x4a9c('0x37a')](_0x227972)&&_0x1e844d[_0x4a9c('0x3bb')](_0x227972))_0x227972=_0x1e844d[_0x4a9c('0x4b0')][_0x4a9c('0x34a')](_0x227972);else if(_0x1e844d[_0x4a9c('0x1e6')](_0x227972))_0x227972=new Uint8Array(_0x227972);else{if(_0x4a9c('0x290')==typeof _0x227972)return _0x1e844d[_0x4a9c('0x34a')][_0x4a9c('0xc3')](_0x4f91ee,_0x227972);if(_0x4a9c('0x27')==typeof _0x227972)throw new TypeError(_0x4a9c('0x175'));}return Array[_0x4a9c('0x216')]['slice']['call'](_0x227972);};},function(_0x4598c3,_0x4687a8,_0x4d1f1f){var _0x270933=_0x4d1f1f(0x0),_0x44c5b0=_0x270933[_0x4a9c('0x44b')];function _0x34276b(_0x1180e6){return new _0x44c5b0(_0x1180e6);}(_0x4687a8=_0x4598c3[_0x4a9c('0x14f')]=_0x270933[_0x4a9c('0x587')]?_0x34276b(0x0):[])['alloc']=_0x270933[_0x4a9c('0x587')]&&_0x44c5b0[_0x4a9c('0x569')]||_0x34276b,_0x4687a8['concat']=_0x270933[_0x4a9c('0x4fc')],_0x4687a8[_0x4a9c('0x34a')]=function(_0x1150d4){if(!_0x270933[_0x4a9c('0x37a')](_0x1150d4)&&_0x270933['isView'](_0x1150d4))_0x1150d4=_0x270933[_0x4a9c('0x4b0')][_0x4a9c('0x34a')](_0x1150d4);else if(_0x270933[_0x4a9c('0x1e6')](_0x1150d4))_0x1150d4=new Uint8Array(_0x1150d4);else{if(_0x4a9c('0x290')==typeof _0x1150d4)return _0x270933['from']['call'](_0x4687a8,_0x1150d4);if(_0x4a9c('0x27')==typeof _0x1150d4)throw new TypeError(_0x4a9c('0x175'));}return _0x44c5b0[_0x4a9c('0x34a')]&&0x1!==_0x44c5b0['from'][_0x4a9c('0x3e1')]?_0x44c5b0[_0x4a9c('0x34a')](_0x1150d4):new _0x44c5b0(_0x1150d4);};},function(_0xaae3ea,_0x25f7cf,_0xa9b776){var _0x2763e3=_0xa9b776(0x0);function _0x502119(_0x20d73b){return new Uint8Array(_0x20d73b);}(_0x25f7cf=_0xaae3ea[_0x4a9c('0x14f')]=_0x2763e3[_0x4a9c('0x50e')]?_0x502119(0x0):[])[_0x4a9c('0x569')]=_0x502119,_0x25f7cf[_0x4a9c('0x4fc')]=_0x2763e3[_0x4a9c('0x4fc')],_0x25f7cf[_0x4a9c('0x34a')]=function(_0x250d48){if(_0x2763e3[_0x4a9c('0x3bb')](_0x250d48)){var _0x1278b6=_0x250d48[_0x4a9c('0x274')],_0x42aad1=_0x250d48['byteLength'];(_0x250d48=_0x250d48[_0x4a9c('0x5b')])[_0x4a9c('0x77f')]!==_0x42aad1&&(_0x250d48[_0x4a9c('0x14')]?_0x250d48=_0x250d48[_0x4a9c('0x14')](_0x1278b6,_0x1278b6+_0x42aad1):(_0x250d48=new Uint8Array(_0x250d48))[_0x4a9c('0x77f')]!==_0x42aad1&&(_0x250d48=Array[_0x4a9c('0x216')]['slice']['call'](_0x250d48,_0x1278b6,_0x1278b6+_0x42aad1)));}else{if(_0x4a9c('0x290')==typeof _0x250d48)return _0x2763e3[_0x4a9c('0x34a')][_0x4a9c('0xc3')](_0x25f7cf,_0x250d48);if(_0x4a9c('0x27')==typeof _0x250d48)throw new TypeError(_0x4a9c('0x175'));}return new Uint8Array(_0x250d48);};},function(_0x294952,_0x5407bc){_0x5407bc[_0x4a9c('0x33e')]=function(_0x35faed,_0x316bf1,_0x1d2864,_0xc0e96){var _0x4083c0;_0x1d2864||(_0x1d2864=0x0),_0xc0e96||0x0===_0xc0e96||(_0xc0e96=this['length']),_0x316bf1||(_0x316bf1=0x0);var _0x506b25=_0xc0e96-_0x1d2864;if(_0x35faed===this&&_0x1d2864<_0x316bf1&&_0x316bf1<_0xc0e96)for(_0x4083c0=_0x506b25-0x1;_0x4083c0>=0x0;_0x4083c0--)_0x35faed[_0x4083c0+_0x316bf1]=this[_0x4083c0+_0x1d2864];else for(_0x4083c0=0x0;_0x4083c0<_0x506b25;_0x4083c0++)_0x35faed[_0x4083c0+_0x316bf1]=this[_0x4083c0+_0x1d2864];return _0x506b25;},_0x5407bc[_0x4a9c('0x1c1')]=function(_0x27675a,_0x3731be,_0x9b412f){var _0x31d524=0x0|_0x3731be;_0x9b412f||(_0x9b412f=this['length']);for(var _0x28aef6='',_0x5d29fc=0x0;_0x31d524<_0x9b412f;)(_0x5d29fc=this[_0x31d524++])<0x80?_0x28aef6+=String[_0x4a9c('0x3b9')](_0x5d29fc):(0xc0==(0xe0&_0x5d29fc)?_0x5d29fc=(0x1f&_0x5d29fc)<<0x6|0x3f&this[_0x31d524++]:0xe0==(0xf0&_0x5d29fc)?_0x5d29fc=(0xf&_0x5d29fc)<<0xc|(0x3f&this[_0x31d524++])<<0x6|0x3f&this[_0x31d524++]:0xf0==(0xf8&_0x5d29fc)&&(_0x5d29fc=(0x7&_0x5d29fc)<<0x12|(0x3f&this[_0x31d524++])<<0xc|(0x3f&this[_0x31d524++])<<0x6|0x3f&this[_0x31d524++]),_0x5d29fc>=0x10000?(_0x5d29fc-=0x10000,_0x28aef6+=String[_0x4a9c('0x3b9')](0xd800+(_0x5d29fc>>>0xa),0xdc00+(0x3ff&_0x5d29fc))):_0x28aef6+=String['fromCharCode'](_0x5d29fc));return _0x28aef6;},_0x5407bc[_0x4a9c('0x60f')]=function(_0xd119d8,_0x3247e3){for(var _0x2baf39=_0x3247e3||(_0x3247e3|=0x0),_0x5eb7cb=_0xd119d8[_0x4a9c('0x3e1')],_0x3abe13=0x0,_0x32be57=0x0;_0x32be57<_0x5eb7cb;)(_0x3abe13=_0xd119d8[_0x4a9c('0x611')](_0x32be57++))<0x80?this[_0x2baf39++]=_0x3abe13:_0x3abe13<0x800?(this[_0x2baf39++]=0xc0|_0x3abe13>>>0x6,this[_0x2baf39++]=0x80|0x3f&_0x3abe13):_0x3abe13<0xd800||_0x3abe13>0xdfff?(this[_0x2baf39++]=0xe0|_0x3abe13>>>0xc,this[_0x2baf39++]=0x80|_0x3abe13>>>0x6&0x3f,this[_0x2baf39++]=0x80|0x3f&_0x3abe13):(_0x3abe13=0x10000+(_0x3abe13-0xd800<<0xa|_0xd119d8[_0x4a9c('0x611')](_0x32be57++)-0xdc00),this[_0x2baf39++]=0xf0|_0x3abe13>>>0x12,this[_0x2baf39++]=0x80|_0x3abe13>>>0xc&0x3f,this[_0x2baf39++]=0x80|_0x3abe13>>>0x6&0x3f,this[_0x2baf39++]=0x80|0x3f&_0x3abe13);return _0x2baf39-_0x3247e3;};},function(_0x2fc457,_0xa1da62,_0x4244d4){_0xa1da62[_0x4a9c('0x73f')]=function(_0x2e6db9){_0x2e6db9[_0x4a9c('0x40e')](0xe,Error,[_0x6d5443,_0x3272e5]),_0x2e6db9['addExtPacker'](0x1,EvalError,[_0x6d5443,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0x2,RangeError,[_0x6d5443,_0x3272e5]),_0x2e6db9['addExtPacker'](0x3,ReferenceError,[_0x6d5443,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0x4,SyntaxError,[_0x6d5443,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0x5,TypeError,[_0x6d5443,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0x6,URIError,[_0x6d5443,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0xa,RegExp,[_0x36b35c,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0xb,Boolean,[_0xc82319,_0x3272e5]),_0x2e6db9['addExtPacker'](0xc,String,[_0xc82319,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0xd,Date,[Number,_0x3272e5]),_0x2e6db9[_0x4a9c('0x40e')](0xf,Number,[_0xc82319,_0x3272e5]),_0x4a9c('0x45d')!=typeof Uint8Array&&(_0x2e6db9[_0x4a9c('0x40e')](0x11,Int8Array,_0x5debea),_0x2e6db9['addExtPacker'](0x12,Uint8Array,_0x5debea),_0x2e6db9['addExtPacker'](0x13,Int16Array,_0x5debea),_0x2e6db9[_0x4a9c('0x40e')](0x14,Uint16Array,_0x5debea),_0x2e6db9[_0x4a9c('0x40e')](0x15,Int32Array,_0x5debea),_0x2e6db9[_0x4a9c('0x40e')](0x16,Uint32Array,_0x5debea),_0x2e6db9[_0x4a9c('0x40e')](0x17,Float32Array,_0x5debea),'undefined'!=typeof Float64Array&&_0x2e6db9[_0x4a9c('0x40e')](0x18,Float64Array,_0x5debea),_0x4a9c('0x45d')!=typeof Uint8ClampedArray&&_0x2e6db9[_0x4a9c('0x40e')](0x19,Uint8ClampedArray,_0x5debea),_0x2e6db9[_0x4a9c('0x40e')](0x1a,ArrayBuffer,_0x5debea),_0x2e6db9['addExtPacker'](0x1d,DataView,_0x5debea)),_0x203385[_0x4a9c('0x587')]&&_0x2e6db9[_0x4a9c('0x40e')](0x1b,_0x1e4433,_0x203385[_0x4a9c('0x34a')]);};var _0x38b6a6,_0x203385=_0x4244d4(0x0),_0x1e4433=_0x203385[_0x4a9c('0x44b')],_0x5debea=_0x203385[_0x4a9c('0x4b0')][_0x4a9c('0x34a')],_0x35a700={'name':0x1,'message':0x1,'stack':0x1,'columnNumber':0x1,'fileName':0x1,'lineNumber':0x1};function _0x3272e5(_0x49f0ef){return _0x38b6a6||(_0x38b6a6=_0x4244d4(0x9)[_0x4a9c('0x45e')]),_0x38b6a6(_0x49f0ef);}function _0xc82319(_0x33739e){return _0x33739e['valueOf']();}function _0x36b35c(_0x1d8034){(_0x1d8034=RegExp['prototype']['toString'][_0x4a9c('0xc3')](_0x1d8034)[_0x4a9c('0x41e')]('/'))[_0x4a9c('0x70b')]();var _0xa31da0=[_0x1d8034['pop']()];return _0xa31da0[_0x4a9c('0x7b2')](_0x1d8034[_0x4a9c('0x64d')]('/')),_0xa31da0;}function _0x6d5443(_0x49d017){var _0x3af068={};for(var _0xe8ab6 in _0x35a700)_0x3af068[_0xe8ab6]=_0x49d017[_0xe8ab6];return _0x3af068;}},function(_0x55164c,_0x4f34a2,_0x75e052){var _0x5d01b6=_0x75e052(0x5),_0x5aac76=_0x75e052(0x7),_0x2fcb51=_0x5aac76[_0x4a9c('0x6bc')],_0xf501ce=_0x5aac76[_0x4a9c('0x3fd')],_0x25d3ea=_0x75e052(0x0),_0xf53137=_0x75e052(0x6),_0x164be3=_0x75e052(0x22),_0x5ac0e5=_0x75e052(0xd)[_0x4a9c('0x800')],_0x2c3149=_0x75e052(0x3)[_0x4a9c('0x3a7')],_0x5d8499='undefined'!=typeof Uint8Array,_0x52100c=_0x4a9c('0x45d')!=typeof Map,_0x46a2c1=[];_0x46a2c1[0x1]=0xd4,_0x46a2c1[0x2]=0xd5,_0x46a2c1[0x4]=0xd6,_0x46a2c1[0x8]=0xd7,_0x46a2c1[0x10]=0xd8,_0x4f34a2[_0x4a9c('0x787')]=function(_0x2fddb3){var _0x5c645=_0x164be3[_0x4a9c('0x5e4')](_0x2fddb3),_0x2e9f9c=_0x2fddb3&&_0x2fddb3[_0x4a9c('0x2a5')],_0x5b8dfb=_0x5d8499&&_0x2fddb3&&_0x2fddb3[_0x4a9c('0x5a8')],_0x16ffe7=_0x5b8dfb?_0x25d3ea['isArrayBuffer']:_0x25d3ea[_0x4a9c('0x37a')],_0x2d765d=_0x5b8dfb?function(_0x3922c8,_0x4f2dc2){_0x14743b(_0x3922c8,new Uint8Array(_0x4f2dc2));}:_0x14743b,_0x26f92f=_0x52100c&&_0x2fddb3&&_0x2fddb3[_0x4a9c('0x80')]?function(_0x4b8a91,_0x2c874e){if(!(_0x2c874e instanceof Map))return _0x418a33(_0x4b8a91,_0x2c874e);var _0x5eb18b=_0x2c874e[_0x4a9c('0x213')];_0x5c645[_0x5eb18b<0x10?0x80+_0x5eb18b:_0x5eb18b<=0xffff?0xde:0xdf](_0x4b8a91,_0x5eb18b);var _0x314429=_0x4b8a91[_0x4a9c('0x3b6')][_0x4a9c('0x45e')];_0x2c874e['forEach'](function(_0x16ecca,_0x46bcde,_0x6950cc){_0x314429(_0x4b8a91,_0x46bcde),_0x314429(_0x4b8a91,_0x16ecca);});}:_0x418a33;return{'boolean':function(_0x194699,_0x202b1b){_0x5c645[_0x202b1b?0xc3:0xc2](_0x194699,_0x202b1b);},'function':_0x4a8141,'number':function(_0x962ea0,_0x34f6c2){var _0x455114=0x0|_0x34f6c2;_0x34f6c2===_0x455114?_0x5c645[-0x20<=_0x455114&&_0x455114<=0x7f?0xff&_0x455114:0x0<=_0x455114?_0x455114<=0xff?0xcc:_0x455114<=0xffff?0xcd:0xce:-0x80<=_0x455114?0xd0:-0x8000<=_0x455114?0xd1:0xd2](_0x962ea0,_0x455114):_0x5c645[0xcb](_0x962ea0,_0x34f6c2);},'object':_0x2e9f9c?function(_0x4c0583,_0x423672){if(_0x16ffe7(_0x423672))return function(_0x3a95bd,_0xd5ad9){var _0x4bdc61=_0xd5ad9[_0x4a9c('0x3e1')];_0x5c645[_0x4bdc61<0x20?0xa0+_0x4bdc61:_0x4bdc61<=0xffff?0xda:0xdb](_0x3a95bd,_0x4bdc61),_0x3a95bd[_0x4a9c('0x1c2')](_0xd5ad9);}(_0x4c0583,_0x423672);_0x13a8fe(_0x4c0583,_0x423672);}:_0x13a8fe,'string':function(_0x1a796e){return function(_0x4263c8,_0x53ff2d){var _0x22b1bb=_0x53ff2d[_0x4a9c('0x3e1')],_0x55bc6a=0x5+0x3*_0x22b1bb;_0x4263c8[_0x4a9c('0x76a')]=_0x4263c8[_0x4a9c('0x4a9')](_0x55bc6a);var _0x3d4ce0=_0x4263c8[_0x4a9c('0x5b')],_0x1a74af=_0x1a796e(_0x22b1bb),_0x1271c2=_0x4263c8[_0x4a9c('0x76a')]+_0x1a74af;_0x22b1bb=_0xf53137[_0x4a9c('0x60f')][_0x4a9c('0xc3')](_0x3d4ce0,_0x53ff2d,_0x1271c2);var _0x15929a=_0x1a796e(_0x22b1bb);if(_0x1a74af!==_0x15929a){var _0x360b57=_0x1271c2+_0x15929a-_0x1a74af,_0x59c8df=_0x1271c2+_0x22b1bb;_0xf53137['copy'][_0x4a9c('0xc3')](_0x3d4ce0,_0x3d4ce0,_0x360b57,_0x1271c2,_0x59c8df);}_0x5c645[0x1===_0x15929a?0xa0+_0x22b1bb:_0x15929a<=0x3?0xd7+_0x15929a:0xdb](_0x4263c8,_0x22b1bb),_0x4263c8[_0x4a9c('0x76a')]+=_0x22b1bb;};}(_0x2e9f9c?function(_0x157532){return _0x157532<0x20?0x1:_0x157532<=0xffff?0x3:0x5;}:function(_0x55a6ea){return _0x55a6ea<0x20?0x1:_0x55a6ea<=0xff?0x2:_0x55a6ea<=0xffff?0x3:0x5;}),'symbol':_0x4a8141,'undefined':_0x4a8141};function _0x13a8fe(_0x1e373f,_0x8f7efb){if(null===_0x8f7efb)return _0x4a8141(_0x1e373f,_0x8f7efb);if(_0x16ffe7(_0x8f7efb))return _0x2d765d(_0x1e373f,_0x8f7efb);if(_0x5d01b6(_0x8f7efb))return function(_0x2f6094,_0x4b1922){var _0x5a16e3=_0x4b1922[_0x4a9c('0x3e1')];_0x5c645[_0x5a16e3<0x10?0x90+_0x5a16e3:_0x5a16e3<=0xffff?0xdc:0xdd](_0x2f6094,_0x5a16e3);for(var _0x32bd6d=_0x2f6094[_0x4a9c('0x3b6')][_0x4a9c('0x45e')],_0x159b12=0x0;_0x159b12<_0x5a16e3;_0x159b12++)_0x32bd6d(_0x2f6094,_0x4b1922[_0x159b12]);}(_0x1e373f,_0x8f7efb);if(_0x2fcb51['isUint64BE'](_0x8f7efb))return function(_0x305aee,_0x37d4dd){_0x5c645[0xcf](_0x305aee,_0x37d4dd[_0x4a9c('0x114')]());}(_0x1e373f,_0x8f7efb);if(_0xf501ce[_0x4a9c('0x44e')](_0x8f7efb))return function(_0x5abbd8,_0x2d118b){_0x5c645[0xd3](_0x5abbd8,_0x2d118b[_0x4a9c('0x114')]());}(_0x1e373f,_0x8f7efb);var _0x5788e4=_0x1e373f['codec'][_0x4a9c('0xf6')](_0x8f7efb);if(_0x5788e4&&(_0x8f7efb=_0x5788e4(_0x8f7efb)),_0x8f7efb instanceof _0x2c3149)return function(_0x41250a,_0x48ee37){var _0x1d5646=_0x48ee37[_0x4a9c('0x5b')],_0x1d1292=_0x1d5646[_0x4a9c('0x3e1')],_0x4a9cee=_0x46a2c1[_0x1d1292]||(_0x1d1292<0xff?0xc7:_0x1d1292<=0xffff?0xc8:0xc9);_0x5c645[_0x4a9cee](_0x41250a,_0x1d1292),_0x5ac0e5[_0x48ee37[_0x4a9c('0x5d4')]](_0x41250a),_0x41250a[_0x4a9c('0x1c2')](_0x1d5646);}(_0x1e373f,_0x8f7efb);_0x26f92f(_0x1e373f,_0x8f7efb);}function _0x4a8141(_0x4febe8,_0x4ee1fe){_0x5c645[0xc0](_0x4febe8,_0x4ee1fe);}function _0x14743b(_0x199de9,_0x44da61){var _0x4e8111=_0x44da61[_0x4a9c('0x3e1')];_0x5c645[_0x4e8111<0xff?0xc4:_0x4e8111<=0xffff?0xc5:0xc6](_0x199de9,_0x4e8111),_0x199de9['send'](_0x44da61);}function _0x418a33(_0x500e9e,_0x396e99){var _0x504ff6=Object['keys'](_0x396e99),_0x4c5fc6=_0x504ff6[_0x4a9c('0x3e1')];_0x5c645[_0x4c5fc6<0x10?0x80+_0x4c5fc6:_0x4c5fc6<=0xffff?0xde:0xdf](_0x500e9e,_0x4c5fc6);var _0x42b658=_0x500e9e[_0x4a9c('0x3b6')][_0x4a9c('0x45e')];_0x504ff6[_0x4a9c('0x781')](function(_0x389cea){_0x42b658(_0x500e9e,_0x389cea),_0x42b658(_0x500e9e,_0x396e99[_0x389cea]);});}};},function(_0x2462df,_0x26a9b,_0xbb848d){var _0x4b7c0c=_0xbb848d(0x4),_0x434ce6=_0xbb848d(0x7),_0x3bbfa1=_0x434ce6[_0x4a9c('0x6bc')],_0x36cc30=_0x434ce6[_0x4a9c('0x3fd')],_0x28b609=_0xbb848d(0xd)[_0x4a9c('0x800')],_0x4f9cb0=_0xbb848d(0x0),_0x4cd920=_0x4f9cb0[_0x4a9c('0x44b')],_0x10fc08=_0x4f9cb0[_0x4a9c('0x587')]&&_0x4a9c('0x270')in _0x4cd920&&!_0x4cd920[_0x4a9c('0x270')],_0x47851d=_0x4f9cb0[_0x4a9c('0x587')]&&_0x4cd920['prototype']||{};function _0x22b6aa(){var _0x514a44=_0x28b609[_0x4a9c('0x14')]();return _0x514a44[0xc4]=_0x1944e6(0xc4),_0x514a44[0xc5]=_0x379ea6(0xc5),_0x514a44[0xc6]=_0x25cbe8(0xc6),_0x514a44[0xc7]=_0x1944e6(0xc7),_0x514a44[0xc8]=_0x379ea6(0xc8),_0x514a44[0xc9]=_0x25cbe8(0xc9),_0x514a44[0xca]=_0x495c3b(0xca,0x4,_0x47851d['writeFloatBE']||_0x1f2f0a,!0x0),_0x514a44[0xcb]=_0x495c3b(0xcb,0x8,_0x47851d[_0x4a9c('0xeb')]||_0x5f09d9,!0x0),_0x514a44[0xcc]=_0x1944e6(0xcc),_0x514a44[0xcd]=_0x379ea6(0xcd),_0x514a44[0xce]=_0x25cbe8(0xce),_0x514a44[0xcf]=_0x495c3b(0xcf,0x8,_0x45fcc5),_0x514a44[0xd0]=_0x1944e6(0xd0),_0x514a44[0xd1]=_0x379ea6(0xd1),_0x514a44[0xd2]=_0x25cbe8(0xd2),_0x514a44[0xd3]=_0x495c3b(0xd3,0x8,_0x267a70),_0x514a44[0xd9]=_0x1944e6(0xd9),_0x514a44[0xda]=_0x379ea6(0xda),_0x514a44[0xdb]=_0x25cbe8(0xdb),_0x514a44[0xdc]=_0x379ea6(0xdc),_0x514a44[0xdd]=_0x25cbe8(0xdd),_0x514a44[0xde]=_0x379ea6(0xde),_0x514a44[0xdf]=_0x25cbe8(0xdf),_0x514a44;}function _0x1944e6(_0x93ee99){return function(_0x549182,_0x1c0c3d){var _0x4620df=_0x549182['reserve'](0x2),_0x227e86=_0x549182[_0x4a9c('0x5b')];_0x227e86[_0x4620df++]=_0x93ee99,_0x227e86[_0x4620df]=_0x1c0c3d;};}function _0x379ea6(_0x3d2c8a){return function(_0x47e5b7,_0x4d9ad){var _0x1e9cb6=_0x47e5b7[_0x4a9c('0x4a9')](0x3),_0x548e00=_0x47e5b7[_0x4a9c('0x5b')];_0x548e00[_0x1e9cb6++]=_0x3d2c8a,_0x548e00[_0x1e9cb6++]=_0x4d9ad>>>0x8,_0x548e00[_0x1e9cb6]=_0x4d9ad;};}function _0x25cbe8(_0x5aa9c9){return function(_0x471000,_0x4a3f07){var _0x17d23b=_0x471000[_0x4a9c('0x4a9')](0x5),_0x5d3e29=_0x471000[_0x4a9c('0x5b')];_0x5d3e29[_0x17d23b++]=_0x5aa9c9,_0x5d3e29[_0x17d23b++]=_0x4a3f07>>>0x18,_0x5d3e29[_0x17d23b++]=_0x4a3f07>>>0x10,_0x5d3e29[_0x17d23b++]=_0x4a3f07>>>0x8,_0x5d3e29[_0x17d23b]=_0x4a3f07;};}function _0x495c3b(_0x4967f9,_0x446cce,_0x583f85,_0x3ca78f){return function(_0x1d449c,_0x5b1ff3){var _0x2bc2fe=_0x1d449c[_0x4a9c('0x4a9')](_0x446cce+0x1);_0x1d449c[_0x4a9c('0x5b')][_0x2bc2fe++]=_0x4967f9,_0x583f85[_0x4a9c('0xc3')](_0x1d449c[_0x4a9c('0x5b')],_0x5b1ff3,_0x2bc2fe,_0x3ca78f);};}function _0x45fcc5(_0x4f0ded,_0x479073){new _0x3bbfa1(this,_0x479073,_0x4f0ded);}function _0x267a70(_0x591a78,_0x57c3f7){new _0x36cc30(this,_0x57c3f7,_0x591a78);}function _0x1f2f0a(_0x8e9da1,_0x3ee7c0){_0x4b7c0c[_0x4a9c('0x60f')](this,_0x8e9da1,_0x3ee7c0,!0x1,0x17,0x4);}function _0x5f09d9(_0x1185a4,_0x283742){_0x4b7c0c[_0x4a9c('0x60f')](this,_0x1185a4,_0x283742,!0x1,0x34,0x8);}_0x26a9b[_0x4a9c('0x5e4')]=function(_0x2f62b4){return _0x2f62b4&&_0x2f62b4['uint8array']?function(){var _0xd8e405=_0x22b6aa();return _0xd8e405[0xca]=_0x495c3b(0xca,0x4,_0x1f2f0a),_0xd8e405[0xcb]=_0x495c3b(0xcb,0x8,_0x5f09d9),_0xd8e405;}():_0x10fc08||_0x4f9cb0[_0x4a9c('0x587')]&&_0x2f62b4&&_0x2f62b4[_0x4a9c('0x752')]?function(){var _0x137aeb=_0x28b609[_0x4a9c('0x14')]();return _0x137aeb[0xc4]=_0x495c3b(0xc4,0x1,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x2f')]),_0x137aeb[0xc5]=_0x495c3b(0xc5,0x2,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x1db')]),_0x137aeb[0xc6]=_0x495c3b(0xc6,0x4,_0x4cd920['prototype'][_0x4a9c('0x63f')]),_0x137aeb[0xc7]=_0x495c3b(0xc7,0x1,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x2f')]),_0x137aeb[0xc8]=_0x495c3b(0xc8,0x2,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x1db')]),_0x137aeb[0xc9]=_0x495c3b(0xc9,0x4,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x63f')]),_0x137aeb[0xca]=_0x495c3b(0xca,0x4,_0x4cd920['prototype'][_0x4a9c('0x61b')]),_0x137aeb[0xcb]=_0x495c3b(0xcb,0x8,_0x4cd920['prototype'][_0x4a9c('0xeb')]),_0x137aeb[0xcc]=_0x495c3b(0xcc,0x1,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x2f')]),_0x137aeb[0xcd]=_0x495c3b(0xcd,0x2,_0x4cd920['prototype'][_0x4a9c('0x1db')]),_0x137aeb[0xce]=_0x495c3b(0xce,0x4,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x63f')]),_0x137aeb[0xcf]=_0x495c3b(0xcf,0x8,_0x45fcc5),_0x137aeb[0xd0]=_0x495c3b(0xd0,0x1,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x5af')]),_0x137aeb[0xd1]=_0x495c3b(0xd1,0x2,_0x4cd920[_0x4a9c('0x216')]['writeInt16BE']),_0x137aeb[0xd2]=_0x495c3b(0xd2,0x4,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x181')]),_0x137aeb[0xd3]=_0x495c3b(0xd3,0x8,_0x267a70),_0x137aeb[0xd9]=_0x495c3b(0xd9,0x1,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x2f')]),_0x137aeb[0xda]=_0x495c3b(0xda,0x2,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x1db')]),_0x137aeb[0xdb]=_0x495c3b(0xdb,0x4,_0x4cd920[_0x4a9c('0x216')][_0x4a9c('0x63f')]),_0x137aeb[0xdc]=_0x495c3b(0xdc,0x2,_0x4cd920[_0x4a9c('0x216')]['writeUInt16BE']),_0x137aeb[0xdd]=_0x495c3b(0xdd,0x4,_0x4cd920['prototype'][_0x4a9c('0x63f')]),_0x137aeb[0xde]=_0x495c3b(0xde,0x2,_0x4cd920[_0x4a9c('0x216')]['writeUInt16BE']),_0x137aeb[0xdf]=_0x495c3b(0xdf,0x4,_0x4cd920[_0x4a9c('0x216')]['writeUInt32BE']),_0x137aeb;}():_0x22b6aa();};},function(_0x504a5b,_0x55b3c8,_0xbb27ed){_0x55b3c8['setExtUnpackers']=function(_0x345066){_0x345066[_0x4a9c('0x63b')](0xe,[_0x15935a,_0x4a41fa(Error)]),_0x345066[_0x4a9c('0x63b')](0x1,[_0x15935a,_0x4a41fa(EvalError)]),_0x345066[_0x4a9c('0x63b')](0x2,[_0x15935a,_0x4a41fa(RangeError)]),_0x345066['addExtUnpacker'](0x3,[_0x15935a,_0x4a41fa(ReferenceError)]),_0x345066[_0x4a9c('0x63b')](0x4,[_0x15935a,_0x4a41fa(SyntaxError)]),_0x345066[_0x4a9c('0x63b')](0x5,[_0x15935a,_0x4a41fa(TypeError)]),_0x345066['addExtUnpacker'](0x6,[_0x15935a,_0x4a41fa(URIError)]),_0x345066['addExtUnpacker'](0xa,[_0x15935a,_0x4fc012]),_0x345066[_0x4a9c('0x63b')](0xb,[_0x15935a,_0x5107eb(Boolean)]),_0x345066[_0x4a9c('0x63b')](0xc,[_0x15935a,_0x5107eb(String)]),_0x345066[_0x4a9c('0x63b')](0xd,[_0x15935a,_0x5107eb(Date)]),_0x345066[_0x4a9c('0x63b')](0xf,[_0x15935a,_0x5107eb(Number)]),_0x4a9c('0x45d')!=typeof Uint8Array&&(_0x345066[_0x4a9c('0x63b')](0x11,_0x5107eb(Int8Array)),_0x345066[_0x4a9c('0x63b')](0x12,_0x5107eb(Uint8Array)),_0x345066[_0x4a9c('0x63b')](0x13,[_0x43a46c,_0x5107eb(Int16Array)]),_0x345066['addExtUnpacker'](0x14,[_0x43a46c,_0x5107eb(Uint16Array)]),_0x345066['addExtUnpacker'](0x15,[_0x43a46c,_0x5107eb(Int32Array)]),_0x345066[_0x4a9c('0x63b')](0x16,[_0x43a46c,_0x5107eb(Uint32Array)]),_0x345066[_0x4a9c('0x63b')](0x17,[_0x43a46c,_0x5107eb(Float32Array)]),_0x4a9c('0x45d')!=typeof Float64Array&&_0x345066[_0x4a9c('0x63b')](0x18,[_0x43a46c,_0x5107eb(Float64Array)]),_0x4a9c('0x45d')!=typeof Uint8ClampedArray&&_0x345066[_0x4a9c('0x63b')](0x19,_0x5107eb(Uint8ClampedArray)),_0x345066['addExtUnpacker'](0x1a,_0x43a46c),_0x345066[_0x4a9c('0x63b')](0x1d,[_0x43a46c,_0x5107eb(DataView)])),_0x1a5b5c[_0x4a9c('0x587')]&&_0x345066[_0x4a9c('0x63b')](0x1b,_0x5107eb(_0x86cb08));};var _0x1c5728,_0x1a5b5c=_0xbb27ed(0x0),_0x86cb08=_0x1a5b5c['global'],_0x50f439={'name':0x1,'message':0x1,'stack':0x1,'columnNumber':0x1,'fileName':0x1,'lineNumber':0x1};function _0x15935a(_0x3f778e){return _0x1c5728||(_0x1c5728=_0xbb27ed(0xf)['decode']),_0x1c5728(_0x3f778e);}function _0x4fc012(_0x798e95){return RegExp[_0x4a9c('0x635')](null,_0x798e95);}function _0x4a41fa(_0x8b8287){return function(_0x505d74){var _0x55d73c=new _0x8b8287();for(var _0x2d4923 in _0x50f439)_0x55d73c[_0x2d4923]=_0x505d74[_0x2d4923];return _0x55d73c;};}function _0x5107eb(_0x2fc5e3){return function(_0x2812dd){return new _0x2fc5e3(_0x2812dd);};}function _0x43a46c(_0x40a0ae){return new Uint8Array(_0x40a0ae)[_0x4a9c('0x5b')];}},function(_0x234d6a,_0x41d7b5,_0x2afc8d){var _0xe3dd76=_0x2afc8d(0x11);function _0x2cce09(_0xb0b6de){var _0x364124,_0x2958dc=new Array(0x100);for(_0x364124=0x0;_0x364124<=0x7f;_0x364124++)_0x2958dc[_0x364124]=_0x3bae7f(_0x364124);for(_0x364124=0x80;_0x364124<=0x8f;_0x364124++)_0x2958dc[_0x364124]=_0x5b92e8(_0x364124-0x80,_0xb0b6de[_0x4a9c('0x46f')]);for(_0x364124=0x90;_0x364124<=0x9f;_0x364124++)_0x2958dc[_0x364124]=_0x5b92e8(_0x364124-0x90,_0xb0b6de[_0x4a9c('0x7a0')]);for(_0x364124=0xa0;_0x364124<=0xbf;_0x364124++)_0x2958dc[_0x364124]=_0x5b92e8(_0x364124-0xa0,_0xb0b6de['str']);for(_0x2958dc[0xc0]=_0x3bae7f(null),_0x2958dc[0xc1]=null,_0x2958dc[0xc2]=_0x3bae7f(!0x1),_0x2958dc[0xc3]=_0x3bae7f(!0x0),_0x2958dc[0xc4]=_0x412933(_0xb0b6de[_0x4a9c('0x800')],_0xb0b6de['bin']),_0x2958dc[0xc5]=_0x412933(_0xb0b6de[_0x4a9c('0x75d')],_0xb0b6de[_0x4a9c('0x606')]),_0x2958dc[0xc6]=_0x412933(_0xb0b6de[_0x4a9c('0x6d2')],_0xb0b6de[_0x4a9c('0x606')]),_0x2958dc[0xc7]=_0x412933(_0xb0b6de[_0x4a9c('0x800')],_0xb0b6de[_0x4a9c('0x60c')]),_0x2958dc[0xc8]=_0x412933(_0xb0b6de[_0x4a9c('0x75d')],_0xb0b6de['ext']),_0x2958dc[0xc9]=_0x412933(_0xb0b6de[_0x4a9c('0x6d2')],_0xb0b6de[_0x4a9c('0x60c')]),_0x2958dc[0xca]=_0xb0b6de[_0x4a9c('0x2f3')],_0x2958dc[0xcb]=_0xb0b6de['float64'],_0x2958dc[0xcc]=_0xb0b6de[_0x4a9c('0x800')],_0x2958dc[0xcd]=_0xb0b6de[_0x4a9c('0x75d')],_0x2958dc[0xce]=_0xb0b6de[_0x4a9c('0x6d2')],_0x2958dc[0xcf]=_0xb0b6de[_0x4a9c('0x434')],_0x2958dc[0xd0]=_0xb0b6de['int8'],_0x2958dc[0xd1]=_0xb0b6de['int16'],_0x2958dc[0xd2]=_0xb0b6de['int32'],_0x2958dc[0xd3]=_0xb0b6de[_0x4a9c('0x60b')],_0x2958dc[0xd4]=_0x5b92e8(0x1,_0xb0b6de['ext']),_0x2958dc[0xd5]=_0x5b92e8(0x2,_0xb0b6de['ext']),_0x2958dc[0xd6]=_0x5b92e8(0x4,_0xb0b6de['ext']),_0x2958dc[0xd7]=_0x5b92e8(0x8,_0xb0b6de[_0x4a9c('0x60c')]),_0x2958dc[0xd8]=_0x5b92e8(0x10,_0xb0b6de[_0x4a9c('0x60c')]),_0x2958dc[0xd9]=_0x412933(_0xb0b6de[_0x4a9c('0x800')],_0xb0b6de[_0x4a9c('0x765')]),_0x2958dc[0xda]=_0x412933(_0xb0b6de[_0x4a9c('0x75d')],_0xb0b6de[_0x4a9c('0x765')]),_0x2958dc[0xdb]=_0x412933(_0xb0b6de[_0x4a9c('0x6d2')],_0xb0b6de[_0x4a9c('0x765')]),_0x2958dc[0xdc]=_0x412933(_0xb0b6de[_0x4a9c('0x75d')],_0xb0b6de['array']),_0x2958dc[0xdd]=_0x412933(_0xb0b6de[_0x4a9c('0x6d2')],_0xb0b6de[_0x4a9c('0x7a0')]),_0x2958dc[0xde]=_0x412933(_0xb0b6de[_0x4a9c('0x75d')],_0xb0b6de[_0x4a9c('0x46f')]),_0x2958dc[0xdf]=_0x412933(_0xb0b6de['uint32'],_0xb0b6de[_0x4a9c('0x46f')]),_0x364124=0xe0;_0x364124<=0xff;_0x364124++)_0x2958dc[_0x364124]=_0x3bae7f(_0x364124-0x100);return _0x2958dc;}function _0x3bae7f(_0x57cafa){return function(){return _0x57cafa;};}function _0x412933(_0x3f0345,_0x4b0d8a){return function(_0x4a522d){var _0xcec334=_0x3f0345(_0x4a522d);return _0x4b0d8a(_0x4a522d,_0xcec334);};}function _0x5b92e8(_0x59da8e,_0x2c0ecb){return function(_0x1834d8){return _0x2c0ecb(_0x1834d8,_0x59da8e);};}_0x41d7b5[_0x4a9c('0x2ca')]=function(_0x4b3a08){var _0x4af996=_0xe3dd76[_0x4a9c('0x621')](_0x4b3a08);return _0x4b3a08&&_0x4b3a08['useraw']?function(_0x534af0){var _0x4aca38,_0x4521be=_0x2cce09(_0x534af0)['slice']();for(_0x4521be[0xd9]=_0x4521be[0xc4],_0x4521be[0xda]=_0x4521be[0xc5],_0x4521be[0xdb]=_0x4521be[0xc6],_0x4aca38=0xa0;_0x4aca38<=0xbf;_0x4aca38++)_0x4521be[_0x4aca38]=_0x5b92e8(_0x4aca38-0xa0,_0x534af0[_0x4a9c('0x606')]);return _0x4521be;}(_0x4af996):_0x2cce09(_0x4af996);};},function(_0x48786e,_0x1e5c7d,_0x19bff7){_0x1e5c7d[_0x4a9c('0x461')]=_0x67526b;var _0x2e18bd=_0x19bff7(0x12),_0x5c57b3=_0x19bff7(0xa)[_0x4a9c('0x74')];function _0x67526b(_0x113be5){if(!(this instanceof _0x67526b))return new _0x67526b(_0x113be5);_0x5c57b3['call'](this,_0x113be5);}_0x67526b[_0x4a9c('0x216')]=new _0x5c57b3(),_0x2e18bd[_0x4a9c('0x3e7')](_0x67526b[_0x4a9c('0x216')]),_0x67526b[_0x4a9c('0x216')][_0x4a9c('0x45e')]=function(_0x18f26b){this['write'](_0x18f26b),this['emit']('data',this[_0x4a9c('0x373')]());},_0x67526b[_0x4a9c('0x216')][_0x4a9c('0x649')]=function(_0xae600f){arguments[_0x4a9c('0x3e1')]&&this[_0x4a9c('0x45e')](_0xae600f),this[_0x4a9c('0x719')](),this[_0x4a9c('0x6d5')](_0x4a9c('0x649'));};},function(_0x1d28f3,_0x48f763,_0x3e350d){_0x48f763[_0x4a9c('0x71d')]=_0x3261fa;var _0x525617=_0x3e350d(0x12),_0x8f2fb=_0x3e350d(0x10)[_0x4a9c('0x1ee')];function _0x3261fa(_0x5d803b){if(!(this instanceof _0x3261fa))return new _0x3261fa(_0x5d803b);_0x8f2fb['call'](this,_0x5d803b);}_0x3261fa[_0x4a9c('0x216')]=new _0x8f2fb(),_0x525617[_0x4a9c('0x3e7')](_0x3261fa[_0x4a9c('0x216')]),_0x3261fa[_0x4a9c('0x216')]['decode']=function(_0xa8345e){arguments['length']&&this[_0x4a9c('0x60f')](_0xa8345e),this[_0x4a9c('0x719')]();},_0x3261fa[_0x4a9c('0x216')][_0x4a9c('0x2d2')]=function(_0x295413){this[_0x4a9c('0x6d5')](_0x4a9c('0x799'),_0x295413);},_0x3261fa[_0x4a9c('0x216')][_0x4a9c('0x649')]=function(_0x5ccd21){this[_0x4a9c('0x5bd')](_0x5ccd21),this['emit'](_0x4a9c('0x649'));};},function(_0x18579e,_0x493abc,_0x2a897e){_0x2a897e(0x8),_0x2a897e(0x2),_0x493abc['createCodec']=_0x2a897e(0x1)[_0x4a9c('0x21f')];},function(_0x2686d7,_0x2d076c,_0x5894de){_0x5894de(0x8),_0x5894de(0x2),_0x2d076c[_0x4a9c('0x3b6')]={'preset':_0x5894de(0x1)['preset']};},function(_0x3f1b3e,_0x6d114){var _0x2aae2b,_0x274d10,_0x24b136=_0x3f1b3e[_0x4a9c('0x14f')]={};function _0x171096(){throw new Error(_0x4a9c('0x433'));}function _0x598b80(){throw new Error(_0x4a9c('0x4e6'));}function _0x4817d2(_0x3041fa){if(_0x2aae2b===setTimeout)return setTimeout(_0x3041fa,0x0);if((_0x2aae2b===_0x171096||!_0x2aae2b)&&setTimeout)return _0x2aae2b=setTimeout,setTimeout(_0x3041fa,0x0);try{return _0x2aae2b(_0x3041fa,0x0);}catch(_0x562ab5){try{return _0x2aae2b['call'](null,_0x3041fa,0x0);}catch(_0x84a411){return _0x2aae2b['call'](this,_0x3041fa,0x0);}}}!function(){try{_0x2aae2b=_0x4a9c('0x2f2')==typeof setTimeout?setTimeout:_0x171096;}catch(_0x3eaad1){_0x2aae2b=_0x171096;}try{_0x274d10='function'==typeof clearTimeout?clearTimeout:_0x598b80;}catch(_0x267bfa){_0x274d10=_0x598b80;}}();var _0x26a4e1,_0x22b16e=[],_0xccaa9f=!0x1,_0x259417=-0x1;function _0x272cf7(){_0xccaa9f&&_0x26a4e1&&(_0xccaa9f=!0x1,_0x26a4e1[_0x4a9c('0x3e1')]?_0x22b16e=_0x26a4e1[_0x4a9c('0x4fc')](_0x22b16e):_0x259417=-0x1,_0x22b16e[_0x4a9c('0x3e1')]&&_0x521a0d());}function _0x521a0d(){if(!_0xccaa9f){var _0x4126f7=_0x4817d2(_0x272cf7);_0xccaa9f=!0x0;for(var _0x1338ff=_0x22b16e[_0x4a9c('0x3e1')];_0x1338ff;){for(_0x26a4e1=_0x22b16e,_0x22b16e=[];++_0x259417<_0x1338ff;)_0x26a4e1&&_0x26a4e1[_0x259417][_0x4a9c('0x581')]();_0x259417=-0x1,_0x1338ff=_0x22b16e[_0x4a9c('0x3e1')];}_0x26a4e1=null,_0xccaa9f=!0x1,function(_0x304797){if(_0x274d10===clearTimeout)return clearTimeout(_0x304797);if((_0x274d10===_0x598b80||!_0x274d10)&&clearTimeout)return _0x274d10=clearTimeout,clearTimeout(_0x304797);try{_0x274d10(_0x304797);}catch(_0x32f62c){try{return _0x274d10[_0x4a9c('0xc3')](null,_0x304797);}catch(_0x4b991d){return _0x274d10['call'](this,_0x304797);}}}(_0x4126f7);}}function _0x5449d3(_0x4eafbb,_0x16a4c2){this[_0x4a9c('0x33f')]=_0x4eafbb,this[_0x4a9c('0x7a0')]=_0x16a4c2;}function _0x27e982(){}_0x24b136[_0x4a9c('0x30a')]=function(_0x4a8a9e){var _0x6df3ff=new Array(arguments['length']-0x1);if(arguments[_0x4a9c('0x3e1')]>0x1)for(var _0x28b0fe=0x1;_0x28b0fe<arguments[_0x4a9c('0x3e1')];_0x28b0fe++)_0x6df3ff[_0x28b0fe-0x1]=arguments[_0x28b0fe];_0x22b16e[_0x4a9c('0x2d2')](new _0x5449d3(_0x4a8a9e,_0x6df3ff)),0x1!==_0x22b16e[_0x4a9c('0x3e1')]||_0xccaa9f||_0x4817d2(_0x521a0d);},_0x5449d3['prototype'][_0x4a9c('0x581')]=function(){this[_0x4a9c('0x33f')][_0x4a9c('0x635')](null,this[_0x4a9c('0x7a0')]);},_0x24b136[_0x4a9c('0x6ac')]=_0x4a9c('0x87'),_0x24b136[_0x4a9c('0x87')]=!0x0,_0x24b136['env']={},_0x24b136[_0x4a9c('0x1c7')]=[],_0x24b136[_0x4a9c('0x77')]='',_0x24b136[_0x4a9c('0x16f')]={},_0x24b136['on']=_0x27e982,_0x24b136[_0x4a9c('0x173')]=_0x27e982,_0x24b136[_0x4a9c('0x7b')]=_0x27e982,_0x24b136['off']=_0x27e982,_0x24b136[_0x4a9c('0x36')]=_0x27e982,_0x24b136['removeAllListeners']=_0x27e982,_0x24b136[_0x4a9c('0x6d5')]=_0x27e982,_0x24b136[_0x4a9c('0x769')]=_0x27e982,_0x24b136[_0x4a9c('0x1ae')]=_0x27e982,_0x24b136[_0x4a9c('0x5d0')]=function(_0x503e56){return[];},_0x24b136[_0x4a9c('0x7d4')]=function(_0x1c5a6c){throw new Error(_0x4a9c('0x46c'));},_0x24b136[_0x4a9c('0x495')]=function(){return'/';},_0x24b136[_0x4a9c('0x153')]=function(_0x1ca883){throw new Error(_0x4a9c('0x6f3'));},_0x24b136['umask']=function(){return 0x0;};},function(_0x192be9,_0x1188d5){var _0x27f1a8=Math[_0x4a9c('0x20')],_0x568a47=(Math[_0x4a9c('0x431')],Math[_0x4a9c('0x1bb')],Math[_0x4a9c('0x555')],Math[_0x4a9c('0x5f0')]),_0xe3d18f=(_0x27f1a8=Math['abs'],Math[_0x4a9c('0x723')]),_0x117431=Math['PI'];_0x192be9['exports'][_0x4a9c('0x78c')]=function(_0x15e9f3,_0x3daf91){return Math[_0x4a9c('0xa9')](Math['random']()*(_0x3daf91-_0x15e9f3+0x1))+_0x15e9f3;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x60')]=function(_0x4b074b,_0x2407cb){return Math[_0x4a9c('0x595')]()*(_0x2407cb-_0x4b074b+0x1)+_0x4b074b;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x745')]=function(_0x5a6990,_0x3ccc68,_0x566e31){return _0x5a6990+(_0x3ccc68-_0x5a6990)*_0x566e31;},_0x192be9['exports']['decel']=function(_0x376836,_0x176e07){return _0x376836>0x0?_0x376836=Math[_0x4a9c('0x790')](0x0,_0x376836-_0x176e07):_0x376836<0x0&&(_0x376836=Math[_0x4a9c('0xe8')](0x0,_0x376836+_0x176e07)),_0x376836;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x63')]=function(_0x1c5783,_0x318cfc,_0x159440,_0x3a8dbf){return _0x568a47((_0x159440-=_0x1c5783)*_0x159440+(_0x3a8dbf-=_0x318cfc)*_0x3a8dbf);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x721')]=function(_0x5ad7fd,_0x16751a,_0x1c70fa,_0x24157f){return _0xe3d18f(_0x16751a-_0x24157f,_0x5ad7fd-_0x1c70fa);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x426')]=function(_0xe90202,_0x486835){var _0x3b6c84=_0x27f1a8(_0x486835-_0xe90202)%(0x2*_0x117431);return _0x3b6c84>_0x117431?0x2*_0x117431-_0x3b6c84:_0x3b6c84;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x44c')]=function(_0x22e1ba){return _0x4a9c('0x27')==typeof _0x22e1ba&&!isNaN(_0x22e1ba)&&isFinite(_0x22e1ba);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x776')]=function(_0xa64450){return _0xa64450&&_0x4a9c('0x290')==typeof _0xa64450;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x9f')]=function(_0x4bbd3a){return _0x4bbd3a>0x3e7?(_0x4bbd3a/0x3e8)['toFixed'](0x1)+'k':_0x4bbd3a;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0xd5')]=function(_0x239dbd){return _0x239dbd[_0x4a9c('0x617')](0x0)[_0x4a9c('0x1c5')]()+_0x239dbd[_0x4a9c('0x14')](0x1);},_0x192be9['exports'][_0x4a9c('0x5f6')]=function(_0x249433,_0x3ba21a){return parseFloat(_0x249433['toFixed'](_0x3ba21a));},_0x192be9['exports']['sortByPoints']=function(_0x26200e,_0x265fea){return parseFloat(_0x265fea[_0x4a9c('0xfc')])-parseFloat(_0x26200e[_0x4a9c('0xfc')]);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x1e1')]=function(_0x54db42,_0x102e40,_0x2bf0c8,_0x48308f,_0x27081a,_0x2125e9,_0x3e598f,_0x4ccd17){var _0x4221e6=_0x27081a,_0x153a27=_0x3e598f;if(_0x27081a>_0x3e598f&&(_0x4221e6=_0x3e598f,_0x153a27=_0x27081a),_0x153a27>_0x2bf0c8&&(_0x153a27=_0x2bf0c8),_0x4221e6<_0x54db42&&(_0x4221e6=_0x54db42),_0x4221e6>_0x153a27)return!0x1;var _0x2f27b1=_0x2125e9,_0x401c45=_0x4ccd17,_0x3a02b4=_0x3e598f-_0x27081a;if(Math['abs'](_0x3a02b4)>1e-7){var _0x19878f=(_0x4ccd17-_0x2125e9)/_0x3a02b4,_0x4c134a=_0x2125e9-_0x19878f*_0x27081a;_0x2f27b1=_0x19878f*_0x4221e6+_0x4c134a,_0x401c45=_0x19878f*_0x153a27+_0x4c134a;}if(_0x2f27b1>_0x401c45){var _0x438042=_0x401c45;_0x401c45=_0x2f27b1,_0x2f27b1=_0x438042;}return _0x401c45>_0x48308f&&(_0x401c45=_0x48308f),_0x2f27b1<_0x102e40&&(_0x2f27b1=_0x102e40),!(_0x2f27b1>_0x401c45);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x5ff')]=function(_0x190245,_0x42857a,_0x1d368e){var _0x359bee=_0x190245[_0x4a9c('0x286')](),_0x34f145=_0x359bee[_0x4a9c('0x5e')]+window['scrollX'],_0x1f2d01=_0x359bee[_0x4a9c('0x7b8')]+window[_0x4a9c('0x7d9')],_0x5aac7c=_0x359bee[_0x4a9c('0x149')],_0x3293aa=_0x359bee[_0x4a9c('0x178')];return _0x42857a>_0x34f145&&_0x42857a<_0x34f145+_0x5aac7c&&_0x1d368e>_0x1f2d01&&_0x1d368e<_0x1f2d01+_0x3293aa;},_0x192be9['exports'][_0x4a9c('0x4e7')]=function(_0x2cb6ff){var _0x5119c3=_0x2cb6ff['changedTouches'][0x0];_0x2cb6ff[_0x4a9c('0x137')]=_0x5119c3[_0x4a9c('0x137')],_0x2cb6ff[_0x4a9c('0x22c')]=_0x5119c3[_0x4a9c('0x22c')],_0x2cb6ff['clientX']=_0x5119c3[_0x4a9c('0x45b')],_0x2cb6ff[_0x4a9c('0x119')]=_0x5119c3[_0x4a9c('0x119')],_0x2cb6ff[_0x4a9c('0x1c')]=_0x5119c3[_0x4a9c('0x1c')],_0x2cb6ff[_0x4a9c('0x2d4')]=_0x5119c3[_0x4a9c('0x2d4')];},_0x192be9[_0x4a9c('0x14f')]['hookTouchEvents']=function(_0x1b959f,_0x5abf34){var _0x544b3b=!_0x5abf34,_0x1ad9e8=!0x1;function _0x4cd85a(_0x6451d2){_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x4e7')](_0x6451d2),window['setUsingTouch'](!0x0),_0x544b3b&&(_0x6451d2['preventDefault'](),_0x6451d2['stopPropagation']()),_0x1ad9e8&&(_0x1b959f[_0x4a9c('0x2c7')]&&_0x1b959f[_0x4a9c('0x2c7')](_0x6451d2),_0x1b959f[_0x4a9c('0x6d8')]&&_0x1b959f[_0x4a9c('0x6d8')](_0x6451d2),_0x1ad9e8=!0x1);}_0x1b959f[_0x4a9c('0x6e9')]('touchstart',_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](function(_0x2df112){_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x4e7')](_0x2df112),window[_0x4a9c('0x48e')](!0x0),_0x544b3b&&(_0x2df112[_0x4a9c('0x66')](),_0x2df112[_0x4a9c('0x67e')]()),_0x1b959f['onmouseover']&&_0x1b959f[_0x4a9c('0x530')](_0x2df112),_0x1ad9e8=!0x0;}),!0x1),_0x1b959f[_0x4a9c('0x6e9')](_0x4a9c('0x23e'),_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](function(_0x4ef386){_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x4e7')](_0x4ef386),window[_0x4a9c('0x48e')](!0x0),_0x544b3b&&(_0x4ef386[_0x4a9c('0x66')](),_0x4ef386[_0x4a9c('0x67e')]()),_0x192be9['exports'][_0x4a9c('0x5ff')](_0x1b959f,_0x4ef386['pageX'],_0x4ef386[_0x4a9c('0x2d4')])?_0x1ad9e8||(_0x1b959f[_0x4a9c('0x530')]&&_0x1b959f[_0x4a9c('0x530')](_0x4ef386),_0x1ad9e8=!0x0):_0x1ad9e8&&(_0x1b959f[_0x4a9c('0x6d8')]&&_0x1b959f[_0x4a9c('0x6d8')](_0x4ef386),_0x1ad9e8=!0x1);}),!0x1),_0x1b959f[_0x4a9c('0x6e9')](_0x4a9c('0x553'),_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](_0x4cd85a),!0x1),_0x1b959f[_0x4a9c('0x6e9')](_0x4a9c('0x4ed'),_0x192be9[_0x4a9c('0x14f')]['checkTrusted'](_0x4cd85a),!0x1),_0x1b959f[_0x4a9c('0x6e9')](_0x4a9c('0x55a'),_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](_0x4cd85a),!0x1);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x5fc')]=function(_0x115ce5){for(;_0x115ce5[_0x4a9c('0x2b')]();)_0x115ce5[_0x4a9c('0x1cc')](_0x115ce5['lastChild']);},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0xb')]=function(_0x265142){var _0x36f9ec=document[_0x4a9c('0x20c')](_0x265142[_0x4a9c('0x4ff')]||_0x4a9c('0x753'));function _0x472af4(_0x5b0c99,_0x493ad0){_0x265142[_0x5b0c99]&&(_0x36f9ec[_0x493ad0]=_0x265142[_0x5b0c99]);}for(var _0x54824f in(_0x472af4(_0x4a9c('0x7ed'),_0x4a9c('0x325')),_0x472af4(_0x4a9c('0x4cc'),_0x4a9c('0x177')),_0x472af4('class',_0x4a9c('0x2a3')),_0x265142)){switch(_0x54824f){case _0x4a9c('0x4ff'):case _0x4a9c('0x7ed'):case _0x4a9c('0x4cc'):case _0x4a9c('0x234'):case _0x4a9c('0x6f0'):case _0x4a9c('0x688'):case _0x4a9c('0x73a'):case _0x4a9c('0x45c'):continue;}_0x36f9ec[_0x54824f]=_0x265142[_0x54824f];}if(_0x36f9ec['onclick']&&(_0x36f9ec[_0x4a9c('0x2c7')]=_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](_0x36f9ec[_0x4a9c('0x2c7')])),_0x36f9ec[_0x4a9c('0x530')]&&(_0x36f9ec[_0x4a9c('0x530')]=_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](_0x36f9ec[_0x4a9c('0x530')])),_0x36f9ec[_0x4a9c('0x6d8')]&&(_0x36f9ec[_0x4a9c('0x6d8')]=_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')](_0x36f9ec[_0x4a9c('0x6d8')])),_0x265142[_0x4a9c('0x6f0')]&&(_0x36f9ec[_0x4a9c('0x6f0')][_0x4a9c('0x104')]=_0x265142[_0x4a9c('0x6f0')]),_0x265142[_0x4a9c('0x688')]&&_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x6fc')](_0x36f9ec),_0x265142[_0x4a9c('0x73a')]&&_0x265142[_0x4a9c('0x73a')][_0x4a9c('0xb6')](_0x36f9ec),_0x265142['children'])for(var _0x44ad6a=0x0;_0x44ad6a<_0x265142[_0x4a9c('0x45c')][_0x4a9c('0x3e1')];_0x44ad6a++)_0x36f9ec[_0x4a9c('0xb6')](_0x265142['children'][_0x44ad6a]);return _0x36f9ec;},_0x192be9['exports'][_0x4a9c('0x651')]=function(_0x322f33){return!_0x322f33||_0x4a9c('0x3e9')!=typeof _0x322f33['isTrusted']||_0x322f33[_0x4a9c('0x6e2')];},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0x3f3')]=function(_0x31d2ea){return function(_0x5c0830){_0x5c0830&&_0x5c0830 instanceof Event&&_0x192be9['exports'][_0x4a9c('0x651')](_0x5c0830)&&_0x31d2ea(_0x5c0830);};},_0x192be9['exports']['randomString']=function(_0x29fe18){for(var _0x4f0b40='',_0x59e24f=_0x4a9c('0x6a0'),_0x1cb9e5=0x0;_0x1cb9e5<_0x29fe18;_0x1cb9e5++)_0x4f0b40+=_0x59e24f[_0x4a9c('0x617')](Math[_0x4a9c('0xa9')](Math['random']()*_0x59e24f['length']));return _0x4f0b40;},_0x192be9[_0x4a9c('0x14f')][_0x4a9c('0xaf')]=function(_0x49a579,_0x387b1c){for(var _0x61e6b5=0x0,_0x3b6993=0x0;_0x3b6993<_0x49a579[_0x4a9c('0x3e1')];_0x3b6993++)_0x49a579[_0x3b6993]===_0x387b1c&&_0x61e6b5++;return _0x61e6b5;};},function(_0x3d5217,_0x55277e){_0x3d5217[_0x4a9c('0x14f')]['AnimText']=function(){this[_0x4a9c('0xf9')]=function(_0x51a1e5,_0x3240f0,_0xf39c8a,_0x16dd78,_0x5dbe38,_0x510ae4,_0x42b0ed){this['x']=_0x51a1e5,this['y']=_0x3240f0,this[_0x4a9c('0x26f')]=_0x42b0ed,this[_0x4a9c('0x6f4')]=_0xf39c8a,this['startScale']=this[_0x4a9c('0x6f4')],this[_0x4a9c('0xf0')]=1.5*_0xf39c8a,this[_0x4a9c('0x4c9')]=0.7,this[_0x4a9c('0x244')]=_0x16dd78,this[_0x4a9c('0x6e1')]=_0x5dbe38,this[_0x4a9c('0x7ed')]=_0x510ae4;},this[_0x4a9c('0x5ab')]=function(_0x573914){this[_0x4a9c('0x6e1')]&&(this[_0x4a9c('0x6e1')]-=_0x573914,this['y']-=this[_0x4a9c('0x244')]*_0x573914,this[_0x4a9c('0x6f4')]+=this[_0x4a9c('0x4c9')]*_0x573914,this[_0x4a9c('0x6f4')]>=this[_0x4a9c('0xf0')]?(this[_0x4a9c('0x6f4')]=this[_0x4a9c('0xf0')],this['scaleSpeed']*=-0x1):this[_0x4a9c('0x6f4')]<=this['startScale']&&(this[_0x4a9c('0x6f4')]=this['startScale'],this[_0x4a9c('0x4c9')]=0x0),this[_0x4a9c('0x6e1')]<=0x0&&(this['life']=0x0));},this[_0x4a9c('0x407')]=function(_0x26d3ba,_0x569b9d,_0x561413){_0x26d3ba['fillStyle']=this[_0x4a9c('0x26f')],_0x26d3ba[_0x4a9c('0x1e9')]=this[_0x4a9c('0x6f4')]+_0x4a9c('0xe'),_0x26d3ba[_0x4a9c('0x1ec')](this[_0x4a9c('0x7ed')],this['x']-_0x569b9d,this['y']-_0x561413);};},_0x3d5217[_0x4a9c('0x14f')]['TextManager']=function(){this['texts']=[],this[_0x4a9c('0x5ab')]=function(_0x10a03d,_0x591c1e,_0x47bfaf,_0x4752c3){_0x591c1e[_0x4a9c('0x8d')]=_0x4a9c('0x35d'),_0x591c1e['textAlign']='center';for(var _0x4e144c=0x0;_0x4e144c<this[_0x4a9c('0x47f')]['length'];++_0x4e144c)this['texts'][_0x4e144c][_0x4a9c('0x6e1')]&&(this[_0x4a9c('0x47f')][_0x4e144c][_0x4a9c('0x5ab')](_0x10a03d),this['texts'][_0x4e144c][_0x4a9c('0x407')](_0x591c1e,_0x47bfaf,_0x4752c3));},this[_0x4a9c('0x3ad')]=function(_0x2946b9,_0x55c480,_0x3fbb8e,_0x3ec466,_0xdaedd1,_0x58eca3,_0x1b4b3a){for(var _0x1261e7,_0x36a622=0x0;_0x36a622<this['texts'][_0x4a9c('0x3e1')];++_0x36a622)if(!this[_0x4a9c('0x47f')][_0x36a622][_0x4a9c('0x6e1')]){_0x1261e7=this[_0x4a9c('0x47f')][_0x36a622];break;}_0x1261e7||(_0x1261e7=new _0x3d5217['exports'][(_0x4a9c('0x8b'))](),this[_0x4a9c('0x47f')]['push'](_0x1261e7)),_0x1261e7['init'](_0x2946b9,_0x55c480,_0x3fbb8e,_0x3ec466,_0xdaedd1,_0x58eca3,_0x1b4b3a);};};},function(_0x1c8943,_0x2dda54){_0x1c8943['exports']=function(_0x161e4a){this[_0x4a9c('0x56f')]=_0x161e4a,this[_0x4a9c('0xf9')]=function(_0x2d72ad,_0x59bdf8,_0x2c9922,_0x320aeb,_0x2fbe1d,_0x22c287,_0x546f0c){_0x22c287=_0x22c287||{},this[_0x4a9c('0x6eb')]={},this[_0x4a9c('0x57d')]=[],this['active']=!0x0,this[_0x4a9c('0x3d4')]=_0x22c287[_0x4a9c('0x3d4')],this['x']=_0x2d72ad,this['y']=_0x59bdf8,this[_0x4a9c('0x638')]=_0x2c9922,this[_0x4a9c('0x2c6')]=0x0,this[_0x4a9c('0x309')]=0x0,this[_0x4a9c('0x6f4')]=_0x320aeb,this[_0x4a9c('0x5d4')]=_0x2fbe1d,this['id']=_0x22c287['id'],this[_0x4a9c('0x7df')]=_0x546f0c,this[_0x4a9c('0x9e')]=_0x22c287[_0x4a9c('0x9e')],this[_0x4a9c('0x696')]=null!=this['id'],this['group']=_0x22c287[_0x4a9c('0x2ae')],this[_0x4a9c('0x528')]=_0x22c287[_0x4a9c('0x528')],this['layer']=0x2,null!=this[_0x4a9c('0x2ae')]?this['layer']=this['group'][_0x4a9c('0x127')]:0x0==this[_0x4a9c('0x5d4')]?this['layer']=0x3:0x2==this[_0x4a9c('0x5d4')]?this[_0x4a9c('0x127')]=0x0:0x4==this[_0x4a9c('0x5d4')]&&(this[_0x4a9c('0x127')]=-0x1),this[_0x4a9c('0x481')]=_0x22c287[_0x4a9c('0x481')]||0x1,this[_0x4a9c('0x122')]=_0x22c287[_0x4a9c('0x122')],this[_0x4a9c('0x517')]=_0x22c287[_0x4a9c('0x517')],this[_0x4a9c('0x3c6')]=_0x22c287[_0x4a9c('0x3c6')],this['hideFromEnemy']=_0x22c287[_0x4a9c('0x292')],this[_0x4a9c('0x1b')]=_0x22c287[_0x4a9c('0x1b')],this[_0x4a9c('0x577')]=_0x22c287[_0x4a9c('0x577')],this[_0x4a9c('0x90')]=_0x22c287['dmg'],this['pDmg']=_0x22c287['pDmg'],this[_0x4a9c('0x499')]=_0x22c287[_0x4a9c('0x499')],this[_0x4a9c('0x32')]=_0x22c287[_0x4a9c('0x32')]||0x0,this[_0x4a9c('0x54c')]=_0x22c287['turnSpeed'],this[_0x4a9c('0x400')]=_0x22c287[_0x4a9c('0x400')],this[_0x4a9c('0x7e3')]=_0x22c287['trap'],this[_0x4a9c('0x4ae')]=_0x22c287[_0x4a9c('0x4ae')],this[_0x4a9c('0x422')]=_0x22c287['teleport'],this[_0x4a9c('0xe1')]=_0x22c287[_0x4a9c('0xe1')],this['projectile']=_0x22c287['projectile'],this[_0x4a9c('0x6c1')]=_0x22c287[_0x4a9c('0x6c1')],this[_0x4a9c('0x61a')]=_0x22c287[_0x4a9c('0x61a')],this['shootCount']=this[_0x4a9c('0x61a')],this['spawnPoint']=_0x22c287[_0x4a9c('0x7fe')];},this[_0x4a9c('0x21e')]=function(_0x4b659f,_0x497c93){return this[_0x4a9c('0x528')]+=_0x4b659f,this[_0x4a9c('0x528')]<=0x0;},this[_0x4a9c('0x6b6')]=function(_0x2cc95e,_0x5615cc){return _0x2cc95e=_0x2cc95e||0x1,this[_0x4a9c('0x6f4')]*(this[_0x4a9c('0x696')]||0x2==this[_0x4a9c('0x5d4')]||0x3==this[_0x4a9c('0x5d4')]||0x4==this[_0x4a9c('0x5d4')]?0x1:0.6*_0x2cc95e)*(_0x5615cc?0x1:this[_0x4a9c('0x481')]);},this[_0x4a9c('0x612')]=function(_0x23b442){return!this[_0x4a9c('0x292')]||this[_0x4a9c('0x7df')]&&(this[_0x4a9c('0x7df')]==_0x23b442||this[_0x4a9c('0x7df')][_0x4a9c('0x4c1')]&&_0x23b442[_0x4a9c('0x4c1')]==this[_0x4a9c('0x7df')][_0x4a9c('0x4c1')]);},this['update']=function(_0x809a7b){this[_0x4a9c('0x21')]&&(this[_0x4a9c('0x2c6')]&&(this[_0x4a9c('0x2c6')]*=Math[_0x4a9c('0x555')](0.99,_0x809a7b)),this[_0x4a9c('0x309')]&&(this[_0x4a9c('0x309')]*=Math['pow'](0.99,_0x809a7b)),this['turnSpeed']&&(this[_0x4a9c('0x638')]+=this[_0x4a9c('0x54c')]*_0x809a7b));};};},function(_0x7a05b2,_0x2c0e92){_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')]=[{'id':0x0,'name':_0x4a9c('0x220'),'layer':0x0},{'id':0x1,'name':_0x4a9c('0x133'),'place':!0x0,'limit':0x1e,'layer':0x0},{'id':0x2,'name':_0x4a9c('0x72c'),'place':!0x0,'limit':0xf,'layer':0x0},{'id':0x3,'name':_0x4a9c('0x3bc'),'place':!0x0,'limit':0x7,'layer':0x1},{'id':0x4,'name':_0x4a9c('0x4f4'),'place':!0x0,'limit':0x1,'layer':0x0},{'id':0x5,'name':_0x4a9c('0x7e3'),'place':!0x0,'limit':0x6,'layer':-0x1},{'id':0x6,'name':'booster','place':!0x0,'limit':0xc,'layer':-0x1},{'id':0x7,'name':_0x4a9c('0x487'),'place':!0x0,'limit':0x2,'layer':0x1},{'id':0x8,'name':_0x4a9c('0x47e'),'place':!0x0,'limit':0xc,'layer':0x1},{'id':0x9,'name':'buff','place':!0x0,'limit':0x4,'layer':-0x1},{'id':0xa,'name':_0x4a9c('0x337'),'place':!0x0,'limit':0x1,'layer':-0x1},{'id':0xb,'name':_0x4a9c('0x6f9'),'place':!0x0,'limit':0x2,'layer':0x0},{'id':0xc,'name':'blocker','place':!0x0,'limit':0x3,'layer':-0x1},{'id':0xd,'name':_0x4a9c('0x7c9'),'place':!0x0,'limit':0x2,'layer':-0x1}],_0x2c0e92['projectiles']=[{'indx':0x0,'layer':0x0,'src':_0x4a9c('0x9c'),'dmg':0x19,'speed':1.6,'scale':0x67,'range':0x3e8},{'indx':0x1,'layer':0x1,'dmg':0x19,'scale':0x14},{'indx':0x0,'layer':0x0,'src':_0x4a9c('0x9c'),'dmg':0x23,'speed':2.5,'scale':0x67,'range':0x4b0},{'indx':0x0,'layer':0x0,'src':_0x4a9c('0x9c'),'dmg':0x1e,'speed':0x2,'scale':0x67,'range':0x4b0},{'indx':0x1,'layer':0x1,'dmg':0x10,'scale':0x14},{'indx':0x0,'layer':0x0,'src':_0x4a9c('0xac'),'dmg':0x32,'speed':3.6,'scale':0xa0,'range':0x578}],_0x2c0e92[_0x4a9c('0x53c')]=[{'id':0x0,'type':0x0,'name':_0x4a9c('0xbe'),'desc':_0x4a9c('0x50c'),'src':_0x4a9c('0x79b'),'length':0x8c,'width':0x8c,'xOff':-0x3,'yOff':0x12,'dmg':0x19,'range':0x41,'gather':0x1,'speed':0x12c},{'id':0x1,'type':0x0,'age':0x2,'name':'hand\x20axe','desc':_0x4a9c('0x69f'),'src':'axe_1','length':0x8c,'width':0x8c,'xOff':0x3,'yOff':0x18,'dmg':0x1e,'spdMult':0x1,'range':0x46,'gather':0x2,'speed':0x190},{'id':0x2,'type':0x0,'age':0x8,'name':'great\x20axe','desc':_0x4a9c('0xbb'),'src':_0x4a9c('0x157'),'length':0x8c,'width':0x8c,'xOff':-0x8,'yOff':0x19,'dmg':0x23,'spdMult':0x1,'range':0x4b,'gather':0x4,'speed':0x190},{'id':0x3,'type':0x0,'age':0x2,'name':_0x4a9c('0x359'),'desc':'increased\x20attack\x20power\x20but\x20slower\x20move\x20speed','src':'sword_1','iPad':1.3,'length':0x82,'width':0xd2,'xOff':-0x8,'yOff':0x2e,'dmg':0x23,'spdMult':0.85,'range':0x6e,'gather':0x1,'speed':0x12c},{'id':0x4,'type':0x0,'age':0x8,'name':_0x4a9c('0x55b'),'desc':_0x4a9c('0x667'),'src':'samurai_1','iPad':1.3,'length':0x82,'width':0xd2,'xOff':-0x8,'yOff':0x3b,'dmg':0x28,'spdMult':0.8,'range':0x76,'gather':0x1,'speed':0x12c},{'id':0x5,'type':0x0,'age':0x2,'name':_0x4a9c('0x552'),'desc':_0x4a9c('0xe9'),'src':_0x4a9c('0x109'),'iPad':1.3,'length':0x82,'width':0xd2,'xOff':-0x8,'yOff':0x35,'dmg':0x2d,'knock':0.2,'spdMult':0.82,'range':0x8e,'gather':0x1,'speed':0x2bc},{'id':0x6,'type':0x0,'age':0x2,'name':_0x4a9c('0x502'),'desc':_0x4a9c('0x7c5'),'src':_0x4a9c('0x457'),'iPad':1.3,'length':0x6e,'width':0xb4,'xOff':-0x8,'yOff':0x35,'dmg':0x14,'knock':0.7,'range':0x6e,'gather':0x1,'speed':0x12c},{'id':0x7,'type':0x0,'age':0x2,'name':_0x4a9c('0x3cc'),'desc':_0x4a9c('0x4f'),'src':_0x4a9c('0x738'),'iPad':0.8,'length':0x6e,'width':0x6e,'xOff':0x12,'yOff':0x0,'dmg':0x14,'knock':0.1,'range':0x41,'gather':0x1,'hitSlow':0.1,'spdMult':1.13,'speed':0x64},{'id':0x8,'type':0x0,'age':0x2,'name':'stick','desc':_0x4a9c('0x619'),'src':_0x4a9c('0x1d1'),'length':0x8c,'width':0x8c,'xOff':0x3,'yOff':0x18,'dmg':0x1,'spdMult':0x1,'range':0x46,'gather':0x7,'speed':0x190},{'id':0x9,'type':0x1,'age':0x6,'name':_0x4a9c('0x771'),'desc':_0x4a9c('0x4dc'),'src':_0x4a9c('0x225'),'req':[_0x4a9c('0x784'),0x4],'length':0x78,'width':0x78,'xOff':-0x6,'yOff':0x0,'projectile':0x0,'spdMult':0.75,'speed':0x258},{'id':0xa,'type':0x1,'age':0x6,'name':_0x4a9c('0x4e9'),'desc':'hammer\x20used\x20for\x20destroying\x20structures','src':_0x4a9c('0x36c'),'length':0x8c,'width':0x8c,'xOff':-0x9,'yOff':0x19,'dmg':0xa,'spdMult':0.88,'range':0x4b,'sDmg':7.5,'gather':0x1,'speed':0x190},{'id':0xb,'type':0x1,'age':0x6,'name':_0x4a9c('0x88'),'desc':_0x4a9c('0x594'),'src':_0x4a9c('0x281'),'length':0x78,'width':0x78,'shield':0.2,'xOff':0x6,'yOff':0x0,'spdMult':0.7},{'id':0xc,'type':0x1,'age':0x8,'name':_0x4a9c('0x5e7'),'desc':_0x4a9c('0x6dc'),'src':_0x4a9c('0x5a2'),'req':[_0x4a9c('0x784'),0x5],'aboveHand':!0x0,'armS':0.75,'length':0x78,'width':0x78,'xOff':-0x4,'yOff':0x0,'projectile':0x2,'spdMult':0.7,'speed':0x2bc},{'id':0xd,'type':0x1,'age':0x9,'name':_0x4a9c('0x6ad'),'desc':_0x4a9c('0x2f7'),'src':_0x4a9c('0x6ba'),'req':[_0x4a9c('0x784'),0xa],'aboveHand':!0x0,'armS':0.75,'length':0x78,'width':0x78,'xOff':-0x4,'yOff':0x0,'projectile':0x3,'spdMult':0.7,'speed':0xe6},{'id':0xe,'type':0x1,'age':0x6,'name':_0x4a9c('0xd7'),'desc':_0x4a9c('0x1e3'),'src':_0x4a9c('0x710'),'length':0x82,'width':0xd2,'xOff':-0x8,'yOff':0x35,'dmg':0x0,'steal':0xfa,'knock':0.2,'spdMult':1.05,'range':0x7d,'gather':0x0,'speed':0x2bc},{'id':0xf,'type':0x1,'age':0x9,'name':'musket','desc':_0x4a9c('0x73c'),'src':'musket_1','req':[_0x4a9c('0x1f6'),0xa],'aboveHand':!0x0,'rec':0.35,'armS':0.6,'hndS':0.3,'hndD':1.6,'length':0xcd,'width':0xcd,'xOff':0x19,'yOff':0x0,'projectile':0x5,'hideProjectile':!0x0,'spdMult':0.6,'speed':0x5dc}],_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x7f5')]=[{'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x0],'name':_0x4a9c('0x307'),'desc':_0x4a9c('0x126'),'req':[_0x4a9c('0x220'),0xa],'consume':function(_0x248d4b){return _0x248d4b['changeHealth'](0x14,_0x248d4b);},'scale':0x16,'holdOffset':0xf},{'age':0x3,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x0],'name':_0x4a9c('0x2a'),'desc':'restores\x2040\x20health\x20when\x20consumed','req':[_0x4a9c('0x220'),0xf],'consume':function(_0x3138cb){return _0x3138cb[_0x4a9c('0x21e')](0x28,_0x3138cb);},'scale':0x1b,'holdOffset':0xf},{'age':0x7,'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x0],'name':_0x4a9c('0x7cd'),'desc':_0x4a9c('0x3c9'),'req':[_0x4a9c('0x220'),0x19],'consume':function(_0x151e72){return!!(_0x151e72['changeHealth'](0x1e,_0x151e72)||_0x151e72[_0x4a9c('0x528')]<0x64)&&(_0x151e72[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=-0xa,_0x151e72[_0x4a9c('0x4f5')][_0x4a9c('0x40b')]=_0x151e72,_0x151e72[_0x4a9c('0x4f5')][_0x4a9c('0x1a0')]=0x5,!0x0);},'scale':0x1b,'holdOffset':0xf},{'group':_0x7a05b2[_0x4a9c('0x14f')]['groups'][0x1],'name':'wood\x20wall','desc':_0x4a9c('0x477'),'req':[_0x4a9c('0x784'),0xa],'projDmg':!0x0,'health':0x17c,'scale':0x32,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x3,'group':_0x7a05b2[_0x4a9c('0x14f')]['groups'][0x1],'name':_0x4a9c('0x2a1'),'desc':_0x4a9c('0x47d'),'req':[_0x4a9c('0x1f6'),0x19],'health':0x384,'scale':0x32,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x1],'name':_0x4a9c('0x6b'),'desc':_0x4a9c('0x2aa'),'req':['stone',0x23],'health':0x5dc,'scale':0x34,'holdOffset':0x14,'placeOffset':-0x5},{'group':_0x7a05b2['exports']['groups'][0x2],'name':_0x4a9c('0x72c'),'desc':_0x4a9c('0x7ec'),'req':[_0x4a9c('0x784'),0x14,_0x4a9c('0x1f6'),0x5],'health':0x190,'dmg':0x14,'scale':0x31,'spritePadding':-0x17,'holdOffset':0x8,'placeOffset':-0x5},{'age':0x5,'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x2],'name':'greater\x20spikes','desc':_0x4a9c('0x7ec'),'req':[_0x4a9c('0x784'),0x1e,_0x4a9c('0x1f6'),0xa],'health':0x1f4,'dmg':0x23,'scale':0x34,'spritePadding':-0x17,'holdOffset':0x8,'placeOffset':-0x5},{'age':0x9,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x2],'name':_0x4a9c('0x548'),'desc':_0x4a9c('0x21a'),'req':[_0x4a9c('0x784'),0x23,_0x4a9c('0x1f6'),0xf],'health':0x258,'dmg':0x1e,'pDmg':0x5,'scale':0x34,'spritePadding':-0x17,'holdOffset':0x8,'placeOffset':-0x5},{'age':0x9,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x2],'name':_0x4a9c('0x564'),'desc':_0x4a9c('0x7ec'),'req':[_0x4a9c('0x784'),0x1e,_0x4a9c('0x1f6'),0x14],'health':0x1f4,'dmg':0x2d,'turnSpeed':0.003,'scale':0x34,'spritePadding':-0x17,'holdOffset':0x8,'placeOffset':-0x5},{'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x3],'name':_0x4a9c('0xf2'),'desc':'generates\x20gold\x20over\x20time','req':[_0x4a9c('0x784'),0x32,_0x4a9c('0x1f6'),0xa],'health':0x190,'pps':0x1,'turnSpeed':0.0016,'spritePadding':0x19,'iconLineMult':0xc,'scale':0x2d,'holdOffset':0x14,'placeOffset':0x5},{'age':0x5,'group':_0x7a05b2[_0x4a9c('0x14f')]['groups'][0x3],'name':_0x4a9c('0x579'),'desc':_0x4a9c('0x27d'),'req':[_0x4a9c('0x784'),0x3c,_0x4a9c('0x1f6'),0x14],'health':0x1f4,'pps':1.5,'turnSpeed':0.0025,'spritePadding':0x19,'iconLineMult':0xc,'scale':0x2f,'holdOffset':0x14,'placeOffset':0x5},{'age':0x8,'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x3],'name':_0x4a9c('0x582'),'desc':_0x4a9c('0x27d'),'req':[_0x4a9c('0x784'),0x64,_0x4a9c('0x1f6'),0x32],'health':0x320,'pps':0x2,'turnSpeed':0.005,'spritePadding':0x19,'iconLineMult':0xc,'scale':0x2f,'holdOffset':0x14,'placeOffset':0x5},{'age':0x5,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x4],'type':0x2,'name':'mine','desc':_0x4a9c('0x54e'),'req':[_0x4a9c('0x784'),0x14,'stone',0x64],'iconLineMult':0xc,'scale':0x41,'holdOffset':0x14,'placeOffset':0x0},{'age':0x5,'group':_0x7a05b2['exports']['groups'][0xb],'type':0x0,'name':_0x4a9c('0x6f9'),'desc':_0x4a9c('0x51c'),'req':[_0x4a9c('0x784'),0x96],'iconLineMult':0xc,'colDiv':0.5,'scale':0x6e,'holdOffset':0x32,'placeOffset':-0xf},{'age':0x4,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x5],'name':_0x4a9c('0x180'),'desc':_0x4a9c('0x4c0'),'req':[_0x4a9c('0x784'),0xa,_0x4a9c('0x1f6'),0xa],'trap':!0x0,'ignoreCollision':!0x0,'hideFromEnemy':!0x0,'health':0x1f4,'colDiv':0.2,'scale':0x32,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x4,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x6],'name':_0x4a9c('0x19e'),'desc':_0x4a9c('0x77e'),'req':[_0x4a9c('0x1f6'),0x14,'wood',0x5],'ignoreCollision':!0x0,'boostSpeed':1.5,'health':0x96,'colDiv':0.7,'scale':0x2d,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0x7],'doUpdate':!0x0,'name':_0x4a9c('0x487'),'desc':_0x4a9c('0x64a'),'req':[_0x4a9c('0x784'),0xc8,'stone',0x96],'health':0x320,'projectile':0x1,'shootRange':0x2bc,'shootRate':0x898,'scale':0x2b,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x8],'name':'platform','desc':_0x4a9c('0x665'),'req':['wood',0x14],'ignoreCollision':!0x0,'zIndex':0x1,'health':0x12c,'scale':0x2b,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0x9],'name':_0x4a9c('0x762'),'desc':_0x4a9c('0x10'),'req':[_0x4a9c('0x784'),0x1e,_0x4a9c('0x220'),0xa],'ignoreCollision':!0x0,'healCol':0xf,'health':0x190,'colDiv':0.7,'scale':0x2d,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x9,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0xa],'name':_0x4a9c('0x2e4'),'desc':_0x4a9c('0x518'),'req':['wood',0x64,_0x4a9c('0x1f6'),0x64],'health':0x190,'ignoreCollision':!0x0,'spawnPoint':!0x0,'scale':0x2d,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x268')][0xc],'name':_0x4a9c('0x122'),'desc':_0x4a9c('0x713'),'req':[_0x4a9c('0x784'),0x1e,_0x4a9c('0x1f6'),0x19],'ignoreCollision':!0x0,'blocker':0x12c,'health':0x190,'colDiv':0.7,'scale':0x2d,'holdOffset':0x14,'placeOffset':-0x5},{'age':0x7,'group':_0x7a05b2['exports'][_0x4a9c('0x268')][0xd],'name':'teleporter','desc':_0x4a9c('0x2ad'),'req':[_0x4a9c('0x784'),0x3c,'stone',0x3c],'ignoreCollision':!0x0,'teleport':!0x0,'health':0xc8,'colDiv':0.7,'scale':0x2d,'holdOffset':0x14,'placeOffset':-0x5}];for(var _0x5627b5=0x0;_0x5627b5<_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x7f5')][_0x4a9c('0x3e1')];++_0x5627b5)_0x7a05b2['exports'][_0x4a9c('0x7f5')][_0x5627b5]['id']=_0x5627b5,_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x7f5')][_0x5627b5][_0x4a9c('0x637')]&&(_0x7a05b2[_0x4a9c('0x14f')][_0x4a9c('0x7f5')][_0x5627b5][_0x4a9c('0x637')]=_0x5627b5-_0x7a05b2[_0x4a9c('0x14f')]['list'][_0x5627b5]['pre']);},function(_0x3106fc,_0x593ba2){_0x3106fc[_0x4a9c('0x14f')]={};},function(_0x2e48c4,_0x3fbd7f){var _0x151676=Math[_0x4a9c('0xa9')],_0x53fc0c=Math[_0x4a9c('0x20')],_0x36ccf6=Math[_0x4a9c('0x431')],_0x23de47=Math[_0x4a9c('0x1bb')],_0x5a2cbc=(Math[_0x4a9c('0x555')],Math[_0x4a9c('0x5f0')]);_0x2e48c4['exports']=function(_0x1b65ed,_0x4cecf5,_0x579c4c,_0x5aed4,_0x375d9f,_0x1ad47e){var _0x4ca6bb,_0x57aed9;this['objects']=_0x4cecf5,this[_0x4a9c('0x657')]={},this['updateObjects']=[];var _0x3d7107=_0x5aed4[_0x4a9c('0x1d6')]/_0x5aed4[_0x4a9c('0x135')];this[_0x4a9c('0x70e')]=function(_0x1c4f88){for(var _0x47da18=Math['min'](_0x5aed4[_0x4a9c('0x1d6')],Math[_0x4a9c('0x790')](0x0,_0x1c4f88['x'])),_0x1b552f=Math[_0x4a9c('0xe8')](_0x5aed4[_0x4a9c('0x1d6')],Math[_0x4a9c('0x790')](0x0,_0x1c4f88['y'])),_0x2623b9=0x0;_0x2623b9<_0x5aed4['colGrid'];++_0x2623b9){_0x4ca6bb=_0x2623b9*_0x3d7107;for(var _0x4bbc69=0x0;_0x4bbc69<_0x5aed4[_0x4a9c('0x135')];++_0x4bbc69)_0x57aed9=_0x4bbc69*_0x3d7107,_0x47da18+_0x1c4f88[_0x4a9c('0x6f4')]>=_0x4ca6bb&&_0x47da18-_0x1c4f88[_0x4a9c('0x6f4')]<=_0x4ca6bb+_0x3d7107&&_0x1b552f+_0x1c4f88['scale']>=_0x57aed9&&_0x1b552f-_0x1c4f88['scale']<=_0x57aed9+_0x3d7107&&(this[_0x4a9c('0x657')][_0x2623b9+'_'+_0x4bbc69]||(this[_0x4a9c('0x657')][_0x2623b9+'_'+_0x4bbc69]=[]),this[_0x4a9c('0x657')][_0x2623b9+'_'+_0x4bbc69][_0x4a9c('0x2d2')](_0x1c4f88),_0x1c4f88['gridLocations']['push'](_0x2623b9+'_'+_0x4bbc69));}},this[_0x4a9c('0x798')]=function(_0x358e46){for(var _0x57f0da,_0x33971a=0x0;_0x33971a<_0x358e46[_0x4a9c('0x57d')][_0x4a9c('0x3e1')];++_0x33971a)(_0x57f0da=this[_0x4a9c('0x657')][_0x358e46[_0x4a9c('0x57d')][_0x33971a]]['indexOf'](_0x358e46))>=0x0&&this[_0x4a9c('0x657')][_0x358e46[_0x4a9c('0x57d')][_0x33971a]][_0x4a9c('0x7d5')](_0x57f0da,0x1);},this[_0x4a9c('0xd')]=function(_0x1505dc){if(_0x1505dc[_0x4a9c('0x21')]=!0x1,_0x1ad47e){_0x1505dc[_0x4a9c('0x7df')]&&_0x1505dc[_0x4a9c('0x499')]&&(_0x1505dc[_0x4a9c('0x7df')]['pps']-=_0x1505dc['pps']),this[_0x4a9c('0x798')](_0x1505dc);var _0x15b989=this[_0x4a9c('0x3ce')][_0x4a9c('0x312')](_0x1505dc);_0x15b989>=0x0&&this[_0x4a9c('0x3ce')][_0x4a9c('0x7d5')](_0x15b989,0x1);}},this['hitObj']=function(_0x16fcc2,_0x5a43a4){for(var _0x22beba=0x0;_0x22beba<_0x375d9f[_0x4a9c('0x3e1')];++_0x22beba)_0x375d9f[_0x22beba][_0x4a9c('0x21')]&&(_0x16fcc2[_0x4a9c('0x6eb')][_0x375d9f[_0x22beba]['id']]&&(_0x16fcc2['active']?_0x375d9f[_0x22beba][_0x4a9c('0x336')](_0x16fcc2)&&_0x1ad47e['send'](_0x375d9f[_0x22beba]['id'],'8',_0x579c4c[_0x4a9c('0x5f6')](_0x5a43a4,0x1),_0x16fcc2[_0x4a9c('0x56f')]):_0x1ad47e[_0x4a9c('0x1c2')](_0x375d9f[_0x22beba]['id'],'12',_0x16fcc2[_0x4a9c('0x56f')])),_0x16fcc2[_0x4a9c('0x21')]||_0x16fcc2[_0x4a9c('0x7df')]!=_0x375d9f[_0x22beba]||_0x375d9f[_0x22beba][_0x4a9c('0x79d')](_0x16fcc2['group']['id'],-0x1));};var _0x1344ba,_0x1dd8fd,_0x534b05=[];this[_0x4a9c('0x7ab')]=function(_0x3b60d8,_0x12afdd,_0x5c66ee){_0x4ca6bb=_0x151676(_0x3b60d8/_0x3d7107),_0x57aed9=_0x151676(_0x12afdd/_0x3d7107),_0x534b05['length']=0x0;try{this['grids'][_0x4ca6bb+'_'+_0x57aed9]&&_0x534b05[_0x4a9c('0x2d2')](this[_0x4a9c('0x657')][_0x4ca6bb+'_'+_0x57aed9]),_0x3b60d8+_0x5c66ee>=(_0x4ca6bb+0x1)*_0x3d7107&&((_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb+0x1+'_'+_0x57aed9])&&_0x534b05['push'](_0x1344ba),_0x57aed9&&_0x12afdd-_0x5c66ee<=_0x57aed9*_0x3d7107?(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb+0x1+'_'+(_0x57aed9-0x1)])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba):_0x12afdd+_0x5c66ee>=(_0x57aed9+0x1)*_0x3d7107&&(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb+0x1+'_'+(_0x57aed9+0x1)])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba)),_0x4ca6bb&&_0x3b60d8-_0x5c66ee<=_0x4ca6bb*_0x3d7107&&((_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb-0x1+'_'+_0x57aed9])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba),_0x57aed9&&_0x12afdd-_0x5c66ee<=_0x57aed9*_0x3d7107?(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb-0x1+'_'+(_0x57aed9-0x1)])&&_0x534b05['push'](_0x1344ba):_0x12afdd+_0x5c66ee>=(_0x57aed9+0x1)*_0x3d7107&&(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb-0x1+'_'+(_0x57aed9+0x1)])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba)),_0x12afdd+_0x5c66ee>=(_0x57aed9+0x1)*_0x3d7107&&(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb+'_'+(_0x57aed9+0x1)])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba),_0x57aed9&&_0x12afdd-_0x5c66ee<=_0x57aed9*_0x3d7107&&(_0x1344ba=this[_0x4a9c('0x657')][_0x4ca6bb+'_'+(_0x57aed9-0x1)])&&_0x534b05[_0x4a9c('0x2d2')](_0x1344ba);}catch(_0x467fed){}return _0x534b05;},this['add']=function(_0x932bc5,_0x343b44,_0x2d3d77,_0x557b2f,_0x35d754,_0x54b4c3,_0x53e4dd,_0x14dc1b,_0x316016){_0x1dd8fd=null;for(var _0x9c06c8=0x0;_0x9c06c8<_0x4cecf5[_0x4a9c('0x3e1')];++_0x9c06c8)if(_0x4cecf5[_0x9c06c8][_0x4a9c('0x56f')]==_0x932bc5){_0x1dd8fd=_0x4cecf5[_0x9c06c8];break;}if(!_0x1dd8fd)for(_0x9c06c8=0x0;_0x9c06c8<_0x4cecf5[_0x4a9c('0x3e1')];++_0x9c06c8)if(!_0x4cecf5[_0x9c06c8][_0x4a9c('0x21')]){_0x1dd8fd=_0x4cecf5[_0x9c06c8];break;}_0x1dd8fd||(_0x1dd8fd=new _0x1b65ed(_0x932bc5),_0x4cecf5[_0x4a9c('0x2d2')](_0x1dd8fd)),_0x14dc1b&&(_0x1dd8fd[_0x4a9c('0x56f')]=_0x932bc5),_0x1dd8fd[_0x4a9c('0xf9')](_0x343b44,_0x2d3d77,_0x557b2f,_0x35d754,_0x54b4c3,_0x53e4dd,_0x316016),_0x1ad47e&&(this[_0x4a9c('0x70e')](_0x1dd8fd),_0x1dd8fd[_0x4a9c('0x3d4')]&&this['updateObjects'][_0x4a9c('0x2d2')](_0x1dd8fd));},this[_0x4a9c('0x166')]=function(_0xf5ded2){for(var _0xb62798=0x0;_0xb62798<_0x4cecf5[_0x4a9c('0x3e1')];++_0xb62798)if(_0x4cecf5[_0xb62798]['sid']==_0xf5ded2){this['disableObj'](_0x4cecf5[_0xb62798]);break;}},this[_0x4a9c('0x69c')]=function(_0xe3bc44,_0x4da88f){for(var _0xbd22be=0x0;_0xbd22be<_0x4cecf5[_0x4a9c('0x3e1')];++_0xbd22be)_0x4cecf5[_0xbd22be]['active']&&_0x4cecf5[_0xbd22be][_0x4a9c('0x7df')]&&_0x4cecf5[_0xbd22be][_0x4a9c('0x7df')][_0x4a9c('0x56f')]==_0xe3bc44&&this[_0x4a9c('0xd')](_0x4cecf5[_0xbd22be]);_0x4da88f&&_0x4da88f[_0x4a9c('0x25b')]('13',_0xe3bc44);},this[_0x4a9c('0x350')]=function(_0x3ad8d4){for(var _0x48ab09=null,_0x5013e7=0x0;_0x5013e7<_0x4cecf5[_0x4a9c('0x3e1')];++_0x5013e7)if((_0x1dd8fd=_0x4cecf5[_0x5013e7])[_0x4a9c('0x21')]&&_0x1dd8fd[_0x4a9c('0x7df')]&&_0x1dd8fd[_0x4a9c('0x7df')][_0x4a9c('0x56f')]==_0x3ad8d4&&_0x1dd8fd[_0x4a9c('0x7fe')]){_0x48ab09=[_0x1dd8fd['x'],_0x1dd8fd['y']],this[_0x4a9c('0xd')](_0x1dd8fd),_0x1ad47e[_0x4a9c('0x25b')]('12',_0x1dd8fd[_0x4a9c('0x56f')]),_0x1dd8fd[_0x4a9c('0x7df')]&&_0x1dd8fd['owner']['changeItemCount'](_0x1dd8fd[_0x4a9c('0x2ae')]['id'],-0x1);break;}return _0x48ab09;},this['checkItemLocation']=function(_0x1007b3,_0x36c5c3,_0x1eb2cd,_0x4d4d2b,_0x3040fb,_0x37a877,_0x3ab09e){for(var _0x1446ef=0x0;_0x1446ef<_0x4cecf5[_0x4a9c('0x3e1')];++_0x1446ef){var _0x659936=_0x4cecf5[_0x1446ef][_0x4a9c('0x122')]?_0x4cecf5[_0x1446ef]['blocker']:_0x4cecf5[_0x1446ef][_0x4a9c('0x6b6')](_0x4d4d2b,_0x4cecf5[_0x1446ef][_0x4a9c('0x696')]);if(_0x4cecf5[_0x1446ef]['active']&&_0x579c4c['getDistance'](_0x1007b3,_0x36c5c3,_0x4cecf5[_0x1446ef]['x'],_0x4cecf5[_0x1446ef]['y'])<_0x1eb2cd+_0x659936)return!0x1;}return!(!_0x37a877&&0x12!=_0x3040fb&&_0x36c5c3>=_0x5aed4['mapScale']/0x2-_0x5aed4['riverWidth']/0x2&&_0x36c5c3<=_0x5aed4[_0x4a9c('0x1d6')]/0x2+_0x5aed4['riverWidth']/0x2);},this[_0x4a9c('0x1d3')]=function(_0x2adcab,_0x39ccfd,_0x252379,_0x3953e9,_0x56f0ee){for(var _0x3ce35d,_0x3913b0=items[_0x4a9c('0x6f6')][_0x56f0ee],_0x1e77d7=0x0;_0x1e77d7<projectiles[_0x4a9c('0x3e1')];++_0x1e77d7)if(!projectiles[_0x1e77d7][_0x4a9c('0x21')]){_0x3ce35d=projectiles[_0x1e77d7];break;}_0x3ce35d||(_0x3ce35d=new Projectile(_0x375d9f,_0x579c4c),projectiles[_0x4a9c('0x2d2')](_0x3ce35d)),_0x3ce35d[_0x4a9c('0xf9')](_0x56f0ee,_0x2adcab,_0x39ccfd,_0x252379,_0x3913b0[_0x4a9c('0x244')],_0x3953e9,_0x3913b0['scale']);},this[_0x4a9c('0x690')]=function(_0x33e5c3,_0x3f8695,_0x58b478){_0x58b478=_0x58b478||0x1;var _0xa70378=_0x33e5c3['x']-_0x3f8695['x'],_0x4e6432=_0x33e5c3['y']-_0x3f8695['y'],_0x1dcc5e=_0x33e5c3[_0x4a9c('0x6f4')]+_0x3f8695['scale'];if(_0x53fc0c(_0xa70378)<=_0x1dcc5e||_0x53fc0c(_0x4e6432)<=_0x1dcc5e){_0x1dcc5e=_0x33e5c3[_0x4a9c('0x6f4')]+(_0x3f8695[_0x4a9c('0x6b6')]?_0x3f8695[_0x4a9c('0x6b6')]():_0x3f8695[_0x4a9c('0x6f4')]);var _0x4d9e7e=_0x5a2cbc(_0xa70378*_0xa70378+_0x4e6432*_0x4e6432)-_0x1dcc5e;if(_0x4d9e7e<=0x0){if(_0x3f8695[_0x4a9c('0x517')])!_0x3f8695[_0x4a9c('0x7e3')]||_0x33e5c3[_0x4a9c('0x3d3')]||_0x3f8695['owner']==_0x33e5c3||_0x3f8695[_0x4a9c('0x7df')]&&_0x3f8695[_0x4a9c('0x7df')][_0x4a9c('0x4c1')]&&_0x3f8695['owner']['team']==_0x33e5c3[_0x4a9c('0x4c1')]?_0x3f8695[_0x4a9c('0xe1')]?(_0x33e5c3[_0x4a9c('0x59f')]+=_0x58b478*_0x3f8695[_0x4a9c('0xe1')]*(_0x3f8695[_0x4a9c('0x70f')]||0x1)*_0x36ccf6(_0x3f8695[_0x4a9c('0x638')]),_0x33e5c3['yVel']+=_0x58b478*_0x3f8695[_0x4a9c('0xe1')]*(_0x3f8695[_0x4a9c('0x70f')]||0x1)*_0x23de47(_0x3f8695['dir'])):_0x3f8695[_0x4a9c('0x4ae')]?_0x33e5c3[_0x4a9c('0x4ae')]=_0x3f8695[_0x4a9c('0x4ae')]:_0x3f8695[_0x4a9c('0x422')]&&(_0x33e5c3['x']=_0x579c4c[_0x4a9c('0x78c')](0x0,_0x5aed4[_0x4a9c('0x1d6')]),_0x33e5c3['y']=_0x579c4c[_0x4a9c('0x78c')](0x0,_0x5aed4[_0x4a9c('0x1d6')])):(_0x33e5c3[_0x4a9c('0x78d')]=!0x0,_0x3f8695[_0x4a9c('0x292')]=!0x1);else{var _0x1b4e13=_0x579c4c['getDirection'](_0x33e5c3['x'],_0x33e5c3['y'],_0x3f8695['x'],_0x3f8695['y']);if(_0x579c4c[_0x4a9c('0x63')](_0x33e5c3['x'],_0x33e5c3['y'],_0x3f8695['x'],_0x3f8695['y']),_0x3f8695[_0x4a9c('0x62d')]?(_0x4d9e7e=-0x1*_0x4d9e7e/0x2,_0x33e5c3['x']+=_0x4d9e7e*_0x36ccf6(_0x1b4e13),_0x33e5c3['y']+=_0x4d9e7e*_0x23de47(_0x1b4e13),_0x3f8695['x']-=_0x4d9e7e*_0x36ccf6(_0x1b4e13),_0x3f8695['y']-=_0x4d9e7e*_0x23de47(_0x1b4e13)):(_0x33e5c3['x']=_0x3f8695['x']+_0x1dcc5e*_0x36ccf6(_0x1b4e13),_0x33e5c3['y']=_0x3f8695['y']+_0x1dcc5e*_0x23de47(_0x1b4e13),_0x33e5c3[_0x4a9c('0x59f')]*=0.75,_0x33e5c3[_0x4a9c('0x63e')]*=0.75),_0x3f8695[_0x4a9c('0x90')]&&_0x3f8695[_0x4a9c('0x7df')]!=_0x33e5c3&&(!_0x3f8695[_0x4a9c('0x7df')]||!_0x3f8695[_0x4a9c('0x7df')]['team']||_0x3f8695['owner']['team']!=_0x33e5c3[_0x4a9c('0x4c1')])){_0x33e5c3[_0x4a9c('0x21e')](-_0x3f8695[_0x4a9c('0x90')],_0x3f8695[_0x4a9c('0x7df')],_0x3f8695);var _0x4c1555=1.5*(_0x3f8695[_0x4a9c('0x70f')]||0x1);_0x33e5c3['xVel']+=_0x4c1555*_0x36ccf6(_0x1b4e13),_0x33e5c3[_0x4a9c('0x63e')]+=_0x4c1555*_0x23de47(_0x1b4e13),!_0x3f8695[_0x4a9c('0x198')]||_0x33e5c3['skin']&&_0x33e5c3[_0x4a9c('0x3a0')][_0x4a9c('0x141')]||(_0x33e5c3[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=_0x3f8695['pDmg'],_0x33e5c3[_0x4a9c('0x4f5')][_0x4a9c('0x1a0')]=0x5,_0x33e5c3[_0x4a9c('0x4f5')][_0x4a9c('0x40b')]=_0x3f8695[_0x4a9c('0x7df')]),_0x33e5c3[_0x4a9c('0x1cf')]&&_0x3f8695[_0x4a9c('0x528')]&&(_0x3f8695[_0x4a9c('0x21e')](-_0x33e5c3[_0x4a9c('0x1cf')])&&this[_0x4a9c('0xd')](_0x3f8695),this[_0x4a9c('0x12d')](_0x3f8695,_0x579c4c[_0x4a9c('0x721')](_0x33e5c3['x'],_0x33e5c3['y'],_0x3f8695['x'],_0x3f8695['y'])));}}return _0x3f8695[_0x4a9c('0x32')]>_0x33e5c3['zIndex']&&(_0x33e5c3['zIndex']=_0x3f8695[_0x4a9c('0x32')]),!0x0;}}return!0x1;};};},function(_0x3e480d,_0x220a09,_0x37253f){var _0x31cbf3=new(_0x37253f(0x31))();_0x31cbf3[_0x4a9c('0x6d0')]('jew','black',_0x4a9c('0x7'),'child',_0x4a9c('0x6d1'),_0x4a9c('0x299'),_0x4a9c('0x26e'),_0x4a9c('0x188'),_0x4a9c('0x49e'),_0x4a9c('0x96'),_0x4a9c('0x616'),'gay',_0x4a9c('0x3fc'),_0x4a9c('0x3b2'),_0x4a9c('0x37b'),_0x4a9c('0x3a1'),_0x4a9c('0x443'),'kids',_0x4a9c('0x4d1'),_0x4a9c('0x7cf'),_0x4a9c('0x52b'),_0x4a9c('0x170'),_0x4a9c('0x691'),_0x4a9c('0x48a'),_0x4a9c('0x3e6'),_0x4a9c('0x36b'),_0x4a9c('0x235'),_0x4a9c('0x273'),_0x4a9c('0x680'),_0x4a9c('0x48b'),_0x4a9c('0x33'),_0x4a9c('0x1e5'),_0x4a9c('0x146'),_0x4a9c('0xfa'),_0x4a9c('0x28e'),'penis',_0x4a9c('0x7bb'),_0x4a9c('0x620'),'nazi',_0x4a9c('0x96'),'stalin',_0x4a9c('0x251'),_0x4a9c('0x85'),_0x4a9c('0x76d'),_0x4a9c('0x49d'),_0x4a9c('0x279'),_0x4a9c('0x384'),_0x4a9c('0x5ea'),_0x4a9c('0x75a'),_0x4a9c('0x5ec'),_0x4a9c('0x24d'),_0x4a9c('0x32c'),_0x4a9c('0x550'),_0x4a9c('0x228'),_0x4a9c('0x1e5'),_0x4a9c('0x736'),_0x4a9c('0x4f2'),'anal',_0x4a9c('0x1dd'),_0x4a9c('0x7aa'),_0x4a9c('0x6f'),_0x4a9c('0x5ed'),_0x4a9c('0x4c7'),_0x4a9c('0x2f0'),_0x4a9c('0x440'),'ass',_0x4a9c('0xd4'),_0x4a9c('0x233'),_0x4a9c('0x208'),'[dot]',_0x4a9c('0x1a4'),'whiore',_0x4a9c('0x2af'),'faggot',_0x4a9c('0x32b'),_0x4a9c('0x26d'),_0x4a9c('0x366'),_0x4a9c('0x5ec'),_0x4a9c('0x203'),_0x4a9c('0x4bc'),_0x4a9c('0x5df'),_0x4a9c('0x4e0'),_0x4a9c('0x233'),_0x4a9c('0x785'),_0x4a9c('0x440'),_0x4a9c('0x56f'),_0x4a9c('0x441'),_0x4a9c('0x7cb'),_0x4a9c('0x66a'));var _0x5342d0=Math[_0x4a9c('0x20')],_0x5733e5=Math[_0x4a9c('0x431')],_0x19759e=Math[_0x4a9c('0x1bb')],_0x3b4f7c=Math['pow'],_0x3d6a65=Math['sqrt'];_0x3e480d[_0x4a9c('0x14f')]=function(_0x43a62a,_0x5bcc01,_0x4f20a8,_0x28c15f,_0x1f9b41,_0x490682,_0x12c166,_0x43cd16,_0x27b8f8,_0xd02de8,_0x3a0f8e,_0x1e10bd,_0x5efa68,_0x5cae23){this['id']=_0x43a62a,this[_0x4a9c('0x56f')]=_0x5bcc01,this['tmpScore']=0x0,this[_0x4a9c('0x4c1')]=null,this['skinIndex']=0x0,this[_0x4a9c('0xe3')]=0x0,this[_0x4a9c('0x428')]=0x0,this[_0x4a9c('0x7f8')]={};for(var _0x503064=0x0;_0x503064<_0x3a0f8e[_0x4a9c('0x3e1')];++_0x503064)_0x3a0f8e[_0x503064]['price']<=0x0&&(this[_0x4a9c('0x7f8')][_0x3a0f8e[_0x503064]['id']]=0x1);for(this[_0x4a9c('0x74f')]={},_0x503064=0x0;_0x503064<_0xd02de8[_0x4a9c('0x3e1')];++_0x503064)_0xd02de8[_0x503064][_0x4a9c('0xf7')]<=0x0&&(this[_0x4a9c('0x74f')][_0xd02de8[_0x503064]['id']]=0x1);this['points']=0x0,this['dt']=0x0,this[_0x4a9c('0x761')]=!0x1,this[_0x4a9c('0x19b')]={},this[_0x4a9c('0x62d')]=!0x0,this[_0x4a9c('0x499')]=0x0,this[_0x4a9c('0xdb')]=void 0x0,this[_0x4a9c('0x139')]=0x0,this['lastPing']=0x0,this[_0x4a9c('0x729')]=0x0,this['skinColor']=0x0,this['spawn']=function(_0x48c762){this[_0x4a9c('0x21')]=!0x0,this[_0x4a9c('0x1b7')]=!0x0,this[_0x4a9c('0x78d')]=!0x1,this[_0x4a9c('0x4e8')]=!0x1,this[_0x4a9c('0x4ea')]=0x0,this['chatCountdown']=0x0,this[_0x4a9c('0x720')]=0x0,this[_0x4a9c('0x10c')]=0x0,this[_0x4a9c('0x6eb')]={},this[_0x4a9c('0x18')]=0x0,this[_0x4a9c('0x55c')]=0x0,this[_0x4a9c('0x124')]=0x0,this[_0x4a9c('0x6cf')]=0x0,this['mouseState']=0x0,this[_0x4a9c('0x209')]=-0x1,this[_0x4a9c('0x452')]=0x0,this[_0x4a9c('0x4f5')]={},this['noMovTimer']=0x0,this['maxXP']=0x12c,this['XP']=0x0,this['age']=0x1,this[_0x4a9c('0x1c9')]=0x0,this[_0x4a9c('0x9b')]=0x2,this['upgradePoints']=0x0,this['x']=0x0,this['y']=0x0,this['zIndex']=0x0,this['xVel']=0x0,this['yVel']=0x0,this[_0x4a9c('0x32a')]=0x1,this[_0x4a9c('0x638')]=0x0,this[_0x4a9c('0x3eb')]=0x0,this[_0x4a9c('0x241')]=0x0,this[_0x4a9c('0x199')]=0x0,this['maxHealth']=0x64,this['health']=this[_0x4a9c('0xb3')],this['scale']=_0x4f20a8[_0x4a9c('0x4d4')],this['speed']=_0x4f20a8['playerSpeed'],this['resetMoveDir'](),this[_0x4a9c('0x516')](_0x48c762),this['items']=[0x0,0x3,0x6,0xa],this[_0x4a9c('0x53c')]=[0x0],this[_0x4a9c('0x654')]=0x0,this[_0x4a9c('0x2f1')]=[],this[_0x4a9c('0xa7')]={};},this[_0x4a9c('0x27c')]=function(){this[_0x4a9c('0xdb')]=void 0x0;},this[_0x4a9c('0x516')]=function(_0x406ac6){for(var _0x3a7a11=0x0;_0x3a7a11<_0x4f20a8[_0x4a9c('0x3c')]['length'];++_0x3a7a11)this[_0x4f20a8[_0x4a9c('0x3c')][_0x3a7a11]]=_0x406ac6?0x64:0x0;},this['addItem']=function(_0x56c974){var _0x2c5b32=_0x27b8f8[_0x4a9c('0x7f5')][_0x56c974];if(_0x2c5b32){for(var _0x5aef3e=0x0;_0x5aef3e<this[_0x4a9c('0x103')][_0x4a9c('0x3e1')];++_0x5aef3e)if(_0x27b8f8[_0x4a9c('0x7f5')][this[_0x4a9c('0x103')][_0x5aef3e]][_0x4a9c('0x2ae')]==_0x2c5b32['group'])return this['buildIndex']==this[_0x4a9c('0x103')][_0x5aef3e]&&(this[_0x4a9c('0x209')]=_0x56c974),this['items'][_0x5aef3e]=_0x56c974,!0x0;return this[_0x4a9c('0x103')][_0x4a9c('0x2d2')](_0x56c974),!0x0;}return!0x1;},this[_0x4a9c('0x6ce')]=function(_0x21405c){if(_0x21405c){this['name']=_0x4a9c('0x653');var _0xce9ddd=_0x21405c[_0x4a9c('0x9e')]+'',_0xad3957=!0x1,_0xb33249=(_0xce9ddd=(_0xce9ddd=(_0xce9ddd=(_0xce9ddd=_0xce9ddd[_0x4a9c('0x14')](0x0,_0x4f20a8[_0x4a9c('0x2eb')]))[_0x4a9c('0x4e5')](/[^\w:\(\)\/? -]+/gim,'\x20'))[_0x4a9c('0x4e5')](/[^\x00-\x7F]/g,'\x20'))[_0x4a9c('0x454')]())[_0x4a9c('0x5c2')]()[_0x4a9c('0x4e5')](/\s/g,'')[_0x4a9c('0x4e5')](/1/g,'i')[_0x4a9c('0x4e5')](/0/g,'o')[_0x4a9c('0x4e5')](/5/g,'s');for(var _0x3d1b30 of _0x31cbf3[_0x4a9c('0x7f5')])if(-0x1!=_0xb33249[_0x4a9c('0x312')](_0x3d1b30)){_0xad3957=!0x0;break;}_0xce9ddd[_0x4a9c('0x3e1')]>0x0&&!_0xad3957&&(this[_0x4a9c('0x9e')]=_0xce9ddd),this[_0x4a9c('0x3a3')]=0x0,_0x4f20a8[_0x4a9c('0x5b0')][_0x21405c[_0x4a9c('0x3a0')]]&&(this[_0x4a9c('0x3a3')]=_0x21405c[_0x4a9c('0x3a0')]);}},this[_0x4a9c('0x4bb')]=function(){return[this['id'],this[_0x4a9c('0x56f')],this[_0x4a9c('0x9e')],_0x28c15f[_0x4a9c('0x5f6')](this['x'],0x2),_0x28c15f['fixTo'](this['y'],0x2),_0x28c15f['fixTo'](this[_0x4a9c('0x638')],0x3),this[_0x4a9c('0x528')],this[_0x4a9c('0xb3')],this[_0x4a9c('0x6f4')],this[_0x4a9c('0x3a3')]];},this[_0x4a9c('0x5e1')]=function(_0x2740b8){this['id']=_0x2740b8[0x0],this['sid']=_0x2740b8[0x1],this['name']=_0x2740b8[0x2],this['x']=_0x2740b8[0x3],this['y']=_0x2740b8[0x4],this['dir']=_0x2740b8[0x5],this[_0x4a9c('0x528')]=_0x2740b8[0x6],this[_0x4a9c('0xb3')]=_0x2740b8[0x7],this[_0x4a9c('0x6f4')]=_0x2740b8[0x8],this[_0x4a9c('0x3a3')]=_0x2740b8[0x9];};var _0xa56581=0x0;this['update']=function(_0x567357){if(this['alive']){if(this[_0x4a9c('0x10c')]>0x0&&(this[_0x4a9c('0x10c')]-=_0x567357,this[_0x4a9c('0x10c')]<=0x0&&(this[_0x4a9c('0x10c')]=0x0,this['shameCount']=0x0)),(_0xa56581-=_0x567357)<=0x0){var _0x19c0c5=(this['skin']&&this['skin'][_0x4a9c('0x45f')]?this[_0x4a9c('0x3a0')][_0x4a9c('0x45f')]:0x0)+(this[_0x4a9c('0x121')]&&this[_0x4a9c('0x121')][_0x4a9c('0x45f')]?this['tail'][_0x4a9c('0x45f')]:0x0);_0x19c0c5&&this[_0x4a9c('0x21e')](_0x19c0c5,this),this['dmgOverTime']['dmg']&&(this[_0x4a9c('0x21e')](-this[_0x4a9c('0x4f5')]['dmg'],this['dmgOverTime'][_0x4a9c('0x40b')]),this[_0x4a9c('0x4f5')][_0x4a9c('0x1a0')]-=0x1,this['dmgOverTime'][_0x4a9c('0x1a0')]<=0x0&&(this[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=0x0)),this[_0x4a9c('0x4ae')]&&this['changeHealth'](this[_0x4a9c('0x4ae')],this),_0xa56581=0x3e8;}if(this[_0x4a9c('0x1b7')]){if(this[_0x4a9c('0x32a')]<0x1&&(this[_0x4a9c('0x32a')]+=0.0008*_0x567357,this[_0x4a9c('0x32a')]>0x1&&(this['slowMult']=0x1)),this[_0x4a9c('0x353')]+=_0x567357,(this[_0x4a9c('0x59f')]||this[_0x4a9c('0x63e')])&&(this[_0x4a9c('0x353')]=0x0),this[_0x4a9c('0x78d')])this[_0x4a9c('0x59f')]=0x0,this['yVel']=0x0;else{var _0x3c7d83=(this['buildIndex']>=0x0?0.5:0x1)*(_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]]['spdMult']||0x1)*(this[_0x4a9c('0x3a0')]&&this['skin'][_0x4a9c('0x4aa')]||0x1)*(this[_0x4a9c('0x121')]&&this['tail'][_0x4a9c('0x4aa')]||0x1)*(this['y']<=_0x4f20a8[_0x4a9c('0x60e')]?this['skin']&&this[_0x4a9c('0x3a0')][_0x4a9c('0xca')]?0x1:_0x4f20a8[_0x4a9c('0x58d')]:0x1)*this[_0x4a9c('0x32a')];!this[_0x4a9c('0x32')]&&this['y']>=_0x4f20a8['mapScale']/0x2-_0x4f20a8['riverWidth']/0x2&&this['y']<=_0x4f20a8[_0x4a9c('0x1d6')]/0x2+_0x4f20a8['riverWidth']/0x2&&(this[_0x4a9c('0x3a0')]&&this['skin'][_0x4a9c('0x7ff')]?(_0x3c7d83*=0.75,this[_0x4a9c('0x59f')]+=0.4*_0x4f20a8[_0x4a9c('0x775')]*_0x567357):(_0x3c7d83*=0.33,this[_0x4a9c('0x59f')]+=_0x4f20a8[_0x4a9c('0x775')]*_0x567357));var _0xa32d5c=null!=this[_0x4a9c('0xdb')]?_0x5733e5(this[_0x4a9c('0xdb')]):0x0,_0x28308d=null!=this[_0x4a9c('0xdb')]?_0x19759e(this['moveDir']):0x0,_0x394d9c=_0x3d6a65(_0xa32d5c*_0xa32d5c+_0x28308d*_0x28308d);0x0!=_0x394d9c&&(_0xa32d5c/=_0x394d9c,_0x28308d/=_0x394d9c),_0xa32d5c&&(this[_0x4a9c('0x59f')]+=_0xa32d5c*this[_0x4a9c('0x244')]*_0x3c7d83*_0x567357),_0x28308d&&(this[_0x4a9c('0x63e')]+=_0x28308d*this['speed']*_0x3c7d83*_0x567357);}var _0x16580d;this[_0x4a9c('0x32')]=0x0,this[_0x4a9c('0x78d')]=!0x1,this['healCol']=0x0;for(var _0xceb4c3=_0x28c15f[_0x4a9c('0x63')](0x0,0x0,this[_0x4a9c('0x59f')]*_0x567357,this[_0x4a9c('0x63e')]*_0x567357),_0x568c04=Math[_0x4a9c('0xe8')](0x4,Math[_0x4a9c('0x790')](0x1,Math['round'](_0xceb4c3/0x28))),_0x21bd6f=0x1/_0x568c04,_0x513a39=0x0;_0x513a39<_0x568c04;++_0x513a39){this[_0x4a9c('0x59f')]&&(this['x']+=this[_0x4a9c('0x59f')]*_0x567357*_0x21bd6f),this['yVel']&&(this['y']+=this[_0x4a9c('0x63e')]*_0x567357*_0x21bd6f),_0x16580d=_0x490682[_0x4a9c('0x7ab')](this['x'],this['y'],this[_0x4a9c('0x6f4')]);for(var _0x548590=0x0;_0x548590<_0x16580d[_0x4a9c('0x3e1')];++_0x548590)for(var _0x5aae6a=0x0;_0x5aae6a<_0x16580d[_0x548590][_0x4a9c('0x3e1')];++_0x5aae6a)_0x16580d[_0x548590][_0x5aae6a][_0x4a9c('0x21')]&&_0x490682[_0x4a9c('0x690')](this,_0x16580d[_0x548590][_0x5aae6a],_0x21bd6f);}for(_0x513a39=(_0x4e9aa7=_0x12c166['indexOf'](this))+0x1;_0x513a39<_0x12c166[_0x4a9c('0x3e1')];++_0x513a39)_0x12c166[_0x513a39]!=this&&_0x12c166[_0x513a39][_0x4a9c('0x1b7')]&&_0x490682[_0x4a9c('0x690')](this,_0x12c166[_0x513a39]);if(this[_0x4a9c('0x59f')]&&(this[_0x4a9c('0x59f')]*=_0x3b4f7c(_0x4f20a8['playerDecel'],_0x567357),this[_0x4a9c('0x59f')]<=0.01&&this['xVel']>=-0.01&&(this[_0x4a9c('0x59f')]=0x0)),this[_0x4a9c('0x63e')]&&(this[_0x4a9c('0x63e')]*=_0x3b4f7c(_0x4f20a8[_0x4a9c('0x4fb')],_0x567357),this[_0x4a9c('0x63e')]<=0.01&&this[_0x4a9c('0x63e')]>=-0.01&&(this[_0x4a9c('0x63e')]=0x0)),this['x']-this[_0x4a9c('0x6f4')]<0x0?this['x']=this[_0x4a9c('0x6f4')]:this['x']+this['scale']>_0x4f20a8['mapScale']&&(this['x']=_0x4f20a8[_0x4a9c('0x1d6')]-this[_0x4a9c('0x6f4')]),this['y']-this[_0x4a9c('0x6f4')]<0x0?this['y']=this[_0x4a9c('0x6f4')]:this['y']+this['scale']>_0x4f20a8['mapScale']&&(this['y']=_0x4f20a8[_0x4a9c('0x1d6')]-this['scale']),this['buildIndex']<0x0)if(this[_0x4a9c('0xa7')][this[_0x4a9c('0x452')]]>0x0)this[_0x4a9c('0xa7')][this[_0x4a9c('0x452')]]-=_0x567357,this['gathering']=this[_0x4a9c('0x11b')];else if(this[_0x4a9c('0x18')]||this[_0x4a9c('0x55c')]){var _0x1ae0ba=!0x0;if(null!=_0x27b8f8['weapons'][this[_0x4a9c('0x452')]][_0x4a9c('0x29b')])this[_0x4a9c('0x29b')](_0x12c166);else if(null!=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x5c4')]&&this[_0x4a9c('0x24f')](_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]],this[_0x4a9c('0x3a0')]?this['skin'][_0x4a9c('0x3bd')]:0x0)){this[_0x4a9c('0x4b8')](_0x27b8f8['weapons'][this[_0x4a9c('0x452')]],this[_0x4a9c('0x3a0')]?this['skin'][_0x4a9c('0x3bd')]:0x0),this[_0x4a9c('0x353')]=0x0;var _0x4e9aa7=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x5c4')],_0x141b13=0x2*this[_0x4a9c('0x6f4')],_0x68eb1a=this[_0x4a9c('0x3a0')]&&this[_0x4a9c('0x3a0')][_0x4a9c('0x38d')]?this[_0x4a9c('0x3a0')][_0x4a9c('0x38d')]:0x1;_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x2ba')]&&(this[_0x4a9c('0x59f')]-=_0x27b8f8['weapons'][this[_0x4a9c('0x452')]][_0x4a9c('0x2ba')]*_0x5733e5(this['dir']),this[_0x4a9c('0x63e')]-=_0x27b8f8[_0x4a9c('0x53c')][this['weaponIndex']][_0x4a9c('0x2ba')]*_0x19759e(this['dir'])),_0x1f9b41[_0x4a9c('0x1d3')](this['x']+_0x141b13*_0x5733e5(this[_0x4a9c('0x638')]),this['y']+_0x141b13*_0x19759e(this[_0x4a9c('0x638')]),this[_0x4a9c('0x638')],_0x27b8f8[_0x4a9c('0x6f6')][_0x4e9aa7][_0x4a9c('0x2d3')]*_0x68eb1a,_0x27b8f8[_0x4a9c('0x6f6')][_0x4e9aa7][_0x4a9c('0x244')]*_0x68eb1a,_0x4e9aa7,this,null,this[_0x4a9c('0x32')]);}else _0x1ae0ba=!0x1;this[_0x4a9c('0x18')]=this[_0x4a9c('0x11b')],_0x1ae0ba&&(this[_0x4a9c('0xa7')][this[_0x4a9c('0x452')]]=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]]['speed']*(this[_0x4a9c('0x3a0')]&&this['skin']['atkSpd']||0x1));}}}},this[_0x4a9c('0x383')]=function(_0xa6e47e){this[_0x4a9c('0x2f1')][this[_0x4a9c('0x452')]]||(this[_0x4a9c('0x2f1')][this[_0x4a9c('0x452')]]=0x0),this[_0x4a9c('0x2f1')][this[_0x4a9c('0x452')]]+=_0xa6e47e;},this['earnXP']=function(_0x11818d){this[_0x4a9c('0x1fc')]<_0x4f20a8[_0x4a9c('0x1ba')]&&(this['XP']+=_0x11818d,this['XP']>=this[_0x4a9c('0x17f')]?(this['age']<_0x4f20a8['maxAge']?(this['age']++,this['XP']=0x0,this[_0x4a9c('0x17f')]*=1.2):this['XP']=this[_0x4a9c('0x17f')],this[_0x4a9c('0x323')]++,_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'16',this[_0x4a9c('0x323')],this['upgrAge']),_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'15',this['XP'],_0x28c15f[_0x4a9c('0x5f6')](this[_0x4a9c('0x17f')],0x1),this[_0x4a9c('0x1fc')])):_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'15',this['XP']));},this['changeHealth']=function(_0x20e932,_0x263507){if(_0x20e932>0x0&&this[_0x4a9c('0x528')]>=this[_0x4a9c('0xb3')])return!0x1;_0x20e932<0x0&&this['skin']&&(_0x20e932*=this['skin'][_0x4a9c('0x297')]||0x1),_0x20e932<0x0&&this[_0x4a9c('0x121')]&&(_0x20e932*=this['tail'][_0x4a9c('0x297')]||0x1),_0x20e932<0x0&&(this[_0x4a9c('0x428')]=Date[_0x4a9c('0x6a1')]()),this[_0x4a9c('0x528')]+=_0x20e932,this[_0x4a9c('0x528')]>this[_0x4a9c('0xb3')]&&(_0x20e932-=this['health']-this[_0x4a9c('0xb3')],this[_0x4a9c('0x528')]=this[_0x4a9c('0xb3')]),this[_0x4a9c('0x528')]<=0x0&&this[_0x4a9c('0xd4')](_0x263507);for(var _0x3918cb=0x0;_0x3918cb<_0x12c166['length'];++_0x3918cb)this[_0x4a9c('0x6eb')][_0x12c166[_0x3918cb]['id']]&&_0x1e10bd[_0x4a9c('0x1c2')](_0x12c166[_0x3918cb]['id'],'h',this[_0x4a9c('0x56f')],Math[_0x4a9c('0x33c')](this[_0x4a9c('0x528')]));return!_0x263507||!_0x263507[_0x4a9c('0x336')](this)||_0x263507==this&&_0x20e932<0x0||_0x1e10bd[_0x4a9c('0x1c2')](_0x263507['id'],'t',Math[_0x4a9c('0x33c')](this['x']),Math[_0x4a9c('0x33c')](this['y']),Math[_0x4a9c('0x33c')](-_0x20e932),0x1),!0x0;},this['kill']=function(_0x44602f){_0x44602f&&_0x44602f[_0x4a9c('0x1b7')]&&(_0x44602f['kills']++,_0x44602f[_0x4a9c('0x3a0')]&&_0x44602f[_0x4a9c('0x3a0')]['goldSteal']?_0x5efa68(_0x44602f,Math[_0x4a9c('0x33c')](this['points']/0x2)):_0x5efa68(_0x44602f,Math[_0x4a9c('0x33c')](0x64*this['age']*(_0x44602f[_0x4a9c('0x3a0')]&&_0x44602f[_0x4a9c('0x3a0')][_0x4a9c('0x716')]?_0x44602f['skin'][_0x4a9c('0x716')]:0x1))),_0x1e10bd[_0x4a9c('0x1c2')](_0x44602f['id'],'9',_0x4a9c('0x1c9'),_0x44602f['kills'],0x1)),this['alive']=!0x1,_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'11'),_0x5cae23();},this['addResource']=function(_0x555a2f,_0x4d7ef9,_0x2b52f1){!_0x2b52f1&&_0x4d7ef9>0x0&&this[_0x4a9c('0x383')](_0x4d7ef9),0x3==_0x555a2f?_0x5efa68(this,_0x4d7ef9,!0x0):(this[_0x4f20a8[_0x4a9c('0x3c')][_0x555a2f]]+=_0x4d7ef9,_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'9',_0x4f20a8[_0x4a9c('0x3c')][_0x555a2f],this[_0x4f20a8['resourceTypes'][_0x555a2f]],0x1));},this[_0x4a9c('0x79d')]=function(_0x4a4517,_0x1b3776){this[_0x4a9c('0x19b')][_0x4a4517]=this[_0x4a9c('0x19b')][_0x4a4517]||0x0,this[_0x4a9c('0x19b')][_0x4a4517]+=_0x1b3776,_0x1e10bd[_0x4a9c('0x1c2')](this['id'],'14',_0x4a4517,this[_0x4a9c('0x19b')][_0x4a4517]);},this[_0x4a9c('0x679')]=function(_0x4dafaf){var _0x3d8db9=this[_0x4a9c('0x6f4')]+_0x4dafaf['scale']+(_0x4dafaf[_0x4a9c('0x3ee')]||0x0),_0x22069a=this['x']+_0x3d8db9*_0x5733e5(this[_0x4a9c('0x638')]),_0x2b5aa2=this['y']+_0x3d8db9*_0x19759e(this[_0x4a9c('0x638')]);if(this[_0x4a9c('0x6ea')](_0x4dafaf)&&!(_0x4dafaf[_0x4a9c('0xb9')]&&this[_0x4a9c('0x3a0')]&&this[_0x4a9c('0x3a0')][_0x4a9c('0x7b9')])&&(_0x4dafaf[_0x4a9c('0xb9')]||_0x490682[_0x4a9c('0x29')](_0x22069a,_0x2b5aa2,_0x4dafaf['scale'],0.6,_0x4dafaf['id'],!0x1,this))){var _0x46dc8b=!0x1;if(_0x4dafaf['consume']){if(this[_0x4a9c('0x428')]){var _0x3c8f6a=Date[_0x4a9c('0x6a1')]()-this[_0x4a9c('0x428')];this[_0x4a9c('0x428')]=0x0,_0x3c8f6a<=0x78?(this['shameCount']++,this[_0x4a9c('0x720')]>=0x8&&(this['shameTimer']=0x7530,this['shameCount']=0x0)):(this[_0x4a9c('0x720')]-=0x2,this[_0x4a9c('0x720')]<=0x0&&(this[_0x4a9c('0x720')]=0x0));}this['shameTimer']<=0x0&&(_0x46dc8b=_0x4dafaf[_0x4a9c('0xb9')](this));}else _0x46dc8b=!0x0,_0x4dafaf[_0x4a9c('0x2ae')]['limit']&&this[_0x4a9c('0x79d')](_0x4dafaf[_0x4a9c('0x2ae')]['id'],0x1),_0x4dafaf[_0x4a9c('0x499')]&&(this[_0x4a9c('0x499')]+=_0x4dafaf['pps']),_0x490682[_0x4a9c('0x46a')](_0x490682[_0x4a9c('0xe7')][_0x4a9c('0x3e1')],_0x22069a,_0x2b5aa2,this[_0x4a9c('0x638')],_0x4dafaf[_0x4a9c('0x6f4')],_0x4dafaf[_0x4a9c('0x5d4')],_0x4dafaf,!0x1,this);_0x46dc8b&&(this[_0x4a9c('0x4b8')](_0x4dafaf),this[_0x4a9c('0x209')]=-0x1);}},this[_0x4a9c('0x24f')]=function(_0x7829d2,_0x5b9b4c){for(var _0x221aea=0x0;_0x221aea<_0x7829d2[_0x4a9c('0x400')][_0x4a9c('0x3e1')];){if(this[_0x7829d2[_0x4a9c('0x400')][_0x221aea]]<Math[_0x4a9c('0x33c')](_0x7829d2[_0x4a9c('0x400')][_0x221aea+0x1]*(_0x5b9b4c||0x1)))return!0x1;_0x221aea+=0x2;}return!0x0;},this[_0x4a9c('0x4b8')]=function(_0x34df12,_0x3a4d88){if(!_0x4f20a8[_0x4a9c('0x5a9')])for(var _0x51485c=0x0;_0x51485c<_0x34df12[_0x4a9c('0x400')][_0x4a9c('0x3e1')];)this[_0x4a9c('0x20a')](_0x4f20a8[_0x4a9c('0x3c')][_0x4a9c('0x312')](_0x34df12[_0x4a9c('0x400')][_0x51485c]),-Math[_0x4a9c('0x33c')](_0x34df12[_0x4a9c('0x400')][_0x51485c+0x1]*(_0x3a4d88||0x1))),_0x51485c+=0x2;},this[_0x4a9c('0x6ea')]=function(_0x5a7f44){return!!_0x4f20a8[_0x4a9c('0x5a9')]||!(_0x5a7f44[_0x4a9c('0x2ae')][_0x4a9c('0x791')]&&this['itemCounts'][_0x5a7f44[_0x4a9c('0x2ae')]['id']]>=_0x5a7f44[_0x4a9c('0x2ae')][_0x4a9c('0x791')])&&this[_0x4a9c('0x24f')](_0x5a7f44);},this['gather']=function(){this['noMovTimer']=0x0,this[_0x4a9c('0x32a')]-=_0x27b8f8[_0x4a9c('0x53c')][this['weaponIndex']][_0x4a9c('0x5f8')]||0.3,this[_0x4a9c('0x32a')]<0x0&&(this[_0x4a9c('0x32a')]=0x0);for(var _0x5f221f,_0x37cf64,_0x2c228b,_0x335a69=_0x4f20a8[_0x4a9c('0x2cd')](this),_0x5479a9=_0x335a69['poison'],_0x197511=_0x335a69['val'],_0x1a1b41={},_0x25cf07=_0x490682[_0x4a9c('0x7ab')](this['x'],this['y'],_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x2d3')]),_0x56ac48=0x0;_0x56ac48<_0x25cf07[_0x4a9c('0x3e1')];++_0x56ac48)for(var _0x194150=0x0;_0x194150<_0x25cf07[_0x56ac48][_0x4a9c('0x3e1')];++_0x194150)if((_0x37cf64=_0x25cf07[_0x56ac48][_0x194150])[_0x4a9c('0x21')]&&!_0x37cf64[_0x4a9c('0x3c6')]&&!_0x1a1b41[_0x37cf64[_0x4a9c('0x56f')]]&&_0x37cf64[_0x4a9c('0x612')](this)&&_0x28c15f[_0x4a9c('0x63')](this['x'],this['y'],_0x37cf64['x'],_0x37cf64['y'])-_0x37cf64[_0x4a9c('0x6f4')]<=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]]['range']&&(_0x5f221f=_0x28c15f[_0x4a9c('0x721')](_0x37cf64['x'],_0x37cf64['y'],this['x'],this['y']),_0x28c15f['getAngleDist'](_0x5f221f,this[_0x4a9c('0x638')])<=_0x4f20a8[_0x4a9c('0x2b6')])){if(_0x1a1b41[_0x37cf64[_0x4a9c('0x56f')]]=0x1,_0x37cf64[_0x4a9c('0x528')]){if(_0x37cf64[_0x4a9c('0x21e')](-_0x27b8f8['weapons'][this[_0x4a9c('0x452')]][_0x4a9c('0x90')]*_0x197511*(_0x27b8f8[_0x4a9c('0x53c')][this['weaponIndex']]['sDmg']||0x1)*(this[_0x4a9c('0x3a0')]&&this[_0x4a9c('0x3a0')][_0x4a9c('0x69')]?this['skin'][_0x4a9c('0x69')]:0x1),this)){for(var _0x4204e4=0x0;_0x4204e4<_0x37cf64[_0x4a9c('0x400')]['length'];)this[_0x4a9c('0x20a')](_0x4f20a8[_0x4a9c('0x3c')][_0x4a9c('0x312')](_0x37cf64[_0x4a9c('0x400')][_0x4204e4]),_0x37cf64[_0x4a9c('0x400')][_0x4204e4+0x1]),_0x4204e4+=0x2;_0x490682[_0x4a9c('0xd')](_0x37cf64);}}else{this[_0x4a9c('0x647')](0x4*_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x29b')]);var _0x126ac2=_0x27b8f8[_0x4a9c('0x53c')][this['weaponIndex']]['gather']+(0x3==_0x37cf64['type']?0x4:0x0);this[_0x4a9c('0x3a0')]&&this[_0x4a9c('0x3a0')][_0x4a9c('0x6c8')]&&this[_0x4a9c('0x20a')](0x3,0x1),this['addResource'](_0x37cf64[_0x4a9c('0x5d4')],_0x126ac2);}_0x2c228b=!0x0,_0x490682[_0x4a9c('0x12d')](_0x37cf64,_0x5f221f);}for(_0x194150=0x0;_0x194150<_0x12c166['length']+_0x43cd16[_0x4a9c('0x3e1')];++_0x194150)if((_0x37cf64=_0x12c166[_0x194150]||_0x43cd16[_0x194150-_0x12c166['length']])!=this&&_0x37cf64['alive']&&(!_0x37cf64[_0x4a9c('0x4c1')]||_0x37cf64[_0x4a9c('0x4c1')]!=this['team'])&&_0x28c15f[_0x4a9c('0x63')](this['x'],this['y'],_0x37cf64['x'],_0x37cf64['y'])-1.8*_0x37cf64[_0x4a9c('0x6f4')]<=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x2d3')]&&(_0x5f221f=_0x28c15f[_0x4a9c('0x721')](_0x37cf64['x'],_0x37cf64['y'],this['x'],this['y']),_0x28c15f[_0x4a9c('0x426')](_0x5f221f,this[_0x4a9c('0x638')])<=_0x4f20a8[_0x4a9c('0x2b6')])){var _0xefd212=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]]['steal'];_0xefd212&&_0x37cf64[_0x4a9c('0x20a')]&&(_0xefd212=Math[_0x4a9c('0xe8')](_0x37cf64[_0x4a9c('0xfc')]||0x0,_0xefd212),this['addResource'](0x3,_0xefd212),_0x37cf64['addResource'](0x3,-_0xefd212));var _0x45b0f2=_0x197511;null!=_0x37cf64[_0x4a9c('0x452')]&&_0x27b8f8[_0x4a9c('0x53c')][_0x37cf64[_0x4a9c('0x452')]][_0x4a9c('0x676')]&&_0x28c15f['getAngleDist'](_0x5f221f+Math['PI'],_0x37cf64[_0x4a9c('0x638')])<=_0x4f20a8[_0x4a9c('0x656')]&&(_0x45b0f2=_0x27b8f8[_0x4a9c('0x53c')][_0x37cf64[_0x4a9c('0x452')]][_0x4a9c('0x676')]);var _0x25476c=_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x90')]*(this[_0x4a9c('0x3a0')]&&this['skin'][_0x4a9c('0x472')]?this[_0x4a9c('0x3a0')][_0x4a9c('0x472')]:0x1)*(this[_0x4a9c('0x121')]&&this[_0x4a9c('0x121')][_0x4a9c('0x472')]?this[_0x4a9c('0x121')]['dmgMultO']:0x1),_0x5026ef=0.3*(_0x37cf64[_0x4a9c('0x70f')]||0x1)+(_0x27b8f8[_0x4a9c('0x53c')][this[_0x4a9c('0x452')]][_0x4a9c('0x669')]||0x0);_0x37cf64[_0x4a9c('0x59f')]+=_0x5026ef*_0x5733e5(_0x5f221f),_0x37cf64[_0x4a9c('0x63e')]+=_0x5026ef*_0x19759e(_0x5f221f),this[_0x4a9c('0x3a0')]&&this['skin'][_0x4a9c('0x451')]&&this['changeHealth'](_0x25476c*_0x45b0f2*this[_0x4a9c('0x3a0')][_0x4a9c('0x451')],this),this[_0x4a9c('0x121')]&&this[_0x4a9c('0x121')]['healD']&&this[_0x4a9c('0x21e')](_0x25476c*_0x45b0f2*this['tail'][_0x4a9c('0x451')],this),_0x37cf64[_0x4a9c('0x3a0')]&&_0x37cf64['skin'][_0x4a9c('0x90')]&&0x1==_0x45b0f2&&this[_0x4a9c('0x21e')](-_0x25476c*_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x90')],_0x37cf64),_0x37cf64[_0x4a9c('0x121')]&&_0x37cf64['tail'][_0x4a9c('0x90')]&&0x1==_0x45b0f2&&this[_0x4a9c('0x21e')](-_0x25476c*_0x37cf64[_0x4a9c('0x121')][_0x4a9c('0x90')],_0x37cf64),!(_0x37cf64[_0x4a9c('0x4f5')]&&this[_0x4a9c('0x3a0')]&&this[_0x4a9c('0x3a0')][_0x4a9c('0x5c0')])||_0x37cf64[_0x4a9c('0x3a0')]&&_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x141')]||(_0x37cf64[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=this[_0x4a9c('0x3a0')][_0x4a9c('0x5c0')],_0x37cf64[_0x4a9c('0x4f5')][_0x4a9c('0x1a0')]=this['skin'][_0x4a9c('0x387')]||0x1,_0x37cf64[_0x4a9c('0x4f5')][_0x4a9c('0x40b')]=this),!_0x37cf64['dmgOverTime']||!_0x5479a9||_0x37cf64[_0x4a9c('0x3a0')]&&_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x141')]||(_0x37cf64[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=0x5,_0x37cf64[_0x4a9c('0x4f5')]['time']=0x5,_0x37cf64[_0x4a9c('0x4f5')]['doer']=this),_0x37cf64[_0x4a9c('0x3a0')]&&_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x155')]&&(this[_0x4a9c('0x59f')]-=_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x155')]*_0x5733e5(_0x5f221f),this[_0x4a9c('0x63e')]-=_0x37cf64[_0x4a9c('0x3a0')][_0x4a9c('0x155')]*_0x19759e(_0x5f221f)),_0x37cf64[_0x4a9c('0x21e')](-_0x25476c*_0x45b0f2,this,this);}this[_0x4a9c('0x5aa')](_0x2c228b?0x1:0x0);},this[_0x4a9c('0x5aa')]=function(_0x2ef9a1){for(var _0x18aa27=0x0;_0x18aa27<_0x12c166[_0x4a9c('0x3e1')];++_0x18aa27)this[_0x4a9c('0x6eb')][_0x12c166[_0x18aa27]['id']]&&this[_0x4a9c('0x336')](_0x12c166[_0x18aa27])&&_0x1e10bd[_0x4a9c('0x1c2')](_0x12c166[_0x18aa27]['id'],'7',this[_0x4a9c('0x56f')],_0x2ef9a1?0x1:0x0,this[_0x4a9c('0x452')]);};var _0x366415=0x0,_0x41b188=0x0;this[_0x4a9c('0x1f8')]=function(_0x1dd4d0){this[_0x4a9c('0x124')]>0x0&&(this['animTime']-=_0x1dd4d0,this['animTime']<=0x0?(this[_0x4a9c('0x124')]=0x0,this[_0x4a9c('0x3eb')]=0x0,_0x366415=0x0,_0x41b188=0x0):0x0==_0x41b188?(_0x366415+=_0x1dd4d0/(this[_0x4a9c('0x6cf')]*_0x4f20a8['hitReturnRatio']),this[_0x4a9c('0x3eb')]=_0x28c15f['lerp'](0x0,this[_0x4a9c('0x199')],Math[_0x4a9c('0xe8')](0x1,_0x366415)),_0x366415>=0x1&&(_0x366415=0x1,_0x41b188=0x1)):(_0x366415-=_0x1dd4d0/(this[_0x4a9c('0x6cf')]*(0x1-_0x4f20a8[_0x4a9c('0x34b')])),this[_0x4a9c('0x3eb')]=_0x28c15f[_0x4a9c('0x745')](0x0,this[_0x4a9c('0x199')],Math[_0x4a9c('0x790')](0x0,_0x366415))));},this[_0x4a9c('0x1c0')]=function(_0x2ffb0c,_0x30ab6c){this['animTime']=this[_0x4a9c('0x6cf')]=_0x27b8f8[_0x4a9c('0x53c')][_0x30ab6c][_0x4a9c('0x244')],this[_0x4a9c('0x199')]=_0x2ffb0c?-_0x4f20a8['hitAngle']:-Math['PI'],_0x366415=0x0,_0x41b188=0x0;},this[_0x4a9c('0x336')]=function(_0x4af863){if(!_0x4af863)return!0x1;if(_0x4af863[_0x4a9c('0x3a0')]&&_0x4af863[_0x4a9c('0x3a0')][_0x4a9c('0xc4')]&&_0x4af863[_0x4a9c('0x353')]>=_0x4af863[_0x4a9c('0x3a0')][_0x4a9c('0xc4')])return!0x1;var _0x2a01fc=_0x5342d0(_0x4af863['x']-this['x'])-_0x4af863[_0x4a9c('0x6f4')],_0x2a1293=_0x5342d0(_0x4af863['y']-this['y'])-_0x4af863[_0x4a9c('0x6f4')];return _0x2a01fc<=_0x4f20a8[_0x4a9c('0x20e')]/0x2*1.3&&_0x2a1293<=_0x4f20a8[_0x4a9c('0x55e')]/0x2*1.3;};};},function(_0x2322e4,_0x13db66,_0x282b2c){const _0x195d41=_0x282b2c(0x32)[_0x4a9c('0x704')],_0x59d451=_0x282b2c(0x33)[_0x4a9c('0x7a0')];_0x2322e4[_0x4a9c('0x14f')]=class{constructor(_0x1bf838={}){Object[_0x4a9c('0x17c')](this,{'list':_0x1bf838[_0x4a9c('0x264')]&&[]||Array[_0x4a9c('0x216')]['concat'][_0x4a9c('0x635')](_0x195d41,[_0x59d451,_0x1bf838['list']||[]]),'exclude':_0x1bf838[_0x4a9c('0x521')]||[],'placeHolder':_0x1bf838[_0x4a9c('0x7f')]||'*','regex':_0x1bf838[_0x4a9c('0x30b')]||/[^a-zA-Z0-9|\$|\@]|\^/g,'replaceRegex':_0x1bf838['replaceRegex']||/\w/g});}[_0x4a9c('0x2be')](_0x19045f){return this[_0x4a9c('0x7f5')][_0x4a9c('0x205')](_0x2bef5f=>{const _0x491df9=new RegExp('\x5cb'+_0x2bef5f[_0x4a9c('0x4e5')](/(\W)/g,_0x4a9c('0x4a8'))+'\x5cb','gi');return!this['exclude'][_0x4a9c('0x7d8')](_0x2bef5f[_0x4a9c('0x5c2')]())&&_0x491df9[_0x4a9c('0x504')](_0x19045f);})[_0x4a9c('0x3e1')]>0x0||!0x1;}[_0x4a9c('0x65')](_0x2401ca){return _0x2401ca['replace'](this['regex'],'')[_0x4a9c('0x4e5')](this[_0x4a9c('0x189')],this[_0x4a9c('0x7f')]);}[_0x4a9c('0x1f2')](_0x23b448){return _0x23b448['split'](/\b/)[_0x4a9c('0x46f')](_0x22e357=>this[_0x4a9c('0x2be')](_0x22e357)?this[_0x4a9c('0x65')](_0x22e357):_0x22e357)[_0x4a9c('0x64d')]('');}[_0x4a9c('0x6d0')](){let _0x5977d8=Array[_0x4a9c('0x34a')](arguments);this[_0x4a9c('0x7f5')][_0x4a9c('0x2d2')](..._0x5977d8),_0x5977d8[_0x4a9c('0x46f')](_0x55a29f=>_0x55a29f[_0x4a9c('0x5c2')]())[_0x4a9c('0x781')](_0x57bf0c=>{this['exclude'][_0x4a9c('0x7d8')](_0x57bf0c)&&this['exclude'][_0x4a9c('0x7d5')](this[_0x4a9c('0x521')][_0x4a9c('0x312')](_0x57bf0c),0x1);});}['removeWords'](){this[_0x4a9c('0x521')][_0x4a9c('0x2d2')](...Array[_0x4a9c('0x34a')](arguments)[_0x4a9c('0x46f')](_0x523a2f=>_0x523a2f[_0x4a9c('0x5c2')]()));}};},function(_0x4deb53){_0x4deb53['exports']={'words':['ahole',_0x4a9c('0x61d'),_0x4a9c('0x242'),'ash0les',_0x4a9c('0x7c'),_0x4a9c('0x613'),_0x4a9c('0x59a'),_0x4a9c('0x559'),_0x4a9c('0x97'),_0x4a9c('0x91'),_0x4a9c('0x334'),_0x4a9c('0x7da'),_0x4a9c('0x527'),_0x4a9c('0x2e6'),_0x4a9c('0x78f'),_0x4a9c('0x5b8'),_0x4a9c('0x446'),_0x4a9c('0x21d'),_0x4a9c('0x215'),_0x4a9c('0x34c'),_0x4a9c('0xb1'),_0x4a9c('0x492'),'bitch','bitches',_0x4a9c('0x44d'),_0x4a9c('0x432'),_0x4a9c('0xda'),_0x4a9c('0x496'),_0x4a9c('0x228'),_0x4a9c('0x1ea'),_0x4a9c('0x10a'),'Carpet\x20Muncher',_0x4a9c('0x4a'),'cawks','Clit',_0x4a9c('0xe0'),_0x4a9c('0x6a8'),_0x4a9c('0x76d'),_0x4a9c('0x512'),'cock-head',_0x4a9c('0x589'),_0x4a9c('0x23c'),'cock-sucker','crap',_0x4a9c('0x197'),_0x4a9c('0x550'),_0x4a9c('0x599'),_0x4a9c('0x5c5'),_0x4a9c('0x279'),_0x4a9c('0x70c'),_0x4a9c('0x641'),_0x4a9c('0x321'),'dildos',_0x4a9c('0x165'),_0x4a9c('0x51f'),'dominatricks',_0x4a9c('0x267'),_0x4a9c('0x574'),_0x4a9c('0x66b'),_0x4a9c('0x3e2'),_0x4a9c('0x379'),_0x4a9c('0x662'),_0x4a9c('0x1e5'),_0x4a9c('0x296'),'faget',_0x4a9c('0x1a6'),_0x4a9c('0x196'),_0x4a9c('0x4'),'fagg0t',_0x4a9c('0xc2'),_0x4a9c('0x84'),_0x4a9c('0x2c3'),_0x4a9c('0x174'),_0x4a9c('0x570'),_0x4a9c('0x767'),_0x4a9c('0x147'),'fuck',_0x4a9c('0x774'),_0x4a9c('0x342'),_0x4a9c('0x7fb'),_0x4a9c('0x1a2'),_0x4a9c('0x66c'),_0x4a9c('0x333'),_0x4a9c('0xf1'),_0x4a9c('0x1d9'),_0x4a9c('0x13e'),_0x4a9c('0x5ad'),'Fukk',_0x4a9c('0x5f4'),_0x4a9c('0x4f0'),_0x4a9c('0x6ef'),_0x4a9c('0x35a'),_0x4a9c('0x71a'),'God-damned','h00r',_0x4a9c('0x179'),_0x4a9c('0x3de'),_0x4a9c('0x7a9'),'hoar',_0x4a9c('0x37e'),'hoore',_0x4a9c('0x62b'),'jap','japs','jerk-off',_0x4a9c('0x159'),_0x4a9c('0x1b3'),'jizm',_0x4a9c('0x41f'),_0x4a9c('0x4ce'),'knobs',_0x4a9c('0x1da'),'kunt','kunts',_0x4a9c('0x5ba'),_0x4a9c('0x2dc'),'Lipshits',_0x4a9c('0x6c7'),_0x4a9c('0x82'),_0x4a9c('0x4b9'),_0x4a9c('0x2db'),_0x4a9c('0x3d1'),_0x4a9c('0x7af'),_0x4a9c('0x420'),_0x4a9c('0x1ce'),'masterbates',_0x4a9c('0x673'),_0x4a9c('0x83'),_0x4a9c('0x2fd'),'Motha\x20Fukker',_0x4a9c('0x7b0'),_0x4a9c('0x534'),_0x4a9c('0x70'),_0x4a9c('0x47c'),'Mother\x20Fukker',_0x4a9c('0x683'),_0x4a9c('0x1bf'),_0x4a9c('0x652'),'Mutha\x20Fuker',_0x4a9c('0x110'),_0x4a9c('0x2c4'),_0x4a9c('0x74d'),_0x4a9c('0x79f'),_0x4a9c('0x747'),_0x4a9c('0x486'),_0x4a9c('0x549'),_0x4a9c('0x35f'),'orafis',_0x4a9c('0x459'),_0x4a9c('0x4e2'),_0x4a9c('0x70d'),_0x4a9c('0x3ae'),'orifice','orifiss',_0x4a9c('0x6c3'),_0x4a9c('0x5ae'),'packy','paki',_0x4a9c('0xa2'),_0x4a9c('0x722'),_0x4a9c('0x402'),_0x4a9c('0x622'),'peeenusss',_0x4a9c('0x2a2'),'peinus',_0x4a9c('0x300'),_0x4a9c('0x7d7'),_0x4a9c('0x53f'),'penis-breath',_0x4a9c('0x42'),_0x4a9c('0x759'),_0x4a9c('0x7f0'),_0x4a9c('0x118'),_0x4a9c('0x7ae'),_0x4a9c('0x49b'),_0x4a9c('0x5c1'),_0x4a9c('0x479'),_0x4a9c('0x3b4'),_0x4a9c('0x289'),_0x4a9c('0x562'),'pr1c',_0x4a9c('0x39'),_0x4a9c('0x53'),_0x4a9c('0x556'),_0x4a9c('0x335'),'pussy','puuke','puuker',_0x4a9c('0x646'),'queers',_0x4a9c('0x498'),'qweers',_0x4a9c('0x5d7'),_0x4a9c('0x630'),_0x4a9c('0x639'),_0x4a9c('0x332'),_0x4a9c('0x1d'),_0x4a9c('0x372'),_0x4a9c('0x6c4'),_0x4a9c('0x583'),_0x4a9c('0x31b'),_0x4a9c('0x1df'),'sex','sexy',_0x4a9c('0x117'),_0x4a9c('0x3f4'),'sh1ter','sh1ts','sh1tter',_0x4a9c('0x6a7'),_0x4a9c('0x1dd'),_0x4a9c('0x588'),_0x4a9c('0x1d8'),'Shitty',_0x4a9c('0x305'),_0x4a9c('0x438'),'Shyt',_0x4a9c('0x474'),_0x4a9c('0x260'),_0x4a9c('0x3d2'),_0x4a9c('0x39c'),_0x4a9c('0x3ac'),'skankee','skankey',_0x4a9c('0x5e5'),_0x4a9c('0x5c3'),_0x4a9c('0x2e3'),_0x4a9c('0x551'),_0x4a9c('0x356'),_0x4a9c('0x494'),_0x4a9c('0x698'),_0x4a9c('0x1e4'),_0x4a9c('0x3c5'),_0x4a9c('0x5da'),_0x4a9c('0x58'),_0x4a9c('0xf8'),'vagiina','vagina',_0x4a9c('0x52e'),_0x4a9c('0x7c7'),_0x4a9c('0x1b9'),_0x4a9c('0x365'),_0x4a9c('0x1a1'),_0x4a9c('0x7d'),'wh0re',_0x4a9c('0x2af'),_0x4a9c('0x271'),'xxx','b!+ch',_0x4a9c('0x682'),_0x4a9c('0x78b'),_0x4a9c('0x7eb'),_0x4a9c('0x67d'),_0x4a9c('0x62'),_0x4a9c('0x1dd'),_0x4a9c('0x613'),_0x4a9c('0x334'),_0x4a9c('0x634'),'b17ch',_0x4a9c('0x6e7'),_0x4a9c('0x446'),_0x4a9c('0x2ac'),_0x4a9c('0x509'),_0x4a9c('0x6da'),_0x4a9c('0x228'),_0x4a9c('0x4a'),_0x4a9c('0x7f9'),_0x4a9c('0x660'),_0x4a9c('0x68e'),_0x4a9c('0x76d'),_0x4a9c('0x197'),_0x4a9c('0x550'),'dildo',_0x4a9c('0x24a'),_0x4a9c('0x30d'),_0x4a9c('0x21b'),'fcuk',_0x4a9c('0x333'),_0x4a9c('0x6bf'),_0x4a9c('0x263'),'hore',_0x4a9c('0xcc'),_0x4a9c('0x4eb'),_0x4a9c('0x89'),'l3i+ch',_0x4a9c('0x12'),_0x4a9c('0x2a8'),_0x4a9c('0x71f'),_0x4a9c('0x563'),_0x4a9c('0x5d6'),_0x4a9c('0x1f'),'mofo',_0x4a9c('0x616'),_0x4a9c('0x52b'),_0x4a9c('0x36b'),_0x4a9c('0x4a6'),_0x4a9c('0x44f'),_0x4a9c('0x610'),_0x4a9c('0x556'),_0x4a9c('0x620'),'scrotum',_0x4a9c('0x618'),_0x4a9c('0x2b9'),_0x4a9c('0x711'),_0x4a9c('0x50a'),_0x4a9c('0x551'),_0x4a9c('0x12f'),_0x4a9c('0x222'),'tits',_0x4a9c('0x6de'),_0x4a9c('0x3b8'),_0x4a9c('0x13'),_0x4a9c('0x282'),_0x4a9c('0x311'),_0x4a9c('0x489'),_0x4a9c('0x62a'),_0x4a9c('0x62b'),_0x4a9c('0x51d'),'whoar',_0x4a9c('0x2af'),_0x4a9c('0x4e3'),_0x4a9c('0x488'),_0x4a9c('0x78a'),_0x4a9c('0x6be'),_0x4a9c('0x2'),_0x4a9c('0x535'),_0x4a9c('0x4ca'),_0x4a9c('0x236'),_0x4a9c('0x12e'),'ayir',_0x4a9c('0x261'),_0x4a9c('0x9d'),_0x4a9c('0x22a'),_0x4a9c('0x76'),'butt-pirate',_0x4a9c('0x6ae'),_0x4a9c('0x5eb'),'chraa',_0x4a9c('0x278'),_0x4a9c('0x558'),_0x4a9c('0x120'),_0x4a9c('0x805'),'daygo',_0x4a9c('0x601'),_0x4a9c('0x72e'),'dike*','dupa',_0x4a9c('0x14a'),_0x4a9c('0x395'),_0x4a9c('0x151'),_0x4a9c('0x280'),'enculer',_0x4a9c('0x112'),_0x4a9c('0xef'),_0x4a9c('0x59d'),_0x4a9c('0x1dc'),_0x4a9c('0x773'),_0x4a9c('0x304'),'Felcher',_0x4a9c('0x7a4'),_0x4a9c('0x1d0'),_0x4a9c('0x6b9'),_0x4a9c('0x36a'),'Fotze','Fu(*','fuk*',_0x4a9c('0x340'),'gook',_0x4a9c('0x58f'),_0x4a9c('0x537'),'h4x0r',_0x4a9c('0x26c'),'helvete','hoer*',_0x4a9c('0x56a'),_0x4a9c('0x11f'),'hui',_0x4a9c('0x5b4'),_0x4a9c('0x41f'),'kanker*',_0x4a9c('0x43d'),'klootzak','kraut',_0x4a9c('0x27a'),_0x4a9c('0x5d'),_0x4a9c('0x45'),_0x4a9c('0x57e'),_0x4a9c('0x369'),_0x4a9c('0x1ef'),_0x4a9c('0x54a'),_0x4a9c('0x64'),'mamhoon',_0x4a9c('0x7f6'),_0x4a9c('0x68'),_0x4a9c('0x62c'),_0x4a9c('0x3e'),_0x4a9c('0x1e'),_0x4a9c('0x72f'),_0x4a9c('0x6b8'),_0x4a9c('0x3f9'),_0x4a9c('0x2e9'),_0x4a9c('0x4c5'),_0x4a9c('0x6c0'),'orospu',_0x4a9c('0x4ef'),_0x4a9c('0x508'),_0x4a9c('0x2d7'),'pierdol*',_0x4a9c('0x3ab'),_0x4a9c('0x416'),_0x4a9c('0x15b'),_0x4a9c('0x7d6'),_0x4a9c('0x184'),_0x4a9c('0x3a2'),_0x4a9c('0x299'),_0x4a9c('0x6df'),_0x4a9c('0x72'),'preteen',_0x4a9c('0x34d'),_0x4a9c('0x5d5'),_0x4a9c('0x10e'),_0x4a9c('0x275'),_0x4a9c('0x5dc'),'queef*','rautenberg','schaffer',_0x4a9c('0xc8'),_0x4a9c('0x56c'),'schmuck',_0x4a9c('0x572'),_0x4a9c('0x2ab'),_0x4a9c('0x238'),_0x4a9c('0x314'),_0x4a9c('0x68b'),_0x4a9c('0x401'),'skribz',_0x4a9c('0x590'),_0x4a9c('0x585'),_0x4a9c('0x48d'),_0x4a9c('0x1de'),_0x4a9c('0x598'),_0x4a9c('0x47a'),_0x4a9c('0x164'),_0x4a9c('0x1fd'),_0x4a9c('0x3b7'),'twat',_0x4a9c('0x3a5'),_0x4a9c('0x4d'),_0x4a9c('0x2ea'),_0x4a9c('0x4c'),'wop*',_0x4a9c('0x708'),_0x4a9c('0x391')]};},function(_0x49434c,_0x533d08,_0x2c31fe){_0x49434c[_0x4a9c('0x14f')]={'object':_0x2c31fe(0x34),'array':_0x2c31fe(0x35),'regex':_0x2c31fe(0x36)};},function(_0x38c64a,_0x315aea){_0x38c64a[_0x4a9c('0x14f')]={'4r5e':0x1,'5h1t':0x1,'5hit':0x1,'a55':0x1,'anal':0x1,'anus':0x1,'ar5e':0x1,'arrse':0x1,'arse':0x1,'ass':0x1,'ass-fucker':0x1,'asses':0x1,'assfucker':0x1,'assfukka':0x1,'asshole':0x1,'assholes':0x1,'asswhole':0x1,'a_s_s':0x1,'b!tch':0x1,'b00bs':0x1,'b17ch':0x1,'b1tch':0x1,'ballbag':0x1,'balls':0x1,'ballsack':0x1,'bastard':0x1,'beastial':0x1,'beastiality':0x1,'bellend':0x1,'bestial':0x1,'bestiality':0x1,'bi+ch':0x1,'biatch':0x1,'bitch':0x1,'bitcher':0x1,'bitchers':0x1,'bitches':0x1,'bitchin':0x1,'bitching':0x1,'bloody':0x1,'blow\x20job':0x1,'blowjob':0x1,'blowjobs':0x1,'boiolas':0x1,'bollock':0x1,'bollok':0x1,'boner':0x1,'boob':0x1,'boobs':0x1,'booobs':0x1,'boooobs':0x1,'booooobs':0x1,'booooooobs':0x1,'breasts':0x1,'buceta':0x1,'bugger':0x1,'bum':0x1,'bunny\x20fucker':0x1,'butt':0x1,'butthole':0x1,'buttmuch':0x1,'buttplug':0x1,'c0ck':0x1,'c0cksucker':0x1,'carpet\x20muncher':0x1,'cawk':0x1,'chink':0x1,'cipa':0x1,'cl1t':0x1,'clit':0x1,'clitoris':0x1,'clits':0x1,'cnut':0x1,'cock':0x1,'cock-sucker':0x1,'cockface':0x1,'cockhead':0x1,'cockmunch':0x1,'cockmuncher':0x1,'cocks':0x1,'cocksuck':0x1,'cocksucked':0x1,'cocksucker':0x1,'cocksucking':0x1,'cocksucks':0x1,'cocksuka':0x1,'cocksukka':0x1,'cok':0x1,'cokmuncher':0x1,'coksucka':0x1,'coon':0x1,'cox':0x1,'crap':0x1,'cum':0x1,'cummer':0x1,'cumming':0x1,'cums':0x1,'cumshot':0x1,'cunilingus':0x1,'cunillingus':0x1,'cunnilingus':0x1,'cunt':0x1,'cuntlick':0x1,'cuntlicker':0x1,'cuntlicking':0x1,'cunts':0x1,'cyalis':0x1,'cyberfuc':0x1,'cyberfuck':0x1,'cyberfucked':0x1,'cyberfucker':0x1,'cyberfuckers':0x1,'cyberfucking':0x1,'d1ck':0x1,'damn':0x1,'dick':0x1,'dickhead':0x1,'dildo':0x1,'dildos':0x1,'dink':0x1,'dinks':0x1,'dirsa':0x1,'dlck':0x1,'dog-fucker':0x1,'doggin':0x1,'dogging':0x1,'donkeyribber':0x1,'doosh':0x1,'duche':0x1,'dyke':0x1,'ejaculate':0x1,'ejaculated':0x1,'ejaculates':0x1,'ejaculating':0x1,'ejaculatings':0x1,'ejaculation':0x1,'ejakulate':0x1,'f\x20u\x20c\x20k':0x1,'f\x20u\x20c\x20k\x20e\x20r':0x1,'f4nny':0x1,'fag':0x1,'fagging':0x1,'faggitt':0x1,'faggot':0x1,'faggs':0x1,'fagot':0x1,'fagots':0x1,'fags':0x1,'fanny':0x1,'fannyflaps':0x1,'fannyfucker':0x1,'fanyy':0x1,'fatass':0x1,'fcuk':0x1,'fcuker':0x1,'fcuking':0x1,'feck':0x1,'fecker':0x1,'felching':0x1,'fellate':0x1,'fellatio':0x1,'fingerfuck':0x1,'fingerfucked':0x1,'fingerfucker':0x1,'fingerfuckers':0x1,'fingerfucking':0x1,'fingerfucks':0x1,'fistfuck':0x1,'fistfucked':0x1,'fistfucker':0x1,'fistfuckers':0x1,'fistfucking':0x1,'fistfuckings':0x1,'fistfucks':0x1,'flange':0x1,'fook':0x1,'fooker':0x1,'fuck':0x1,'fucka':0x1,'fucked':0x1,'fucker':0x1,'fuckers':0x1,'fuckhead':0x1,'fuckheads':0x1,'fuckin':0x1,'fucking':0x1,'fuckings':0x1,'fuckingshitmotherfucker':0x1,'fuckme':0x1,'fucks':0x1,'fuckwhit':0x1,'fuckwit':0x1,'fudge\x20packer':0x1,'fudgepacker':0x1,'fuk':0x1,'fuker':0x1,'fukker':0x1,'fukkin':0x1,'fuks':0x1,'fukwhit':0x1,'fukwit':0x1,'fux':0x1,'fux0r':0x1,'f_u_c_k':0x1,'gangbang':0x1,'gangbanged':0x1,'gangbangs':0x1,'gay':0x1,'gaysex':0x1,'goatse':0x1,'God':0x1,'god-dam':0x1,'god-damned':0x1,'goddamn':0x1,'goddamned':0x1,'hardcoresex':0x1,'hell':0x1,'heshe':0x1,'hoar':0x1,'hoare':0x1,'hoer':0x1,'homo':0x1,'hore':0x1,'horniest':0x1,'horny':0x1,'hotsex':0x1,'jack-off':0x1,'jackoff':0x1,'jap':0x1,'jerk-off':0x1,'jism':0x1,'jiz':0x1,'jizm':0x1,'jizz':0x1,'kawk':0x1,'knob':0x1,'knobead':0x1,'knobed':0x1,'knobend':0x1,'knobhead':0x1,'knobjocky':0x1,'knobjokey':0x1,'kock':0x1,'kondum':0x1,'kondums':0x1,'kum':0x1,'kummer':0x1,'kumming':0x1,'kums':0x1,'kunilingus':0x1,'l3i+ch':0x1,'l3itch':0x1,'labia':0x1,'lust':0x1,'lusting':0x1,'m0f0':0x1,'m0fo':0x1,'m45terbate':0x1,'ma5terb8':0x1,'ma5terbate':0x1,'masochist':0x1,'master-bate':0x1,'masterb8':0x1,'masterbat*':0x1,'masterbat3':0x1,'masterbate':0x1,'masterbation':0x1,'masterbations':0x1,'masturbate':0x1,'mo-fo':0x1,'mof0':0x1,'mofo':0x1,'mothafuck':0x1,'mothafucka':0x1,'mothafuckas':0x1,'mothafuckaz':0x1,'mothafucked':0x1,'mothafucker':0x1,'mothafuckers':0x1,'mothafuckin':0x1,'mothafucking':0x1,'mothafuckings':0x1,'mothafucks':0x1,'mother\x20fucker':0x1,'motherfuck':0x1,'motherfucked':0x1,'motherfucker':0x1,'motherfuckers':0x1,'motherfuckin':0x1,'motherfucking':0x1,'motherfuckings':0x1,'motherfuckka':0x1,'motherfucks':0x1,'muff':0x1,'mutha':0x1,'muthafecker':0x1,'muthafuckker':0x1,'muther':0x1,'mutherfucker':0x1,'n1gga':0x1,'n1gger':0x1,'nazi':0x1,'nigg3r':0x1,'nigg4h':0x1,'nigga':0x1,'niggah':0x1,'niggas':0x1,'niggaz':0x1,'nigger':0x1,'niggers':0x1,'nob':0x1,'nob\x20jokey':0x1,'nobhead':0x1,'nobjocky':0x1,'nobjokey':0x1,'numbnuts':0x1,'nutsack':0x1,'orgasim':0x1,'orgasims':0x1,'orgasm':0x1,'orgasms':0x1,'p0rn':0x1,'pawn':0x1,'pecker':0x1,'penis':0x1,'penisfucker':0x1,'phonesex':0x1,'phuck':0x1,'phuk':0x1,'phuked':0x1,'phuking':0x1,'phukked':0x1,'phukking':0x1,'phuks':0x1,'phuq':0x1,'pigfucker':0x1,'pimpis':0x1,'piss':0x1,'pissed':0x1,'pisser':0x1,'pissers':0x1,'pisses':0x1,'pissflaps':0x1,'pissin':0x1,'pissing':0x1,'pissoff':0x1,'poop':0x1,'porn':0x1,'porno':0x1,'pornography':0x1,'pornos':0x1,'prick':0x1,'pricks':0x1,'pron':0x1,'pube':0x1,'pusse':0x1,'pussi':0x1,'pussies':0x1,'pussy':0x1,'pussys':0x1,'rectum':0x1,'retard':0x1,'rimjaw':0x1,'rimming':0x1,'s\x20hit':0x1,'s.o.b.':0x1,'sadist':0x1,'schlong':0x1,'screwing':0x1,'scroat':0x1,'scrote':0x1,'scrotum':0x1,'semen':0x1,'sex':0x1,'sh!+':0x1,'sh!t':0x1,'sh1t':0x1,'shag':0x1,'shagger':0x1,'shaggin':0x1,'shagging':0x1,'shemale':0x1,'shi+':0x1,'shit':0x1,'shitdick':0x1,'shite':0x1,'shited':0x1,'shitey':0x1,'shitfuck':0x1,'shitfull':0x1,'shithead':0x1,'shiting':0x1,'shitings':0x1,'shits':0x1,'shitted':0x1,'shitter':0x1,'shitters':0x1,'shitting':0x1,'shittings':0x1,'shitty':0x1,'skank':0x1,'slut':0x1,'sluts':0x1,'smegma':0x1,'smut':0x1,'snatch':0x1,'son-of-a-bitch':0x1,'spac':0x1,'spunk':0x1,'s_h_i_t':0x1,'t1tt1e5':0x1,'t1tties':0x1,'teets':0x1,'teez':0x1,'testical':0x1,'testicle':0x1,'tit':0x1,'titfuck':0x1,'tits':0x1,'titt':0x1,'tittie5':0x1,'tittiefucker':0x1,'titties':0x1,'tittyfuck':0x1,'tittywank':0x1,'titwank':0x1,'tosser':0x1,'turd':0x1,'tw4t':0x1,'twat':0x1,'twathead':0x1,'twatty':0x1,'twunt':0x1,'twunter':0x1,'v14gra':0x1,'v1gra':0x1,'vagina':0x1,'viagra':0x1,'vulva':0x1,'w00se':0x1,'wang':0x1,'wank':0x1,'wanker':0x1,'wanky':0x1,'whoar':0x1,'whore':0x1,'willies':0x1,'willy':0x1,'xrated':0x1,'xxx':0x1};},function(_0x2f4e75,_0x26605a){_0x2f4e75['exports']=['4r5e','5h1t',_0x4a9c('0x212'),_0x4a9c('0x6ed'),_0x4a9c('0x37f'),_0x4a9c('0x61d'),_0x4a9c('0x427'),'arrse',_0x4a9c('0x276'),_0x4a9c('0x613'),_0x4a9c('0x257'),'asses',_0x4a9c('0x201'),_0x4a9c('0x404'),_0x4a9c('0x334'),'assholes',_0x4a9c('0xbf'),_0x4a9c('0x3cb'),_0x4a9c('0x634'),'b00bs',_0x4a9c('0x6b2'),_0x4a9c('0x6e7'),_0x4a9c('0x6e8'),_0x4a9c('0x355'),_0x4a9c('0x42b'),_0x4a9c('0x446'),_0x4a9c('0x298'),_0x4a9c('0x5b1'),'bellend',_0x4a9c('0x1c3'),'bestiality',_0x4a9c('0x2ac'),_0x4a9c('0x778'),'bitch',_0x4a9c('0x409'),_0x4a9c('0x214'),_0x4a9c('0x47b'),_0x4a9c('0x224'),_0x4a9c('0x4f8'),_0x4a9c('0x1a7'),'blow\x20job',_0x4a9c('0x78b'),_0x4a9c('0xcb'),_0x4a9c('0x509'),_0x4a9c('0x473'),_0x4a9c('0x4a4'),'boner',_0x4a9c('0x4ac'),_0x4a9c('0x6de'),_0x4a9c('0x60a'),_0x4a9c('0x258'),_0x4a9c('0x4a5'),_0x4a9c('0xab'),_0x4a9c('0x76'),'buceta',_0x4a9c('0x3da'),_0x4a9c('0x322'),_0x4a9c('0x46b'),_0x4a9c('0x152'),_0x4a9c('0xda'),'buttmuch',_0x4a9c('0x1a3'),_0x4a9c('0x228'),_0x4a9c('0x62f'),_0x4a9c('0x3af'),_0x4a9c('0x4a'),_0x4a9c('0x7f9'),_0x4a9c('0x660'),_0x4a9c('0x532'),_0x4a9c('0x7eb'),_0x4a9c('0x7a7'),_0x4a9c('0x68e'),_0x4a9c('0x7a1'),_0x4a9c('0x76d'),_0x4a9c('0x370'),_0x4a9c('0x1fb'),_0x4a9c('0x512'),_0x4a9c('0x111'),'cockmuncher',_0x4a9c('0x589'),_0x4a9c('0x363'),'cocksucked',_0x4a9c('0x4b'),_0x4a9c('0x327'),_0x4a9c('0x788'),_0x4a9c('0x265'),_0x4a9c('0x5d3'),'cok','cokmuncher',_0x4a9c('0x315'),_0x4a9c('0x4a2'),_0x4a9c('0x36d'),_0x4a9c('0xbc'),_0x4a9c('0x197'),_0x4a9c('0x3a8'),_0x4a9c('0x101'),_0x4a9c('0x733'),'cumshot',_0x4a9c('0x171'),_0x4a9c('0x750'),_0x4a9c('0x5e9'),_0x4a9c('0x550'),_0x4a9c('0x2bb'),_0x4a9c('0x471'),'cuntlicking',_0x4a9c('0x599'),_0x4a9c('0x5d1'),_0x4a9c('0xcf'),_0x4a9c('0x223'),_0x4a9c('0x5a4'),_0x4a9c('0x3e3'),_0x4a9c('0x129'),_0x4a9c('0x7ba'),_0x4a9c('0xc6'),_0x4a9c('0x6e6'),_0x4a9c('0x279'),'dickhead',_0x4a9c('0x321'),_0x4a9c('0x74b'),'dink',_0x4a9c('0x266'),_0x4a9c('0x24a'),_0x4a9c('0x2f9'),_0x4a9c('0x576'),_0x4a9c('0x52'),_0x4a9c('0x67b'),'donkeyribber',_0x4a9c('0x4b1'),_0x4a9c('0x5f1'),_0x4a9c('0x66b'),_0x4a9c('0x3b5'),'ejaculated',_0x4a9c('0x536'),_0x4a9c('0x71c'),_0x4a9c('0x605'),_0x4a9c('0x41a'),_0x4a9c('0x30d'),'f\x20u\x20c\x20k',_0x4a9c('0x662'),'f4nny','fag',_0x4a9c('0x511'),_0x4a9c('0x58c'),_0x4a9c('0x4'),_0x4a9c('0x5f7'),'fagot',_0x4a9c('0x14e'),_0x4a9c('0x84'),_0x4a9c('0x1dc'),_0x4a9c('0x9'),_0x4a9c('0x5bf'),_0x4a9c('0x68c'),_0x4a9c('0x21b'),_0x4a9c('0x608'),_0x4a9c('0x56d'),'fcuking',_0x4a9c('0x4e4'),_0x4a9c('0x2b1'),'felching',_0x4a9c('0x503'),_0x4a9c('0x3d7'),'fingerfuck','fingerfucked',_0x4a9c('0x6af'),_0x4a9c('0x47'),'fingerfucking',_0x4a9c('0x81'),'fistfuck',_0x4a9c('0x24'),_0x4a9c('0x642'),'fistfuckers',_0x4a9c('0x1ad'),_0x4a9c('0x5b3'),'fistfucks',_0x4a9c('0x367'),_0x4a9c('0x167'),_0x4a9c('0x6f5'),_0x4a9c('0x62'),'fucka',_0x4a9c('0x455'),_0x4a9c('0x774'),_0x4a9c('0x5a7'),_0x4a9c('0x4b3'),_0x4a9c('0x2bf'),_0x4a9c('0x342'),'fucking','fuckings',_0x4a9c('0x5a'),_0x4a9c('0x37d'),_0x4a9c('0x1a2'),_0x4a9c('0x2a7'),_0x4a9c('0x26b'),_0x4a9c('0x24e'),_0x4a9c('0x23b'),'fuk',_0x4a9c('0x13e'),_0x4a9c('0x4cb'),_0x4a9c('0x500'),_0x4a9c('0x8'),_0x4a9c('0x5f9'),_0x4a9c('0x524'),'fux',_0x4a9c('0x6bf'),_0x4a9c('0x465'),_0x4a9c('0x640'),_0x4a9c('0x22d'),_0x4a9c('0x293'),_0x4a9c('0x3ff'),_0x4a9c('0x408'),_0x4a9c('0x3e5'),'God',_0x4a9c('0x182'),_0x4a9c('0x31e'),_0x4a9c('0x32e'),_0x4a9c('0x254'),_0x4a9c('0x7a'),_0x4a9c('0x26c'),_0x4a9c('0xd0'),_0x4a9c('0x399'),_0x4a9c('0xba'),_0x4a9c('0x263'),_0x4a9c('0x50f'),'hore',_0x4a9c('0x53a'),_0x4a9c('0x519'),_0x4a9c('0x330'),_0x4a9c('0x4fa'),_0x4a9c('0x62b'),_0x4a9c('0x6a5'),_0x4a9c('0x442'),'jism',_0x4a9c('0x777'),_0x4a9c('0x61e'),_0x4a9c('0x41f'),_0x4a9c('0x4eb'),'knob',_0x4a9c('0x513'),_0x4a9c('0x65d'),'knobend',_0x4a9c('0x804'),_0x4a9c('0x3c2'),_0x4a9c('0x1b8'),'kock',_0x4a9c('0x7fa'),_0x4a9c('0x67'),'kum',_0x4a9c('0x319'),_0x4a9c('0x57a'),_0x4a9c('0xde'),_0x4a9c('0x2bc'),_0x4a9c('0x7e7'),_0x4a9c('0x89'),'labia',_0x4a9c('0x413'),_0x4a9c('0x34e'),'m0f0',_0x4a9c('0x6f8'),_0x4a9c('0x25'),'ma5terb8',_0x4a9c('0x7de'),_0x4a9c('0x82'),_0x4a9c('0x460'),_0x4a9c('0x1ca'),'masterbat*',_0x4a9c('0x563'),'masterbate','masterbation',_0x4a9c('0x4c3'),'masturbate',_0x4a9c('0x5a0'),_0x4a9c('0x5f'),_0x4a9c('0x5fb'),_0x4a9c('0x1c8'),_0x4a9c('0x4b5'),_0x4a9c('0x76f'),_0x4a9c('0x125'),_0x4a9c('0x13f'),_0x4a9c('0x6db'),_0x4a9c('0x6c6'),'mothafuckin',_0x4a9c('0x732'),'mothafuckings',_0x4a9c('0x672'),_0x4a9c('0x7b6'),_0x4a9c('0x328'),_0x4a9c('0x715'),_0x4a9c('0x5d6'),_0x4a9c('0x3fe'),_0x4a9c('0x7ca'),_0x4a9c('0x6b1'),'motherfuckings',_0x4a9c('0x645'),_0x4a9c('0x17e'),_0x4a9c('0x6b3'),_0x4a9c('0x6d3'),_0x4a9c('0x31d'),_0x4a9c('0x1c4'),'muther','mutherfucker',_0x4a9c('0x42f'),_0x4a9c('0x377'),_0x4a9c('0x616'),_0x4a9c('0x341'),_0x4a9c('0x1b6'),_0x4a9c('0x52b'),_0x4a9c('0x1be'),_0x4a9c('0x364'),'niggaz',_0x4a9c('0x36b'),'niggers',_0x4a9c('0x65f'),_0x4a9c('0x55d'),_0x4a9c('0x45a'),_0x4a9c('0x7a2'),'nobjokey',_0x4a9c('0x3dc'),_0x4a9c('0x4a6'),'orgasim',_0x4a9c('0x30c'),_0x4a9c('0x4e2'),_0x4a9c('0x3e8'),_0x4a9c('0x6df'),'pawn',_0x4a9c('0x402'),_0x4a9c('0x53f'),_0x4a9c('0x1b0'),_0x4a9c('0x50d'),_0x4a9c('0x44f'),'phuk',_0x4a9c('0x30f'),_0x4a9c('0x192'),_0x4a9c('0x29f'),_0x4a9c('0x707'),'phuks',_0x4a9c('0x7c0'),_0x4a9c('0x796'),_0x4a9c('0x610'),_0x4a9c('0x3dd'),_0x4a9c('0x12a'),_0x4a9c('0x699'),_0x4a9c('0x207'),_0x4a9c('0x57'),_0x4a9c('0x253'),'pissin',_0x4a9c('0x3f7'),_0x4a9c('0x19a'),_0x4a9c('0x3a2'),'porn',_0x4a9c('0x32f'),_0x4a9c('0x18f'),_0x4a9c('0xa0'),_0x4a9c('0x361'),'pricks',_0x4a9c('0x28b'),_0x4a9c('0x77c'),_0x4a9c('0x556'),'pussi',_0x4a9c('0x604'),'pussy',_0x4a9c('0x6f7'),_0x4a9c('0x332'),_0x4a9c('0x1d'),_0x4a9c('0x547'),_0x4a9c('0xe6'),_0x4a9c('0x685'),_0x4a9c('0x1f'),_0x4a9c('0x372'),_0x4a9c('0x583'),_0x4a9c('0x31b'),_0x4a9c('0x247'),_0x4a9c('0x5f2'),_0x4a9c('0x25a'),_0x4a9c('0x1df'),_0x4a9c('0x3b2'),_0x4a9c('0x50a'),_0x4a9c('0x618'),'sh1t',_0x4a9c('0x797'),'shagger','shaggin',_0x4a9c('0x505'),_0x4a9c('0x2b9'),_0x4a9c('0x711'),_0x4a9c('0x1dd'),_0x4a9c('0x2a0'),_0x4a9c('0x7ad'),_0x4a9c('0x27b'),'shitey','shitfuck',_0x4a9c('0x466'),_0x4a9c('0x64b'),_0x4a9c('0x2df'),_0x4a9c('0x43c'),_0x4a9c('0x588'),_0x4a9c('0x239'),_0x4a9c('0x1d8'),_0x4a9c('0x69a'),'shitting',_0x4a9c('0x1c6'),_0x4a9c('0x389'),_0x4a9c('0x3ac'),_0x4a9c('0x551'),_0x4a9c('0x356'),'smegma',_0x4a9c('0x12f'),_0x4a9c('0x64e'),_0x4a9c('0x1e4'),'spac',_0x4a9c('0x7ee'),_0x4a9c('0x629'),_0x4a9c('0x2cc'),_0x4a9c('0x287'),_0x4a9c('0x222'),_0x4a9c('0x13'),_0x4a9c('0x282'),_0x4a9c('0x311'),_0x4a9c('0x3c5'),_0x4a9c('0x240'),_0x4a9c('0xb0'),_0x4a9c('0x489'),_0x4a9c('0x308'),_0x4a9c('0x458'),_0x4a9c('0x507'),_0x4a9c('0x3ea'),'tittywank',_0x4a9c('0x49f'),'tosser',_0x4a9c('0x5da'),_0x4a9c('0x681'),_0x4a9c('0x2c5'),_0x4a9c('0x374'),_0x4a9c('0x7e0'),'twunt',_0x4a9c('0x6fd'),_0x4a9c('0x2c8'),_0x4a9c('0x515'),_0x4a9c('0x7bb'),_0x4a9c('0x1bd'),_0x4a9c('0x365'),_0x4a9c('0x62a'),_0x4a9c('0x71'),_0x4a9c('0x51d'),_0x4a9c('0x2d0'),_0x4a9c('0x607'),_0x4a9c('0x751'),_0x4a9c('0x2af'),_0x4a9c('0xfd'),_0x4a9c('0x283'),'xrated','xxx'];},function(_0x3c4809,_0x3961fa){_0x3c4809[_0x4a9c('0x14f')]=/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gay|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi;},function(_0x45c530,_0x6e98bd){_0x45c530['exports']['hats']=[{'id':0x1c,'name':'TIPS','price':0x0,'scale':0x78,'desc':_0x4a9c('0x779')},{'id':0x2d,'name':_0x4a9c('0x73b'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x602')},{'id':0x33,'name':_0x4a9c('0x7a8'),'price':0x0,'scale':0x78,'desc':'coolest\x20mooer\x20around'},{'id':0x32,'name':_0x4a9c('0x674'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x158')},{'id':0x1c,'name':_0x4a9c('0x272'),'price':0x0,'scale':0x78,'desc':'no\x20effect'},{'id':0x1d,'name':_0x4a9c('0x6ec'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x1e,'name':_0x4a9c('0x39a'),'price':0x0,'scale':0x78,'desc':'no\x20effect'},{'id':0x24,'name':_0x4a9c('0x483'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x25,'name':_0x4a9c('0x6a9'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x26,'name':_0x4a9c('0x600'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x2c,'name':_0x4a9c('0x661'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x23,'name':_0x4a9c('0x37'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x2a,'name':'Enigma\x20Hat','price':0x0,'scale':0x78,'desc':_0x4a9c('0x28c')},{'id':0x2b,'name':_0x4a9c('0x7e8'),'price':0x0,'scale':0x78,'desc':_0x4a9c('0x100')},{'id':0x31,'name':'Bob\x20XIII\x20Hat','price':0x0,'scale':0x78,'desc':_0x4a9c('0x2d8')},{'id':0x39,'name':_0x4a9c('0x5ce'),'price':0x32,'scale':0x78,'desc':'Spooooky'},{'id':0x8,'name':_0x4a9c('0x678'),'price':0x64,'scale':0x78,'desc':'no\x20effect'},{'id':0x2,'name':_0x4a9c('0x5a3'),'price':0x1f4,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0xf,'name':_0x4a9c('0x802'),'price':0x258,'scale':0x78,'desc':_0x4a9c('0x25d'),'coldM':0x1},{'id':0x5,'name':_0x4a9c('0x6d7'),'price':0x3e8,'scale':0x78,'desc':'no\x20effect'},{'id':0x4,'name':_0x4a9c('0x648'),'price':0x7d0,'scale':0x78,'desc':'no\x20effect'},{'id':0x12,'name':_0x4a9c('0x1ed'),'price':0x7d0,'scale':0x78,'desc':'no\x20effect'},{'id':0x1f,'name':'Flipper\x20Hat','price':0x9c4,'scale':0x78,'desc':_0x4a9c('0x803'),'watrImm':!0x0},{'id':0x1,'name':_0x4a9c('0x689'),'price':0xbb8,'scale':0x78,'desc':'increases\x20arrow\x20speed\x20and\x20range','aMlt':1.3},{'id':0xa,'name':'Bush\x20Gear','price':0xbb8,'scale':0xa0,'desc':_0x4a9c('0x36e')},{'id':0x30,'name':'Halo','price':0xbb8,'scale':0x78,'desc':_0x4a9c('0x63a')},{'id':0x6,'name':_0x4a9c('0x5cf'),'price':0xfa0,'scale':0x78,'desc':_0x4a9c('0x252'),'spdMult':0.94,'dmgMult':0.75},{'id':0x17,'name':_0x4a9c('0x529'),'price':0xfa0,'scale':0x78,'desc':_0x4a9c('0x780'),'poisonRes':0x1},{'id':0xd,'name':'Medic\x20Gear','price':0x1388,'scale':0x6e,'desc':_0x4a9c('0x659'),'healthRegen':0x3},{'id':0x9,'name':_0x4a9c('0x344'),'price':0x1388,'scale':0x78,'desc':_0x4a9c('0x2e2'),'extraGold':0x1},{'id':0x20,'name':_0x4a9c('0x58a'),'price':0x1388,'scale':0x78,'desc':_0x4a9c('0x93'),'projCost':0.5},{'id':0x7,'name':'Bull\x20Helmet','price':0x1770,'scale':0x78,'desc':_0x4a9c('0x4ec'),'healthRegen':-0x5,'dmgMultO':1.5,'spdMult':0.96},{'id':0x16,'name':_0x4a9c('0xe2'),'price':0x1770,'scale':0x78,'desc':_0x4a9c('0x4dd'),'antiTurret':0x1,'spdMult':0.7},{'id':0xc,'name':'Booster\x20Hat','price':0x1770,'scale':0x78,'desc':_0x4a9c('0x16b'),'spdMult':1.16},{'id':0x1a,'name':_0x4a9c('0x27e'),'price':0x1f40,'scale':0x78,'desc':_0x4a9c('0x40d'),'dmgK':0.6},{'id':0x15,'name':'Plague\x20Mask','price':0x2710,'scale':0x78,'desc':_0x4a9c('0x77d'),'poisonDmg':0x5,'poisonTime':0x6},{'id':0x2e,'name':_0x4a9c('0x694'),'price':0x2710,'scale':0x78,'desc':'bulls\x20won\x27t\x20target\x20you\x20unless\x20you\x20attack\x20them','bullRepel':0x1},{'id':0xe,'name':'Windmill\x20Hat','topSprite':!0x0,'price':0x2710,'scale':0x78,'desc':_0x4a9c('0x624'),'pps':1.5},{'id':0xb,'name':_0x4a9c('0x194'),'topSprite':!0x0,'price':0x2710,'scale':0x78,'desc':'deal\x20damage\x20to\x20players\x20that\x20damage\x20you','dmg':0.45},{'id':0x35,'name':'Turret\x20Gear','topSprite':!0x0,'price':0x2710,'scale':0x78,'desc':_0x4a9c('0x20f'),'turret':{'proj':0x1,'range':0x2bc,'rate':0x9c4},'spdMult':0.7},{'id':0x14,'name':_0x4a9c('0x4d7'),'price':0x2ee0,'scale':0x78,'desc':_0x4a9c('0x206'),'atkSpd':0.78},{'id':0x3a,'name':_0x4a9c('0x1b5'),'price':0x2ee0,'scale':0x78,'desc':_0x4a9c('0x380'),'healD':0.4},{'id':0x1b,'name':_0x4a9c('0x52f'),'price':0x3a98,'scale':0x78,'desc':_0x4a9c('0x59c'),'kScrM':0x2},{'id':0x28,'name':_0x4a9c('0x467'),'price':0x3a98,'scale':0x78,'desc':_0x4a9c('0x5ef'),'spdMult':0.3,'bDmg':3.3},{'id':0x34,'name':_0x4a9c('0x284'),'price':0x3a98,'scale':0x78,'desc':'steal\x20half\x20of\x20a\x20players\x20gold\x20when\x20you\x20kill\x20them','goldSteal':0.5},{'id':0x37,'name':_0x4a9c('0x386'),'price':0x4e20,'scale':0x78,'desc':_0x4a9c('0xd2'),'healD':0.25,'dmgMultO':1.2},{'id':0x38,'name':_0x4a9c('0x7e'),'price':0x4e20,'scale':0x78,'desc':_0x4a9c('0x22e'),'noEat':!0x0,'spdMult':1.1,'invisTimer':0x3e8}],_0x45c530['exports'][_0x4a9c('0x21c')]=[{'id':0x11,'name':'TIPS','price':0xbb8,'scale':0x78,'desc':_0x4a9c('0x779')},{'id':0x4,'name':_0x4a9c('0x73b'),'price':0xfa0,'scale':0x78,'desc':_0x4a9c('0x602')},{'id':0xc,'name':_0x4a9c('0x256'),'price':0x3e8,'scale':0x69,'xOff':0x12,'desc':'no\x20effect'},{'id':0x9,'name':_0x4a9c('0x627'),'price':0x3e8,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0xa,'name':_0x4a9c('0x70a'),'price':0x3e8,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x3,'name':_0x4a9c('0x16e'),'price':0x5dc,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x8,'name':_0x4a9c('0x754'),'price':0x7d0,'scale':0x5a,'desc':'no\x20effect'},{'id':0xb,'name':_0x4a9c('0x3cd'),'price':0x7d0,'scale':0x61,'xOff':0x19,'desc':_0x4a9c('0x650'),'spdMult':1.35,'dmgMultO':0.2},{'id':0x11,'name':_0x4a9c('0x4b4'),'price':0xbb8,'scale':0x50,'xOff':0xc,'desc':'slowly\x20regenerates\x20health\x20over\x20time','healthRegen':0x1},{'id':0x6,'name':_0x4a9c('0x737'),'price':0xbb8,'scale':0x5a,'desc':'no\x20effect'},{'id':0x4,'name':_0x4a9c('0x1bc'),'price':0xfa0,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x5,'name':_0x4a9c('0x523'),'price':0x1388,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x2,'name':_0x4a9c('0x144'),'price':0x1770,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x1,'name':_0x4a9c('0x33b'),'price':0x1f40,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0x7,'name':_0x4a9c('0x469'),'price':0x1f40,'scale':0x5a,'desc':_0x4a9c('0x63a')},{'id':0xe,'name':_0x4a9c('0x7e9'),'price':0x2710,'scale':0x73,'xOff':0x14,'desc':'no\x20effect'},{'id':0xf,'name':_0x4a9c('0x25c'),'price':0x2710,'scale':0x5f,'xOff':0xf,'desc':_0x4a9c('0x63a')},{'id':0x14,'name':_0x4a9c('0x3be'),'price':0x2710,'scale':0x5f,'xOff':0x14,'desc':_0x4a9c('0x63a')},{'id':0x10,'name':_0x4a9c('0x40'),'price':0x2ee0,'scale':0x5a,'spin':!0x0,'xOff':0x0,'desc':'deal\x20damage\x20to\x20players\x20that\x20damage\x20you','dmg':0.15},{'id':0xd,'name':'Angel\x20Wings','price':0x3a98,'scale':0x8a,'xOff':0x16,'desc':_0x4a9c('0x659'),'healthRegen':0x3},{'id':0x13,'name':_0x4a9c('0x15a'),'price':0x3a98,'scale':0x8a,'xOff':0x16,'desc':_0x4a9c('0x4fe'),'spdMult':1.1},{'id':0x12,'name':_0x4a9c('0x31f'),'price':0x4e20,'scale':0xb2,'xOff':0x1a,'desc':_0x4a9c('0x380'),'healD':0.2},{'id':0x15,'name':_0x4a9c('0x5fd'),'price':0x4e20,'scale':0xb2,'xOff':0x1a,'desc':_0x4a9c('0x75c'),'dmg':0.25}];},function(_0xfd9fc,_0x9e70d2){_0xfd9fc[_0x4a9c('0x14f')]=function(_0x951678,_0x223af9,_0x2bcf94,_0x444669,_0x5f2edf,_0x316df2,_0x30581e){this[_0x4a9c('0xf9')]=function(_0x4bbf42,_0x3e5407,_0x255f54,_0x1c8c9a,_0x5937d2,_0x3d4ad0,_0x4bc529,_0x4ba334,_0x5ac309){this['active']=!0x0,this['indx']=_0x4bbf42,this['x']=_0x3e5407,this['y']=_0x255f54,this[_0x4a9c('0x638')]=_0x1c8c9a,this[_0x4a9c('0xa1')]=!0x0,this[_0x4a9c('0x244')]=_0x5937d2,this[_0x4a9c('0x90')]=_0x3d4ad0,this[_0x4a9c('0x6f4')]=_0x4ba334,this[_0x4a9c('0x2d3')]=_0x4bc529,this[_0x4a9c('0x7df')]=_0x5ac309,_0x30581e&&(this[_0x4a9c('0x6eb')]={});};var _0xf0dea7,_0x120e4a=[];this[_0x4a9c('0x5ab')]=function(_0x59d91c){if(this[_0x4a9c('0x21')]){var _0x5be032,_0x2bb8a7=this[_0x4a9c('0x244')]*_0x59d91c;if(this[_0x4a9c('0xa1')]?this[_0x4a9c('0xa1')]=!0x1:(this['x']+=_0x2bb8a7*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),this['y']+=_0x2bb8a7*Math[_0x4a9c('0x1bb')](this[_0x4a9c('0x638')]),this['range']-=_0x2bb8a7,this[_0x4a9c('0x2d3')]<=0x0&&(this['x']+=this[_0x4a9c('0x2d3')]*Math[_0x4a9c('0x431')](this['dir']),this['y']+=this[_0x4a9c('0x2d3')]*Math[_0x4a9c('0x1bb')](this[_0x4a9c('0x638')]),_0x2bb8a7=0x1,this[_0x4a9c('0x2d3')]=0x0,this[_0x4a9c('0x21')]=!0x1)),_0x30581e){for(var _0x4157c5=0x0;_0x4157c5<_0x951678[_0x4a9c('0x3e1')];++_0x4157c5)!this[_0x4a9c('0x6eb')][_0x951678[_0x4157c5]['id']]&&_0x951678[_0x4157c5][_0x4a9c('0x336')](this)&&(this[_0x4a9c('0x6eb')][_0x951678[_0x4157c5]['id']]=0x1,_0x30581e['send'](_0x951678[_0x4157c5]['id'],'18',_0x316df2[_0x4a9c('0x5f6')](this['x'],0x1),_0x316df2['fixTo'](this['y'],0x1),_0x316df2[_0x4a9c('0x5f6')](this[_0x4a9c('0x638')],0x2),_0x316df2[_0x4a9c('0x5f6')](this[_0x4a9c('0x2d3')],0x1),this[_0x4a9c('0x244')],this[_0x4a9c('0x36f')],this[_0x4a9c('0x127')],this['sid']));for(_0x120e4a[_0x4a9c('0x3e1')]=0x0,_0x4157c5=0x0;_0x4157c5<_0x951678[_0x4a9c('0x3e1')]+_0x223af9[_0x4a9c('0x3e1')];++_0x4157c5)!(_0xf0dea7=_0x951678[_0x4157c5]||_0x223af9[_0x4157c5-_0x951678[_0x4a9c('0x3e1')]])[_0x4a9c('0x1b7')]||_0xf0dea7==this[_0x4a9c('0x7df')]||this[_0x4a9c('0x7df')][_0x4a9c('0x4c1')]&&_0xf0dea7[_0x4a9c('0x4c1')]==this[_0x4a9c('0x7df')][_0x4a9c('0x4c1')]||_0x316df2[_0x4a9c('0x1e1')](_0xf0dea7['x']-_0xf0dea7[_0x4a9c('0x6f4')],_0xf0dea7['y']-_0xf0dea7[_0x4a9c('0x6f4')],_0xf0dea7['x']+_0xf0dea7[_0x4a9c('0x6f4')],_0xf0dea7['y']+_0xf0dea7['scale'],this['x'],this['y'],this['x']+_0x2bb8a7*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),this['y']+_0x2bb8a7*Math[_0x4a9c('0x1bb')](this[_0x4a9c('0x638')]))&&_0x120e4a['push'](_0xf0dea7);for(var _0x44c991=_0x2bcf94[_0x4a9c('0x7ab')](this['x'],this['y'],this[_0x4a9c('0x6f4')]),_0x28df6e=0x0;_0x28df6e<_0x44c991[_0x4a9c('0x3e1')];++_0x28df6e)for(var _0x2df442=0x0;_0x2df442<_0x44c991[_0x28df6e][_0x4a9c('0x3e1')];++_0x2df442)_0x5be032=(_0xf0dea7=_0x44c991[_0x28df6e][_0x2df442])[_0x4a9c('0x6b6')](),_0xf0dea7[_0x4a9c('0x21')]&&this[_0x4a9c('0x393')]!=_0xf0dea7[_0x4a9c('0x56f')]&&this[_0x4a9c('0x127')]<=_0xf0dea7[_0x4a9c('0x127')]&&_0x120e4a[_0x4a9c('0x312')](_0xf0dea7)<0x0&&!_0xf0dea7[_0x4a9c('0x517')]&&_0x316df2[_0x4a9c('0x1e1')](_0xf0dea7['x']-_0x5be032,_0xf0dea7['y']-_0x5be032,_0xf0dea7['x']+_0x5be032,_0xf0dea7['y']+_0x5be032,this['x'],this['y'],this['x']+_0x2bb8a7*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),this['y']+_0x2bb8a7*Math[_0x4a9c('0x1bb')](this[_0x4a9c('0x638')]))&&_0x120e4a[_0x4a9c('0x2d2')](_0xf0dea7);if(_0x120e4a[_0x4a9c('0x3e1')]>0x0){var _0x2b409d=null,_0x4e47c8=null,_0xc316b2=null;for(_0x4157c5=0x0;_0x4157c5<_0x120e4a[_0x4a9c('0x3e1')];++_0x4157c5)_0xc316b2=_0x316df2[_0x4a9c('0x63')](this['x'],this['y'],_0x120e4a[_0x4157c5]['x'],_0x120e4a[_0x4157c5]['y']),(null==_0x4e47c8||_0xc316b2<_0x4e47c8)&&(_0x4e47c8=_0xc316b2,_0x2b409d=_0x120e4a[_0x4157c5]);if(_0x2b409d[_0x4a9c('0x62d')]||_0x2b409d[_0x4a9c('0x6ab')]){var _0x462d49=0.3*(_0x2b409d[_0x4a9c('0x70f')]||0x1);_0x2b409d[_0x4a9c('0x59f')]+=_0x462d49*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),_0x2b409d[_0x4a9c('0x63e')]+=_0x462d49*Math[_0x4a9c('0x1bb')](this[_0x4a9c('0x638')]),null!=_0x2b409d['weaponIndex']&&_0x444669[_0x4a9c('0x53c')][_0x2b409d['weaponIndex']][_0x4a9c('0x676')]&&_0x316df2[_0x4a9c('0x426')](this['dir']+Math['PI'],_0x2b409d[_0x4a9c('0x638')])<=_0x5f2edf['shieldAngle']||_0x2b409d[_0x4a9c('0x21e')](-this[_0x4a9c('0x90')],this[_0x4a9c('0x7df')],this[_0x4a9c('0x7df')]);}else for(_0x2b409d[_0x4a9c('0x577')]&&_0x2b409d[_0x4a9c('0x528')]&&_0x2b409d[_0x4a9c('0x21e')](-this[_0x4a9c('0x90')])&&_0x2bcf94[_0x4a9c('0xd')](_0x2b409d),_0x4157c5=0x0;_0x4157c5<_0x951678[_0x4a9c('0x3e1')];++_0x4157c5)_0x951678[_0x4157c5][_0x4a9c('0x21')]&&(_0x2b409d[_0x4a9c('0x6eb')][_0x951678[_0x4157c5]['id']]&&(_0x2b409d['active']?_0x951678[_0x4157c5]['canSee'](_0x2b409d)&&_0x30581e['send'](_0x951678[_0x4157c5]['id'],'8',_0x316df2[_0x4a9c('0x5f6')](this['dir'],0x2),_0x2b409d[_0x4a9c('0x56f')]):_0x30581e[_0x4a9c('0x1c2')](_0x951678[_0x4157c5]['id'],'12',_0x2b409d[_0x4a9c('0x56f')])),_0x2b409d['active']||_0x2b409d[_0x4a9c('0x7df')]!=_0x951678[_0x4157c5]||_0x951678[_0x4157c5]['changeItemCount'](_0x2b409d[_0x4a9c('0x2ae')]['id'],-0x1));for(this[_0x4a9c('0x21')]=!0x1,_0x4157c5=0x0;_0x4157c5<_0x951678[_0x4a9c('0x3e1')];++_0x4157c5)this[_0x4a9c('0x6eb')][_0x951678[_0x4157c5]['id']]&&_0x30581e['send'](_0x951678[_0x4157c5]['id'],'19',this['sid'],_0x316df2[_0x4a9c('0x5f6')](_0x4e47c8,0x1));}}}};};},function(_0xe08c0d,_0x35a141){_0xe08c0d['exports']=function(_0x440e5f,_0x4489ab,_0x51c862,_0x5209e4,_0x105f5d,_0x4dceef,_0x335c55,_0x29b714,_0x512991){this[_0x4a9c('0x1d3')]=function(_0x440b48,_0x5bedf0,_0x337ba5,_0x258bea,_0x28ed00,_0x14f138,_0x2b2bff,_0x5d544b,_0x333e19){for(var _0x149766,_0x455a41=_0x4dceef[_0x4a9c('0x6f6')][_0x14f138],_0x4e5ae2=0x0;_0x4e5ae2<_0x4489ab[_0x4a9c('0x3e1')];++_0x4e5ae2)if(!_0x4489ab[_0x4e5ae2][_0x4a9c('0x21')]){_0x149766=_0x4489ab[_0x4e5ae2];break;}return _0x149766||((_0x149766=new _0x440e5f(_0x51c862,_0x5209e4,_0x105f5d,_0x4dceef,_0x335c55,_0x29b714,_0x512991))[_0x4a9c('0x56f')]=_0x4489ab[_0x4a9c('0x3e1')],_0x4489ab['push'](_0x149766)),_0x149766[_0x4a9c('0xf9')](_0x14f138,_0x440b48,_0x5bedf0,_0x337ba5,_0x28ed00,_0x455a41[_0x4a9c('0x90')],_0x258bea,_0x455a41[_0x4a9c('0x6f4')],_0x2b2bff),_0x149766[_0x4a9c('0x393')]=_0x5d544b,_0x149766[_0x4a9c('0x127')]=_0x333e19||_0x455a41[_0x4a9c('0x127')],_0x149766[_0x4a9c('0x34f')]=_0x455a41[_0x4a9c('0x34f')],_0x149766;};};},function(_0x119e24,_0x16e98a){_0x119e24[_0x4a9c('0x14f')]['obj']=function(_0xe6fe8c,_0x3a1ae6){var _0x4e47b5;this[_0x4a9c('0x5b5')]=[],this['active']=!0x0,this[_0x4a9c('0x748')]=function(_0x1b05f4,_0x32cc2b,_0x12b942){_0x32cc2b&&this[_0x4a9c('0x21')]&&((_0x4e47b5=this[_0x4a9c('0x5b5')][_0x1b05f4])||(_0x4e47b5=new Howl({'src':_0x4a9c('0x378')+_0x1b05f4+'.mp3'}),this[_0x4a9c('0x5b5')][_0x1b05f4]=_0x4e47b5),_0x12b942&&_0x4e47b5['isPlaying']||(_0x4e47b5[_0x4a9c('0x2da')]=!0x0,_0x4e47b5[_0x4a9c('0x748')](),_0x4e47b5[_0x4a9c('0x35')]((_0x32cc2b||0x1)*_0xe6fe8c[_0x4a9c('0x501')]),_0x4e47b5['loop'](_0x12b942)));},this['toggleMute']=function(_0x1d1bbd,_0xf87580){(_0x4e47b5=this[_0x4a9c('0x5b5')][_0x1d1bbd])&&_0x4e47b5[_0x4a9c('0x331')](_0xf87580);},this[_0x4a9c('0x3e0')]=function(_0x1fd3aa){(_0x4e47b5=this[_0x4a9c('0x5b5')][_0x1fd3aa])&&(_0x4e47b5[_0x4a9c('0x3e0')](),_0x4e47b5[_0x4a9c('0x2da')]=!0x1);};};},function(_0x31f30f,_0xad293a,_0x481dc4){var _0x418ff3=_0x481dc4(0x3c),_0x3e9901=_0x481dc4(0x43);function _0x231a0b(_0x1bc188,_0x59a78a,_0x115f94,_0x3bf794,_0x160f45){_0x4a9c('0x277')==location[_0x4a9c('0x65a')]&&(window[_0x4a9c('0x2c2')][_0x4a9c('0x65a')]=_0x4a9c('0x3d5')),this['debugLog']=!0x1,this[_0x4a9c('0x59')]=_0x1bc188,this[_0x4a9c('0x385')]=_0x115f94,this[_0x4a9c('0x303')]=_0x59a78a,this[_0x4a9c('0x4b2')]=_0x3bf794,this['rawIPs']=!!_0x160f45,this[_0x4a9c('0x692')]=void 0x0,this[_0x4a9c('0x35e')]=void 0x0,this['callback']=void 0x0,this[_0x4a9c('0x7f1')]=void 0x0,this[_0x4a9c('0x677')](vultr[_0x4a9c('0x61f')]);}_0x231a0b['prototype'][_0x4a9c('0x53d')]={0:{'name':'Local','latitude':0x0,'longitude':0x0},'vultr:1':{'name':_0x4a9c('0xe4'),'latitude':40.1393329,'longitude':-75.8521818},'vultr:2':{'name':'Chicago','latitude':41.8339037,'longitude':-87.872238},'vultr:3':{'name':_0x4a9c('0x4df'),'latitude':32.8208751,'longitude':-96.8714229},'vultr:4':{'name':'Seattle','latitude':47.6149942,'longitude':-122.4759879},'vultr:5':{'name':'Los\x20Angeles','latitude':34.0207504,'longitude':-118.691914},'vultr:6':{'name':_0x4a9c('0x3a9'),'latitude':33.7676334,'longitude':-84.5610332},'vultr:7':{'name':_0x4a9c('0x61'),'latitude':52.3745287,'longitude':4.7581878},'vultr:8':{'name':_0x4a9c('0x425'),'latitude':51.5283063,'longitude':-0.382486},'vultr:9':{'name':_0x4a9c('0x697'),'latitude':50.1211273,'longitude':8.496137},'vultr:12':{'name':_0x4a9c('0x497'),'latitude':37.4024714,'longitude':-122.3219752},'vultr:19':{'name':_0x4a9c('0x664'),'latitude':-33.8479715,'longitude':150.651084},'vultr:24':{'name':_0x4a9c('0x33d'),'latitude':48.8588376,'longitude':2.2773454},'vultr:25':{'name':_0x4a9c('0x7bd'),'latitude':35.6732615,'longitude':139.569959},'vultr:39':{'name':_0x4a9c('0x444'),'latitude':25.7823071,'longitude':-80.3012156},'vultr:40':{'name':'Singapore','latitude':1.3147268,'longitude':103.7065876}},_0x231a0b['prototype'][_0x4a9c('0x50')]=function(_0x36dc61,_0x19056){this[_0x4a9c('0x3d0')]=_0x36dc61,this[_0x4a9c('0x7f1')]=_0x19056;var _0x14d481=this[_0x4a9c('0x13d')]();_0x14d481?(this[_0x4a9c('0x22')]('Found\x20server\x20in\x20query.'),this['password']=_0x14d481[0x3],this[_0x4a9c('0x55')](_0x14d481[0x0],_0x14d481[0x1],_0x14d481[0x2])):(this[_0x4a9c('0x22')](_0x4a9c('0x2dd')),this[_0x4a9c('0x3ca')]());},_0x231a0b[_0x4a9c('0x216')]['parseServerQuery']=function(){var _0x5e68f7=_0x418ff3[_0x4a9c('0x632')](location['href'],!0x0),_0x2238dd=_0x5e68f7[_0x4a9c('0x3f')][_0x4a9c('0x692')];if(_0x4a9c('0x290')==typeof _0x2238dd){var _0x55ca00=_0x2238dd[_0x4a9c('0x41e')](':');if(0x3==_0x55ca00[_0x4a9c('0x3e1')]){var _0x1eb2b9=_0x55ca00[0x0],_0x265209=parseInt(_0x55ca00[0x1]),_0x1d01ba=parseInt(_0x55ca00[0x2]);return'0'==_0x1eb2b9||_0x1eb2b9[_0x4a9c('0x484')]('vultr:')||(_0x1eb2b9=_0x4a9c('0x7cc')+_0x1eb2b9),[_0x1eb2b9,_0x265209,_0x1d01ba,_0x5e68f7[_0x4a9c('0x3f')][_0x4a9c('0x301')]];}this[_0x4a9c('0x7f1')](_0x4a9c('0x154')+_0x2238dd);}},_0x231a0b['prototype'][_0x4a9c('0x162')]=function(_0x393bac,_0x150712){var _0x5d5ef0=this[_0x4a9c('0x61f')][_0x393bac];if(Array[_0x4a9c('0x4c8')](_0x5d5ef0)){for(var _0x2cd53e=0x0;_0x2cd53e<_0x5d5ef0[_0x4a9c('0x3e1')];_0x2cd53e++){var _0x294bc8=_0x5d5ef0[_0x2cd53e];if(_0x294bc8[_0x4a9c('0x76b')]==_0x150712)return _0x294bc8;}console[_0x4a9c('0x539')](_0x4a9c('0x436')+_0x393bac+'\x20with\x20index\x20'+_0x150712+'.');}else this[_0x4a9c('0x7f1')](_0x4a9c('0x249')+_0x393bac);},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x3ca')]=function(){var _0x8c21e9=this,_0x650573=[];for(var _0x9815bf in this['servers'])if(this[_0x4a9c('0x61f')][_0x4a9c('0x4e')](_0x9815bf)){var _0x109134=this[_0x4a9c('0x61f')][_0x9815bf],_0x5c8039=_0x109134[Math[_0x4a9c('0xa9')](Math[_0x4a9c('0x595')]()*_0x109134[_0x4a9c('0x3e1')])];null!=_0x5c8039?function(_0x4289cc,_0x358524){var _0x1e077f=new XMLHttpRequest();_0x1e077f[_0x4a9c('0x2d9')]=function(_0x2d3c50){var _0x56cab7=_0x2d3c50['target'];if(0x4==_0x56cab7[_0x4a9c('0x255')])if(0xc8==_0x56cab7[_0x4a9c('0x71e')]){for(var _0x5cbfc8=0x0;_0x5cbfc8<_0x650573[_0x4a9c('0x3e1')];_0x5cbfc8++)_0x650573[_0x5cbfc8][_0x4a9c('0x52c')]();_0x8c21e9[_0x4a9c('0x22')]('Connecting\x20to\x20region',_0x358524[_0x4a9c('0x52a')]);var _0x4966d7=_0x8c21e9[_0x4a9c('0x7d2')](_0x358524[_0x4a9c('0x52a')]);_0x8c21e9[_0x4a9c('0x55')](_0x4966d7[0x0],_0x4966d7[0x1],_0x4966d7[0x2]);}else console['warn']('Error\x20pinging\x20'+_0x358524['ip']+_0x4a9c('0x357')+_0x9815bf);};var _0x26b976='//'+_0x8c21e9['serverAddress'](_0x358524['ip'],!0x0)+':'+_0x8c21e9[_0x4a9c('0x56b')](_0x358524)+_0x4a9c('0x1f9');_0x1e077f[_0x4a9c('0x73d')]('GET',_0x26b976,!0x0),_0x1e077f[_0x4a9c('0x1c2')](null),_0x8c21e9[_0x4a9c('0x22')]('Pinging',_0x26b976),_0x650573[_0x4a9c('0x2d2')](_0x1e077f);}(0x0,_0x5c8039):console[_0x4a9c('0x22')](_0x4a9c('0xff')+_0x9815bf);}},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x7d2')]=function(_0x1be2f4,_0x414d8f,_0x4b494d){null==_0x4b494d&&(_0x4b494d=_0x4a9c('0x595')),null==_0x414d8f&&(_0x414d8f=!0x1);const _0x22a620=[_0x4a9c('0x595')];var _0x4a710d=this[_0x4a9c('0x385')],_0x37e508=this[_0x4a9c('0x4b2')],_0x3b87cc=this[_0x4a9c('0x61f')][_0x1be2f4][_0x4a9c('0x371')](function(_0x4ae4ad){var _0x58e46a=0x0;return _0x4ae4ad['games'][_0x4a9c('0x46f')](function(_0x753fe9){var _0x39484f=_0x58e46a++;return{'region':_0x4ae4ad[_0x4a9c('0x52a')],'index':_0x4ae4ad[_0x4a9c('0x76b')]*_0x4ae4ad[_0x4a9c('0x5db')][_0x4a9c('0x3e1')]+_0x39484f,'gameIndex':_0x39484f,'gameCount':_0x4ae4ad[_0x4a9c('0x5db')]['length'],'playerCount':_0x753fe9[_0x4a9c('0x11')],'isPrivate':_0x753fe9[_0x4a9c('0x541')]};});})[_0x4a9c('0x205')](function(_0x121748){return!_0x121748[_0x4a9c('0x541')];})[_0x4a9c('0x205')](function(_0x135a6e){return!_0x414d8f||0x0==_0x135a6e['playerCount']&&_0x135a6e[_0x4a9c('0x35e')]>=_0x135a6e['gameCount']/0x2;})['filter'](function(_0x17bbfe){return'random'==_0x4b494d||_0x22a620[_0x17bbfe[_0x4a9c('0x76b')]%_0x22a620['length']][_0x4a9c('0x6a4')]==_0x4b494d;})[_0x4a9c('0x5a6')](function(_0x23ea5b,_0x15a5bc){return _0x15a5bc[_0x4a9c('0x11')]-_0x23ea5b[_0x4a9c('0x11')];})[_0x4a9c('0x205')](function(_0x4c3d26){return _0x4c3d26['playerCount']<_0x4a710d;});if(_0x414d8f&&_0x3b87cc[_0x4a9c('0x6dd')](),0x0!=_0x3b87cc[_0x4a9c('0x3e1')]){var _0x1eb499=Math[_0x4a9c('0xe8')](_0x37e508,_0x3b87cc[_0x4a9c('0x3e1')]),_0x1b664f=Math[_0x4a9c('0xa9')](Math['random']()*_0x1eb499),_0x14d5ad=_0x3b87cc[_0x1b664f=Math['min'](_0x1b664f,_0x3b87cc[_0x4a9c('0x3e1')]-0x1)],_0x2fb3b5=_0x14d5ad[_0x4a9c('0x52a')],_0x4be732=(_0x1b664f=Math[_0x4a9c('0xa9')](_0x14d5ad[_0x4a9c('0x76b')]/_0x14d5ad[_0x4a9c('0x68f')]),_0x14d5ad[_0x4a9c('0x76b')]%_0x14d5ad[_0x4a9c('0x68f')]);return this[_0x4a9c('0x22')](_0x4a9c('0x24c')),[_0x2fb3b5,_0x1b664f,_0x4be732];}this[_0x4a9c('0x7f1')](_0x4a9c('0xb7'));},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x55')]=function(_0x3af1a5,_0xc36046,_0x1fb34e){if(!this[_0x4a9c('0x79')]){var _0x17f3b7=this[_0x4a9c('0x162')](_0x3af1a5,_0xc36046);null!=_0x17f3b7?(this[_0x4a9c('0x22')](_0x4a9c('0x318'),_0x17f3b7,_0x4a9c('0x7be'),_0x1fb34e),_0x17f3b7['games'][_0x1fb34e]['playerCount']>=this[_0x4a9c('0x385')]?this[_0x4a9c('0x7f1')](_0x4a9c('0x3ef')):(window[_0x4a9c('0x760')]['replaceState'](document[_0x4a9c('0x6ac')],document[_0x4a9c('0x6ac')],this[_0x4a9c('0x2c1')](_0x3af1a5,_0xc36046,_0x1fb34e,this[_0x4a9c('0x301')])),this[_0x4a9c('0x692')]=_0x17f3b7,this[_0x4a9c('0x35e')]=_0x1fb34e,this[_0x4a9c('0x22')](_0x4a9c('0x13a'),this['serverAddress'](_0x17f3b7['ip']),_0x4a9c('0x226'),this['serverPort'](_0x17f3b7),_0x4a9c('0x7be'),_0x1fb34e),this[_0x4a9c('0x3d0')](this[_0x4a9c('0x75f')](_0x17f3b7['ip']),this[_0x4a9c('0x56b')](_0x17f3b7),_0x1fb34e))):this[_0x4a9c('0x7f1')]('Failed\x20to\x20find\x20server\x20for\x20region\x20'+_0x3af1a5+_0x4a9c('0x675')+_0xc36046);}},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0xa3')]=function(_0x519ff4,_0xa9dd22,_0x22ff54,_0x74a98c){this[_0x4a9c('0x772')]=!0x0,window[_0x4a9c('0x2c2')][_0x4a9c('0x4a0')]=this[_0x4a9c('0x2c1')](_0x519ff4,_0xa9dd22,_0x22ff54,_0x74a98c);},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x2c1')]=function(_0x456b24,_0x462ede,_0x218919,_0x5c617a){var _0x448e86=_0x4a9c('0x1d4')+(_0x456b24=this['stripRegion'](_0x456b24))+':'+_0x462ede+':'+_0x218919;return _0x5c617a&&(_0x448e86+=_0x4a9c('0x6d4')+encodeURIComponent(_0x5c617a)),_0x448e86;},_0x231a0b['prototype'][_0x4a9c('0x75f')]=function(_0x22ce9c,_0x420523){return _0x4a9c('0x3d5')==_0x22ce9c||_0x4a9c('0x211')==_0x22ce9c||_0x4a9c('0x140')==_0x22ce9c?window[_0x4a9c('0x2c2')][_0x4a9c('0x65a')]:this['rawIPs']?_0x420523?_0x4a9c('0x4ee')+this[_0x4a9c('0x6b0')](_0x22ce9c)+'.'+this['baseUrl']:_0x22ce9c:_0x4a9c('0x4ee')+_0x22ce9c+'.'+this[_0x4a9c('0x59')];},_0x231a0b[_0x4a9c('0x216')]['serverPort']=function(_0x326645){return 0x0==_0x326645[_0x4a9c('0x52a')]?this['devPort']:location[_0x4a9c('0x73e')][_0x4a9c('0x484')](_0x4a9c('0x4a3'))?0x1bb:0x50;},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x677')]=function(_0x12ea10){for(var _0x54399c={},_0x4130ed=0x0;_0x4130ed<_0x12ea10[_0x4a9c('0x3e1')];_0x4130ed++){var _0x5adce7=_0x12ea10[_0x4130ed],_0x448827=_0x54399c[_0x5adce7['region']];null==_0x448827&&(_0x448827=[],_0x54399c[_0x5adce7['region']]=_0x448827),_0x448827[_0x4a9c('0x2d2')](_0x5adce7);}for(var _0xc6cf0d in _0x54399c)_0x54399c[_0xc6cf0d]=_0x54399c[_0xc6cf0d][_0x4a9c('0x5a6')](function(_0x57b783,_0x20e4fb){return _0x57b783[_0x4a9c('0x76b')]-_0x20e4fb[_0x4a9c('0x76b')];});this[_0x4a9c('0x61f')]=_0x54399c;},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x6c2')]=function(_0x243d07){return _0x243d07[_0x4a9c('0x41e')]('.')['map'](_0x47234f=>('00'+parseInt(_0x47234f)[_0x4a9c('0x1c1')](0x10))[_0x4a9c('0x48f')](-0x2))[_0x4a9c('0x64d')]('')[_0x4a9c('0x5c2')]();},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x6b0')]=function(_0x164b0b){return _0x3e9901(this[_0x4a9c('0x6c2')](_0x164b0b));},_0x231a0b[_0x4a9c('0x216')]['log']=function(){return this['debugLog']?console[_0x4a9c('0x22')][_0x4a9c('0x635')](void 0x0,arguments):console[_0x4a9c('0x169')]?console[_0x4a9c('0x169')]['apply'](void 0x0,arguments):void 0x0;},_0x231a0b[_0x4a9c('0x216')][_0x4a9c('0x250')]=function(_0x4c96c9){return _0x4c96c9['startsWith'](_0x4a9c('0x7cc'))?_0x4c96c9=_0x4c96c9['slice'](0x6):_0x4c96c9[_0x4a9c('0x484')](_0x4a9c('0x132'))&&(_0x4c96c9=_0x4c96c9[_0x4a9c('0x14')](0x3)),_0x4c96c9;},window[_0x4a9c('0x10f')]=function(){var _0x483b6f=0x1;function _0x24eb1b(_0x4d0738,_0x1207b9){(_0x4d0738=''+_0x4d0738)==(_0x1207b9=''+_0x1207b9)?console[_0x4a9c('0x22')](_0x4a9c('0x69b')+_0x483b6f+_0x4a9c('0x102')):console['warn'](_0x4a9c('0x69b')+_0x483b6f+'\x20failed.\x20Expected\x20'+_0x1207b9+_0x4a9c('0x29d')+_0x4d0738+'.'),_0x483b6f++;}var _0x278dc3=new _0x231a0b(_0x4a9c('0x2f6'),-0x1,0x5,0x1,!0x1);_0x278dc3[_0x4a9c('0x7f1')]=function(_0x4ade45){},_0x278dc3[_0x4a9c('0x677')](function(_0x1ab36f){var _0x4c24ac=[];for(var _0x4c8d15 in _0x1ab36f)for(var _0x577871=_0x1ab36f[_0x4c8d15],_0x40da04=0x0;_0x40da04<_0x577871[_0x4a9c('0x3e1')];_0x40da04++)_0x4c24ac['push']({'ip':_0x4c8d15+':'+_0x40da04,'scheme':_0x4a9c('0x7e6'),'region':_0x4c8d15,'index':_0x40da04,'games':_0x577871[_0x40da04][_0x4a9c('0x46f')](_0x14b000=>({'playerCount':_0x14b000,'isPrivate':!0x1}))});return _0x4c24ac;}({1:[[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0]],2:[[0x5,0x1,0x0,0x0],[0x0,0x0,0x0,0x0]],3:[[0x5,0x0,0x1,0x5],[0x0,0x0,0x0,0x0]],4:[[0x5,0x1,0x1,0x5],[0x1,0x0,0x0,0x0]],5:[[0x5,0x1,0x1,0x5],[0x1,0x0,0x4,0x0]],6:[[0x5,0x5,0x5,0x5],[0x2,0x3,0x1,0x4]],7:[[0x5,0x5,0x5,0x5],[0x5,0x5,0x5,0x5]]})),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x1,!0x1),[0x1,0x0,0x0]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x1,!0x0),[0x1,0x1,0x3]),_0x24eb1b(_0x278dc3['seekServer'](0x2,!0x1),[0x2,0x0,0x1]),_0x24eb1b(_0x278dc3['seekServer'](0x2,!0x0),[0x2,0x1,0x3]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x3,!0x1),[0x3,0x0,0x2]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x3,!0x0),[0x3,0x1,0x3]),_0x24eb1b(_0x278dc3['seekServer'](0x4,!0x1),[0x4,0x0,0x1]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x4,!0x0),[0x4,0x1,0x3]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x5,!0x1),[0x5,0x1,0x2]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x5,!0x0),[0x5,0x1,0x3]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x6,!0x1),[0x6,0x1,0x3]),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x6,!0x0),void 0x0),_0x24eb1b(_0x278dc3['seekServer'](0x7,!0x1),void 0x0),_0x24eb1b(_0x278dc3[_0x4a9c('0x7d2')](0x7,!0x0),void 0x0),console[_0x4a9c('0x22')](_0x4a9c('0x485'));};var _0x4bb4ad=function(_0x29211c,_0xb154b5){return _0x29211c[_0x4a9c('0x4fc')](_0xb154b5);};Array[_0x4a9c('0x216')][_0x4a9c('0x371')]=function(_0x5123e4){return function(_0x21251f,_0x289b00){return _0x289b00[_0x4a9c('0x46f')](_0x21251f)[_0x4a9c('0x53b')](_0x4bb4ad,[]);}(_0x5123e4,this);},_0x31f30f[_0x4a9c('0x14f')]=_0x231a0b;},function(_0x19c9e1,_0xf7e92,_0x2ac8ea){'use strict';var _0x2fc1ee=_0x2ac8ea(0x3d),_0x213896=_0x2ac8ea(0x3f);function _0x39dfeb(){this[_0x4a9c('0x73e')]=null,this[_0x4a9c('0x295')]=null,this[_0x4a9c('0x143')]=null,this[_0x4a9c('0x368')]=null,this[_0x4a9c('0x210')]=null,this[_0x4a9c('0x65a')]=null,this['hash']=null,this[_0x4a9c('0x1d7')]=null,this[_0x4a9c('0x3f')]=null,this[_0x4a9c('0x6fe')]=null,this[_0x4a9c('0x1a5')]=null,this['href']=null;}_0xf7e92[_0x4a9c('0x632')]=_0x1a5a4d,_0xf7e92[_0x4a9c('0x1af')]=function(_0x54ada0,_0x1450e1){return _0x1a5a4d(_0x54ada0,!0x1,!0x0)[_0x4a9c('0x1af')](_0x1450e1);},_0xf7e92['resolveObject']=function(_0x16ee5a,_0x1fda68){return _0x16ee5a?_0x1a5a4d(_0x16ee5a,!0x1,!0x0)[_0x4a9c('0x6d9')](_0x1fda68):_0x1fda68;},_0xf7e92[_0x4a9c('0x392')]=function(_0x3fcb67){return _0x213896['isString'](_0x3fcb67)&&(_0x3fcb67=_0x1a5a4d(_0x3fcb67)),_0x3fcb67 instanceof _0x39dfeb?_0x3fcb67[_0x4a9c('0x392')]():_0x39dfeb[_0x4a9c('0x216')][_0x4a9c('0x392')][_0x4a9c('0xc3')](_0x3fcb67);},_0xf7e92[_0x4a9c('0xaa')]=_0x39dfeb;var _0x22beae=/^([a-z0-9.+-]+:)/i,_0x4d98bc=/:[0-9]*$/,_0x514a0f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,_0x2e3919=['{','}','|','\x5c','^','`'][_0x4a9c('0x4fc')](['<','>','\x22','`','\x20','\x0d','\x0a','\x09']),_0x569dc4=['\x27'][_0x4a9c('0x4fc')](_0x2e3919),_0x203b8d=['%','/','?',';','#']['concat'](_0x569dc4),_0x337eb8=['/','?','#'],_0x1659cf=/^[+a-z0-9A-Z_-]{0,63}$/,_0x567657=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,_0x3c6cd8={'javascript':!0x0,'javascript:':!0x0},_0x4b96b2={'javascript':!0x0,'javascript:':!0x0},_0x464a9a={'http':!0x0,'https':!0x0,'ftp':!0x0,'gopher':!0x0,'file':!0x0,'http:':!0x0,'https:':!0x0,'ftp:':!0x0,'gopher:':!0x0,'file:':!0x0},_0x11334e=_0x2ac8ea(0x40);function _0x1a5a4d(_0x417646,_0x1e0b6c,_0x59de8c){if(_0x417646&&_0x213896['isObject'](_0x417646)&&_0x417646 instanceof _0x39dfeb)return _0x417646;var _0x3332f5=new _0x39dfeb();return _0x3332f5[_0x4a9c('0x632')](_0x417646,_0x1e0b6c,_0x59de8c),_0x3332f5;}_0x39dfeb['prototype'][_0x4a9c('0x632')]=function(_0x59ba10,_0xc72901,_0x3b41c0){if(!_0x213896[_0x4a9c('0x776')](_0x59ba10))throw new TypeError(_0x4a9c('0x351')+typeof _0x59ba10);var _0x1afe87=_0x59ba10['indexOf']('?'),_0x3f67ee=-0x1!==_0x1afe87&&_0x1afe87<_0x59ba10[_0x4a9c('0x312')]('#')?'?':'#',_0x2196d9=_0x59ba10[_0x4a9c('0x41e')](_0x3f67ee);_0x2196d9[0x0]=_0x2196d9[0x0][_0x4a9c('0x4e5')](/\\/g,'/');var _0xd7a912=_0x59ba10=_0x2196d9[_0x4a9c('0x64d')](_0x3f67ee);if(_0xd7a912=_0xd7a912[_0x4a9c('0x454')](),!_0x3b41c0&&0x1===_0x59ba10[_0x4a9c('0x41e')]('#')[_0x4a9c('0x3e1')]){var _0x3b4317=_0x514a0f[_0x4a9c('0x560')](_0xd7a912);if(_0x3b4317)return this['path']=_0xd7a912,this[_0x4a9c('0x4a0')]=_0xd7a912,this[_0x4a9c('0x6fe')]=_0x3b4317[0x1],_0x3b4317[0x2]?(this[_0x4a9c('0x1d7')]=_0x3b4317[0x2],this[_0x4a9c('0x3f')]=_0xc72901?_0x11334e[_0x4a9c('0x632')](this[_0x4a9c('0x1d7')][_0x4a9c('0x48f')](0x1)):this[_0x4a9c('0x1d7')][_0x4a9c('0x48f')](0x1)):_0xc72901&&(this['search']='',this[_0x4a9c('0x3f')]={}),this;}var _0x432aff=_0x22beae[_0x4a9c('0x560')](_0xd7a912);if(_0x432aff){var _0xae5f7b=(_0x432aff=_0x432aff[0x0])[_0x4a9c('0x5c2')]();this[_0x4a9c('0x73e')]=_0xae5f7b,_0xd7a912=_0xd7a912[_0x4a9c('0x48f')](_0x432aff[_0x4a9c('0x3e1')]);}if(_0x3b41c0||_0x432aff||_0xd7a912['match'](/^\/\/[^@\/]+@[^@\/]+/)){var _0x418dce='//'===_0xd7a912[_0x4a9c('0x48f')](0x0,0x2);!_0x418dce||_0x432aff&&_0x4b96b2[_0x432aff]||(_0xd7a912=_0xd7a912['substr'](0x2),this[_0x4a9c('0x295')]=!0x0);}if(!_0x4b96b2[_0x432aff]&&(_0x418dce||_0x432aff&&!_0x464a9a[_0x432aff])){for(var _0x480088,_0x18dd3b,_0x54babb=-0x1,_0x6ad5a5=0x0;_0x6ad5a5<_0x337eb8[_0x4a9c('0x3e1')];_0x6ad5a5++)-0x1!==(_0x4bd529=_0xd7a912[_0x4a9c('0x312')](_0x337eb8[_0x6ad5a5]))&&(-0x1===_0x54babb||_0x4bd529<_0x54babb)&&(_0x54babb=_0x4bd529);for(-0x1!==(_0x18dd3b=-0x1===_0x54babb?_0xd7a912['lastIndexOf']('@'):_0xd7a912[_0x4a9c('0x591')]('@',_0x54babb))&&(_0x480088=_0xd7a912[_0x4a9c('0x14')](0x0,_0x18dd3b),_0xd7a912=_0xd7a912[_0x4a9c('0x14')](_0x18dd3b+0x1),this[_0x4a9c('0x143')]=decodeURIComponent(_0x480088)),_0x54babb=-0x1,_0x6ad5a5=0x0;_0x6ad5a5<_0x203b8d[_0x4a9c('0x3e1')];_0x6ad5a5++){var _0x4bd529;-0x1!==(_0x4bd529=_0xd7a912[_0x4a9c('0x312')](_0x203b8d[_0x6ad5a5]))&&(-0x1===_0x54babb||_0x4bd529<_0x54babb)&&(_0x54babb=_0x4bd529);}-0x1===_0x54babb&&(_0x54babb=_0xd7a912['length']),this['host']=_0xd7a912[_0x4a9c('0x14')](0x0,_0x54babb),_0xd7a912=_0xd7a912[_0x4a9c('0x14')](_0x54babb),this[_0x4a9c('0x714')](),this[_0x4a9c('0x65a')]=this['hostname']||'';var _0x456a3c='['===this[_0x4a9c('0x65a')][0x0]&&']'===this[_0x4a9c('0x65a')][this[_0x4a9c('0x65a')][_0x4a9c('0x3e1')]-0x1];if(!_0x456a3c)for(var _0x627237=this[_0x4a9c('0x65a')]['split'](/\./),_0x13a7f8=(_0x6ad5a5=0x0,_0x627237[_0x4a9c('0x3e1')]);_0x6ad5a5<_0x13a7f8;_0x6ad5a5++){var _0x9b6613=_0x627237[_0x6ad5a5];if(_0x9b6613&&!_0x9b6613[_0x4a9c('0x3d8')](_0x1659cf)){for(var _0x5d9a30='',_0x181179=0x0,_0xf263e=_0x9b6613[_0x4a9c('0x3e1')];_0x181179<_0xf263e;_0x181179++)_0x9b6613['charCodeAt'](_0x181179)>0x7f?_0x5d9a30+='x':_0x5d9a30+=_0x9b6613[_0x181179];if(!_0x5d9a30[_0x4a9c('0x3d8')](_0x1659cf)){var _0xe04fd=_0x627237[_0x4a9c('0x14')](0x0,_0x6ad5a5),_0xc61929=_0x627237[_0x4a9c('0x14')](_0x6ad5a5+0x1),_0x4a6995=_0x9b6613['match'](_0x567657);_0x4a6995&&(_0xe04fd[_0x4a9c('0x2d2')](_0x4a6995[0x1]),_0xc61929['unshift'](_0x4a6995[0x2])),_0xc61929[_0x4a9c('0x3e1')]&&(_0xd7a912='/'+_0xc61929[_0x4a9c('0x64d')]('.')+_0xd7a912),this[_0x4a9c('0x65a')]=_0xe04fd[_0x4a9c('0x64d')]('.');break;}}}this[_0x4a9c('0x65a')][_0x4a9c('0x3e1')]>0xff?this[_0x4a9c('0x65a')]='':this[_0x4a9c('0x65a')]=this[_0x4a9c('0x65a')][_0x4a9c('0x5c2')](),_0x456a3c||(this[_0x4a9c('0x65a')]=_0x2fc1ee[_0x4a9c('0x16')](this[_0x4a9c('0x65a')]));var _0x2499ef=this[_0x4a9c('0x210')]?':'+this['port']:'',_0x581d5e=this['hostname']||'';this[_0x4a9c('0x368')]=_0x581d5e+_0x2499ef,this['href']+=this[_0x4a9c('0x368')],_0x456a3c&&(this[_0x4a9c('0x65a')]=this['hostname'][_0x4a9c('0x48f')](0x1,this[_0x4a9c('0x65a')][_0x4a9c('0x3e1')]-0x2),'/'!==_0xd7a912[0x0]&&(_0xd7a912='/'+_0xd7a912));}if(!_0x3c6cd8[_0xae5f7b])for(_0x6ad5a5=0x0,_0x13a7f8=_0x569dc4[_0x4a9c('0x3e1')];_0x6ad5a5<_0x13a7f8;_0x6ad5a5++){var _0x5be3a6=_0x569dc4[_0x6ad5a5];if(-0x1!==_0xd7a912['indexOf'](_0x5be3a6)){var _0x235dc1=encodeURIComponent(_0x5be3a6);_0x235dc1===_0x5be3a6&&(_0x235dc1=escape(_0x5be3a6)),_0xd7a912=_0xd7a912['split'](_0x5be3a6)[_0x4a9c('0x64d')](_0x235dc1);}}var _0x4f202a=_0xd7a912['indexOf']('#');-0x1!==_0x4f202a&&(this['hash']=_0xd7a912[_0x4a9c('0x48f')](_0x4f202a),_0xd7a912=_0xd7a912[_0x4a9c('0x14')](0x0,_0x4f202a));var _0x585ce4=_0xd7a912['indexOf']('?');if(-0x1!==_0x585ce4?(this[_0x4a9c('0x1d7')]=_0xd7a912[_0x4a9c('0x48f')](_0x585ce4),this['query']=_0xd7a912[_0x4a9c('0x48f')](_0x585ce4+0x1),_0xc72901&&(this[_0x4a9c('0x3f')]=_0x11334e[_0x4a9c('0x632')](this['query'])),_0xd7a912=_0xd7a912[_0x4a9c('0x14')](0x0,_0x585ce4)):_0xc72901&&(this[_0x4a9c('0x1d7')]='',this[_0x4a9c('0x3f')]={}),_0xd7a912&&(this[_0x4a9c('0x6fe')]=_0xd7a912),_0x464a9a[_0xae5f7b]&&this[_0x4a9c('0x65a')]&&!this[_0x4a9c('0x6fe')]&&(this[_0x4a9c('0x6fe')]='/'),this[_0x4a9c('0x6fe')]||this[_0x4a9c('0x1d7')]){_0x2499ef=this[_0x4a9c('0x6fe')]||'';var _0x5377b6=this[_0x4a9c('0x1d7')]||'';this[_0x4a9c('0x1a5')]=_0x2499ef+_0x5377b6;}return this[_0x4a9c('0x4a0')]=this['format'](),this;},_0x39dfeb[_0x4a9c('0x216')][_0x4a9c('0x392')]=function(){var _0xb44aa6=this[_0x4a9c('0x143')]||'';_0xb44aa6&&(_0xb44aa6=(_0xb44aa6=encodeURIComponent(_0xb44aa6))[_0x4a9c('0x4e5')](/%3A/i,':'),_0xb44aa6+='@');var _0x5694d7=this['protocol']||'',_0x552cb7=this[_0x4a9c('0x6fe')]||'',_0x260e09=this[_0x4a9c('0x52d')]||'',_0x165431=!0x1,_0x59c618='';this[_0x4a9c('0x368')]?_0x165431=_0xb44aa6+this[_0x4a9c('0x368')]:this[_0x4a9c('0x65a')]&&(_0x165431=_0xb44aa6+(-0x1===this[_0x4a9c('0x65a')][_0x4a9c('0x312')](':')?this[_0x4a9c('0x65a')]:'['+this[_0x4a9c('0x65a')]+']'),this['port']&&(_0x165431+=':'+this[_0x4a9c('0x210')])),this[_0x4a9c('0x3f')]&&_0x213896[_0x4a9c('0x705')](this[_0x4a9c('0x3f')])&&Object[_0x4a9c('0x13b')](this[_0x4a9c('0x3f')])[_0x4a9c('0x3e1')]&&(_0x59c618=_0x11334e[_0x4a9c('0x75b')](this[_0x4a9c('0x3f')]));var _0x51c564=this[_0x4a9c('0x1d7')]||_0x59c618&&'?'+_0x59c618||'';return _0x5694d7&&':'!==_0x5694d7[_0x4a9c('0x48f')](-0x1)&&(_0x5694d7+=':'),this[_0x4a9c('0x295')]||(!_0x5694d7||_0x464a9a[_0x5694d7])&&!0x1!==_0x165431?(_0x165431='//'+(_0x165431||''),_0x552cb7&&'/'!==_0x552cb7[_0x4a9c('0x617')](0x0)&&(_0x552cb7='/'+_0x552cb7)):_0x165431||(_0x165431=''),_0x260e09&&'#'!==_0x260e09[_0x4a9c('0x617')](0x0)&&(_0x260e09='#'+_0x260e09),_0x51c564&&'?'!==_0x51c564[_0x4a9c('0x617')](0x0)&&(_0x51c564='?'+_0x51c564),_0x5694d7+_0x165431+(_0x552cb7=_0x552cb7[_0x4a9c('0x4e5')](/[?#]/g,function(_0x394d72){return encodeURIComponent(_0x394d72);}))+(_0x51c564=_0x51c564[_0x4a9c('0x4e5')]('#',_0x4a9c('0xa6')))+_0x260e09;},_0x39dfeb['prototype'][_0x4a9c('0x1af')]=function(_0x2eb490){return this[_0x4a9c('0x6d9')](_0x1a5a4d(_0x2eb490,!0x1,!0x0))[_0x4a9c('0x392')]();},_0x39dfeb[_0x4a9c('0x216')][_0x4a9c('0x6d9')]=function(_0x48e0af){if(_0x213896[_0x4a9c('0x776')](_0x48e0af)){var _0x1eb9d7=new _0x39dfeb();_0x1eb9d7['parse'](_0x48e0af,!0x1,!0x0),_0x48e0af=_0x1eb9d7;}for(var _0x2c35b9=new _0x39dfeb(),_0x84dd6b=Object[_0x4a9c('0x13b')](this),_0x3d4945=0x0;_0x3d4945<_0x84dd6b['length'];_0x3d4945++){var _0x2235fc=_0x84dd6b[_0x3d4945];_0x2c35b9[_0x2235fc]=this[_0x2235fc];}if(_0x2c35b9[_0x4a9c('0x52d')]=_0x48e0af[_0x4a9c('0x52d')],''===_0x48e0af[_0x4a9c('0x4a0')])return _0x2c35b9[_0x4a9c('0x4a0')]=_0x2c35b9['format'](),_0x2c35b9;if(_0x48e0af[_0x4a9c('0x295')]&&!_0x48e0af[_0x4a9c('0x73e')]){for(var _0x20ad5c=Object[_0x4a9c('0x13b')](_0x48e0af),_0x3260b7=0x0;_0x3260b7<_0x20ad5c['length'];_0x3260b7++){var _0x539f66=_0x20ad5c[_0x3260b7];_0x4a9c('0x73e')!==_0x539f66&&(_0x2c35b9[_0x539f66]=_0x48e0af[_0x539f66]);}return _0x464a9a[_0x2c35b9[_0x4a9c('0x73e')]]&&_0x2c35b9[_0x4a9c('0x65a')]&&!_0x2c35b9[_0x4a9c('0x6fe')]&&(_0x2c35b9[_0x4a9c('0x1a5')]=_0x2c35b9[_0x4a9c('0x6fe')]='/'),_0x2c35b9[_0x4a9c('0x4a0')]=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;}if(_0x48e0af['protocol']&&_0x48e0af['protocol']!==_0x2c35b9[_0x4a9c('0x73e')]){if(!_0x464a9a[_0x48e0af[_0x4a9c('0x73e')]]){for(var _0xae69b7=Object[_0x4a9c('0x13b')](_0x48e0af),_0x113902=0x0;_0x113902<_0xae69b7[_0x4a9c('0x3e1')];_0x113902++){var _0x12d67e=_0xae69b7[_0x113902];_0x2c35b9[_0x12d67e]=_0x48e0af[_0x12d67e];}return _0x2c35b9['href']=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;}if(_0x2c35b9[_0x4a9c('0x73e')]=_0x48e0af['protocol'],_0x48e0af[_0x4a9c('0x368')]||_0x4b96b2[_0x48e0af[_0x4a9c('0x73e')]])_0x2c35b9[_0x4a9c('0x6fe')]=_0x48e0af[_0x4a9c('0x6fe')];else{for(var _0x330584=(_0x48e0af[_0x4a9c('0x6fe')]||'')[_0x4a9c('0x41e')]('/');_0x330584[_0x4a9c('0x3e1')]&&!(_0x48e0af[_0x4a9c('0x368')]=_0x330584[_0x4a9c('0x70b')]()););_0x48e0af[_0x4a9c('0x368')]||(_0x48e0af[_0x4a9c('0x368')]=''),_0x48e0af[_0x4a9c('0x65a')]||(_0x48e0af[_0x4a9c('0x65a')]=''),''!==_0x330584[0x0]&&_0x330584['unshift'](''),_0x330584['length']<0x2&&_0x330584[_0x4a9c('0x7b2')](''),_0x2c35b9[_0x4a9c('0x6fe')]=_0x330584[_0x4a9c('0x64d')]('/');}if(_0x2c35b9[_0x4a9c('0x1d7')]=_0x48e0af[_0x4a9c('0x1d7')],_0x2c35b9[_0x4a9c('0x3f')]=_0x48e0af[_0x4a9c('0x3f')],_0x2c35b9[_0x4a9c('0x368')]=_0x48e0af[_0x4a9c('0x368')]||'',_0x2c35b9['auth']=_0x48e0af[_0x4a9c('0x143')],_0x2c35b9[_0x4a9c('0x65a')]=_0x48e0af['hostname']||_0x48e0af[_0x4a9c('0x368')],_0x2c35b9[_0x4a9c('0x210')]=_0x48e0af[_0x4a9c('0x210')],_0x2c35b9['pathname']||_0x2c35b9[_0x4a9c('0x1d7')]){var _0x4cb934=_0x2c35b9[_0x4a9c('0x6fe')]||'',_0x1f35a1=_0x2c35b9['search']||'';_0x2c35b9['path']=_0x4cb934+_0x1f35a1;}return _0x2c35b9[_0x4a9c('0x295')]=_0x2c35b9[_0x4a9c('0x295')]||_0x48e0af['slashes'],_0x2c35b9['href']=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;}var _0x22991b=_0x2c35b9[_0x4a9c('0x6fe')]&&'/'===_0x2c35b9[_0x4a9c('0x6fe')][_0x4a9c('0x617')](0x0),_0x40c25b=_0x48e0af[_0x4a9c('0x368')]||_0x48e0af[_0x4a9c('0x6fe')]&&'/'===_0x48e0af[_0x4a9c('0x6fe')][_0x4a9c('0x617')](0x0),_0x23e646=_0x40c25b||_0x22991b||_0x2c35b9[_0x4a9c('0x368')]&&_0x48e0af['pathname'],_0x5d3bef=_0x23e646,_0x15678c=_0x2c35b9[_0x4a9c('0x6fe')]&&_0x2c35b9[_0x4a9c('0x6fe')]['split']('/')||[],_0x35a7dd=(_0x330584=_0x48e0af[_0x4a9c('0x6fe')]&&_0x48e0af[_0x4a9c('0x6fe')][_0x4a9c('0x41e')]('/')||[],_0x2c35b9['protocol']&&!_0x464a9a[_0x2c35b9[_0x4a9c('0x73e')]]);if(_0x35a7dd&&(_0x2c35b9[_0x4a9c('0x65a')]='',_0x2c35b9[_0x4a9c('0x210')]=null,_0x2c35b9[_0x4a9c('0x368')]&&(''===_0x15678c[0x0]?_0x15678c[0x0]=_0x2c35b9[_0x4a9c('0x368')]:_0x15678c[_0x4a9c('0x7b2')](_0x2c35b9['host'])),_0x2c35b9[_0x4a9c('0x368')]='',_0x48e0af['protocol']&&(_0x48e0af[_0x4a9c('0x65a')]=null,_0x48e0af[_0x4a9c('0x210')]=null,_0x48e0af[_0x4a9c('0x368')]&&(''===_0x330584[0x0]?_0x330584[0x0]=_0x48e0af[_0x4a9c('0x368')]:_0x330584[_0x4a9c('0x7b2')](_0x48e0af[_0x4a9c('0x368')])),_0x48e0af[_0x4a9c('0x368')]=null),_0x23e646=_0x23e646&&(''===_0x330584[0x0]||''===_0x15678c[0x0])),_0x40c25b)_0x2c35b9['host']=_0x48e0af[_0x4a9c('0x368')]||''===_0x48e0af['host']?_0x48e0af['host']:_0x2c35b9[_0x4a9c('0x368')],_0x2c35b9['hostname']=_0x48e0af[_0x4a9c('0x65a')]||''===_0x48e0af['hostname']?_0x48e0af['hostname']:_0x2c35b9[_0x4a9c('0x65a')],_0x2c35b9[_0x4a9c('0x1d7')]=_0x48e0af[_0x4a9c('0x1d7')],_0x2c35b9[_0x4a9c('0x3f')]=_0x48e0af[_0x4a9c('0x3f')],_0x15678c=_0x330584;else if(_0x330584[_0x4a9c('0x3e1')])_0x15678c||(_0x15678c=[]),_0x15678c[_0x4a9c('0x573')](),_0x15678c=_0x15678c[_0x4a9c('0x4fc')](_0x330584),_0x2c35b9['search']=_0x48e0af[_0x4a9c('0x1d7')],_0x2c35b9[_0x4a9c('0x3f')]=_0x48e0af[_0x4a9c('0x3f')];else if(!_0x213896[_0x4a9c('0x35b')](_0x48e0af[_0x4a9c('0x1d7')]))return _0x35a7dd&&(_0x2c35b9[_0x4a9c('0x65a')]=_0x2c35b9['host']=_0x15678c[_0x4a9c('0x70b')](),(_0x34630e=!!(_0x2c35b9[_0x4a9c('0x368')]&&_0x2c35b9[_0x4a9c('0x368')][_0x4a9c('0x312')]('@')>0x0)&&_0x2c35b9[_0x4a9c('0x368')][_0x4a9c('0x41e')]('@'))&&(_0x2c35b9[_0x4a9c('0x143')]=_0x34630e[_0x4a9c('0x70b')](),_0x2c35b9['host']=_0x2c35b9[_0x4a9c('0x65a')]=_0x34630e[_0x4a9c('0x70b')]())),_0x2c35b9[_0x4a9c('0x1d7')]=_0x48e0af[_0x4a9c('0x1d7')],_0x2c35b9[_0x4a9c('0x3f')]=_0x48e0af['query'],_0x213896[_0x4a9c('0x740')](_0x2c35b9['pathname'])&&_0x213896[_0x4a9c('0x740')](_0x2c35b9['search'])||(_0x2c35b9[_0x4a9c('0x1a5')]=(_0x2c35b9[_0x4a9c('0x6fe')]?_0x2c35b9[_0x4a9c('0x6fe')]:'')+(_0x2c35b9['search']?_0x2c35b9[_0x4a9c('0x1d7')]:'')),_0x2c35b9[_0x4a9c('0x4a0')]=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;if(!_0x15678c['length'])return _0x2c35b9[_0x4a9c('0x6fe')]=null,_0x2c35b9[_0x4a9c('0x1d7')]?_0x2c35b9[_0x4a9c('0x1a5')]='/'+_0x2c35b9[_0x4a9c('0x1d7')]:_0x2c35b9[_0x4a9c('0x1a5')]=null,_0x2c35b9[_0x4a9c('0x4a0')]=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;for(var _0x45c4e2=_0x15678c[_0x4a9c('0x14')](-0x1)[0x0],_0x4b2ab7=(_0x2c35b9[_0x4a9c('0x368')]||_0x48e0af[_0x4a9c('0x368')]||_0x15678c[_0x4a9c('0x3e1')]>0x1)&&('.'===_0x45c4e2||'..'===_0x45c4e2)||''===_0x45c4e2,_0x24c60c=0x0,_0x26ca9e=_0x15678c['length'];_0x26ca9e>=0x0;_0x26ca9e--)'.'===(_0x45c4e2=_0x15678c[_0x26ca9e])?_0x15678c[_0x4a9c('0x7d5')](_0x26ca9e,0x1):'..'===_0x45c4e2?(_0x15678c['splice'](_0x26ca9e,0x1),_0x24c60c++):_0x24c60c&&(_0x15678c[_0x4a9c('0x7d5')](_0x26ca9e,0x1),_0x24c60c--);if(!_0x23e646&&!_0x5d3bef)for(;_0x24c60c--;_0x24c60c)_0x15678c['unshift']('..');!_0x23e646||''===_0x15678c[0x0]||_0x15678c[0x0]&&'/'===_0x15678c[0x0][_0x4a9c('0x617')](0x0)||_0x15678c[_0x4a9c('0x7b2')](''),_0x4b2ab7&&'/'!==_0x15678c[_0x4a9c('0x64d')]('/')[_0x4a9c('0x48f')](-0x1)&&_0x15678c[_0x4a9c('0x2d2')]('');var _0x34630e,_0x13832a=''===_0x15678c[0x0]||_0x15678c[0x0]&&'/'===_0x15678c[0x0][_0x4a9c('0x617')](0x0);return _0x35a7dd&&(_0x2c35b9[_0x4a9c('0x65a')]=_0x2c35b9[_0x4a9c('0x368')]=_0x13832a?'':_0x15678c['length']?_0x15678c['shift']():'',(_0x34630e=!!(_0x2c35b9[_0x4a9c('0x368')]&&_0x2c35b9['host'][_0x4a9c('0x312')]('@')>0x0)&&_0x2c35b9['host']['split']('@'))&&(_0x2c35b9[_0x4a9c('0x143')]=_0x34630e[_0x4a9c('0x70b')](),_0x2c35b9[_0x4a9c('0x368')]=_0x2c35b9['hostname']=_0x34630e[_0x4a9c('0x70b')]())),(_0x23e646=_0x23e646||_0x2c35b9[_0x4a9c('0x368')]&&_0x15678c[_0x4a9c('0x3e1')])&&!_0x13832a&&_0x15678c['unshift'](''),_0x15678c[_0x4a9c('0x3e1')]?_0x2c35b9[_0x4a9c('0x6fe')]=_0x15678c['join']('/'):(_0x2c35b9[_0x4a9c('0x6fe')]=null,_0x2c35b9[_0x4a9c('0x1a5')]=null),_0x213896[_0x4a9c('0x740')](_0x2c35b9['pathname'])&&_0x213896['isNull'](_0x2c35b9[_0x4a9c('0x1d7')])||(_0x2c35b9['path']=(_0x2c35b9[_0x4a9c('0x6fe')]?_0x2c35b9[_0x4a9c('0x6fe')]:'')+(_0x2c35b9[_0x4a9c('0x1d7')]?_0x2c35b9[_0x4a9c('0x1d7')]:'')),_0x2c35b9[_0x4a9c('0x143')]=_0x48e0af[_0x4a9c('0x143')]||_0x2c35b9[_0x4a9c('0x143')],_0x2c35b9[_0x4a9c('0x295')]=_0x2c35b9['slashes']||_0x48e0af['slashes'],_0x2c35b9[_0x4a9c('0x4a0')]=_0x2c35b9[_0x4a9c('0x392')](),_0x2c35b9;},_0x39dfeb[_0x4a9c('0x216')]['parseHost']=function(){var _0xc6efe=this['host'],_0x3c4368=_0x4d98bc[_0x4a9c('0x560')](_0xc6efe);_0x3c4368&&(':'!==(_0x3c4368=_0x3c4368[0x0])&&(this[_0x4a9c('0x210')]=_0x3c4368[_0x4a9c('0x48f')](0x1)),_0xc6efe=_0xc6efe[_0x4a9c('0x48f')](0x0,_0xc6efe[_0x4a9c('0x3e1')]-_0x3c4368['length'])),_0xc6efe&&(this[_0x4a9c('0x65a')]=_0xc6efe);};},function(_0x12bff3,_0x223b98,_0x2214e2){(function(_0x56bc3c,_0x26ca07){var _0x18ab6f;!function(_0x2b4051){_0x223b98&&_0x223b98['nodeType'],_0x56bc3c&&_0x56bc3c[_0x4a9c('0x666')];var _0x369975='object'==typeof _0x26ca07&&_0x26ca07;_0x369975[_0x4a9c('0x44b')]!==_0x369975&&_0x369975[_0x4a9c('0xd3')]!==_0x369975&&_0x369975['self'];var _0x37f8ea,_0x434239=0x7fffffff,_0x160252=0x24,_0x56ded8=/^xn--/,_0x1fcedf=/[^\x20-\x7E]/,_0x3a9da1=/[\x2E\u3002\uFF0E\uFF61]/g,_0x4caf1b={'overflow':_0x4a9c('0x42e'),'not-basic':_0x4a9c('0x794'),'invalid-input':_0x4a9c('0x7a5')},_0x5a77c2=Math[_0x4a9c('0xa9')],_0x46199d=String[_0x4a9c('0x3b9')];function _0x3b566b(_0x3e801e){throw new RangeError(_0x4caf1b[_0x3e801e]);}function _0x198ed5(_0x330b5e,_0x208f13){for(var _0x526f71=_0x330b5e['length'],_0x1b91d8=[];_0x526f71--;)_0x1b91d8[_0x526f71]=_0x208f13(_0x330b5e[_0x526f71]);return _0x1b91d8;}function _0xe9d167(_0x4fbf87,_0xee9670){var _0x2d0715=_0x4fbf87[_0x4a9c('0x41e')]('@'),_0x1b4416='';return _0x2d0715[_0x4a9c('0x3e1')]>0x1&&(_0x1b4416=_0x2d0715[0x0]+'@',_0x4fbf87=_0x2d0715[0x1]),_0x1b4416+_0x198ed5((_0x4fbf87=_0x4fbf87[_0x4a9c('0x4e5')](_0x3a9da1,'.'))[_0x4a9c('0x41e')]('.'),_0xee9670)[_0x4a9c('0x64d')]('.');}function _0x33326e(_0x2f233b){for(var _0x580b2a,_0x489e32,_0x4c7d71=[],_0x3794d7=0x0,_0x20ba62=_0x2f233b['length'];_0x3794d7<_0x20ba62;)(_0x580b2a=_0x2f233b['charCodeAt'](_0x3794d7++))>=0xd800&&_0x580b2a<=0xdbff&&_0x3794d7<_0x20ba62?0xdc00==(0xfc00&(_0x489e32=_0x2f233b[_0x4a9c('0x611')](_0x3794d7++)))?_0x4c7d71[_0x4a9c('0x2d2')](((0x3ff&_0x580b2a)<<0xa)+(0x3ff&_0x489e32)+0x10000):(_0x4c7d71[_0x4a9c('0x2d2')](_0x580b2a),_0x3794d7--):_0x4c7d71[_0x4a9c('0x2d2')](_0x580b2a);return _0x4c7d71;}function _0x3c89e6(_0x42c034){return _0x198ed5(_0x42c034,function(_0x2271ce){var _0x4c9ae1='';return _0x2271ce>0xffff&&(_0x4c9ae1+=_0x46199d((_0x2271ce-=0x10000)>>>0xa&0x3ff|0xd800),_0x2271ce=0xdc00|0x3ff&_0x2271ce),_0x4c9ae1+_0x46199d(_0x2271ce);})[_0x4a9c('0x64d')]('');}function _0x16e707(_0x2fdc03){return _0x2fdc03-0x30<0xa?_0x2fdc03-0x16:_0x2fdc03-0x41<0x1a?_0x2fdc03-0x41:_0x2fdc03-0x61<0x1a?_0x2fdc03-0x61:_0x160252;}function _0x10ee81(_0x1978c9,_0x35d5ed){return _0x1978c9+0x16+0x4b*(_0x1978c9<0x1a)-((0x0!=_0x35d5ed)<<0x5);}function _0x534d1c(_0x1d302d,_0x509150,_0x34ca56){var _0x1b2c65=0x0;for(_0x1d302d=_0x34ca56?_0x5a77c2(_0x1d302d/0x2bc):_0x1d302d>>0x1,_0x1d302d+=_0x5a77c2(_0x1d302d/_0x509150);_0x1d302d>0x1c7;_0x1b2c65+=_0x160252)_0x1d302d=_0x5a77c2(_0x1d302d/0x23);return _0x5a77c2(_0x1b2c65+0x24*_0x1d302d/(_0x1d302d+0x26));}function _0x526d6f(_0x1948f2){var _0x2b0c95,_0x19d241,_0x814aca,_0x1e2291,_0x42cd51,_0x29ccef,_0x471c41,_0x1807fb,_0x10c638,_0x290ac2,_0x550aa5=[],_0x4425ad=_0x1948f2[_0x4a9c('0x3e1')],_0x150cd8=0x0,_0x319412=0x80,_0x6fb1b9=0x48;for((_0x19d241=_0x1948f2[_0x4a9c('0x591')]('-'))<0x0&&(_0x19d241=0x0),_0x814aca=0x0;_0x814aca<_0x19d241;++_0x814aca)_0x1948f2[_0x4a9c('0x611')](_0x814aca)>=0x80&&_0x3b566b('not-basic'),_0x550aa5[_0x4a9c('0x2d2')](_0x1948f2[_0x4a9c('0x611')](_0x814aca));for(_0x1e2291=_0x19d241>0x0?_0x19d241+0x1:0x0;_0x1e2291<_0x4425ad;){for(_0x42cd51=_0x150cd8,_0x29ccef=0x1,_0x471c41=_0x160252;_0x1e2291>=_0x4425ad&&_0x3b566b('invalid-input'),((_0x1807fb=_0x16e707(_0x1948f2[_0x4a9c('0x611')](_0x1e2291++)))>=_0x160252||_0x1807fb>_0x5a77c2((_0x434239-_0x150cd8)/_0x29ccef))&&_0x3b566b(_0x4a9c('0x6b7')),_0x150cd8+=_0x1807fb*_0x29ccef,!(_0x1807fb<(_0x10c638=_0x471c41<=_0x6fb1b9?0x1:_0x471c41>=_0x6fb1b9+0x1a?0x1a:_0x471c41-_0x6fb1b9));_0x471c41+=_0x160252)_0x29ccef>_0x5a77c2(_0x434239/(_0x290ac2=_0x160252-_0x10c638))&&_0x3b566b(_0x4a9c('0x6b7')),_0x29ccef*=_0x290ac2;_0x6fb1b9=_0x534d1c(_0x150cd8-_0x42cd51,_0x2b0c95=_0x550aa5[_0x4a9c('0x3e1')]+0x1,0x0==_0x42cd51),_0x5a77c2(_0x150cd8/_0x2b0c95)>_0x434239-_0x319412&&_0x3b566b(_0x4a9c('0x6b7')),_0x319412+=_0x5a77c2(_0x150cd8/_0x2b0c95),_0x150cd8%=_0x2b0c95,_0x550aa5[_0x4a9c('0x7d5')](_0x150cd8++,0x0,_0x319412);}return _0x3c89e6(_0x550aa5);}function _0x7af80e(_0x1e3366){var _0x2475b1,_0xd935f6,_0x205434,_0x33c077,_0x189cbe,_0x16617f,_0x5f0161,_0x40d25a,_0xf29d2f,_0x194630,_0x3039a1,_0x857c41,_0x3a70bd,_0x339013,_0x48d056,_0x10e979=[];for(_0x857c41=(_0x1e3366=_0x33326e(_0x1e3366))[_0x4a9c('0x3e1')],_0x2475b1=0x80,_0xd935f6=0x0,_0x189cbe=0x48,_0x16617f=0x0;_0x16617f<_0x857c41;++_0x16617f)(_0x3039a1=_0x1e3366[_0x16617f])<0x80&&_0x10e979[_0x4a9c('0x2d2')](_0x46199d(_0x3039a1));for(_0x205434=_0x33c077=_0x10e979['length'],_0x33c077&&_0x10e979[_0x4a9c('0x2d2')]('-');_0x205434<_0x857c41;){for(_0x5f0161=_0x434239,_0x16617f=0x0;_0x16617f<_0x857c41;++_0x16617f)(_0x3039a1=_0x1e3366[_0x16617f])>=_0x2475b1&&_0x3039a1<_0x5f0161&&(_0x5f0161=_0x3039a1);for(_0x5f0161-_0x2475b1>_0x5a77c2((_0x434239-_0xd935f6)/(_0x3a70bd=_0x205434+0x1))&&_0x3b566b(_0x4a9c('0x6b7')),_0xd935f6+=(_0x5f0161-_0x2475b1)*_0x3a70bd,_0x2475b1=_0x5f0161,_0x16617f=0x0;_0x16617f<_0x857c41;++_0x16617f)if((_0x3039a1=_0x1e3366[_0x16617f])<_0x2475b1&&++_0xd935f6>_0x434239&&_0x3b566b(_0x4a9c('0x6b7')),_0x3039a1==_0x2475b1){for(_0x40d25a=_0xd935f6,_0xf29d2f=_0x160252;!(_0x40d25a<(_0x194630=_0xf29d2f<=_0x189cbe?0x1:_0xf29d2f>=_0x189cbe+0x1a?0x1a:_0xf29d2f-_0x189cbe));_0xf29d2f+=_0x160252)_0x48d056=_0x40d25a-_0x194630,_0x339013=_0x160252-_0x194630,_0x10e979['push'](_0x46199d(_0x10ee81(_0x194630+_0x48d056%_0x339013,0x0))),_0x40d25a=_0x5a77c2(_0x48d056/_0x339013);_0x10e979[_0x4a9c('0x2d2')](_0x46199d(_0x10ee81(_0x40d25a,0x0))),_0x189cbe=_0x534d1c(_0xd935f6,_0x3a70bd,_0x205434==_0x33c077),_0xd935f6=0x0,++_0x205434;}++_0xd935f6,++_0x2475b1;}return _0x10e979[_0x4a9c('0x64d')]('');}_0x37f8ea={'version':'1.4.1','ucs2':{'decode':_0x33326e,'encode':_0x3c89e6},'decode':_0x526d6f,'encode':_0x7af80e,'toASCII':function(_0x4b23a1){return _0xe9d167(_0x4b23a1,function(_0x11836a){return _0x1fcedf[_0x4a9c('0x504')](_0x11836a)?_0x4a9c('0x44a')+_0x7af80e(_0x11836a):_0x11836a;});},'toUnicode':function(_0x4f3444){return _0xe9d167(_0x4f3444,function(_0x292d8b){return _0x56ded8['test'](_0x292d8b)?_0x526d6f(_0x292d8b[_0x4a9c('0x14')](0x4)['toLowerCase']()):_0x292d8b;});}},void 0x0===(_0x18ab6f=function(){return _0x37f8ea;}[_0x4a9c('0xc3')](_0x223b98,_0x2214e2,_0x223b98,_0x56bc3c))||(_0x56bc3c[_0x4a9c('0x14f')]=_0x18ab6f);}();}[_0x4a9c('0xc3')](this,_0x2214e2(0x3e)(_0x12bff3),_0x2214e2(0xc)));},function(_0x2862c3,_0x5ad250){_0x2862c3[_0x4a9c('0x14f')]=function(_0x439a4b){return _0x439a4b[_0x4a9c('0x7d0')]||(_0x439a4b[_0x4a9c('0xc7')]=function(){},_0x439a4b[_0x4a9c('0x538')]=[],_0x439a4b['children']||(_0x439a4b[_0x4a9c('0x45c')]=[]),Object[_0x4a9c('0x18d')](_0x439a4b,_0x4a9c('0x520'),{'enumerable':!0x0,'get':function(){return _0x439a4b['l'];}}),Object['defineProperty'](_0x439a4b,'id',{'enumerable':!0x0,'get':function(){return _0x439a4b['i'];}}),_0x439a4b[_0x4a9c('0x7d0')]=0x1),_0x439a4b;};},function(_0xf8b954,_0x565ed0,_0x297631){'use strict';_0xf8b954[_0x4a9c('0x14f')]={'isString':function(_0x2fbc0d){return _0x4a9c('0x290')==typeof _0x2fbc0d;},'isObject':function(_0x9615){return _0x4a9c('0x554')==typeof _0x9615&&null!==_0x9615;},'isNull':function(_0x36656a){return null===_0x36656a;},'isNullOrUndefined':function(_0x44a38f){return null==_0x44a38f;}};},function(_0x154887,_0x388ece,_0xd41e76){'use strict';_0x388ece[_0x4a9c('0x5bd')]=_0x388ece['parse']=_0xd41e76(0x41),_0x388ece['encode']=_0x388ece[_0x4a9c('0x75b')]=_0xd41e76(0x42);},function(_0x12bf16,_0x2ce53c,_0x3b1002){'use strict';function _0x55d7dc(_0x2fed13,_0x12e40b){return Object[_0x4a9c('0x216')][_0x4a9c('0x4e')][_0x4a9c('0xc3')](_0x2fed13,_0x12e40b);}_0x12bf16[_0x4a9c('0x14f')]=function(_0xc264d0,_0x3123f7,_0x12d38d,_0x46d21c){_0x3123f7=_0x3123f7||'&',_0x12d38d=_0x12d38d||'=';var _0x3f3d5e={};if(_0x4a9c('0x290')!=typeof _0xc264d0||0x0===_0xc264d0[_0x4a9c('0x3e1')])return _0x3f3d5e;var _0x34b9b0=/\+/g;_0xc264d0=_0xc264d0[_0x4a9c('0x41e')](_0x3123f7);var _0x22d1ba=0x3e8;_0x46d21c&&_0x4a9c('0x27')==typeof _0x46d21c[_0x4a9c('0x1a9')]&&(_0x22d1ba=_0x46d21c[_0x4a9c('0x1a9')]);var _0x30a5cf=_0xc264d0[_0x4a9c('0x3e1')];_0x22d1ba>0x0&&_0x30a5cf>_0x22d1ba&&(_0x30a5cf=_0x22d1ba);for(var _0x373ee0=0x0;_0x373ee0<_0x30a5cf;++_0x373ee0){var _0x153a02,_0x5093e2,_0x830335,_0x3e387c,_0x27b3c1=_0xc264d0[_0x373ee0][_0x4a9c('0x4e5')](_0x34b9b0,_0x4a9c('0x448')),_0x47b863=_0x27b3c1[_0x4a9c('0x312')](_0x12d38d);_0x47b863>=0x0?(_0x153a02=_0x27b3c1['substr'](0x0,_0x47b863),_0x5093e2=_0x27b3c1[_0x4a9c('0x48f')](_0x47b863+0x1)):(_0x153a02=_0x27b3c1,_0x5093e2=''),_0x830335=decodeURIComponent(_0x153a02),_0x3e387c=decodeURIComponent(_0x5093e2),_0x55d7dc(_0x3f3d5e,_0x830335)?_0x15599f(_0x3f3d5e[_0x830335])?_0x3f3d5e[_0x830335][_0x4a9c('0x2d2')](_0x3e387c):_0x3f3d5e[_0x830335]=[_0x3f3d5e[_0x830335],_0x3e387c]:_0x3f3d5e[_0x830335]=_0x3e387c;}return _0x3f3d5e;};var _0x15599f=Array[_0x4a9c('0x4c8')]||function(_0x50f6aa){return _0x4a9c('0x2f4')===Object[_0x4a9c('0x216')][_0x4a9c('0x1c1')]['call'](_0x50f6aa);};},function(_0x1739c3,_0x383fb2,_0x364a8f){'use strict';var _0x57677a=function(_0x11443f){switch(typeof _0x11443f){case _0x4a9c('0x290'):return _0x11443f;case _0x4a9c('0x3e9'):return _0x11443f?_0x4a9c('0x546'):'false';case _0x4a9c('0x27'):return isFinite(_0x11443f)?_0x11443f:'';default:return'';}};_0x1739c3['exports']=function(_0x4ac66c,_0x467989,_0x57dd59,_0x581dd2){return _0x467989=_0x467989||'&',_0x57dd59=_0x57dd59||'=',null===_0x4ac66c&&(_0x4ac66c=void 0x0),'object'==typeof _0x4ac66c?_0x18ede6(_0x1bd03b(_0x4ac66c),function(_0x3997a1){var _0x5b6859=encodeURIComponent(_0x57677a(_0x3997a1))+_0x57dd59;return _0x57d747(_0x4ac66c[_0x3997a1])?_0x18ede6(_0x4ac66c[_0x3997a1],function(_0x3ba13e){return _0x5b6859+encodeURIComponent(_0x57677a(_0x3ba13e));})[_0x4a9c('0x64d')](_0x467989):_0x5b6859+encodeURIComponent(_0x57677a(_0x4ac66c[_0x3997a1]));})[_0x4a9c('0x64d')](_0x467989):_0x581dd2?encodeURIComponent(_0x57677a(_0x581dd2))+_0x57dd59+encodeURIComponent(_0x57677a(_0x4ac66c)):'';};var _0x57d747=Array['isArray']||function(_0x6fa259){return'[object\x20Array]'===Object[_0x4a9c('0x216')][_0x4a9c('0x1c1')][_0x4a9c('0xc3')](_0x6fa259);};function _0x18ede6(_0x1b0d22,_0x3ba080){if(_0x1b0d22[_0x4a9c('0x46f')])return _0x1b0d22['map'](_0x3ba080);for(var _0x271973=[],_0x3036bc=0x0;_0x3036bc<_0x1b0d22[_0x4a9c('0x3e1')];_0x3036bc++)_0x271973['push'](_0x3ba080(_0x1b0d22[_0x3036bc],_0x3036bc));return _0x271973;}var _0x1bd03b=Object[_0x4a9c('0x13b')]||function(_0x51b2b8){var _0x147e9b=[];for(var _0x1a3d62 in _0x51b2b8)Object[_0x4a9c('0x216')]['hasOwnProperty'][_0x4a9c('0xc3')](_0x51b2b8,_0x1a3d62)&&_0x147e9b[_0x4a9c('0x2d2')](_0x1a3d62);return _0x147e9b;};},function(_0x3a0442,_0x168a8a,_0x1b4120){!function(){var _0x18f050=_0x1b4120(0x44),_0x12d740=_0x1b4120(0x14)[_0x4a9c('0x655')],_0x3edca8=_0x1b4120(0x45),_0x5efe96=_0x1b4120(0x14)[_0x4a9c('0x606')],_0x4bb12f=function(_0x8f5d15,_0x4125d3){_0x8f5d15[_0x4a9c('0x3c8')]==String?_0x8f5d15=_0x4125d3&&_0x4a9c('0x237')===_0x4125d3['encoding']?_0x5efe96['stringToBytes'](_0x8f5d15):_0x12d740[_0x4a9c('0x410')](_0x8f5d15):_0x3edca8(_0x8f5d15)?_0x8f5d15=Array[_0x4a9c('0x216')]['slice'][_0x4a9c('0xc3')](_0x8f5d15,0x0):Array['isArray'](_0x8f5d15)||(_0x8f5d15=_0x8f5d15[_0x4a9c('0x1c1')]());for(var _0x25dcf2=_0x18f050['bytesToWords'](_0x8f5d15),_0x13c033=0x8*_0x8f5d15[_0x4a9c('0x3e1')],_0x73224e=0x67452301,_0x426da5=-0x10325477,_0x571675=-0x67452302,_0x2b0d29=0x10325476,_0x5660b3=0x0;_0x5660b3<_0x25dcf2['length'];_0x5660b3++)_0x25dcf2[_0x5660b3]=0xff00ff&(_0x25dcf2[_0x5660b3]<<0x8|_0x25dcf2[_0x5660b3]>>>0x18)|0xff00ff00&(_0x25dcf2[_0x5660b3]<<0x18|_0x25dcf2[_0x5660b3]>>>0x8);_0x25dcf2[_0x13c033>>>0x5]|=0x80<<_0x13c033%0x20,_0x25dcf2[0xe+(_0x13c033+0x40>>>0x9<<0x4)]=_0x13c033;var _0xa9ec56=_0x4bb12f['_ff'],_0x468217=_0x4bb12f[_0x4a9c('0xc')],_0x258417=_0x4bb12f[_0x4a9c('0x7fd')],_0x404ce6=_0x4bb12f['_ii'];for(_0x5660b3=0x0;_0x5660b3<_0x25dcf2[_0x4a9c('0x3e1')];_0x5660b3+=0x10){var _0x441b4e=_0x73224e,_0x1d55c4=_0x426da5,_0x1c8a17=_0x571675,_0x1bf956=_0x2b0d29;_0x426da5=_0x404ce6(_0x426da5=_0x404ce6(_0x426da5=_0x404ce6(_0x426da5=_0x404ce6(_0x426da5=_0x258417(_0x426da5=_0x258417(_0x426da5=_0x258417(_0x426da5=_0x258417(_0x426da5=_0x468217(_0x426da5=_0x468217(_0x426da5=_0x468217(_0x426da5=_0x468217(_0x426da5=_0xa9ec56(_0x426da5=_0xa9ec56(_0x426da5=_0xa9ec56(_0x426da5=_0xa9ec56(_0x426da5,_0x571675=_0xa9ec56(_0x571675,_0x2b0d29=_0xa9ec56(_0x2b0d29,_0x73224e=_0xa9ec56(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x0],0x7,-0x28955b88),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x1],0xc,-0x173848aa),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x2],0x11,0x242070db),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x3],0x16,-0x3e423112),_0x571675=_0xa9ec56(_0x571675,_0x2b0d29=_0xa9ec56(_0x2b0d29,_0x73224e=_0xa9ec56(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x4],0x7,-0xa83f051),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x5],0xc,0x4787c62a),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x6],0x11,-0x57cfb9ed),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x7],0x16,-0x2b96aff),_0x571675=_0xa9ec56(_0x571675,_0x2b0d29=_0xa9ec56(_0x2b0d29,_0x73224e=_0xa9ec56(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x8],0x7,0x698098d8),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x9],0xc,-0x74bb0851),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xa],0x11,-0xa44f),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xb],0x16,-0x76a32842),_0x571675=_0xa9ec56(_0x571675,_0x2b0d29=_0xa9ec56(_0x2b0d29,_0x73224e=_0xa9ec56(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0xc],0x7,0x6b901122),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xd],0xc,-0x2678e6d),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xe],0x11,-0x5986bc72),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xf],0x16,0x49b40821),_0x571675=_0x468217(_0x571675,_0x2b0d29=_0x468217(_0x2b0d29,_0x73224e=_0x468217(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x1],0x5,-0x9e1da9e),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x6],0x9,-0x3fbf4cc0),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xb],0xe,0x265e5a51),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x0],0x14,-0x16493856),_0x571675=_0x468217(_0x571675,_0x2b0d29=_0x468217(_0x2b0d29,_0x73224e=_0x468217(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x5],0x5,-0x29d0efa3),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xa],0x9,0x2441453),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xf],0xe,-0x275e197f),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x4],0x14,-0x182c0438),_0x571675=_0x468217(_0x571675,_0x2b0d29=_0x468217(_0x2b0d29,_0x73224e=_0x468217(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x9],0x5,0x21e1cde6),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xe],0x9,-0x3cc8f82a),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x3],0xe,-0xb2af279),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x8],0x14,0x455a14ed),_0x571675=_0x468217(_0x571675,_0x2b0d29=_0x468217(_0x2b0d29,_0x73224e=_0x468217(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0xd],0x5,-0x561c16fb),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x2],0x9,-0x3105c08),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x7],0xe,0x676f02d9),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xc],0x14,-0x72d5b376),_0x571675=_0x258417(_0x571675,_0x2b0d29=_0x258417(_0x2b0d29,_0x73224e=_0x258417(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x5],0x4,-0x5c6be),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x8],0xb,-0x788e097f),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xb],0x10,0x6d9d6122),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xe],0x17,-0x21ac7f4),_0x571675=_0x258417(_0x571675,_0x2b0d29=_0x258417(_0x2b0d29,_0x73224e=_0x258417(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x1],0x4,-0x5b4115bc),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x4],0xb,0x4bdecfa9),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x7],0x10,-0x944b4a0),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xa],0x17,-0x41404390),_0x571675=_0x258417(_0x571675,_0x2b0d29=_0x258417(_0x2b0d29,_0x73224e=_0x258417(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0xd],0x4,0x289b7ec6),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x0],0xb,-0x155ed806),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x3],0x10,-0x2b10cf7b),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x6],0x17,0x4881d05),_0x571675=_0x258417(_0x571675,_0x2b0d29=_0x258417(_0x2b0d29,_0x73224e=_0x258417(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x9],0x4,-0x262b2fc7),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xc],0xb,-0x1924661b),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xf],0x10,0x1fa27cf8),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x2],0x17,-0x3b53a99b),_0x571675=_0x404ce6(_0x571675,_0x2b0d29=_0x404ce6(_0x2b0d29,_0x73224e=_0x404ce6(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x0],0x6,-0xbd6ddbc),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x7],0xa,0x432aff97),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xe],0xf,-0x546bdc59),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x5],0x15,-0x36c5fc7),_0x571675=_0x404ce6(_0x571675,_0x2b0d29=_0x404ce6(_0x2b0d29,_0x73224e=_0x404ce6(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0xc],0x6,0x655b59c3),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0x3],0xa,-0x70f3336e),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0xa],0xf,-0x100b83),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x1],0x15,-0x7a7ba22f),_0x571675=_0x404ce6(_0x571675,_0x2b0d29=_0x404ce6(_0x2b0d29,_0x73224e=_0x404ce6(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x8],0x6,0x6fa87e4f),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xf],0xa,-0x1d31920),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x6],0xf,-0x5cfebcec),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0xd],0x15,0x4e0811a1),_0x571675=_0x404ce6(_0x571675,_0x2b0d29=_0x404ce6(_0x2b0d29,_0x73224e=_0x404ce6(_0x73224e,_0x426da5,_0x571675,_0x2b0d29,_0x25dcf2[_0x5660b3+0x4],0x6,-0x8ac817e),_0x426da5,_0x571675,_0x25dcf2[_0x5660b3+0xb],0xa,-0x42c50dcb),_0x73224e,_0x426da5,_0x25dcf2[_0x5660b3+0x2],0xf,0x2ad7d2bb),_0x2b0d29,_0x73224e,_0x25dcf2[_0x5660b3+0x9],0x15,-0x14792c6f),_0x73224e=_0x73224e+_0x441b4e>>>0x0,_0x426da5=_0x426da5+_0x1d55c4>>>0x0,_0x571675=_0x571675+_0x1c8a17>>>0x0,_0x2b0d29=_0x2b0d29+_0x1bf956>>>0x0;}return _0x18f050[_0x4a9c('0x38')]([_0x73224e,_0x426da5,_0x571675,_0x2b0d29]);};_0x4bb12f[_0x4a9c('0x8f')]=function(_0x387633,_0x54903a,_0x11dde7,_0x121a82,_0x2bba9f,_0x58899c,_0x5b43cd){var _0x24a3bc=_0x387633+(_0x54903a&_0x11dde7|~_0x54903a&_0x121a82)+(_0x2bba9f>>>0x0)+_0x5b43cd;return(_0x24a3bc<<_0x58899c|_0x24a3bc>>>0x20-_0x58899c)+_0x54903a;},_0x4bb12f[_0x4a9c('0xc')]=function(_0x1737bd,_0x4dd345,_0x5803b0,_0x5cc025,_0x20fbae,_0x3dd88a,_0xe25b0d){var _0x2cdae0=_0x1737bd+(_0x4dd345&_0x5cc025|_0x5803b0&~_0x5cc025)+(_0x20fbae>>>0x0)+_0xe25b0d;return(_0x2cdae0<<_0x3dd88a|_0x2cdae0>>>0x20-_0x3dd88a)+_0x4dd345;},_0x4bb12f[_0x4a9c('0x7fd')]=function(_0x130510,_0x38b15b,_0x255631,_0x17a156,_0x1917ad,_0x269926,_0x5ed6ba){var _0x5ebec0=_0x130510+(_0x38b15b^_0x255631^_0x17a156)+(_0x1917ad>>>0x0)+_0x5ed6ba;return(_0x5ebec0<<_0x269926|_0x5ebec0>>>0x20-_0x269926)+_0x38b15b;},_0x4bb12f['_ii']=function(_0x4b9202,_0x96fc1c,_0x1b0043,_0x170cb0,_0x37d1f3,_0x31b1c8,_0x4a6fc3){var _0x2a0467=_0x4b9202+(_0x1b0043^(_0x96fc1c|~_0x170cb0))+(_0x37d1f3>>>0x0)+_0x4a6fc3;return(_0x2a0467<<_0x31b1c8|_0x2a0467>>>0x20-_0x31b1c8)+_0x96fc1c;},_0x4bb12f[_0x4a9c('0x5b2')]=0x10,_0x4bb12f[_0x4a9c('0xee')]=0x10,_0x3a0442[_0x4a9c('0x14f')]=function(_0x392702,_0x1593fb){if(null==_0x392702)throw new Error('Illegal\x20argument\x20'+_0x392702);var _0x457ac8=_0x18f050[_0x4a9c('0x571')](_0x4bb12f(_0x392702,_0x1593fb));return _0x1593fb&&_0x1593fb[_0x4a9c('0x16d')]?_0x457ac8:_0x1593fb&&_0x1593fb[_0x4a9c('0x15e')]?_0x5efe96[_0x4a9c('0x76c')](_0x457ac8):_0x18f050[_0x4a9c('0x7c2')](_0x457ac8);};}();},function(_0x31fb69,_0x2dbf32){!function(){var _0x2322ef=_0x4a9c('0x41b'),_0x313271={'rotl':function(_0x40dc93,_0x286105){return _0x40dc93<<_0x286105|_0x40dc93>>>0x20-_0x286105;},'rotr':function(_0x1124e9,_0x43e31e){return _0x1124e9<<0x20-_0x43e31e|_0x1124e9>>>_0x43e31e;},'endian':function(_0xcfe2d7){if(_0xcfe2d7[_0x4a9c('0x3c8')]==Number)return 0xff00ff&_0x313271[_0x4a9c('0x77b')](_0xcfe2d7,0x8)|0xff00ff00&_0x313271['rotl'](_0xcfe2d7,0x18);for(var _0x330ac0=0x0;_0x330ac0<_0xcfe2d7[_0x4a9c('0x3e1')];_0x330ac0++)_0xcfe2d7[_0x330ac0]=_0x313271[_0x4a9c('0x38')](_0xcfe2d7[_0x330ac0]);return _0xcfe2d7;},'randomBytes':function(_0x44a4b2){for(var _0x43c62c=[];_0x44a4b2>0x0;_0x44a4b2--)_0x43c62c[_0x4a9c('0x2d2')](Math[_0x4a9c('0xa9')](0x100*Math[_0x4a9c('0x595')]()));return _0x43c62c;},'bytesToWords':function(_0x22af23){for(var _0x4854a5=[],_0x58ec2e=0x0,_0x443edf=0x0;_0x58ec2e<_0x22af23['length'];_0x58ec2e++,_0x443edf+=0x8)_0x4854a5[_0x443edf>>>0x5]|=_0x22af23[_0x58ec2e]<<0x18-_0x443edf%0x20;return _0x4854a5;},'wordsToBytes':function(_0x302a81){for(var _0x5ba9cd=[],_0x213d35=0x0;_0x213d35<0x20*_0x302a81[_0x4a9c('0x3e1')];_0x213d35+=0x8)_0x5ba9cd[_0x4a9c('0x2d2')](_0x302a81[_0x213d35>>>0x5]>>>0x18-_0x213d35%0x20&0xff);return _0x5ba9cd;},'bytesToHex':function(_0x5a9610){for(var _0x2fa960=[],_0x420ba9=0x0;_0x420ba9<_0x5a9610[_0x4a9c('0x3e1')];_0x420ba9++)_0x2fa960[_0x4a9c('0x2d2')]((_0x5a9610[_0x420ba9]>>>0x4)['toString'](0x10)),_0x2fa960[_0x4a9c('0x2d2')]((0xf&_0x5a9610[_0x420ba9])['toString'](0x10));return _0x2fa960[_0x4a9c('0x64d')]('');},'hexToBytes':function(_0x3a190c){for(var _0x45f174=[],_0x1b0f2f=0x0;_0x1b0f2f<_0x3a190c[_0x4a9c('0x3e1')];_0x1b0f2f+=0x2)_0x45f174[_0x4a9c('0x2d2')](parseInt(_0x3a190c[_0x4a9c('0x48f')](_0x1b0f2f,0x2),0x10));return _0x45f174;},'bytesToBase64':function(_0x5c5bfd){for(var _0x5b3ae0=[],_0x31d882=0x0;_0x31d882<_0x5c5bfd['length'];_0x31d882+=0x3)for(var _0x44fafc=_0x5c5bfd[_0x31d882]<<0x10|_0x5c5bfd[_0x31d882+0x1]<<0x8|_0x5c5bfd[_0x31d882+0x2],_0x2787c3=0x0;_0x2787c3<0x4;_0x2787c3++)0x8*_0x31d882+0x6*_0x2787c3<=0x8*_0x5c5bfd[_0x4a9c('0x3e1')]?_0x5b3ae0[_0x4a9c('0x2d2')](_0x2322ef[_0x4a9c('0x617')](_0x44fafc>>>0x6*(0x3-_0x2787c3)&0x3f)):_0x5b3ae0['push']('=');return _0x5b3ae0[_0x4a9c('0x64d')]('');},'base64ToBytes':function(_0x54e4af){_0x54e4af=_0x54e4af[_0x4a9c('0x4e5')](/[^A-Z0-9+\/]/gi,'');for(var _0x32e0b8=[],_0x4572dc=0x0,_0x5b8c28=0x0;_0x4572dc<_0x54e4af['length'];_0x5b8c28=++_0x4572dc%0x4)0x0!=_0x5b8c28&&_0x32e0b8[_0x4a9c('0x2d2')]((_0x2322ef['indexOf'](_0x54e4af[_0x4a9c('0x617')](_0x4572dc-0x1))&Math[_0x4a9c('0x555')](0x2,-0x2*_0x5b8c28+0x8)-0x1)<<0x2*_0x5b8c28|_0x2322ef[_0x4a9c('0x312')](_0x54e4af[_0x4a9c('0x617')](_0x4572dc))>>>0x6-0x2*_0x5b8c28);return _0x32e0b8;}};_0x31fb69[_0x4a9c('0x14f')]=_0x313271;}();},function(_0x4d7f61,_0xe89ee8){function _0x7e64e9(_0x4dabbd){return!!_0x4dabbd[_0x4a9c('0x3c8')]&&_0x4a9c('0x2f2')==typeof _0x4dabbd[_0x4a9c('0x3c8')][_0x4a9c('0x37a')]&&_0x4dabbd[_0x4a9c('0x3c8')][_0x4a9c('0x37a')](_0x4dabbd);}/*!* Determine if an object is a Buffer** @author   Feross Aboukhadijeh <https://feross.org>* @license  MIT*/_0x4d7f61[_0x4a9c('0x14f')]=function(_0x21ffdc){return null!=_0x21ffdc&&(_0x7e64e9(_0x21ffdc)||function(_0xf4f654){return'function'==typeof _0xf4f654['readFloatLE']&&_0x4a9c('0x2f2')==typeof _0xf4f654[_0x4a9c('0x14')]&&_0x7e64e9(_0xf4f654[_0x4a9c('0x14')](0x0,0x0));}(_0x21ffdc)||!!_0x21ffdc[_0x4a9c('0x670')]);};},function(_0x4b03c8,_0x4adcfc){_0x4b03c8[_0x4a9c('0x14f')]=function(_0x7c998c,_0x4ecb83,_0x458991,_0x17fe95,_0x4c970a,_0x162ad5,_0x48488c,_0x4496ea,_0xa55bb){this[_0x4a9c('0x567')]=[{'id':0x0,'src':_0x4a9c('0x470'),'killScore':0x96,'health':0x1f4,'weightM':0.8,'speed':0.00095,'turnSpeed':0.001,'scale':0x48,'drop':[_0x4a9c('0x220'),0x32]},{'id':0x1,'src':_0x4a9c('0x51'),'killScore':0xc8,'health':0x320,'weightM':0.6,'speed':0.00085,'turnSpeed':0.001,'scale':0x48,'drop':[_0x4a9c('0x220'),0x50]},{'id':0x2,'name':_0x4a9c('0x1fe'),'src':_0x4a9c('0x3f5'),'hostile':!0x0,'dmg':0x14,'killScore':0x3e8,'health':0x708,'weightM':0.5,'speed':0.00094,'turnSpeed':0.00074,'scale':0x4e,'viewRange':0x320,'chargePlayer':!0x0,'drop':[_0x4a9c('0x220'),0x64]},{'id':0x3,'name':_0x4a9c('0x3b3'),'src':_0x4a9c('0x2c9'),'hostile':!0x0,'dmg':0x14,'killScore':0x7d0,'health':0xaf0,'weightM':0.45,'speed':0.001,'turnSpeed':0.0008,'scale':0x5a,'viewRange':0x384,'chargePlayer':!0x0,'drop':[_0x4a9c('0x220'),0x190]},{'id':0x4,'name':_0x4a9c('0x4c6'),'src':_0x4a9c('0x37c'),'hostile':!0x0,'dmg':0x8,'killScore':0x1f4,'health':0x12c,'weightM':0.45,'speed':0.001,'turnSpeed':0.002,'scale':0x54,'viewRange':0x320,'chargePlayer':!0x0,'drop':[_0x4a9c('0x220'),0xc8]},{'id':0x5,'name':_0x4a9c('0x42c'),'src':_0x4a9c('0xc0'),'dmg':0x8,'killScore':0x7d0,'noTrap':!0x0,'health':0x12c,'weightM':0.2,'speed':0.0018,'turnSpeed':0.006,'scale':0x46,'drop':[_0x4a9c('0x220'),0x64]},{'id':0x6,'name':_0x4a9c('0x770'),'nameScale':0x32,'src':_0x4a9c('0x68a'),'hostile':!0x0,'dontRun':!0x0,'fixedSpawn':!0x0,'spawnDelay':0xea60,'noTrap':!0x0,'colDmg':0x64,'dmg':0x28,'killScore':0x1f40,'health':0x4650,'weightM':0.4,'speed':0.0007,'turnSpeed':0.01,'scale':0x50,'spriteMlt':1.8,'leapForce':0.9,'viewRange':0x3e8,'hitRange':0xd2,'hitDelay':0x3e8,'chargePlayer':!0x0,'drop':['food',0x64]},{'id':0x7,'name':_0x4a9c('0x5c6'),'hostile':!0x0,'nameScale':0x23,'src':_0x4a9c('0x19f'),'fixedSpawn':!0x0,'spawnDelay':0x1d4c0,'colDmg':0xc8,'killScore':0x1388,'health':0x4e20,'weightM':0.1,'speed':0x0,'turnSpeed':0x0,'scale':0x46,'spriteMlt':0x1},{'id':0x8,'name':_0x4a9c('0x3d'),'src':_0x4a9c('0x302'),'hostile':!0x0,'fixedSpawn':!0x0,'dontRun':!0x0,'hitScare':0x4,'spawnDelay':0x7530,'noTrap':!0x0,'nameScale':0x23,'dmg':0xa,'colDmg':0x64,'killScore':0xbb8,'health':0x1b58,'weightM':0.45,'speed':0.0015,'turnSpeed':0.002,'scale':0x5a,'viewRange':0x320,'chargePlayer':!0x0,'drop':['food',0x3e8]}],this['spawn']=function(_0x16853d,_0xdad12d,_0x4eeb9a,_0x5b5374){for(var _0x4150d3,_0x4e07d9=0x0;_0x4e07d9<_0x7c998c[_0x4a9c('0x3e1')];++_0x4e07d9)if(!_0x7c998c[_0x4e07d9][_0x4a9c('0x21')]){_0x4150d3=_0x7c998c[_0x4e07d9];break;}return _0x4150d3||(_0x4150d3=new _0x4ecb83(_0x7c998c[_0x4a9c('0x3e1')],_0x4c970a,_0x458991,_0x17fe95,_0x48488c,_0x162ad5,_0x4496ea,_0xa55bb),_0x7c998c[_0x4a9c('0x2d2')](_0x4150d3)),_0x4150d3[_0x4a9c('0xf9')](_0x16853d,_0xdad12d,_0x4eeb9a,_0x5b5374,this[_0x4a9c('0x567')][_0x5b5374]),_0x4150d3;};};},function(_0x115354,_0x2227fd){var _0xff781a=0x2*Math['PI'];_0x115354['exports']=function(_0x28ef24,_0x41b3b8,_0x4adadc,_0x61de14,_0x2702bd,_0x4b4467,_0xb9f824,_0x4de21d){this['sid']=_0x28ef24,this[_0x4a9c('0x6ab')]=!0x0,this[_0x4a9c('0x397')]=_0x2702bd['randInt'](0x0,_0x4b4467[_0x4a9c('0x712')][_0x4a9c('0x3e1')]-0x1),this[_0x4a9c('0xf9')]=function(_0x15a391,_0x4e4d3d,_0x47240c,_0x9b4029,_0x2ae4fe){this['x']=_0x15a391,this['y']=_0x4e4d3d,this['startX']=_0x2ae4fe[_0x4a9c('0xc5')]?_0x15a391:null,this[_0x4a9c('0x17d')]=_0x2ae4fe[_0x4a9c('0xc5')]?_0x4e4d3d:null,this[_0x4a9c('0x59f')]=0x0,this['yVel']=0x0,this[_0x4a9c('0x32')]=0x0,this[_0x4a9c('0x638')]=_0x47240c,this[_0x4a9c('0x3eb')]=0x0,this[_0x4a9c('0x76b')]=_0x9b4029,this['src']=_0x2ae4fe[_0x4a9c('0x34f')],_0x2ae4fe[_0x4a9c('0x9e')]&&(this['name']=_0x2ae4fe[_0x4a9c('0x9e')]),this[_0x4a9c('0x70f')]=_0x2ae4fe[_0x4a9c('0x70f')],this[_0x4a9c('0x244')]=_0x2ae4fe[_0x4a9c('0x244')],this[_0x4a9c('0x4be')]=_0x2ae4fe['killScore'],this['turnSpeed']=_0x2ae4fe[_0x4a9c('0x54c')],this[_0x4a9c('0x6f4')]=_0x2ae4fe[_0x4a9c('0x6f4')],this['maxHealth']=_0x2ae4fe[_0x4a9c('0x528')],this[_0x4a9c('0x74c')]=_0x2ae4fe[_0x4a9c('0x74c')],this['health']=this[_0x4a9c('0xb3')],this[_0x4a9c('0x6ee')]=_0x2ae4fe[_0x4a9c('0x6ee')],this[_0x4a9c('0x3aa')]=_0x2ae4fe[_0x4a9c('0x3aa')],this[_0x4a9c('0x6a6')]=_0x2ae4fe[_0x4a9c('0x6a6')],this[_0x4a9c('0x90')]=_0x2ae4fe[_0x4a9c('0x90')],this[_0x4a9c('0x7fc')]=_0x2ae4fe[_0x4a9c('0x7fc')],this[_0x4a9c('0x758')]=_0x2ae4fe[_0x4a9c('0x758')],this[_0x4a9c('0xdd')]=_0x2ae4fe[_0x4a9c('0xdd')],this['hitDelay']=_0x2ae4fe['hitDelay'],this['hitScare']=_0x2ae4fe[_0x4a9c('0x1cd')],this[_0x4a9c('0x2b0')]=_0x2ae4fe[_0x4a9c('0x2b0')],this[_0x4a9c('0x628')]=_0x2ae4fe[_0x4a9c('0x628')],this[_0x4a9c('0x1cf')]=_0x2ae4fe[_0x4a9c('0x1cf')],this[_0x4a9c('0x3d3')]=_0x2ae4fe[_0x4a9c('0x3d3')],this['spawnDelay']=_0x2ae4fe[_0x4a9c('0x15c')],this[_0x4a9c('0x730')]=0x0,this[_0x4a9c('0x4f6')]=0x3e8,this[_0x4a9c('0xb2')]=0x0,this[_0x4a9c('0x241')]=0x0,this[_0x4a9c('0x21')]=!0x0,this[_0x4a9c('0x1b7')]=!0x0,this[_0x4a9c('0x6ff')]=null,this[_0x4a9c('0x10b')]=null,this['dmgOverTime']={};};var _0x7272a=0x0;this[_0x4a9c('0x5ab')]=function(_0x29f676){if(this[_0x4a9c('0x21')]){if(this[_0x4a9c('0x734')])return this[_0x4a9c('0x734')]-=_0x29f676,void(this['spawnCounter']<=0x0&&(this[_0x4a9c('0x734')]=0x0,this['x']=this[_0x4a9c('0x5f3')]||_0x2702bd[_0x4a9c('0x78c')](0x0,_0x4b4467[_0x4a9c('0x1d6')]),this['y']=this[_0x4a9c('0x17d')]||_0x2702bd[_0x4a9c('0x78c')](0x0,_0x4b4467[_0x4a9c('0x1d6')])));(_0x7272a-=_0x29f676)<=0x0&&(this[_0x4a9c('0x4f5')]['dmg']&&(this['changeHealth'](-this[_0x4a9c('0x4f5')][_0x4a9c('0x90')],this[_0x4a9c('0x4f5')][_0x4a9c('0x40b')]),this[_0x4a9c('0x4f5')]['time']-=0x1,this[_0x4a9c('0x4f5')][_0x4a9c('0x1a0')]<=0x0&&(this[_0x4a9c('0x4f5')][_0x4a9c('0x90')]=0x0)),_0x7272a=0x3e8);var _0x1452d7=!0x1,_0x5e9100=0x1;if(!this[_0x4a9c('0x32')]&&!this['lockMove']&&this['y']>=_0x4b4467[_0x4a9c('0x1d6')]/0x2-_0x4b4467[_0x4a9c('0x55f')]/0x2&&this['y']<=_0x4b4467[_0x4a9c('0x1d6')]/0x2+_0x4b4467[_0x4a9c('0x55f')]/0x2&&(_0x5e9100=0.33,this[_0x4a9c('0x59f')]+=_0x4b4467[_0x4a9c('0x775')]*_0x29f676),this['lockMove'])this[_0x4a9c('0x59f')]=0x0,this[_0x4a9c('0x63e')]=0x0;else if(this['waitCount']>0x0){if(this[_0x4a9c('0x4f6')]-=_0x29f676,this[_0x4a9c('0x4f6')]<=0x0)if(this[_0x4a9c('0x6ee')]){for(var _0x1269be,_0x3aa2ac,_0x5c23a8,_0x14031a=0x0;_0x14031a<_0x4adadc[_0x4a9c('0x3e1')];++_0x14031a)!_0x4adadc[_0x14031a][_0x4a9c('0x1b7')]||_0x4adadc[_0x14031a][_0x4a9c('0x3a0')]&&_0x4adadc[_0x14031a][_0x4a9c('0x3a0')][_0x4a9c('0x3f8')]||(_0x5c23a8=_0x2702bd[_0x4a9c('0x63')](this['x'],this['y'],_0x4adadc[_0x14031a]['x'],_0x4adadc[_0x14031a]['y']))<=this['viewRange']&&(!_0x1269be||_0x5c23a8<_0x3aa2ac)&&(_0x3aa2ac=_0x5c23a8,_0x1269be=_0x4adadc[_0x14031a]);_0x1269be?(this[_0x4a9c('0x10b')]=_0x1269be,this[_0x4a9c('0xb2')]=_0x2702bd[_0x4a9c('0x78c')](0x1f40,0x2ee0)):(this['moveCount']=_0x2702bd[_0x4a9c('0x78c')](0x3e8,0x7d0),this[_0x4a9c('0x241')]=_0x2702bd[_0x4a9c('0x60')](-Math['PI'],Math['PI']));}else this[_0x4a9c('0xb2')]=_0x2702bd[_0x4a9c('0x78c')](0xfa0,0x2710),this[_0x4a9c('0x241')]=_0x2702bd[_0x4a9c('0x60')](-Math['PI'],Math['PI']);}else if(this[_0x4a9c('0xb2')]>0x0){var _0x4a7b5e=this[_0x4a9c('0x244')]*_0x5e9100;if(this[_0x4a9c('0x6ff')]&&this[_0x4a9c('0x6ff')][_0x4a9c('0x21')]&&(!this[_0x4a9c('0x6ff')][_0x4a9c('0x62d')]||this['runFrom'][_0x4a9c('0x1b7')])?(this['targetDir']=_0x2702bd['getDirection'](this['x'],this['y'],this[_0x4a9c('0x6ff')]['x'],this[_0x4a9c('0x6ff')]['y']),_0x4a7b5e*=1.42):this[_0x4a9c('0x10b')]&&this[_0x4a9c('0x10b')][_0x4a9c('0x1b7')]&&(this[_0x4a9c('0x241')]=_0x2702bd[_0x4a9c('0x721')](this[_0x4a9c('0x10b')]['x'],this['chargeTarget']['y'],this['x'],this['y']),_0x4a7b5e*=1.75,_0x1452d7=!0x0),this[_0x4a9c('0x730')]&&(_0x4a7b5e*=0.3),this[_0x4a9c('0x638')]!=this[_0x4a9c('0x241')]){this[_0x4a9c('0x638')]%=_0xff781a;var _0x38757d=(this['dir']-this[_0x4a9c('0x241')]+_0xff781a)%_0xff781a,_0x9bc308=Math[_0x4a9c('0xe8')](Math[_0x4a9c('0x20')](_0x38757d-_0xff781a),_0x38757d,this[_0x4a9c('0x54c')]*_0x29f676),_0x946cd2=_0x38757d-Math['PI']>=0x0?0x1:-0x1;this[_0x4a9c('0x638')]+=_0x946cd2*_0x9bc308+_0xff781a;}this['dir']%=_0xff781a,this['xVel']+=_0x4a7b5e*_0x29f676*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),this[_0x4a9c('0x63e')]+=_0x4a7b5e*_0x29f676*Math['sin'](this[_0x4a9c('0x638')]),this[_0x4a9c('0xb2')]-=_0x29f676,this[_0x4a9c('0xb2')]<=0x0&&(this[_0x4a9c('0x6ff')]=null,this[_0x4a9c('0x10b')]=null,this[_0x4a9c('0x4f6')]=this['hostile']?0x5dc:_0x2702bd[_0x4a9c('0x78c')](0x5dc,0x1770));}this[_0x4a9c('0x32')]=0x0,this['lockMove']=!0x1;var _0x37ecec=_0x2702bd[_0x4a9c('0x63')](0x0,0x0,this[_0x4a9c('0x59f')]*_0x29f676,this[_0x4a9c('0x63e')]*_0x29f676),_0x47aa66=Math[_0x4a9c('0xe8')](0x4,Math[_0x4a9c('0x790')](0x1,Math[_0x4a9c('0x33c')](_0x37ecec/0x28))),_0x1af354=0x1/_0x47aa66;for(_0x14031a=0x0;_0x14031a<_0x47aa66;++_0x14031a){this[_0x4a9c('0x59f')]&&(this['x']+=this[_0x4a9c('0x59f')]*_0x29f676*_0x1af354),this[_0x4a9c('0x63e')]&&(this['y']+=this[_0x4a9c('0x63e')]*_0x29f676*_0x1af354),_0x6dcc7f=_0x41b3b8[_0x4a9c('0x7ab')](this['x'],this['y'],this['scale']);for(var _0x271368=0x0;_0x271368<_0x6dcc7f['length'];++_0x271368)for(var _0x289ae3=0x0;_0x289ae3<_0x6dcc7f[_0x271368][_0x4a9c('0x3e1')];++_0x289ae3)_0x6dcc7f[_0x271368][_0x289ae3][_0x4a9c('0x21')]&&_0x41b3b8[_0x4a9c('0x690')](this,_0x6dcc7f[_0x271368][_0x289ae3],_0x1af354);}var _0x2cb8c4,_0x502437,_0x28b722,_0x435621=!0x1;if(this[_0x4a9c('0x730')]>0x0&&(this[_0x4a9c('0x730')]-=_0x29f676,this[_0x4a9c('0x730')]<=0x0)){_0x435621=!0x0,this[_0x4a9c('0x730')]=0x0,this[_0x4a9c('0x74c')]&&!_0x2702bd['randInt'](0x0,0x2)&&(this['xVel']+=this[_0x4a9c('0x74c')]*Math[_0x4a9c('0x431')](this[_0x4a9c('0x638')]),this[_0x4a9c('0x63e')]+=this[_0x4a9c('0x74c')]*Math['sin'](this[_0x4a9c('0x638')]));for(var _0x6dcc7f=_0x41b3b8[_0x4a9c('0x7ab')](this['x'],this['y'],this[_0x4a9c('0xdd')]),_0x2e7d9f=0x0;_0x2e7d9f<_0x6dcc7f[_0x4a9c('0x3e1')];++_0x2e7d9f)for(_0x271368=0x0;_0x271368<_0x6dcc7f[_0x2e7d9f][_0x4a9c('0x3e1')];++_0x271368)(_0x2cb8c4=_0x6dcc7f[_0x2e7d9f][_0x271368])[_0x4a9c('0x528')]&&(_0x502437=_0x2702bd[_0x4a9c('0x63')](this['x'],this['y'],_0x2cb8c4['x'],_0x2cb8c4['y']))<_0x2cb8c4[_0x4a9c('0x6f4')]+this[_0x4a9c('0xdd')]&&(_0x2cb8c4[_0x4a9c('0x21e')](0x5*-this[_0x4a9c('0x90')])&&_0x41b3b8[_0x4a9c('0xd')](_0x2cb8c4),_0x41b3b8[_0x4a9c('0x12d')](_0x2cb8c4,_0x2702bd[_0x4a9c('0x721')](this['x'],this['y'],_0x2cb8c4['x'],_0x2cb8c4['y'])));for(_0x271368=0x0;_0x271368<_0x4adadc[_0x4a9c('0x3e1')];++_0x271368)_0x4adadc[_0x271368][_0x4a9c('0x336')](this)&&_0x4de21d['send'](_0x4adadc[_0x271368]['id'],'aa',this[_0x4a9c('0x56f')]);}if(_0x1452d7||_0x435621)for(_0x14031a=0x0;_0x14031a<_0x4adadc[_0x4a9c('0x3e1')];++_0x14031a)(_0x2cb8c4=_0x4adadc[_0x14031a])&&_0x2cb8c4[_0x4a9c('0x1b7')]&&(_0x502437=_0x2702bd[_0x4a9c('0x63')](this['x'],this['y'],_0x2cb8c4['x'],_0x2cb8c4['y']),this['hitRange']?!this[_0x4a9c('0x730')]&&_0x502437<=this[_0x4a9c('0xdd')]+_0x2cb8c4[_0x4a9c('0x6f4')]&&(_0x435621?(_0x28b722=_0x2702bd[_0x4a9c('0x721')](_0x2cb8c4['x'],_0x2cb8c4['y'],this['x'],this['y']),_0x2cb8c4[_0x4a9c('0x21e')](-this['dmg']),_0x2cb8c4[_0x4a9c('0x59f')]+=0.6*Math[_0x4a9c('0x431')](_0x28b722),_0x2cb8c4[_0x4a9c('0x63e')]+=0.6*Math[_0x4a9c('0x1bb')](_0x28b722),this[_0x4a9c('0x6ff')]=null,this['chargeTarget']=null,this[_0x4a9c('0x4f6')]=0xbb8,this[_0x4a9c('0x730')]=_0x2702bd[_0x4a9c('0x78c')](0x0,0x2)?0x0:0x258):this[_0x4a9c('0x730')]=this[_0x4a9c('0x375')]):_0x502437<=this[_0x4a9c('0x6f4')]+_0x2cb8c4['scale']&&(_0x28b722=_0x2702bd['getDirection'](_0x2cb8c4['x'],_0x2cb8c4['y'],this['x'],this['y']),_0x2cb8c4['changeHealth'](-this[_0x4a9c('0x90')]),_0x2cb8c4[_0x4a9c('0x59f')]+=0.55*Math[_0x4a9c('0x431')](_0x28b722),_0x2cb8c4[_0x4a9c('0x63e')]+=0.55*Math[_0x4a9c('0x1bb')](_0x28b722)));this['xVel']&&(this[_0x4a9c('0x59f')]*=Math[_0x4a9c('0x555')](_0x4b4467[_0x4a9c('0x4fb')],_0x29f676)),this[_0x4a9c('0x63e')]&&(this['yVel']*=Math['pow'](_0x4b4467['playerDecel'],_0x29f676));var _0x33585a=this[_0x4a9c('0x6f4')];this['x']-_0x33585a<0x0?(this['x']=_0x33585a,this[_0x4a9c('0x59f')]=0x0):this['x']+_0x33585a>_0x4b4467[_0x4a9c('0x1d6')]&&(this['x']=_0x4b4467[_0x4a9c('0x1d6')]-_0x33585a,this[_0x4a9c('0x59f')]=0x0),this['y']-_0x33585a<0x0?(this['y']=_0x33585a,this[_0x4a9c('0x63e')]=0x0):this['y']+_0x33585a>_0x4b4467[_0x4a9c('0x1d6')]&&(this['y']=_0x4b4467[_0x4a9c('0x1d6')]-_0x33585a,this['yVel']=0x0);}},this[_0x4a9c('0x336')]=function(_0x3add73){if(!_0x3add73)return!0x1;if(_0x3add73[_0x4a9c('0x3a0')]&&_0x3add73[_0x4a9c('0x3a0')][_0x4a9c('0xc4')]&&_0x3add73[_0x4a9c('0x353')]>=_0x3add73['skin'][_0x4a9c('0xc4')])return!0x1;var _0x368b03=Math['abs'](_0x3add73['x']-this['x'])-_0x3add73['scale'],_0x37cfff=Math[_0x4a9c('0x20')](_0x3add73['y']-this['y'])-_0x3add73[_0x4a9c('0x6f4')];return _0x368b03<=_0x4b4467[_0x4a9c('0x20e')]/0x2*1.3&&_0x37cfff<=_0x4b4467[_0x4a9c('0x55e')]/0x2*1.3;};var _0x1b3cc0=0x0,_0x412260=0x0;this['animate']=function(_0x20504a){this['animTime']>0x0&&(this[_0x4a9c('0x124')]-=_0x20504a,this['animTime']<=0x0?(this['animTime']=0x0,this[_0x4a9c('0x3eb')]=0x0,_0x1b3cc0=0x0,_0x412260=0x0):0x0==_0x412260?(_0x1b3cc0+=_0x20504a/(this[_0x4a9c('0x6cf')]*_0x4b4467[_0x4a9c('0x34b')]),this['dirPlus']=_0x2702bd[_0x4a9c('0x745')](0x0,this[_0x4a9c('0x199')],Math[_0x4a9c('0xe8')](0x1,_0x1b3cc0)),_0x1b3cc0>=0x1&&(_0x1b3cc0=0x1,_0x412260=0x1)):(_0x1b3cc0-=_0x20504a/(this[_0x4a9c('0x6cf')]*(0x1-_0x4b4467[_0x4a9c('0x34b')])),this[_0x4a9c('0x3eb')]=_0x2702bd[_0x4a9c('0x745')](0x0,this[_0x4a9c('0x199')],Math['max'](0x0,_0x1b3cc0))));},this[_0x4a9c('0x1c0')]=function(){this[_0x4a9c('0x124')]=this[_0x4a9c('0x6cf')]=0x258,this[_0x4a9c('0x199')]=0.8*Math['PI'],_0x1b3cc0=0x0,_0x412260=0x0;},this[_0x4a9c('0x21e')]=function(_0x57114f,_0x29d89d,_0x3d085b){if(this['active']&&(this[_0x4a9c('0x528')]+=_0x57114f,_0x3d085b&&(this[_0x4a9c('0x1cd')]&&!_0x2702bd[_0x4a9c('0x78c')](0x0,this['hitScare'])?(this['runFrom']=_0x3d085b,this[_0x4a9c('0x4f6')]=0x0,this['moveCount']=0x7d0):this['hostile']&&this[_0x4a9c('0x6ee')]&&_0x3d085b[_0x4a9c('0x62d')]?(this['chargeTarget']=_0x3d085b,this[_0x4a9c('0x4f6')]=0x0,this[_0x4a9c('0xb2')]=0x1f40):this['dontRun']||(this[_0x4a9c('0x6ff')]=_0x3d085b,this[_0x4a9c('0x4f6')]=0x0,this[_0x4a9c('0xb2')]=0x7d0)),_0x57114f<0x0&&this['hitRange']&&_0x2702bd['randInt'](0x0,0x1)&&(this[_0x4a9c('0x730')]=0x1f4),_0x29d89d&&_0x29d89d[_0x4a9c('0x336')](this)&&_0x57114f<0x0&&_0x4de21d['send'](_0x29d89d['id'],'t',Math[_0x4a9c('0x33c')](this['x']),Math[_0x4a9c('0x33c')](this['y']),Math['round'](-_0x57114f),0x1),this[_0x4a9c('0x528')]<=0x0&&(this['spawnDelay']?(this[_0x4a9c('0x734')]=this[_0x4a9c('0x15c')],this['x']=-0xf4240,this['y']=-0xf4240):(this['x']=this[_0x4a9c('0x5f3')]||_0x2702bd[_0x4a9c('0x78c')](0x0,_0x4b4467['mapScale']),this['y']=this[_0x4a9c('0x17d')]||_0x2702bd[_0x4a9c('0x78c')](0x0,_0x4b4467[_0x4a9c('0x1d6')])),this[_0x4a9c('0x528')]=this[_0x4a9c('0xb3')],this[_0x4a9c('0x6ff')]=null,_0x29d89d&&(_0xb9f824(_0x29d89d,this[_0x4a9c('0x4be')]),this[_0x4a9c('0x6a6')]))))for(var _0x51b019=0x0;_0x51b019<this[_0x4a9c('0x6a6')][_0x4a9c('0x3e1')];)_0x29d89d[_0x4a9c('0x20a')](_0x4b4467[_0x4a9c('0x3c')][_0x4a9c('0x312')](this[_0x4a9c('0x6a6')][_0x51b019]),this[_0x4a9c('0x6a6')][_0x51b019+0x1]),_0x51b019+=0x2;};};}]);

var kills = 0;
(function() {
    var ezxdxdwa = new Audio(xd)
    setInterval(getkills, 0);

    function getkills() {
        count2 = parseInt(document.getElementById("killCounter").innerText);
        if (count2 > kills) {
            ezxdxdwa.play();
            doNewSend(["ch", ["YOU DIED NOOB!"]]);
        }
        kills = count2;
    }
})();
const _0x24f6=['You\x20can\x20insert\x20multiple\x20messages\x20with\x20a\x20comma;\x20if\x20you\x20want\x20to\x20say\x20both\x20\x271\x27\x20and\x20\x272\x27,\x20put\x20\x271,2\x27.','#mapDisplay','100%','name','<select/>','<p/>','#gameUI','filter','<div/>','val','You\x20can\x20change\x20settings\x20for\x20the\x20','auto_chat','head','max-width','450px','click','\x20has\x20no\x20initialization.','version','randomize_messages','url(\x27https://cdn.discordapp.com/attachments/652521766555746325/683639971101278260/dragon.png\x27)','death','length','innerText','emit','values','tracers','Shows\x20your\x20coordinates.','rgba(0,\x200,\x200,\x200.25)','Object\x20Mapper','lineTo','settings','messages','value','#allianceButton','170px','Tracers','hover','background','after','Moo\x20Moo','display','margin','<br/>','longID','type','body','This\x20module\x20lets\x20you\x20change\x20the\x20text\x20of\x20many\x20things.','block','top','Title','When\x20you\x20have\x20a\x20shield,\x20this\x20module\x20will\x20prevent\x20arrows\x20from\x20hitting\x20you\x20by\x20equipping\x20it\x20and\x20blocking\x20the\x20arrow.','5px','object_map','TJMod\x20MooMoo\x20Menu-TJMod\x20ON\x20TOP-Enjoy\x20The\x20Hack!','#linksContainer2','moveTo','25px','Arrow\x20Blocking','append','requestAnimationFrame','Randomize\x20Messages','empty','none','Adds\x20the\x20ping\x20counter\x20in-game.','color','init','forEach','position','https://github.com/Nebula-Developers/Moomoo-Enhancement-Suite','lineWidth','floor','title','warn','required','description','width','checked','clone','MES\x20v','<input/>','Automatic\x20Chat','change','coordinates','Toggles\x20all\x20functionality\x20in\x20this\x20module.','YOU\x20DIED','TJMenu\x20Beta\x20','initial','css','prepend','Enable\x20Module','core','Maps\x20the\x20position\x20of\x20objects\x20to\x20your\x20minimap.','Shows\x20the\x20different\x20biomes\x20on\x20the\x20minimap\x20by\x20coloring\x20each\x20region.','AutoHeal','3px','<label\x20class=\x22settingRadio\x22\x20/>','enabled','strokeStyle','random','Death','gameCanvas','50%','Coordinates','prop','custom_text','pointer-events','Automatically\x20chats\x20certain\x20messages.','hackMenu','heal','#diedText','attr','projectile_blocker','translateY(-50%)','This\x20module\x20allows\x20you\x20to\x20equip\x20certain\x20hats\x20at\x20certain\x20times\x20to\x20get\x20the\x20most\x20out\x20of\x20those\x20actions.','getItem','Default:\x20','text','children','target','beginPath','Biomes\x20on\x20Minimap','checkbox','fromID','right','line_color','Module\x20','mes_config','<option\x20disabled>TJMod\x20Menu\x20Category</option>','Hello!,Git\x20gud!','Show\x20Ping','ceil','__array','default'];(function(_0x25143a,_0x24f69d){const _0x382453=function(_0x2383a0){while(--_0x2383a0){_0x25143a['push'](_0x25143a['shift']());}};_0x382453(++_0x24f69d);}(_0x24f6,0xff));const _0x3824=function(_0x25143a,_0x24f69d){_0x25143a=_0x25143a-0x0;let _0x382453=_0x24f6[_0x25143a];return _0x382453;};(()=>{try{class _0x21b81f{constructor(_0x3abfae=[]){this[_0x3824('0x9')]=_0x3abfae;}[_0x3824('0x0')](_0x43b736){return this['__array'][_0x3824('0x12')](_0x18f69b=>_0x18f69b['id']===_0x43b736);}['get'](_0xfc40af){return this[_0x3824('0x0')](_0xfc40af)[0x0];}['has'](_0x4b40b6){return this[_0x3824('0x0')](_0x4b40b6)[_0x3824('0x20')]>0x0;}[_0x3824('0x4d')](_0x289087){this[_0x3824('0x9')][_0x3824('0x4d')](_0x289087);}}const _0x2a5cd3=document['getElementById'](_0x3824('0x6f'));const _0x1019cd=_0x2a5cd3['getContext']('2d');const _0x19bb0b={};let _0x45b750=null;let _0x472398;function _0x32d375(_0x4f0df2,_0x1c5654){const _0x3093d1=Math[_0x3824('0x8')](_0x4f0df2);return Math[_0x3824('0x51')](Math[_0x3824('0x6d')]()*(Math[_0x3824('0x51')](_0x1c5654)-_0x3093d1+0x1))+_0x3093d1;}function _0x5d3d3d(_0x514330){return _0x514330[_0x32d375(0x0,_0x514330[_0x3824('0x20')]-0x1)];}const _0x5262ea=new _0x21b81f([{'id':'core','name':'Core','description':_0x3824('0x40'),'required':!![],'init':()=>{const _0x38dabf=$($(_0x3824('0x41'))[_0x3824('0x80')]()[0x0]);const _0x250ff8=_0x38dabf[_0x3824('0x58')]();_0x250ff8[_0x3824('0x7f')](_0x3824('0x59')+GM_info['script'][_0x3824('0x1c')]);_0x250ff8['attr']('href',_0x3824('0x4f'));_0x38dabf[_0x3824('0x31')]('\x20|\x20',_0x250ff8);}},{'id':_0x3824('0x24'),'name':_0x3824('0x2e'),'settings':[{'id':_0x3824('0x2'),'type':_0x3824('0x4b'),'name':'Line\x20Color','description':'The\x20color\x20of\x20the\x20tracers.','default':'#000000'}],'init':()=>{function _0xdb8b38(){Object[_0x3824('0x23')](_0x19bb0b)[_0x3824('0x4d')](_0x5d14d3=>{if(_0x45b750===null||_0x19bb0b[_0x45b750]===undefined||_0x19bb0b[_0x45b750][_0x3824('0x36')]===undefined)return;_0x1019cd[_0x3824('0x6c')]=color;_0x1019cd[_0x3824('0x50')]=0x3;const _0x244965=_0x19bb0b[_0x45b750];_0x1019cd[_0x3824('0x82')]();_0x1019cd[_0x3824('0x42')](_0x244965['x'],_0x244965['y']);_0x1019cd[_0x3824('0x28')](_0x5d14d3['x'],_0x5d14d3['y']);_0x1019cd['stroke']();});window[_0x3824('0x46')](_0xdb8b38);}_0xdb8b38();}},{'id':_0x3824('0x16'),'name':_0x3824('0x5b'),'description':_0x3824('0x75'),'settings':[{'id':'messages','name':'Message\x20List','hover':_0x3824('0xb'),'default':_0x3824('0x6'),'type':_0x3824('0x7f')},{'id':_0x3824('0x1d'),'name':_0x3824('0x47'),'default':!![],'type':_0x3824('0x84')}],'init':()=>{let _0x9e1f3=0x0;const _0x5afef2=_0x2268e1['auto_chat'][_0x3824('0x2a')]['split'](',');setInterval(()=>{if(_0x472398){const _0x25acaa=_0x2268e1[_0x3824('0x16')]['randomize_messages']?_0x5d3d3d(_0x5afef2):_0x5afef2[_0x9e1f3];_0x472398[_0x3824('0x22')]('ch',[_0x25acaa]);_0x9e1f3+=0x1;if(_0x9e1f3>=_0x5afef2[_0x3824('0x20')]){_0x9e1f3=0x0;}}},0xbb8);}},{'id':'smart_hat','name':'Smart\x20Hats','description':_0x3824('0x7c')},{'id':_0x3824('0x77'),'name':_0x3824('0x68'),'description':'With\x20this\x20module,\x20you\x20can\x20automatically\x20heal\x20when\x20you\x20get\x20damaged.'},{'id':_0x3824('0x3f'),'name':_0x3824('0x27'),'description':_0x3824('0x66')},{'id':_0x3824('0x7a'),'name':_0x3824('0x44'),'description':_0x3824('0x3d')},{'id':_0x3824('0x5d'),'name':_0x3824('0x71'),'description':_0x3824('0x25')},{'id':'minimap_biomes','name':_0x3824('0x83'),'description':_0x3824('0x67'),'init':()=>{$(_0x3824('0xc'))[_0x3824('0x62')]('background',_0x3824('0x1e'));},'deinit':()=>{$(_0x3824('0xc'))['css'](_0x3824('0x30'),_0x3824('0x26'));}},{'id':_0x3824('0x73'),'name':'Custom\x20Text','description':_0x3824('0x39'),'settings':[{'id':'death','name':_0x3824('0x6e'),'default':_0x3824('0x5f'),'type':_0x3824('0x7f')},{'id':_0x3824('0x52'),'name':_0x3824('0x3c'),'default':_0x3824('0x32'),'type':'text'}],'init':()=>{$(_0x3824('0x78'))[_0x3824('0x7f')](_0x2268e1[_0x3824('0x73')][_0x3824('0x1f')]);document[_0x3824('0x52')]=_0x2268e1['custom_text'][_0x3824('0x52')];}},{'id':'ping_display','name':_0x3824('0x7'),'description':_0x3824('0x4a'),'init':()=>{const _0x199fd1=$('#pingDisplay');_0x199fd1[_0x3824('0x62')](_0x3824('0x3b'),_0x3824('0x69'));_0x199fd1['css'](_0x3824('0x33'),_0x3824('0x3a'));$(_0x3824('0x38'))[_0x3824('0x45')](_0x199fd1);}}]);const _0x2268e1=JSON['parse'](localStorage[_0x3824('0x7d')](_0x3824('0x4')))||{};function _0x28a63e(_0xfc9f9b,_0x33f0bd,_0x2537f9){if(!_0x2268e1[_0xfc9f9b]){_0x2268e1[_0xfc9f9b]={};}if(!(_0x33f0bd===undefined||_0x2537f9===undefined)){_0x2268e1[_0xfc9f9b][_0x33f0bd]=_0x2537f9;}return localStorage['setItem'](_0x3824('0x4'),JSON['stringify'](_0x2268e1));}_0x5262ea['forEach'](_0x45d9d0=>{_0x28a63e(_0x45d9d0['id']);});let _0x2b5e27=![];const _0x465813=$(_0x3824('0x11'));const _0x31a04c=$(_0x3824('0x2c'))[_0x3824('0x58')](![]);_0x31a04c['children']()[0x0][_0x3824('0x21')]='build';_0x31a04c['css'](_0x3824('0x1'),_0x3824('0x19'));_0x31a04c[_0x3824('0x79')](_0x3824('0x52'),_0x3824('0x60')+Version);_0x31a04c[_0x3824('0x79')]('id','TJ');_0x31a04c['on'](_0x3824('0x1a'),_0x2148d4);_0x465813[_0x3824('0x45')](_0x31a04c);const _0x19ebcb=$(_0x3824('0x13'));_0x19ebcb['css'](_0x3824('0x33'),_0x3824('0x49'));_0x19ebcb[_0x3824('0x62')](_0x3824('0x56'),_0x3824('0xd'));_0x19ebcb[_0x3824('0x62')](_0x3824('0x4e'),'absolute');_0x19ebcb[_0x3824('0x62')](_0x3824('0x3b'),_0x3824('0x70'));_0x19ebcb['css']('transform',_0x3824('0x7b'));_0x19ebcb[_0x3824('0x62')]('text-align','center');_0x19ebcb[_0x3824('0x62')](_0x3824('0x74'),_0x3824('0x61'));const _0x5f49fc=$(_0x3824('0x13'));_0x5f49fc[_0x3824('0x79')]('id',_0x3824('0x76'));const _0xe78f5c=$('<div/>');_0xe78f5c[_0x3824('0x79')]('id','settingsBox');const _0x1da8cd=$(_0x3824('0xf'));_0x1da8cd[_0x3824('0x62')](_0x3824('0x56'),'30%');_0x1da8cd[_0x3824('0x45')](_0x3824('0x5'));_0x5262ea[_0x3824('0x4d')](_0x476bd5=>{const _0x18f501=$('<option/>');_0x18f501[_0x3824('0x79')](_0x3824('0x2b'),_0x476bd5['id']);_0x18f501['text'](_0x476bd5['name']);_0x1da8cd[_0x3824('0x45')](_0x18f501);});function _0x25ea64(_0x27a09d,_0x1cc8ff){const _0x3d25d3=$(_0x3824('0x5a'));_0x3d25d3['attr'](_0x3824('0x37'),_0x27a09d[_0x3824('0x37')]);_0x3d25d3[_0x3824('0x79')]('name',_0x27a09d['id']);_0x3d25d3[_0x3824('0x62')](_0x3824('0x34'),_0x3824('0x3e'));_0x3d25d3[_0x3824('0x62')](_0x3824('0x18'),_0x3824('0x43'));const _0x34bf63=$(_0x3824('0x6a'));_0x34bf63[_0x3824('0x7f')](_0x27a09d['name']);_0x3d25d3[_0x3824('0x79')](_0x3824('0x52'),_0x27a09d[_0x3824('0x2f')]);switch(_0x27a09d[_0x3824('0x37')]){case _0x3824('0x7f'):_0x3d25d3[_0x3824('0x62')](_0x3824('0x56'),_0x3824('0x2d'));_0x3d25d3[_0x3824('0x62')](_0x3824('0x18'),_0x3824('0x2d'));_0x3d25d3[_0x3824('0x79')]('placeholder',_0x3824('0x7e')+_0x27a09d[_0x3824('0xa')]);_0x3d25d3[_0x3824('0x14')](_0x1cc8ff);_0x34bf63[_0x3824('0x7f')](_0x27a09d[_0x3824('0xe')]+':');break;case _0x3824('0x84'):_0x3d25d3['prop']('checked',_0x1cc8ff);break;default:_0x3d25d3[_0x3824('0x14')](_0x1cc8ff);}if(_0x27a09d[_0x3824('0x37')]===_0x3824('0x7f')){_0x34bf63[_0x3824('0x45')](_0x3d25d3);}else{_0x34bf63[_0x3824('0x63')](_0x3d25d3);}return _0x34bf63;}_0x1da8cd['on'](_0x3824('0x5c'),_0x2e6f13=>{const _0x71615e=_0x5262ea['get'](_0x2e6f13[_0x3824('0x81')][_0x3824('0x2b')]);_0xe78f5c[_0x3824('0x48')]();const _0xcd6ad8=$(_0x3824('0x10'));_0xcd6ad8[_0x3824('0x7f')](_0x71615e[_0x3824('0x55')]||_0x3824('0x15')+_0x71615e[_0x3824('0xe')]+'\x20module\x20here.');_0xe78f5c[_0x3824('0x45')](_0xcd6ad8);if(!_0x71615e['required']){const _0x2b95e3=_0x25ea64({'type':_0x3824('0x84'),'id':_0x3824('0x6b'),'name':_0x3824('0x64'),'hover':_0x3824('0x5e')},_0x2268e1[_0x71615e['id']][_0x3824('0x6b')]);_0xe78f5c[_0x3824('0x45')](_0x2b95e3);}if(_0x71615e[_0x3824('0x29')]){_0x71615e[_0x3824('0x29')][_0x3824('0x4d')](_0x479f4d=>{_0xe78f5c[_0x3824('0x45')](_0x3824('0x35'));_0xe78f5c[_0x3824('0x45')](_0x25ea64(_0x479f4d,_0x2268e1[_0x71615e['id']][_0x479f4d['id']]));});}});_0xe78f5c['on']('change',_0x1bea87=>{const _0x497a04=$(_0x1bea87['target']);switch(_0x497a04[_0x3824('0x79')](_0x3824('0x37'))){case _0x3824('0x84'):return _0x28a63e(_0x1da8cd[_0x3824('0x14')](),_0x497a04[_0x3824('0x79')]('name'),_0x497a04[_0x3824('0x72')](_0x3824('0x57')));default:return _0x28a63e(_0x1da8cd['val'](),_0x497a04[_0x3824('0x79')]('name'),_0x497a04[_0x3824('0x14')]());}});_0x1da8cd[_0x3824('0x14')](_0x3824('0x65'))['change']();_0x5f49fc['append']('<h1>Options</h2>');_0x5f49fc['append'](_0x1da8cd);_0x5f49fc[_0x3824('0x45')](_0xe78f5c);_0x19ebcb[_0x3824('0x45')](_0x5f49fc);_0x465813['append'](_0x19ebcb);$(_0x3824('0x17'))['append']('\x0a\x09\x09\x09<style>\x0a\x09\x09\x09\x09#hackMenu\x20{\x0a\x09\x09\x09\x09\x09background-color:\x20rgb(10,\x20134,\x2097,\x200.75);\x0a\x09\x09\x09\x09\x09width:\x20400px;\x0a\x09\x09\x09\x09\x09height:\x20400px;\x0a\x09\x09\x09\x09\x09color:\x20white;\x0a\x09\x09\x09\x09\x09max-height:\x20calc(100vh\x20-\x20400px);\x0a\x09\x09\x09\x09\x09overflow-y:\x20hidden;\x0a\x09\x09\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09\x09\x09border-radius:\x204px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09#settingsBox\x20{\x0a\x09\x09\x09\x09\x09height:\x20300px;\x0a\x09\x09\x09\x09\x09overflow-y:\x20scroll;\x0a\x09\x09\x09\x09\x09padding:\x2025px;\x0a\x09\x09\x09\x09\x09text-align:\x20left;\x0a\x09\x09\x09\x09\x09font-size:\x2018px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09h1\x20{\x0a\x09\x09\x09\x09\x09font-size:\x2026px;\x0a\x09\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09</style>\x0a\x09\x09');function _0x2148d4(){_0x2b5e27=!_0x2b5e27;_0x19ebcb[_0x3824('0x62')]('display',_0x2b5e27?_0x3824('0x3a'):_0x3824('0x49'));}_0x5262ea[_0x3824('0x4d')](_0x49c183=>{if(_0x2268e1[_0x49c183['id']][_0x3824('0x6b')]||_0x49c183[_0x3824('0x54')]){if(_0x49c183[_0x3824('0x4c')]){_0x49c183[_0x3824('0x4c')]();}else{console[_0x3824('0x53')](_0x3824('0x3')+_0x49c183['id']+_0x3824('0x1b'));}}});}catch(_0x4b1a60){console[_0x3824('0x53')](_0x4b1a60);}})();
var FPS;
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
function died(){
if(count2>=0 && count2<1){
    document.getElementById("killCounter").style.color = "pink";
}
if(count2>=1 && count2<10){
    document.getElementById("killCounter").style.color = "green";
}
if(count2>=10 && count2<25){
    document.getElementById("killCounter").style.color = "white";
}
if(count2>=25 && count2<50){
    document.getElementById("killCounter").style.color = "yellow";
}
if(count2>=50 && count2<75){
    document.getElementById("killCounter").style.color = "orange";
}
if(count2>=75 && count2<100){
    document.getElementById("killCounter").style.color = "red";
}
if(count2>=100){
    document.getElementById("killCounter").style.color = "black";
}
}
if (lite == false) {
    var _0x3a71 = ['purple', 'getElementById', 'yellow', 'color', 'green', 'blue', 'darkblue', 'killCounter', 'style'];
    (function(_0x17e5c7, _0x3a717c) {
        var _0x1630b8 = function(_0x5932a3) {
            while (--_0x5932a3) {
                _0x17e5c7['push'](_0x17e5c7['shift']());
            }
        };
        _0x1630b8(++_0x3a717c);
    }(_0x3a71, 0xc8));
    var _0x1630 = function(_0x17e5c7, _0x3a717c) {
        _0x17e5c7 = _0x17e5c7 - 0x0;
        var _0x1630b8 = _0x3a71[_0x17e5c7];
        return _0x1630b8;
    };
    setInterval(() => {
        setTimeout(() => {
            document['getElementById'](_0x1630('0x5'))[_0x1630('0x6')]['color'] = 'red';
            setTimeout(() => {
                document[_0x1630('0x8')](_0x1630('0x5'))[_0x1630('0x6')][_0x1630('0x1')] = 'orange';
                setTimeout(() => {
                    document[_0x1630('0x8')](_0x1630('0x5'))[_0x1630('0x6')][_0x1630('0x1')] = _0x1630('0x0');
                    setTimeout(() => {
                        document[_0x1630('0x8')](_0x1630('0x5'))[_0x1630('0x6')][_0x1630('0x1')] = _0x1630('0x2');
                        setTimeout(() => {
                            document[_0x1630('0x8')](_0x1630('0x5'))[_0x1630('0x6')][_0x1630('0x1')] = _0x1630('0x3');
                            setTimeout(() => {
                                document[_0x1630('0x8')](_0x1630('0x5'))['style'][_0x1630('0x1')] = _0x1630('0x4');
                                setTimeout(() => {
                                    document[_0x1630('0x8')](_0x1630('0x5'))[_0x1630('0x6')][_0x1630('0x1')] = _0x1630('0x7');
                                }, 0x64);
                            }, 0x64);
                        }, 0x64);
                    }, 0x64);
                }, 0x64);
            }, 0x64);
        }, 0x64);
    }, 0x2bc);
}
setInterval(() => {
    fpsdiv.innerHTML = "FPS<br>" + FPS
}, 500);
let fpsdiv = document.createElement("div");
fpsdiv.id = "test"
document.body.prepend(fpsdiv);
let warn = document.createElement("div");
warn.id = "wn"
document.body.prepend(warn);
let imgb = document.createElement("img");
imgb.src="https://i.ibb.co/KwvC72c/image.png"
imgb.id = "imgb"
document.body.prepend(imgb);
    imgb.addEventListener("click", () => {
        doNewSend(["ch", ["-TJMod ON TOP-"]]);
    });
var ldinfo;
var ahinfo;
var bhinfo;
var btinfo;
var aainfo = no;
var x;
var y;
var dir;
var clan;
var Hat;
var ACC;
var skull;
var pn;
var yes = '<span style="color:#68FF00;">Yes</span>';
var no = '<span style="color:#FF0000;">No</span>';
var on = '<span style="color:#68FF00;">ON</span>';
var off = '<span style="color:#FF0000;">OFF</span>';
setInterval(() => {
    info.innerHTML = '<span style="color:#00FFE4;">==INFO==</span><br><span style="color:#FFF700;">Leader:</span>' + ldinfo + '<span style="color:#9700FF;"> FPS:</span><span style="color:#00FFB6;">' + FPS + '</span><br><span style="color:#FF8300;">AutoHeal:</span><span style="color:#68FF00;">' + ahinfo + '</span><span style="color:#00B9FF;"> AutoHat:</span>' + bhinfo + '<br><span style="color:#2acba9;">BotMode:</span>' + btinfo + '<span style="color:#111073;"> AutoAim:</span>' + aainfo + '<br><span style="color:#16f1dd;">X:</span>' + x + ' <span style="color:#26d289;">Y:</span>' + y + '<br><span style="color:#f9dbd9;">Dir:</span>' + dir + '<span style="color:#e6df4a;"> Clan:</span>' + clan + '<br><span style="color:#ff2610;">Hat:</span>' + Hat + '<span style="color:#e154fe;"> Accessorie:</span>' + ACC + '<br><span style="color:#f7f9ee;">Skull:</span>' + skull + '<span style="color:#dd730b;"> Player Near:</span>' + pn + '<img src="https://i.ibb.co/5YW2fh0/cooltext356310116484522.gif" width=240 height=78>'
    if (isEnemyNear == true) {
        pn = yes
    } else {
        pn = no
    }
    Hat = myPlayer.hat
    ACC = myPlayer.accessory
    x = '<span style="color:#FF0000;">' + myPlayer.x + '</span>'
    y = '<span style="color:#0032FF;">' + myPlayer.y + '</span>'
    dir = '<span style="color:#E400FF;">' + myPlayer.dir + '</span>'
    if (myPlayer.isSkull == true) {
        skull = yes
    } else {
        skull = no
    }
    if (myPlayer.clan == null) {
        clan = '<span style="color:#FF0000;">NoClan</span>'
    } else {
        clan = '<span style="color:#2efe1f;">' + myPlayer.clan + '</span>'
    }
    if (myPlayer.isLeader == true) {
        ldinfo = yes
    } else {
        ldinfo = no
    }
    if (AutoHeal == true) {
        ahinfo = on
    } else {
        ahinfo = off
    }
    if (AutoHat == true) {
        bhinfo = on
    } else {
        bhinfo = off
    }
    if (BotToggle == 1) {
        btinfo = on
    } else {
        btinfo = off
    }
    if (AutoAim == true) {
        aainfo = on
    } else {
        aainfo = off
    }
}, 100);
let info = document.createElement("div");
info.id = "info"
document.body.prepend(info);

copy()

function copy() {
    $("#menuCardHolder").append(`<br><div class='menuCard' id='guideCard'><div class='menuHeader'>TJMod<br></div><div class='menuText'><label class="container">DARK◾THEME<input type="checkbox" id="EWDFAWFAW"><span class="checkmark"></span></label><h2 style="font-size: 17px; color: #00FF04">Menu</h2><input value="ESC" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F1=Help</h2><input value="F1" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">.(NumPad)=Message</h2><input value="." class="keyPressLow" type="text" disabled="disabled"/><hr><br><h2 style="font-size: 17px; color: #BD00FF">Left Click=Bull Helmet</h2><br><h2 style="font-size: 17px; color: #BD00FF">Right Click=Bow,Musket</h2><br><h2 style="font-size: 17px; color: #BD00FF">Middle Click=Big Map</h2><hr><br><h2 style="font-size: 17px; color: #FFFF00">Super Insta</h2><br><h2 style="font-size: 17px; color: #00FF04">F2=Bow Insta</h2><input value="F2" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F3=AGE 1 Polearm Insta</h2><input value="F3" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00FF04">F4=AGE 8 Katana Insta</h2><input value="F4" class="keyPressLow" type="text" disabled="disabled"/><hr><label class="container">Custom Key<input type="checkbox" id="ck"><span class="checkmark"></span></label><hr><br><h2 style="font-size: 17px; color: #00e3f8">~=4 Turret</h2><input value="" id="001" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Q=SuperHeal</h2><input value="Q" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">R=InstaKill</h2><input value="" id="003" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">F=Trap/Boost</h2><input value="F" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">V=Spike</h2><input value="V" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">T=Toggle AutoHeal</h2><input value="" id="006" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">G=Boost/Trap Spike</h2><input value="G" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">B=Toggle AutoHat</h2><input value="" id="008" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Y=Create Custom Clan</h2><input value="" id="009" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">H=2 Turret</h2><input value="H" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">N=Windmill</h2><input value="N" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">U=Clear Clan</h2><input value="" id="012" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">J=Custom Discord Chat</h2><input value="" id="013" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">M=Best Hat,Accessorie</h2><input value="" id="014" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">I=4 Trap/Boost</h2><input value="" id="015" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">K=Crash Server(If Toggle)Now=Change Insta Speed[190/230]</h2><input value="" id="016" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8"><=Stick To Katana</h2><input value="" id="017" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">O=5 Windmill</h2><input value="" id="018" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">L=Bot Mode</h2><input value="" id="019" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">>=Any To Musket</h2><input value="" id="020" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">P=4 Wall</h2><input value="" id="021" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">;=4 Spike</h2><input value="" id="022" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">/=Grate Axe+Musket</h2><input value="" id="023" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">-=Premium Map Toggle</h2><input value="" id="024" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">[=Stick To Great Axe</h2><input value="" id="025" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">'=Katana+Musket</h2><input value="" id="026" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">+=InstaSpike Toggle</h2><input value="" id="027" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">]=Any To CrossBow</h2><input value="" id="028" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">\\=Spike To Spining Spike</h2><input value="" id="029" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/><br><h2 style="font-size: 17px; color: #00e3f8">Space=Dead Message</h2><input value="Space" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬆=Custom Animate Chat</h2><input value="⬆" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬇=Custom Animate Clan</h2><input value="⬇" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">⬅="Try to kill me = suicide" Chat</h2><input value="⬅" class="keyPressLow" type="text" disabled="disabled"/><br><h2 style="font-size: 17px; color: #00e3f8">➡="Get rekt noob" Chat</h2><input value="➡" class="keyPressLow" type="text" disabled="disabled"/><br>TJMod By Xx_TJGaming_xX</div></div>`);
}

function CB() {
    document.getElementById("gameName").style.color = "black"
    $('.menuCard').css({
        'color': '#000000'
    });
    $('#guideCard').css({
        'color': '#000000'
    });
    $('.menuLink').css({
        'color': '#000000'
    });
    $('#serverSelect').css({
        'color': '#ffffff',
        'background-color': '#000000'
    });
    document.getElementById('loadingText').style.color = "black"
    $('.menuButton').css({
        'background-color': '#000000'
    });
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

function CW() {
    document.getElementById("scoreDisplay").style.color = "white";
    document.getElementById("woodDisplay").style.color = "white";
    document.getElementById("stoneDisplay").style.color = "white";
    document.getElementById("killCounter").style.color = "white";
    document.getElementById("foodDisplay").style.color = "white";
    document.getElementById("setupCard").style.backgroundColor = "white";
    document.getElementById("guideCard").style.backgroundColor = "white";
    document.getElementById("gameName").style.color = "white"
    $('#guideCard').css({
        'color': '#ffffff'
    });
    document.getElementById("setupCard").style.backgroundColor = "white";
    $('#serverSelect').css({
        'color': '#000000',
        'background-color': '#ffffff'
    });
    document.getElementById('loadingText').style.color = "white"
    $('.menuButton').css({
        'background-color': '#ffffff'
    });
    document.getElementById("leaderboard").style.color = "white"
    document.getElementById('diedText').style.color = "white";
    document.getElementById("setupCard").style.boxShadow = "0px 7px white";
    document.getElementById("guideCard").style.boxShadow = "0px 7px white";
    document.getElementById("enterGame").style.backgroundColor = "#7ee559"
    document.getElementById("gameName").style.textShadow = "0 1px 0 #c4c4c4, 0 2px 0 #c4c4c4, 0 3px 0 #c4c4c4, 0 4px 0 #c4c4c4, 0 5px 0 #c4c4c4";
}
$('#gameName').css({
    'color': '#000000',
    'text-shadow': '0 1px 0 rgba(231, 76, 60), 0 2px 0 rgba(231, 76, 60), 0 3px 0 rgba(231, 76, 60), 0 4px 0 rgba(231, 76, 60), 0 5px 0 rgba(231, 76, 60), 0 6px 0 rgba(231, 76, 60), 0 7px 0 rgba(231, 76, 60), 0 8px 0 rgba(231, 76, 60), 0 9px 0 rgba(255, 0, 0)',
    'text-align': 'center',
    'font-size': '156px',
    'margin-bottom': '-30px'
});
$('#loadingText').css({
    'color': '#ff0000',
    'background-color': 'rgba(0, 0, 0, 0.74)',
    'padding': '8px',
    'right': '150%',
    'left': '150%',
    'margin-top': '40px'
});
$('#guideCard').prepend('<center><a href = "https://discord.gg/Fy3hsXC" target="_blank" style="font-size:15px">☢Join Xx_TJGaming_xX Discord☢</a></center>');
$("#wn").css({
    'display': 'none',
    'color': 'red',
    'top': '197px',
    'left': '912px',
    'position': 'absolute',
    'font-size': '17px'
})
var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function() {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "AutoReloader▶ON🟢";
            clearInterval(autoreloadloop);
            setTimeout(function() {}, 1000)
            location.reload();
        }
        autoreloadenough++;
    } else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        setTimeout(function() {}, 1000)
    }
}, 50);

function ez(_0x40ebc0) {
    selectSkinColor(_0x40ebc0);
}
if (autoskin == true) {
    ez(3)
}
var sANC = 1;

var aNC = [255, 255, 1];

var rANC = [1, 50];

var mk = document.getElementById("gameCanvas").getContext("2d");
var Laa = 0;
var Lab = 0;
var aVZ = 0;
var fBX = "<3 KatieW.";
var resForRANC = 1;

// 1920-1080

function rainbowColor() {
    if (resForRANC === 1) {
        aNC = [255, 0, 0];
        resForRANC = 0;
    }
    if (aNC[0] === 255 && aNC[1] !== 255 && aNC[2] === 0) {
        aNC[1] += 255 / rANC[1];
    }
    if (aNC[0] !== 0 && aNC[1] === 255 && aNC[2] === 0) {
        aNC[0] += 255 / rANC[1] * -1;
    }
    if (aNC[0] === 0 && aNC[1] === 255 && aNC[2] !== 255) {
        aNC[2] += 255 / rANC[1];
    }
    if (aNC[0] === 0 && aNC[1] !== 0 && aNC[2] === 255) {
        aNC[1] += 255 / rANC[1] * -1;
    }
    if (aNC[0] !== 255 && aNC[1] === 0 && aNC[2] === 255) {
        aNC[0] += 255 / rANC[1];
    }
    if (aNC[0] === 255 && aNC[1] === 0 && aNC[2] !== 0) {
        aNC[2] += 255 / rANC[1] * -1;
    }
    if (aNC[0] < 0) {
        aNC[0] = 0;
    }
    if (255 < aNC[0]) {
        aNC[0] = 255;
    }
    if (aNC[1] < 0) {
        aNC[1] = 0;
    }
    if (255 < aNC[1]) {
        aNC[1] = 255;
    }
    if (aNC[2] < 0) {
        aNC[2] = 0;
    }
    if (255 < aNC[2]) {
        aNC[2] = 255;
    }
}

function katie() {
    if (circle2 == true) {
        if (document.getElementById("actionBarItem0")) {
            if (circle==2) {
                if (fBX !== 3) {
                    aVZ = [
                        [0, 480],
                        [0, 360],
                        [0, 255]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 3;
                }

                aVZ[0][0] += 1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += 1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 24;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.625)";
                mk.arc(960, 540, 212, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 7 / 8 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 30;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.625)";
                mk.arc(960, 540, 185, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 2 / 3 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 45;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.5)";
                mk.arc(960, 540, 85, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 1 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
            }
            if (circle==1) {
                if (fBX !== 3) {
                    aVZ = [
                        [0, 480],
                        [0, 360],
                        [0, 255]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 3;
                }

                aVZ[0][0] += 1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += 1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 24;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.625)";
                mk.arc(960, 540, 212, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 7 / 8 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 30;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.625)";
                mk.arc(960, 540, 185, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 2 / 3 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 45;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.5)";
                mk.arc(960, 540, 85, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 1 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
            }
            if (circle==3) {
                if (fBX !== 4) {
                    aVZ = [
                        [0, 360],
                        [0, 250],
                        [0, 225],
                        [0, 250]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 4;
                }

                aVZ[0][0] += -1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += -1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }
                aVZ[3][0] += 1;
                if (aVZ[3][1] <= aVZ[3][0]) {
                    aVZ[3][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 36;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.45)";
                mk.arc(960, 540, 251, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 15 / 16 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 46;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.45)";
                mk.arc(960, 540, 210, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 7 / 9 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 32;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.383)";
                mk.arc(960, 540, 109, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 2 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 26;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 235) + "," + Math.round(aNC[1] / 255 * 235) + "," + Math.round(aNC[2] / 255 * 235) + ",0.383)";
                mk.arc(960, 540, 80, 0 + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0], 7 / 8 * Math.PI + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0]);
                mk.stroke();
            }
            if (circle==1) {
                if (fBX !== 3) {
                    aVZ = [
                        [0, 480],
                        [0, 360],
                        [0, 255]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 3;
                }

                aVZ[0][0] += 1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += 1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 24;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.625)";
                mk.arc(960, 540, 212, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 7 / 8 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 30;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.625)";
                mk.arc(960, 540, 185, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 2 / 3 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 45;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.5)";
                mk.arc(960, 540, 85, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 1 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
            }
            if (circle==3) {
                if (fBX !== 4) {
                    aVZ = [
                        [0, 360],
                        [0, 250],
                        [0, 225],
                        [0, 250]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 4;
                }

                aVZ[0][0] += -1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += -1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }
                aVZ[3][0] += 1;
                if (aVZ[3][1] <= aVZ[3][0]) {
                    aVZ[3][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 36;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.45)";
                mk.arc(960, 540, 251, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 15 / 16 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 46;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.45)";
                mk.arc(960, 540, 210, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 7 / 9 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 32;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.383)";
                mk.arc(960, 540, 109, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 2 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 26;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 235) + "," + Math.round(aNC[1] / 255 * 235) + "," + Math.round(aNC[2] / 255 * 235) + ",0.383)";
                mk.arc(960, 540, 80, 0 + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0], 7 / 8 * Math.PI + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0]);
                mk.stroke();
            }
            if (circle==6) {
                if (fBX !== 3) {
                    aVZ = [
                        [0, 480],
                        [0, 360],
                        [0, 255]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 3;
                }

                aVZ[0][0] += 1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += 1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 24;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.625)";
                mk.arc(960, 540, 212, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 7 / 8 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 30;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.625)";
                mk.arc(960, 540, 185, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 2 / 3 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 45;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.5)";
                mk.arc(960, 540, 85, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 1 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
            }
            if (circle==5) {
                if (fBX !== 4) {
                    aVZ = [
                        [0, 360],
                        [0, 250],
                        [0, 225],
                        [0, 250]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 0];
                    }
                    fBX = 4;
                }

                aVZ[0][0] += -1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }
                aVZ[1][0] += 1;
                if (aVZ[1][1] <= aVZ[1][0]) {
                    aVZ[1][0] = 0;
                }
                aVZ[2][0] += -1;
                if (aVZ[2][1] <= aVZ[2][0]) {
                    aVZ[2][0] = 0;
                }
                aVZ[3][0] += 1;
                if (aVZ[3][1] <= aVZ[3][0]) {
                    aVZ[3][0] = 0;
                }

                mk.beginPath();
                mk.lineWidth = 36;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.45)";
                mk.arc(960, 540, 251, 0 + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0], 15 / 16 * Math.PI + Math.PI / (aVZ[0][1] / 2) * aVZ[0][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 46;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 220) + "," + Math.round(aNC[1] / 255 * 220) + "," + Math.round(aNC[2] / 255 * 220) + ",0.45)";
                mk.arc(960, 540, 210, 0 + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0], 7 / 9 * Math.PI + Math.PI / (aVZ[1][1] / 2) * aVZ[1][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 32;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0]) + "," + Math.round(aNC[1]) + "," + Math.round(aNC[2]) + ",0.383)";
                mk.arc(960, 540, 109, 0 + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0], 2 / 3 * Math.PI + Math.PI / (aVZ[2][1] / 2) * aVZ[2][0]);
                mk.stroke();
                mk.beginPath();
                mk.lineWidth = 26;
                mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 235) + "," + Math.round(aNC[1] / 255 * 235) + "," + Math.round(aNC[2] / 255 * 235) + ",0.383)";
                mk.arc(960, 540, 80, 0 + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0], 7 / 8 * Math.PI + Math.PI / (aVZ[3][1] / 2) * aVZ[3][0]);
                mk.stroke();
            }
            if (circle==4) {
                if (fBX !== 5) {
                    aVZ = [
                        [0, 250, 2.5, 10, 1.2]
                    ];
                    if (sANC === 1) {
                        aNC = [255, 0, 255];
                    }
                    fBX = 5;
                }

                aVZ[0][0] += 1;
                if (aVZ[0][1] <= aVZ[0][0]) {
                    aVZ[0][0] = 0;
                }

                for (Laa = 0; Laa < Math.round(aVZ[0][1] / 5 * 2); Laa++) {
                    mk.beginPath();
                    mk.lineWidth = 26;
                    mk.strokeStyle = "rgb(" + Math.round(aNC[0] / 255 * 235) + "," + Math.round(aNC[1] / 255 * 235) + "," + Math.round(aNC[2] / 255 * 235) + ",0.5)";
                    mk.arc(960, 540, 200 + Math.sin(aVZ[0][3] * Math.PI / (aVZ[0][1] / aVZ[0][2]) * (Laa - aVZ[0][0])) * aVZ[0][3] * aVZ[0][4], 0 - 2 * Math.PI / aVZ[0][1] * Laa + 2 * Math.PI / aVZ[0][1] * aVZ[0][0], 2 * Math.PI / aVZ[0][1] - 2 * Math.PI / aVZ[0][1] * Laa + 2 * Math.PI / aVZ[0][1] * aVZ[0][0]);
                    mk.stroke();
                }
            }
        }
    }
}

function letThereBeLight() {
    if (rANC[0] === 1) {
        rainbowColor();
    }
    katie();
    window.requestAnimationFrame(letThereBeLight);
}

window.requestAnimationFrame(letThereBeLight);
if (lite == true) {
    $('#menuContainer').append('Xx_TJGaming_xX')
} else {
    setTimeout(() => {
        setTimeout(() => {
            $('#menuContainer').append('X')
            setTimeout(() => {
                $('#menuContainer').append('x')
                setTimeout(() => {
                    $('#menuContainer').append('_')
                    setTimeout(() => {
                        $('#menuContainer').append('T')
                        setTimeout(() => {
                            $('#menuContainer').append('J')
                            setTimeout(() => {
                                $('#menuContainer').append('G')
                                setTimeout(() => {
                                    $('#menuContainer').append('a')
                                    setTimeout(() => {
                                        $('#menuContainer').append('m')
                                        setTimeout(() => {
                                            $('#menuContainer').append('i')
                                            setTimeout(() => {
                                                $('#menuContainer').append('n')
                                                setTimeout(() => {
                                                    $('#menuContainer').append('g')
                                                    setTimeout(() => {
                                                        $('#menuContainer').append('_')
                                                        setTimeout(() => {
                                                            $('#menuContainer').append('x')
                                                            setTimeout(() => {
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
    }, 2000);
}
$("#youtuberOf").html(`<div id="youtuberOf"><div class="spanLink" id="featuredYoutube"><a target="_blank" style="font-size: 25px;" class="ytLink" href="https://www.youtube.com/channel/UCjPFSBbEMb755Lw9aFGXI6w"><span style="font-size: 25px;color: #64E300">></span>Xx_TJGaming_xX</a></div></div>
Featured Hacker:`)
if (lite == false) {
    let newImg = document.createElement("img");
    newImg.src = "https://i.ibb.co/Hd1CDJ3/image.jpg"
    newImg.style = `position: absolute; top: 85px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
    document.body.prepend(newImg);
    newImg.addEventListener("click", () => {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";
        }
    });

    let settings = document.createElement("img");
    settings.src = "https://i.ibb.co/YPNRsZY/image.gif"
    settings.style = `position: absolute; top: 150px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
    document.body.prepend(settings);
    settings.addEventListener("click", () => {
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });

    let message = document.createElement("img");
    message.src = "https://i.ibb.co/WsW14kY/1.gif"
    message.style = `position: absolute; top: 215px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
    document.body.prepend(message);
    message.addEventListener("click", () => {
        if (Msgmodal.style.display = "none") {
            Msgmodal.style.display = "block";
        } else {
            Msgmodal.style.display = "none";
        }
    });
} else {
    let newImg = document.createElement("img");
    newImg.src = "https://i.ibb.co/Hd1CDJ3/image.jpg"
    newImg.style = `position: absolute; top: 85px; left: 15px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
    document.body.prepend(newImg);
    newImg.addEventListener("click", () => {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";
        }
    });
}
try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("#moomooio_728x90_home").parent().css({
        display: "none"
    });
} catch (e) {
    console.log("[INFO]Remove Ad...");
}


$("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');

$('#imgb').css({
	'width': '100px',
	'border-radius': '50%',
	'border': '10px solid rgba(0,27,128,0.80)',
    'position': 'absolute',
    'top': '120px',
    'left': '1530px'
});

$('#test').css({
    'color': '#ffdd00',
    'font-size': '25px',
    'position': 'absolute',
    'text-align': 'center',
    'width': '80',
    'height': '80',
    'display': 'none',
    'background-color': 'rgba(0, 0, 0, 0.4)'
});
$('#info').css({
    'font-size': '15px',
    'position': 'absolute',
    'width': '240px',
    'height': '230px',
    'background': 'url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-curvy-rainbow-gradient-kelsey-lovelle.jpg")',
    'top': '560px',
    'left': '1680px',
    'display': 'none'
});
$('#leaderboard').css({
    '-webkit-border-radius': '0px',
    '-moz-border-radius': '0px',
    'border-radius': '0px',
    'background': 'url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg)',
    'text-align': 'center'
});
if (lite == true) {
    document.getElementById("mainMenu").style.backgroundImage = "url(https://i.imgur.com/EkLgy.jpg)";
} else {
    document.getElementById("mainMenu").style.backgroundImage = "url(https://wallpapercave.com/wp/wp2763910.gif)";
}
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
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
//TJMenu
$("#errorNotification").after('<div id="moddedMenu"><div class="titleMM"> ☘T҉J҉M҉o҉d҉ ҉O҉N҉ ҉T҉O҉P҉☘ </div><div class="one"><label class="switch"></span></label><div class="two"><div class="text"><b>TJMod By Xx_TJGaming_xX<br>Discord:TJServer#9487<br>Version-' + Version + '<br>MooMoo Ver-' + moomooVer + '<hr>AutoReload<label class="switch"><input type="checkbox" id=ARL><span class="slider"></span></label><br>TurretHelmet<label class="switch"><input type="checkbox" id=thttt><span class="slider"></span></label><hr>SuperHeal<label class="switch"><input type="checkbox" id=SHL><span class="slider"></span></label><br>Unquip Accessorie<label class="switch"><input type="checkbox" id=xdezzL><span class="slider"></span></label><br>TJOP-BOT<label class="switch"><input type="checkbox" id=TJOPBOT2><span class="slider"></span></label></b></div></div>');
for (let i = 0; i < hideSelectors.length; i++) {
    $(hideSelectors[i]).hide();
}
head.appendChild(style);
if (lite == true) {
    $('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">🌐' + moomooVer + '🌐<br>TJMod Version◽💠' + Version + '💠◽Lite');
} else {
    $('#linksContainer2').html('<a href="./docs/versions.txt" target="_blank" class="menuLink">🌐' + moomooVer + '🌐<br>TJMod Version◽💠' + Version + '💠');
}
if (lite == true) {
    document.getElementById('enterGame').innerHTML = '➡PLAY⬅';
} else {
    setInterval(() => {
        document.getElementById('enterGame').innerHTML = '➡ PLAY ⬅';
        setTimeout(() => {
            document.getElementById('enterGame').innerHTML = '➡PLAY⬅';
        }, 300);
    }, 500);
}
document.getElementById('loadingText').innerHTML = '💠 Load TJMod 💠';
setTimeout(() => {
    document.getElementById('loadingText').innerHTML = '✅Successful✅';
}, 2000);
if (lite == true) {
    document.getElementById('nameInput').placeholder = "Enter Name";
} else {
    setInterval(() => {
        setTimeout(() => {
            document.getElementById('nameInput').placeholder = "🐺Xx_TJGaming_xX🐺";
            setTimeout(() => {
                document.getElementById('nameInput').placeholder = "Enter Name";
            }, 200);
        }, 200);
    }, 500);
}
if (lite == false) {
    setInterval(() => {
        setTimeout(() => {
            document.getElementById('chatBox').placeholder = "💬Message💬";
            setTimeout(() => {
                document.getElementById('chatBox').placeholder = "💬Message.💬";
                setTimeout(() => {
                    document.getElementById('chatBox').placeholder = "💬Message..💬";
                    setTimeout(() => {
                        document.getElementById('chatBox').placeholder = "💬Message...💬";
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 500);
} else {
    document.getElementById('chatBox').placeholder = "💬Message💬";
}

if (lite == true) {
    document.getElementById('diedText').style.color = "Red";
    document.getElementById('diedText').innerHTML = '💀 YOU DIED 💀';
} else {
    setInterval(() => {
        document.getElementById('diedText').style.color = "Red";
        document.getElementById('diedText').innerHTML = '💀 YOU DIED 💀';
        setTimeout(() => {
            document.getElementById('diedText').style.color = "Blue";
            document.getElementById('diedText').innerHTML = '💀 GG:( 💀';
        }, 500);
    }, 1000);
}
document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"

document.getElementById("leaderboard").style.color = "yellow";
document.getElementById('adCard').remove();
if (lite == true) {
    document.getElementById("leaderboard").style.color = "yellow";
} else {
    setInterval(() => {
        setTimeout(() => {
            document.getElementById("leaderboard").style.color = "red";
            setTimeout(() => {
                document.getElementById("leaderboard").style.color = "orange";
                setTimeout(() => {
                    document.getElementById("leaderboard").style.color = "yellow";
                    setTimeout(() => {
                        document.getElementById("leaderboard").style.color = "green";
                        setTimeout(() => {
                            document.getElementById("leaderboard").style.color = "blue";
                            setTimeout(() => {
                                document.getElementById("leaderboard").style.color = "darkblue";
                                setTimeout(() => {
                                    document.getElementById("leaderboard").style.color = "purple";
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 700);
}
document.getElementById("setupCard").style.color = "pink";
document.getElementById("gameName").innerHTML = "💥TJMod💥"
if (lite == true) {
    document.getElementById("gameName").innerHTML = "💥TJMod💥"
} else {
    setInterval(() => {
        setTimeout(() => {
            document.getElementById("gameName").innerHTML = "💥TJMod💥"
            setTimeout(() => {
                document.getElementById("gameName").innerHTML = "💥_JMod💥"
                setTimeout(() => {
                    document.getElementById("gameName").innerHTML = "💥T_Mod💥"
                    setTimeout(() => {
                        document.getElementById("gameName").innerHTML = "💥TJ_od💥"
                        setTimeout(() => {
                            document.getElementById("gameName").innerHTML = "💥TJM_d💥"
                            setTimeout(() => {
                                document.getElementById("gameName").innerHTML = "💥TJMo_💥"
                                setTimeout(() => {
                                    document.getElementById("gameName").innerHTML = "💥TJM_d💥"
                                    setTimeout(() => {
                                        document.getElementById("gameName").innerHTML = "💥TJ_od💥"
                                        setTimeout(() => {
                                            document.getElementById("gameName").innerHTML = "💥T_Mod💥"
                                            setTimeout(() => {
                                                document.getElementById("gameName").innerHTML = "💥_JMod💥"
                                                setTimeout(() => {
                                                    document.getElementById("gameName").innerHTML = "💥TJMod💥"
                                                    setTimeout(() => {
                                                        document.getElementById("gameName").innerHTML = "🔷TJMod ON TOP🔷"
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
        }, 100);
    }, 2000);
}

$('#leaderboard').append('🔥TJMod🔥');

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
	"    color: #FFFF00 !important;",
	"    font-size: 20px;",
	"    margin-top: 0px;",
	"    transition: 0.5s;",
	"  }",
	"  a:hover {",
	"    color: #51FF00 !important;",
	"  }",
	"",
	"  #featuredYoutube {",
    "  margin-top: 30px;",
    "  }",
	"",
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
    "    height:180px;",
	"  }",
    "",
    "  ::-webkit-scrollbar {",
    "    width: 10px;",
    "    border-right: 2px solid #B6EC0E;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb {",
    "    border: 2px solid #00FFAE;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb:hover {",
    "    background: #FF8C00;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb:active {",
    "    background: green;",
    "    border: 2px solid #FFFF00;",
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
	"    color: #FF8C00;",
	"    font-size: 24px;",
	"    text-decoration: none;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .menuButton {",
	"    color: #fff;",
	"    background-color: transparent;",
	"    border: 5px solid #0023FF;",
	"    position: relative;",
	"    display: inline-flex;",
	"    padding: 0px 70px;",
	"    font-family: fantasy;",
	"    transition: color .5s;",
	"    overflow: hidden;",
	"    width: 100%;",
	"    justify-content: center;",
	"  }",
	"",
	"  .menuButton:hover {",
	"    font-family: monospace;",
	"    color: #FFFFFF !important;",
	"    border: 5px solid #13FF00;",
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
	"    background: #B200FF;",
	"    border-right: 20px solid #FF0000;",
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
    "    width: 13px;",
    "    height: 13px;",
    "    border: 3px solid #000;",
    "  }",
    "",
    "  select {",
    "    background: #B20E0E;",
    "    border-radius: 5px;",
    "    border: 3px solid #006EC4;",
    "    margin-bottom: 10px;",
    "    color: #fff;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  select:hover {",
    "    background: #006EC4;",
    "    border: 3px solid #B20E0E;",
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
	"    color: #FFE000;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  .uiElement:hover, ",
	"  .resourceDisplay:hover, ",
	"  .actionBarItem:hover {",
	"    background-color: rgba(0,0,0,0.5) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 50px !important;",
	"    color: #FF8C00;",
	"  }",
	"",
	"  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 3px solid rgba(0,0,0,0.9);",
	"    border-radius: 10px !important;",
	"    color: #FF0000;",
	"  }",
	"",
	"  #itemInfoHolder { ",
	"    -webkit-text-stroke: transparent;",
	"  }",
	"",
	"  .material-icons { ",
	"    color: #00FFF7;",
	"    font-size: 31px;",
	"    -webkit-text-stroke: 1.5px #fff;",
	"  }",
	"",
	"  #altServer > a > i {",
	"    font-size: 30px !important;",
	"    -webkit-text-stroke: transparent !important;",
	"  }",
	"",
	"  #ageBarBody {",
    "    background: url('https://addons-media.operacdn.com/media/CACHE/images/themes/35/59835/1.0-rev1/images/97626d2a-0eae-49a8-ae4a-977208596db1/c50b29b1372de0ab960326ecaad38f99.jpg');",
    "    border: 1px solid #fff",
	"  }",
	"",
	"  #ageBar {",
	"    background-color: rgba(0,0,0,0.6) !important;",
	"    border: 1px solid rgba(0,0,0,0.9);",
	"    height: 5px;",
	"    padding-bottom: 10px;",
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
	"    color: #FF8C00!important;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #chatBox::placeholder {",
	"    color: #17FF00!important;",
	"  }",
	"",
	"  #chatBox:hover {",
	"    background: rgba(0,0,0,0.5)!important;",
	"  }",
	"",
	"  #chatBox:hover::placeholder {",
	"    color: #00FFFF!important;",
	"  }",
	"",
	"  .ytLink:hover {",
	"    color: #cc0000;",
	"  }",
	"",
	"  #nameInput {",
	"    background: #fff;",
	"    border: 5px solid #00FF9E;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput::placeholder {",
	"    color: #00FF9E;",
	"    transition: 0.5s;",
	"  }",
	"",
	"  #nameInput:hover {",
	"    background: #4ACA1A;",
	"    color: #fff;",
	"  }",
	"",
	"  #nameInput:hover::placeholder {",
	"    background: #4ACA1A;",
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
	"    color: #FF8C00 !important;",
	"  }",
	"",
	"  .storeItem, ",
	"  .storeTab, ",
	"  .allianceButtonM, ",
	"  #allianceInput::placeholder, ",
	"  .allianceItem, ",
	"  .joinAlBtn {",
	"    color: #FFF700 !important;",
	"  }",
	"",
	"  .storeItem:hover, ",
	"  .storeTab:hover, ",
	"  .allianceButtonM:hover,",
	"  .allianceItem:hover, ",
	"  .joinAlBtn:hover {",
	"    color: #F1F41D !important;",
	"  }",
	"",
	"  #allianceInput, ",
	"    color: #FF8C00;",
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
	"    border-bottom: 3px solid #8B00FF;",
	"  }",
    "",
    "  #moddedMenu {",
    "    position: absolute;",
    "    top: 30.25%;",
    "    left: 0px;",
    "    width: 3%;",
    "    height: 45.0%;",
    "    background: url(https://149349300.v2.pressablecdn.com/wp-content/uploads/2019/06/3d-cube-background-4k-yo.jpg);",
    "    border: 3px solid rgba(100,0,255,0.9);",
    "    border-top-right-radius: 30px;",
    "    border-bottom-right-radius: 0px;",
    "    transition: 1s;",
    "    z-index: 999;",
    "  }",
    "",
    "  #moddedMenu:hover {",
    "    width: 22%;",
    "  }",
    "",
    "  .titleMM {",
    "    color: #A20000;",
    "    border-bottom: 3px solid #00FFDC;",
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
    "    margin-left: 0px;",
    "    position: absolute;",
    "    width: 30px;",
    "    height: 17px;",
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
    "    color: #FF00D8;",
    "  }",
    "",
    "  b:hover { ",
    "    color: #42FF00;",
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
    "    height: 10px;",
    "    width: 10px;",
    "    left: 4px;",
    "    bottom: 4px;",
    "    background-color: orange;",
    "    -webkit-transition: .4s;",
    "    transition: .4s;",
    "  }",
    "",
    "  input:checked + .slider {",
    "    background-color: #FF8C00;",
    "  }",
    "  ",
    "  input:focus + .slider {",
    "    box-shadow: 0 0 1px #FF8C00;",
    "  }",
    "",
    "  input:checked + .slider:before {",
    "    -webkit-transform: translateX(26px);",
    "    -ms-transform: translateX(26px);",
    "    transform: translateX(10px);",
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
            document.documentElement.appendChild(node);
        }
    }
})();

window.onbeforeunload = null;

let mouseX;
let mouseY;

let width;
let height;
setInterval(() => {
    if (CrashToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
        doNewSend(["9", [null]]);
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
var Time=0
var A = true;
if (wtcrashoff == true) {
    setInterval(() => {
        if (clanToggle == 1) {
            setTimeout(() => {
                doNewSend(["9", [null]]);
                doNewSend(["8", ['TJMod']])
                setTimeout(() => {
                    doNewSend(["9", [null]]);
                    doNewSend(["8", ['']])
                    setTimeout(() => {
                        doNewSend(["9", [null]]);
                        doNewSend(["8", ['ON']])
                        setTimeout(() => {
                            doNewSend(["9", [null]]);
                            doNewSend(["8", ['']])
                            setTimeout(() => {
                                doNewSend(["9", [null]]);
                                doNewSend(["8", ['TOP']])
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }
        doNewSend(["testing", [6]]);
    }, 500);
} else {
    setInterval(() => {
        if (clanToggle == 1 && A == true) {
            doNewSend(["9", [null]]);
            doNewSend(["8", [animate(false, 5)]])
        }
        doNewSend(["testing", [6]]);
    }, 50);
    setInterval(() => {
        if (clanToggle == 1 && A == false) {
            doNewSend(["9", [null]]);
            doNewSend(["8", [animate(false, 5)]])
        }
        doNewSend(["testing", [6]]);
    }, 200);
}
setInterval(() => {
    if (messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);
var Mode = 1;
setInterval(() => {
    if (BotToggle == 1 && Mode == 1) {
        Bot();
    }
}, 1000)

function Bot() {
    setTimeout(() => {
        hat(28)
        setTimeout(() => {
            hat(29)
        }, 500);
    }, 500);
}
(function() {
    var animal1;
    var animal2;
    var animal3;
    var animal4;
    var animal5;
    var animal6;
    var animal7;
    var animal8;
    var animalMod = true;

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
            if (Mode == 2) {
                e.preventDefault();
                if (animalMod) {
                    AutoAim = true;
                    doNewSend(["7", [2]]);
                    animal1 = setTimeout(function() {
                        h1();
                    }, 0);
                } else {
                    clearTimeout(animal1);
                    clearTimeout(animal2);
                    clearTimeout(animal3);
                    clearTimeout(animal4);
                    clearTimeout(animal5);
                    clearTimeout(animal6);
                    clearTimeout(animal7);
                    clearTimeout(animal8);
                    doNewSend(["13c", [0, 45, 0]]);
                    doNewSend(["7", [2]]);
                    doNewSend(["33", [null]]);
                    isEnemyNear = false;
                    AutoAim = false;
                }
                animalMod = !animalMod;
            }
        }
    });



    function h1() {
        doNewSend(["33", [nearestEnemyAngle]]);
        doNewSend(["ch", ['TJOP-BOT #Mode=OP COMING']]);
        if (isEnemyNear == true) {
            for (let i = 0; i < 4; i++) {
                doNewSend(["13c", [0, 53, 0]]);
                doNewSend(["13c", [0, 19, 1]]);
                let angle = myPlayer.dir + toRad(i * 90);
                place(boostType, angle)
            }
        }
        clearTimeout(animal1);
        animal2 = setTimeout(function() {
            h2();
        }, 270);
    }

    function h2() {
        doNewSend(["33", [nearestEnemyAngle]]);
        doNewSend(["ch", ['Edit by Cyber&Xx_TJGaming_xX']]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 18, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(spikeType, angle)
            }
        }
        clearTimeout(animal2);
        animal3 = setTimeout(function() {
            h3();
        }, 270);
    }

    function h3() {
        doNewSend(["ch", ['BOT HAVE OP SERVER CONNECT']]);
        doNewSend(["33", [nearestEnemyAngle]]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 11, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(spikeType, angle)
            }
        }
        clearTimeout(animal3);
        animal4 = setTimeout(function() {
            h4();
        }, 270);
    }

    function h4() {
        doNewSend(["ch", ['IF YOU WANT TRY ME']]);
        doNewSend(["33", [nearestEnemyAngle]]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 18, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(spikeType, angle)
            }
        }
        clearTimeout(animal4);
        animal5 = setTimeout(function() {
            h5();
        }, 270);
    }

    function h5() {
        doNewSend(["33", [nearestEnemyAngle]]);
        doNewSend(["ch", ['THE BOT IS OP']]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 13, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(boostType, angle)
            }
        }
        clearTimeout(animal5);
        animal6 = setTimeout(function() {
            h6();
        }, 270);
    }

    function h6() {
        doNewSend(["ch", ['I AM Xx_TJGaming_xX SOUL']]);
        doNewSend(["33", [nearestEnemyAngle]]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 11, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(spikeType, angle)
            }
        }
        clearTimeout(animal6);
        animal7 = setTimeout(function() {
            h7();
        }, 270);
    }

    function h7() {
        doNewSend(["ch", ['YOU WANNA DIE']]);
        doNewSend(["33", [nearestEnemyAngle]]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 26, 0]]);
            doNewSend(["13c", [0, 13, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(boostType, angle)
            }
        }
        clearTimeout(animal7);
        animal8 = setTimeout(function() {
            h8();
        }, 270);
    }

    function h8() {
        doNewSend(["ch", ['IM BEST HACKER']]);
        doNewSend(["33", [nearestEnemyAngle]]);
        if (isEnemyNear == true) {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            for (let i = 0; i < 4; i++) {
                let angle = myPlayer.dir + toRad(i * 90);
                place(spikeType, angle)
            }
        }
        clearTimeout(animal8);
        animal1 = setTimeout(function() {
            h1();
        }, 270);
    }
})();
var si1="red",si2="orange",si3="yellow"
var H;var M;var S;
setInterval(() => {
    if(S==58||S==59||S==60){
si3="#FF009B"
    }
else{
si3="red"
    }
    if(S==60){
S=0
M++
    }
    if(M==60){
M=0
H++
    }
    if(M==58||M==59||M==60){
si2="#FF009B"
    }else{
si2="orange"
    }
Time='<span style="color:'+si1+'">'+H+' Hours💠</span><span style="color:'+si2+'">'+M+' Minutes💠</span><span style="color:'+si3+'">'+S+' Seconds</span>'
}, 1);
setInterval(() => {
S++
}, 1000);
var owo = '<span style="color:#FFF700">Live Time➲〖</span>'+Time+'<span style="color:#FFF700">〗</span>'
var botSpan = document.createElement("span");
botSpan.id = "ezgetrekt"
var ageDiv = document.getElementById("ageText");
ageDiv.prepend(botSpan);
setInterval(() => {
botSpan.innerHTML = owo
    ageDiv.prepend(botSpan);
    if (BotToggle == 1) {
        owo = '<span style="color:#FFF700">Live Time➲〖</span>'+Time+'<span style="color:#FFF700">〗</span><span style="color:#00FFEC;font-family: sans-serif;font-weight: 300;font-size: 20px;"> ⦓⇾BOT⇽⦔ </span>'
        $('#ageText').css({
            'color': '#74FF08'
        });
    } else {
        $('#ageText').css({
            'color': '#B200FF'
        });
        owo = '<span style="color:#FFF700">Live Time➲〖</span>'+Time+'<span style="color:#FFF700">〗</span>'
    }
    if (BotToggle == 1) {
        if (Mode == 1) {
            doNewSend(["6", [3]]);
            doNewSend(["6", [17]]);
            doNewSend(["6", [31]]);
            doNewSend(["6", [23]]);
            doNewSend(["6", [9]]);
            doNewSend(["6", [33]]);
            doNewSend(["6", [4]]);
            doNewSend(["6", [15]]);
            doNewSend(["10", ["TJHack"]]);
            doNewSend(["ch", ["TJHack-Bot Best!"]]);
            doNewSend(["33", [nearestEnemyAngle]]);
            setTimeout(() => {
                doNewSend(["ch", ['RUN OR "TRY" KILL ME']]);
            }, 5000);
        }
    }
}, 1);
setInterval(() => {
    if (AutoAim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if (hatToggle == 1) {
        if (oldHat != normalHat) {
            hat(normalHat);
            console.log("[INFO]Tried - Hat")
        }
        if (oldAcc != normalAcc) {
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

function aim(x, y) {
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y

    }));
}

let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var CORESTATE = {
    inwater: {
        active: false
    },
    nearenemy: {
        active: false
    },
    inTrap: {
        active: false
    },
    ipress: {
        active: false
    },
};
var circle=1
var keepmap=false
var speed = 1500
var bAutoAim = true;
var custombp = false;
var tcat = false;
var sp = "Spike";
var IM1T = false;
var IM2T = false;
var IM3T = false;
var IM4T = false;
var IM5T = false;
var IM6T = false;
var IM7T = false;
var IM8T = false;
var IM9T = false;
var IM10T = false;
var IM1 = "-/BooM One ShOt\\-";
var IM2 = "-/Got A Bot!\\-";
var IM3 = "-/GG NOOB!\\-";
var IM4 = "-/Ez!\\-";
var IM5 = "Yeah~|R I P|~OmG";
var IM6 = "Pro Insta";
var IM7 = "BoomOneShot";
var IM8 = "EzzE~1~EzzE";
var IM9 = "TJMod ON TOP";
var IM10 = "eZGetREKT";
var circle2 = false;
var SuperHeal = false;
var R1 = "";
var R2 = "";
var R3 = "";
var R4 = "";
var M0 = "";
var M1 = "";
var M2 = "";
var M3 = "";
var M4 = "";
var M5 = "";
var M6 = "";
var M7 = "";
var M8 = "";
var M9 = "";
var zMsg = false;
var RMsg = false;
var X=0,Y=0;
var zM0;
var zM1;
var zM2;
var zM3;
var zM4;
var zM5;
var zM6;
var zM7;
var zM8;
var zM9;
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
var Discord = "TJServer#9487"
var AnimateChat = 'Run Away Noob!'
var AnimateClan = 'TJHack'
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
var tbi = true;
var BIT = "   !Meow \\Ez/ Meow!   ";
var lt = "Spike"
var rt = "Spike"
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var aba = false
var AutoAim = false;
var FourSpikeMsgX = false;
var FourSpikeMsgToggle = false;
var FourSpikeMsg = "Like Spikes?"
var Tick = 1;
var oldHat;
var oldAcc;
var R99 = "TJMod ON TOP";
var enemiesNear;
var normalHat;
var add = "_";
var normalAcc;
var ws;
var cursor = 1;
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
var messageToggle = 0;
var MapToggle = 0;
var clanToggle = 0;
var CrashToggle = 0;
var BotToggle = 0;
let healToggle = 1;
let hatToggle = 1;
warn.innerHTML = "/Health Low\\"
document.msgpack = msgpack;

function n() {
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m) {
    if (!ws) {
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};


function socketFound(socket) {
    socket.addEventListener('message', function(message) {
        handleMessage(message);
    });
}

function handleMessage(m) {
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if (temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array) {
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if (!data) {
        return
    };

    if (item === "io-init") {
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

    if (item == "1" && myPlayer.id == null) {
        myPlayer.id = data[1];
    }
    if (item == "1" && myPlayer.id == null) {
        myPlayer.id = data[1];
    }
    if (data[0] == "11") {
if(keepmap==false){
        console.info("doing death");
        for (var elem of Object.values(allMooMooObjects)) {
            console.info(elem);
            elem.style.opacity = 0;
        }
}
    }
    if (data[0] == "12") {

        let newTraps = [];
        for (let Trap of allTraps) {
            if (Trap[Trap.length - 2] != data[1]) newTraps.push(Trap);
        }
        allTraps = newTraps;


        if (Object.keys(allMooMooObjects).includes(data[1].toString())) {
            allMooMooObjects[data[1]].remove();
        }
        if (CORESTATE.inTrap.active) {
            if (CORESTATE.inTrap.extra == data[1]) {
                CORESTATE.inTrap.active = false;
                let newTraps = [];
                for (let Trap of allTraps) {
                    if (Trap[Trap.length - 2] != data[1]) newTraps.push(Trap);
                }
                allTraps = newTraps;
            }
        }
    }
    if (data[0] == "1" && !MYID) {
        MYID = data[1];
    }
    if (data[0] == "6") {
        var locInfo = data[1];
        if (locInfo[locInfo.length - 1].toString() == MYID) { //Object created
            if (window.innerWidth >= 770) {
                console.log(locInfo);
                var itemID = `actionBarItem${locInfo[locInfo.length-2]+16}`;
                var imgURL = document.getElementById(itemID).style.backgroundImage.toString().match(/url\("(.+)?(?=")/)[1];
                console.info(imgURL);
                let mapDisplay = document.getElementById("mapDisplay").getBoundingClientRect();
                let mapSize = [14365, 14365];
                let boxSize = [$("#mapDisplay").width(), $("#mapDisplay").height()];
                let targets = [locInfo[1], locInfo[2]].map(item => (130 * item) / 14365);
                let x = mapDisplay.x + targets[0] - 6;
                let y = mapDisplay.y + targets[1] - 6;
                let newTarget = document.createElement("div");
                newTarget.rawX = targets[0];
                newTarget.rawY = targets[1];
                newTarget.rimgURL = imgURL;
                newTarget.style = `background-image: url("${imgURL}"); background-size: 12px 12px; width:12px; height:12px; position:absolute; left: ${x}px; top:${y}px; opacity:0; z-index:100; cursor: pointer;`;
                newTarget.className = "mapTarget";
                document.getElementsByTagName("body")[0].appendChild(newTarget);
                $(newTarget).animate({
                    opacity: 1
                });
                allMooMooObjects[locInfo[0]] = newTarget;

            }
        } else {
            console.log(locInfo);
            for (var i = 0; i < locInfo.length / 8; i += 1) {
                let arr = locInfo.slice(i * 8, (i + 1) * 8);
                console.log(arr)
                let objtype = arr[arr.length - 2];
                if (objtype == 15) {
                    allTraps.push(arr);
                }
            }
        }
    }

    if (item == "33") {
        enemiesNear = [];
        for (let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13 * i, 13 * i + 13);
            if (playerInfo[0] == myPlayer.id) {
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
            } else if (playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if (enemiesNear) {
        nearestEnemy = enemiesNear.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }
    if (nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2] - myPlayer.y, nearestEnemy[1] - myPlayer.x);
        if (Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if (AutoAim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if (primary != 8) {
                    normalAcc = 21;
                }
            };
        }
    }
    if (isEnemyNear == false && AutoAim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400) {
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
            normalHat = 31;
        } else {
            normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    if (healToggle == 1 && SuperHeal == true) {
        setTimeout(() => {
            placeF(foodType, null);
            placeF(foodType, null);
            placeF(foodType, null);
            placeF(foodType, null);
        }, 0);
    }
    if (item == "h" && data[1] == myPlayer.id) {
        if (data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout(() => {
                placeF(foodType, null);
            }, healspeed);

        }
    }
    update();
}

function doNewSend(sender) {
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
    if (BSChat == true) {
        if (BSChatX == true) {
            doNewSend(["ch", [BSMsg]]);
        } else {
            doNewSend(["ch", ["Like BoostSpikes?"]]);
        }
    }
    if (bAutoAim == true) {
        boostDir = nearestEnemyAngle;
    } else {
        boostDir = myPlayer.dir
    }
    if (custombp == true) {
        if (lt == "Spike") {
            place(spikeType, boostDir + toRad(90));
        }
        if (lt == "Windmill") {
            place(millType, boostDir + toRad(90));
        }
        if (lt == "Turret") {
            place(turretType, boostDir + toRad(90));
        }
        if (lt == "Wall") {
            place(wallType, boostDir + toRad(90));
        }
        if (rt == "Spike") {
            place(spikeType, boostDir - toRad(90));
        }
        if (rt == "Windmill") {
            place(millType, boostDir - toRad(90));
        }
        if (rt == "Turret") {
            place(turretType, boostDir - toRad(90));
        }
        if (rt == "Wall") {
            place(wallType, boostDir - toRad(90));
        }
    } else {
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
            if (keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if (_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if (!_isKeyDown) {
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("[INFO]Claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if (keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };
}
setInterval(() => {
    if (HPDATA<!100||HPDATA<=!0||HPDATA==undefined) {
S=0
M=0
H=0
    }
    if (HPDATA <= 15) {
        $("#wn").css({
            'display': 'block'
        });
    } else {
        $("#wn").css({
            'display': 'none'
        });
    }
if(isEnemyNear == true){
}
    if (aba == true) {
        if (isEnemyNear == true) {
            AutoAim = true
        } else {
            AutoAim = false
        }
    }
}, 1);
const healer = repeater(81, () => {
    place(foodType)
}, 0);
const boostPlacer = repeater(70, () => {
    place(boostType)
}, 0);
const spikePlacer = repeater(86, () => {
    place(spikeType)
}, 0);
const millPlacer = repeater(78, () => {
    place(millType)
}, 0);
const turretPlacer = repeater(72, () => {
    place(turretType)
}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

function getRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
};
var wtf = false;

document.addEventListener("mousedown", buttonPressD, false);
function buttonPressD(e) {
    if (e.button == 0) {
if(wtf==true){
            hat(ID_BullHelmet)
            acc(0)
    }
    }
}
document.addEventListener("mouseup", buttonPressU, false);
function buttonPressU(e) {
    if (e.button == 0) {
if(wtf==true){
                hat(0)
                if (myPlayer.y < 2400) {
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                    hat(31);
                } else {
                    hat(12);
                }
                acc(11);
    }
    }
}
document.addEventListener("mousedown", wrw, false);
document.addEventListener("mouseup", test, false);
document.addEventListener("mousedown", rwrw, false);
function wrw(e){
    if (e.button == 1) {
        if (PremiumMap == true) {
            $("#mapDisplay").css({
                background: `url('data:image/png;base64,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')`
            });
        }
        $("#mapDisplay").css({
            width: "390"
        });
        $("#mapDisplay").css({
            height: "390"
        });
        $("#ageBar").css({
            width: "800"
        });
    }
}
function rwrw(e){
    if (e.button == 2) {
        doNewSend(["5", [secondary, true]]);
        setTimeout(() => {
            doNewSend(["5", [primary, true]]);
        }, 100);
    }
}
function test(e) {
    if (e.button == 1) {
        if (PremiumMap == true) {
            $("#mapDisplay").css({
                background: `url('data:image/png;base64,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')`
            });
        }
        $("#mapDisplay").css({
            width: "130"
        });
        $("#mapDisplay").css({
            height: "130"
        });
        $("#ageBar").css({
            width: "314"
        });
    }
}
setInterval(() => {
    if (noItem == false) {
        for (var elem of Object.values(allMooMooObjects)) {
            console.info(elem);
            elem.style.opacity = 0;
        }
    }
}, 1);
AGE1 = 6
AGE2 = 1
AGE3 = 2
AGE4 = 1
AGE5 = 2
AGE6 = 3
AGE7 = 1
AGE8 = 2
var A1;
var A2;
var A3;
var A4;
var A5;
var A6;
var A7;
var A8;
document.addEventListener('keydown', (e) => {
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    if (e.keyCode == 119 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        //AGE1
        if (AGE1 == 1) {
            doNewSend(["6", [1]]);
            A1 = "1"
        }
        if (AGE1 == 2) {
            doNewSend(["6", [3]]);
            A1 = "2"
        }
        if (AGE1 == 3) {
            doNewSend(["6", [5]]);
            A1 = "3"
        }
        if (AGE1 == 4) {
            doNewSend(["6", [6]]);
            A1 = "4"
        }
        if (AGE1 == 5) {
            doNewSend(["6", [7]]);
            A1 = "5"
        }
        if (AGE1 == 6) {
            doNewSend(["6", [8]]);
            A1 = "6"
        }
        //AGE2
        if (AGE2 == 1) {
            doNewSend(["6", [17]]);
            A2 = "1"
        }
        if (AGE2 == 2) {
            doNewSend(["6", [20]]);
            A2 = "2"
        }
        //AGE3
        if (AGE3 == 1) {
            doNewSend(["6", [31]]);
            A3 = "1"
        }
        if (AGE3 == 2) {
            doNewSend(["6", [32]]);
            A3 = "2"
        }
        //AGE4
        if (AGE4 == 1) {
            doNewSend(["6", [23]]);
            A4 = "1"
        }
        if (AGE4 == 2) {
            doNewSend(["6", [27]]);
            A4 = "2"
        }
        if (AGE4 == 3) {
            doNewSend(["6", [29]]);
            A4 = "3"
        }
        if (AGE4 == 4) {
            doNewSend(["6", [30]]);
            A4 = "4"
        }
        //AGE5
        if (AGE5 == 1) {
            A5 = "1"
            doNewSend(["6", [9]]);
        }
        if (AGE5 == 2) {
            doNewSend(["6", [10]]);
            A5 = "2"
        }
        if (AGE5 == 3) {
            doNewSend(["6", [11]]);
            A5 = "3"
        }
        if (AGE5 == 4) {
            doNewSend(["6", [14]]);
            A5 = "4"
        }
        //AGE6
        if (AGE6 == 1) {
            A6 = "1"
            doNewSend(["6", [18]]);
        }
        if (AGE6 == 2) {
            doNewSend(["6", [21]]);
            A6 = "2"
        }
        if (AGE6 == 3) {
            doNewSend(["6", [33]]);
            A6 = "3"
        }
        if (AGE6 == 4) {
            doNewSend(["6", [34]]);
            A6 = "4"
        }
        if (AGE6 == 5) {
            doNewSend(["6", [35]]);
            A6 = "5"
        }
        if (AGE6 == 6) {
            doNewSend(["6", [37]]);
            A6 = "6"
        }
        if (AGE6 == 7) {
            doNewSend(["6", [38]]);
            A6 = "7"
        }
        //AGE7
        if (AGE7 == 1) {
            A7 = "1"
            doNewSend(["6", [4]]);
        }
        if (AGE7 == 2) {
            doNewSend(["6", [2]]);
            A7 = "2"
        }
        if (AGE7 == 3) {
            doNewSend(["6", [12]]);
            A7 = "3"
        }
        if (AGE7 == 4) {
            doNewSend(["6", [28]]);
            A7 = "4"
        }
        //AGE8
        if (AGE8 == 1) {
            doNewSend(["6", [13]]);
            A8 = "1"
        }
        if (AGE8 == 2) {
            doNewSend(["6", [15]]);
            A8 = "2"
        }
        if (AGE8 == 3) {
            A8 = "3"
            doNewSend(["6", [24]]);
        }
        if (AGE8 == 4) {
            A8 = "4"
            doNewSend(["6", [25]]);
        }
        if (AGE8 == 5) {
            A8 = "5"
            doNewSend(["6", [36]]);
        }
        doNewSend(["ch", ["AutoChoose:(" + A1 + "+" + A2 + "+" + A3 + "+" + A4 + "+" + A5 + "+" + A6 + "+" + A7 + "+" + A8 + ")"]]);
    }
    //MsgBox
    if (e.keyCode == 96 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M0]]);
        }
    }
    if (e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M1]]);
        }
    }
    if (e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M2]]);
        }
    }
    if (e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M3]]);
        }
    }
    if (e.keyCode == 100 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M4]]);
        }
    }
    if (e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M5]]);
        }
    }
    if (e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M6]]);
        }
    }
    if (e.keyCode == 103 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M7]]);
        }
    }
    if (e.keyCode == 104 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M8]]);
        }
    }
    if (e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (zMsg == true) {
            doNewSend(["ch", [M9]]);
        }
    }
    if (e.keyCode == xxxxwall && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i = 0; i < 4; i++) {
            let angle = myPlayer.dir + toRad(i * 90);
            place(wallType, angle)
        }
    }
    if (e.keyCode == xxxxTrap && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i = 0; i < 4; i++) {
            let angle = myPlayer.dir + toRad(i * 90);
            place(boostType, angle)
        }
    }
    if (e.keyCode == xxxxspi && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (FourSpikeMsgX == true) {
            if (FourSpikeMsgToggle == true) {
                doNewSend(["ch", [FourSpikeMsg]]);
            } else {
                doNewSend(["ch", ["Like Spikes?"]]);
            }
        }
        for (let i = 0; i < 4; i++) {
            let angle = myPlayer.dir + toRad(i * 90);
            place(spikeType, angle)
        }
    }
    if (e.keyCode == xxxxTurretk && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i = 0; i < 4; i++) {
            let angle = myPlayer.dir + toRad(i * 90);
            place(turretType, angle)
        }
    }
    if (e.keyCode == xxxxxw && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i = 0; i < 5; i++) {
            let angle = myPlayer.dir + toRad(i * 72);
            place(millType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == best && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400) {
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
            hat(31);
        } else {
            hat(12);
        }
        acc(11);
    }
    if (e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if (e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }
    //Crash Server
    if (e.keyCode == crash && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (wtcrashoff == true) {
            if (InstaSpeed == 230) {
                doNewSend(["ch", ["Insta Speed- " + InstaSpeed]]);
                InstaSpeed = 190
            } else {
                doNewSend(["ch", ["Insta Speed- " + InstaSpeed]]);
                InstaSpeed = 230
            }
        } else {
            if (ToggleCrash == true) {
                CrashToggle = (CrashToggle + 1) % 2;
                if (CrashToggle == 0) {
                    document.title = "Crash: OFF🔴"
                } else {
                    document.title = "Crash: ON🟢"
                }
            } else {
                doNewSend(["ch", ["[TJMod]You Need Turn ON Crash"]]);
            }
        }
    }

    //Bot Toggle
    if (e.keyCode == bt && document.activeElement.id.toLowerCase() !== 'chatbox') {
        BotToggle = (BotToggle + 1) % 2;
        if (BotToggle == 0) {
            document.title = "Bot: OFF🔴"
        } else {
            document.title = "Bot: ON🟢"
            if (Mode == 1) {
                Bot();
            }
        }
    }

    if (e.keyCode == tauh && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if (healToggle == 0) {
            if (hatToggle == 0) {
                document.title = "Heal: OFF🔴 / Hat: OFF🔴"
            } else {
                document.title = "Heal: OFF🔴 / Hat: ON🟢"
            }
        } else {
            if (hatToggle == 0) {
                document.title = "Heal: ON🟢 / Hat: OFF🔴"
            } else {
                document.title = "Heal: ON🟢 / Hat: ON🟢"
            }
        }
    }
    if (e.keyCode == discord && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", [Discord]]);
    }
    if (e.keyCode == tauh && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (AutoHeal == false) {
            AutoHeal = true;
            doNewSend(["ch", ["Auto Heal-ON"]]);
        } else {
            doNewSend(["ch", ["Auto Heal-OFF"]]);
            AutoHeal = false;
        }
    }
    if (e.keyCode == cteam && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['TJHack']])
    }
    if (e.keyCode == dcteam && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["9", [null]]);
        doNewSend(["8", ['NoClan:)']])
    }
    if (e.keyCode == 37 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Try to kill me = suicide"]]);
    }
    if (e.keyCode == 39 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["Get rekt noob"]]);
    }
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["ch", ["YOU DIED NOOB!"]]);
    }
    if (e.keyCode == ktnmus && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
    if (e.keyCode == gramus && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
    }
    if (e.keyCode == ktn && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if (e.keyCode == mk1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if (e.keyCode == spinspi && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if (e.keyCode == gr && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [2]]);
    }
    if (e.keyCode == musket2 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (rc == true) {
            doNewSend(["6", [13]]);
        } else {
            doNewSend(["6", [12]]);
        }
    }
    if (e.keyCode == auhat && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if (healToggle == 0) {
            if (hatToggle == 0) {
                document.title = "Heal: OFF🔴 / Hat: OFF🔴"
            } else {
                document.title = "Heal: OFF🔴 / Hat: ON🟢"
            }
        } else {
            if (hatToggle == 0) {
                document.title = "Heal: ON🟢 / Hat: OFF🔴"
            } else {
                document.title = "Heal: ON🟢 / Hat: ON🟢"
            }
        }
    }
    if (e.keyCode == auhat && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (AutoHat == false) {
            AutoHat = true;
            doNewSend(["ch", ["Auto Hat-ON"]]);
        } else {
            doNewSend(["ch", ["Auto Hat-OFF"]]);
            AutoHat = false;
        }
    }
    let RandomMsg = (getRandom(1, 10)).toString();

    function InstaChat() {
        switch (RandomMsg) {
            case '1':
                if (IM1T == true) {
                    doNewSend(["ch", [IM1]]);
                } else {
                    doNewSend(["ch", ["-/BooM One ShOt\\-"]]);
                }
                break;

            case '2':
                if (IM2T == true) {
                    doNewSend(["ch", [IM2]]);
                } else {
                    doNewSend(["ch", ["-/Got A Bot!\\-"]]);
                }
                break;

            case '3':
                if (IM3T == true) {
                    doNewSend(["ch", [IM3]]);
                } else {
                    doNewSend(["ch", ["-/GG NOOB!\\-"]]);
                }
                break;

            case '4':
                if (IM4T == true) {
                    doNewSend(["ch", [IM4]]);
                } else {
                    doNewSend(["ch", ["-/Ez!\\-"]]);
                }
                break;

            case '5':
                if (IM5T == true) {
                    doNewSend(["ch", [IM5]]);
                } else {
                    doNewSend(["ch", ["Yeah~|R I P|~OmG"]]);
                }
                break;

            case '6':
                if (IM6T == true && InstaSpike == true) {
                    doNewSend(["ch", [sp + " " + IM6]]);
                }
                if (IM6T == false && InstaSpike == false) {
                    doNewSend(["ch", ["Pro Insta"]]);
                }
                if (IM6T == false && InstaSpike == true) {
                    doNewSend(["ch", [sp + " Pro Insta"]]);
                }
                break;

            case '7':
                if (IM7T == true) {
                    doNewSend(["ch", [IM7]]);
                } else {
                    doNewSend(["ch", ["BoomOneShot"]]);
                }
                break;

            case '8':
                if (IM8T == true) {
                    doNewSend(["ch", [IM8]]);
                } else {
                    doNewSend(["ch", ["EzzE~1~EzzE"]]);
                }
                break;

            case '9':
                if (IM9T == true) {
                    doNewSend(["ch", [IM9]]);
                } else {
                    doNewSend(["ch", ["TJMod ON TOP"]]);
                }
                break;

            case '10':
                if (IM9T == true) {
                    doNewSend(["ch", [IM10]]);
                } else {
                    doNewSend(["ch", ["eZGetREKT"]]);
                }
                break;

            default:
                doNewSend(["ch", ["-/BooM One ShOt\\-"]]);

        }
    };
    var audio = new Audio(IL);
    if (e.keyCode == XD1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        audio.play();
        if (tbi == true) {
            if (customi == true) {
                doNewSend(["ch", [BIT]]);
            } else {
                doNewSend(["ch", ["   !Meow \\Ez/ Meow!   "]]);
            }
        }
        AutoAim = true
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
                    hat(ID_TurretGear)
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
        AutoAim = false
    }
    if (e.keyCode == XD2 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        audio.play();
        if (xInstaChatx == true) {
            if (CustomInstaChat == true) {
                doNewSend(["ch", [InstaMessage]]);
            } else {
                InstaChat();
            }
        }
        AutoAim = true
        hat(ID_BullHelmet)
        acc(0)
        doNewSend(["c", [1]]);
        setTimeout(() => {
            doNewSend(["6", [5]]);
            doNewSend(["c", [1]]);
            hat(ID_TurretGear)
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
        if (InstaSpike == true) {
            if (Spike2x == true) {
                for (let i = 0; i < 3; i++) {
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(spikeType, angle)
                }
            } else {
                if (Spikex2 == true) {
                    place(spikeType, myPlayer.dir + toRad(45));
                    place(spikeType, myPlayer.dir - toRad(45));
                } else {
                    place(spikeType);
                }
            }
        }
        AutoAim = false
    }
    if (e.keyCode == XDD && document.activeElement.id.toLowerCase() !== 'chatbox') {
        audio.play();
        AutoAim = true
        hat(ID_BullHelmet)
        acc(0)
        doNewSend(["c", [1]]);
        setTimeout(() => {
            doNewSend(["6", [4]]);
            doNewSend(["c", [1]]);
            hat(ID_TurretGear)
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
        if (InstaSpike == true) {
            if (Spike2x == true) {
                for (let i = 0; i < 3; i++) {
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(spikeType, angle)
                }
            } else {
                if (Spikex2 == true) {
                    place(spikeType, myPlayer.dir + toRad(45));
                    place(spikeType, myPlayer.dir - toRad(45));
                } else {
                    place(spikeType);
                }
            }
        }
        AutoAim = false
    }
    if (e.keyCode == InstaKill && document.activeElement.id.toLowerCase() !== 'chatbox') {
        audio.play();
        if (xInstaChatx == true) {
            if (CustomInstaChat == true) {
                doNewSend(["ch", [InstaMessage]]);
            } else {
                InstaChat();
            }
        }
        AutoAim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout(() => {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, InstaSpeed - 100);

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
            AutoAim = false;
            if (InstaSpike == true) {
                if (Spike2x == true) {
                    for (let i = 0; i < 3; i++) {
                        let angle = myPlayer.dir + toRad(i * 90);
                        place(spikeType, angle)
                    }
                } else {
                    if (Spikex2 == true) {
                        place(spikeType, myPlayer.dir + toRad(45));
                        place(spikeType, myPlayer.dir - toRad(45));
                    } else {
                        place(spikeType);
                    }
                }
            }
        }, InstaSpeed);
        if (AR == true) {
            setTimeout(() => {
                if (thtt == true) {
                    hat(ID_TurretGear)
                }
                doNewSend(["5", [secondary, true]]);
                doNewSend(["ch", ["-/RELOAD\\-"]]);
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
                    doNewSend(["5", [primary, true]]);
                }, speed);
            }, 1000);
        }
    }
    if (e.keyCode == 116 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (SuperHeal == false) {
            document.getElementById("SH").checked = true;
            document.getElementById("SHL").checked = true;
            SuperHeal = true;
            doNewSend(["ch", ["SuperHeal-ON"]]);
        } else {
            document.getElementById("SH").checked = false;
            document.getElementById("SHL").checked = false;
            doNewSend(["ch", ["SuperHeal-OFF"]]);
            SuperHeal = false;
        }
    }
    if (e.keyCode == inspike && document.activeElement.id.toLowerCase() !== 'chatbox') {
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
    if (e.keyCode == prmap && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (PremiumMap == false) {
            document.getElementById("ToggleMap").checked = true;
            PremiumMap = true;
            $("#mapDisplay").css({
                background: `url('data:image/png;base64,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')`
            });
            doNewSend(["ch", ["Premium Map-ON"]]);
        } else {
            document.getElementById("ToggleMap").checked = false;
            doNewSend(["ch", ["Premium Map-OFF"]]);
            var _0x5e3d = ['#mapDisplay', 'url(https://www.liberaldictionary.com/wp-content/uploads/2019/01/background-9060.jpg)'];
            (function(_0x270724, _0x5e3db4) {
                var _0x56afd3 = function(_0x1adc18) {
                    while (--_0x1adc18) {
                        _0x270724['push'](_0x270724['shift']());
                    }
                };
                _0x56afd3(++_0x5e3db4);
            }(_0x5e3d, 0x108));
            var _0x56af = function(_0x270724, _0x5e3db4) {
                _0x270724 = _0x270724 - 0x0;
                var _0x56afd3 = _0x5e3d[_0x270724];
                return _0x56afd3;
            };
            $(_0x56af('0x0'))['css']({
                'background': _0x56af('0x1')
            });
            PremiumMap = false;
        }
    }
})

document.addEventListener('keyup', (e) => {
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout(() => {
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

function dist(a, b) {
    return Math.sqrt(Math.pow((b.y - a[2]), 2) + Math.pow((b.x - a[1]), 2));
}
let Title = (getRandom(1, 2)).toString();
switch (Title) {
    case '1':
        setTimeout(() => {
            document.title = "💥TJMod💥"
            setTimeout(() => {
                document.title = "💠ON💠"
                setTimeout(() => {
                    document.title = "⬆TOP⬆"
                    setTimeout(() => {
                        setTimeout(() => {
                            document.title = "💥TJMod💥"
                            setTimeout(() => {
                                document.title = "💠ON💠"
                                setTimeout(() => {
                                    document.title = "⬆TOP⬆"
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            document.title = "💥TJMod💥"
                                            setTimeout(() => {
                                                document.title = "💠ON💠"
                                                setTimeout(() => {
                                                    document.title = "⬆TOP⬆"
                                                    setTimeout(() => {
                                                        setTimeout(() => {
                                                            document.title = "💥TJMod💥"
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
        setTimeout(() => {
            document.title = "💥TJMod💥"
            setTimeout(() => {
                document.title = "💠ON💠"
                setTimeout(() => {
                    document.title = "⬆TOP⬆"
                    setTimeout(() => {
                        setTimeout(() => {
                            document.title = "💥TJMod💥"
                            setTimeout(() => {
                                document.title = "💠ON💠"
                                setTimeout(() => {
                                    document.title = "⬆TOP⬆"
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            document.title = "💥TJMod💥"
                                            setTimeout(() => {
                                                document.title = "💠ON💠"
                                                setTimeout(() => {
                                                    document.title = "⬆TOP⬆"
                                                    setTimeout(() => {
                                                        setTimeout(() => {
                                                            document.title = "💥TJMod💥"
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
        document.title = "💥TJMod💥"
};

function update() {
    for (let i = 0; i < 9; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            primary = i;
        }
    }

    for (let i = 9; i < 16; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            secondary = i;
        }
    }

    for (let i = 16; i < 19; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            foodType = i - 16;
        }
    }

    for (let i = 19; i < 22; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            wallType = i - 16;
        }
    }

    for (let i = 22; i < 26; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            spikeType = i - 16;
        }
    }

    for (let i = 26; i < 29; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            millType = i - 16;
        }
    }

    for (let i = 29; i < 31; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            mineType = i - 16;
        }
    }

    for (let i = 31; i < 33; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            boostType = i - 16;
        }
    }

    for (let i = 33; i < 39; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36) {
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
var TrapKey = 70

try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({
        display: "none"
    });
} catch (e) {
    console.log("[ERROR]Remove Ad");
}
//TJKey
var XD1 = 0x71;
var XD2 = 0x72;
var XDD = 0x73;
var xxxxTurretk = 0xc0;
var InstaKill = 0x52;
var tauh = 0x54;
var auhat = 0x42;
var cteam = 0x59;
var dcteam = 0x55;
var discord = 0x4a;
var best = 0x4d;
var xxxxTrap = 0x49;
var crash = 0x4b;
var ktn = 0xbc;
var xxxxxw = 0x4f;
var bt = 0x4c;
var mk1 = 0xbe;
var xxxxwall = 0x50;
var xxxxspi = 0xba;
var gramus = 0xbf;
var prmap = 0xbd;
var gr = 0xdb;
var ktnmus = 0xde;
var inspike = 0xbb;
var musket2 = 0xdd;
var spinspi = 0xdc;
setInterval(() => {
    if (ckey == ![]) {
        XD1 = 0x71;
        XD2 = 0x72;
        XDD = 0x73;
        xxxxTurretk = 0xc0;
        InstaKill = 0x52;
        tauh = 0x54;
        auhat = 0x42;
        cteam = 0x59;
        dcteam = 0x55;
        discord = 0x4a;
        best = 0x4d;
        xxxxTrap = 0x49;
        crash = 0x4b;
        ktn = 0xbc;
        xxxxxw = 0x4f;
        bt = 0x4c;
        mk1 = 0xbe;
        xxxxwall = 0x50;
        xxxxspi = 0xba;
        gramus = 0xbf;
        prmap = 0xbd;
        gr = 0xdb;
        ktnmus = 0xde;
        inspike = 0xbb;
        musket2 = 0xdd;
        spinspi = 0xdc;
    }
}, 0x1);
var KeyChange = document.createElement("div");
KeyChange.className = "menuCard";
KeyChange.id = "mainSettings";
KeyChange.innerHTML = `
<div id="simpleModalx" class="modalx">
<div class="modal-content">
<div class="modal-headerx">
<span class="closeBtnx">&times;</span>
<h2 style="font-size: 17px; color: #FFFFFF">TJMod - Key</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<h2 style="font-size: 17px; color: #00FF04">Menu</h2><input value="ESC" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F1=Help</h2><input value="F1" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F6=InfoStyle Settings</h2><input value="F6" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00FF04">F7=AutoChoose Menu</h2><input value="F7" class="keyPressLow" type="text" disabled="disabled"/>
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
<h2 style="font-size: 17px; color: #00e3f8">F=Trap/Boost</h2><input value="F" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">V=Spike</h2><input value="V" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">T=Toggle AutoHeal</h2><input value="" id="006" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">G=Boost/Trap Spike</h2><input value="G" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">B=Toggle AutoHat</h2><input value="" id="008" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">Y=Create Custom Clan</h2><input value="" id="009" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">H=2 Turret</h2><input value="H" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">N=Windmill</h2><input value="N" class="keyPressLow" type="text" disabled="disabled"/>
<h2 style="font-size: 17px; color: #00e3f8">U=Clear Clan</h2><input value="" id="012" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">J=Custom Discord Chat</h2><input value="" id="013" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">M=Best Hat,Accessorie</h2><input value="" id="014" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h2 style="font-size: 17px; color: #00e3f8">I=4 Trap/Boost</h2><input value="" id="015" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
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
<h2 style="font-size: 17px; color: #00e3f8">F8=AutoChoose</h2><input value="F12" class="keyPressLow" type="text" disabled="disabled"/>
</div>
</div>
<div class="modal-footerx">
<p style="color: #dd00ff; font-size: 17px;">TJMod > MooJax > LabyMod > Other</p>
</div>
</div>
</div>
`
document.body.appendChild(KeyChange)
const card = document.querySelector("#setupCard");
const button = document.createElement("button");
var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.type = "text/css";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
<div class="modal-content">
<div class="modal-header">
<span class="closeBtn">&times;</span>
<h2 style="font-size: 17px; color: #0074FF">TJMod - Settings</h2>
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
<h3 style="color: #8A07EB; font-size: 17px;"> Game Settings </h3><br>
<h3 style="color: #FFF300; font-size: 25px;"> [!-TJMod-!]AutoGo </h3>
<label class="container">AutoGo
<input type="checkbox" id="AGO">
<span class="checkmark"></span>
</label>
<input class="coolinpit" value="${X}" type="number" id="XNAME">
<input class="coolinpit" value="${Y}" type="number" id="YNAME">
<hr>
<label class="container">TJOP BOT
<input type="checkbox" id="TJOPBOT">
<span class="checkmark"></span>
</label>
<label class="container">R.E.P. CrossBow
<input type="checkbox" id="REP">
<span class="checkmark"></span>
</label>
<label class="container">Toggle MapItem
<input type="checkbox" id="TMI">
<span class="checkmark"></span>
</label>
<label class="containerx">Keep Map Item
<input type="checkbox" id="MAPI">
<span class="checkmarkx"></span>
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
⬇Circle Style(1-6)⬇<br>
<input class="coolinpit" value="${circle}" type="number" id="cc" min=1 max=6>
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
<label class="container">Custom Cursor
<input type="checkbox" id="CUCU">
<span class="checkmark"></span>
</label>
<hr>
🔻Reload Speed🔻
<input class="coolinpit" value="${speed}" type="number" id="RS">
</div>
</div>
<div class="modal-footer">
<p style="color: #05A905; font-size: 1px;">TJMod ${V2}</p>
<p style="color: #FF8700;">By Xx_TJGaming_xX</p>
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
<h2 style="font-size: 17px; color: #00fffb">TJMod - Message</h2>
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
var AutoChoose = document.createElement("div");
AutoChoose.className = "menuCard";
AutoChoose.id = "mainSettings";
AutoChoose.innerHTML = `
<div id="asimpleModalx" class="amodalx">
<div class="modal-content">
<div class="amodal-headerx">
<span class="acloseBtnx">&times;</span>
<h2 style="font-size: 17px; color: #6B0000">TJMod - AutoChoose</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<center><p style="color: blue; font-size: 17px; background:red">☣AGE 1➡AGE 2☣</p></center><br>
<center><input type="radio" id="w11" name="AGE1" value="1">
<label for="w11">Hand Axe<img src=https://vignette.wikia.nocookie.net/moom/images/c/c4/Axe_1.png/revision/latest?cb=20171004214007 width=30 height=30></label>
<input type="radio" id="w12" name="AGE1" value="2">
<label for="w12">Short Sword<img src=https://vignette.wikia.nocookie.net/moom/images/e/e2/Sword_1.png/revision/latest?cb=20171004213914 width=30 height=30></label>
<input type="radio" id="w13" name="AGE1" value="3">
<label for="w13">Polearm<img src=https://vignette.wikia.nocookie.net/moom/images/0/0e/Spear_1.png/revision/latest?cb=20170928001633 width=30 height=30></label><br>
<input type="radio" id="w14" name="AGE1" value="4">
<label for="w14">Bat<img src=https://vignette.wikia.nocookie.net/moom/images/4/4a/Bat_1.png/revision/latest?cb=20170928001611 width=30 height=30></label>
<input type="radio" id="w15" name="AGE1" value="5">
<label for="w15">Daggers<img src=https://vignette.wikia.nocookie.net/moom/images/f/fa/Dagger_1.png/revision/latest?cb=20180516220720 width=30 height=30></label>
<input type="radio" id="w16" name="AGE1" value="6"
checked>
<label for="w16">Stick<img src=https://vignette.wikia.nocookie.net/moom/images/4/44/Stick_1.png/revision/latest?cb=20180619212536 width=30 height=30></label></center>
<br>
<center><p style="color: yellow; font-size: 17px; background:orange">☣AGE 2➡AGE 3☣</p></center><br>
<center><input type="radio" id="w21" name="AGE2" value="1"
checked>
<label for="w21">Cookie<img src=https://vignette.wikia.nocookie.net/moom/images/7/70/Cookie.png/revision/latest/scale-to-width-down/620?cb=20190223141839 width=30 height=30></label>
<input type="radio" id="w22" name="AGE2" value="2">
<label for="w22">Stone Wall<img src=https://vignette.wikia.nocookie.net/moom/images/5/59/StoneWallV.png/revision/latest?cb=20190326205409 width=30 height=30></label></center>
<center><p style="color: green; font-size: 17px; background:yellow">☣AGE 3➡AGE 4☣</p></center><br>
<center><input type="radio" id="w31" name="AGE3" value="1">
<label for="w31">Pit Trap<img src=https://vignette.wikia.nocookie.net/moom/images/1/11/Pit_Trap.png/revision/latest?cb=20190213163524 width=30 height=30></label>
<input type="radio" id="w32" name="AGE3" value="2"
checked>
<label for="w32">Boost Pad<img src=https://vignette.wikia.nocookie.net/moom/images/2/21/Boost_Pad.png/revision/latest/top-crop/width/360/height/450?cb=20190213163608 width=30 height=30></label></center><br>
<center><p style="color: blue; font-size: 17px; background:green">☣AGE 4➡AGE 5☣</p></center><br>
<center><input type="radio" id="w41" name="AGE4" value="1"
checked>
<label for="w41">Greater Spikes<img src=https://vignette.wikia.nocookie.net/moom/images/7/79/GreaterSpikeV.png/revision/latest/scale-to-width-down/619?cb=20190326213900 width=30 height=30></label>
<input type="radio" id="w42" name="AGE4" value="2">
<label for="w42">Faster Windmill<img src=https://vignette.wikia.nocookie.net/moom/images/6/68/Windmill.png/revision/latest?cb=20190211160349 width=30 height=30></label>
<input type="radio" id="w43" name="AGE4" value="3">
<label for="w43">Mine<img src=https://vignette.wikia.nocookie.net/moom/images/b/b4/Ziamforcedtodothishelp.png/revision/latest/scale-to-width-down/620?cb=20190225163707 width=30 height=30></label>
<input type="radio" id="w44" name="AGE4" value="4">
<label for="w44">Sapling<img src=https://vignette.wikia.nocookie.net/moom/images/3/3b/Sapling1.png/revision/latest/scale-to-width-down/620?cb=20190226151040 width=30 height=30></label>
</center>
<center><p style="color: yellow; font-size: 17px; background:blue">☣AGE 5➡AGE 6☣</p></center><br>
<center><input type="radio" id="w51" name="AGE5" value="1">
<label for="w51">Hunting Bow<img src=https://vignette.wikia.nocookie.net/moom/images/a/a1/Bow_1.png/revision/latest?cb=20170520082934 width=30 height=30></label>
<input type="radio" id="w52" name="AGE5" value="2"
checked>
<label for="w52">Great Hammer<img src=https://vignette.wikia.nocookie.net/moom/images/3/36/Great_Hammer_1.png/revision/latest?cb=20171004214313 width=30 height=30></label>
<input type="radio" id="w53" name="AGE5" value="3">
<label for="w53">Wooden Shield<img src=https://vignette.wikia.nocookie.net/moom/images/d/d6/Shield_1.png/revision/latest?cb=20171004214254 width=30 height=30></label>
<input type="radio" id="w54" name="AGE5" value="4">
<label for="w54">Mc Grabby<img src=https://vignette.wikia.nocookie.net/moom/images/d/dd/Grab_1.png/revision/latest?cb=20180913222214 width=30 height=30></label></center><br>
<center><p style="color: green; font-size: 17px; background:purple">☣AGE 6➡AGE 7☣</p></center><br>
<center>
<input type="radio" id="w61" name="AGE6" value="1">
<label for="w61">Cheese<img src=https://vignette.wikia.nocookie.net/moom/images/1/1d/Cheesewheel.png/revision/latest/scale-to-width-down/620?cb=20190222142258 width=30 height=30></label>
<input type="radio" id="w62" name="AGE6" value="2">
<label for="w62">Castle Wall<img src=https://vignette.wikia.nocookie.net/moom/images/0/0d/CastleWallV.png/revision/latest/scale-to-width-down/620?cb=20190326210755 width=30 height=30></label>
<input type="radio" id="w63" name="AGE6" value="3"
checked>
<label for="w63">Turret<img src=https://vignette.wikia.nocookie.net/moom/images/3/32/Turret.png/revision/latest?cb=20180821150820 width=30 height=30></label><br>
<input type="radio" id="w64" name="AGE6" value="4">
<label for="w64">Platform<img src=https://vignette.wikia.nocookie.net/moom/images/3/33/Platformepicquality.png/revision/latest/scale-to-width-down/620?cb=20190218112119 width=30 height=30></label>
<input type="radio" id="w65" name="AGE6" value="5">
<label for="w65">Healing Pad<img src=https://vignette.wikia.nocookie.net/moom/images/8/81/Healing_Pad.png/revision/latest?cb=20190213163848 width=30 height=30></label>
<input type="radio" id="w66" name="AGE6" value="6">
<label for="w66">Blocker<img src=https://vignette.wikia.nocookie.net/moom/images/0/04/Blockerepic.png/revision/latest/scale-to-width-down/620?cb=20190223140138 width=30 height=30></label>
<input type="radio" id="w67" name="AGE6" value="7">
<label for="w67">Teleporter<img src=https://vignette.wikia.nocookie.net/moom/images/0/01/Teleportation_pad.png/revision/latest/scale-to-width-down/620?cb=20190219153847 width=30 height=30></label></center><br>
<br>
<center><p style="color: yellow; font-size: 17px; background:orange">☣AGE 7➡AGE 8☣</p></center><br>
<center><input type="radio" id="w71" name="AGE7" value="1"
checked>
<label for="w71">Katana<img src=https://vignette.wikia.nocookie.net/moom/images/0/0b/Samurai_1.png/revision/latest?cb=20171004213933 width=30 height=30></label>
<input type="radio" id="w72" name="AGE7" value="2">
<label for="w72">Great Axe<img src=https://vignette.wikia.nocookie.net/moom/images/6/61/Great_Axe_1.png/revision/latest?cb=20171004214100 width=30 height=30></label>
<input type="radio" id="w73" name="AGE7" value="3">
<label for="w73">Crossbow<img src=https://vignette.wikia.nocookie.net/moom/images/d/df/Crossbow_1.png/revision/latest?cb=20171004214202 width=30 height=30></label>
<input type="radio" id="w74" name="AGE7" value="4">
<label for="w74">Power Mill<img src=https://vignette.wikia.nocookie.net/moom/images/6/68/Windmill.png/revision/latest?cb=20190211160349 width=30 height=30></label></center><br>
<center><p style="color: green; font-size: 17px; background:yellow">☣AGE 8➡AGE 9☣</p></center><br>
<center><input type="radio" id="w81" name="AGE8" value="1">
<label for="w81">Repeater Crossbow<img src=https://vignette.wikia.nocookie.net/moom/images/0/01/Crossbow_2.png/revision/latest?cb=20171219021854 width=30 height=30></label>
<input type="radio" id="w82" name="AGE8" value="2"
checked>
<label for="w82">Musket<img src=https://vignette.wikia.nocookie.net/moom/images/a/ab/Musket_1.png/revision/latest?cb=20171004214219 width=30 height=30></label>
<input type="radio" id="w83" name="AGE8" value="3">
<label for="w83">Poison Spikes<img src=https://vignette.wikia.nocookie.net/moom/images/8/8f/PoisonSpikeV.png/revision/latest?cb=20190228012633 width=30 height=30></label>
<input type="radio" id="w84" name="AGE8" value="4">
<label for="w84">Spinning Spikes<img src=https://vignette.wikia.nocookie.net/moom/images/c/ca/Spikegreater.png/revision/latest/scale-to-width-down/620?cb=20190226152628 width=30 height=30></label>
<input type="radio" id="w85" name="AGE8" value="5">
<label for="w85">Spawn Pad<img src=https://vignette.wikia.nocookie.net/moom/images/5/5f/Spawn_Pad.png/revision/latest?cb=20190213163751 width=30 height=30></label>
</center>
</div>
</div>
<div class="amodal-footerx">
<p style="color: #FFB200; font-size: 17px;">-!The AutoChoose Setting!-</p>
</div>
</div>
</div>
`
document.body.appendChild(AutoChoose)
var RSTYLE = document.createElement("div");
RSTYLE.className = "menuCard";
RSTYLE.id = "mainSettings";
RSTYLE.innerHTML = `
<div id="rsimpleModalx" class="rmodalx">
<div class="modal-content">
<div class="rmodal-headerx">
<span class="rcloseBtnx">&times;</span>
<h2 style="font-size: 17px; color: #6B0000">TJMod - InfoStyle</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<center><p style="color: yellow; font-size: 17px; background:blue">⚜Toggle⚜</p></center><br>
<label class="containeru">ShowInfoBoard
<input type="checkbox" id="ShowIB">
<span class="checkmarku"></span>
</label>
<label class="containeru">ShowHatPanel
<input type="checkbox" id="ShowHPB">
<span class="checkmarku"></span>
</label>
<label class="containeru">ShowFPS
<input type="checkbox" id="ShowBB">
<span class="checkmarku"></span>
</label>
<label class="containeru">ShowHP
<input type="checkbox" id="ShowHP">
<span class="checkmarku"></span>
</label>
<label class="containeru">ShowXY
<input type="checkbox" id="ShowXY">
<span class="checkmarku"></span>
</label>
<label class="containeru">ShowDir
<input type="checkbox" id="ShowDir">
<span class="checkmarku"></span>
</label>
<hr>
<center><p style="color: green; font-size: 17px; background:red">⚜Radar⚜</p></center><br>
<label class="containeru">Team Radar
<input type="checkbox" id="Ra1">
<span class="checkmarku"></span>
</label>
<label class="containeru">Player Radar(NOT IN YOUR TEAM)
<input type="checkbox" id="Ra2">
<span class="checkmarku"></span>
</label>
<label class="containeru">Animal Radar
<input type="checkbox" id="Ra3">
<span class="checkmarku"></span>
</label>
<label class="containeru">Leader Radar
<input type="checkbox" id="Ra4">
<span class="checkmarku"></span>
</label>
<label class="containeru">Killer King Radar
<input type="checkbox" id="Ra5">
<span class="checkmarku"></span>
</label>
<hr>
<center><p style="color: red; font-size: 17px; background:yellow">⚜Team Radar Color⚜</p></center><br>
<center>
<input type="radio" id="s1" name="RR1" value="#FF0000">
<label for="s1">Red</label>
<input type="radio" id="s2" name="RR1" value="orange">
<label for="s2">Orange</label>
<input type="radio" id="HeyThxForUseTJMod" name="RR1" value="yellow">
<label for="HeyThxForUseTJMod">Yellow</label>
<input type="radio" id="s4" name="RR1" value="#2EFF00"
checked>
<label for="s4">Green</label>
<input type="radio" id="s5" name="RR1" value="#00FFEC">
<label for="s5">Blue</label>
<input type="radio" id="s6" name="RR1" value="#0000ff">
<label for="s6">DarkBlue</label>
<input type="radio" id="s7" name="RR1" value="purple">
<label for="s7">Purple</label>
<input type="radio" id="s8" name="RR1" value="white">
<label for="s8">White</label>
<input type="radio" id="s9" name="RR1" value="black">
<label for="s9">Black</label>
</center>
<hr>
<center><p style="color: aqua; font-size: 17px; background:blue">⚜Player Radar Color⚜</p></center><br>
<center>
<input type="radio" id="r1" name="bR1" value="#FF0000"
checked>
<label for="r1">Red</label>
<input type="radio" id="r2" name="bR1" value="orange">
<label for="r2">Orange</label>
<input type="radio" id="rr" name="bR1" value="yellow">
<label for="rr">Yellow</label>
<input type="radio" id="r4" name="bR1" value="#2EFF00">
<label for="r4">Green</label>
<input type="radio" id="r5" name="bR1" value="#00FFEC">
<label for="r5">Blue</label>
<input type="radio" id="r6" name="bR1" value="#0000ff">
<label for="r6">DarkBlue</label>
<input type="radio" id="r7" name="bR1" value="purple">
<label for="r7">Purple</label>
<input type="radio" id="r8" name="bR1" value="white">
<label for="r8">White</label>
<input type="radio" id="r9" name="bR1" value="black">
<label for="r9">Black</label>
</center>
<hr>
<center><p style="color: white; font-size: 17px; background:black">⚜Animal Radar Color⚜</p></center><br>
<center>
<input type="radio" id="q1" name="qR1" value="#FF0000">
<label for="q1">Red</label>
<input type="radio" id="q2" name="qR1" value="orange">
<label for="q2">Orange</label>
<input type="radio" id="q3" name="qR1" value="yellow">
<label for="q3">Yellow</label>
<input type="radio" id="q4" name="qR1" value="#2EFF00">
<label for="q4">Green</label>
<input type="radio" id="q5" name="qR1" value="#00FFEC">
<label for="q5">Blue</label>
<input type="radio" id="q6" name="qR1" value="#0000ff"
checked>
<label for="q6">DarkBlue</label>
<input type="radio" id="q7" name="qR1" value="purple">
<label for="q7">Purple</label>
<input type="radio" id="q8" name="qR1" value="white">
<label for="q8">White</label>
<input type="radio" id="q9" name="qR1" value="black">
<label for="q9">Black</label>
</center>
<hr>
<center><p style="color: black; font-size: 17px; background:red">⚜Leader Radar Color⚜</p></center><br>
<center>
<input type="radio" id="l1" name="lR1" value="#FF0000">
<label for="l1">Red</label>
<input type="radio" id="l2" name="lR1" value="orange">
<label for="l2">Orange</label>
<input type="radio" id="l3" name="lR1" value="yellow"
checked>
<label for="l3">Yellow</label>
<input type="radio" id="l4" name="lR1" value="#2EFF00">
<label for="l4">Green</label>
<input type="radio" id="l5" name="lR1" value="#00FFEC">
<label for="l5">Blue</label>
<input type="radio" id="l6" name="lR1" value="#0000ff">
<label for="l6">DarkBlue</label>
<input type="radio" id="l7" name="lR1" value="purple">
<label for="l7">Purple</label>
<input type="radio" id="l8" name="lR1" value="white">
<label for="l8">White</label>
<input type="radio" id="l9" name="lR1" value="black">
<label for="l9">Black</label>
</center>
<hr>
<center><p style="color: green; font-size: 17px; background:purple">⚜Best Killer Radar Color⚜</p></center><br>
<center>
<input type="radio" id="u1" name="uR1" value="#FF0000">
<label for="u1">Red</label>
<input type="radio" id="u2" name="uR1" value="orange">
<label for="u2">Orange</label>
<input type="radio" id="u3" name="uR1" value="yellow"
checked>
<label for="u3">Yellow</label>
<input type="radio" id="u4" name="uR1" value="#2EFF00">
<label for="u4">Green</label>
<input type="radio" id="u5" name="uR1" value="#00FFEC">
<label for="u5">Blue</label>
<input type="radio" id="u6" name="uR1" value="#0000ff">
<label for="u6">DarkBlue</label>
<input type="radio" id="u7" name="uR1" value="purple">
<label for="u7">Purple</label>
<input type="radio" id="u8" name="uR1" value="white">
<label for="u8">White</label>
<input type="radio" id="u9" name="uR1" value="black">
<label for="u9">Black</label>
</center>
<hr>
<p style="color: red; font-size: 17px; background:green">⚜HP BAR Color⚜</p>
<center><p style="color: yellow; font-size: 17px; background:#00FFC5">⚜HOSTILITY(Animal Or Not IN YOUR TEAM PLAYER)⚜</p></center><br>
<center>
<input type="radio" id="gr1" name="gR1" value="#cc5151"
checked>
<label for="gr1">Red</label>
<input type="radio" id="gr2" name="gR1" value="orange">
<label for="gr2">Orange</label>
<input type="radio" id="gr3" name="gR1" value="yellow">
<label for="gr3">Yellow</label>
<input type="radio" id="gr4" name="gR1" value="#8ECC51">
<label for="gr4">Green</label>
<input type="radio" id="gr5" name="gR1" value="#00FFEC">
<label for="gr5">Blue</label>
<input type="radio" id="gr6" name="gR1" value="#0000ff">
<label for="gr6">DarkBlue</label>
<input type="radio" id="gr7" name="gR1" value="purple">
<label for="gr7">Purple</label>
<input type="radio" id="gr8" name="gR1" value="white">
<label for="gr8">White</label>
<input type="radio" id="gr9" name="gR1" value="black">
<label for="gr9">Black</label>
</center>
<center><p style="color: aqua; font-size: 17px; background:#FF0083">⚜PEACE(YOUR TEAM OR YOU)⚜</p></center><br>
<center>
<input type="radio" id="br1" name="br1" value="#cc5151">
<label for="br1">Red</label>
<input type="radio" id="br2" name="br1" value="orange">
<label for="br2">Orange</label>
<input type="radio" id="br3" name="br1" value="yellow"
checked>
<label for="br3">Yellow</label>
<input type="radio" id="br4" name="br1" value="#8ECC51"
checked>
<label for="br4">Green</label>
<input type="radio" id="br5" name="br1" value="#00FFEC">
<label for="br5">Blue</label>
<input type="radio" id="br6" name="br1" value="#0000ff">
<label for="br6">DarkBlue</label>
<input type="radio" id="br7" name="br1" value="purple">
<label for="br7">Purple</label>
<input type="radio" id="br8" name="br1" value="white">
<label for="br8">White</label>
<input type="radio" id="br9" name="br1" value="black">
<label for="br9">Black</label>
</center>
</div>
</div>
<div class="rmodal-footerx">
<p style="color: #FFB200; font-size: 17px;">-!The InfoStyle Setting!-</p>
</div>
</div>
</div>
`
document.body.appendChild(RSTYLE)
var br1 = document.querySelector("#br1");br1.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br1").value;
  doNewSend(["ch", ["Red"]]);
 }
})
var br2 = document.querySelector("#br2");br2.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br2").value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var br3 = document.querySelector("#br3");br3.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br3").value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var br4 = document.querySelector("#br4");br4.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br4").value;
  doNewSend(["ch", ["Green"]]);
 }
})
var br5 = document.querySelector("#br5");br5.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br5").value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var br6 = document.querySelector("#br6");br6.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br6").value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var br7 = document.querySelector("#br7");br7.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br7").value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var br8 = document.querySelector("#br8");br8.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br8").value;
  doNewSend(["ch", ["White"]]);
 }
})
var br9 = document.querySelector("#br9");br9.addEventListener('change', function() {
 if (this.checked) {
  TeamO = document.getElementById("br9").value;
  doNewSend(["ch", ["Black"]]);
 }
})
var gr1 = document.querySelector("#gr1");gr1.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr1").value;
  doNewSend(["ch", ["Red"]]);
 }
})
var gr2 = document.querySelector("#gr2");gr2.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr2").value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var gr3 = document.querySelector("#gr3");gr3.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr3").value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var gr4 = document.querySelector("#gr4");gr4.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr4").value;
  doNewSend(["ch", ["Green"]]);
 }
})
var gr5 = document.querySelector("#gr5");gr5.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr5").value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var gr6 = document.querySelector("#gr6");gr6.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr6").value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var gr7 = document.querySelector("#gr7");gr7.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr7").value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var gr8 = document.querySelector("#gr8");gr8.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr8").value;
  doNewSend(["ch", ["White"]]);
 }
})
var gr9 = document.querySelector("#gr9");gr9.addEventListener('change', function() {
 if (this.checked) {
  TeamD = document.getElementById("gr9").value;
  doNewSend(["ch", ["Black"]]);
 }
})
var u1 = document.querySelector("#u1");
u1.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u1").value;
  doNewSend(["ch", ["Red"]]);
 }
})
var u2 = document.querySelector("#u2");
u2.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u2").value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var u3 = document.querySelector("#u3");
u3.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u3").value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var u4 = document.querySelector("#u4");
u4.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u4").value;
  doNewSend(["ch", ["Green"]]);
 }
})
var u5 = document.querySelector("#u5");
u5.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u5").value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var u6 = document.querySelector("#u6");
u6.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u6").value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var u7 = document.querySelector("#u7");
u7.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u7").value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var u8 = document.querySelector("#u8");
u8.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u8").value;
  doNewSend(["ch", ["White"]]);
 }
})
var u9 = document.querySelector("#u9");
u9.addEventListener('change', function() {
 if (this.checked) {
  TeamB = document.getElementById("u9").value;
  doNewSend(["ch", ["Black"]]);
 }
})
var l1 = document.querySelector("#l1");
l1.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l1").value;
  doNewSend(["ch", ["Red"]]);
 }
})
var l2 = document.querySelector("#l2");
l2.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l2").value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var l3 = document.querySelector("#l3");
l3.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l3").value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var l4 = document.querySelector("#l4");
l4.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l4").value;
  doNewSend(["ch", ["Green"]]);
 }
})
var l5 = document.querySelector("#l5");
l5.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l5").value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var l6 = document.querySelector("#l6");
l6.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l6").value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var l7 = document.querySelector("#l7");
l7.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l7").value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var l8 = document.querySelector("#l8");
l8.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l8").value;
  doNewSend(["ch", ["White"]]);
 }
})
var l9 = document.querySelector("#l9");
l9.addEventListener('change', function() {
 if (this.checked) {
  TeamL = document.getElementById("l9").value;
  doNewSend(["ch", ["Black"]]);
 }
})
var q1 = document.querySelector("#q1");
q1.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q1').value;
  doNewSend(["ch", ["Red"]]);
 }
})
var q2 = document.querySelector("#q2");
q2.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q2').value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var q3 = document.querySelector("#q3");
q3.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q3').value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var q4 = document.querySelector("#q4");
q4.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q4').value;
  doNewSend(["ch", ["Green"]]);
 }
})
var q5 = document.querySelector("#q5");
q5.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q5').value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var q6 = document.querySelector("#q6");
q6.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q6').value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var q7 = document.querySelector("#q7");
q7.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q7').value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var q8 = document.querySelector("#q8");
q8.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q8').value;
  doNewSend(["ch", ["White"]]);
 }
})
var q9 = document.querySelector("#q9");
q9.addEventListener('change', function() {
 if (this.checked) {
  TeamA = document.getElementById('q9').value;
  doNewSend(["ch", ["Black"]]);
 }
})
var s1 = document.querySelector("#s1")

s1.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s1').value;
        doNewSend(["ch", ["Red"]]);
    }
})
var s2 = document.querySelector("#s2")

s2.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s2').value;
        doNewSend(["ch", ["Orange"]]);
    }
})
var HeyThxForUseTJMod = document.querySelector("#HeyThxForUseTJMod")

HeyThxForUseTJMod.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('HeyThxForUseTJMod').value;
        doNewSend(["ch", ["Yellow"]]);
    }
})
var s4 = document.querySelector("#s4")

s4.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s4').value;
        doNewSend(["ch", ["Green"]]);
    }
})
var s5 = document.querySelector("#s5")

s5.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s5').value;
        doNewSend(["ch", ["Blue"]]);
    }
})
var s6 = document.querySelector("#s6")

s6.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s6').value;
        doNewSend(["ch", ["DarkBlue"]]);
    }
})
var s7 = document.querySelector("#s7")

s7.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s7').value;
        doNewSend(["ch", ["Purple"]]);
    }
})
var s8 = document.querySelector("#s8")

s8.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s8').value;
        doNewSend(["ch", ["White"]]);
    }
})
var s9 = document.querySelector("#s9")

s9.addEventListener('change', function() {
    if (this.checked) {
        TeamR = document.getElementById('s9').value;
        doNewSend(["ch", ["Black"]]);
    }
})
var r1 = document.querySelector("#r1");
r1.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r1').value;
  doNewSend(["ch", ["Red"]]);
 }
})
var r2 = document.querySelector("#r2");
r2.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r2').value;
  doNewSend(["ch", ["Orange"]]);
 }
})
var rr = document.querySelector("#rr")

rr.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('rr').value;
  doNewSend(["ch", ["Yellow"]]);
 }
})
var r4 = document.querySelector("#r4");
r4.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r4').value;
  doNewSend(["ch", ["Green"]]);
 }
})
var r5 = document.querySelector("#r5");
r5.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r5').value;
  doNewSend(["ch", ["Blue"]]);
 }
})
var r6 = document.querySelector("#r6");
r6.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r6').value;
  doNewSend(["ch", ["DarkBlue"]]);
 }
})
var r7 = document.querySelector("#r7");
r7.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r7').value;
  doNewSend(["ch", ["Purple"]]);
 }
})
var r8 = document.querySelector("#r8");
r8.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r8').value;
  doNewSend(["ch", ["White"]]);
 }
})
var r9 = document.querySelector("#r9");
r9.addEventListener('change', function() {
 if (this.checked) {
  TeamP = document.getElementById('r9').value;
  doNewSend(["ch", ["Black"]]);
 }
})
button.classList.add("menuButton");
button.classList.add("open-menu-button");
button.textContent = "Settings ⓂMenuⓂ";

button.addEventListener("click", toggleMenu);
function toggleMenu(){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
}
card.appendChild(button);
var AGE8
var ShowHB = document.querySelector("#ShowHPB")

ShowHB.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["ShowHatPanel: ON"]]);
            $("#myButton").css({
'display': 'block'
            });
            $("#myButton2").css({
'display': 'block'
            });
            $("#myButton3").css({
'display': 'block'
            });
            $("#myButton4").css({
'display': 'block'
            });
            $("#myButton5").css({
'display': 'block'
            });
            $("#myButton6").css({
'display': 'block'
            });
            $("#myButton7").css({
'display': 'block'
            });
            $("#myButton8").css({
'display': 'block'
            });
            $("#myButton10").css({
'display': 'block'
            });
            $("#myButton9").css({
'display': 'block'
            });
    }else{
        doNewSend(["ch", ["ShowHatPanel: OFF"]]);
            $("#myButton").css({
'display': 'none'
            });
            $("#myButton2").css({
'display': 'none'
            });
            $("#myButton3").css({
'display': 'none'
            });
            $("#myButton4").css({
'display': 'none'
            });
            $("#myButton5").css({
'display': 'none'
            });
            $("#myButton6").css({
'display': 'none'
            });
            $("#myButton7").css({
'display': 'none'
            });
            $("#myButton8").css({
'display': 'none'
            });
            $("#myButton10").css({
'display': 'none'
            });
            $("#myButton9").css({
'display': 'none'
            });
    }
})
var ShowBB = document.querySelector("#ShowBB")

ShowBB.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["ShowFPS: ON"]]);
            $("#test").css({
'display': 'block'
            });
    }else{
        doNewSend(["ch", ["ShowFPS: OFF"]]);
            $("#test").css({
'display': 'none'
            });
    }
})
var AGGO=false
var AutoGo = document.querySelector("#AGO")

AutoGo.addEventListener('change', function() {
    if (this.checked) {
AGGO=true
        doNewSend(["ch", ["AutoGo: ON | X:"+X+"/Y:"+Y]]);
    }else{
AGGO=false
doNewSend(["33", []]);
        doNewSend(["ch", ["AutoGo: OFF"]]);
    }
})
setInterval(() => {
if(X<=14365&&X>=35){
if(Y<=14365&&Y>=35){
if(AGGO==true){
        doNewSend(["ch", ["AutoGo --> X:"+X+"/Y:"+Y]]);
doNewSend(["33", [Math.atan2(Y-myPlayer.y, X-myPlayer.x)]]);
}}}
}, 0);
var ShowIB = document.querySelector("#ShowIB")

ShowIB.addEventListener('change', function() {
    if (this.checked) {
            $("#info").css({
'display': 'block'
            });
        doNewSend(["ch", ["ShowInfoBoard: ON"]]);
    }else{
            $("#info").css({
'display': 'none'
            });
        doNewSend(["ch", ["ShowInfoBoard: OFF"]]);
    }
})
setInterval(() => {
    if (HPT == 0 && XYT==0 && DIT==0) {
HPT2=376491278638974692374692378469237;
XYT2=376491278638974692374692378469237;
DIT2=376491278638974692374692378469237;
    }
    if(HPT==6&&XYT==6&&DIT==6){
HPT2=34;
DIT2=60;
XYT2=86;
    }
    if(HPT==0&&XYT==6&&DIT==6){
HPT2=376491278638974692374692378469237;
XYT2=60;
DIT2=34
    }
    if(HPT==0&&XYT==0&&DIT==6){
HPT2=376491278638974692374692378469237;
XYT2=376491278638974692374692378469237;
DIT2=34
    }
    if(HPT==6&&XYT==0&&DIT==0){
HPT2=34;
XYT2=376491278638974692374692378469237;
DIT2=376491278638974692374692378469237;
    }
    if(HPT==6&&XYT==6&&DIT==0){
HPT2=34;
XYT2=60;
DIT2=376491278638974692374692378469237;
    }
    if(HPT==6&&XYT==0&&DIT==6){
HPT2=34;
XYT2=376491278638974692374692378469237;
DIT2=60
    }
    if(HPT==0&&XYT==6&&DIT==0){
HPT2=376491278638974692374692378469237;
XYT2=34;
DIT2=376491278638974692374692378469237;
    }
}, 0);
var Ra1 = document.querySelector("#Ra1")

Ra1.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Team Radar: ON"]]);
Radar1=0
    }else{
Radar1=376491278638974692374692378469237
        doNewSend(["ch", ["Team Radar: OFF"]]);
    }
})
var Ra2 = document.querySelector("#Ra2")

Ra2.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Player Radar: ON"]]);
Radar2=0
    }else{
        doNewSend(["ch", ["Player Radar: OFF"]]);
Radar2=376491278638974692374692378469237
    }
})
var Ra3 = document.querySelector("#Ra3")

Ra3.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Animal Radar: ON"]]);
Radar3=0
    }else{
Radar3=376491278638974692374692378469237
        doNewSend(["ch", ["Animal Radar: OFF"]]);
    }
})
var Ra4 = document.querySelector("#Ra4")

Ra4.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Leader Radar: ON"]]);
Radar4=0
    }else{
Radar4=376491278638974692374692378469237
        doNewSend(["ch", ["Leader Radar: OFF"]]);
    }
})
var Ra5 = document.querySelector("#Ra5")

Ra5.addEventListener('change', function() {
    if (this.checked) {
Radar5=0
        doNewSend(["ch", ["Killer King Radar: ON"]]);
    }else{
Radar5=376491278638974692374692378469237
        doNewSend(["ch", ["Killer King Radar: OFF"]]);
    }
})
var ShowHP = document.querySelector("#ShowHP")

ShowHP.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Show HP: ON"]]);
HPT=6
    }else{
        doNewSend(["ch", ["Show HP: OFF"]]);
HPT=0
    }
})
var ShowDir = document.querySelector("#ShowDir")

ShowDir.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Show Dir: ON"]]);
DIT=6
    }else{
        doNewSend(["ch", ["Show Dir: OFF"]]);
DIT=0
    }
})
var ShowXY = document.querySelector("#ShowXY")

ShowXY.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Show XY: ON"]]);
XYT=6
    }else{
        doNewSend(["ch", ["Show XY: OFF"]]);
XYT=0
    }
})
var w81 = document.querySelector("#w81")

w81.addEventListener('change', function() {
    if (this.checked) {
        AGE8 = document.getElementById('w81').value;
        doNewSend(["ch", ["Repeater Crossbow"]]);
    }
})
var KEEPI = document.querySelector("#MAPI")

KEEPI.addEventListener('change', function() {
    if (this.checked) {
        doNewSend(["ch", ["Keep Map Item"]]);
keepmap=true
    }else{
keepmap=false
    }
})
var w82 = document.querySelector("#w82")

w82.addEventListener('change', function() {
    if (this.checked) {
        AGE8 = document.getElementById('w82').value;
        doNewSend(["ch", ["Musket"]]);
    }
})
var w83 = document.querySelector("#w83")

w83.addEventListener('change', function() {
    if (this.checked) {
        AGE8 = document.getElementById('w83').value;
        doNewSend(["ch", ["Poison Spikes"]]);
    }
})
var w84 = document.querySelector("#w84")

w84.addEventListener('change', function() {
    if (this.checked) {
        AGE8 = document.getElementById('w84').value;
        doNewSend(["ch", ["Spinning Spikes"]]);
    }
})
var w85 = document.querySelector("#w85")

w85.addEventListener('change', function() {
    if (this.checked) {
        AGE8 = document.getElementById('w85').value;
        doNewSend(["ch", ["Spawn Pad"]]);
    }
})
var AGE7
var w71 = document.querySelector("#w71")

w71.addEventListener('change', function() {
    if (this.checked) {
        AGE7 = document.getElementById('w71').value;
        doNewSend(["ch", ["Katana"]]);
    }
})
var w72 = document.querySelector("#w72")

w72.addEventListener('change', function() {
    if (this.checked) {
        AGE7 = document.getElementById('w72').value;
        doNewSend(["ch", ["Great Axe"]]);
    }
})
var w73 = document.querySelector("#w73")

w73.addEventListener('change', function() {
    if (this.checked) {
        AGE7 = document.getElementById('w73').value;
        doNewSend(["ch", ["CrossBow"]]);
    }
})
var w74 = document.querySelector("#w74")

w74.addEventListener('change', function() {
    if (this.checked) {
        AGE7 = document.getElementById('w74').value;
        doNewSend(["ch", ["Power Mill"]]);
    }
})
var AGE6
var w62 = document.querySelector("#w62")

w62.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w62').value;
        doNewSend(["ch", ["Castle Wall"]]);
    }
})
var w61 = document.querySelector("#w61")

w61.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w61').value;
        doNewSend(["ch", ["Cheese"]]);
    }
})
var w63 = document.querySelector("#w63")

w63.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w63').value;
        doNewSend(["ch", ["Turret"]]);
    }
})
var w64 = document.querySelector("#w64")

w64.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w64').value;
        doNewSend(["ch", ["Platform"]]);
    }
})
var w65 = document.querySelector("#w65")

w65.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w65').value;
        doNewSend(["ch", ["Healing Pad"]]);
    }
})
var w66 = document.querySelector("#w66")

w66.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w66').value;
        doNewSend(["ch", ["Blocker"]]);
    }
})
var w67 = document.querySelector("#w67")

w67.addEventListener('change', function() {
    if (this.checked) {
        AGE6 = document.getElementById('w67').value;
        doNewSend(["ch", ["Teleporter"]]);
    }
})
var AGE5
var w51 = document.querySelector("#w51")

w51.addEventListener('change', function() {
    if (this.checked) {
        AGE5 = document.getElementById('w51').value;
        doNewSend(["ch", ["Hunting Bow"]]);
    }
})
var w52 = document.querySelector("#w52")

w52.addEventListener('change', function() {
    if (this.checked) {
        AGE5 = document.getElementById('w52').value;
        doNewSend(["ch", ["Great Hammer"]]);
    }
})
var w53 = document.querySelector("#w53")

w53.addEventListener('change', function() {
    if (this.checked) {
        AGE5 = document.getElementById('w53').value;
        doNewSend(["ch", ["Wooden Shield"]]);
    }
})
var w54 = document.querySelector("#w54")

w54.addEventListener('change', function() {
    if (this.checked) {
        AGE5 = document.getElementById('w54').value;
        doNewSend(["ch", ["Mc Grabby"]]);
    }
})
var AGE4
var w41 = document.querySelector("#w41")

w41.addEventListener('change', function() {
    if (this.checked) {
        AGE4 = document.getElementById('w41').value;
        doNewSend(["ch", ["Greater Spikes"]]);
    }
})
var w42 = document.querySelector("#w42")

w42.addEventListener('change', function() {
    if (this.checked) {
        AGE4 = document.getElementById('w42').value;
        doNewSend(["ch", ["Faster Windmill"]]);
    }
})
var w43 = document.querySelector("#w43")

w43.addEventListener('change', function() {
    if (this.checked) {
        AGE4 = document.getElementById('w43').value;
        doNewSend(["ch", ["Mine"]]);
    }
})
var w44 = document.querySelector("#w44")

w44.addEventListener('change', function() {
    if (this.checked) {
        AGE4 = document.getElementById('w44').value;
        doNewSend(["ch", ["Sapling"]]);
    }
})

var AGE3
var w31 = document.querySelector("#w31")

w31.addEventListener('change', function() {
    if (this.checked) {
        AGE3 = document.getElementById('w31').value;
        doNewSend(["ch", ["Pit Trap"]]);
    }
})
var w32 = document.querySelector("#w32")

w32.addEventListener('change', function() {
    if (this.checked) {
        AGE3 = document.getElementById('w32').value;
        doNewSend(["ch", ["Boost Pad"]]);
    }
})
var AGE2
var w21 = document.querySelector("#w21")

w21.addEventListener('change', function() {
    if (this.checked) {
        AGE2 = document.getElementById('w21').value;
        doNewSend(["ch", ["Cookie"]]);
    }
})
var w22 = document.querySelector("#w22")

w22.addEventListener('change', function() {
    if (this.checked) {
        AGE2 = document.getElementById('w22').value;
        doNewSend(["ch", ["Stone Wall"]]);
    }
})
var AGE1
var w11 = document.querySelector("#w11")

w11.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w11').value;
        doNewSend(["ch", ["Hand Axe"]]);
    }
})
var w12 = document.querySelector("#w12")

w12.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w12').value;
        doNewSend(["ch", ["Short Sword"]]);
    }
})
var w13 = document.querySelector("#w13")

w13.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w13').value;
        doNewSend(["ch", ["Polearm"]]);
    }
})
var w14 = document.querySelector("#w14")

w14.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w14').value;
        doNewSend(["ch", ["Bat"]]);
    }
})
var w15 = document.querySelector("#w15")

w15.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w15').value;
        doNewSend(["ch", ["Draggers"]]);
    }
})
var w16 = document.querySelector("#w16")

w16.addEventListener('change', function() {
    if (this.checked) {
        AGE1 = document.getElementById('w16').value;
        doNewSend(["ch", ["Stick"]]);
    }
})
//keystart
$("#001").on("input", () => {
    var cval = $("#001").val();
    if (cval) {
        xxxxTurretk = cval.toUpperCase();
        xxxxTurretk = xxxxTurretk.charCodeAt(0);
    }
});
$("#003").on("input", () => {
    var cval = $("#003").val();
    if (cval) {
        InstaKill = cval.toUpperCase();
        InstaKill = InstaKill.charCodeAt(0);
    }
});
$("#006").on("input", () => {
    var cval = $("#006").val();
    if (cval) {
        tauh = cval.toUpperCase();
        tauh = tauh.charCodeAt(0);
    }
});
$("#008").on("input", () => {
    var cval = $("#008").val();
    if (cval) {
        auhat = cval.toUpperCase();
        auhat = auhat.charCodeAt(0);
    }
});
$("#009").on("input", () => {
    var cval = $("#009").val();
    if (cval) {
        cteam = cval.toUpperCase();
        cteam = cteam.charCodeAt(0);
    }
});
$("#012").on("input", () => {
    var cval = $("#012").val();
    if (cval) {
        dcteam = cval.toUpperCase();
        dcteam = dcteam.charCodeAt(0);
    }
});
$("#013").on("input", () => {
    var cval = $("#013").val();
    if (cval) {
        discord = cval.toUpperCase();
        discord = discord.charCodeAt(0);
    }
});
$("#014").on("input", () => {
    var cval = $("#014").val();
    if (cval) {
        best = cval.toUpperCase();
        best = best.charCodeAt(0);
    }
});
$("#015").on("input", () => {
    var cval = $("#015").val();
    if (cval) {
        xxxxTrap = cval.toUpperCase();
        xxxxTrap = xxxxTrap.charCodeAt(0);
    }
});
$("#016").on("input", () => {
    var cval = $("#016").val();
    if (cval) {
        crash = cval.toUpperCase();
        crash = crash.charCodeAt(0);
    }
});
$("#017").on("input", () => {
    var cval = $("#017").val();
    if (cval) {
        ktn = cval.toUpperCase();
        ktn = ktn.charCodeAt(0);
    }
});
$("#018").on("input", () => {
    var cval = $("#018").val();
    if (cval) {
        xxxxxw = cval.toUpperCase();
        xxxxxw = xxxxxw.charCodeAt(0);
    }
});
$("#019").on("input", () => {
    var cval = $("#019").val();
    if (cval) {
        bt = cval.toUpperCase();
        bt = bt.charCodeAt(0);
    }
});
$("#020").on("input", () => {
    var cval = $("#020").val();
    if (cval) {
        mk1 = cval.toUpperCase();
        mk1 = mk1.charCodeAt(0);
    }
});
$("#021").on("input", () => {
    var cval = $("#021").val();
    if (cval) {
        xxxxwall = cval.toUpperCase();
        xxxxwall = xxxxwall.charCodeAt(0);
    }
});
$("#022").on("input", () => {
    var cval = $("#022").val();
    if (cval) {
        xxxxspi = cval.toUpperCase();
        xxxxspi = xxxxspi.charCodeAt(0);
    }
});
$("#023").on("input", () => {
    var cval = $("#023").val();
    if (cval) {
        gramus = cval.toUpperCase();
        gramus = gramus.charCodeAt(0);
    }
});
$("#024").on("input", () => {
    var cval = $("#024").val();
    if (cval) {
        prmap = cval.toUpperCase();
        prmap = prmap.charCodeAt(0);
    }
});
$("#025").on("input", () => {
    var cval = $("#025").val();
    if (cval) {
        gr = cval.toUpperCase();
        gr = gr.charCodeAt(0);
    }
});
$("#026").on("input", () => {
    var cval = $("#026").val();
    if (cval) {
        ktnmus = cval.toUpperCase();
        ktnmus = ktnmus.charCodeAt(0);
    }
});
$("#027").on("input", () => {
    var cval = $("#027").val();
    if (cval) {
        inspike = cval.toUpperCase();
        inspike = inspike.charCodeAt(0);
    }
});
$("#028").on("input", () => {
    var cval = $("#028").val();
    if (cval) {
        musket2 = cval.toUpperCase();
        musket2 = musket2.charCodeAt(0);
    }
});
$("#029").on("input", () => {
    var cval = $("#029").val();
    if (cval) {
        spinspi = cval.toUpperCase();
        spinspi = spinspi.charCodeAt(0);
    }
});
//keystop
function c1() {
    document.getElementById("cbp2").checked = false;
    document.getElementById("cbp3").checked = false;
}

function c2() {
    document.getElementById("cbp1").checked = false;
    document.getElementById("cbp3").checked = false;
}

function c3() {
    document.getElementById("cbp1").checked = false;
    document.getElementById("cbp2").checked = false;
}

function ezcurbytjhacker() {
    if (cursor == 1) {
        $("#gameCanvas").css('cursor', 'url(https://www.dl.dropboxusercontent.com/s/3rfp54s2tj81vvv/cur1157.cur), default');
    }
    if (cursor == 2) {
        $("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/user/use-1/use153.cur), default');
    }
    if (cursor == 3) {
        $("#gameCanvas").css('cursor', 'url(http://cur.cursors-4u.net/cursors/cur-6/cur572.cur), default');
    }
}
var WWW = document.querySelector("#tbi")

WWW.addEventListener('change', function() {
    if (this.checked) {
        tbi = true
        doNewSend(["ch", ["Toggle Bow Insta Msg-ON"]]);
    } else {
        tbi = false
        doNewSend(["ch", ["Toggle Bow Insta Msg-OFF"]]);
    }
})
var rep = document.querySelector("#REP")
var rc = true
rep.addEventListener('change', function() {
    if (this.checked) {
        rc = true
        doNewSend(["ch", ["R.E.P. CrossBow-ON"]]);
    } else {
        rc = false
        doNewSend(["ch", ["R.E.P. CrossBow-OFF"]]);
    }
})
var TOB = document.querySelector("#TJOPBOT")

TOB.addEventListener('change', function() {
    if (this.checked) {
        Mode = 2
        doNewSend(["ch", ["TJ OP BOT-ON"]]);
        document.getElementById("TJOPBOT2").checked = true;
    } else {
        Mode = 1
        doNewSend(["ch", ["TJ OP BOT-OFF"]]);
        document.getElementById("TJOPBOT2").checked = false;
    }
})
var TOB2 = document.querySelector("#TJOPBOT2")

TOB2.addEventListener('change', function() {
    if (this.checked) {
        Mode = 2
        doNewSend(["ch", ["TJ OP BOT-ON"]]);
        document.getElementById("TJOPBOT").checked = true;
    } else {
        Mode = 1
        doNewSend(["ch", ["TJ OP BOT-OFF"]]);
        document.getElementById("TJOPBOT").checked = false;
    }
})
var AR = true;
var CBIM = document.querySelector("#CBIM")
var customi = false
CBIM.addEventListener('change', function() {
    if (this.checked) {
        customi = true
        doNewSend(["ch", ["Custom Bow Insta Msg-ON"]]);
    } else {
        customi = false
        doNewSend(["ch", ["Custom Bow Insta Msg-OFF"]]);
    }
})
var MinecraftBetterMiniCraft = document.querySelector("#MinecraftBetterMiniCraft")

MinecraftBetterMiniCraft.addEventListener('change', function() {
    if (this.checked) {
        AR = true
        doNewSend(["ch", ["AutoReload-ON"]]);
    } else {
        AR = false
        doNewSend(["ch", ["AutoReload-OFF"]]);
    }
})
var ARL = document.querySelector("#ARL")
document.getElementById("ARL").checked = true;
ARL.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("MinecraftBetterMiniCraft").checked = true;
        AR = true
        doNewSend(["ch", ["AutoReload-ON"]]);
    } else {
        AR = false
        document.getElementById("MinecraftBetterMiniCraft").checked = false;
        doNewSend(["ch", ["AutoReload-OFF"]]);
    }
})
var www = document.querySelector("#WWW")

www.addEventListener('change', function() {
    if (this.checked) {
        A = true
        doNewSend(["ch", ["SuperClan-ON"]]);
    } else {
        A = false
        doNewSend(["ch", ["SuperClan-OFF"]]);
    }
})
var noItem = false;
var ni = document.querySelector("#TMI")

ni.addEventListener('change', function() {
    if (this.checked) {
        noItem = true
        doNewSend(["ch", ["Map Item-ON"]]);
    } else {
        noItem = false
        doNewSend(["ch", ["Map Item-OFF"]]);
    }
})

var AB優若乳 = document.querySelector("#AB優若乳")

AB優若乳.addEventListener('change', function() {
    if (this.checked) {
        wtf = true
        doNewSend(["ch", ["AutoBull-ON"]]);
    } else {
        wtf = false
        doNewSend(["ch", ["AutoBull-OFF"]]);
    }
})
var thtt = true;
var tht = document.querySelector("#THT")

tht.addEventListener('change', function() {
    if (this.checked) {
        thtt = true
        doNewSend(["ch", ["Reload TurretHelmet-ON"]]);
    } else {
        thtt = false
        doNewSend(["ch", ["Reload TurretHelmet-OFF"]]);
    }
})
var thttt = document.querySelector("#thttt")
document.getElementById("thttt").checked = true;
thttt.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("THT").checked = true;
        thtt = true
        doNewSend(["ch", ["Reload TurretHelmet-ON"]]);
    } else {
        thtt = false
        document.getElementById("THT").checked = false;
        doNewSend(["ch", ["Reload TurretHelmet-OFF"]]);
    }
})

var aaa = document.querySelector("#aaa")

aaa.addEventListener('change', function() {
    if (this.checked) {
        aba = true
        doNewSend(["ch", ["AutoAim-ON"]]);
    } else {
        aba = false
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
        bAutoAim = true
        doNewSend(["ch", ["BoostAutoAim-ON"]]);
    } else {
        bAutoAim = false
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
    if (wtcrashoff == true) {
        document.getElementById("CrashXX").checked = false;
    }
}, 1);

setInterval(() => {
    lt = document.getElementById("lt").value;
    rt = document.getElementById("rt").value;
}, 1);
setInterval(() => {
    ezcurbytjhacker();
}, 1);

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
X=document.getElementById('XNAME').value;
Y=document.getElementById('YNAME').value;
}, 1);
var acccc = document.querySelector("#accc")

acccc.addEventListener('change', function() {
    if (this.checked) {
        Achat = true
        doNewSend(["ch", ["Auto Chat-ON"]]);
    } else {
        Achat = false
        doNewSend(["ch", ["Auto Chat-OFF"]]);
    }
})
var EWDFAWFAW = document.querySelector("#EWDFAWFAW")

EWDFAWFAW.addEventListener('change', function() {
    if (this.checked) {
        CB();
    } else {
        CW();
    }
})
var Achat = false;
setInterval(() => {
    if (RMsg == true) {
        setTimeout(() => {
            doNewSend(["ch", [R1]]);
            setTimeout(() => {
                doNewSend(["ch", [R2]]);
                setTimeout(() => {
                    doNewSend(["ch", [R3]]);
                    setTimeout(() => {
                        doNewSend(["ch", [R4]]);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
}, 4000);
setInterval(() => {
    if (Achat == true) {
        doNewSend(["ch", [R99]]);
    }
}, 0);
var xdd = false;
setInterval(() => {
    R99 = document.getElementById("099").value;
}, 1);
var ezxd = document.querySelector("#xdezz")

ezxd.addEventListener('change', function() {
    if (this.checked) {
        xdd = true
        document.getElementById("xdezzL").checked = true;
        doNewSend(["ch", ["Unquip Accessorie-ON"]]);
    } else {
        xdd = false
        doNewSend(["ch", ["Unquip Accessorie-OFF"]]);
        document.getElementById("xdezzL").checked = false;
    }
})

var ezxdL = document.querySelector("#xdezzL")

ezxdL.addEventListener('change', function() {
    if (this.checked) {
        xdd = true
        document.getElementById("xdezz").checked = true;
        doNewSend(["ch", ["Unquip Accessorie-ON"]]);
    } else {
        xdd = false
        doNewSend(["ch", ["Unquip Accessorie-OFF"]]);
        document.getElementById("xdezz").checked = false;
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
var SHL = document.querySelector("#SHL")

SHL.addEventListener('change', function() {
    if (this.checked) {
        SuperHeal = true;
        doNewSend(["ch", ["SuperHeal-ON"]]);
        document.getElementById("SH").checked = true;
    } else {
        SuperHeal = false;
        doNewSend(["ch", ["SuperHeal-OFF"]]);
        document.getElementById("SH").checked = false;
    }
})
var SH = document.querySelector("#SH")

SH.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("SHL").checked = true;
        SuperHeal = true;
        doNewSend(["ch", ["SuperHeal-ON"]]);
    } else {
        SuperHeal = false;
        document.getElementById("SHL").checked = false;
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
    speed = document.getElementById("RS").value;
    circle = document.getElementById("cc").value;
}, 1);

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
}, 1);

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
}, 1);

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
}, 1);

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
}, 1);

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
}, 1);

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
}, 1);

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
died();
}, 1);

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
}, 1);

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
}, 1);

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
}, 1);

$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval) {
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log("[INFO]TankGearKey");
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval) {
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log("[INFO]BullHelmetKey");
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval) {
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log("[INFO]SoldierHelmetKey");
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval) {
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log("[INFO]TurretKey");
    }
});

$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval) {
        EmpKey = cval.toUpperCase();
        EmpKey = EmpKey.charCodeAt(0);
        console.log("[INFO]EmpKey");
    }
});

$("#samu").on("input", () => {
    var cval = $("#samu").val();
    if (cval) {
        SamuKey = cval.toUpperCase();
        SamuKey = SamuKey.charCodeAt(0);
        console.log("[INFO]SamuKey");
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval) {
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log("[INFO]BoosterHatKey");
    }
});

$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval) {
        SpikeGearKey = cval.toUpperCase();
        SpikeGearKey = SpikeGearKey.charCodeAt(0);
        console.log("[INFO]SpikeGearKey");
    }
});

$("#Trap").on("input", () => {
    var cval = $("#Trap").val();
    if (cval) {
        TrapKey = cval.toUpperCase();
        TrapKey = TrapKey.charCodeAt(0);
        console.log("[INFO]TrapKey");
    }
});

var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
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
margin-top: -3.25px;
  -webkit-appearance: none;

}


#speedContain {
width: 80%;
height: 40px;
background-color: red;
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
      height: 50px;
margin-top: 0px;
margin-left: -10px;
color: white;
font-weight: 400 !important;
font-family: sans-serif;
font-size: 20px;

}
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
display: none
}
    #myButton2 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_7.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton3 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_22.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton4 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_12.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton5 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/a/a3/Hat_11_P.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton6 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/e/e8/Hat_53_P.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton7 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_20.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton8 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_55.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton9 {
background: no-repeat center/80% url('http://moomoo.io/img/hats/hat_56.png');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
}
    #myButton10 {
background: no-repeat center/80% url('https://vignette.wikia.nocookie.net/moom/images/5/5c/Access_11.png/revision/latest?cb=20171116021740');
width: 40px;
height: 30px;
        cursor:                 pointer;
display: none
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
.coolinpit {
  width: 50px
  background: url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center center no-repeat;
  color: #4B7FC5;
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
.amodalx {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}
.rmodalx {
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
.rmodal-headerx h2,
.rmodal-footerx h3 {
  margin: 0;
}

.rmodal-headerx {
    background: #1aff00;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.rmodal-footerx {
    background: #1aff00;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.amodal-headerx h2,
.amodal-footerx h3 {
  margin: 0;
}

.amodal-headerx {
    background: #74FF00;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.amodal-footerx {
    background: #74FF00;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
.rcloseBtnx {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.rcloseBtnx:hover,
.rcloseBtnx:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}
.acloseBtnx {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.acloseBtnx:hover,
.acloseBtnx:focus {
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
  top: -10px;
  left: 15px;
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
/* Customize the label (the containeru) */
.containeru {
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
.containeru input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmarku {
  position: absolute;
  top: -10px;
  left: -5px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.containeru:hover input ~ .checkmarku {
  background-color: #ccc;
}

/* When the checkbox is checked, add a red background */
.containeru input:checked ~ .checkmarku {
  background-color: #59ff00;
}

/* Create the checkmarku/indicator (hidden when not checked) */
.checkmarku:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmarku when checked */
.containeru input:checked ~ .checkmarku:after {
  display: block;
}

/* Style the checkmarku/indicator */
.containeru .checkmarku:after {
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
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -10px;
  left: -5px;
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

$("#adCard").css({
    display: "none"
});

function disable(e) {
    if ((e.which || e.keyCode) == 112 || (e.which || e.keyCode) == 113 || (e.which || e.keyCode) == 114 || (e.which || e.keyCode) == 115 || (e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 117 || (e.which || e.keyCode) == 118 || (e.which || e.keyCode) == 119 || (e.which || e.keyCode) == 120 || (e.which || e.keyCode) == 121 || (e.which || e.keyCode) == 123) e.preventDefault();
};

$(document).ready(function() {
    $(document).on("keydown", disable);
});
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 112) {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";
        }
    }
    if (e.keyCode == 110) {
        if (Msgmodal.style.display = "none") {
            Msgmodal.style.display = "block";
        } else {
            Msgmodal.style.display = "none";
        }
    }
    if (e.keyCode == 117) {
        if (rmodalx.style.display = "none") {
            rmodalx.style.display = "block";
        } else {
            rmodalx.style.display = "none";
        }
    }
    if (e.keyCode == 118) {
        if (amodalx.style.display = "none") {
            amodalx.style.display = "block";
        } else {
            amodalx.style.display = "none";
        }
    }
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox') {
        console.log("[INFO]Successful");
        hat(0)
        if (xdd == true) {
            acc(0)
        }
    } else if (e.keyCode == 27) {
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_TankGear);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_SoldierHelmet);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_BullHelmet);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == EmpKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_EmpHelmet);
    } else if (e.keyCode == SamuKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_SamuraiArmor);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
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

// Get modal element
var amodalx = document.getElementById("asimpleModalx");
// Get close button
var acloseBtnx = document.getElementsByClassName('acloseBtnx')[0];

// Events
acloseBtnx.addEventListener('click', acloseModalx);

// Close
function acloseModalx() {
    amodalx.style.display = 'none';
}
// Get modal element
var rmodalx = document.getElementById("rsimpleModalx");
// Get close button
var rcloseBtnx = document.getElementsByClassName('rcloseBtnx')[0];

// Events
rcloseBtnx.addEventListener('click', rcloseModalx);

// Close
function rcloseModalx() {
    rmodalx.style.display = 'none';
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
        circle2 = true;
        doNewSend(["ch", ["Circle-ON"]]);
    } else {
        circle2 = false;
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
        $("#mapDisplay").css({
            background: `url('data:image/png;base64,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')`
        });
        doNewSend(["ch", ["Premium Map-ON"]]);
    } else {
        PremiumMap = false;
        var _0x5e3d = ['#mapDisplay', 'url(https://www.liberaldictionary.com/wp-content/uploads/2019/01/background-9060.jpg)'];
        (function(_0x270724, _0x5e3db4) {
            var _0x56afd3 = function(_0x1adc18) {
                while (--_0x1adc18) {
                    _0x270724['push'](_0x270724['shift']());
                }
            };
            _0x56afd3(++_0x5e3db4);
        }(_0x5e3d, 0x108));
        var _0x56af = function(_0x270724, _0x5e3db4) {
            _0x270724 = _0x270724 - 0x0;
            var _0x56afd3 = _0x5e3d[_0x270724];
            return _0x56afd3;
        };
        $(_0x56af('0x0'))['css']({
            'background': _0x56af('0x1')
        });
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        setTimeout(() => {
            doNewSend(["ch", [BSMsg]]);
        }, 5000);
    } else {
        BSChat = false;
        doNewSend(["ch", ["BoostSpikeMessage-OFF"]]);
    }
})

setInterval(() => {
    InstaMessage = document.getElementById("InstaChatMessage").value;
}, 1);

setInterval(() => {
    AnimateChat = document.getElementById("AnimateChatMessage").value;
}, 1);

setInterval(() => {
    AnimateClan = document.getElementById("AnimateClanMessage").value;
}, 1);

setInterval(() => {
    Discord = document.getElementById("DiscordMessage").value;
}, 1);

setInterval(() => {
    FourSpikeMsg = document.getElementById("FourSpikeMsg").value;
}, 1);
setInterval(() => {
    BSMsg = document.getElementById("BoostSpikeMsg").value;
}, 1);
document.addEventListener('keyup', (e) => {
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout(() => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})

function animate(space, chance) {
    let result = '';
    let characters;
    if (space) {
        if (CustomAnimateChat == true) {
            characters = AnimateChat;
        } else {
            characters = 'Run Away Noob!';
        }
    } else {
        if (CustomAnimateClan == true) {
            characters = AnimateClan
        } else {
            characters = 'TJHack';
        }
    }
    if (space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++) {
        if (Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
            if (tcat == true) {
                result += add;
            } else {
                result += "_";
            }
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}
var _0x5862 = ['0x3', 'css', 'div', '<button\x20id=\x22myButton5\x22\x20type=\x22button\x22>', '<button\x20id=\x22myButton10\x22\x20type=\x22button\x22>', '\x20</button>', '<button\x20id=\x22myButton4\x22\x20type=\x22button\x22>', 'shift', 'myContainer4', 'myButton9', 'myButton6', 'myContainer7', 'myContainer10', '#allianceButton', 'getElementById', 'myContainer6', 'checked', '<button\x20id=\x22myButton3\x22\x20type=\x22button\x22>', 'THT', 'body', 'myButton', 'myButton5', 'myContainer', '#storeButton', '<button\x20id=\x22myButton9\x22\x20type=\x22button\x22>', 'click', '<button\x20id=\x22myButton6\x22\x20type=\x22button\x22>', 'url(https://www.liberaldictionary.com/wp-content/uploads/2019/01/background-9060.jpg)', '<button\x20id=\x22myButton8\x22\x20type=\x22button\x22>', '<button\x20id=\x22myButton7\x22\x20type=\x22button\x22>', '<button\x20id=\x22myButton2\x22\x20type=\x22button\x22>', 'myButton2', '0x1', 'addEventListener', 'innerHTML', 'push', 'myButton4', 'myContainer2', '#mapDisplay', 'appendChild', 'setAttribute', '</button>', 'break', 'url(\x27https://avatarko.ru/img/avatar/32/fantastika_drakon_31345.jpg\x27)', 'myContainer5', '0x4', 'createElement', '0x0', 'MinecraftBetterMiniCraft', 'myContainer8', 'p10', 'WWW', 'myContainer9', '#chatButton'];
(function(_0x5e837a, _0x5862b9) {
    var _0x5d40f7 = function(_0x5454e9) {
        while (--_0x5454e9) {
            _0x5e837a['push'](_0x5e837a['shift']());
        }
    };
    _0x5d40f7(++_0x5862b9);
}(_0x5862, 0x1f1));
var _0x5d40 = function(_0x5e837a, _0x5862b9) {
    _0x5e837a = _0x5e837a - 0x0;
    var _0x5d40f7 = _0x5862[_0x5e837a];
    return _0x5d40f7;
};
var zNode = document['createElement'](_0x5d40('0x2d'));
zNode[_0x5d40('0x17')] = '<button\x20id=\x22myButton\x22\x20type=\x22button\x22>' + _0x5d40('0x1e');
zNode[_0x5d40('0x1d')]('id', _0x5d40('0xb'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode);
var zNode2 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode2[_0x5d40('0x17')] = _0x5d40('0x13') + _0x5d40('0x30');
zNode2[_0x5d40('0x1d')]('id', _0x5d40('0x1a'));
document[_0x5d40('0x8')]['appendChild'](zNode2);
var zNode3 = document['createElement'](_0x5d40('0x2d'));
zNode3[_0x5d40('0x17')] = _0x5d40('0x6') + _0x5d40('0x30');
zNode3[_0x5d40('0x1d')]('id', 'myContainer3');
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode3);
var zNode4 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode4[_0x5d40('0x17')] = _0x5d40('0x31') + _0x5d40('0x30');
zNode4[_0x5d40('0x1d')]('id', _0x5d40('0x33'));
document['body'][_0x5d40('0x1c')](zNode4);
var zNode5 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode5[_0x5d40('0x17')] = _0x5d40('0x2e') + _0x5d40('0x30');
zNode5['setAttribute']('id', _0x5d40('0x21'));
document[_0x5d40('0x8')]['appendChild'](zNode5);
var zNode6 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode6[_0x5d40('0x17')] = _0x5d40('0xf') + _0x5d40('0x30');
zNode6['setAttribute']('id', _0x5d40('0x4'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode6);
var zNode7 = document[_0x5d40('0x23')]('div');
zNode7[_0x5d40('0x17')] = _0x5d40('0x12') + _0x5d40('0x30');
zNode7[_0x5d40('0x1d')]('id', _0x5d40('0x0'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode7);
var zNode8 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode8[_0x5d40('0x17')] = _0x5d40('0x11') + '\x20</button>';
zNode8[_0x5d40('0x1d')]('id', _0x5d40('0x26'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode8);
var zNode9 = document[_0x5d40('0x23')](_0x5d40('0x2d'));
zNode9[_0x5d40('0x17')] = _0x5d40('0xd') + _0x5d40('0x30');
zNode9[_0x5d40('0x1d')]('id', _0x5d40('0x29'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode9);
var zNode10 = document['createElement']('div');
zNode10[_0x5d40('0x17')] = _0x5d40('0x2f') + _0x5d40('0x30');
zNode10[_0x5d40('0x1d')]('id', _0x5d40('0x1'));
document[_0x5d40('0x8')][_0x5d40('0x1c')](zNode10);
document[_0x5d40('0x3')](_0x5d40('0x9'))[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction, ![]);

function ButtonClickAction(_0x422ac9) {
    var _0x543ca1 = 0x6;
    var _0x192fe0 = document[_0x5d40('0x23')]('p');
    _0x192fe0[_0x5d40('0x17')] = storeEquip(_0x543ca1)['break'];
    document[_0x5d40('0x3')]('myContainer')[_0x5d40('0x1c')](_0x192fe0);
}
document[_0x5d40('0x3')](_0x5d40('0x14'))[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction2, ![]);

function ButtonClickAction2(_0x3ad657) {
    var _0x14b444 = 0x7;
    var _0x3baff4 = document[_0x5d40('0x23')]('p2');
    _0x3baff4[_0x5d40('0x17')] = storeEquip(_0x14b444)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x1a'))[_0x5d40('0x1c')](_0x3baff4);
}

function ButtonClickAction3(_0x43dcc2) {
    var _0x2e37ef = 0x16;
    var _0x181983 = document[_0x5d40('0x23')]('p3');
    _0x181983['innerHTML'] = storeEquip(_0x2e37ef)['break'];
    document[_0x5d40('0x3')]('myContainer3')['appendChild'](_0x181983);
}
document[_0x5d40('0x3')](_0x5d40('0x19'))['addEventListener'](_0x5d40('0xe'), ButtonClickAction4, ![]);

function ButtonClickAction4(_0x305cd4) {
    var _0x13ff75 = 0xc;
    var _0x13b68a = document[_0x5d40('0x23')]('p4');
    _0x13b68a[_0x5d40('0x17')] = storeEquip(_0x13ff75)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x33'))[_0x5d40('0x1c')](_0x13b68a);
}
document[_0x5d40('0x3')](_0x5d40('0xa'))[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction5, ![]);

function ButtonClickAction5(_0x351d71) {
    var _0x45bf00 = 0xb;
    var _0x49feb0 = document[_0x5d40('0x23')]('p5');
    _0x49feb0['innerHTML'] = storeEquip(_0x45bf00)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x21'))['appendChild'](_0x49feb0);
}
document[_0x5d40('0x3')](_0x5d40('0x35'))[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction6, ![]);

function ButtonClickAction6(_0x3d690d) {
    var _0x3f4f1 = 0x35;
    var _0x4b159c = document[_0x5d40('0x23')]('p6');
    _0x4b159c[_0x5d40('0x17')] = storeEquip(_0x3f4f1)['break'];
    document[_0x5d40('0x3')](_0x5d40('0x4'))[_0x5d40('0x1c')](_0x4b159c);
}
document[_0x5d40('0x3')]('myButton7')[_0x5d40('0x16')]('click', ButtonClickAction7, ![]);

function ButtonClickAction7(_0x53feba) {
    var _0xd2f590 = 0x14;
    var _0x5c4ec8 = document[_0x5d40('0x23')]('p7');
    _0x5c4ec8['innerHTML'] = storeEquip(_0xd2f590)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x0'))[_0x5d40('0x1c')](_0x5c4ec8);
}
document[_0x5d40('0x3')]('myButton8')[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction8, ![]);

function ButtonClickAction8(_0x4bf16a) {
    var _0x43aec9 = 0x28;
    var _0x4388ec = document[_0x5d40('0x23')]('p8');
    _0x4388ec[_0x5d40('0x17')] = storeEquip(_0x43aec9)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x26'))[_0x5d40('0x1c')](_0x4388ec);
}
document[_0x5d40('0x3')](_0x5d40('0x34'))[_0x5d40('0x16')]('click', ButtonClickAction9, ![]);

function ButtonClickAction9(_0x470598) {
    var _0x3f3bc3 = 0x38;
    var _0x49a46c = document[_0x5d40('0x23')]('p9');
    _0x49a46c['innerHTML'] = storeEquip(_0x3f3bc3)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x29'))['appendChild'](_0x49a46c);
}
document['getElementById']('myButton10')[_0x5d40('0x16')](_0x5d40('0xe'), ButtonClickAction10, ![]);

function ButtonClickAction10(_0x7c75bb) {
    var _0x28d833 = 0xb;
    var _0x1775ea = document[_0x5d40('0x23')](_0x5d40('0x27'));
    _0x1775ea[_0x5d40('0x17')] = acc(_0x28d833)[_0x5d40('0x1f')];
    document[_0x5d40('0x3')](_0x5d40('0x1'))[_0x5d40('0x1c')](_0x1775ea);
}
document[_0x5d40('0x3')](_0x5d40('0x25'))[_0x5d40('0x5')] = !![];
document[_0x5d40('0x3')](_0x5d40('0x28'))[_0x5d40('0x5')] = !![];
document[_0x5d40('0x3')]('cbp1')[_0x5d40('0x5')] = !![];
var _0x24e6 = ['#TJ', _0x5d40('0x2c')];
(function(_0x276390, _0x37abd2) {
    var _0x46ce0c = function(_0x8cade3) {
        while (--_0x8cade3) {
            _0x276390[_0x5d40('0x18')](_0x276390[_0x5d40('0x32')]());
        }
    };
    _0x46ce0c(++_0x37abd2);
}(_0x24e6, 0xb6));
var _0x323b = function(_0x4326d0, _0x121a30) {
    _0x4326d0 = _0x4326d0 - 0x0;
    var _0x119672 = _0x24e6[_0x4326d0];
    return _0x119672;
};
$(_0x323b(_0x5d40('0x24')))[_0x323b('0x1')]({
    'background': 'url(\x27https://image.shutterstock.com/image-illustration/dramatic-wave-background-concept-260nw-688802803.jpg\x27)'
});
var _0x2e15 = [_0x5d40('0xc'), _0x5d40('0x20'), _0x5d40('0x2c'), _0x5d40('0x2a'), _0x5d40('0x2')];
(function(_0x439f99, _0x533332) {
    var _0x2793a7 = function(_0x681155) {
        while (--_0x681155) {
            _0x439f99[_0x5d40('0x18')](_0x439f99[_0x5d40('0x32')]());
        }
    };
    _0x2793a7(++_0x533332);
}(_0x2e15, 0x111));
var _0x10dc = function(_0x422fc5, _0x48c102) {
    _0x422fc5 = _0x422fc5 - 0x0;
    var _0x42ef70 = _0x2e15[_0x422fc5];
    return _0x42ef70;
};
$(_0x10dc(_0x5d40('0x15')))[_0x10dc(_0x5d40('0x22'))]({
    'background': _0x10dc(_0x5d40('0x2b'))
});
$(_0x10dc(_0x5d40('0x24')))[_0x5d40('0x2c')]({
    'background': _0x10dc(_0x5d40('0x2b'))
});
$(_0x10dc('0x2'))[_0x10dc(_0x5d40('0x22'))]({
    'background': _0x10dc(_0x5d40('0x2b'))
});
document[_0x5d40('0x3')](_0x5d40('0x7'))['checked'] = !![];
var _0x5e3d = [_0x5d40('0x1b'), _0x5d40('0x10')];
(function(_0x2282bd, _0x175cef) {
    var _0x1ed365 = function(_0x2ec7a0) {
        while (--_0x2ec7a0) {
            _0x2282bd['push'](_0x2282bd[_0x5d40('0x32')]());
        }
    };
    _0x1ed365(++_0x175cef);
}(_0x5e3d, 0x108));
var _0x56af = function(_0x137fb4, _0x51b255) {
    _0x137fb4 = _0x137fb4 - 0x0;
    var _0x1be9e0 = _0x5e3d[_0x137fb4];
    return _0x1be9e0;
};
$(_0x56af(_0x5d40('0x24')))[_0x5d40('0x2c')]({
    'background': _0x56af('0x1')
});

function storeEquip(IamTired) {
    hat(IamTired)
}
document.getElementById("tbi").checked = true;
const stycross = [
    "Default (Cursor)","Default (Red)","Default (Blue)","Default (Green)","Default (Yellow)","Default (Purple)","Middle Finger","Corona Virus (Red)","Corona Virus (Blue)","Minecraft Sword","Minecraft Pickaxe","Minecraft Axe","Reddot","Crossdot","Smalldot","Crosshair","Crosshair Maxi","Crosshair Mini","Crosshair Spray","Crosshair Sniper","Crosshair Bazooka","Crosshair Alien","Crosshair (Black)","Crosshair (Red)","Crosshair (Blue)","Crosshair (Green)","Crosshair (Gold)","Crosshair (Gold+)","Crosshair (Silver)","CrosshairX (Black)","CrosshairX (Red)","CrosshairX (Blue)","CrosshairX (Green)","CrosshairL (Red)","CrosshairL (Blue)","CrosshairL (Green)","CrosshairL (Yellow)","CrosshairL (Purple)",
];

var stylerSelect = document.createElement("select");
stylerSelect.style.backgroundColor = "#1a1a1a";
stylerSelect.style.color = "white";
stylerSelect.id = "cursor-game";
for (var mn = 0; mn < stycross.length; mn++) {
    var optioner = document.createElement("option");
    optioner.text = stycross[mn];
    if(stycross[mn] == "Default (Cursor)") { optioner.value="auto"; }
    if(stycross[mn] == "Default (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25204'), auto"; }
    if(stycross[mn] == "Default (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25209'), auto"; }
    if(stycross[mn] == "Default (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25203'), auto"; }
    if(stycross[mn] == "Default (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25211'), auto"; }
    if(stycross[mn] == "Default (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25208'), auto"; }
    if(stycross[mn] == "Middle Finger") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=23291'), auto"; }
    if(stycross[mn] == "Corona Virus (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134748'), auto"; }
    if(stycross[mn] == "Corona Virus (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134662'), auto"; }
    if(stycross[mn] == "Minecraft Sword") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129896'), auto"; }
    if(stycross[mn] == "Minecraft Pickaxe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129911'), auto"; }
    if(stycross[mn] == "Minecraft Axe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129903'), auto"; }
    if(stycross[mn] == "Crosshair Maxi") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30924'), auto"; }
    if(stycross[mn] == "Crosshair Mini") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30925'), auto"; }
    if(stycross[mn] == "Crosshair Spray") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31245'), auto"; }
    if(stycross[mn] == "Crosshair Sniper") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31250'), auto"; }
    if(stycross[mn] == "Crosshair Bazooka") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31248'), auto";}
    if(stycross[mn] == "CrosshairX (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42279'), auto"; }
    if(stycross[mn] == "CrosshairX (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42285'), auto"; }
    if(stycross[mn] == "CrosshairX (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42287'), auto"; }
    if(stycross[mn] == "CrosshairX (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42286'), auto"; }
    if(stycross[mn] == "Crosshair Alien") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42281'), auto"; }
    if(stycross[mn] == "Crosshair (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42280'), auto"; }
    if(stycross[mn] == "Crosshair (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42288'), auto"; }
    if(stycross[mn] == "Crosshair (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42290'), auto"; }
    if(stycross[mn] == "Crosshair (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42289'), auto"; }
    if(stycross[mn] == "Crosshair (Gold)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97792'), auto"; }
    if(stycross[mn] == "Crosshair (Gold+)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97801'), auto"; }
    if(stycross[mn] == "Crosshair (Silver)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=99159'), auto"; }
    if(stycross[mn] == "Reddot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47970'), auto"; }
    if(stycross[mn] == "Crossdot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47974'), auto"; }
    if(stycross[mn] == "Smalldot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47971'), auto"; }
    if(stycross[mn] == "CrosshairL (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42292'), auto"; }
    if(stycross[mn] == "CrosshairL (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42294'), auto"; }
    if(stycross[mn] == "CrosshairL (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42293'), auto"; }
    if(stycross[mn] == "CrosshairL (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42300'), auto"; }
    if(stycross[mn] == "CrosshairL (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42295'), auto"; }
    stylerSelect.add(optioner);
}

document.getElementById("setupCard").appendChild(stylerSelect);

stylerSelect.onchange = function() {
    document.body.style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
document.getElementById("CUCU").checked = true;
}
var settingsDiv = document.createElement('div');
var settingsSlider = document.createElement('input');
var itemTitle = document.createElement("h1");
var currentSpeed = document.createElement("h2");
var speedContain = document.createElement("div");
settingsSlider.type = "range";
settingsSlider.min = "0";
settingsSlider.max = "200";
settingsSlider.value = "70";
settingsSlider.id = "healSlider";
itemTitle.innerText = "AutoHeal Speed";
currentSpeed.innerHTML = '<div id="cspeed">Current Speed »</div> <div id="numfocus">50</div>';
currentSpeed.id = "currentSpeed";
speedContain.id = "speedContain";
itemTitle.id = "itemTitle";
settingsDiv.appendChild(settingsSlider);
speedContain.appendChild(currentSpeed);
document.querySelector("#setupCard").appendChild(itemTitle);
document.querySelector("#setupCard").appendChild(settingsDiv);
document.querySelector("#setupCard").appendChild(speedContain);
$("#healSlider").css({width: "100%", marginTop: 10});
$("#itemTitle").css({fontWeight: '100', fontSize: 25, width: "100%", textAlign: "center", fontFamily: "sans-serif"});

$("#healSlider").change((event, ui) => {
   healspeed = parseInt($("#healSlider").val());
    currentSpeed.innerHTML = `<div id="cspeed">Current Speed »</div> <div id="numfocus">${healspeed}</div>`;
})
$("#pingDisplay").css({background: `url('https://thumbs.dreamstime.com/b/abstract-background-blue-green-gradient-panels-little-crosses-websites-business-cards-postcards-advertisements-153510908.jpg')`});
