async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}
async function loadBid(id)
{
     let budUrl = await fetchData('http://nackowskis.azurewebsites.net/api/bud/800/');

     let bud = document.getElementById("").value //value från input
     let storstBud = 0;

    for ( i = 0; i <budUrl.length; i++)
    {
      if (bud > storstaBud) //om budet inte är störst.
          {
              storstaBud = bud;// skapa och lägg in i ptagg - text "Budet är för litet, skriv ett nytt"
          }
      else
          {
   	          alert("Du måste ge ett större bud");
          }
    }

}
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
this.AuktionsID = auctionsId;
this.BudID = budId;
this.Summa = summa;
}
ValidBid()
{
     let budUrl = await fetchData('http://nackowskis.azurewebsites.net/api/bud/800/');

     let bud = document.getElementById("").value //hur få fram rätt value från input???
     let storstBud = 0;

    for ( i = 0; i <budUrl.length; i++)
    {
      if (bud > storstaBud) //om budet inte är störst.
          {
              storstaBud = bud;// skapa och lägg in i ptagg - text "Budet är för litet, skriv ett nytt"
          }
      else
          {
              alert("Du måste ge ett större bud");
          }
    }
}

function createBid() {
  fetch('http://nackowskis.azurewebsites.net/api/bud/800/',{
      method: "POST",
      headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          AuktionID: 2,
          BudID: 75,
          Summa: 1500
      })
  }).then(res => res.json()).then(res => console.log(res));
}

createBid();