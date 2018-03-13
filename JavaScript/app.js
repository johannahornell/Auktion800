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
        let auctionWrapper = document.getElementById("auction-wrapper");
        let newArticle = document.createElement("article");
        let newDivInfo = document.createElement("div");
        let newDivBid = document.createElement("div");
        let temp = '';

        temp +=
            '<h1> ' + auktionUrl[i].Titel + '</h1>' +
            '<h4>BESKRIVNING: ' + auktionUrl[i].Beskrivning + '</h4>' +
            '<h5>STARTDATUM: ' + auktionUrl[i].StartDatum + '</h5>' +
            '<h5>SLUTDATUM: ' + auktionUrl[i].SlutDatum + '</h5>' +
            '<p>UTROPSPRIS: ' + auktionUrl[i].Utropspris + ' kr' + '</p>';
        newDivInfo.innerHTML = temp;

        newDivBid.innerHTML = "Hej" //Skapa input och grejer för att visa bud

        newArticle.appendChild(newDivInfo);
        newArticle.appendChild(newDivBid);
        auctionWrapper.appendChild(newArticle);

  }
}
loadFile();
