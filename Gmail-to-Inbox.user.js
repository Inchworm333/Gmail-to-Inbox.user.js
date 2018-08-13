// ==UserScript==
// @name         Gmail to Inbox
// @namespace    https://github.com/Inchworm333
// @version      0.1
// @description  Change the Gmail button back to Inbox (thanks google for removing that)
// @author       Inchworm333
// @license      MIT
// @match        https://www.google.com
// @match        https://www.google.com/webhp?authuser=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var gmailButton = document.querySelectorAll('[data-pid="23"]')[0];

    var gmailURL = new URL(gmailButton.href);

    gmailButton.href = 'https://inbox.google.com/u/' + gmailURL.searchParams.get("authuser");

    gmailButton.text = "Inbox";

})();
