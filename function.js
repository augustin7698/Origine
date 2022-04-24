// CONFIGURATION
console.log('Origine is connected');

async function wait(ms, then) {
	await new Promise(resolve => setTimeout(resolve, ms));
	eval(arguments[1]);
}


function copy(ToCopy) {
	navigator.clipboard.writeText(ToCopy).then(azertyuiopqsfghjklmwxcvbn="success" , function() {
		console.log('Error: document not focused');
	});
}


function style(new_style) {
	document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<style type='text/css'>" + new_style + "</style>";
}


function get(element) {
	if (element.includes("#")) {
		if (document.getElementById(element.replace("#", ""))) {
			return document.getElementById(element.replace("#", ""));
		} else {
			return null;
		}
	} else if (element.includes(".")) {
		if (document.getElementsByClassName(element.replace(".", "")).length == 0) {
			return null;
		} else {
			return document.getElementsByClassName(element.replace(".", ""));
		}
	} else {
		if (document.getElementsByTagName(element).length == 0) {
			return null;
		} else {
			return document.getElementsByTagName(element);
		}
	}
}


x = 0;
y = "";
while (! y.includes(String.fromCharCode(x))) {
    y+= String.fromCharCode(x);
    x++;
}

letter = ("012345678abcdefghijklmnopqrstuvwxyz;<=>?[\\]^_`@ABCDEFGHIJKLMNOPQRSTUVWXYZ" + y.replace("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz", "")).split("");


function hash(str) {
	// convert string to array
	str = str.split("");
	// transform the string into number
	for (var i = str.length - 1; i >= 0; i--) {
		// encode => parity / unparity
		if (i%2 == 0) {
			str[i] = (letter.indexOf(str[i]) ** 2 * Math.LOG10E) / 5;
		} else {
			str[i] = (letter.indexOf(str[i]) ** 4 * Math.LN2) / 10;
		}
		// encode according to the parity of a number
		if (str[i]%2 == 0) {
			str.concat(str[i] - str[i - 1]);
		}
	}

	// encode => last number
	for (var i = str.length - 1; i >= 0; i--) {
		if (i == 0) {
			str[i] = str[i] + str[i];
		} else {
			str[i] = str[i] - str[i - 1];
		}
		
	}

	// sum all the members of the array
	str = eval(String(str).replaceAll(",", "+").replaceAll(" ", "+").replaceAll("-", ""));

	// remove dots
	str = String(str).replace(".", "");

	// put the number in base 36
	str = Number(str).toString(36);
	return str;
}


function round(number, numberAfterComa) {
	dizaine = 1;
	while (numberAfterComa > 0) {
		dizaine = dizaine * 10;
		numberAfterComa--;
	}
	return Math.floor(number * dizaine) / dizaine;
}


function lDistance(str1, str2) {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	const track = Array(str2.length + 1).fill(null).map(() =>
	Array(str1.length + 1).fill(null));
	for (let i = 0; i <= str1.length; i += 1) {
		track[0][i] = i;
	}
	for (let j = 0; j <= str2.length; j += 1) {
		track[j][0] = j;
	}
	for (let j = 1; j <= str2.length; j += 1) {
		for (let i = 1; i <= str1.length; i += 1) {
			const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
			track[j][i] = Math.min(
				track[j][i - 1] + 1,
				track[j - 1][i] + 1,
				track[j - 1][i - 1] + indicator,
			);
		}
	}
	return (track[str2.length][str1.length]);
}


function log(str) {
	console.debug(str);
}


userActions = [];
window.addEventListener("click", function() { 
	userActions.push(event);
}, false);

window.addEventListener("keydown", function() { 
	userActions.push(event);
}, false);

window.addEventListener("select", function() { 
	userActions.push(event);
}, false);


function toBase(number, oldBase, newBase) {
	number = String(Math.round(Number(number)));
	oldBase = Math.round(Number(oldBase));
	newBase = Math.round(Number(newBase));

	if (newBase == 10) {
		returner = 0;

		for (i = 0; i < number.length; ++i) {
			if (letter.indexOf(number[i]) > oldBase) {
				console.log("false oldBase");
				break;
			} else {
				returner *= oldBase;
				returner += letter.indexOf(number[i]);
			}
		}
		if (returner == 0) {
			returner = null;
		}
	} else if (oldBase == 10) {

		if (newBase > letter.length) {
			returner = null;
			console.log("there is only 65534 base");
		} else if (newBase <= 1) {
			returner = null;
			console.log("this base don't exist");
		} else {
			a = []
			while (number) {
				a.splice(0, 0, letter[number % newBase])
				number = parseInt(number / newBase);
			}
			returner = a.join("");
		}
	} else {

		intermidiate = toBase(String(number), oldBase, 10);
		returner = toBase(intermidiate, 10, newBase);
	}


	if (returner == null || returner == "") {
		return undefined;
	} else {
		return String(returner);
	}
}
