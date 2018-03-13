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
        '<li>TITEL: ' + auktionUrl[i].Titel + '</li>' +
        '<li>BESKRIVNING: ' + auktionUrl[i].Beskrivning + '</li>' +
        '<li>STARTDATUM: ' + auktionUrl[i].StartDatum + '</li>' +
        '<li>SLUTDATUM: ' + auktionUrl[i].SlutDatum + '</li>' +
        '<li>UTROPSPRIS: ' + auktionUrl[i].Utropspris + ' kr' + '</li>' +
        '</ul>';
    div.innerHTML = temp;
    }
}
loadFile();


