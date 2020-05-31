async function getPlaces() {
    var input = document.getElementById("input");
    await new google.maps.places.Autocomplete(input);
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchKey = document.getElementById("input").value;
    // console.log(searchKey);
    searchWeather(searchKey);
});

function searchWeather(searchKey) {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=c13f48ab3b15b4cfa8d7ca1a80a712ad`;
    window.fetch(weatherApi)
      .then((data) => {
          data.json()
          .then((weather1) => {
            //    console.log(weather);
               let weatherData = weather1.weather;
               let main = weather1.main;
               output = [];
               for(let x of weatherData) {
                   output += `
                   <div class="col-md-12 mt-4 card">
                       <div class="card-body">
                        <h1>${weather1.name}</h1>
                        <div>
                            <p class="icon">
                            <img src="http://openweathermap.org/img/wn/${x.icon}.png" alt="" /></p>
                            <p><span>Temp:</span>
                            <span class="temp">${weather1.main.temp-273.15}&deg;c</span></p>

                            <p class="float-left">Humidity: ${weather1.main.humidity}&deg;c</p>
                            <p class="des float-left">${x.description}</p>
                            <p class="des float-right">${x.main}</p>
                        </div>
                       </div>
                   </div>
                   `;
                   document.getElementById("weatherTemplate").innerHTML = output;
               }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
}
