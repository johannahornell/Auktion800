async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');
   
    let title1 = document.getElementById("title1");
    let title2 = document.getElementById("title2");
    let title3 = document.getElementById("title3");
    let title4 = document.getElementById("title4");

    title1.innerHTML =  auktionUrl[0].Titel;
    title2.innerHTML =  auktionUrl[1].Titel;
    title3.innerHTML =  auktionUrl[2].Titel;
    title4.innerHTML =  auktionUrl[3].Titel;
}

loadFile();
