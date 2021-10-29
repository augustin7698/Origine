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

function key(event) {
	if (event == 'info') {
		return {
			8: 'supp(au dessus de entrer)',
			9: 'tab',
			13: 'entrer',
			16: 'maj',
			17: 'ctrl',
			18: 'alt gr',
			19: 'maj automatique',
			27: 'echap',
			32: 'espace',
			33: 'heut de la page',
			34: 'bas de la page',
			35: 'fin',
			36: 'flèche digonal haut/gauche',
			37: 'fleche gauche',
			38: 'fleche haut',
			39: 'fleche droite',
			40: 'fleche bas',
			45: 'insér.',
			46: 'suppr.',
			48: '0',
			49: '1',
			50: '2',
			51: '3',
			52: '4',
			53: '5',
			54: '6',
			55: '7',
			56: '8',
			57: '9',
			65: 'a',
			66: 'b',
			67: 'c',
			68: 'd',
			69: 'e',
			70: 'f',
			71: 'g',
			72: 'h',
			73: 'i',
			74: 'j',
			75: 'k',
			76: 'l',
			77: 'm',
			78: 'n',
			79: 'o',
			80: 'p',
			81: 'q',
			82: 'r',
			83: 's',
			84: 't',
			85: 'u',
			86: 'v',
			87: 'w',
			88: 'x',
			89: 'y',
			90: 'z',
			91: 'window',
			93: 'menu',
			112: 'f1',
			113: 'f2',
			114: 'f3',
			115: 'f4',
			116: 'f5',
			117: 'f6',
			118: 'f7',
			119: 'f8',
			120: 'f9',
			121: 'f10',
			122: 'f11',
			123: 'f12',
			173: 'couper le son',
			174: 'son -',
			175: 'son +',
			179: 'play/pause',
			186: '£',
			187: '+',
			188: '?',
			190: '.',
			191: '/',
			192: '%',
			220: 'µ',
			221: '¨',
			222: '²',
			223: '§',
			226: '<'
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
