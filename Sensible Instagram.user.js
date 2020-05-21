// ==UserScript==
// @name      Sensible Instagram
// @version   1
// @grant     none
// @namespace https://www.instagram.com
// @include   https://www.instagram.com
// ==/UserScript==

window.addEventListener('load', function() {
	document.getElementsByTagName('nav')[0].style.display = 'none';  
}, false);

var target = document.querySelector('body');
observer = new MutationObserver(function(mutation) {
	document.getElementsByTagName('body')[0].style.overflow = 'auto';
  document.getElementsByClassName('_Yhr4')[0].style.display = 'none';
});

config = {
    attributes: true
};

observer.observe(target, config);