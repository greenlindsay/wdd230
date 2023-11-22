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



//weather api
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 40.3;
const lon = -111.69;
const apiKey = 'c458ebb3edfd8fbd1b64f0767e3cfc64';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

function displayResults(data){
    tempNum = (data.main.temp).toFixed();
    currentTemp.innerHTML = `${tempNum} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon`)

    captionDesc.textContent = data.weather[0].description;

    
}

apiFetch();



