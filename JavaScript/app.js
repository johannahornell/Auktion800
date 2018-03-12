async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}

async function loadFile()
{
    let auktionUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/800/');
}

loadFile();

/*
class auctionObject {
    constructor(id, title, description, startDate, endDate, groupCode, price) {
        this.AuktionID = id;
        this.Titel = title;
        this.Beskrivning = description;
        this.StartDatum = startDate;
        this.SlutDatum = endDate;
        this.Gruppkod = groupCode;
        this.Utropspris = price;
    }
}

let newObject = new auctionObject();
newObject.id = 0;
newObject.title = "T-shirt";
newObject.description = "T-shirt från HM, storlek small";
newObject.startDate = "2018-03-12T00:00:00";
newObject.endDate = "2018-04-01T00:00:00";
newObject.groupCode = 800;
newObject.price = 50;
*/
