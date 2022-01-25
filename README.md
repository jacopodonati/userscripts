# userscripts

These are some userscripts to use with Greasemonkey, Tampermonkey, or similar extensions.  If you're on a Mac and use Safari, I recommend [Userscripts](https://apps.apple.com/it/app/userscripts/id1463298887?mt=12), which is great, free, and ad-free.

I can't say these scripts are all tested, and it's very likely you'll have to make small changes to make them work in your extension of choice.  Also, they're prone to break the first time the website gets updated.  I can assure the script worked when it was last updated, but nothing more.  Usually, however, is just a matter of changing a CSS class name.

## Bing Downloader
_last update 2020-11-26_

Bing has some pretty wallpapers, but the ones you can download are watermarked.  This script changes the link to download the wallpaper to the image currently displayed.

It's not really different from what you can do with [jacopodonati/img-dl](https://github.com/jacopodonati/img-dl).

### Changelog

- 2020-11-26: now it downloads a UHD version of the image instead of a full HD.


## Clean Twitter

There are a lot of small things I don't like in my Twitter feed, and the biggest of them all is ads.


## Disable YouTube Polymer
_last update 2020-11-06_

~~Disable YouTube Polymer adds a `?disable_polymer=true` at the end of every YouTube URLs.  How long will it last before Google decides to break everything?  God only knows.~~

As of late 2020, Google killed it.  We're stuck with Polymer.


## Old Reddit
_last update 2020-05-21_

Similar to the YouTube script, this changes every Reddit URLs so `reddit.com` becomes `old.reddit.com`.  That's because the new Reddit sucks.


## Sensible Instagram
_last update 2020-11-06_

Do you know another website that sucks?  Instagram.  Now, when you're not logged in and are scrolling through a profile, it will block everything with a hideous modal asking you to log in.  I'm not, Instagram, get over it.  This script removes the modal and re-enable scrolling.  It will probably be the most updated script since the people working for Instagram are mad lads and like to change CSS classes.
