// ==UserScript==
// @name      Sensible Instagram
// @version   20201106
// @grant     none
// @namespace https://www.instagram.com
// @include   https://www.instagram.com/*
// ==/UserScript==

window.addEventListener('load', function() {
	document.getElementsByTagName('nav')[0].style.display = 'none';  
}, false);

let target = document.querySelector('body');
let observer = new MutationObserver(function(mutation) {
	document.getElementsByTagName('body')[0].style.overflow = 'auto';
    document.getElementsByClassName('RnEpo')[0].style.display = 'none';
});

let config = {
    attributes: true
};

observer.observe(target, config);