//CONFIGURATION
console.log('Origine is connected');

//FUNCTION

// USEFUL SIMPLE FUNCTION

async function wait(Ms, FuncToExe, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
	await new Promise(resolve => setTimeout(resolve, Ms));
	if (FuncToExe != "" && FuncToExe != null && FuncToExe != undefined) {
		eval(arguments[1] + '(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ',' + arg5 + ',' + arg6 + ',' + arg7 + ',' + arg8 + ',' + arg9 + ',' + arg10 + ')');
	}
}

function copy(ToCopy, alertMessage) {
	navigator.clipboard.writeText(ToCopy).then(function() {
		if (alertMessage != undefined) {
			alert(alertMessage);
		}
	}, function() {
		console.log('Error: document is no focused');
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
	date = new Date();
	return {
		'year': date.getFullYear(),
		'month': date.getMonth(),
		'day': date.getDay(),
		'hour': date.getHours(),
		'minut': date.getMinutes(),
		'second': date.getSeconds(),
		'GMT': date.toGMTString()
	};
}

function include(fileLink) {
	fileLink = fileLink.replace('https://github.com/', 'https://cdn.jsdelivr.net/gh/');
	fileLink = fileLink.replace('/blob/', '@');
	$.getScript(fileLink);
	return fileLink
}

// MODIFY YOUR PAGE

function add(className_or_tagName_or_Id, content, num) {
	finit = false;
	if (className_or_tagName_or_Id.search("#") == 0) {
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('#', '');
		document.getElementById(className_or_tagName_or_Id).innerHTML = document.getElementById(className_or_tagName_or_Id).innerHTML + content;
		finit = true;
	}
	if (className_or_tagName_or_Id.search(/[.]/g) == 0 && finit == false) {
		finit = true;
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('.', '');
		if (num != undefined) {
			document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML + content;
		} else {
			num = 0;
			while (document.getElementsByClassName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML + content;
			}
		}
	}
	if (finit == false) {
		if (num != undefined) {
			document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML + content;
		} else {
			num = 0;
			while (document.getElementsByTagName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML + content;
			}
		}
	}
}

function mod(className_or_tagName_or_Id, content, num) {
	finit = false;
	if (className_or_tagName_or_Id.search("#") == 0) {
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('#', '');
		document.getElementById(className_or_tagName_or_Id).innerHTML = content;
		finit = true;
	}
	if (className_or_tagName_or_Id.search(/[.]/g) == 0 && finit == false) {
		finit = true;
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('.', '');
		if (num != undefined) {
			document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = content;
		} else {
			num = 0;
			while (document.getElementsByClassName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = content;
			}
		}
	}
	if (finit == false) {
		if (num != undefined) {
			document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = content;
		} else {
			num = 0;
			while (document.getElementsByTagName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = content;
			}
		}
	}
}

function del(className_or_tagName_or_Id, num) {
	finit = false;
	if (className_or_tagName_or_Id.search("#") == 0) {
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('#', '');
		document.getElementById(className_or_tagName_or_Id).innerHTML = null;
		finit = true;
	}
	if (className_or_tagName_or_Id.search(/[.]/g) == 0 && finit == false) {
		finit = true;
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace('.', '');
		if (num != undefined) {
			document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = null;
		} else {
			num = 0;
			while (document.getElementsByClassName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByClassName(className_or_tagName_or_Id)[num].innerHTML = null;
			}
		}
	}
	if (finit == false) {
		if (num != undefined) {
			document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = null;
		} else {
			num = 0;
			while (document.getElementsByTagName(className_or_tagName_or_Id)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByTagName(className_or_tagName_or_Id)[num].innerHTML = null;
			}
		}
	}
}

function effectif(className_or_tagName_or_Id) {
	numéro = 0;
	if (className_or_tagName_or_Id.search(/[.]/g) == 0) {
		className_or_tagName_or_Id = className_or_tagName_or_Id.replace(/[.]/g, '');
		while (document.getElementsByClassName(className_or_tagName_or_Id)[numéro] != undefined) {
			numéro = numéro + 1;
		}
	} else {
		if (className_or_tagName_or_Id.search('#') == 0) {
			className_or_tagName_or_Id = className_or_tagName_or_Id.replace('#', '');
			if (document.getElementById(className_or_tagName_or_Id) != undefined) {
				return 1
			} else {
				return 0
			}
		} else {
			if (document.getElementsByTagName(className_or_tagName_or_Id)[numéro] != undefined) {
				while (document.getElementsByTagName(className_or_tagName_or_Id)[numéro] != undefined) {
					numéro = numéro + 1;
				}
			}
		}
	}
	return numéro;
}

function style(new_style_code) {
	document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<style type='text/css'>" + new_style_code + "</style>";
}

// NUMERICS

function random(min, max) {
	number = Math.floor(Math.random() * max);
	while (number < min) {
		number = Math.floor(Math.random() * max);
	}
	return number;
}

function round(number, numberAfterComa) {
	dizaine = 1;
	while (numberAfterComa != 0) {
		dizaine = dizaine * 10;
		numberAfterComa--;
	}
	return Math.floor(number * dizaine) / dizaine;
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

function news(content) {
	var w = window.open();
	w.document.open();
	w.document.write(content);
	w.document.close();
}
