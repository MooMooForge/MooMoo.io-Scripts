// ==UserScript==
// @name         MooMoo.io Name replacer
// @version      1.2
// @description  creates bots moving to you
// @author       Nuro
// @match        *://*.moomoo.io/*
// @run-at       document-end
// @grant        none
// @namespace    https://greasyfork.org/users/761829
// @require      https://greasyfork.org/scripts/456235-moomoo-js/code/MooMoojs.js?version=1144738
// ==/UserScript==

/*
Support us on social media (follow and leave a star)

GitHub: https://moomooforge.github.io/MooMoo.js/
Author: https://github.com/NuroC
YouTube: https://www.youtube.com/@nuro9607
Discord: https://discord.gg/NMS3YR9Q5R

*/

let originalName = "Nuro ♫"; // this name will the name that appears instead of `nameToReplace`
let nameToReplace = "Nuro"; // this is the name that will be replaced by `originalName`

const MooMoo = (function MooMooJS_beta() {})[69]

const PacketInterceptor = MooMoo.PacketInterceptor;
const msgpack = MooMoo.msgpack;

PacketInterceptor.addCallback("server", (packet) => {
    let decoded = msgpack.decode(packet);

    let [packetType, [...packetData]] = decoded;

    if (packetType == "2") {
        let playerData = packetData[0]
        let name = playerData[2]
        if (name == nameToReplace) {
            playerData[2] = originalName;
        }
        packetData[0] = playerData;
    }
    return msgpack.encode([packetType, packetData])
});
