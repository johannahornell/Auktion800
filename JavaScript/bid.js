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
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
