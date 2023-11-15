const baseURL="https://greenlindsay.github.io/wdd230/";
const linksURL="https://greenlindsay.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(url);
    const links = await response.json();
    console.log(data)
    
}