
var img=new Image(); img.src="https://i.imgur.com/w2rxs8n.png";
var img=new Image(); img.src="https://i.imgur.com/UIbAPwh.png";
var img=new Image(); img.src="https://i.imgur.com/palZgtc.png";
var img=new Image(); img.src="https://i.imgur.com/R221GgG.png";
var img=new Image(); img.src="https://i.imgur.com/X9qbC1W.png";

//pt "expires ..."
var d = new Date();
d.setDate(d.getDate());
if (d.getDay()!=0) d.setDate(d.getDate()+7-d.getDay());
var date = d.getDate(); if (date<10) date="0"+date;
var month = d.getMonth()+1; if (month<10) month="0"+month;
document.getElementById("expDate").innerHTML = "Expires "+d.getFullYear()+"-"+month+"-"+date;

//pt animatia gif
var d = new Date();
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var date = d.getDate(); if (date<10) date="0"+date;
document.getElementById("redeemGifDate").innerHTML = date;
document.getElementById("redeemGifMonth").innerHTML = months[d.getMonth()];

var itemNr=0, redeemVec=[0,0,0];

function menu() {
	itemNr=0;
	//menu
	document.getElementById("menu").style.visibility="visible";
	document.getElementById("menu").style.position="absolute";
	document.getElementById("stabilSusMenu").style.visibility="visible";
	document.getElementById("bigMacButton").style.visibility="visible";
	document.getElementById("mcSundaeButton").style.visibility="visible";
	//item
	document.getElementById("bigMacMiscare").style.visibility="hidden";
	document.getElementById("expDate").style.visibility="hidden";
	document.getElementById("redeemGif").style.visibility="hidden";
	document.getElementById("redeemGifDate").style.visibility="hidden";
	document.getElementById("redeemGifMonth").style.visibility="hidden";
	document.getElementById("timeLeft").style.visibility="hidden";
	document.getElementById("bigMacStabilSus").style.visibility="hidden";
	document.getElementById("back").style.visibility="hidden";
	document.getElementById("dots").style.visibility="hidden";
	document.getElementById("bigMacStabilJos").style.visibility="hidden";
}
function item() {
	//menu
	document.getElementById("menu").style.visibility="hidden";
	document.getElementById("menu").style.position="fixed";
	document.getElementById("stabilSusMenu").style.visibility="hidden";
	document.getElementById("bigMacButton").style.visibility="hidden";
	document.getElementById("mcSundaeButton").style.visibility="hidden";
	//item
	document.getElementById("bigMacMiscare").style.visibility="visible";
	document.getElementById("expDate").style.visibility="visible";
	document.getElementById("bigMacStabilSus").style.visibility="visible";
	document.getElementById("back").style.visibility="visible";
	document.getElementById("dots").style.visibility="visible";
	document.getElementById("bigMacStabilJos").style.visibility="visible";
	if (redeemVec[itemNr]==1) {
		document.getElementById("redeemGif").style.visibility="visible";
		document.getElementById("redeemGifDate").style.visibility="visible";
		document.getElementById("redeemGifMonth").style.visibility="visible";
		document.getElementById("timeLeft").style.visibility="visible";
		if (itemNr==1) document.getElementById("bigMacStabilJos").src="https://i.imgur.com/pnARy1L.png";
		else if (itemNr==2) document.getElementById("bigMacStabilJos").src="https://i.imgur.com/O2FZr1e.png";
	}
}
function bigMac() {
	itemNr=1;
	document.getElementById("bigMacMiscare").src="https://i.imgur.com/5VzxbnP.png";
	document.getElementById("bigMacStabilSus").src="https://i.imgur.com/DlGMMaE.png";
	document.getElementById("back").src="https://i.imgur.com/DkhKxGE.png";
	document.getElementById("dots").src="https://i.imgur.com/JRX0JmU.png";
	document.getElementById("bigMacStabilJos").src="https://i.imgur.com/uLUMvw0.png";
	document.getElementById("expDate").style="position:absolute; top:63.5%; left:4.5%; font-family: arial; font-size:14px; opacity:0.3; visibility:visible;"
	item();
}
function mcSundae() {
	itemNr=2;
	document.getElementById("bigMacMiscare").src="https://i.imgur.com/w2rxs8n.png";
	document.getElementById("bigMacStabilSus").src="https://i.imgur.com/UIbAPwh.png";
	document.getElementById("back").src="https://i.imgur.com/palZgtc.png";
	document.getElementById("dots").src="https://i.imgur.com/R221GgG.png";
	document.getElementById("bigMacStabilJos").src="https://i.imgur.com/X9qbC1W.png";
	document.getElementById("expDate").style="position:absolute; top:58.6%; left:4.6%; font-family: arial; font-size:14px; opacity:0.3; color: white; visibility:visible;"
	item();
}

function loop1minute(){


	var hour = d.getHours(); if (hour<10) hour="0"+hour;
	var minute = d.getMinutes(); if (minute<10) minute="0"+minute;
	document.getElementById("currentTime").innerHTML = hour+":"+minute;
	setTimeout(loop1minute, 60*1000);

}
loop1minute();

var timeLeft=599;
function loop1second(){

	if (timeLeft>=1) {
		if ((timeLeft-parseInt(timeLeft/60)*60)<10) document.getElementById("timeLeft").innerHTML = "0"+parseInt(timeLeft/60)+":0"+(timeLeft-parseInt(timeLeft/60)*60);
		else document.getElementById("timeLeft").innerHTML = "0"+parseInt(timeLeft/60)+":"+(timeLeft-parseInt(timeLeft/60)*60);
		timeLeft--;
		setTimeout(loop1second, 1*1000);

	}
}

var fullscreenVar=0;
document.onfullscreenchange = function () {
	fullscreenVar++; fullscreenVar%=2;
	if (fullscreenVar==0) location.reload();
};

function fullscreen() {
	document.documentElement.requestFullscreen();
	document.getElementById("buttonFullscreen").style.visibility="hidden";
	document.getElementById("buttonFullscreen").style.position="fixed";
}
function openRedeem10() {
	if (redeemVec[itemNr]==0) {
		document.getElementById("redeem10dialog").style.visibility="visible";
		document.getElementById("redeem10button").style.visibility="visible";
		document.getElementById("grayShade").style.visibility="visible";
		document.getElementById("bigMacMiscare").style.position="fixed";
	}
}
function closeRedeem10() {
	document.getElementById("redeem10dialog").style.visibility="hidden";
	document.getElementById("redeem10button").style.visibility="hidden";
	document.getElementById("grayShade").style.visibility="hidden";
	document.getElementById("bigMacMiscare").style.position="absolute";
}
function redeem() {
	redeemVec[itemNr]=1;
	if (itemNr==1) document.getElementById("bigMacStabilJos").src="https://i.imgur.com/82JGBXn.png";
	else if (itemNr==2) document.getElementById("bigMacStabilJos").src="https://i.imgur.com/O2FZr1e.png";
	closeRedeem10();
	document.getElementById("timeLeft").style.visibility="visible";
	if (timeLeft==599) loop1second();
	document.getElementById("redeemGif").style.visibility="visible";
	document.getElementById("redeemGifDate").style.visibility="visible";
	document.getElementById("redeemGifMonth").style.visibility="visible";
}
