//CONFIG
console.log('Origine is connected');

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

function copy(ToCopy, Mess) {
	navigator.clipboard.writeText(ToCopy).then(function() {
		if (Mess != undefined) {
			alert(Mess);
		}
	}, function() {
		console.log('Error: impossible de copier le text');
	});
}

// MODIFY YOUR PAGE

function add(Id, NewContent) {
	content = document.getElementById(Id).innerHTML;
	document.getElementById(Id).innerHTML = content + NewContent;
}

function del(Id) {
	document.getElementById(Id).innerHTML = "<!--suppressed content-->";
}

function mod(Id, NewContent) {
	document.getElementById(Id).innerHTML = NewContent;
}

// NUMERICS

function number(NumMin_or_NumToRound, NumMax) {
	if (Number.isInteger(Math.floor(NumMax))) {
		return Math.floor(Math.random() * (NumMax - NumMin_or_NumToRound + 1));
	} else {
		return Math.floor(NumMin_or_NumToRound);
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