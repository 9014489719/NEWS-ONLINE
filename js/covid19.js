window
.fetch(`https://api.covid19api.com/summary`)
.then((data) => {
    data
    .json()
    .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById("covidBlock").innerHTML = `
          <section>
              <div>
                  <span class="badge badge-danger">New Confirmed</span>&nbsp
                  <span style="color:#000"><b>${Global.NewConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger">NewDeaths</span>&nbsp
                  <span style="color:#000"><b>${Global.NewDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger">NewRecovered</span>&nbsp
                  <span style="color:#000"><b>${Global.NewRecovered}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger">TotalConfirmed</span>&nbsp
                  <span style="color:#000"><b>${Global.TotalConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger">TotalDeaths</span>&nbsp
                  <span style="color:#000"><b>${Global.TotalDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger">TotalRecovered</span>&nbsp
                  <span style="color:#000"><b>${Global.TotalRecovered}</b></span>
              </div>
          </section>
        `;
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));