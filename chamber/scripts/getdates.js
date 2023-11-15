let mod = document.lastModified;
document.getElementById("current").textContent = mod

let tmstamp = document.lastModified;
document.getElementById("stamp").textContent = tmstamp



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

const url="https://github.com/greenlindsay/wdd230/blob/main/chamber/data/members.json"
let results = null;
async function getData(url){
	const response=await fetch(url);
}
