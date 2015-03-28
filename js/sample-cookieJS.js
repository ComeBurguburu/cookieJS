"use strict";
function display_cookies() {
	var cookie, cookies = getCookies();
	document.getElementById("cookies").innerHTML = "";
	for (cookie in cookies) {
		document.getElementById("cookies").innerHTML += cookie + " = " + cookies[cookie] + "<br/>\n";
	}

}
document.getElementById("cookname").onchange = function (event) {
	if (event.target.value !== "") {
		addCookie(event.target.value);
	}
	display_cookies();
};
display_cookies();
