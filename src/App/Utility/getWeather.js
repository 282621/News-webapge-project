const proxy = 'https://cors-anywhere.herokuapp.com/'; // PROXY (let api download data on local)
const api = `${proxy}https://api.darksky.net/forecast/ce99a3f610e5d3a6e387bb938f5a1667/${lat},${long}`;

//Replace informations (latitude and longitude and set them to variables using "$" sign)
function getWeather () {
    fetch(api)
        .then(response => {
            return response.json();
        })
}

export default getWeather;