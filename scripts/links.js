const baseURL="https://greenlindsay.github.io/wdd230/";
const linksURL="https://greenlindsay.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');
async function getLinks(){
    const response = await fetch(url);
    const links = await response.json();
    console.log(data);

    displayLinks(data);
}   

const displayLinks=(weeks)=>{
    weeks.forEach((week) => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = week.title;

        link.setAttribute('href',week.url);
        let title = document.createElement('h1',week.title);

        console.log(week);
    });
}

getLinks();