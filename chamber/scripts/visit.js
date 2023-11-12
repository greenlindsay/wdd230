const showVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	showVisits.textContent = numVisits;
} else {
	showVisits.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


