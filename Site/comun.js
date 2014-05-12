

var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;


function mopen(id)
{
	//mcancelclosetime();
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}

function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// imi inchide drop down menu dupa timeout milisecunde
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout); //imi executa mclose dupa timeout milisecunde
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}


window.onload = myMain;

function myMain() {
	document.onclick = mclose;

	document.getElementById('a2').onmouseover = function() {
		mopen('m2');
	}
	document.getElementById('a2').onmouseout = function() {
		mclosetime();
	}
	document.getElementById('m2').onmouseover = function() {
		mcancelclosetime();

	}

	document.getElementById('m2').onmouseout = function() {
			mclosetime();
	}

	document.getElementById("b").onclick = function() {
		show();
	}

}