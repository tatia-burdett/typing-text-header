let i = 0;
let text = "tatia burdett";
let speed = 300; // typing speed in milliseconds

function writeText() {
	if (i < text.length) {
		document.getElementById("name").innerHTML += text.charAt(i);
		i++;
		setTimeout(writeText, speed);
	}
}

document.onload = writeText();