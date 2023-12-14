
const lat = 20.503325;
const lon = -86.957716;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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
