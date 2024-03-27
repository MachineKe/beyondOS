 //dogAPI
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// stuff you dont have to wait for
window.onload = getNewDog;
const dogImageDiv = document.getElementById('dogImage');

const dogBtn = document.getElementById('dogButton');
dogBtn.onclick = getNewDog;

function getNewDog() {
// stuff you have to wait for
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
  console.log(json.message)
  dogImageDiv.innerHTML = `<img src='${json.message}' height=320 width=300/>`
})
}
