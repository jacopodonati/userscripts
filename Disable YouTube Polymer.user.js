// ==UserScript==
// @name     Disable YouTube Polymer
// @match    *://*.youtube.com/*
// @run-at   document-start
// @grant    none
// ==/UserScript==

var url = new URL(window.location);

if (url.searchParams.has("disable_polymer") !== true) {
	url.searchParams.append("disable_polymer", "true");
  window.location.replace(url.href);
}