
  /*
 fetch(budUrl, {
  method: 'POST',
  body: JSON.stringify(storstBud),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
}
}).then(res => res.json());
}*/


class bid{
constructor(auctionsId, budId, summa )
  {
  this.AuktionID = auctionsId;
  this.BudID = budId;
  this.Summa = summa;
  }
}

function createBid(value) {
    fetch("https://nackowskis.azurewebsites.net/api/bud/800/", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    });
}
/*    ValidBid()
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


for ( i = 0; i <budUrl.length; i++){
*/
