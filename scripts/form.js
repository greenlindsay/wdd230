const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "❗Passwords do not match!";
		message.style.visibility = "show";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}
