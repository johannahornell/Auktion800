async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');
   
for (i = 0; i < auktionUrl.length; i++) {
    let div = document.getElementById('auction-object' + i);
    let temp = '';
    

    temp += '<br>' + '<ul>' +
        '<h1> ' + auktionUrl[i].Titel + '</h1>' +
        '<h4>BESKRIVNING: ' + auktionUrl[i].Beskrivning + '</h4>' +
        '<h5>STARTDATUM: ' + auktionUrl[i].StartDatum + '</h5>' +
        '<h5>SLUTDATUM: ' + auktionUrl[i].SlutDatum + '</h5>' +
        '<p>UTROPSPRIS: ' + auktionUrl[i].Utropspris + ' kr' + '</p>' +
        '</ul>';
    div.innerHTML = temp;
    }
}
loadFile();

