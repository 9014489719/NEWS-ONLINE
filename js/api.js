//apiKey=1972039d7de4492090cccd2aea6de8bf
let sportsApi = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1972039d7de4492090cccd2aea6de8bf`;

let entertainmentApi = `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1972039d7de4492090cccd2aea6de8bf`;


let healthApi = `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1972039d7de4492090cccd2aea6de8bf`;

let businessApi = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1972039d7de4492090cccd2aea6de8bf`;

let technologyApi = `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1972039d7de4492090cccd2aea6de8bf`;

let scienceApi = `http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1972039d7de4492090cccd2aea6de8bf`;

// ====sports section starts=====//
window.fetch(sportsApi)
.then((sportsData) => {
     sportsData.json()
     .then((sports) => {
         //console.log(sports.articles);
         let sportsInfo = sports.articles;
         let output = [];
         for(let sport of sportsInfo) {
             console.log(sport);
             output += `
                <div class>
                <img src="${sport.urlToImage}" alt="Sports Image">
                    <h1>${sport.title}</h1>
                    <a href="${sport.url}" target="_blank">Details</a>
                </div>
             `;
             document.getElementById("sportsSection").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));
// ====sports section ends=====//