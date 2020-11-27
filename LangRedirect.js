// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.microsoft.com/*
// @grant        none
// ==/UserScript==


function RedirectToLocation() {
    var DesiredLanguage = "/en-us/";
    var CurrentAddress = window.location.href;
    if(CurrentAddress.search(DesiredLanguage) === -1)
    {
        var Regex = /\/..-..\//g;
        var UsAddress = CurrentAddress.replace(Regex, DesiredLanguage);
        window.location.replace(UsAddress);
    }
}

RedirectToLocation();