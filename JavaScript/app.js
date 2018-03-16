async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

function SendBid(id, amount) {
    let newBid = new bid(id, 0, amount);

    createBid(newBid);
}

async function loadFile()
{
    let auktionUrl = await fetchData('https://nackowskis.azurewebsites.net/api/Auktion/800/');

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

        priceBtn.addEventListener("click", function(){
            let sortPrice = result.sort((value1, value2) => parseInt(value1.Utropspris) - parseInt(value2.Utropspris));
            displayWrapper.innerHTML = "";

            for(let object of sortPrice) {

                createArticle(object, false);
            }
        })

        let dateBtn = document.createElement("input");
        dateBtn.setAttribute("type", "button");
        dateBtn.setAttribute("value", "Datum");

        dateBtn.addEventListener("click", function(){

            let sortDate = result.sort((value1, value2) => new Date(value1.SlutDatum).getTime() - new Date(value2.SlutDatum).getTime());
            displayWrapper.innerHTML = "";

            for(let object of sortDate) {

                createArticle(object, false);
            }
        })

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
