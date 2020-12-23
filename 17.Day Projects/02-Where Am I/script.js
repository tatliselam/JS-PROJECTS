const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const apiKey = "";  // take yours !!!
const whereAmI = function (lat, lng) {
  let regionFromFirstAPI='https://restcountries.eu/rest/v2/name/'
  const url='https://app.geocodeapi.io/api/v1/reverse?apikey=';
  const coordinate=`&point.lat=${lat}&point.lon=${lng}` 
  fetch(url+apiKey+coordinate)
  .then((res) => {
      if(!res.ok)
      throw new Error(`Request failed: ${res.status}`)
      return res.json()
  }).then((data)=>{
    console.log(data)
    let region=data.features['0'].properties.region;
    let country=data.features['0'].properties.country;
    console.log(`You are in ${region}, country of ${country}`)
    return fetch (`${regionFromFirstAPI}${country}`)
    .then((res) => {
      if(!res.ok)
      throw new Error(`Request failed: ${res.status}`)
      return res.json()
  }).then(([data])=>{
    //console.log(data)
      renderCountry(data)
    }) 
  })
};
btn.addEventListener("click", displayCountry);