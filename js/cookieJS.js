"use strict";
function getCookies() {
	var cookies = {};
	document.cookie.split(";").map(function (a) { var tab = a.split("="); cookies[tab[0]] = tab[1]; });
	return cookies;
}
function getCookie(sName) {
	var cookContent = document.cookie, cookEnd, i, j, c;
	
	sName += "=";
	for (i = 0, c = cookContent.length; i < c; i += 1) {
		j = i + sName.length;
		if (cookContent.substring(i, j) === sName) {
			cookEnd = cookContent.indexOf(";", j);
			if (cookEnd === -1) {
				cookEnd = cookContent.length;
			}
			return decodeURIComponent(cookContent.substring(j, cookEnd));
		}
	}
	return undefined;
}
function setCookie(sKey, sValue) {
	var i, today = new Date(), expires = new Date();
	i = document.cookie.split("=").length;
	expires.setTime(today.getTime() + (365 * 24 * 60 * 60 * 1000));
	document.cookie = sKey + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}
function addCookie(sValue) {
	var n = document.cookie.split("=").length + 1;
	setCookie('cookie' + n, sValue);
}
function eraseCookie(sName) {
	var expires = new Date();
	expires.setTime(0);
	document.cookie = sName + "=" + encodeURIComponent('') + ";expires=" + expires.toGMTString();
}