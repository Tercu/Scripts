// ==UserScript==
// @name         LangRedirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script redirects docs.microsoft.com from any localisation language to selected in DesiredLanguage variable.
// @author       Tercu
// @updateURL    https://github.com/Tercu/Scripts/blob/main/LangRedirect.user.js
// @downloadURL  https://github.com/Tercu/Scripts/blob/main/LangRedirect.user.js
// @match        https://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

// there is need for this script because default behavior for Microsoft site is to translate documentation to language
// in your location (probably based on IP address) and most of the time there is no switch to turn off translation.
// I want to read documentation in english, not in my native language with poor quality translation.
'use strict';
function RedirectToLocation() {
    var DesiredLanguage = "/en-us/";
    var CurrentAddress = window.location.href;
    if (CurrentAddress.search(DesiredLanguage) === -1) {
        var Regex = /\/..-..\//g;
        var UsAddress = CurrentAddress.replace(Regex, DesiredLanguage);
        window.location.replace(UsAddress);
    }
}

RedirectToLocation();
