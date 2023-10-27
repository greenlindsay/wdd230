document.getElementById("year").innerHTML = new Date().getFullYear();
let mod = document.lastModified;
document.getElementById("current").textContent = mod

const showVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	showVisits.textContent = numVisits;
} else {
	showVisits.textContent = `This is your first visit!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

