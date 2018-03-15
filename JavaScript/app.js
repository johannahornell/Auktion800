async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

function createArticle(articleObject, hide) {

    let auctionTitle = articleObject.Titel;
    let auctionPrice = articleObject.Utropspris;
    let auctionDescription = articleObject.Beskrivning;
    let auctionStart = articleObject.StartDatum;
    let auctionEnd = articleObject.SlutDatum;
    let auctionId = articleObject.AuktionID;

    let auctionWrapper = document.getElementById("auction-wrapper");
    let newArticle = document.createElement("article");
    newArticle.setAttribute("class", "article-wrapper");

    let articleImage = document.createElement("img");
    articleImage.src = "Images/image.png"
    let articleTitle = document.createElement("h1");
    articleTitle.innerHTML = auctionTitle;

    let articlePrice = document.createElement("p");
    articlePrice.innerHTML = "Utropspris: </br>" + auctionPrice + "kr";

    let readMoreBtn = document.createElement("input");
    readMoreBtn.setAttribute("type", "button");
    readMoreBtn.setAttribute("value", "Läs mer");
    readMoreBtn.setAttribute("class", "btn");

   
    //gör om json datum till jämförbar tid
    let endDate = new Date(auctionEnd).getTime();

    //gör om dagens datum till jämförbar tid
    let dagensDatum = new Date().getTime();

    //Funktion som sker när en användare klickar på läs mer
    readMoreBtn.addEventListener("click", function(){

        auctionWrapper.innerHTML = "";
        let showArticle = document.createElement("article");
        showArticle.setAttribute("class", "auction-info");

        let newDivInfo = document.createElement("div");
        let newDivBid = document.createElement("div");
        newDivBid.setAttribute("class", "bid-div");

        let bidInput = document.createElement("input");
        bidInput.setAttribute("type", "text");

        let validateBid = document.createElement("p");
        validateBid.setAttribute("id", "validate-bids");
        let highestBid = document.createElement("p");
        let amountBid = document.createElement("p");
        let bidDisplayBtn = document.createElement("input");
        bidDisplayBtn.setAttribute("type", "button");
        bidDisplayBtn.setAttribute("value", "Visa alla bud");
        bidDisplayBtn.setAttribute("id", "show-bids");
        let bidDisplay = document.createElement("p");

        let leadingBid = 0;
        async function displayBidHistory()
        {
            let bidUrl = await fetchData('http://nackowskis.azurewebsites.net/api/bud/800/' + auctionId);


            for (let i = 0; i < bidUrl.length; i++) {

                if (bidUrl[i].Summa > leadingBid) {
                  leadingBid = bidUrl[i].Summa;
                }
            }

            highestBid.innerHTML = "Ledande bud: " + leadingBid;

            amountBid.innerHTML = "Antal bud: " + bidUrl.length;

            bidDisplayBtn.addEventListener("click", function() {
                bidDisplay.innerHTML = "";
                for (let i = 0; i < bidUrl.length; i++) {

                    bidDisplay.innerHTML += bidUrl[i].Summa + "<br>";
                }
            })
        }

        displayBidHistory();

        let bidBtn = document.createElement("input");
        bidBtn.setAttribute("type", "button");
        bidBtn.setAttribute("value", "Bud");
        bidBtn.addEventListener("click", function() {

            let amount = bidInput.value;

            if(amount == null || amount == "") {
                document.getElementById("validate-bids").innerHTML = "Ange ett bud";
               // alert("Ange ett bud");
                return false;
            }
            else if(amount < leadingBid) {
                document.getElementById("validate-bids").innerHTML = "Du måste ange ett högre bud";
               // alert("Du måste ange ett högre bud");
                return false;
            }
            else {
                SendBid(auctionId, amount);
                leadingBid = amount;
                highestBid.innerHTML = "Ledande bud: " + leadingBid;
            }
        })


  //if-sats som döljer budknapp och input om utgången auktion
    if (endDate < dagensDatum) {
       bidBtn.style.display = "none";
       bidInput.style.display = "none";
    }

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
         newDivBid.appendChild(validateBid);
        newDivBid.appendChild(highestBid);
        newDivBid.appendChild(amountBid);
        newDivBid.appendChild(bidDisplayBtn);
        newDivBid.appendChild(bidDisplay);
        showArticle.appendChild(newDivInfo);
        showArticle.appendChild(newDivBid);
        auctionWrapper.appendChild(showArticle);
        auctionWrapper.appendChild(backButton);
  })

  newArticle.appendChild(articleImage);
  newArticle.appendChild(articleTitle);
  newArticle.appendChild(articlePrice);
  newArticle.appendChild(readMoreBtn);
  auctionWrapper.appendChild(newArticle);


  //if-sats som får ta bort utgågna auktioner
  if(endDate < dagensDatum && hide == true) {
      newArticle.style.display = "none";
  }

}

function SendBid(id, amount) {
    let newBid = new bid(id, 0, amount);

    createBid(newBid);
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');

    var searchButton = document.getElementById("search-button");
    let displayWrapper = document.getElementById("auction-wrapper");

    searchButton.addEventListener("click", function(){

        let searchValue = document.getElementById("search-input").value;
        let result = auktionUrl.filter(obj =>  obj.Titel.includes(searchValue));

        let sortWrapper = document.getElementById("sort-wrapper");
        let sortText = document.createElement("p");
        sortText.innerHTML = "Sortera efter:"

        let priceBtn = document.createElement("input");
        priceBtn.setAttribute("type", "button");
        priceBtn.setAttribute("value", "Pris");

        let dateBtn = document.createElement("input");
        dateBtn.setAttribute("type", "button");
        dateBtn.setAttribute("value", "Datum");

        displayWrapper.innerHTML = "";
        sortWrapper.innerHTML = "";

        for(let object of result) {
            if(searchValue === "" || searchValue === null) {
                displayWrapper.innerHTML = "Du måste skriva in ett sökord";
                return false;
            }
            /*else if(typeof result == 'undefined' && result.length > 0) {
                displayWrapper.innerHTML = "Din sökning gav 0 träffar";
                return false;
            }*/
            else {
                createArticle(object, false);
            }
            sortWrapper.appendChild(sortText);
            sortWrapper.appendChild(priceBtn);
            sortWrapper.appendChild(dateBtn);
        }
    })

    for (let i = 0; i < auktionUrl.length; i++) {

        createArticle(auktionUrl[i], true);
    }
}

loadFile();