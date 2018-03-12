async function fetchData(url) 
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let myWeatherURL = await fetchData('');
   
   
}

loadFile();