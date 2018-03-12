async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');
    let title1 = document.getElementById("title1").innerHTML = auktionUrl[0].Titel;
    let title2 = document.getElementById("title2").innerHTML = auktionUrl[1].Titel;
    let title3 = document.getElementById("title3").innerHTML = auktionUrl[2].Titel;
    let title4 = document.getElementById("title4").innerHTML = auktionUrl[3].Titel;
}

loadFile();
