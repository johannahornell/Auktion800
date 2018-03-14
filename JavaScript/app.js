async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

function createTest(articleObject, hide) {

    let auctionTitle = articleObject.Titel;
    let auctionPrice = articleObject.Utropspris;
    let auctionDescription = articleObject.Beskrivning;
    let auctionStart = articleObject.StartDatum;
    let auctionEnd = articleObject.SlutDatum;

    let auctionWrapper = document.getElementById("auction-wrapper");
    let newArticle = document.createElement("article");
    newArticle.setAttribute("class", "article-wrapper");

    let articleImage = document.createElement("img");
    articleImage.src = "Images/image.png"
    let articleTitle = document.createElement("h1");
    articleTitle.innerHTML = auctionTitle;

    let articlePrice = document.createElement("p");
    articlePrice.setAttribute("class", "big");
    articlePrice.innerHTML = auctionPrice + "kr";

    let articleBids = document.createElement("p");
    articleBids.innerHTML = "0 bud"; //Ändra till antalet bud som lagts på auktionen

    let readMoreBtn = document.createElement("input");
    readMoreBtn.setAttribute("type", "button");
    readMoreBtn.setAttribute("value", "Läs mer");
    readMoreBtn.setAttribute("class", "btn");

    //Funktion som sker när en användare klickar på läs mer
    readMoreBtn.addEventListener("click", function(){

        auctionWrapper.innerHTML = "";
        let showArticle = document.createElement("article");
        showArticle.setAttribute("class", "auction-info");

        let newDivInfo = document.createElement("div");
        let newDivBid = document.createElement("div");

        let bidInput = document.createElement("input");
        bidInput.setAttribute("type", "text");

        let bidBtn = document.createElement("input");
        bidBtn.setAttribute("type", "button");
        bidBtn.setAttribute("value", "Bud");

        let backButton = document.createElement("a");
        backButton.href = "index.html"
        backButton.innerHTML = "Tillbaka"

        let auctionInfoText = '';

        auctionInfoText +=
        '<h1> ' + auctionTitle + '</h1>' +
        '<p>' + auctionDescription + '</p>' +
        '<p>Start: ' + auctionStart + '</p>' +
        '<p>Slut: ' + auctionEnd + '</p>' +
        '<p class="big">Utropspris: ' + auctionPrice + ' kr' + '</p>';

        newDivInfo.innerHTML = auctionInfoText;

        newDivBid.appendChild(bidInput);
        newDivBid.appendChild(bidBtn);
        showArticle.appendChild(newDivInfo);
        showArticle.appendChild(newDivBid);
        auctionWrapper.appendChild(showArticle);
        auctionWrapper.appendChild(backButton);
  })

  newArticle.appendChild(articleImage);
  newArticle.appendChild(articleTitle);
  newArticle.appendChild(articlePrice);
  newArticle.appendChild(articleBids);
  newArticle.appendChild(readMoreBtn);
  auctionWrapper.appendChild(newArticle);

  //gör om json datum till jämförbar tid
  endDate = new Date(auctionEnd).getTime();

  //gör om dagens datum till jämförbar tid
  let dagensDatum = new Date().getTime();

  //if-sats som får ta bort utgågna auktioner
  if(endDate < dagensDatum && hide == true) {
      newArticle.style.display = "none";
  }

}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');

    var searchButton = document.getElementById("search-button");
    let displayWrapper = document.getElementById("auction-wrapper");

    searchButton.addEventListener("click", function(){

        let searchValue = document.getElementById("search-input").value;
        let result = auktionUrl.filter(obj =>  obj.Titel.includes(searchValue));

        displayWrapper.innerHTML = "";

        for(let object of result) {
            if(searchValue === "" || searchValue === null) {
                //noSearchWord.innerHTML = "Du måste skriva in ett sökord";
                displayWrapper.innerHTML = "Du måste skriva in ett sökord";
                return false;
            }
            /*else if(typeof result !== 'undefined' && result.length > 0) {
                searchResultList.innerHTML = "Din sökning gav 0 träffar";
                return false;
            }*/
            else {
                createTest(object, false);
            }
        }
    })

  for (i = 0; i < auktionUrl.length; i++) {

      createTest(auktionUrl[i], true);

loadFile();


function createBid() {
    fetch("https://nackowskis.azurewebsites.net/api/bud/800/", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
              BudID: 192,
              Summa: 2222,
              AuktionID: 28
          })
    }).then(res => res.json()).then(res => console.log(res));
}
    
//createBid();