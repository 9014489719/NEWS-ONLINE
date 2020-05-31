let sportsApi = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1972039d7de4492090cccd2aea6de8bf`;

window.fetch(sportsApi)
.then((sportsData) => {
     sportsData.json()
     .then((sports) => {
         console.log(sportsData);
          let sportsFeed = sports.articles;
          let firstSportsBlock = sports.articles;
          let sportsNewsBlockOne = firstSportsBlock[0];
          document.getElementById("sportsFirstTemplate").innerHTML = `
             <ul>
                 <img src="${sportsNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let sport of sportsFeed) {
                output += `
                <ul>
                    <a href="${sport.url}" target="_blank">
                    <li>${sport.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("sportsAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));