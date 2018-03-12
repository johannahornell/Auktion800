async function fetchData(url) 
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800');
   
    
   
}

loadFile();