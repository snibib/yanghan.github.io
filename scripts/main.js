var myImage = document.querySelector('img');

myImage.onclick = function() {
	var myScr = myImage.getAttribute('src');
	if (myScr === 'images/firefox.png') {
		myImage.setAttribute('src','images/180.png');
	} else {
		myImage.setAttribute('src','images/firefox.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
	setUserName();
}else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

function setUserName() {
	var myName = prompt('Please enter your name');
	if (myName) {
		localStorage.setItem('name',myName);
		myHeading.innerHTML = 'Mozilla is cool, ' + myName;
	};
}