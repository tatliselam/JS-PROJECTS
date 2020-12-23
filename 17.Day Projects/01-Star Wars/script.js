
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";
// let starWars = (endpoint)=>{
//     if(endpoint.ok){
//         return endpoint.json()
//       }
//       throw new Error('request failed')
// }
//   let handleFailure=(networkError) =>{
//     console.log(networkError.message)
//   }
//   let handleJsonResponse=(jsonResponse) =>{  
//     console.log(jsonResponse)
//   }
//   fetch(url).then(starWars, handleFailure).then(handleJsonResponse);
  function starWars (endpoint){
    return fetch(url + endpoint)
    .then(response=>{
        return response.ok
        ? response.json()
        : Promise.reject(Error('Request failed')); 
    }).then(data=>{
        console.log(data)
        console.log(`There are ${data.length} ${endpoint} in Starwars history.`);
        data.forEach((item)=>{
            console.log(`Film episode_${item.episode_id} title is "${item.title}".`)
        })
    }).catch(error=>{
        console.warn(error);
    })
}
  //starWars('films');
  function starWarsCount (endpoint){
    return fetch(url + endpoint)
    .then(response=>{
        return response.ok
        ? response.json()
        : Promise.reject(Error('Request failed')); 
    })
}
Promise.all([starWarsCount('films'), starWarsCount('planets'), starWarsCount('species'), starWarsCount('people'), starWarsCount('starships'), starWarsCount('vehicles')])
.then(([films, planets])=>{
    //console.log(data)
    output.innerText= `There are ${films.length} films, ${planets.length}  planets in Starwars history.`
}).catch(error=>{
    console.warn(error);
    output.innerText = 'Request failed';
}).finally(()=>{
    spinner.src="images/star-wars-ship-2.png"
})