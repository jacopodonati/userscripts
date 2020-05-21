// ==UserScript==
// @name     Old Reddit
// @match    *://*.reddit.com/*
// @run-at   document-start
// @grant    none
// ==/UserScript==

const old_reddit = "old.reddit.com";
var url = new URL(window.location);

if (url.hostname !== old_reddit) {
	url.hostname = old_reddit;
  window.location.replace(url.href);
}