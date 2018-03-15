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