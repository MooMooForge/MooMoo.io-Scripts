// ==UserScript==
// @name Anti Spacebar Scroll [Sploop.io, Moomoo.io]
// @author Murka
// @description Removes scrolling when pressing spacebar
// @icon https://i.imgur.com/RigUeNF.png
// @version 0.2
// @match *://sploop.io/*
// @match *://moomoo.io/*
// @match *://*.moomoo.io/*
// @run-at document-start
// @grant none
// @license MIT
// @namespace https://greasyfork.org/users/919633
// ==/UserScript==
/* jshint esversion:6 */

/*
    Author: Murka
    Github: https://github.com/Murka007
    Discord: https://discord.gg/sG9cyfGPj5
    Greasyfork: https://greasyfork.org/en/users/919633
    MooMooForge: https://github.com/MooMooForge
*/

(function() {
    "use strict";

    const log = console.log;
    function isInput() {
        const element = document.activeElement;
        return ["TEXTAREA", "INPUT"].includes(element.tagName);
    }

    window.addEventListener("keydown", function(event) {
        if (event.code === "Space" && !isInput()) {
            event.preventDefault();
        }
    })

})();