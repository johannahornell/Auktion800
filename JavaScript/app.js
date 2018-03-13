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

    let bidInput = document.createElement("input");
    bidInput.setAttribute("type", "text");

    let bidBtn = document.createElement("input");
    bidBtn.setAttribute("type", "button");
    bidBtn.setAttribute("value", "Bud");
    /*bidBtn.addEventListener("click", loadBid(auktionUrl[i].AuktionID));*/

    let temp = '';

    temp +=
        '<h1> ' + auktionUrl[i].Titel + '</h1>' +
        '<h4>BESKRIVNING: ' + auktionUrl[i].Beskrivning + '</h4>' +
        '<h5>STARTDATUM: ' + auktionUrl[i].StartDatum + '</h5>' +
        '<h5>SLUTDATUM: ' + auktionUrl[i].SlutDatum + '</h5>' +
        '<p>UTROPSPRIS: ' + auktionUrl[i].Utropspris + ' kr' + '</p>';
    newDivInfo.innerHTML = temp;

    newDivBid.appendChild(bidInput);
    newDivBid.appendChild(bidBtn);

    newArticle.appendChild(newDivInfo);
    newArticle.appendChild(newDivBid);
    auctionWrapper.appendChild(newArticle);

    //gör om json datum till jämförbar tid
    endDate = new Date(auktionUrl[i].SlutDatum).getTime();

    //gör om dagens datum till jämförbar tid
    let dagensDatum = new Date().getTime();

    //if-sats som får ta bort utgågna auktioner
    if(endDate > dagensDatum) {
        console.log('Fortfarande aktuell');
    }
    else {
        console.log('Auktionen slut');
    }
    }
   
  }

    var searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function(){

        let searchValue = document.getElementById("search-input").value;
        let result = auktionUrl.filter(obj =>  obj.Titel.includes(searchValue));
        let searchResultList = document.getElementById("auction-wrapper");

        searchResultList.innerHTML = "";

        for(let object of result) {
            if(searchValue === "" || searchValue === null) {
                //noSearchWord.innerHTML = "Du måste skriva in ett sökord";
                searchResultList.innerHTML = "Du måste skriva in ett sökord";
                return false;
            }
            /*else if(typeof result !== 'undefined' && result.length > 0) {
                searchResultList.innerHTML = "Din sökning gav 0 träffar";
                return false;
            }*/
            else {
                let auctionObject = document.createElement("p");
                let text = object.Titel + ", " + object.Utropspris + " kr";
                let textNode = document.createTextNode(text);

                auctionObject.appendChild(textNode);
                searchResultList.appendChild(auctionObject);
            }
        }
    })

  for (i = 0; i < auktionUrl.length; i++) {
      let auctionWrapper = document.getElementById("auction-wrapper");
      let newArticle = document.createElement("article");
      let newDivInfo = document.createElement("div");
      let newDivBid = document.createElement("div");

      let bidInput = document.createElement("input");
      bidInput.setAttribute("type", "text");

      let bidBtn = document.createElement("input");
      bidBtn.setAttribute("type", "button");
      bidBtn.setAttribute("value", "Bud");
      /*bidBtn.addEventListener("click", loadBid(auktionUrl[i].AuktionID));*/

      let temp = '';

      temp +=
          '<h1> ' + auktionUrl[i].Titel + '</h1>' +
          '<p>Beskrivning: ' + auktionUrl[i].Beskrivning + '</p>' +
          '<p>Start: ' + auktionUrl[i].StartDatum + '</p>' +
          '<p>Slut: ' + auktionUrl[i].SlutDatum + '</p>' +
          '<p class="big">Utropspris: ' + auktionUrl[i].Utropspris + ' kr' + '</p>';
      newDivInfo.innerHTML = temp;

      newDivBid.appendChild(bidInput);
      newDivBid.appendChild(bidBtn);

      newArticle.appendChild(newDivInfo);
      newArticle.appendChild(newDivBid);
      auctionWrapper.appendChild(newArticle);

      //gör om json datum till jämförbar tid
      endDate = new Date(auktionUrl[i].SlutDatum).getTime();

      //gör om dagens datum till jämförbar tid
      let dagensDatum = new Date().getTime();

      //if-sats som får ta bort utgågna auktioner
      if(endDate < dagensDatum) {
          newArticle.style.display = "none";
      }
  }
}

function createBid() {
    fetch("https://nackowskis.azurewebsites.net/api/bud/800/", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
              BudID: 53,
              Summa: 11111111111,
              AuktionID: 1
          })
    }).then(res => res.json()).then(res => console.log(res));

loadFile();
