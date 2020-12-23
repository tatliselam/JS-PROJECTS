const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "Oooops", "More", "Next", "Continue", "Keep going", "Click me", "A new one", "Try Again", "So Close", "Well Done"];

async function getJson(){
  try {
   let response=await fetch('https://jsonplaceholder.typicode.com/todos');
   if(response.ok){
     let jsonResponse=await response.json()
     //console.log(jsonResponse);
     //for(let i=0; i<jsonResponse.length; i++)
     renderResponse(jsonResponse)
   }
   throw new Error('Request failed!');
  } catch(err) {
    console.log(err)
  }
}
let requestOptions={
  method: 'POST',
  body:JSON.stringify({userId: 1}),
  headers:{
    "Content-Type": "application/json",
  }
}
async function sendJson(){
  try {
   let response=await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
   if(response.ok){
     let jsonResponse=await response.json()
     console.log(jsonResponse);
     //for(let i=0; i<jsonResponse.length; i++)
     //renderResponse(jsonResponse)
   }
   throw new Error('Request failed!');
  } catch(err) {
    console.log(err)
  }
}











// const renderResponse = (jsonResponse) => {
//   const jsonSelection = Math.floor(Math.random() * 10);
//   sendJson();
//   jsonButton.innerHTML = `${collection[jsonSelection]}!`;
//   display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// }

// jsonButton.addEventListener('click', getJson);

