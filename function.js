//CONFIG
console.log('Origine is connected');

function app(choreographer, react, vue, angular, D3, dojo, anime, AOS, chart, bootstrapp) {
	if (choreographer == 1) {
		include("https://cdn.jsdelivr.net/gh/christinecha/choreographer-js@01694a9ab50e69f7d459b3ca2d9a5f6e4c56c776/index.js");
	}
	if (react == 1) {
		include("https://unpkg.com/react-dom@16/umd/react-dom.development.js");
		include("https://unpkg.com/react@16/umd/react.development.js");
	}

	if (vue == 1) {
		include("https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js");
	}

	if (angular == 1) {
		include("https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js");
	}

	if (D3 == 1) {
		include("https://d3js.org/d3.v7.min.js");
	}

	if (dojo == 1) {
		include("https://ajax.googleapis.com/ajax/libs/dojo/1.14.1/dojo/dojo.js");
	}

	if (anime == 1) {
		include("https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js");
	}

	if (AOS == 1) {
		include("https://unpkg.com/aos@2.3.1/dist/aos.js");
		document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<link rel='stylesheet' type='text/css' href='https://unpkg.com/aos@2.3.1/dist/aos.css' />";
	}

	if (chart == 1) {
		include("https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js");
	}

	if (bootstrapp == 1) {
		include("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");
		document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' />";
	}
}

//FUNCTION

// USEFUL SIMPLE FUNCTION

