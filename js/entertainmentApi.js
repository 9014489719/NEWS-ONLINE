let entertainmentApi = `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1972039d7de4492090cccd2aea6de8bf`;

window.fetch(entertainmentApi)
.then((EntertainmentData) => {
    EntertainmentData.json()
     .then((entertainment) => {
         //console.log(entertainment.articles);
          let entertainmentFeed = entertainment.articles;
          let firstEntertainmentBlock = entertainment.articles;
          let entertainmentNewsBlockOne = firstEntertainmentBlock[0];
          document.getElementById("entertainmentFirstTemplate").innerHTML = `
             <ul>
                 <img src="${entertainmentNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let enter of entertainmentFeed) {
                output += `
                <ul>
                    <a href="${enter.url}" target="_blank">
                    <li>${enter.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("entertainmentAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));