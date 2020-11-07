// ==UserScript==
// @name         Bing Wallpaper Downloader
// @namespace    https://www.bing.com
// @version      20201107
// @description  try to take over the world!
// @author       You
// @match        https://www.bing.com/*
// @grant        none
// ==/UserScript==

function updateUrl() {
    let bg = window.getComputedStyle(document.getElementsByClassName('img_cont')[0]).getPropertyValue('background-image');
    let bg_url = bg.substring('url("'.length, bg.indexOf('jpg') + 3);
    let bg_file = bg.substring(bg.indexOf('id=OHR.')+"id=OHR.".length, bg.indexOf('jpg') + 3);

    let download_link = document.querySelector('ul.share li:last-child a');
    download_link.setAttribute('href', bg_url);
    download_link.setAttribute('download', bg_file);
}

(function() {
    'use strict';

    let targetNode = document.getElementsByClassName('img_cont')[0];
    let config = {
        attributes: true
    };

    let callback = function (mutationsList) {
        updateUrl();
    };
    let observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    window.addEventListener('load', function (){
        updateUrl();
    });
})();