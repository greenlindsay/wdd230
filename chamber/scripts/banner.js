
let dayName = new Date();

    document.querySelector(".banner-close").addEventListener("click", function(){
    this.closest(".banner").style.display = "none";
});

switch(dayName){
    case 4,5,6,0:
        document.getElementById(".banner").style.display = "none";
}


//weather api
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 40.3;
const lon = -111.69;
const apiKey = 'c458ebb3edfd8fbd1b64f0767e3cfc64';

const linkUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch(){
    try {
        const response = await fetch(linkUrl);
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


