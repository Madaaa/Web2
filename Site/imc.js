function show() {
	g = document.getElementById("g").value;
	h = document.getElementById("h").value;
	icm = g/(h*h);
	document.getElementById("rezultat").innerHTML = "IMC = " + Number(icm.toString().match(/^\d+(?:\.\d{0,2})?/));
}

$(function() {
$( document ).tooltip();
});

