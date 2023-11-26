const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

const actNav = document.querySelector('nav');
const actA = document.querySelector('a');

actA.forEach(navActive => {
	navActive.addEventListener('click', function(){
		actNav.querySelector('.active').classList.remove('active')
		navActive.classList.add('active')
	})
})