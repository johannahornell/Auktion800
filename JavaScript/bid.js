async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}
async function loadBid(id)
{
     let budUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/800/'+ id);

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

 fetch(budUrl, {
  method: 'POST',
  body: JSON.stringify(storstBud),
  headers: new Headers({
    'Content-Type': 'application/json'
  })

}).then(res => res.json());
}

function createBid() {
  fetch('http://nackowskis.azurewebsites.net/api/bud/800/'{
      method: "POST",
      headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          AuktionID: 75,
          Beskrivning: "Test",
          Gruppkod: 800,
          startDatum: "2018-03-31T00:00:00",
          slutDatum: "2018-03-10T00:00:00",
          Titel: "Test Test 123",
          UtropsPris: 1500
      })
  }).then(res => res.json())
  .then(res => console.log(res));
}

