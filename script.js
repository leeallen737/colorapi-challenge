const body = document.querySelector('body');
const main = document.querySelector('main');

//generate random number
const randomNumber = Math.floor((Math.random() * 15) + 1); 


const URL = `https://reqres.in/api/color/${randomNumber}`;

fetch(URL)

.then(response => {
    return response.json()
})

.then(data => {
    console.log(data.data.color)
    body.style.backgroundColor = data.data.color;
    main.innerHTML = `<p>${data.data.color}</p>`;
    
}).catch( (error) => {
    body.style.backgroundColor = 'gray';
    main.innerHTML = `<p class='error' >API has no data!</p>`;
} )