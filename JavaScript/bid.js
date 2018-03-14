
class bid{
constructor(auctionsId, budId, summa )
{
this.AuktionID = auctionsId;
this.BudID = budId;
this.Summa = summa;
}
    ValidBid()
        {
            let budUrl = await fetchData('http://nackowskis.azurewebsites.net/api/bud/800/');

            let bud = document.getElementById("").value //hur få fram rätt value från input??? let bud = value
            let storstBud = 0;

            for ( i = 0; i <budUrl.length; i++)
            {
                 if (bud > storstaBud) //om budet inte är störst.
                  {
                      storstaBud = bud;
                      document.getElementById("").innerHTML = "Största Bud: " + bud;// skapa och lägg in i ptagg - text "Budet är för litet, skriv ett nytt"
                  }
                  else
                  {
                      document.getElementById("").innerHTML = "Ange ett större bud.";
                  }
        }
  }
}

var myBid= new bid();
myBid.auctionsId = "";
myBid.budId = 0;
myBid.summa = ;

function createBid() {
 fetch(budUrl, {
  
  method: 'POST',
  body: JSON.stringify(myBid),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
      }).then(res => res.json()).then(res => console.log(res));
}



