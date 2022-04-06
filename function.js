//CONFIGURATION
console.log('Origine is connected');

//FUNCTION

// USEFUL SIMPLE FUNCTION

async function wait(ms, then) {
	await new Promise(resolve => setTimeout(resolve, Ms));
	eval(arguments[1]);
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

function style(new_style_code) {
	document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "<style type='text/css'>" + new_style_code + "</style>";
}

function get(element) {
	if (element.includes("#")) {
		return document.getElementById(element.replace("#", ""));
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

function del(element) {
	finit = false;
	if (element.search("#") == 0) {
		element = element.replace('#', '');
		document.getElementById(element).innerHTML = null;
		finit = true;
	}
	if (element.search(/[.]/g) == 0 && finit == false) {
		finit = true;
		element = element.replace('.', '');
		if (num != undefined) {
			document.getElementsByClassName(element)[num].innerHTML = null;
		} else {
			num = 0;
			while (document.getElementsByClassName(element)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByClassName(element)[num].innerHTML = null;
			}
		}
	}
	if (finit == false) {
		if (num != undefined) {
			document.getElementsByTagName(element)[num].innerHTML = null;
		} else {
			num = 0;
			while (document.getElementsByTagName(element)[num] != undefined) {
				num = num + 1;
			}
			while (num != 0) {
				num = num - 1;
				document.getElementsByTagName(element)[num].innerHTML = null;
			}
		}
	}
}


letter = ["0","1","2","3","4","5","6","7","8","9"," ","	","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","µ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","&","ß","«","»","~","\"","#","'","{","(","[","-","|","`","_","\\","^","@","€",")","]","°","=","}","¨","^","£","$","¤","%","§","!","/",":",";",".","’","“","”","?",",","<",">","*","+","ª","º","¿","¡","ƒ","½","¼","±","¾","÷","¹","³","²","‰","↨","↑","↓","→","←","↔","►","◄","▲","▼","™","©","®","¶","☺","☻","♥","♦","♣","♠","•","○","♂","♀","♪","♫","☼","‡","†","×","—","–","α","Α","β","Β","γ","Γ","ε","ϵ","θ","ϑ","κ","ϰ","π","ϖ","ρ","ϱ","σ","ς","Σ","ϕ","φ","ω","Ω","℧","ϝ","Ϝ","Ѐ","Ё","Ђ","Ѓ","Є","Ѕ","І","Ї","Ј","Љ","Њ","א","ב","ג","ד","ɐ","ɑ","ɒ","ɓ","ɔ","ɕ","ɖ","ɗ","ɘ","ə","ɚ","⠀","⠁","⠂","⠃","⠄","⠅","⠆","⠇"," ","ᚁ","ᚂ","ᚃ","ᚄ","ᚅ","ᚆ","ᚇ","ᚈ","ᚉ","ᚊ","ᚋ","ᚌ","ᚍ","ᚎ","ᚏ","ᚐ","ᚑ","ᚒ","ᚓ","ᚔ","ᚕ","ᚖ","ᚗ","ᚘ","ᚙ","ᚚ","᚛","᚜","ᚠ","ᚡ","ᚢ","ᚣ","ᚤ","ᚥ","ᚦ","ᚧ","ᚨ","ᚩ","ᚪ","ᚫ","ก","ข","ฃ","ค","ฅ","ฆ","ง","จ","ฉ","ช","¼","½","¾","↉","⅓","⅔","⅕","⅖","⅗","⅘","⅙","⅚","⅛","⅜","⅝","⅞","⅟","⅐","⅑","⅒","Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ","Ⅵ","Ⅶ","Ⅷ","Ⅸ","Ⅹ","Ⅺ","Ⅻ","Ⅼ","Ⅽ","Ⅾ","Ⅿ","ↀ","ↁ","ↂ","Ↄ","ↇ","ↈ","ⅰ","ⅱ","ⅲ","ⅳ","ⅴ","ⅵ","ⅶ","ⅷ","ⅸ","ⅹ","ⅺ","ⅻ","ⅼ","ⅽ","ⅾ","ⅿ","ↄ","ℂ","ℍ","ℕ","ℙ","ℚ","ℝ","ℤ","∅","ă","&","a","b","r","e","v","e",";","ą","&","a","o","g","o","n",";","˘","&","b","r","e","v","e",";","±","×","÷","•","∂","∏","∑","−","∗","√","∧","∨","∩","∪","∫","∬","∭","∮","∯","∰","∱","∲","∳","⊕","⊗","⋅","∀","∃","∇","∞","‖","⌈","⌉","⌊","⌋","〈","〉","⟨","⟩","≡","≤","⩽","≥","⩾","∈","∋","∝","∴","∼","≅","≈","⊂","⊃","⊆","⊇","∥","≠","≢","∉","⊄","∦","←","↑","→","↓","↔","↕","↖","↗","╭","╮","╯","╰","➔","➘","➙","➚","➛","➜","➝","➞","⤀","⤁","⤂","⤃","⤄","⤅","⤆","⤇","⤈","°","∠","⊥","ψ","₠","₡","₢","₣","₤","₥","₦","₧","₨","₩","₪","₫","€","₭","₮","₯","₰","₱","₲","₳","₴","₵","₶","₷","₸","₹","♩","♪","♫","♬","♭","♮","♯","☥","☦","☧","☨","☩","☪","☫","☬","☭","☮","☯","♰","♱","✝","✞","✟","☰","☱","☲","☳","☴","☵","☶","☷","䷀","䷁","䷂","䷃","䷄","䷅","䷆","☼","☽","☾","☿","♀","♁","♂","♃","♄","♅","♆","♇","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","♠","♣","♥","♦","♤","♧","♡","♢","⁡","⁢","⁣","⁪","⁫","⁬","⁭","⁮","⁯","␀","␁","␂","␃","␄","␅","␆","␇","␈","␉","␊","␋","␌","␍","␎","␏","␐","␑","␒","␓","␔","␕","␖","␗","␘","␙","␚","␛","␜","␝","␞","␟","␠","␡","␤","␥","␦","─","━","│","┃","┄","┅","┆","┇","┈","┉","┊","┋","┌","⎋","⇥","⇤","⇪","⇧","⌃","⌥","","⌘","␣","⏎","↩","⌫","⌦","﹖","⃝","⇱","↖","↸","⇲","↘","⇞","⇟","↑","⇡","↓","⇣","←","⇠","→","⇢","⌧","⇭","⌤","⏏","⌽","ò","ó","ô","õ","ö","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ñ","œ","ù","ú","û","ü","ý","ÿ"];

function hash(str) {
	// convert string to array
	str = str.split("");
	// transform the string into number
	for (var i = str.length - 1; i >= 0; i--) {
		// encode according to the parity of a number
		if (i%2 == 0) {
			str[i] = (letter.indexOf(str[i]) ** 2 * Math.LOG10E) / 5;
		} else {
			str[i] = (letter.indexOf(str[i]) ** 2 * Math.LN2) / 5;
		}
		// encode according to the parity of a number
		if (str[i]%2 == 0) {
			str.concat(str[i] - str[i - 1]);
		}
	}
	// encode according to the last number
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

function random(min, max) {
	number = Math.floor(Math.random() * max);
	while (number < min) {
		number = Math.floor(Math.random() * max);
	}
	return number;
}

function round(number, numberAfterComa) {
	dizaine = 1;
	while (numberAfterComa > 0) {
		dizaine = dizaine * 10;
		numberAfterComa--;
	}
	return Math.floor(number * dizaine) / dizaine;
}


userActions = []
window.addEventListener("click", function() { 
	userActions.push(event)
}, false);

window.addEventListener("keydown", function() { 
	userActions.push(event)
}, false);

window.addEventListener("select", function() { 
	userActions.push(event)
}, false);