async function wait(Ms, FuncToExe, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
	await new Promise(resolve => setTimeout(resolve, Ms));
	if (FuncToExe == "" || FuncToExe == null) {} else {
		arguments[1](arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
	}
}

function repeat(NumRepeat, FuncToExe, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
	for (let i = 0; i < NumRepeat; i++) {
		window[FuncToExe](arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
	}
}

function get(url) {
	fetch(url)
		.then(function(reponse) {
			if (reponse.ok) {
				return reponse.json();
			}
		}).then(function(value) {
			console.log(value);
		}).catch(function(err) {
			return "erreur"
		});
}

function copy(ToCopy, Mess) {
	navigator.clipboard.writeText(ToCopy).then(function() {
		if (Mess != undefined) {
			alert(Mess);
		}
	}, function() {
		console.log('Error: impossible de copier le text');
	});
}

function select() {
	return window.getSelection().toString()
}

function key(arg) {
	if (arg = 'info') {
		return {
			'supp(au dessus de entrer)':8,
			'tab':9,
			'entrer':13,
			'maj':16,
			'ctrl':17,
			'alt gr':18,
			'maj automatique':20,
			'echap':27,
			'espace':32,
			'fleche gauche':37,
			'fleche haut':38,
			'fleche droite':39,
			'fleche bas':40,
			'suppr':46,
			'0':48,
			'1':49,
			'2':50,
			'3':51,
			'4':52,
			'5':53,
			'6':54,
			'7':55,
			'8':56,
			'9':57,
			'a':65,
			'b':66,
			'c':67,
			'd':68,
			'e':69,
			'f':70,
			'g':71,
			'h':72,
			'i':73,
			'j':74,
			'k':75,
			'l':76,
			'm':77,
			'n':78,
			'o':79,
			'p':80,
			'q':81,
			'r':82,
			's':83,
			't':84,
			'u':85,
			'v':86,
			'w':87,
			'x':88,
			'y':89,
			'z':90,
			'window':91,
			'menu': 93,
			'f1':112,
			'f2':113,
			'f3':114,
			'f4':115,
			'f5':116,
			'f6':117,
			'f7':118,
			'f8':119,
			'f9':120,
			'f10':121,
			'f11':122,
			'f12':123,
			'£':186,
			'+':187,
			'?':188,
			'.':190,
			'':191,
			'%':192,
			'µ':220,
			'¨':221,
			'²':222,
			'§':223,

		}
	} else {
		return event.keyCode;
	}
}

function date() {
	var heure = new Date();
	return date = {
		'year': heure.getFullYear(),
		'month': heure.getMonth(),
		'day': heure.getDay(),
		'hour': heure.getHours(),
		'minute': heure.getMinutes(),
		'second': heure.getSeconds(),
		'GMT': heure.toGMTString()
	};
}

function include(file) {
	file = file.replace('https://github.com/', 'https://cdn.jsdelivr.net/gh/')
	file = file.replace('/blob/', '@')
	return file
	$.getScript(file);
}

// MODIFY YOUR PAGE

function addid(Id, NewContent) {
	document.getElementById(Id).innerHTML = document.getElementById(Id).innerHTML + NewContent;
}

function delid(Id) {
	document.getElementById(Id).innerHTML = " ";
}

function modid(Id, NewContent) {
	document.getElementById(Id).innerHTML = NewContent;
}

function addclass(clas, num, NewContent) {
	document.getElementsByClassName(clas)[num].innerHTML = document.getElementById(Id).innerHTML + NewContent;
}

function delclass(clas, num) {
	document.getElementsByClassName(clas)[num].innerHTML = " ";
}

function modclass(clas, num, NewContent) {
	document.getElementsByClassName(clas)[num].innerHTML = NewContent;
}

function addtag(tag, num, NewContent) {
	document.getElementsByTagName(tag)[num].innerHTML = document.getElementById(Id).innerHTML + NewContent;
}

function deltag(tag, num) {
	document.getElementsByTagName(tag)[num].innerHTML = " ";
}

function modtag(tag, num, NewContent) {
	document.getElementsByTagName(tag)[num].innerHTML = NewContent;
}

function stylehtml(style_css) {
	document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<style type='text/css'>" + style_css + "</style>";
}

function ID(id) {
	return document.getElementById(id);
}

function CLASS(clas) {
	return document.getElementsByClassName(clas);
}

function NAME(name) {
	return document.getElementsByTagName(name);
}

// NUMERICS

function random(NumMin, NumMax) {
	return Math.floor(Math.random() * (NumMax - NumMin_or_NumToRound + 1));
}

function round(number) {
	return Math.floor(number);
}

function isnumeric(number) {
	num = "'" + number + "'";
	if(Number.isInteger(Math.floor(num))) {
		return true;
	} else {
		return false;
	}
}

// scroll, go to any place in your page

async function autoscroll(Ms, Px) {
	if (Math.round(arguments[1]) == 0) arguments[1] = 1;
	if (arguments[1] > 100) arguments[1] = 100;
	if (arguments[0] > 100) arguments[0] = 100;
 	scrolling = window.scrollY + Px;
	window.scroll({top: scrolling, behavior: 'smooth'});
	if (scrolling != window.scrollY) {} else {
		await wait(arguments[0], 'autoscroll', arguments[0], arguments[1]);
	}
}

function howscroll() {
	return {'X': window.scrollX, 'Y': window.scrollY};
}

function goto(at) {
	url = document.location.href;
	PerfUrl = url.split('#');
	if (at.includes('#') == true) {
		console.log('true');
		redirection(PerfUrl[0] + at);
	} else {
		console.log('false');
		redirection(PerfUrl[0] + '#' + at);
	}
}

function gototop() {
	url = window.location.href.split('#');
	redirection(url[0] + '#');
}

// OPEN OTHER PAGE

function redirection(Url) {
	window.location.href = Url;
}

function news(content) {
	var w = window.open();
	w.document.open();
	w.document.write(content);
	w.document.close();
}

function ALLCLASS(clas) {
	restedesclass = true;
	classnum = 0;
	num = null;
	while (restedesclass == true) {
		z = document.getElementsByClassName(clas)[y]
		if (z != undefined)  {
			num = num + ',' + classnum;
			console.log(num);
			y = y + 1;
		} else {
			restedesclass = false;
		}
	}
	console.log(document.getElementsByClassName(clas)[num]);
}
